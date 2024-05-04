import React, { useEffect, useRef } from 'react'
import p5 from 'p5'

interface IParticle {
    x: number
    y: number
    vx: number
    vy: number
    radius: number
    mass: number
    update: (p: p5, dt: number) => void
    draw: (p: p5) => void
    addForce: (fx: number, fy: number) => void
    collideWithMouse: (mouseX: number, mouseY: number, mouseRadius: number) => void
    attract: (other: IParticle, strength: number) => void
    repel: (other: IParticle, strength: number) => void
    applyRestorativeForce: () => void
}

let backgroundImage: p5.Image

class DistanceConstraint {
    particleA: IParticle
    particleB: IParticle
    length: number
    minLength: number // 最小长度限制
    maxLength: number // 最大长度限制

    constructor(particleA: IParticle, particleB: IParticle, length: number, minLength: number, maxLength: number) {
        this.particleA = particleA
        this.particleB = particleB
        this.length = length
        this.minLength = minLength * 0.5 // 更小的最小距离
        this.maxLength = maxLength * 1.5 // 更大的最大距离
    }

    update() {
        if (!this.particleA || !this.particleB) {
            console.error('DistanceConstraint update called with undefined particle')
            return
        }
        let dx = this.particleB.x - this.particleA.x
        let dy = this.particleB.y - this.particleA.y
        let distance = Math.sqrt(dx * dx + dy * dy)
        let difference = this.length - distance
        let percent = difference / distance / 2
        let offsetX = dx * percent
        let offsetY = dy * percent

        // 新的位置
        let newAX = this.particleA.x - offsetX
        let newAY = this.particleA.y - offsetY
        let newBX = this.particleB.x + offsetX
        let newBY = this.particleB.y + offsetY

        // 新距離
        let newDistance = Math.sqrt((newBX - newAX) ** 2 + (newBY - newAY) ** 2)

        // 确保新距离在最小和最大范围内
        if (newDistance > this.maxLength) {
            difference = this.maxLength - distance
            percent = difference / distance / 2
        } else if (newDistance < this.minLength) {
            difference = this.minLength - distance
            percent = difference / distance / 2
        }
        offsetX = dx * percent
        offsetY = dy * percent

        // 更新位置
        this.particleA.x -= offsetX
        this.particleA.y -= offsetY
        this.particleB.x += offsetX
        this.particleB.y += offsetY
    }
}

