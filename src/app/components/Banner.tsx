'use client'

import { Button } from '@nextui-org/react'

export default function Banner() {
    return (
        <div className="w-full h-screen ">
            <div className="absolute z-10 grid w-full h-screen grid-cols-12 text-right grid-rows-10">
                <div
                    style={{ filter: 'blur(0.8px)' }}
                    className="blur-lg	 tracking-widest col-end-11 col-span-12 row-start-5 text-[96px] leading-4 font-kompot text-white drop-shadow-3xl 	"
                >
                    RESILIENCE
                </div>
                <div
                    style={{ filter: 'blur(0.8px)' }}
                    className="col-span-12 col-start-2 pt-6 text-5xl leading-4 tracking-widest text-left text-white blur-lg row-start-8 font-kompot drop-shadow-3xl "
                >
                    6
                </div>
                <div
                    style={{ filter: 'blur(0.8px)' }}
                    className="col-span-12 col-start-2 pt-12 pl-10 text-5xl leading-4 tracking-widest text-left text-white blur-lg row-start-8 font-kompot drop-shadow-3xl "
                >
                    22
                </div>
                <div
                    style={{ filter: 'blur(0.8px)' }}
                    className="col-span-12 col-start-2 pt-6 text-5xl leading-4 tracking-widest text-left text-white blur-lg row-start-9 font-kompot drop-shadow-3xl "
                >
                    6
                </div>
                <div
                    style={{ filter: 'blur(0.8px)' }}
                    className="col-span-12 col-start-2 pt-12 pl-10 text-5xl leading-4 tracking-widest text-left text-white blur-lg row-start-9 font-kompot drop-shadow-3xl "
                >
                    23
                </div>
                <div
                    style={{ filter: 'blur(0.8px)' }}
                    className="col-span-12 col-end-11 row-start-6 text-5xl leading-none tracking-widest text-white font-kompot drop-shadow-3xl backdrop-blur "
                >
                    24 OPENHCI
                </div>
                <div
                    style={{ filter: 'blur(0.8px)' }}
                    className="col-span-8 col-end-11 row-start-7 text-3xl leading-none tracking-widest text-white font-kompot drop-shadow-3xl backdrop-blur "
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
            <div className="w-full h-screen bg-[url('/純背景.png')] bg-cover brightness-90 z-0 absolute" />
        </div>
    )
}
