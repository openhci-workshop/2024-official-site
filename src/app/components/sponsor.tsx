import React from 'react'
import Image from 'next/image'

import TAICHI_Logo from '../../../public/images/TAICHI_Logo.png'

export default function Sponsor() {
    return (
        <div
            data-aos="fade-up"
            data-aos-offset="200"
            className="flex flex-col items-start w-full gap-[22px] xl:gap-[40px] "
        >
            <span className="font-semibold text-md xl:text-3xl">贊助單位</span>
            <span className="text-xs font-semibold xl:text-xl">白金級</span>
            <div className="grid grid-cols-6 gap-3 mb-5 w-full">
                {/* <Image
                    src={'/images/album-cover.png'}
                    width={300}
                    height={300}
                    alt='sponsor'
                    className='rounded-md'
                /> */}

                {/* Image */}


                <div className="col-span-3 md:col-span-2 border-2 border-black h-[105px]">
                    <Image src={TAICHI_Logo} width={300} height={300} alt='sponsor' className='rounded-md' />
                </div>
                <div className="col-span-3 md:col-span-2 border-2 border-black h-[105px]">
                    <Image src={TAICHI_Logo} width={300} height={300} alt='sponsor' className='rounded-md' />
                </div>
                <div className="col-span-3 md:col-span-2 border-2 border-black h-[105px]">
                    <Image src={TAICHI_Logo} width={300} height={300} alt='sponsor' className='rounded-md' />
                </div>
                <div className="col-span-3 md:col-span-2 border-2 border-black h-[105px]">
                    <Image src={TAICHI_Logo} width={300} height={300} alt='sponsor' className='rounded-md' />
                </div>
                <div className="col-span-3 md:col-span-2 border-2 border-black h-[105px]">
                    <Image src={TAICHI_Logo} width={300} height={300} alt='sponsor' className='rounded-md' />
                </div>
            </div>
            <span className="text-xs font-semibold xl:text-xl">金級</span>
            <div className="grid grid-cols-6 gap-3 mb-5 w-full">
                {/* <Image
                    src={'/images/album-cover.png'}
                    width={300}
                    height={300}
                    alt='sponsor'
                    className='rounded-md'
                /> */}

                {/* Image */}


                <div className="col-span-3 md:col-span-2 border-2 border-black h-[105px]">
                    <Image src={TAICHI_Logo} width={300} height={300} alt='sponsor' className='rounded-md' />
                </div>
                <div className="col-span-3 md:col-span-2 border-2 border-black h-[105px]">
                    <Image src={TAICHI_Logo} width={300} height={300} alt='sponsor' className='rounded-md' />
                </div>
                <div className="col-span-3 md:col-span-2 border-2 border-black h-[105px]">
                    <Image src={TAICHI_Logo} width={300} height={300} alt='sponsor' className='rounded-md' />
                </div>
                <div className="col-span-3 md:col-span-2 border-2 border-black h-[105px]">
                    <Image src={TAICHI_Logo} width={300} height={300} alt='sponsor' className='rounded-md' />
                </div>
                <div className="col-span-3 md:col-span-2 border-2 border-black h-[105px]">
                    <Image src={TAICHI_Logo} width={300} height={300} alt='sponsor' className='rounded-md' />
                </div>
            </div>
            <span className="text-xs font-semibold xl:text-xl">銀級</span>
            <div className="grid grid-cols-6 gap-3 mb-5 w-full">
                {/* <Image
                    src={'/images/album-cover.png'}
                    width={300}
                    height={300}
                    alt='sponsor'
                    className='rounded-md'
                /> */}

                {/* Image */}


                <div className="col-span-3 md:col-span-2 border-2 border-black h-[105px]">
                    <Image src={TAICHI_Logo} width={300} height={300} alt='sponsor' className='rounded-md' />
                </div>
                <div className="col-span-3 md:col-span-2 border-2 border-black h-[105px]">
                    <Image src={TAICHI_Logo} width={300} height={300} alt='sponsor' className='rounded-md' />
                </div>
                <div className="col-span-3 md:col-span-2 border-2 border-black h-[105px]">
                    <Image src={TAICHI_Logo} width={300} height={300} alt='sponsor' className='rounded-md' />
                </div>
                <div className="col-span-3 md:col-span-2 border-2 border-black h-[105px]">
                    <Image src={TAICHI_Logo} width={300} height={300} alt='sponsor' className='rounded-md' />
                </div>
                <div className="col-span-3 md:col-span-2 border-2 border-black h-[105px]">
                    <Image src={TAICHI_Logo} width={300} height={300} alt='sponsor' className='rounded-md' />
                </div>
            </div>
        </div>
    )
}
