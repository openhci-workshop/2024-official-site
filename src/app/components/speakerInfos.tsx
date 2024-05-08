'use client'

import clsx from 'clsx'
import styled from 'styled-components'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'

import Image from 'next/image'

const speakersData = [
    { name: '陳盈羽', info: '國立陽明交通大學<br>傳播與科技學系', position: '助理教授', img: '/speakers/陳盈羽.jpg' },
    { name: '鄭宇婷', info: '國立臺灣科技大學<br>設計學系', position: '助理教授', img: '/speakers/avatar.jpg' },
    { name: '李冠慰', info: 'HTC XR體驗設計研究', position: '資深經理', img: '/speakers/李冠慰.jpg' },
    { name: '陳美伶', info: '悠識數位 研究與內容策略', position: '副總監', img: '/speakers/陳美伶.jpg' },
    { name: '蔡文傑', info: '臺大創新設計學院', position: '專案計畫助理教授', img: '/speakers/蔡文傑.jpg' },
    { name: '洪燕茹', info: '職涯諮詢師', position: '職游 共同發起人', img: '/speakers/洪燕茹.jpeg' },
    { name: '侯宗佑', info: '美國康乃爾大學', position: '資訊科學博士', img: '/speakers/侯宗佑.jpg' },
    { name: '鄭龍磻', info: '國立臺灣大學 資訊工程學系', position: '副教授', img: '/speakers/鄭龍磻.jpg' },
    { name: '蔡欣叡', info: '國立政治大學<br>資訊系與數位內容學程', position: '副教授', img: '/speakers/蔡欣叡.png' },
    {
        name: '游創文',
        info: '國立清華大學<br>藝術學院科技藝術研究所',
        position: '專任副教授',
        img: '/speakers/游創文.jpg',
    },
    {
        name: '黃仲菁',
        info: '國立成功大學<br>全校不分系學士學位學程/規劃與設計學院/通識教育中心',
        position: '助理教授',
        img: '/speakers/黃仲菁.jpg',
    },
    {
        name: '陳啟彰',
        info: '國立成功大學 認知科學研究所 碩士',
        position: 'UXTW / 第三、四屆理事',
        img: '/speakers/陳啟彰.jpeg',
    },
    { name: '余能豪', info: '國立臺灣科技大學 設計學系', position: '副教授', img: '/speakers/余能豪.jpg' },
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
    slidesToShow: 4.1,
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
    return (
        <>
            <div
                data-aos="fade-up"
                className="pt-12 md:pt-8 flex flex-col items-start w-full  gap-[22px] xl:gap-[40px]  "
            >
                <span className="font-semibold text-md xl:text-3xl md:text-2xl">講者資訊</span>
                <div className="hidden w-full lg:block">
                    <Slider {...settings}>
                        {speakersData.map((speaker, index) => {
                            const gradientStyle =
                                index % 2 !== 0
                                    ? 'from-white from-20% via-[#CAD9DF] via-50% to-[#F2D4CD] to-70%'
                                    : 'from-[#CAD9DF] from-0% via-[#F2D4CD] via-49% to-white to-70%'

                            return (
                                <div key={index} className="flex flex-col ">
                                    <div
                                        // className={clsx(
                                        //     'w-[152px] h-[222px] md:w-[225px] md:h-[285px] lg:w-[270px] lg:h-[360px] mb-[11px] md:mb-[20px] rounded-lg md:rounded-2xl',
                                        //     'bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))]',
                                        //     gradientStyle
                                        // )}
                                        className="w-full lg:h-[300px] xl:h-[300px] 2xl:h-[360px] md:h-[285px]"
                                    >
                                        {speaker.img && (
                                            <Image
                                                src={speaker.img}
                                                alt={speaker.name}
                                                className="object-cover object-center w-full h-full border-2 rounded-lg md:rounded-2xl border-b-violet-200 border-r-[#CAD9DF] "
                                                width={300}
                                                height={300}
                                            />
                                        )}
                                    </div>
                                    <div className="flex flex-col ">
                                        <span className="text-xs font-medium lg:text-xl md:text-base">
                                            {speaker.name}
                                        </span>
                                        <span
                                            className="mb-1 font-medium text-xxs xl:text-base lg:text-sm md:text-xs"
                                            dangerouslySetInnerHTML={{ __html: speaker.info }}
                                        >
                                            {/* {speaker.info} */}
                                        </span>
                                        <span className="text-xxs xl:text-base lg:text-sm md:text-xs">
                                            {speaker.position}
                                        </span>
                                    </div>
                                </div>
                            )
                        })}
                    </Slider>
                </div>

                <CustomScrollbar>
                    <div className="block lg:hidden">
                        <div className="flex w-full gap-5 pb-2 overflow-auto md:gap-8 ">
                            {speakersData.map((speaker, index) => {
                                const gradientStyle =
                                    index % 2 !== 0
                                        ? 'from-white from-20% via-[#CAD9DF] via-50% to-[#F2D4CD] to-70%'
                                        : 'from-[#CAD9DF] from-0% via-[#F2D4CD] via-49% to-white to-70%'

                                return (
                                    <div key={index} className="flex flex-col ">
                                        <div
                                            className={clsx(
                                                'w-[152px] h-[222px] md:w-[225px] md:h-[285px] lg:w-[270px] lg:h-[360px] mb-[11px] md:mb-[20px] rounded-lg md:rounded-2xl',
                                                'bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))]',
                                                gradientStyle
                                            )}
                                        >
                                            {speaker.img && (
                                                <Image
                                                    src={speaker.img}
                                                    alt={speaker.name}
                                                    className="object-cover w-full h-full rounded-lg md:rounded-2xl"
                                                    width={300}
                                                    height={300}
                                                />
                                            )}
                                        </div>
                                        <div className="flex flex-col ">
                                            <span className="text-xs font-medium xl:text-xl md:text-base">
                                                {speaker.name}
                                            </span>
                                            <span className="text-xxs xl:text-base md:text-xs">{speaker.info}</span>
                                            <span className="text-xxs xl:text-base md:text-xs">{speaker.position}</span>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>{' '}
                    </div>
                </CustomScrollbar>
            </div>
            <div id="info"></div>
        </>
    )
}

export default SpeakerInfo
