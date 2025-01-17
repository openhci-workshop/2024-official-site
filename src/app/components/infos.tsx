'use client'

const Infos = () => {
    return (
        <div className="md:pt-8 flex flex-col items-start w-full  gap-[55px] xl:gap-20 ">
            <div data-aos="fade-up" data-aos-offset="200" className=" flex flex-col mb-[22px] xl:mb-4">
                <span className="font-semibold text-md xl:text-3xl md:text-2xl drop-shadow-[0px_5px_10px_rgba(256,256,256,1)] ">
                    活動宗旨
                </span>
                <div
                    className='shadow-[0px_5px_15px_1px] shadow-white mt-8 p-4 xl:p-8 w-full rounded-[60px] flex justify-center items-center bg-white/25'
                    style={{
                        backgroundImage:
                            'radial-gradient(ellipse at center, rgba(255,255,255,0.8) 12%, rgba(202,217,223,0.8) 35%, rgba(242,212,205,0.85) 50%, rgba(255,255,255,0.12) 70%)',
                    }}
                >
                    <div className="text-start px-10  py-4 xl:py-8 md:px-16 lg:px-12 xl:text-xl xl:gap-8 xl:px-12   text-sm   md:text-base">
                        <span>
                            本活動希望以推廣 HCI
                            為主要宗旨，招收工程、設計及跨領域背景的學生，共同學習並進行跨領域的合作，探索人類生活空間中與周遭環境、物件或工具的互動模式。為期六天的工作坊，期盼參與者能根據主題體察其日常經驗裡的互動缺口或議題，實際動手解決問題或創造出新的意義，進而尋思更和諧的人機互動願景。
                        </span>
                    </div>
                </div>
            </div>
            <div data-aos="fade-up" className=" flex flex-col mb-[22px] xl:mb-4">
                <span className="font-semibold text-md xl:text-3xl md:text-2xl drop-shadow-[0px_5px_10px_rgba(256,256,256,1)]">
                    活動資訊
                </span>
                <div className=" bg-white/30 backdrop-blur-sm border-3 border-b-violet-200 border-r-[#CAD9DF] mt-8 py-8 xl:py-8 px-8 w-full  rounded-[50px] z-10 flex justify-center items-center ">
                    <div className="flex flex-col w-full gap-4 px-4 text-sm xl:py-8 md:px-16 lg:px-24 xl:text-xl xl:gap-8 xl:px-12">
                        <div className="flex flex-col gap-3">
                            <span className="text-sm font-bold xl:text-2xl md:text-xl">/ 活動時間 /</span>
                            <div className="flex flex-col gap-1 tracking-wider underline md:text-base xl:text-xl">
                                <span>前置工作坊：6/22（六）- 6/23（日）</span>
                                <span>正式工作坊：7/4（四）- 7/7（日）</span>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <span className="text-sm font-bold xl:text-2xl md:text-xl">/ 活動地點 /</span>
                            <span className="tracking-wider md:text-base xl:text-xl">
                                國立台灣大學 學新館（台北市大安區舟山路10巷1弄4號）
                            </span>
                        </div>
                        <div className="flex flex-col gap-3">
                            <span className="text-sm font-bold xl:text-2xl md:text-xl">/ 活動費用 /</span>
                            <span className="tracking-normal md:text-base xl:text-xl">
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
