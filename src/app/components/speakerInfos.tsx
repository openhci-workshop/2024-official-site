'use client'

import clsx from 'clsx'
import styled from 'styled-components'

const speakersData = [
    { name: '王大明', info: '台大 資工', position: '教授' },
    { name: '王大明', info: '台大 資工', position: '教授' },
    { name: '王大明', info: '台大 資工', position: '教授' },
    { name: '王大明', info: '台大 資工', position: '教授' },
]
const CustomScrollbar = styled.div`
    width: 100%;
    ::-webkit-scrollbar {
        height: 8px;
    }

    ::-webkit-scrollbar-track {
        background: rgba(241, 241, 241, 0.6);
    }

    ::-webkit-scrollbar-thumb {
        background: #9e9e9e;
        border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #555;
    }
`
const SpeakerInfo = () => {
    return (
        <>
            <div
                data-aos="fade-up"
                className="pt-12 md:pt-8 flex flex-col items-start w-full  gap-[22px] xl:gap-[40px]  "
            >
                <span className="font-semibold text-md xl:text-3xl md:text-2xl">講者資訊</span>
                <CustomScrollbar>
                    <div className="flex w-full gap-5 pb-2 overflow-auto ">
                        {speakersData.map((speaker, index) => {
                            const gradientStyle =
                                index % 2 !== 0
                                    ? 'from-white from-20% via-[#CAD9DF] via-50% to-[#F2D4CD] to-70%'
                                    : 'from-[#CAD9DF] from-0% via-[#F2D4CD] via-49% to-white to-70%'

                            return (
                                <div key={index} className="flex flex-col w-full">
                                    <div
                                        className={clsx(
                                            'min-w-[136px] xl:w-full h-[136px] xl:h-[240px] mb-[11px] xl:mb-[20px] rounded-lg xl:rounded-2xl',
                                            'bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))]',
                                            gradientStyle
                                        )}
                                    ></div>
                                    <div className="flex flex-col ">
                                        <span className="text-xs font-medium xl:text-xl md:text-base">
                                            姓名 {speaker.name}
                                        </span>
                                        <span className="text-xxs xl:text-base md:text-xs">
                                            學校 科系 {speaker.info}
                                        </span>
                                        <span className="text-xxs xl:text-base md:text-xs">
                                            職稱 {speaker.position}
                                        </span>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </CustomScrollbar>
            </div>
            <div id="info"></div>
        </>
    )
}

export default SpeakerInfo
