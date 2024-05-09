import React from 'react'

const OpenHCIDark = '/images/OpenHCI_Dark.svg'
const OpenHCILight = '/images/OpenHCI_Light_Logo.svg'
import Image from 'next/image'
import Maps from './Maps'
import { FaSquareFacebook } from 'react-icons/fa6'
import { RiInstagramFill } from 'react-icons/ri'

export default function Footer() {
    return (
        <div className="w-full pt-8 xl:pt-16 ">
            <h1 className="mb-5 font-semibold text-md md:text-2xl xl:text-3xl">活動地點</h1>
            <div className="flex flex-row gap-4 h-[486px] sm:h-[243px] flex-wrap sm:flex-nowrap">
                <div className="w-full sm:w-1/2">
                    <div className="relative w-full h-[243px]">
                        <Maps />
                    </div>
                </div>

                <div className="flex flex-col items-center justify-between w-full sm:w-1/2">
                    <Image src="/OpenHCI_Light_Logo.png" alt="OpenHCI_logo" width={300} height={100} className="mb-6" />
                    <div>
                        <p className="font-bold text-center text-xxs xl:text-md">© COPYRIGHT 2024 OpenHCI&apos;24</p>
                        <div className="flex flex-row flex-wrap justify-center gap-5 mt-4 text-xs text-center sm:flex-nowrap xl:text-sm">
                            {/* Facebook */}
                            <a
                                href="https://www.facebook.com/openhci/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex flex-row items-center justify-center gap-1 hover:text-[#636B76]/80"
                            >
                                <FaSquareFacebook className="w-[16px] h-[15px]" /> <span>Facebook</span>
                            </a>{' '}
                            {/* Instagram */}
                            <a
                                href="https://www.instagram.com/open.hci24/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex flex-row items-center justify-center gap-1 hover:text-[#636B76]/80"
                            >
                                <RiInstagramFill className="w-[16px] h-[16px]" /> <span>Instagram</span>
                            </a>
                        </div>
                        <div className="mt-4 text-xs text-center xl:text-sm ">
                            <a
                                href="https://www.2023.openhci.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-[#636B76]/80"
                            >
                                2023
                            </a>{' '}
                            /{' '}
                            <a
                                href="https://www.2022.openhci.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-[#636B76]/80"
                            >
                                2022
                            </a>{' '}
                            /{' '}
                            <a
                                href="https://www.2021.openhci.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-[#636B76]/80"
                            >
                                2021
                            </a>{' '}
                            /{' '}
                            <a
                                href="https://www.2019.openhci.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-[#636B76]/80"
                            >
                                2019
                            </a>{' '}
                            /{' '}
                            <a
                                href="https://www.2018.openhci.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-[#636B76]/80"
                            >
                                2018
                            </a>{' '}
                            /{' '}
                            <a
                                href="https://www.2017.openhci.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-[#636B76]/80"
                            >
                                2017
                            </a>{' '}
                            /{' '}
                            <a
                                href="https://www.2016.openhci.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-[#636B76]/80"
                            >
                                2016
                            </a>{' '}
                            /{' '}
                            <a
                                href="https://www.2015.openhci.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-[#636B76]/80"
                            >
                                2015
                            </a>{' '}
                            /{' '}
                            <a
                                href="https://www.2014.openhci.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-[#636B76]/80"
                            >
                                2014
                            </a>{' '}
                            /{' '}
                            <a
                                href="https://www.2013.openhci.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-[#636B76]/80"
                            >
                                2013
                            </a>{' '}
                            /{' '}
                            <a
                                href="https://www.2012.openhci.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-[#636B76]/80"
                            >
                                2012
                            </a>{' '}
                            /{' '}
                            <a
                                href="https://www.2011.openhci.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-[#636B76]/80"
                            >
                                2011
                            </a>{' '}
                            /{' '}
                            <a
                                href="https://www.2009.openhci.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-[#636B76]/80"
                            >
                                2009
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
