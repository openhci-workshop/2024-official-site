import React from 'react'
import Image from 'next/image'

const FaqM1 = '/images/faq_m_q1.svg'
const FaqM4 = '/images/faq_m_q4.svg'

const FaqD1 = '/images/faq_d_q1.svg'
const FaqD4 = '/images/faq_d_q4.svg'

export default function FAQ() {
    return (
        <>
            <div className="flex flex-col items-start w-full md:pt-16 ">
                <span className="mb-5 font-semibold text-md xl:text-3xl md:text-2xl drop-shadow-[0px_5px_10px_rgba(256,256,256,1)]">
                    FAQ
                </span>
                <span className="mb-5 text-sm font-medium xl:text-2xl md:text-xl">報名常見問題</span>
                <div className="flex items-start justify-center w-full mb-5" data-aos="fade-right">
                    <Image src={FaqM1} alt="faq_m_q1" className="block sm:hidden w-3/4" width={500} height={500} />
                    <Image src={FaqD1} alt="faq_d_q1" className="hidden sm:block lg:hidden" width={750} height={750} />
                    <Image src={FaqD1} alt="faq_d_q1" className="hidden lg:block " width={1000} height={1000} />
                </div>
                <h3 className="mb-5 text-sm font-medium xl:text-2xl md:text-xl">ID Card 常見問題</h3>
                <div className="flex justify-center w-full" data-aos="fade-left">
                    <Image src={FaqM4} alt="faq_m_q4" className="block sm:hidden w-3/4" width={500} height={500} />
                    <Image src={FaqD4} alt="faq_d_q4" className="hidden sm:block lg:hidden" width={750} height={750} />
                    <Image src={FaqD4} alt="faq_d_q4" className="hidden lg:block " width={1000} height={1000} />
                </div>
            </div>
            <div id="works"></div>
        </>
    )
}
