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
            '聆聽人機互動先修概念',
            '學習設計思考概念',
            '了解基本Arduino和Processing技術',
            '討論工作坊作品著重面向',
        ],
    },
    {
        title: '前置工作坊',
        date: '6/23（日）',
        contents: [
            '聆聽人機互動先修概念',
            '學習設計思考概念',
            '了解基本Arduino和Processing技術',
            '討論工作坊作品著重面向',
        ],
    },
    {
        title: '正式工作坊',
        date: '7/4（四）',
        contents: [
            '聆聽人機互動先修概念',
            '學習設計思考概念',
            '了解基本Arduino和Processing技術',
            '討論工作坊作品著重面向',
        ],
    },
    {
        title: '正式工作坊',
        date: '7/5（五）',
        contents: [
            '聆聽人機互動先修概念',
            '學習設計思考概念',
            '了解基本Arduino和Processing技術',
            '討論工作坊作品著重面向',
        ],
    },
    {
        title: '正式工作坊',
        date: '7/6（六）',
        contents: [
            '聆聽人機互動先修概念',
            '學習設計思考概念',
            '了解基本Arduino和Processing技術',
            '討論工作坊作品著重面向',
        ],
    },
    {
        title: '正式工作坊',
        date: '7/7（日）',
        contents: [
            '聆聽人機互動先修概念',
            '學習設計思考概念',
            '了解基本Arduino和Processing技術',
            '討論工作坊作品著重面向',
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
            if (window.innerWidth < 1280) {
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
            <div className="flex flex-col w-full gap-0 xl:flex-row xl:gap-4">
                <div className="flex justify-start gap-2 xl:gap-4">
                    {['前置 D1', '前置 D2'].map((label, index) => (
                        <Button
                            key={index}
                            size="md"
                            radius="full"
                            className={clsx(
                                'text-xs xl:text-base font-medium md:text-sm',
                                activeButton === index ? 'bg-[#94AAC1] text-white' : 'bg-[#E9E9E9] text-[#222]'
                            )}
                            onClick={() => handleButtonClick(index)}
                        >
                            {label}
                        </Button>
                    ))}
                </div>

                <div className="flex gap-2 xl:gap-4 justify-start mt-[22px] xl:mt-0">
                    {['正式 D1', '正式 D2', '正式 D3', '正式 D4'].map((label, index) => (
                        <Button
                            key={index + 2}
                            size="md"
                            radius="full"
                            className={clsx(
                                'text-xs xl:text-base font-medium md:text-sm',
                                activeButton === index + 2 ? 'bg-[#94AAC1] text-white' : 'bg-[#E9E9E9] text-[#222]'
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
                    className=" flex gap-4 xl:gap-6 overflow-x-auto max-w-[600px] sm:max-w-[680px] md:max-w-[670px] lg:max-w-[1040px] xl:w-[1040px] pr-[300px] sm:pr-[390px] md:pr-[400px] lg:pr-[550px] xl:pr-[690px] pb-4"
                    ref={scrollContainerRef}
                >
                    {agendaDatas.map((agenda, index) => (
                        <div
                            key={index}
                            className="w-[200px] md:w-[250px] xl:w-[347px] h-[233px] md:h-[300px] xl:h-[385px] p-4 xl:px-7 xl:py-6 flex-shrink-0 flex flex-col justify-between items-center rounded-3xl"
                            style={{
                                backgroundImage: 'url(/card.png)',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        >
                            <div className="w-[174px] md:w-[220px] md:h-[220px] xl:w-[292px] h-[158px] xl:h-[276px] flex flex-col bg-[#D9D9D9]/25 rounded-2xl px-4 xl:px-7 items-start justify-center text-[#222] py-4">
                                <div className="flex flex-row items-start w-full gap-1 xl:flex-col xl:justify-end xl:gap-0 md:flex-col">
                                    <span className="text-sm font-medium md:leading-5 xl:text-2xl md:text-xl">
                                        {agenda.title}
                                    </span>
                                    <span className="text-xxs xl:text-base md:text-base md:leading-8">
                                        {agenda.date}
                                    </span>
                                </div>
                                <ul className="pl-4 list-disc xl:pl-8">
                                    {agenda.contents.map((content, index) => (
                                        <li key={index} className="text-xxs xl:text-base md:text-sm">
                                            {content}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <Button
                                radius="full"
                                size="sm"
                                className="bg-[#E9E9E9] text-[#222] text-xs xl:text-xl md:text-base font-semibold w-full xl:py-6"
                            >
                                詳細日程表
                            </Button>
                        </div>
                    ))}
                </div>{' '}
            </CustomScrollbar>
        </div>
    )
}

export default Agenda
