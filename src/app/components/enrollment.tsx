'use client'

const Enrollment = () => {
    return (
        <>
            <div className="flex flex-col items-center w-full pt-12">
                <div className="flex flex-col items-center w-full gap-[55px] xl:gap-[100px]">
                    <div className="w-full relative flex flex-col mb-[22px] xl:mb-4 ">
                        <span className="items-start font-semibold text-md xl:text-3xl md:text-2xl drop-shadow-[0px_5px_10px_rgba(256,256,256,1)]">
                            報名資訊
                        </span>
                        <div className=" bg-white/30 backdrop-blur-sm border-3 border-b-violet-200 border-r-[#CAD9DF] mt-8 py-8 pb-16 xl:py-8 px-4 md:px-8 w-full  rounded-[50px] z-10 flex justify-center items-center ">
                            <div className="flex flex-col w-full gap-4 px-4 text-sm xl:py-8 md:px-16 lg:px-24 xl:text-xl xl:gap-8 xl:px-12">
                                <div className="flex flex-col gap-3">
                                    <span className="text-sm font-bold xl:text-2xl md:text-xl">/ 報名資格 /</span>
                                    <span className="text-sm underline xl:text-xl md:text-base">
                                        全國各大專院校升大三以上在學生，含學碩博應屆畢業生及碩博新生。
                                    </span>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <span className="text-sm font-bold xl:text-2xl md:text-xl">/ 報名方式 /</span>
                                    <span className="text-sm xl:text-xl md:text-base">
                                        一律填寫線上表單報名。本活動以報名資料填寫內容作為錄取參考依據，
                                        報名先後順序不列入計分標準。
                                    </span>
                                </div>
                                <div className="flex flex-col gap-6">
                                    <span className="text-sm font-bold xl:text-2xl md:text-xl ">/ 招生時程 /</span>
                                    <div className="relative top-24 xl:top-36 w-full pb-24 xl:pb-28">
                                        <ol className="flex justify-center  border-t-2 border-white">
                                            <li className="ml-[50px] sm:ml-[80px] xl:ml-[168px] top-[-90px] md:top-[-107px] xl:top-[-137px] relative">
                                                <div className="w-[60px] sm:w-[100px] xl:w-[168px] flex-start items-center block pt-0">
                                                    <div className="text-center h-[37px] md:h-[54px] xl:h-[80px] w-[178px] md:w-[240px] mb-2 xl:mb-1 me-0 -ms-[80px] md:-ms-[115px]">
                                                        <p className="text-xxs xl:text-base md:text-base">
                                                            2024 年 5 月 15 日（三）
                                                        </p>
                                                        <p className="text-xs xl:text-xl md:text-base">報名開始</p>
                                                    </div>
                                                    <div className="h-[9px] w-[9px] rounded-full bg-white -mt-[5px] me-0 ms-0"></div>
                                                    <div className="h-[40px] xl:h-[48px] w-[2px] rounded-full bg-white me-0 ms-1"></div>
                                                    <div className="h-[9px] w-[9px] rounded-full bg-white -mt-[5px] me-0 ms-0"></div>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="w-[60px] sm:w-[100px] xl:w-[168px] flex-start items-center block pt-0">
                                                    <div className="h-[9px] w-[9px] rounded-full bg-white -mt-[5px] me-0 ms-0"></div>
                                                    <div className="h-[40px] xl:h-[48px] w-[2px] rounded-full bg-white -mt-[5px] me-0 ms-1"></div>
                                                    <div className="h-[9px] w-[9px] rounded-full bg-white -mt-[5px] me-0 ms-0"></div>
                                                    <div className="text-center h-[37px] xl:h-[80px] w-[178px] md:w-[240px] mt-4 me-0 -ms-[80px] md:-ms-[115px]">
                                                        <p className="text-xxs xl:text-base md:text-base">
                                                            2024 年 5 月 21 日（二）
                                                        </p>
                                                        <p className="text-xs xl:text-xl md:text-base">報名結束</p>
                                                    </div>
                                                </div>
                                            </li>

                                            <li className="top-[-90px] md:top-[-107px] xl:top-[-137px] relative">
                                                <div className="w-[60px] sm:w-[100px] xl:w-[168px] flex-start items-center block pt-0">
                                                    <div className="text-center h-[37px] md:h-[54px] xl:h-[80px] w-[178px] mb-2 xl:mb-1 me-0 -ms-[80px]">
                                                        <p className="text-xxs xl:text-base md:text-base">
                                                            2024 年 6 月 1 日（六）
                                                        </p>
                                                        <p className="text-xs xl:text-xl md:text-base">正取名單公布</p>
                                                    </div>
                                                    <div className="h-[9px] w-[9px] rounded-full bg-white -mt-[5px] me-0 ms-0"></div>
                                                    <div className="h-[40px] xl:h-[48px] w-[2px] rounded-full bg-white me-0 ms-1"></div>
                                                    <div className="h-[9px] w-[9px] rounded-full bg-white -mt-[5px] me-0 ms-0"></div>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="w-[60px] sm:w-[100px] xl:w-[168px] flex-start items-center block pt-0">
                                                    <div className="h-[9px] w-[9px] rounded-full bg-white -mt-[5px] me-0 ms-0"></div>
                                                    <div className="h-[40px] xl:h-[48px] w-[2px] rounded-full bg-white -mt-[5px] me-0 ms-1"></div>
                                                    <div className="h-[9px] w-[9px] rounded-full bg-white -mt-[5px] me-0 ms-0"></div>
                                                    <div className="text-center h-[37px] xl:h-[80px] w-[178px] mt-4 me-0 -ms-[80px]">
                                                        <p className="text-xxs xl:text-base md:text-base">
                                                            2024 年 6 月 5 日（三）
                                                        </p>
                                                        <p className="text-xs xl:text-xl md:text-base">遞補備取通知</p>
                                                    </div>
                                                </div>
                                            </li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="FAQ"></div>
            </div>
        </>
    )
}

export default Enrollment
