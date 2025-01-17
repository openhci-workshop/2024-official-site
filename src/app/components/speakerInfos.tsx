'use client'

import { useState } from 'react'
import clsx from 'clsx'
import styled from 'styled-components'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import { Button } from '@nextui-org/react'

import Image from 'next/image'

const speakersData = [
    {
        name: '陳盈羽',
        info: '國立陽明交通大學<br>傳播與科技學系',
        position: '助理教授',
        category: '講師',
        img: '/speakers/陳盈羽.jpg',
    },
    {
        name: '鄭宇婷',
        info: '國立臺灣科技大學<br>設計學系',
        position: '助理教授',
        category: '講師',
        img: '/speakers/鄭宇婷.jpg',
    },
    {
        name: '宮保睿',
        info: '實踐大學<br>工業產品設計學系',
        position: '專任助理教授／推測設計師',
        category: '講師',
        img: '/speakers/宮保睿.jpg',
    },
    { 
        name: '李冠慰', 
        info: 'HTC XR體驗設計研究', 
        position: '資深經理', 
        category: '講師', 
        img: '/speakers/李冠慰.jpg' 
    },
    { 
        name: '侯宗佑', 
        info: '美國康乃爾大學', 
        position: '資訊科學博士', 
        category: '講師', 
        img: '/speakers/侯宗佑.jpg' 
    },
    {
        name: '賴楨璾',
        info: '國立臺灣科技大學<br>設計學系',
        position: '設計師',
        category: '講師',
        img: '/speakers/賴楨璾.jpg',
    },
    {
        name: '曾唯哲',
        info: 'ViewSonic',
        position: 'UX/UI Designer',
        category: '講師',
        img: '/speakers/曾唯哲.jpg',
    },
    {
        name: '余能豪',
        info: '國立臺灣科技大學<br>設計學系',
        position: '副教授',
        category: '評審',
        img: '/speakers/余能豪.jpg',
    },
    {
        name: '顏羽君',
        info: '國立陽明交通大學<br>資訊工程學系',
        position: '助理教授',
        category: '評審',
        img: '/speakers/顏羽君.jpg',
    },
    {
        name: '蔡文傑',
        info: '臺大創新設計學院',
        position: '專案計畫助理教授',
        category: '評審',
        img: '/speakers/蔡文傑.jpg',
    },
    {
        name: '陳美伶',
        info: '悠識數位 研究與內容策略',
        position: '副總監',
        category: '評審',
        img: '/speakers/陳美伶.jpg',
    },
    // {
    //     name: '洪燕茹',
    //     info: '',
    //     position: '亞太服務設計協會副秘書長<br>職涯諮詢師<br>職游共同創辦人',
    //     category: '評審',
    //     img: '/speakers/洪燕茹.jpeg',
    // },
    {
        name: '康涵慈',
        info: '',
        position: '康林生活與 Social AED<br>共同創辦人',
        category: '評審',
        img: '/speakers/康涵慈.png',
    },    
    {
        name: '鄭龍磻',
        info: '國立臺灣大學<br>資訊工程學系',
        position: '副教授',
        category: '顧問',
        img: '/speakers/鄭龍磻.jpg',
    },
    {
        name: '蔡欣叡',
        info: '國立政治大學<br>資訊系與數位內容學程',
        position: '副教授',
        category: '顧問',
        img: '/speakers/蔡欣叡.png',
    },
    {
        name: '游創文',
        info: '國立清華大學<br>藝術學院科技藝術研究所',
        position: '專任副教授',
        category: '顧問',
        img: '/speakers/游創文.jpg',
    },
    {
        name: '黃仲菁',
        info: '國立成功大學<br>全校不分系學士學位學程/規劃與設計學院/通識教育中心',
        position: '助理教授',
        category: '顧問',
        img: '/speakers/黃仲菁.jpg',
    },
    {
        name: '張婉鈴',
        info: '國立成功大學<br>工業設計學系',
        position: '助理教授',
        category: '顧問',
        img: '/speakers/張婉鈴.jpg',
    },
    {
        name: '簡瑋麒',
        info: '國立成功大學<br>工業設計學系',
        position: '助理教授',
        category: '顧問',
        img: '/speakers/簡瑋麒.jpeg',
    },    
    {
        name: '陳啟彰',
        info: '',
        position: '亞太服務設計協會理事<br>領潮創意設計體驗研究設計顧問',
        category: '評審',
        img: '/speakers/陳啟彰.jpeg',
    },
    {
        name: '莊以琳',
        info: '',
        position: 'DeepLearning.AI UI/UX Designer',
        category: '評審',
        img: '/speakers/莊以琳.jpeg',
    },
]

