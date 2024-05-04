'use client'
import { useState, useRef } from 'react'
import { Button } from '@nextui-org/react'
import Sketch from './SketchSix'
import p5Types from 'p5'

let canvas: p5Types.Renderer // 宣告全局變數

export default function Banner() {
    const canvasRef = useRef<HTMLDivElement>(null)

    return (
        <>
            <div className="w-full h-screen ">
                <div className="absolute z-20 hidden w-full h-screen grid-cols-12 text-right md:grid grid-rows-10">
                    <div
                        style={{ filter: 'blur(0.8px)' }}
                        className="	 tracking-widest col-end-11 col-span-12 row-start-5 text-[72px] md:text-[96px] leading-4 font-kompot text-white drop-shadow-3xl 	"
                    >
                        RESILIENCE
                    </div>
                    <div
                        style={{ filter: 'blur(0.8px)' }}
                        className="col-span-12 col-start-2 pt-6 text-5xl leading-4 tracking-widest text-left text-white row-start-8 font-kompot drop-shadow-3xl "
                    >
                        6
                    </div>
                    <div
                        style={{ filter: 'blur(0.8px)' }}
                        className="col-span-12 col-start-2 pt-12 pl-10 text-5xl leading-4 tracking-widest text-left text-white row-start-8 font-kompot drop-shadow-3xl "
                    >
                        22
                    </div>
                    <div
                        style={{ filter: 'blur(0.8px)' }}
                        className="col-span-12 col-start-2 pt-6 text-5xl leading-4 tracking-widest text-left text-white row-start-9 font-kompot drop-shadow-3xl "
                    >
                        6
                    </div>
                    <div
                        style={{ filter: 'blur(0.8px)' }}
                        className="col-span-12 col-start-2 pt-12 pl-10 text-5xl leading-4 tracking-widest text-left text-white row-start-9 font-kompot drop-shadow-3xl "
                    >
                        23
                    </div>
                    <div
                        style={{ filter: 'blur(0.8px)' }}
                        className="col-span-8 col-end-11 row-start-6 text-5xl leading-none tracking-widest text-white blur-lg font-kompot drop-shadow-3xl "
                    >
                        24&apos; OPENHCI
                    </div>
                    <div
                        style={{ filter: 'blur(0.8px)' }}
                        className="col-span-8 col-end-11 row-start-7 text-3xl leading-none tracking-widest text-white blur-lg font-kompot drop-shadow-3xl "
                    >
                        第十四屆人機互動工作坊
                    </div>
                    <Button
                        variant="bordered"
                        style={{ filter: 'blur(0.5px)', borderColor: '#F2D4CD' }}
                        className="col-span-2 col-end-11 text-xl leading-none tracking-widest text-white rounded-full shadow border-3 row-start-8 font-kompot drop-shadow-3xl backdrop-blur "
                    >
                        立即報名
                    </Button>
                </div>
                <div className="absolute z-20 flex flex-col w-full h-screen gap-32 px-10 py-64 text-right md:hidden ">
                    <div className="flex flex-col items-center justify-center gap-4">
                        <div
                            style={{ filter: 'blur(0.8px)' }}
                            className="self-end text-6xl tracking-widest text-white font-kompot drop-shadow-3xl "
                        >
                            RESILIENCE
                        </div>

                        <div
                            style={{ filter: 'blur(0.8px)' }}
                            className="self-end text-3xl leading-none tracking-widest text-white blur-lg font-kompot drop-shadow-3xl "
                        >
                            24&apos; OPENHCI
                        </div>
                        <div
                            style={{ filter: 'blur(0.8px)' }}
                            className="self-end text-xl leading-none tracking-widest text-white blur-lg font-kompot drop-shadow-3xl "
                        >
                            第十四屆人機互動工作坊
                        </div>
                        <Button
                            variant="bordered"
                            style={{ filter: 'blur(0.5px)', borderColor: '#F2D4CD' }}
                            className="self-end w-1/3 text-lg leading-none tracking-widest text-white rounded-full shadow border-3 font-kompot drop-shadow-3xl backdrop-blur "
                        >
                            立即報名
                        </Button>
                    </div>
                    <div className="flex flex-col items-start justify-start ">
                        <div
                            style={{ filter: 'blur(0.8px)' }}
                            className="pt-6 text-6xl leading-3 tracking-widest text-left text-white font-kompot drop-shadow-3xl"
                        >
                            6
                        </div>
                        <div
                            style={{ filter: 'blur(0.8px)' }}
                            className="pt-4 pl-10 text-6xl leading-3 tracking-widest text-left text-white font-kompot drop-shadow-3xl"
                        >
                            22
                        </div>
                        <div
                            style={{ filter: 'blur(0.8px)' }}
                            className="pt-6 text-6xl leading-3 tracking-widest text-left text-white font-kompot drop-shadow-3xl "
                        >
                            6
                        </div>
                        <div
                            style={{ filter: 'blur(0.8px)' }}
                            className="pt-4 pl-10 text-6xl leading-3 tracking-widest text-left text-white font-kompot drop-shadow-3xl"
                        >
                            23
                        </div>
                    </div>
                </div>
                {/* <div className="absolute z-10 w-full h-screen">
                    <Sketch canvasRef={canvasRef} />
                </div> */}
                <div className="w-full h-screen bg-[url('/GIF_Phone.gif')] md:bg-[url('/GIF_Tablet_直.gif')] xl:bg-[url('/GIF_Desktop.gif')] bg-cover brightness-90 z-0 absolute" />
            </div>
            <div id="intro"></div>
        </>
    )
}
