import React from 'react'
import Image from 'next/image'

import AJA_Logo from '../../../public/images/AJA_Logo.png'
import LINE_White from '../../../public/images/LINE_White.svg'
import NYCU_Logo from '../../../public/images/NYCU_Logo.png'

export default function Sponsor() {
    return (
        <div
            data-aos="fade-up"
            data-aos-offset="200"
            className="xl:pt-16 pt-8 flex flex-col items-start w-full gap-[22px] xl:gap-[40px] "
        >
            <span className="font-semibold text-md md:text-2xl xl:text-3xl drop-shadow-[0px_5px_10px_rgba(256,256,256,1)]">
                贊助單位
            </span>
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
                <Image
                    src={NYCU_Logo}
                    width={300}
                    height={300}
                    alt="NYCU_Logo"
                    className="rounded-md col-span-3 md:col-span-2 bg-white aspect-[2/1] object-contain"
                />
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
            </div>
            <span className="text-xs font-semibold xl:text-xl">銀級</span>
            <div className="grid grid-cols-6 gap-3 mb-5 w-full ">
                {/* <Image
                    src={'/images/album-cover.png'}
                    width={300}
                    height={300}
                    alt='sponsor'
                    className='rounded-md'
                /> */}

                {/* Image */}
                <Image
                    src={LINE_White}
                    width={300}
                    height={300}
                    alt="Line_Logo_W"
                    className="rounded-md col-span-3 md:col-span-2 bg-green-500 p-2 aspect-[2/1] object-contain"
                />
                <Image
                    src={AJA_Logo}
                    width={300}
                    height={300}
                    alt="AJA_Logo"
                    className="rounded-md col-span-3 md:col-span-2 bg-white aspect-[2/1] object-contain"
                />
            </div>
        </div>
    )
}
