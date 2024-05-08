'use client'

import clsx from 'clsx'
import styled from 'styled-components'

import Image from 'next/image'

const speakersData = [
  { name: '陳盈羽', info: '國立陽明交通大學 傳播與科技學系', position: '助理教授', img: '/speakers/speaker_1.jpg' },
  { name: '鄭宇婷', info: '國立臺灣科技大學 設計學系', position: '助理教授', img: '/speakers/avatar.jpg' },
  { name: '李冠慰', info: 'HTC XR體驗設計研究', position: '資深經理', img: '/speakers/speaker_3.jpg' },
  { name: '侯宗佑', info: '美國康乃爾大學', position: '資訊科學博士', img: '/speakers/speaker_2.jpg' },
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
                      'w-[152px] h-[152px] md:w-[225px] md:h-[225px] lg:w-[270px] lg:h-[270px] mb-[11px] md:mb-[20px] rounded-lg md:rounded-2xl',
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
