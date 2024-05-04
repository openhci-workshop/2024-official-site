import React from 'react'
import Image from 'next/image'

const FaqM1 = "/images/faq_m_q1.svg"
const FaqM4 = "/images/faq_m_q4.svg"

const FaqD1 = "/images/faq_d_q1.svg"
const FaqD4 = "/images/faq_d_q4.svg"



export default function FAQ() {
    return (
        <div className='flex flex-col items-start w-[390px] xl:w-[1040px] text-[#222]'>
            <span className='font-semibold text-md xl:text-3xl mb-5'>FAQ</span>
            <span className='text-sm xl:text-2xl font-medium mb-5'>報名常見問題</span>
            <div className='w-full flex justify-center mb-5'>
                <div className=''>
                    <Image src={FaqM1} alt='faq_m_q1' className='xl:hidden' width={1000} height={1000} />
                    <Image src={FaqD1} alt='faq_d_q1' className='hidden xl:block' width={1000} height={1000} />
                </div>
            </div>
            <h3 className='text-sm xl:text-2xl font-medium mb-5'>ID Card 常見問題</h3>
            <div className='w-full flex justify-center'>
                <Image src={FaqM4} alt='faq_m_q1' className='xl:hidden' width={1000} height={1000} />
                <Image src={FaqD4} alt='faq_d_q4' className='hidden xl:block' width={1000} height={1000} />
            </div>
        </div>
    )
}