import React from 'react'

import { GoogleMapsEmbed } from '@next/third-parties/google'

const OpenHCIDark = '/images/OpenHCI_Dark.svg'
const OpenHCILight = '/images/OpenHCI_Light_Logo.svg'
import Image from 'next/image'

// Define the environment variable
const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY

export default function Footer() {
    return (
        <div className="w-full   text-[#222]">
            <h1 className="mb-5 font-semibold text-md xl:text-3xl">活動地點</h1>
            <div className="flex flex-row gap-4">
                <div className=" h-[300px] w-1/2">
                    <div className="relative w-full h-[243px]">
                        <GoogleMapsEmbed
                            apiKey={GOOGLE_MAPS_API_KEY || ''}
                            mode="place"
                            q="國立台灣大學學新館"
                            style="border: 1px solid black; height: 100%; width: 100%; position: absolute; bottom: 0; left: 0;"
                            // style='border: 1px solid black; height: 100%; width: 100%;'
                        />
                    </div>
                </div>

                <div className="flex flex-col items-center justify-between w-1/2 h-full ">
                    <Image src="/OpenHCI_Light_Logo.png" alt="OpenHCI_logo" width={300} height={100} className="mb-6" />
                    <p className="font-bold text-xxs xl:text-md">© COPYRIGHT 2024 OpenHCI&apos;24</p>
                    <div className="text-xs text-center xl:text-xl">
                        <span>2023</span> / <span>2022</span> / <span>2021</span> / <span>2019</span> /{' '}
                        <span>2018</span> / <span>2017</span> / <span>2016</span> / <span>2015</span> /{' '}
                        <span>2014</span> / <span>2013</span> / <span>2012</span> / <span>2011</span> /<span>2009</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
