'use client';

import React, { useRef, useEffect, useState } from 'react';
import clsx from 'clsx';
import { Button, Card } from '@nextui-org/react';

const agendaDatas = [
  {
    title: '前置工作坊', date: '6/22（六）', contents: ['聆聽人機互動先修概念', '學習設計思考概念', '了解基本Arduino和Processing技術', '討論工作坊作品著重面向']
  },
  {
    title: '前置工作坊', date: '6/23（日）', contents: ['聆聽人機互動先修概念', '學習設計思考概念', '了解基本Arduino和Processing技術', '討論工作坊作品著重面向']
  },
  {
    title: '正式工作坊', date: '7/4（四）', contents: ['聆聽人機互動先修概念', '學習設計思考概念', '了解基本Arduino和Processing技術', '討論工作坊作品著重面向']
  }, 
  {
    title: '正式工作坊', date: '7/5（五）', contents: ['聆聽人機互動先修概念', '學習設計思考概念', '了解基本Arduino和Processing技術', '討論工作坊作品著重面向']
  }, 
  {
    title: '正式工作坊', date: '7/6（六）', contents: ['聆聽人機互動先修概念', '學習設計思考概念', '了解基本Arduino和Processing技術', '討論工作坊作品著重面向']
  }, 
  {
    title: '正式工作坊', date: '7/7（日）', contents: ['聆聽人機互動先修概念', '學習設計思考概念', '了解基本Arduino和Processing技術', '討論工作坊作品著重面向']
  },
];

const Agenda = () => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);  
  const [activeButton, setActiveButton] = useState(0);
  const cardWidth = 370; 
  const smallCardWidth = 216; 

  const [currentCardWidth, setCurrentCardWidth] = useState(cardWidth);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1280) {
        setCurrentCardWidth(smallCardWidth);
      } else {
        setCurrentCardWidth(cardWidth);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); 

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const scrollLeft = scrollContainerRef.current.scrollLeft;
        const activeIndex = Math.round(scrollLeft / currentCardWidth);
        setActiveButton(activeIndex);
      }
    };

    if (scrollContainerRef.current) {
      scrollContainerRef.current.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, [currentCardWidth]);

  const handleButtonClick = (index: number) => {
    const scrollToPosition = index * currentCardWidth;
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ left: scrollToPosition, behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col items-start w-[390px] xl:w-[1040px] gap-[22px] xl:gap-[40px] text-[#222]">
      <span className="font-semibold text-md xl:text-3xl">詳細日程 Agenda</span>
      <div className="w-full flex flex-col xl:flex-row gap-0 xl:gap-4">
        <div className="flex gap-2 xl:gap-4 justify-start">
          {['前置 D1', '前置 D2'].map((label, index) => (
            <Button
              key={index}
              size="md"
              radius="full"
              className={clsx(
                'text-xs xl:text-base font-medium',
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
                'text-xs xl:text-base font-medium',
                activeButton === (index + 2) ? 'bg-[#94AAC1] text-white' : 'bg-[#E9E9E9] text-[#222]'
              )}
              onClick={() => handleButtonClick(index + 2)} 
            >
              {label}
            </Button>
          ))}
        </div>
      </div>
      <div className="flex gap-4 xl:gap-6 overflow-x-auto w-[390px] xl:w-[1040px] pr-[180px] xl:pr-[690px]" ref={scrollContainerRef}>
        {agendaDatas.map((agenda, index) => (
          <div key={index} 
            className="w-[200px] xl:w-[347px] h-[233px] xl:h-[385px] p-4 xl:px-7 xl:py-6 flex-shrink-0 flex flex-col justify-between items-center rounded-3xl" 
            style={{
              backgroundImage: 'url(/card.png)', 
              backgroundSize: 'cover', 
              backgroundPosition: 'center', 
            }}
          > 
            <div className='w-[174px] xl:w-[292px] h-[158px] xl:h-[276px] flex flex-col bg-[#D9D9D9]/25 rounded-2xl px-4 xl:px-7 items-start justify-center text-[#222] py-4'> 
              <div className='w-full flex flex-row xl:flex-col items-start xl:justify-end gap-1 xl:gap-0'>
                <span className="font-medium text-sm xl:text-2xl">{agenda.title}
                </span>
                <span className="text-xxs xl:text-base">{agenda.date}</span>
              </div>              
              <ul className="list-disc pl-4 xl:pl-8">
                {agenda.contents.map((content, index) => (
                  <li key={index} className='text-xxs xl:text-base'>{content}</li> 
                ))}
              </ul>
            </div>
            <Button radius="full" size="sm" className="bg-[#E9E9E9] text-[#222] text-xs xl:text-xl font-semibold w-full xl:py-6">
              詳細日程表
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Agenda;
