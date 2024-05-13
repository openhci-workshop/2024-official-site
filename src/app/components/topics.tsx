'use client'
import React, { useEffect } from 'react'

import clsx from 'clsx'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { animate } from 'framer-motion'
const topicsData = [
    {
        title: '什麼是人機互動?',
        info: '人機互動（Human Computer Interaction, HCI），過去卅年間對於人機互動相關議題與科技的研發與創新，由國際計算機學會 ACM SIGCHI（Special Interest Group on Computer-Human Interaction）領頭發揮重大影響力，於學術研究與產業實務上都有蓬勃發展。',
        animate: 'fade-right',
    },
    {
        title: '關於OpenHCI',
        info: '「OpenHCI人機互動工作坊」是由跨台、政、清、陽交、台科、北科等學校的資訊工程與設計領域的學生自主籌備的活動，今年邁向第十四屆。活動宗旨為推廣人機互動學門，以及促進各校學生間的跨領域專案實作。',
        animate: 'fade-left',
    },
    {
        title: 'OpenHCI X TAICHI 2024',
        info: 'TAICHI 為台灣人機互動研究領域中最具代表性的研討會，由台灣人機互動學會所舉辦的年度盛會，今年TAICHI將邀請本屆工作坊優秀作品至會中展示。除了能透過盛會為學員作品爭取曝光度之外，更能跟眾多前輩交流並汲取經驗，對學員有莫大的助益。',
        animate: 'fade-right',
    },
]

const Topics = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])
    return (
        <>
            <div className="pt-4 flex flex-col items-center w-full gap-[55px] xl:gap-[100px] ">
                <div className="flex flex-col " data-aos="fade-up" data-aos-offset="200">
                    <span className="font-semibold text-md md:text-2xl xl:text-3xl mb-[22px] xl:mb-4 drop-shadow-[0px_5px_10px_rgba(256,256,256,1)]">
                        主題介紹
                    </span>
                    <span className="font-semibold text-md md:text-2xl xl:text-3xl">What is Resilience?</span>
                    <div
                        className={clsx(
                            'shadow-[0px_5px_15px_1px] shadow-white	 mt-8 py-4 xl:py-16 w-full rounded-[60px]  flex justify-center  items-center bg-white/25'
                        )}
                        style={{
                            backgroundImage:
                                'radial-gradient(ellipse at center, rgba(255,255,255,1) 12%, rgba(242,212,205,1) 30%, rgba(202,217,223,0.4) 55%, rgba(255,255,255,0.6) 100%)',
                        }}
                    >
                        <div className="px-8 xl:px-16 py-8 text-xs text-start md:text-base xl:text-xl">
                            <span className="font-bold">
                                「Resilience，象徵著適應力、韌性、彈性。在新興科技大量衝擊的年代，人性為最不可或缺的關鍵。」{' '}
                            </span>
                            <span>
                                Resilience
                                的適應、彈性，在科技浪潮襲捲而來的時代愈顯其珍貴，科技不僅為我們所用，更與我們共生共榮。延展實境和人工智慧崛起，讓我們再次看見科技回歸以人為本的價值，相信人性即使面臨挑戰，依然會在這充滿未知的時代裡尋求共榮的未來。
                            </span>
                        </div>
                    </div>
                </div>
                {topicsData.map((topic, index) => (
                    <div key={index} className="flex flex-col" data-aos={topic.animate}>
                        <span className="font-semibold text-md xl:text-3xl md:text-2xl drop-shadow-[0px_5px_10px_rgba(256,256,256,1)] ">
                            {topic.title}
                        </span>
                        <div
                            // className="  bg-[url('/card_detail.png')] bg-cover bg-center border-3 border-b-violet-200 border-r-[#CAD9DF] mt-4 py-16 xl:py-8 px-8 w-full  rounded-[50px] z-10 flex justify-center items-center "

                            className={clsx(
                                'shadow-[0px_5px_15px_1px] shadow-white	 mt-8 py-4 xl:py-16 w-full rounded-[60px]  flex justify-center  items-center bg-white/25'
                            )}
                            style={{
                                backgroundImage:
                                    'radial-gradient(ellipse at center, rgba(255,255,255,1) 12%, rgba(242,212,205,1) 30%, rgba(202,217,223,0.4) 55%, rgba(255,255,255,0.6) 100%)',
                            }}
                        >
                            <div
                                className="px-8 xl:px-16 py-8 text-xs text-start  md:text-base xl:text-xl"
                                dangerouslySetInnerHTML={{ __html: topic.info }}
                            >
                                {/* <span>{topic.info}</span> */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div id="speech"></div>
        </>
    )
}

export default Topics
