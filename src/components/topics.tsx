'use client';

import clsx from 'clsx';

const topicsData = [
  {
    title: '什麼是人機互動?',
    info: '人機互動（Human Computer Interaction, HCI），過去卅年間對於人機互動相關議題與科技的研發與創新，由國際計算機學會 ACM SIGCHI（Special Interest Group on Computer-Human Interaction）領頭發揮重大影響力，於學術研究與產業實務上都有蓬勃發展。',
  },
  {
    title: '關於OpenHCI',
    info: '「OpenHCI人機互動工作坊」是由跨台、政、清、陽交、台科、北科等學校的資訊工程與設計領域的學生自主籌備的活動，今年邁向第十四屆。活動宗旨為推廣人機互動學門，以及促進各校學生間的跨領域專案實作。',
  },
  {
    title: 'OpenHCI X TAICHI 2024',
    info: 'TAICHI 為台灣人機互動研究領域中最具代表性的研討會，由台灣人機互動學會所舉辦的年度盛會，今年TAICHI將邀請本屆工作坊優秀作品至會中展示。除了能透過盛會為學員作品爭取曝光度之外，更能跟眾多前輩交流並汲取經驗，對學員有莫大的助益。',
  },
];

const Topics = () => {
  return (
    <div className="flex flex-col items-start w-[390px] xl:w-[1040px] gap-[55px] xl:gap-[100px] text-[#222]">
      <div className="relative flex flex-col">
        <span className='font-semibold text-md xl:text-3xl mb-[22px] xl:mb-[40px]'>主題介紹</span>
        <span className="font-semibold text-md xl:text-3xl">What is Resilience?</span>
        <div
          className={clsx(
            'h-[270px] xl:h-[384px] w-[390px] xl:w-[1040px] rounded-[50%] z-10 flex justify-center items-center bg-white/30',
          )}
          style={{ backgroundImage: 'radial-gradient(ellipse at center, rgba(255,255,255,1) 12%, rgba(242,212,205,1) 30%, rgba(202,217,223,0.4) 55%, rgba(255,255,255,0.9) 100%)' }}
        >
          <div className="h-[154px] xl:h-[160px] w-[284px] xl:w-[866px] relative text-xs xl:text-xl text-center">
            <span className='font-semibold'>「Resilience，象徵著適應力、韌性、彈性。在新興科技大量衝擊的年代，人性為最不可或缺的關鍵。」 </span>
            <span>Resilience 的適應、彈性，在科技浪潮襲捲而來的時代愈顯其珍貴，科技不僅為我們所用，更與我們共生共榮。延展實境和人工智慧崛起，讓我們再次看見科技回歸以人為本的價值，相信人性即使面臨挑戰，依然會在這充滿未知的時代裡尋求共榮的未來。</span>
          </div>
        </div>
      </div>
      {topicsData.map((topic, index) => (
        <div key={index} className="flex flex-col">
          <span className="font-semibold text-md xl:text-3xl">{topic.title}</span>
          <div
            className={clsx(
              'h-[263px] xl:h-[384px] w-[390px] xl:w-[1040px] rounded-[50%] z-10 flex justify-center items-center bg-white/30',
            )}
            style={{ backgroundImage: 'radial-gradient(ellipse at center, rgba(255,255,255,1) 12%, rgba(242,212,205,1) 30%, rgba(202,217,223,0.4) 55%, rgba(255,255,255,0.9) 100%)' }}
          >
            <div className="h-[110px] xl:h-[120px] w-[284px] xl:w-[866px] relative text-xs xl:text-xl text-center">
              <span>{topic.info}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Topics;
