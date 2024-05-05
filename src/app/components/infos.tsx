'use client'

import clsx from 'clsx'

const Infos = () => {
    return (
        <div className="md:pt-8 flex flex-col items-start w-full  gap-[55px] xl:gap-20 text-[#222]">
            <div data-aos="fade-up" data-aos-offset="200" className=" flex flex-col mb-[22px] xl:mb-4">
                <span className="font-semibold text-md xl:text-3xl">活動宗旨</span>
                <div
                    className={clsx('mt-4 py-16 w-full rounded-[50%] z-10 flex justify-center items-center')}
                    style={{
                        backgroundImage:
                            'radial-gradient(ellipse at center, rgba(255,255,255,1) 12%, rgba(202,217,223,1) 35%, rgba(242,212,205,0.9) 55%, rgba(255,255,255,0.5) 70%)',
                    }}
                >
                    <div className="w-3/4 text-xs text-center xl:text-xl">
                        <span>
                            本活動希望以推廣 HCI
                            為主要宗旨，招收工程、設計及跨領域背景的學生，共同學習並進行跨領域的合作，探索人類生活空間中與周遭環境、物件或工具的互動模式。為期六天的工作坊，期盼參與者能根據主題體察其日常經驗裡的互動缺口或議題，實際動手解決問題或創造出新的意義，進而尋思更和諧的人機互動遠景。
                        </span>
                    </div>
                </div>
            </div>
            <div data-aos="fade-up" className=" flex flex-col mb-[22px] xl:mb-4">
                <span className="font-semibold text-md xl:text-3xl">活動資訊</span>
                <div
                    className={clsx('py-16 w-full rounded-[50%] z-10 flex justify-center items-center')}
                    style={{
                        backgroundImage:
                            'radial-gradient(ellipse at center, rgba(255,255,255,1) 12%, rgba(202,217,223,1) 35%, rgba(242,212,205,0.85) 55%, rgba(255,255,255,0.5) 70%)',
                    }}
                >
                    <div className="flex flex-col w-full gap-3 px-10 text-xs md:px-16 lg:px-24 xl:text-xl xl:gap-5 xl:px-36">
                        <div className="flex flex-col gap-3">
                            <span className="text-sm font-bold xl:text-2xl">活動時間</span>
                            <div className="flex flex-col gap-1 tracking-wider underline">
                                <span>前置工作坊：6/22（六）- 6/23（日）</span>
                                <span>正式工作坊：7/4（四）- 7/7（日）</span>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <span className="text-sm font-bold xl:text-2xl">活動地點</span>
                            <span className="tracking-wider">國立台灣大學 學新館（台北市大安區舟山路10巷1弄4號）</span>
                        </div>
                        <div className="flex flex-col gap-3">
                            <span className="text-sm font-bold xl:text-2xl">活動費用</span>
                            <span className="tracking-normal">
                                為推廣 HCI 學門，本活動免報名費，僅收取保證金、保險費用及其他費用。
                                獲得錄取資格之學員，請於指定時間內繳交各項費用，方能取得正式資格。為維持完整學習體驗，工作坊實行每日簽到，學員需全程參與以獲得保證金全額退還。
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Infos
