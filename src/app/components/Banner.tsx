'use client'
import { useState, useRef } from 'react'
import { Button } from '@nextui-org/react'
import Sketch from './SketchSix'
import p5Types from 'p5'
import Image from 'next/image'
import Link from 'next/link'

let canvas: p5Types.Renderer

export default function Banner() {
    const canvasRef = useRef<HTMLDivElement>(null)
    const TabletLayout = () => {
        return (
            <div className="absolute z-20 hidden w-full h-screen grid-cols-12 text-right sm:grid lg:hidden grid-rows-12">
                <div className="flex flex-col items-end justify-end col-span-7 col-end-11 row-span-4 row-start-3 translate-y-20">
                    <Image src="/banner/合併.png" alt="24OPENHCI" width={600} height={50} className="" priority />
                    <Button
                        variant="bordered"
                        style={{ borderColor: '#F2D4CD' }}
                        className="w-1/3 p-4 text-base leading-none tracking-widest text-white rounded-full shadow border-3 font-kompot drop-shadow-3xl backdrop-blur"
                        onClick={() => window.open('https://drive.google.com/file/d/1CCg_iWqjTVXiV6F3eZ9r4hbQUHYuU7vw/view?usp=sharing', '_blank')}
                    >
                        {/* <Link href="#enroll">成果手冊 </Link> */}
                        {/* <Link href='https://drive.google.com/file/d/1CCg_iWqjTVXiV6F3eZ9r4hbQUHYuU7vw/view?usp=sharing'> */}
                        成果手冊
                        {/* </Link> */}
                    </Button>
                </div>
                <div className="col-span-3 col-start-2 text-left text-white translate-y-8 row-start-9 font-kompot ">
                    <Image src="/banner/date.png" alt="date" width={200} height={100} priority />
                </div>
            </div>
        )
    }
    const DesktopLayout = () => {
        return (
            <div className="absolute z-20 items-end justify-end hidden w-full h-screen grid-cols-12 xl:grid 2xl:hidden grid-rows-10">
                <div className="flex flex-col items-end justify-end col-span-6 col-end-12 ml-12  row-span-1 row-start-6 scale-110 translate-y-12 ">
                    <Image src="/banner/合併.png" alt="24OPENHCI" width={600} height={50} priority />

                    <Button
                        variant="bordered"
                        style={{ borderColor: '#F2D4CD' }}
                        className="w-1/3 text-xl leading-none tracking-widest text-white rounded-full shadow border-3 font-kompot drop-shadow-3xl backdrop-blur "
                        onClick={() => window.open('https://drive.google.com/file/d/1CCg_iWqjTVXiV6F3eZ9r4hbQUHYuU7vw/view?usp=sharing', '_blank')}
                    >
                        {/* <Link href="#enroll">成果手冊 </Link> */}
                        {/* <Link href='https://drive.google.com/file/d/1CCg_iWqjTVXiV6F3eZ9r4hbQUHYuU7vw/view?usp=sharing'> */}
                        成果手冊
                        {/* </Link> */}
                    </Button>
                </div>

                <div className="col-span-3 col-start-1 ml-12 text-left text-white translate-y-8 row-start-9 font-kompot ">
                    <Image src="/banner/date.png" alt="date" width={230} height={100} priority />
                </div>
            </div>
        )
    }
    const XlDesktopLayout = () => {
        return (
            <div className="absolute z-20 items-end justify-end hidden w-full h-screen grid-cols-12 2xl:grid grid-rows-10">
                <div className="flex flex-col items-end justify-end col-span-6 col-end-12 ml-12  row-span-1 row-start-5 scale-110 translate-y-12 ">
                    <Image src="/banner/合併.png" alt="24OPENHCI" width={600} height={50} priority />

                    <Button
                        variant="bordered"
                        style={{ borderColor: '#F2D4CD' }}
                        className="w-1/3 text-xl leading-none tracking-widest text-white rounded-full shadow border-3 font-kompot drop-shadow-3xl backdrop-blur "
                        onClick={() => window.open('https://drive.google.com/file/d/1CCg_iWqjTVXiV6F3eZ9r4hbQUHYuU7vw/view?usp=sharing', '_blank')}
                    >
                        {/* <Link href="#enroll">成果手冊 </Link> */}
                        {/* <Link href='https://drive.google.com/file/d/1CCg_iWqjTVXiV6F3eZ9r4hbQUHYuU7vw/view?usp=sharing'> */}
                        成果手冊
                        {/* </Link> */}
                    </Button>
                </div>

                <div className="col-span-3 col-start-1 ml-12 text-left text-white translate-y-8 row-start-9 font-kompot ">
                    <Image src="/banner/date.png" alt="date" width={230} height={100} priority />
                </div>
            </div>
        )
    }
    const XLDesktopLayout = () => {
        return (
            <div className="absolute z-20 items-end justify-end hidden w-full h-screen grid-cols-12 2xl:grid grid-rows-10">
                <div className="flex flex-col items-end justify-end col-span-5 col-end-12 row-span-1 row-start-5 scale-110 translate-y-12 ">
                    <Image src="/banner/合併.png" alt="24OPENHCI" width={700} height={50} priority />

                    <Button
                        variant="bordered"
                        style={{ borderColor: '#F2D4CD' }}
                        className="w-1/3 text-xl leading-none tracking-widest text-white rounded-full shadow border-3 font-kompot drop-shadow-3xl backdrop-blur "
                    >
                        <Link href="https://drive.google.com/file/d/1CCg_iWqjTVXiV6F3eZ9r4hbQUHYuU7vw/view?usp=sharing">成果手冊</Link>
                    </Button>
                </div>

                <div className="col-span-3 col-start-1 ml-12 text-left text-white translate-y-8 row-start-9 font-kompot ">
                    <Image src="/banner/date.png" alt="date" width={300} height={100} priority />
                </div>
            </div>
        )
    }
    const LaptopLayout = () => {
        return (
            <div className="absolute z-20 items-end justify-end hidden w-full h-screen grid-cols-12 grid-rows-4 lg:grid xl:hidden">
                <div className="min-w-[500px] flex flex-col items-end justify-end col-span-5 col-end-11 row-span-1 row-start-2 scale-110 translate-y-20 ">
                    <Image src="/banner/合併.png" alt="24OPENHCI" width={600} height={50} priority />

                    <Button
                        variant="bordered"
                        style={{ borderColor: '#F2D4CD' }}
                        className="w-1/3 text-xl leading-none tracking-widest text-white rounded-full shadow border-3 font-kompot drop-shadow-3xl backdrop-blur "
                        onClick={() => window.open('https://drive.google.com/file/d/1CCg_iWqjTVXiV6F3eZ9r4hbQUHYuU7vw/view?usp=sharing', '_blank')}
                    >
                        {/* <Link href="#enroll">成果手冊 </Link> */}
                        {/* <Link href='https://drive.google.com/file/d/1CCg_iWqjTVXiV6F3eZ9r4hbQUHYuU7vw/view?usp=sharing'> */}
                        成果手冊
                        {/* </Link> */}
                    </Button>
                </div>

                <div className="col-span-3  col-start-2 row-start-3 text-left text-white translate-y-32 font-kompot ">
                    <Image src="/banner/date.png" alt="date" width={200} height={100} priority />
                </div>
            </div>
        )
    }
    const PhoneLayout = () => {
        return (
            <div className="absolute z-20 flex flex-col w-full h-screen gap-32 px-10 py-64 text-right min-[500px]:hidden ">
                <div className="flex flex-col items-center justify-center gap-4">
                    <Image src="/banner/合併.png" alt="24OPENHCI" width={600} height={50} priority />
                    <Button
                        variant="bordered"
                        style={{ borderColor: '#F2D4CD' }}
                        className="self-end w-1/3 text-base leading-none tracking-widest text-white rounded-full shadow border-3 font-kompot drop-shadow-3xl backdrop-blur "
                        onClick={() => window.open('https://drive.google.com/file/d/1CCg_iWqjTVXiV6F3eZ9r4hbQUHYuU7vw/view?usp=sharing', '_blank')}
                    >
                        {/* <Link href="#enroll">成果手冊 </Link> */}
                        {/* <Link href='https://drive.google.com/file/d/1CCg_iWqjTVXiV6F3eZ9r4hbQUHYuU7vw/view?usp=sharing'> */}
                        成果手冊
                        {/* </Link> */}
                    </Button>
                </div>
                <div className="flex flex-col items-start justify-start ">
                    <Image src="/banner/date.png" alt="date" width={150} height={100} priority />
                </div>
            </div>
        )
    }
    const SmWindowLayout = () => {
        return (
            <div className="absolute z-20 flex-col w-full h-screen gap-10 px-10 text-right pt-32 min-[500px]:flex hidden min-[640px]:hidden">
                <div className="flex flex-col items-end justify-end ">
                    <Image src="/banner/合併.png" alt="24OPENHCI" width={500} height={50} priority />
                    <Button
                        variant="bordered"
                        style={{ borderColor: '#F2D4CD' }}
                        className="w-1/3 text-base leading-none tracking-widest text-white rounded-full shadow border-3 font-kompot drop-shadow-3xl backdrop-blur"
                        onClick={() => window.open('https://drive.google.com/file/d/1CCg_iWqjTVXiV6F3eZ9r4hbQUHYuU7vw/view?usp=sharing', '_blank')}
                    >
                        {/* <Link href="#enroll">成果手冊 </Link> */}
                        {/* <Link href='https://drive.google.com/file/d/1CCg_iWqjTVXiV6F3eZ9r4hbQUHYuU7vw/view?usp=sharing'> */}
                        成果手冊
                        {/* </Link> */}
                    </Button>
                </div>
                <div className="flex flex-col items-start justify-start ">
                    <Image src="/banner/date.png" alt="date" width={200} height={100} priority />
                </div>
            </div>
        )
    }
    return (
        <>
            <div className="w-full h-screen ">
                <DesktopLayout />
                <TabletLayout />
                <PhoneLayout />
                <LaptopLayout />
                <SmWindowLayout />
                <XlDesktopLayout />
                {/* <div className="absolute z-10 w-full h-screen">
                    <Sketch canvasRef={canvasRef} />
                </div> */}
                <div className="w-full h-screen bg-bottom bg-[url('/GIF_Phone.gif')] sm:bg-[url('/GIF_Tablet_直.gif')] xl:bg-[url('/GIF_Desktop.gif')] bg-cover brightness-90 z-0 absolute" />
            </div>
            <div id="intro"></div>
        </>
    )
}
