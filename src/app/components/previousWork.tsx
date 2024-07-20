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
import Zoom from './zoom'

export default function PreviousWork() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure()
    const [selectedImage, setSelectedImage] = React.useState<string | null>(null) // Add state for selected image
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
            title: 'Virtual Rehearsal',
            description:
                '本專案結合 AI 和真人參與的優點，提供兩種觀眾 Avatar: 一種是 LLM Avatar，另一種是連線真人的 Avatar。兩者使用相同的擬人形態，模糊其區別，讓使用者在演講過程中無法辨識和預測觀眾身份，進而感受到台下真人帶來的壓力，提升真實感。這樣的設計結合 AI 和少量真人的參與，無需大量人力資源即可創建大型模擬環境，提高訓練效率和效果。此外， 真人和 LLM Avatar 都能與使用者互動並提供回饋，實現更完整的演講訓練效果。',
            image: '/work/第一組.png',
        },
        {
            id: '2',
            title: 'ChronoClones',
            description:
                ' ChronoClones 是一款透過分身合作尋找寶藏的虛擬實境 (VR) 遊戲。基於 Clonemator 的技術，我們增加了一項限制 Temporal Echo（時間輪迴），此機制讓 VR 世界的場景與時間不斷重置。使用者在每一次輪迴中的動作和移動都會被記錄下， 並在之後以分身的形式和使用者同時出現於每一次輪迴中，使用者可以不斷和過去的自己互動來完成任務。',
            image: '/work/第二組.png',
        },
        {
            id: '3',
            title: 'ME_NU',
            description:
                'ME_NU 是一款結合大型語言模型 (LLM) 的點餐輔助工具。我們利用 LLM 理解需求、彙整資訊、生成文字的特性，來協助了解用戶偏好、統整餐點評價，並產生餐點推薦說明。透過 Al 技術，我們希望幫助用戶在資訊充足的情況下，更有效率地選到符合用戶需求的餐點。',
            image: '/work/第三組.jpg',
        },
        {
            id: '4',
            title: '溫情座位系統',
            description:
                '設計溫情座位系統介面，橋接需求者與自願者的「狀態」與「意願」，以網頁前端技術設計QRCODE掃描連動座椅，使乘坐者可通過讓座系統介面匿名提出請求;同時通過較無指向性的Emoji標誌，讓所有乘坐者可以彈性的表達自身狀態，讓需求更易被識別，並提升大眾對於乘坐者心理狀態的覺察、促進積極的善意循環。',
            image: '/work/第四組.png',
        },
        {
            id: '5',
            title: '阿公阿嬤哇想曆',
            description:
                '阿公阿嬤哇想曆是一個專屬於阿公阿嬤的電子日曆一—保留傳統日曆的概念，並能讓家人每天傳送 照 片與文字訊息，讓長輩隨時看到最新的家人動態。 透過這個裝置，無論子孫身處何地，都能輕分享生活點滴，拉近與長輩的距離， 讓愛與關懷時刻相伴在阿公阿嬤的身邊。',
            image: '/work/第五組.png',
        },
        {
            id: '6',
            title: '衣二衫',
            description:
                '購買二手衣，是一種延長衣物生命週期、促進永續循環的方式，希望透過科技使永續行為具象化並富有吸引力，並藉社群媒體讓使用者被動被推播的同時也能成為主動傳播者。我們的解方是，讓使用者在二手衣店試穿衣物後，與 AR 裝置互動，並根據衣服風格呈現視覺特效、音樂和燈光。為求以新穎的實體互動方式促使使用者在社群動員的氛圍下重新定義衣物潮流。',
            image: '/work/第六組.png',
        },
        {
            id: '7',
            title: 'knock knock',
            description:
                '此題目期待回到人與物之間的互動，發掘更多「使用」以外的內在動機。本次設計想討論在「遠距關係」中，物件可以如何「觸發」遠距使用者之間的交流。我們發現 「門」不僅是不同空間的出入口，同時也是使用者間溝通的媒介。「敲門」是禮貌性詢問對方的狀態，「開門」則是接受一段對話的開端。承接這個脈絡，我們想延續敲門詢問與開門回應互動行為，做為遠距關係中觸發溝通的方式，並跨越空間交流上的限制。',
            image: '/work/第七組.png',
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
                    right: '-10px',
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
                    left: '-10px',
                    transform: 'scale(1.5)',
                    borderRadius: '999px',
                    zIndex: 999,
                }}
                onClick={onClick}
            />
        )
    }
    const handleSeeMore = (work: Work) => {
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
                <span className="font-semibold text-md md:text-2xl xl:text-3xl drop-shadow-[0px_5px_10px_rgba(256,256,256,1)]">
                    本屆作品
                </span>
                <Suspense fallback={<p>Loading feed...</p>}>
                    <div className="w-full px-1">
                        <Slider {...settings} className=" w-full h-[225px] md:h-[280px] lg:h-[300px] xl:h-full ">
                            {previousWorks.map((work) => (
                                <Card
                                    key={work.id}
                                    className="px-4 py-3 xl:py-6 xl:px-6  border-3 border-b-violet-200 border-r-[#CAD9DF] bg-[url('/card_detail.png')] bg-cover bg-center	 "
                                    shadow="sm"
                                >
                                    <CardBody className="rounded-lg bg-white/25 backdrop-blur ">
                                        <div className="flex items-center justify-between ">
                                            <div className="grid grid-cols-6 gap-5">
                                                <div className="flex justify-center col-span-3 md:col-start-1 md:col-end-4 2xl:col-start-1 2xl:col-end-3">
                                                    <Image
                                                        src={work.image}
                                                        width={400}
                                                        height={300}
                                                        alt="Album cover"
                                                        className="object-contain rounded-lg"
                                                    />
                                                </div>
                                                <div className="flex flex-col items-start justify-center col-span-3 md:col-start-4 md:col-end-7 2xl:col-start-3 2xl:col-end-7">
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
                className="text-[#636B76] border-3 border-b-violet-200 border-r-[#CAD9DF] bg-[url('/card_detail.png')] bg-cover bg-center"
                scrollBehavior="inside"
                classNames={{
                    backdrop: 'bg-gradient-to-t from-[#e7bbb1]/40 to-[#94aac1]/40 backdrop-opacity-20',
                }}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-row gap-1 ">
                                <div className="text-3xl ">{currentWork.title}</div>
                            </ModalHeader>
                            <ModalBody className="flex flex-col mx-8 rounded-lg md:flex-row bg-white/25">
                                <Image
                                    priority
                                    src={currentWork.image}
                                    width={400}
                                    height={300}
                                    alt="Album cover"
                                    className=" object-contain md:w-1/2 lg:w-full 2xl:w-1/2 "
                                />

                                <div className="w-full text-base leading-8 md:px-2 lg:px-8">
                                    {currentWork.description}
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button
                                    className="self-end mt-4 font-medium bg-white/25 border-2 border-[#636B76]/10 text-[#636B76] "
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
