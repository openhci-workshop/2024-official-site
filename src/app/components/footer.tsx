import React from 'react'

const OpenHCIDark = '/images/OpenHCI_Dark.svg'
const OpenHCILight = '/images/OpenHCI_Light_Logo.svg'
import Image from 'next/image'
import Maps from './Maps'

// Define the environment variable
const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY

export default function Footer() {
    return (
        <div className="w-full   ">
            <h1 className="mb-5 font-semibold text-md xl:text-3xl">活動地點</h1>
            <div className="flex flex-row gap-4 h-[243px]">
                <div className="  w-1/2">
                    <div className="relative w-full h-[243px]">
                        <Maps />
                    </div>
                </div>

                <div className=" flex flex-col items-center justify-between w-1/2 ">
                    <Image src="/OpenHCI_Light_Logo.png" alt="OpenHCI_logo" width={300} height={100} className="mb-6" />
                    <div>
                        <p className="text-center font-bold text-xxs xl:text-md">© COPYRIGHT 2024 OpenHCI&apos;24</p>
                        <div className="text-xs text-center xl:text-sm mt-4">
                            <span>2023</span> / <span>2022</span> / <span>2021</span> / <span>2019</span> /{' '}
                            <span>2018</span> / <span>2017</span> / <span>2016</span> / <span>2015</span> /{' '}
                            <span>2014</span> / <span>2013</span> / <span>2012</span> / <span>2011</span> /
                            <span>2009</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
