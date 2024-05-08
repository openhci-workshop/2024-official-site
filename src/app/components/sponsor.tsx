import React from 'react'
import Image from 'next/image'

import AJA_Logo from '../../../public/images/AJA_Logo.png'
import LINE_Green from '../../../public/images/LINE_Green.svg'
import LINE_White from '../../../public/images/LINE_White.svg'
import NYCU_Logo from '../../../public/images/NYCU_Logo.jpg'

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
                <Image src={NYCU_Logo} width={300} height={300} alt='NYCU_Logo' className='rounded-md col-span-3 md:col-span-2 w-full h-full bg-white' />
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
            <div className="grid grid-cols-6 gap-3 mb-5 w-full">
                {/* <Image
                    src={'/images/album-cover.png'}
                    width={300}
                    height={300}
                    alt='sponsor'
                    className='rounded-md'
                /> */}

                {/* Image */}
                <Image src={LINE_White} width={300} height={300} alt='Line_Logo_W' className='rounded-md col-span-3 md:col-span-2 w-full h-full bg-green-500 p-2' />
                <Image src={AJA_Logo} width={300} height={300} alt='AJA_Logo' className='rounded-md col-span-3 md:col-span-2 w-full h-full bg-white' />
                <Image src={LINE_White} width={300} height={300} alt='Line_Logo_W' className='rounded-md col-span-3 md:col-span-2 w-full h-full bg-green-500 p-2' />
                <Image src={AJA_Logo} width={300} height={300} alt='AJA_Logo' className='rounded-md col-span-3 md:col-span-2 w-full h-full bg-white' />
            </div>
        </div>
    )
}