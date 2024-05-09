'use client'

import React from 'react'
import Image from 'next/image'
import {
    Card,
    CardBody,
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
} from '@nextui-org/react'
import { NextIcon } from './nextIcon'
import { PreviousIcon } from './previousIcon'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Link from 'next/link'
import { Suspense } from 'react'

export default function PreviousWork() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure()
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        // nextArrow: <SampleNextArrow />,
        nextArrow: <SampleNextArrow className="next-arrow" style={{}} onClick={() => {}} />,
        // prevArrow: <SamplePrevArrow />,
        prevArrow: <SamplePrevArrow className="prev-arrow" style={{}} onClick={() => {}} />,
    }

    const previousWorks = [
        {
            id: '1',
            title: 'Emokit',
            description:
                '「我上班不能碰手機，是要怎麼跟你說^_^？？」Emokit 嘗試以科技輔具協助年輕且忙於工作的情侶克服溝通挑戰。年輕情侶多因爲彼此工作時間落差而產生溝通阻礙，Emokit 透過裝置互相連結，讓伴侶能夠藉由桌上型裝置傳達三種情緒提示給對方，同步彼此狀態，緩解伴侶之間延遲分享造成感情疏離的痛點。Emokit 期盼連結忙碌情侶分享情緒的一面，增加親密關係的幸福感。',
            image: '/images/previous_work/Emokit.png',
        },
        {
            id: '2',
            title: 'Ocean',
            description:
                '在這個資訊爭奪注意力的時代，你是否曾經禁不起手機震動和螢幕亮起的誘惑頻頻查看通知？就算開啟勿擾模式，你還是會常常看手機怕錯過重要訊息嗎？我們發現目前大學生在線下學習時常常被通知干擾，加上害怕錯過與重要他人的互動所造成的焦慮感，導致學習效率不彰。Ocean是一款結合裝置和App的藝術性產品，動態海浪代表著使用者學習時專注的狀態，而瓶中信則代表了重要聯絡人的訊息通知，不僅改造傳統手機通知呈現，更幫助FOMO大學生找回自己的時間，在資訊汪洋中不再載浮載沉，跟著學習專注航行。Follow me!',
            image: '/images/previous_work/Ocean.png',
        },
        {
            id: '3',
            title: 'Wander in Ｗonder',
            description:
                '轉動把手、齒輪轉動、簧片輕彈、音樂輕輕流瀉⋯⋯，看似直覺的一連串過程，你曾想過中間的過程是如何運作的嗎？Wander in Ｗonder 是一款結合 Reality Rift 概念的手搖式音樂盒，當使用者轉動音樂盒的把手時，會連動金屬圓筒開始轉動，即使圓筒上缺少金屬針，音梳看起來仍被某物所撥動，並發出樂聲。從人對於物理現象的心理模型出發，以移除零件創造出物理現象的斷裂，促發使用者運用想像接起裂隙。',
            image: '/images/previous_work/Wander_in_Ｗonder.png',
        },
        {
            id: '4',
            title: 'ALARM',
            description:
                '「嘿，你有想過當你沉浸在 VR 的世界時，身邊會發生什麼事情嗎？」在虛擬實境快速發展的時代，大多數玩家為了感受與現實的不同，沉浸在虛擬世界的體驗中。但當真實世界發生突發狀況或自然災害時，如何確保安全成為了重要的議題。ALARM 是一款領先的虛擬實境緊急通知系統，專為突發狀況和自然災害而設計。讓您在體驗虛擬世界時，仍能保持與真實世界的連繫，無論是火警、地震或其他緊急狀況。它結合了最新的虛擬實境技術，能夠即時感知周遭環境的變化，並透過視覺、聽覺及觸覺三種感知，將訊息傳遞給使用者。',
            image: '/images/previous_work/ALARM.png',
        },
        {
            id: '5',
            title: 'ImmersiTopia',
            description:
                'First Time? Long Time? 第一次的體驗總是擔心受怕，頻繁的等待總是漫長。常見的數位裝置中，內容讀取／載入多是以進度條呈現，觀看者甚至會分心查看其他事務。然而，隨著虛擬實境日漸興盛，使用者在體驗時往往無法輕易將眼鏡摘下，只能焦躁地看著索然無味的畫面痴痴地等候。「ImmersiTopia」因應而生，我們嘗試塑造VR沉浸式環境。對於初次使用者，期望能減緩陌生及徬徨不安的感受，資深使用者也可轉移等待載入的焦躁情緒，增加正面情緒以讓使用者加快載入的時間感。無論你是初次踏入VR這個世界，還是早已熟悉其中，都能嘗試體驗ImmersiTopia的協助來打發時間。',
            image: '/images/previous_work/ImmersiTopia.png',
        },
        {
            id: '6',
            title: 'Toast Mode',
            description:
                '你昨天有睡飽嗎？我們透過調查發現年齡介於19至25歲的年輕族群，平均比預期時間晚入睡30至180分鐘，且超過90％的人睡前使用社群媒體。這種拖延的情形可能導致睡眠不足，影響隔日精神狀態，並對健康造成長期影響。Toast Mode以烤吐司機早餐意象重新設計入睡到起床的旅程，透過捕捉早晨的情感與經驗，並將手機作為載體，融入社會意識，建立親友的睡眠習慣連結，為你建打造更健康的睡眠習慣！',
            image: '/images/previous_work/Toast_Mode.png',
        },
        {
            id: '7',
            title: 'SOUNDFIT',
            description:
                '工作時你會聽爵士樂、Lofi還是K-POP? 你可能會聽著KPOP做無需動腦的工作增加樂趣，當你不經意地開始動腦思考，漸漸地轉換工作狀態時卻發現KPOP變成干擾你思緒的外界資訊？好希望音樂能了解你，跟著你的工作狀態轉換歌曲? 許多研究指出，音樂與我們生理、情感和認知有強烈的連結，對我們的行為和思緒有顯著的影響。SOUNDFIT是耳罩式耳機結合Spotify外掛功能的產品，根據使用者當下的專注度、精神和生理數據，播放最適合當下工作狀態的歌曲，透過「對系統表達工作關鍵的兩種狀態」以及「系統向使用者採取生理數據」的雙向互動，增進人機與彼此的連結，打造前所未見的工作介面與體驗。',
            image: '/images/previous_work/SOUNDFIT.png',
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
    interface Work {
        id: string
        title: string
        description: string
        image: string
    }

    interface SampleArrowProps {
        className: string
        style: React.CSSProperties
        onClick: () => void
    }

    function SampleNextArrow(props: SampleArrowProps) {
        const { className, style, onClick } = props
        return (
            <div
                className={className}
                style={{
                    right: '-40px',
                    transform: 'scale(1.5)',
                    borderRadius: '999px',
                }}
                onClick={onClick}
            />
        )
    }

    interface SamplePrevArrowProps {
        className: string
        style: React.CSSProperties
        onClick: () => void
    }

    function SamplePrevArrow(props: SamplePrevArrowProps) {
        const { className, style, onClick } = props
        return (
            <div
                className={className}
                style={{
                    position: 'absolute',
                    left: '-40px',
                    transform: 'scale(1.5)',
                    borderRadius: '999px',
                }}
                onClick={onClick}
            />
        )
    }
    const handleSeeMore = (work) => {
        setCurrentWork(work)
        onOpen()
    }

    return (
        <>
            <div
                data-aos="fade-up"
                data-aos-offset="200"
                className=" md:px-0 pt-8 xl:pt-16 md:pt-4 flex flex-col items-start w-full gap-[22px] xl:gap-[40px] "
            >
                <span className="font-semibold  text-md md:text-2xl xl:text-3xl">歷屆作品</span>
                <Suspense fallback={<p>Loading feed...</p>}>
                    <div className="px-10 w-full">
                        <Slider {...settings} className=" w-full h-[380px] md:h-[280px] lg:h-[300px] xl:h-full ">
                            {previousWorks.map((work) => (
                                <Card
                                    key={work.id}
                                    className="px-4 py-3 xl:py-6 xl:px-6  border-3 border-b-violet-200 border-r-[#CAD9DF] "
                                    shadow="sm"
                                >
                                    <CardBody>
                                        <div className="flex items-center justify-between">
                                            <div className="grid grid-cols-6 gap-5">
                                                <div className="flex justify-center col-span-6 md:col-start-1 md:col-end-4 2xl:col-start-1 2xl:col-end-3">
                                                    <Image
                                                        src={work.image}
                                                        width={400}
                                                        height={300}
                                                        alt="Album cover"
                                                        className="rounded-lg object-contain"
                                                    />
                                                </div>
                                                <div className=" col-span-6 md:col-start-4 md:col-end-7 flex justify-center items-start flex-col 2xl:col-start-3 2xl:col-end-7">
                                                    <h3 className="mb-5 font-medium text-md lg:text-2xl text-[#636B76]">
                                                        {work.title}
                                                    </h3>
                                                    <p className="md:leading-7 lg:leading-7 text-sm lg:text-base xl:text-lg xl:leading-8 text-[#636B76] line-clamp-3 md:line-clamp-4 xl:line-clamp-5 2xl:line-clamp-6">
                                                        {work.description}
                                                    </p>

                                                    <Button
                                                        className="mt-4  self-end bg-gradient-to-r from-[#e7bbb1] to-[#94aac1] text-white font-medium"
                                                        size="sm"
                                                        radius="full"
                                                        onClick={() => handleSeeMore(work)}
                                                    >
                                                        see more...
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>
                            ))}
                        </Slider>
                    </div>
                </Suspense>
            </div>

            <Modal
                size="4xl"
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                className="text-[#636B76]"
                scrollBehavior="inside"
                classNames={{
                    backdrop: 'bg-gradient-to-t from-[#e7bbb1]/40 to-[#94aac1]/40 backdrop-opacity-20',
                }}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-row gap-1 ">
                                <div className=" text-3xl ">{currentWork.title}</div>
                            </ModalHeader>
                            <ModalBody className="flex flex-col md:flex-row">
                                <Image
                                    priority
                                    src={currentWork.image}
                                    width={400}
                                    height={300}
                                    alt="Album cover"
                                    className=" object-contain md:w-1/2 lg:w-full 2xl:w-1/2 "
                                />
                                <div className="md:px-2 lg:px-8 text-base w-full leading-8">
                                    {currentWork.description}
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button
                                    className="mt-4  self-end font-medium"
                                    size="sm"
                                    radius="full"
                                    onClick={onClose}
                                >
                                    關閉
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>

            <div id="members"></div>
        </>
    )
}