const categories = ['講師', '評審', '顧問']

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
const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3.1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow className="next-arrow" style={{}} onClick={() => {}} />,
    prevArrow: <SamplePrevArrow className="prev-arrow" style={{}} onClick={() => {}} />,
    responsive: [
        {
            breakpoint: 1500,
            settings: {
                slidesToShow: 3.1,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2.2,
                slidesToScroll: 2,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1.7,
                slidesToScroll: 1,
                arrows: false,
            },
        },
    ],
}
const SpeakerInfo = () => {
    const [selectedCategory, setSelectedCategory] = useState('講師')

    const filteredSpeakers = speakersData.filter((speaker) => speaker.category === selectedCategory)

    const handleButtonClick = (category: string) => {
        setSelectedCategory(category)
    }

    return (
        <>
            <div data-aos="fade-up" className="pt-8 flex flex-col items-start w-full  gap-[22px] xl:gap-[40px]">
                <span className="font-semibold text-md xl:text-3xl md:text-2xl drop-shadow-[0px_5px_10px_rgba(256,256,256,1)]">
                    講者資訊
                    {/* <span className="ml-1 text-xs font-medium lg:text-xl md:text-base">（陸續更新中...）</span> */}
                </span>
                <div className="flex gap-2 md:gap-4">
                    {categories.map((category, index) => (
                        <Button
                            key={index}
                            size="md"
                            radius="full"
                            className={clsx(
                                // 'text-xs xl:text-base font-medium md:text-sm',                                
                                'text-base font-medium',
                                selectedCategory === category
                                    ? 'bg-[#94AAC1] text-white'
                                    : 'bg-[#E9E9E9] text-[#636B76]'
                            )}
                            onClick={() => handleButtonClick(category)}
                        >
                            {category}
                        </Button>
                    ))}
                </div>
                <div className="hidden w-full h-full lg:block">
                    <Slider {...settings} key={selectedCategory}>
                        {filteredSpeakers.map((speaker, index) => {
                            return (
                                <div
                                    key={index}
                                    className="flex flex-col bg-white/30 backdrop-blur-sm border-3 rounded-2xl border-b-violet-200 border-r-[#CAD9DF]"
                                >
                                    <div className="w-full md:h-[285px] lg:h-[300px] 2xl:h-[380px]">
                                        {speaker.img && (
                                            <Image
                                                src={speaker.img}
                                                alt={speaker.name}
                                                className="object-cover object-center w-full h-full  rounded-t-2xl  "
                                                width={300}
                                                height={300}
                                            />
                                        )}
                                    </div>
                                    <div className="flex flex-col px-4 pb-4 h-[145px]">
                                        <span className="text-xs font-medium lg:text-lg md:text-base">
                                            {speaker.name}
                                        </span>
                                        <span
                                            className="mb-1 font-medium text-xxs xl:text-sm lg:text-xs md:text-xs"
                                            dangerouslySetInnerHTML={{ __html: speaker.info }}
                                        ></span>
                                        {/* <span className="text-xxs xl:text-base md:text-xs">{speaker.position}</span> */}
                                        <span
                                            className="text-xxs xl:text-base md:text-xs"
                                            dangerouslySetInnerHTML={{ __html: speaker.position }}
                                        ></span>
                                    </div>
                                </div>
                            )
                        })}
                    </Slider>
                </div>

                <CustomScrollbar>
                    <div className="block lg:hidden">
                        <div className="flex w-full gap-5 pb-2 overflow-auto md:gap-8 ">
                            {filteredSpeakers.map((speaker, index) => {
                                return (
                                    <div
                                        key={index}
                                        className="flex flex-col  bg-white/30 backdrop-blur-sm border-3 border-b-violet-200 border-r-[#CAD9DF] rounded-2xl"
                                    >
                                        <div className="w-[185px] h-[222px] md:w-[225px] md:h-[285px] lg:w-[270px] lg:h-[360px] mb-[10px] md:mb-[13px] ">
                                            {speaker.img && (
                                                <Image
                                                    src={speaker.img}
                                                    alt={speaker.name}
                                                    className="object-cover w-full h-full rounded-t-2xl md:rounded-t-2xl "
                                                    width={300}
                                                    height={300}
                                                />
                                            )}
                                        </div>
                                        <div className="flex flex-col px-4 h-[80px] md:h-[95px]">
                                            <span className="text-xs font-medium xl:text-xl md:text-base">
                                                {speaker.name}
                                            </span>
                                            <span
                                                className="text-xxs xl:text-base md:text-xs"
                                                dangerouslySetInnerHTML={{ __html: speaker.info }}
                                            ></span>
                                            {/* <span className="text-xxs xl:text-base md:text-xs">{speaker.position}</span> */}
                                            <span
                                                className="text-xxs xl:text-base md:text-xs"
                                                dangerouslySetInnerHTML={{ __html: speaker.position }}
                                            ></span>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </CustomScrollbar>
            </div>
            <div id="info"></div>
        </>
    )
}

export default SpeakerInfo
