'use client'

import clsx from 'clsx'
import styled from 'styled-components'

import Image from 'next/image'

const speakersData = [
  { name: '陳盈羽', info: '國立陽明交通大學 傳播與科技學系', position: '助理教授', img: '/speakers/陳盈羽.jpg' },
  { name: '鄭宇婷', info: '國立臺灣科技大學 設計學系', position: '助理教授', img: '/speakers/avatar.jpg' },
  { name: '李冠慰', info: 'HTC XR體驗設計研究', position: '資深經理', img: '/speakers/李冠慰.jpg' },
  { name: '陳美伶', info: '悠識數位 研究與內容策略', position: '副總監', img: '/speakers/陳美伶.jpg' },
  { name: '蔡文傑', info: '臺大創新設計學院', position: '專案計畫助理教授', img: '/speakers/蔡文傑.jpg' },
  { name: '洪燕茹', info: '職涯諮詢師', position: '職游 共同發起人', img: '/speakers/洪燕茹.jpeg' },
  { name: '侯宗佑', info: '美國康乃爾大學', position: '資訊科學博士', img: '/speakers/侯宗佑.jpg' },
  { name: '鄭龍磻', info: '國立臺灣大學資訊工程學系', position: '副教授', img: '/speakers/鄭龍磻.jpg' },
  { name: '蔡欣叡', info: '國立政治大學 資訊系與數位內容學程', position: '副教授', img: '/speakers/蔡欣叡.png' },
  { name: '游創文', info: '國立清華大學 藝術學院科技藝術研究所', position: '專任副教授', img: '/speakers/游創文.jpg' },
  { name: '黃仲菁', info: '國立成功大學 全校不分系學士學位學程/規劃與設計學院/通識教育中心', position: '助理教授', img: '/speakers/黃仲菁.jpg' },
  { name: '陳啟彰', info: '成功大學認知科學研究所 碩士', position: 'UXTW / 第三、四屆理事', img: '/speakers/陳啟彰.jpeg' },
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
const SpeakerInfo = () => {
  return (
    <>
      <div
        data-aos="fade-up"
        className="pt-12 md:pt-8 flex flex-col items-start w-full  gap-[22px] xl:gap-[40px]  "
      >
        <span className="font-semibold text-md xl:text-3xl md:text-2xl">講者資訊</span>
        <CustomScrollbar>
          <div className="flex w-full gap-5 md:gap-8 pb-2 overflow-auto ">
            {speakersData.map((speaker, index) => {
              const gradientStyle =
                index % 2 !== 0
                  ? 'from-white from-20% via-[#CAD9DF] via-50% to-[#F2D4CD] to-70%'
                  : 'from-[#CAD9DF] from-0% via-[#F2D4CD] via-49% to-white to-70%'

              return (
                <div key={index} className="flex flex-col">
                  <div
                    className={clsx(
                      'w-[152px] h-[222px] md:w-[225px] md:h-[285px] lg:w-[270px] lg:h-[360px] mb-[11px] md:mb-[20px] rounded-lg md:rounded-2xl',
                      'bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))]',
                      gradientStyle
                    )}
                  >
                    {speaker.img && (
                      <Image src={speaker.img} alt={speaker.name} className="w-full h-full rounded-lg md:rounded-2xl object-cover" width={300} height={300} />
                    )}
                  </div>
                  <div className="flex flex-col ">
                    <span className="text-xs font-medium xl:text-xl md:text-base">
                      {speaker.name}
                    </span>
                    <span className="text-xxs xl:text-base md:text-xs">
                      {speaker.info}
                    </span>
                    <span className="text-xxs xl:text-base md:text-xs">
                      {speaker.position}
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
