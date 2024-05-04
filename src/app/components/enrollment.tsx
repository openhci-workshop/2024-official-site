'use client'

import clsx from 'clsx'

const Enrollment = () => {
    return (
        <>
            <div className="flex flex-col items-center w-full">
                <div className="flex flex-col items-center w-full gap-[55px] xl:gap-[100px]">
                    <div className="w-full relative flex flex-col gap-[22px] xl:gap-[40px]">
                        <span className="items-start font-semibold text-md xl:text-3xl text-[#222]">報名資訊</span>
                        <div
                            className={clsx(
                                'md:pt-16 pb-36 w-full rounded-[50%] z-10 flex justify-center items-center'
                            )}
                            style={{
                                backgroundImage:
                                    'radial-gradient(ellipse at center, rgba(148,170,193,1) 0%, rgba(229,224,223,1) 45%,rgba(202,217,223,0.26) 100%)',
                            }}
                        >
                            <div className="flex flex-col w-3/4 py-16 relative text-[#222] text-xl gap-3 xl:gap-5">
                                <div className="flex flex-col gap-3">
                                    <span className="text-sm font-medium xl:text-2xl">報名資格</span>
                                    <span className="text-xs underline xl:text-xl">
                                        全國各大專院校升大三以上在學生，含學碩博應屆畢業生及碩博新生。
                                    </span>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <span className="text-sm font-medium xl:text-2xl">報名方式</span>
                                    <span className="text-xs xl:text-xl">
                                        一律填寫線上表單報名。本活動以報名資料填寫內容作為錄取參考依據，
                                        報名先後順序不列入計分標準。
                                    </span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-sm font-medium xl:text-2xl">招生時程</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="FAQ"></div>
                <div className="relative left-0 top-[-55px] xl:top-[0px] z-20">
                    <ol className="flex justify-center w-screen border-t-2 border-white">
                        {/* 1  */}
                        <li className="ml-[76px] xl:ml-[245px] top-[-115px] xl:top-[-200px] relative">
                            <div className="w-[76px] xl:w-[245px] flex-start items-center block pt-0">
                                <div className="text-center h-[37px] xl:h-[80px] w-[178px] mb-4 me-0 -ms-[80px]">
                                    <p className="text-xs xl:text-base text-[#222]">2022 年 7 月 18 日（一）</p>
                                    <p className="text-xs xl:text-xl text-[#222]">報名開始</p>
                                </div>
                                <div className="h-[9px] w-[9px] rounded-full bg-white -mt-[5px] me-0 ms-0"></div>
                                <div className="h-[57px] xl:h-[100px] w-[2px] rounded-full bg-white me-0 ms-1"></div>
                                <div className="h-[9px] w-[9px] rounded-full bg-white -mt-[5px] me-0 ms-0"></div>
                            </div>
                        </li>

                        {/* 2  */}
                        <li>
                            <div className="w-[76px] xl:w-[245px] flex-start items-center block pt-0">
                                <div className="h-[9px] w-[9px] rounded-full bg-white -mt-[5px] me-0 ms-0"></div>
                                <div className="h-[57px] xl:h-[100px] w-[2px] rounded-full bg-white -mt-[5px] me-0 ms-1"></div>
                                <div className="h-[9px] w-[9px] rounded-full bg-white -mt-[5px] me-0 ms-0"></div>
                                <div className="text-center h-[37px] xl:h-[80px] w-[178px] mt-4 me-0 -ms-[80px]">
                                    <p className="text-xs xl:text-base text-[#222]">2022 年 7 月 18 日（一）</p>
                                    <p className="text-xs xl:text-xl text-[#222]">報名結束</p>
                                </div>
                            </div>
                        </li>

                        {/* 3  */}
                        <li className="top-[-115px] xl:top-[-200px] relative">
                            <div className="w-[76px] xl:w-[245px] flex-start items-center block pt-0">
                                <div className="text-center h-[37px] xl:h-[80px] w-[178px] mb-4 me-0 -ms-[80px]">
                                    <p className="text-xs xl:text-base text-[#222]">2022 年 7 月 18 日（一）</p>
                                    <p className="text-xs xl:text-xl text-[#222]">正取名單公布</p>
                                </div>
                                <div className="h-[9px] w-[9px] rounded-full bg-white -mt-[5px] me-0 ms-0"></div>
                                <div className="h-[57px] xl:h-[100px] w-[2px] rounded-full bg-white -mt-[5px] me-0 ms-1"></div>
                                <div className="h-[9px] w-[9px] rounded-full bg-white me-0 ms-0"></div>
                            </div>
                        </li>

                        {/* 4  */}
                        <li>
                            <div className="w-[76px] xl:w-[245px] flex-start items-center block pt-0">
                                <div className="h-[9px] w-[9px] rounded-full bg-white -mt-[5px] me-0 ms-0"></div>
                                <div className="h-[57px] xl:h-[100px] w-[2px] rounded-full bg-white -mt-[5px] me-0 ms-1"></div>
                                <div className="h-[9px] w-[9px] rounded-full bg-white -mt-[5px] me-0 ms-0"></div>
                                <div className="text-center h-[37px] xl:h-[80px] w-[178px] mt-4 me-0 -ms-[80px]">
                                    <p className="text-xs xl:text-base text-[#222]">2022 年 7 月 18 日（一）</p>
                                    <p className="text-xs xl:text-xl text-[#222]">遞補備取通知</p>
                                </div>
                            </div>
                        </li>
                    </ol>
                </div>
            </div>
        </>
    )
}

export default Enrollment
