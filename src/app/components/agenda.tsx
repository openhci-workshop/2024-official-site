'use client'

import React, { useRef, useEffect, useState } from 'react'
import clsx from 'clsx'
import { Button, Card } from '@nextui-org/react'
import styled from 'styled-components'

const agendaDatas = [
    {
        title: '前置工作坊',
        date: '6/22（六）',
        contents: [
            'HCI Intro 曾唯哲',
            '設計課',
            '開場演講 陳盈羽',
            '演講 賴楨璾',
            // '08:30 - 09:00 學員報到',
            // '09:00 - 10:00 HCI Intro 曾唯哲',
            // '10:00 - 11:00 設計課 1',
            // '11:00 - 12:00 設計課 2',
            // '12:00 - 13:00 午餐',
            // '13:00 - 14:00 開場演講 陳盈羽',
            // '14:00 - 15:00 學員討論',
            // '15:00 - 17:00 演講 賴楨璾',
            // '17:00 - 18:00 晚餐',
            // '18:00 - 19:00 設計課 3',
            // '19:00 - 21:00 學員討論',
        ],
    },
    {
        title: '前置工作坊',
        date: '6/23（日）',
        contents: [            
            '顧問時間',            
            '技術課 Arduino',
            '技術課 Rapid Prototyping',
            '技術課 Unity',
            // '08:30 - 09:00 學員報到',
            // '09:00 - 11:00 技術課 Unity',
            // '11:00 - 12:00 技術課 Rapid Prototyping',
            // '12:00 - 13:00 午餐',
            // '13:00 - 14:30 學員討論',
            // '14:30 - 17:00 顧問時間',
            // '17:00 - 18:00 晚餐',
            // '18:00 - 19:30 技術課 Arduino',
            // '19:30 - 21:00 學員討論',
        ],
    },
    {
        title: '正式工作坊',
        date: '7/4（四）',
        contents: [
            '演講 鄭宇婷',
            '期中提案',
            '學員討論',
            // '08:30 - 09:00 學員報到',
            // '09:00 - 10:00 演講',
            // '10:00 - 12:00 學員討論',
            // '12:00 - 13:00 午餐',
            // '13:00 - 14:30 學員討論',
            // '14:30 - 17:00 期中提案',
            // '17:00 - 18:00 晚餐',
            // '18:00 - 21:00 學員討論',
        ],
    },
    {
        title: '正式工作坊',
        date: '7/5（五）',
        contents: [            
            '演講',
            '演講 侯宗佑',
            '學員討論',
            // '08:30 - 09:00 學員報到',
            // '09:00 - 10:00 學員討論',
            // '10:00 - 12:00 演講',
            // '12:00 - 13:00 午餐',
            // '13:00 - 14:30 學員討論',
            // '14:30 - 17:00 演講',
            // '17:00 - 18:00 晚餐',
            // '18:00 - 21:00 學員討論',
        ],
    },
    {
        title: '正式工作坊',
        date: '7/6（六）',
        contents: [
            '演講 李冠慰',
            '學員討論',            
            // '08:30 - 09:00 學員報到',
            // '09:00 - 12:00 學員討論',
            // '12:00 - 13:00 午餐',
            // '13:00 - 14:30 演講',
            // '14:30 - 17:00 學員討論',
            // '17:00 - 18:00 晚餐',
            // '18:00 - 21:00 學員討論',
        ],
    },
    {
        title: '正式工作坊',
        date: '7/7（日）',
        contents: [
            '學員討論',
            '期末發表',
            '頒獎 / 閉幕',
            // '08:30 - 09:00 學員報到',
            // '09:00 - 11:00 學員討論',
            // '11:00 - 12:00 會場布置',
            // '12:00 - 13:00 午餐',
            // '13:00 - 17:30 期末發表',
            // '17:30 - 18:30 頒獎 / 閉幕',
        ],
    },
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

const Agenda = () => {
    const scrollContainerRef = useRef<HTMLDivElement | null>(null)
    const [activeButton, setActiveButton] = useState(0)
    const cardWidth = 370
    const smallCardWidth = 216

    const [currentCardWidth, setCurrentCardWidth] = useState(cardWidth)

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setCurrentCardWidth(smallCardWidth)
            } else {
                setCurrentCardWidth(cardWidth)
            }
        }

        window.addEventListener('resize', handleResize)
        handleResize()

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    useEffect(() => {
        const handleScroll = () => {
            if (scrollContainerRef.current) {
                const scrollLeft = scrollContainerRef.current.scrollLeft
                const activeIndex = Math.round(scrollLeft / currentCardWidth)
                setActiveButton(activeIndex)
            }
        }

        if (scrollContainerRef.current) {
            scrollContainerRef.current.addEventListener('scroll', handleScroll)
        }

        return () => {
            if (scrollContainerRef.current) {
                scrollContainerRef.current.removeEventListener('scroll', handleScroll)
            }
        }
    }, [currentCardWidth])

    const handleButtonClick = (index: number) => {
        console.log('Button clicked:', index) // Log which button was clicked
        console.log('activeButton:', activeButton)
        const scrollToPosition = index * currentCardWidth
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollTo({ left: scrollToPosition, behavior: 'smooth' })
        }
    }

    return (
        <div data-aos="zoom-in" className="flex flex-col items-start w-full gap-[22px] xl:gap-[40px] ">
            <span className="font-semibold text-md xl:text-3xl md:text-2xl">詳細日程 Agenda</span>
            <div className="flex flex-col w-full gap-0 md:flex-row md:gap-4">
                <div className="flex justify-start gap-2 md:gap-4">
                    {['前置 D1', '前置 D2'].map((label, index) => (
                        <Button
                            key={index}
                            size="md"
                            radius="full"
                            className={clsx(
                                'text-xs xl:text-base font-medium md:text-sm',
                                activeButton === index ? 'bg-[#94AAC1] text-white' : 'bg-[#E9E9E9] text-[#636B76]'
                            )}
                            onClick={() => handleButtonClick(index)}
                        >
                            {label}
                        </Button>
                    ))}
                </div>

                <div className="flex gap-2 md:gap-4 justify-start mt-[22px] md:mt-0">
                    {['正式 D1', '正式 D2', '正式 D3', '正式 D4'].map((label, index) => (
                        <Button
                            key={index + 2}
                            size="md"
                            radius="full"
                            className={clsx(
                                'text-xs xl:text-base font-medium md:text-sm',
                                activeButton === index + 2 ? 'bg-[#94AAC1] text-white' : 'bg-[#E9E9E9] text-[#636B76]'
                            )}
                            onClick={() => handleButtonClick(index + 2)}
                        >
                            {label}
                        </Button>
                    ))}
                </div>
            </div>
            <CustomScrollbar>
                <div
                    className=" flex gap-4 md:gap-6 overflow-x-auto max-w-[2400px] pr-[50%] sm:pr-[58%] lg:pr-[60%] xl:pr-[71%] pb-4"
                    ref={scrollContainerRef}
                >
                    {agendaDatas.map((agenda, index) => (
                        <div
                            key={index}
                            className="w-[200px] md:w-[347px] h-[233px] md:h-[385px] p-4 md:px-7 md:py-6 flex-shrink-0 flex flex-col justify-between items-center rounded-3xl"
                            style={{
                                backgroundImage: 'url(/card.png)',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        >
                            <div className="w-[174px] md:w-[292px] h-[158px] md:h-[276px] flex flex-col bg-[#D9D9D9]/25 rounded-2xl px-4 md:px-7 items-start justify-start pt-6 md:pt-10">
                                <div className="flex flex-row items-center w-full gap-2 md:gap-1 md:flex-col md:items-start">
                                    <span className="text-sm font-medium xl:text-2xl md:text-xl">
                                        {agenda.title}
                                    </span>
                                    <span className="text-xxs xl:text-base md:text-base">
                                        {agenda.date}
                                    </span>
                                </div>
                                <ul className="pl-4 list-disc md:pl-8 mt-2 space-y-2">
                                    {agenda.contents.map((content, index) => (
                                        <li key={index} className="text-xxs xl:text-base md:text-sm">
                                            {content}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            {/* <Button
                                radius="full"
                                size="sm"
                                className="bg-[#E9E9E9] text-xs xl:text-xl md:text-base font-semibold w-full md:py-6"
                            >
                                詳細日程表
                            </Button> */}
                        </div>
                    ))}
                </div>{' '}
            </CustomScrollbar>
        </div>
    )
}

export default Agenda