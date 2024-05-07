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
            <span className="font-semibold text-md xl:text-3xl md:text-2xl">贊助單位</span>
            <span className="text-xs font-semibold xl:text-xl md:text-xl">白金級</span>
            <div className="grid w-full grid-cols-6 gap-3 mb-5">
                {/* <Image
                    src={'/images/album-cover.png'}
                    width={300}
                    height={300}
                    alt='sponsor'
                    className='rounded-md'
                /> */}

                {/* Image */}

                <Image
                    src={TAICHI_Logo}
                    width={300}
                    height={300}
                    alt="sponsor"
                    className="w-full col-span-3 rounded-md md:col-span-2"
                />
                <Image
                    src={TAICHI_Logo}
                    width={300}
                    height={300}
                    alt="sponsor"
                    className="w-full col-span-3 rounded-md md:col-span-2"
                />
                <Image
                    src={TAICHI_Logo}
                    width={300}
                    height={300}
                    alt="sponsor"
                    className="w-full col-span-3 rounded-md md:col-span-2"
                />
                <Image
                    src={TAICHI_Logo}
                    width={300}
                    height={300}
                    alt="sponsor"
                    className="w-full col-span-3 rounded-md md:col-span-2"
                />
                <Image
                    src={TAICHI_Logo}
                    width={300}
                    height={300}
                    alt="sponsor"
                    className="w-full col-span-3 rounded-md md:col-span-2"
                />
                <Image
                    src={TAICHI_Logo}
                    width={300}
                    height={300}
                    alt="sponsor"
                    className="w-full col-span-3 rounded-md md:col-span-2"
                />
            </div>
            <span className="text-xs font-semibold xl:text-xl md:text-xl">金級</span>
            <div className="grid w-full grid-cols-6 gap-3 mb-5">
                {/* <Image
                    src={'/images/album-cover.png'}
                    width={300}
                    height={300}
                    alt='sponsor'
                    className='rounded-md'
                /> */}

                {/* Image */}

                <Image
                    src={TAICHI_Logo}
                    width={300}
                    height={300}
                    alt="sponsor"
                    className="w-full col-span-3 rounded-md md:col-span-2"
                />
                <Image
                    src={TAICHI_Logo}
                    width={300}
                    height={300}
                    alt="sponsor"
                    className="w-full col-span-3 rounded-md md:col-span-2"
                />
                <Image
                    src={TAICHI_Logo}
                    width={300}
                    height={300}
                    alt="sponsor"
                    className="w-full col-span-3 rounded-md md:col-span-2"
                />
                <Image
                    src={TAICHI_Logo}
                    width={300}
                    height={300}
                    alt="sponsor"
                    className="w-full col-span-3 rounded-md md:col-span-2"
                />
                <Image
                    src={TAICHI_Logo}
                    width={300}
                    height={300}
                    alt="sponsor"
                    className="w-full col-span-3 rounded-md md:col-span-2"
                />
                <Image
                    src={TAICHI_Logo}
                    width={300}
                    height={300}
                    alt="sponsor"
                    className="w-full col-span-3 rounded-md md:col-span-2"
                />
            </div>
            <span className="text-xs font-semibold xl:text-xl md:text-xl">銀級</span>
            <div className="grid w-full grid-cols-6 gap-3 mb-5">
                {/* <Image
                    src={'/images/album-cover.png'}
                    width={300}
                    height={300}
                    alt='sponsor'
                    className='rounded-md'
                /> */}

                {/* Image */}

                <Image
                    src={TAICHI_Logo}
                    width={300}
                    height={300}
                    alt="sponsor"
                    className="w-full col-span-3 rounded-md md:col-span-2"
                />
                <Image
                    src={TAICHI_Logo}
                    width={300}
                    height={300}
                    alt="sponsor"
                    className="w-full col-span-3 rounded-md md:col-span-2"
                />
                <Image
                    src={TAICHI_Logo}
                    width={300}
                    height={300}
                    alt="sponsor"
                    className="w-full col-span-3 rounded-md md:col-span-2"
                />
                <Image
                    src={TAICHI_Logo}
                    width={300}
                    height={300}
                    alt="sponsor"
                    className="w-full col-span-3 rounded-md md:col-span-2"
                />
                <Image
                    src={TAICHI_Logo}
                    width={300}
                    height={300}
                    alt="sponsor"
                    className="w-full col-span-3 rounded-md md:col-span-2"
                />
                <Image
                    src={TAICHI_Logo}
                    width={300}
                    height={300}
                    alt="sponsor"
                    className="w-full col-span-3 rounded-md md:col-span-2"
                />
            </div>
        </div>
    )
}
