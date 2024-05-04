'use client'

import React from 'react'
import Image from 'next/image'
import { Card, CardBody, Button } from '@nextui-org/react'
import { NextIcon } from './nextIcon'
import { PreviousIcon } from './previousIcon'

export default function PreviousWork() {
    const previousWorks = [
        {
            id: '1',
            title: '歷屆作品一',
            description:
                '上班族每天都必須面對龐大的工作壓力，長期容易使人陷入低潮漩渦，造成身心靈影響。「情緒波紋」是一款桌上型互動裝置，透過按壓，將情緒轉化成一幅獨特又錯落有致的情緒波紋。透過觀察自身情緒及掌握長期的情緒變化，有助於心理健康。',
            image: '/images/album-cover.png',
        },
        {
            id: '2',
            title: '歷屆作品二',
            description:
                '上班族每天都必須面對龐大的工作壓力，長期容易使人陷入低潮漩渦，造成身心靈影響。「情緒波紋」是一款桌上型互動裝置，透過按壓，將情緒轉化成一幅獨特又錯落有致的情緒波紋。透過觀察自身情緒及掌握長期的情緒變化，有助於心理健康。',
            image: '/images/album-cover.png',
        },
        {
            id: '3',
            title: '歷屆作品三',
            description:
                '上班族每天都必須面對龐大的工作壓力，長期容易使人陷入低潮漩渦，造成身心靈影響。「情緒波紋」是一款桌上型互動裝置，透過按壓，將情緒轉化成一幅獨特又錯落有致的情緒波紋。透過觀察自身情緒及掌握長期的情緒變化，有助於心理健康。',
            image: '/images/album-cover.png',
        },
        {
            id: '4',
            title: '歷屆作品四',
            description:
                '上班族每天都必須面對龐大的工作壓力，長期容易使人陷入低潮漩渦，造成身心靈影響。「情緒波紋」是一款桌上型互動裝置，透過按壓，將情緒轉化成一幅獨特又錯落有致的情緒波紋。透過觀察自身情緒及掌握長期的情緒變化，有助於心理健康。',
            image: '/images/album-cover.png',
        },
    ]

    const [currentWork, setCurrentWork] = React.useState(previousWorks[0])
    const [counter, setCounter] = React.useState(0)

    function handlePrevious() {
        if (counter > 0) {
            setCounter(counter - 1)
        }
        if (counter === 0) {
            setCounter(previousWorks.length - 1)
        }
        setCurrentWork(previousWorks[counter])
    }

    function handleNext() {
        if (counter < previousWorks.length - 1) {
            setCounter(counter + 1)
        }
        if (counter === previousWorks.length - 1) {
            setCounter(0)
        }
        setCurrentWork(previousWorks[counter])
    }

    return (
        <>
            <div className="pt-12 flex flex-col items-start w-[390px] xl:w-[1040px] gap-[22px] xl:gap-[40px] text-[#222]">
                <span className="font-semibold text-md xl:text-3xl">歷屆作品</span>
                <Card className="py-3 xl:py-6">
                    <CardBody>
                        <div className="flex items-center justify-between">
                            <Button
                                isIconOnly
                                className="data-[hover]:bg-foreground/10"
                                radius="full"
                                variant="light"
                                onPress={() => handlePrevious()}
                            >
                                <PreviousIcon />
                            </Button>

                            <div className="grid grid-cols-6 gap-5">
                                <div className="flex justify-center col-span-6 xl:col-start-1 xl:col-end-3">
                                    <Image
                                        src={currentWork.image}
                                        width={3000}
                                        height={300}
                                        alt="Album cover"
                                        className="rounded-lg"
                                    />
                                </div>
                                <div className="col-span-6 xl:col-start-3 xl:col-end-7">
                                    <h3 className="mb-5 font-medium text-md xl:text-2xl">{currentWork.title}</h3>
                                    <p className="text-base xl:text-xl">{currentWork.description}</p>
                                </div>
                            </div>

                            <Button
                                isIconOnly
                                className="data-[hover]:bg-foreground/10"
                                radius="full"
                                variant="light"
                                onPress={() => handleNext()}
                            >
                                <NextIcon />
                            </Button>
                        </div>
                    </CardBody>
                </Card>
            </div>
            <div id="members"></div>
        </>
    )
}
