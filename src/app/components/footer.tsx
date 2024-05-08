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
                            <a href="https://www.2023.openhci.com/" target="_blank" rel="noreferrer">2023</a> / {' '}
                            <a href="https://www.2022.openhci.com/" target="_blank" rel="noreferrer">2022</a> / {' '}
                            <a href="https://www.2021.openhci.com/" target="_blank" rel="noreferrer">2021</a> / {' '}
                            <a href="https://www.2019.openhci.com/" target="_blank" rel="noreferrer">2019</a> / {' '}
                            <a href="https://www.2018.openhci.com/" target="_blank" rel="noreferrer">2018</a> / {' '}
                            <a href="https://www.2017.openhci.com/" target="_blank" rel="noreferrer">2017</a> / {' '}
                            <a href="https://www.2016.openhci.com/" target="_blank" rel="noreferrer">2016</a> / {' '}
                            <a href="https://www.2015.openhci.com/" target="_blank" rel="noreferrer">2015</a> / {' '}
                            <a href="https://www.2014.openhci.com/" target="_blank" rel="noreferrer">2014</a> / {' '}
                            <a href="https://www.2013.openhci.com/" target="_blank" rel="noreferrer">2013</a> / {' '}
                            <a href="https://www.2012.openhci.com/" target="_blank" rel="noreferrer">2012</a> / {' '}
                            <a href="https://www.2011.openhci.com/" target="_blank" rel="noreferrer">2011</a> / {' '}
                            <a href="https://www.2009.openhci.com/" target="_blank" rel="noreferrer">2009</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
