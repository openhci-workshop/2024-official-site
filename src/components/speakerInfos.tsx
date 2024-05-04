'use client';

import clsx from 'clsx';

const speakersData = [
  { name: '王大明', info: '台大 資工', position: '教授' }, 
  { name: '王大明', info: '台大 資工', position: '教授' }, 
  { name: '王大明', info: '台大 資工', position: '教授' }, 
  { name: '王大明', info: '台大 資工', position: '教授' },
];

const SpeakerInfo = () => {
  return (
    <div className="flex flex-col items-start w-[390px] xl:w-[1040px] gap-[22px] xl:gap-[40px] text-[#222] overflow-auto">
      <span className="font-semibold text-md xl:text-3xl">講者資訊</span>
      <div className="flex gap-5">
        {speakersData.map((speaker, index) => {
          const gradientStyle = index % 2 !== 0
            ? 'from-white from-20% via-[#CAD9DF] via-50% to-[#F2D4CD] to-70%'
            : 'from-[#CAD9DF] from-0% via-[#F2D4CD] via-49% to-white to-70%';

          return (
            <div key={index} className="flex flex-col">
              <div
                className={clsx(
                  'w-[136px] xl:w-[245px] h-[136px] xl:h-[245px] mb-[11px] xl:mb-[20px] rounded-lg xl:rounded-2xl',
                  'bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))]',
                  gradientStyle
                )}
              ></div>
              <div className="flex flex-col gap-1">
                <span className="font-medium text-xs xl:text-xl">姓名 {speaker.name}</span>
                <span className="text-xxs xl:text-base">學校 科系 {speaker.info}</span>
                <span className="text-xxs xl:text-base">職稱 {speaker.position}</span>
              </div>
            </div>
          );
        })}

      </div>
    </div>
  );
};

export default SpeakerInfo;
