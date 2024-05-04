import { useEffect, useRef } from 'react'
import p5, { Graphics } from 'p5'

interface SketchProps {
    canvasRef: React.RefObject<HTMLDivElement>
}
let backgroundImage: p5.Image
let noiseOffset = 0

const Sketch: React.FC<SketchProps> = ({ canvasRef }) => {
    const sketchRef = useRef<p5>()

    useEffect(() => {
        const sketch = (p: p5) => {
            let g: Graphics
            p.preload = () => {
                backgroundImage = p.loadImage('純背景.png')
            }
            p.setup = () => {
                g = p.createGraphics(800, 800)
                p.createCanvas(window.innerWidth, window.innerHeight).parent(canvasRef.current!)
                // p.angleMode(p.DEGREES)
                p.colorMode(p.HSB, 360, 100, 100, 100)
                // p.noStroke()
                // p.strokeWeight(70)
            }

            p.draw = () => {
                p.background(backgroundImage)
                p.tint(230, 230)
                p.image(g, 0, 0)
                noiseOffset += 0.01

                hyperGradient2(g)
                // shadow(g)
            }
            function linearGradient(
                g: Graphics,
                sX: number,
                sY: number,
                eX: number,
                eY: number,
                colorS: p5.Color,
                colorE: p5.Color
            ) {
                let gradient = g.drawingContext.createLinearGradient(sX, sY, eX, eY)
                gradient.addColorStop(0, colorS.toString())
                gradient.addColorStop(1, colorE.toString())
                g.drawingContext.fillStyle = gradient
                //g.drawingContext.strokeStyle = gradient
            }

            function radialGradient(
                g: Graphics,
                sX: number,
                sY: number,
                sR: number,
                eX: number,
                eY: number,
                eR: number,
                colorS: p5.Color,
                colorE: p5.Color
            ) {
                let gradient = g.drawingContext.createRadialGradient(sX, sY, sR, eX, eY, eR)
                gradient.addColorStop(0, colorS.toString())
                gradient.addColorStop(1, colorE.toString())
                g.drawingContext.fillStyle = gradient
                // g.drawingContext.strokeStyle = gradient
            }

            function hyperGradient2(g: Graphics) {
                linearGradient(
                    g,
                    g.width / 2,
                    200, // Start pX, pY, start circle radius
                    g.width / 2,
                    g.height - 200, // End pX, pY, End circle radius
                    p.color(255), // End color
                    p.color(208, 31, 75, 100) // Start color
                )
                g.stroke(255, 0.5)
                g.strokeWeight(10)
                g.ellipse(g.width / 2, g.height / 2, 400, 400)
                // irregularEllipse(g, g.width / 2, g.height / 2, 200)

                radialGradient(
                    g,
                    g.width - 100,
                    100,
                    0, // Start pX, pY, start circle radius
                    g.width - 100,
                    100,
                    550, // End pX, pY, End circle radius

                    p.color(31, 33, 95, 100), // End color
                    p.color(48, 14, 91, 0) // Start color
                )
                g.noStroke()
                g.ellipse(g.width / 2, g.height / 2, 400, 400)

                // irregularEllipse(g, g.width / 2, g.height / 2, 200)
            }
            function shadow(g: Graphics) {
                g.drawingContext.shadowOffsetX = 10
                g.drawingContext.shadowOffsetY = -10
                g.drawingContext.shadowBlur = 16
                g.drawingContext.shadowColor = p.color(0, 0, 100, 1)
            }
            function irregularEllipse(g: Graphics, x: number, y: number, diameter: number) {
                p.push()
                p.translate(x, y)
                p.beginShape()

                for (let i = 0; i < 360; i += 45) {
                    const rad = p.radians(i)

                    // Using noise function for smooth randomness
                    const offset = p.map(p.noise(rad + noiseOffset), 0, 1, 60, 80)

                    const xPos = (diameter / 2 + offset) * p.cos(rad)
                    const yPos = (diameter / 2 + offset) * p.sin(rad)

                    p.curveVertex(xPos, yPos)
                }
                p.endShape(p.CLOSE)
                p.pop()
            }
        }

        sketchRef.current = new p5(sketch)

        return () => {
            sketchRef.current?.remove()
        }
    }, [])

    return <div ref={canvasRef} />
}

export default Sketch
