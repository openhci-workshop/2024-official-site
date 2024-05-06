import React from 'react'
import Image from 'next/image'

const FaqM1 = '/images/faq_m_q1.svg'
const FaqM4 = '/images/faq_m_q4.svg'

const FaqD1 = '/images/faq_d_q1.svg'
const FaqD4 = '/images/faq_d_q4.svg'

export default function FAQ() {
    return (
        <>
            <div className="md:pt-16 flex flex-col items-start w-full ">
                <span className="mb-5 font-semibold text-md xl:text-3xl">FAQ</span>
                <span className="mb-5 text-sm font-medium xl:text-2xl">報名常見問題</span>
                <div className="flex justify-center w-full mb-5" data-aos="fade-right">
                    <div className="">
                        <Image src={FaqM1} alt="faq_m_q1" className="xl:hidden" width={1000} height={1000} />
                        <Image src={FaqD1} alt="faq_d_q1" className="hidden xl:block" width={1000} height={1000} />
                    </div>
                </div>
                <h3 className="mb-5 text-sm font-medium xl:text-2xl">ID Card 常見問題</h3>
                <div className="flex justify-center w-full" data-aos="fade-left">
                    <Image src={FaqM4} alt="faq_m_q1" className="xl:hidden" width={1000} height={1000} />
                    <Image src={FaqD4} alt="faq_d_q4" className="hidden xl:block" width={1000} height={1000} />
                </div>
            </div>
            <div id="works"></div>
        </>
    )
}