const Sketch = () => {
    const canvasRef = useRef<HTMLDivElement>(null)
    const substeps = 10

    useEffect(() => {
        const sketch = (p: p5) => {
            let blobs: any[] = []
            let mouseRadius = 80

            p.preload = () => {
                backgroundImage = p.loadImage('純背景.png')
            }
            p.setup = () => {
                p.createCanvas(window.innerWidth, window.innerHeight).parent(canvasRef.current!)
                p.colorMode(p.HSB, 370, 100, 100, 100)
                p.pixelDensity(1)
                p.frameRate(60)
                p.noCursor()
                for (let i = 0; i < 3; i++) {
                    let radius = p.random(100, 300)
                    blobs.push(
                        generateBlob(p.random(radius, p.width - radius), p.random(radius, p.height - radius), radius, p)
                    )
                }
            }

            p.draw = () => {
                p.tint(230, 230)
                p.background(backgroundImage)

                p.fill(0, 0, 100, 25)
                p.noStroke()
                p.ellipse(p.mouseX, p.mouseY, mouseRadius) // 繪制跟隨滑鼠的圓圈
                const dt = 1 / 60 // 更新的時間間隔
                const sdt = dt / substeps // 分割时间步

                blobs.forEach((blob) => {
                    for (let sub = 0; sub < substeps; sub++) {
                        blob.constraints.forEach((constraint) => {
                            constraint.update()
                        })
                        blob.particles.forEach((particle) => {
                            particle.collideWithMouse(p.mouseX, p.mouseY, mouseRadius)
                            particle.update(p, sdt)
                        })
                        adjustParticlesToArea(blob.particles, blob.initialArea)
                    }

                    p.stroke(0, 0, 100, 50)
                    // p.fill(blob.color)
                    p.fill(0, 0, 100, 2)
                    p.drawingContext.shadowOffsetX = 5
                    p.drawingContext.shadowOffsetY = -5
                    p.drawingContext.shadowBlur = 10
                    p.drawingContext.shadowColor = 'white'
                    p.beginShape()

                    blob.particles.forEach((particle) => {
                        p.curveVertex(particle.x, particle.y)
                    })

                    p.endShape(p.CLOSE)
                })
            }
            function adjustParticlesToArea(particles, targetArea) {
                const currentArea = polygonArea(particles)
                if (currentArea === 0) return // Avoid division by zero
                const adjustmentFactor = Math.sqrt(targetArea / currentArea)
                const centroid = particles.reduce((acc, p) => ({ x: acc.x + p.x, y: acc.y + p.y }), { x: 0, y: 0 })
                centroid.x /= particles.length
                centroid.y /= particles.length
                particles.forEach((p) => {
                    p.x = centroid.x + (p.x - centroid.x) * adjustmentFactor
                    p.y = centroid.y + (p.y - centroid.y) * adjustmentFactor
                })
            }
            function polygonArea(particles) {
                let area = 0
                for (let i = 0, j = particles.length - 1; i < particles.length; j = i++) {
                    area += (particles[j].x + particles[i].x) * (particles[j].y - particles[i].y)
                }
                return Math.abs(area / 2)
            }
            const geometry = {
                normalize: (coord) => {
                    let mag = Math.sqrt(coord.x * coord.x + coord.y * coord.y)
                    return mag > 0 ? { x: coord.x / mag, y: coord.y / mag } : { x: 0, y: 0 }
                },
                limit: (coord, maxLength) => {
                    let mag = Math.sqrt(coord.x * coord.x + coord.y * coord.y)
                    if (mag > maxLength) {
                        return { x: (coord.x / mag) * maxLength, y: (coord.y / mag) * maxLength }
                    }
                    return coord
                },
            }
            function applyPhysics(particle, dt) {
                // 重力加速度
                const gravity = 9.8
                particle.vy += gravity * dt // 假设单位是像素/秒²

                // 更新位置
                particle.x += particle.vx * dt
                particle.y += particle.vy * dt

                if (particle.x + particle.radius > p.width) {
                    particle.x = p.width - particle.radius // 重置位置到右边界
                    particle.vx *= -0.5
                } else if (particle.x - particle.radius < 0) {
                    particle.x = particle.radius // 重置位置到左边界
                    particle.vx *= -0.5
                }

                if (particle.y + particle.radius > p.height) {
                    particle.y = p.height - particle.radius // 重置位置到底部边界
                    particle.vy *= -0.5
                } else if (particle.y - particle.radius < 0) {
                    particle.y = particle.radius // 重置位置到顶部边界
                    particle.vy *= -0.5
                }
            }
            const generateBlob = (offsetX: number, offsetY: number, radius: number, p: p5) => {
                const color = p.color(p.random(360), p.random(30, 100), 100)
                const effectiveVertexDistance = 10

                const particles: IParticle[] = []
                const constraints = []
                const numPoints = Math.floor((radius * p.TWO_PI) / effectiveVertexDistance)

                for (let i = 0; i < numPoints; i++) {
                    let angle = p.TWO_PI * (i / numPoints)
                    let x = offsetX + p.cos(angle) * radius
                    let y = offsetY + p.sin(angle) * radius
                    let overlapping = true
                    let safety = 0
                    while (overlapping && safety < 1000) {
                        overlapping = false
                        let x = offsetX + p.cos(angle) * radius
                        let y = offsetY + p.sin(angle) * radius

                        for (let j = 0; j < particles.length; j++) {
                            let other = particles[j]
                            let d = p.dist(x, y, other.x, other.y)
                            if (d < other.radius + 10) {
                                // '10' 是新粒子的半径
                                overlapping = true
                                angle += p.random(0.1) // 轻微调整角度
                                break
                            }
                        }
                        safety++
                    }

                    if (safety >= 1000) {
                        console.log("Couldn't place a particle, skipped.")
                        continue
                    }
                    const particle: IParticle = {
                        x,
                        y,
                        vx: p.random(-1, 1),
                        vy: p.random(-1, 1),
                        radius: 10,
                        mass: 1,

                        update: function (p, dt) {
                            let velocity = { x: this.vx, y: this.vy }
                            velocity = geometry.normalize(velocity)
                            velocity = geometry.limit(velocity, 5) // Limit speed to 5 units per frame
                            this.vx = velocity.x
                            this.vy = velocity.y

                            // Apply damping
                            this.vx *= 0.95 // Damping factor for x velocity
                            this.vy *= 0.95 // Damping factor for y velocity

                            this.x += this.vx * dt
                            this.y += this.vy * dt
                            applyPhysics(this, dt) // 应用物理效果
                        },

                        draw: function (p) {
                            p.vertex(this.x, this.y)
                        },
                        addForce: function (fx, fy) {
                            this.vx += fx
                            this.vy += fy
                        },

                        collideWithMouse: function (mouseX, mouseY, mouseRadius) {
                            const dx = mouseX - this.x
                            const dy = mouseY - this.y
                            const distance = Math.sqrt(dx * dx + dy * dy)
                            const minDist = mouseRadius + this.radius
                            if (distance < minDist) {
                                //粒子與滑鼠發生了碰撞
                                const overlap = minDist - distance
                                const adjustX = (dx / distance) * overlap
                                const adjustY = (dy / distance) * overlap
                                this.x -= adjustX
                                this.y -= adjustY
                            }
                        },
                    }
                    particles.push(particle)
                }
                particles.forEach((particle, i) => {
                    let nextParticle = particles[(i + 1) % particles.length]
                    constraints.push(new DistanceConstraint(particle, nextParticle, 10, 8, 12))
                })

                for (let i = 0; i < particles.length; i++) {
                    const nextIndex = (i + 1) % particles.length
                    constraints.push(new DistanceConstraint(particles[i], particles[nextIndex], 10, 8, 12))
                }

                constraints.push(
                    new DistanceConstraint(particles[0], particles[numPoints - 1], effectiveVertexDistance)
                )

                // return { particles, color, constraints }

                const blob = { particles, color, constraints }
                blob.initialArea = polygonArea(blob.particles) // Calculate and store initial area
                return blob
            }
        }

        const myP5 = new p5(sketch)

        return () => {
            myP5.remove()
        }
    }, [])

    return <div ref={canvasRef} />
}

export default Sketch
