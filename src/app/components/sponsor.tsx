import React from 'react'
import Image from 'next/image'

import AJA_Logo from '../../../public/images/AJA_Logo.png'
import LINE_Green from '../../../public/images/LINE_Green.svg'
import Hepta_Logo from '../../../public/images/Hepta_Logo.png'
import NYCU_Logo from '../../../public/images/NYCU_Logo.png'
import NCCU_Logo from '../../../public/images/NCCU_Logo.jpg'
import ITSA_Logo from '../../../public/images/ITSA_Logo.png'
import BegoniaDesign_Logo from '../../../public/images/BegoniaDesign_Logo.png'
import NTU_Logo from '../../../public/images/NTU_Logo.png'
import DSchool_Logo from '../../../public/images/DSchool_Logo.png'
import CEP_Logo from '../../../public/images/CEP_Logo.png'
import TAICHI_Logo from '../../../public/images/TAICHI_Logo.png'
import NTUCS_Logo from '../../../public/images/NTUCS_Logo.svg'
import NYCU_ICT_Logo2 from '../../../public/images/NYCU_ICT_Logo2.png'
import GOONS_Logo from '../../../public/images/GOONS_Logo.svg'
import MW_Logo from '../../../public/images/MW_Logo.png'
import TianYen_Logo from '../../../public/images/TianYen_Logo.png'

export default function Sponsor() {
    return (
        <div data-aos="fade-up" data-aos-offset="200" className="xl:pt-16 pt-8 flex flex-col items-start    w-full  ">
            <span className="font-semibold text-md md:text-2xl xl:text-3xl drop-shadow-[0px_5px_10px_rgba(256,256,256,1)]">
                贊助單位
            </span>
            <div className="bg-white/30 backdrop-blur-sm border-3 border-b-violet-200 border-r-[#CAD9DF] mt-8 py-8 pb-16 xl:py-8 px-4 md:px-8 w-full  rounded-[50px] z-10 flex flex-col justify-start items-start ">
                <span className="text-xs font-semibold xl:text-xl mb-2">主辦單位</span>
                <div className="grid grid-cols-6 gap-2 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10 mb-5 w-full">
                    <Image
                        src={NYCU_Logo}
                        width={300}
                        height={300}
                        alt="NYCU_Logo"
                        className="rounded-md col-span-3 md:col-span-2 p-5 bg-white aspect-[2/1] object-contain"
                    />
                    <Image
                        src={NCCU_Logo}
                        width={300}
                        height={300}
                        alt="NCCU_Logo"
                        className="rounded-md col-span-3 md:col-span-2 p-5 bg-white aspect-[2/1] object-contain"
                    />
                </div>
                <span className="text-xs font-semibold xl:text-xl mb-2">白金級</span>
                <div className="grid grid-cols-6 gap-2 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10 mb-5 w-full">
                    <Image
                        src={TAICHI_Logo}
                        width={300}
                        height={300}
                        alt="TAICHI_Logo"
                        className="rounded-md col-span-3 md:col-span-2 bg-white aspect-[2/1] object-contain"
                    />
                    <Image
                        src={ITSA_Logo}
                        width={300}
                        height={300}
                        alt="ITSA_Logo"
                        className="rounded-md col-span-3 md:col-span-2 p-5 bg-white aspect-[2/1] object-contain"
                    />
                    <Image
                        src={MW_Logo}
                        width={300}
                        height={300}
                        alt="MW_Logo"
                        className="rounded-md col-span-3 md:col-span-2 p-5 bg-white aspect-[2/1] object-contain"
                    />
                </div>
                <span className="text-xs font-semibold xl:text-xl mb-2">金級</span>
                <div className="grid grid-cols-6 gap-2 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10 mb-5 w-full"></div>
                <span className="text-xs font-semibold xl:text-xl mb-2">銀級</span>
                <div className="grid grid-cols-6 gap-2 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10 mb-5 w-full ">
                    <Image
                        src={LINE_Green}
                        width={300}
                        height={300}
                        alt="Line_Logo_W"
                        className="rounded-md col-span-3 md:col-span-2 bg-white p-8 aspect-[2/1] object-contain object-center"
                    />
                    <Image
                        src={AJA_Logo}
                        width={300}
                        height={300}
                        alt="AJA_Logo"
                        className="rounded-md col-span-3 md:col-span-2 bg-white aspect-[2/1] object-contain"
                    />
                    <Image
                        src={BegoniaDesign_Logo}
                        width={300}
                        height={300}
                        alt="BegoniaDesign_Logo"
                        className="rounded-md col-span-3 md:col-span-2 bg-white aspect-[2/1] object-contain"
                    />
                    <Image
                        src={GOONS_Logo}
                        width={300}
                        height={300}
                        alt="GOONS_Logo"
                        className="rounded-md col-span-3 md:col-span-2 bg-white p-4 aspect-[2/1] object-contain"
                    />
                    <Image
                        src={TianYen_Logo}
                        width={300}
                        height={300}
                        alt="TianYen_Logo"
                        className="rounded-md col-span-3 md:col-span-2 aspect-[2/1] object-contain"
                    />
                </div>
                <span className="text-xs font-semibold xl:text-xl mb-2">協辦單位</span>
                <div className="grid grid-cols-6 gap-2 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10 mb-5 w-full ">
                    <Image
                        src={TAICHI_Logo}
                        width={300}
                        height={300}
                        alt="TAICHI_Logo"
                        className="rounded-md col-span-3 md:col-span-2 bg-white aspect-[2/1] object-contain"
                    />
                    <Image
                        src={NTUCS_Logo}
                        width={300}
                        height={300}
                        alt="NTUCS_Logo"
                        className="rounded-md col-span-3 md:col-span-2 bg-white aspect-[2/1] p-3 object-contain "
                    />
                    <Image
                        src={NTU_Logo}
                        width={300}
                        height={300}
                        alt="NTU_Logo"
                        className="rounded-md col-span-3 md:col-span-2 p-5 bg-white aspect-[2/1] object-contain"
                    />
                    <Image
                        src={DSchool_Logo}
                        width={300}
                        height={300}
                        alt="DSchool_Logo"
                        className="rounded-md col-span-3 md:col-span-2 bg-white aspect-[2/1] object-contain"
                    />
                    <Image
                        src={CEP_Logo}
                        width={300}
                        height={300}
                        alt="CEP_Logo"
                        className="rounded-md col-span-3 md:col-span-2 bg-white aspect-[2/1] object-contain"
                    />
                    <Image
                        src={NYCU_ICT_Logo2}
                        width={300}
                        height={300}
                        alt="NYCU_ICT_Logo2"
                        className="rounded-md col-span-3 md:col-span-2 bg-white aspect-[2/1] object-contain"
                    />
                    <Image
                        src={Hepta_Logo}
                        width={300}
                        height={300}
                        alt="Hepta_Logo"
                        className="rounded-md col-span-3 md:col-span-2 p-3 bg-white aspect-[2/1] object-contain"
                    />
                </div>
                <span className="text-xs font-semibold xl:text-xl mb-2">攝影合作夥伴</span>
                <div className="grid grid-cols-6 gap-2 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10 mb-5 w-full ">
                    <Image
                        src="/images/GUNO_LOGO_B.png"
                        width={300}
                        height={300}
                        alt="GUNO_LOGO_B"
                        className="rounded-md col-span-3 md:col-span-2 bg-white p-3 aspect-[2/1] object-contain object-center"
                    />
                </div>
            </div>
        </div>
    )
}
