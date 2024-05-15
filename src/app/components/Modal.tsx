import React from "react";
import { Modal, ModalContent,  ModalBody, Button, useDisclosure } from "@nextui-org/react";


type Props = {
  index: number;
}

const agendaDatas = [
  {
    title: '前置工作坊 Day1',
    contents: [
      '08:30 - 09:00 學員報到',
      '09:00 - 10:00 HCI Intro 曾唯哲',
      '10:00 - 11:00 設計課 1',
      '11:00 - 12:00 設計課 2',
      '12:00 - 13:00 午餐',
      '13:00 - 14:00 開場演講 陳盈羽',
      '14:00 - 15:00 學員討論',
      '15:00 - 17:00 演講 賴楨璾',
      '17:00 - 18:00 晚餐',
      '18:00 - 19:00 設計課 3',
      '19:00 - 21:00 學員討論',
    ],
  },
  {
    title: '前置工作坊 Day2',
    contents: [
      '08:30 - 09:00 學員報到',
      '09:00 - 11:00 技術課 Unity',
      '11:00 - 12:00 技術課 Rapid Prototyping',
      '12:00 - 13:00 午餐',
      '13:00 - 15:00 學員討論',
      '15:30 - 17:00 顧問交流',
      '17:00 - 18:00 晚餐',
      '18:00 - 19:30 技術課 Arduino',
      '19:30 - 21:00 學員討論',
    ],
  },
  {
    title: '正式工作坊 Day1',
    contents: [
      '08:30 - 09:00 學員報到',
      '09:00 - 10:00 演講 鄭宇婷',
      '10:00 - 12:00 學員討論',
      '12:00 - 13:00 午餐',
      '13:00 - 15:00 學員討論',
      '15:00 - 17:00 期中提案',
      '17:00 - 18:00 晚餐',
      '18:00 - 21:00 學員討論',
    ],
  },
  {
    title: '正式工作坊 Day2',
    contents: [
      '08:30 - 09:00 學員報到',
      '09:00 - 10:00 學員討論',
      '10:00 - 12:00 演講',
      '12:00 - 13:00 午餐',
      '13:00 - 15:00 學員討論',
      '15:00 - 17:00 演講 侯宗佑',
      '17:00 - 18:00 晚餐',
      '18:00 - 21:00 學員討論',
    ],
  },
  {
    title: '正式工作坊 Day3',
    contents: [
      '08:30 - 09:00 學員報到',
      '09:00 - 12:00 學員討論',
      '12:00 - 13:00 午餐',
      '13:00 - 15:00 演講 李冠慰',
      '15:00 - 17:00 學員討論',
      '17:00 - 18:00 晚餐',
      '18:00 - 21:00 學員討論',
    ],
  },
  {
    title: '正式工作坊 Day4',
    contents: [
      '08:30 - 09:00 學員報到',
      '09:00 - 11:00 學員討論',
      '11:00 - 12:00 會場布置',
      '12:00 - 13:00 午餐',
      '13:00 - 17:30 期末發表',
      '17:30 - 18:30 頒獎 / 閉幕',
    ],
  },
]

export default function Mpdal({ index }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();


  const handleOpen = () => {
    onOpen();
  }

  return (
    <>
      <Button
        radius="full"
        size="sm"
        className="bg-[#E9E9E9] text-sm md:text-xl xl:text-2xl font-semibold w-full md:py-6 text-[#636B76]"
        onPress={() => handleOpen()}
      >
        詳細日程表
      </Button>
      <Modal
        placement="center"
        isOpen={isOpen}
        onClose={onClose}
        style={{ backgroundImage: `url('/card_detail.png')`, backgroundSize: 'cover' }}
        className="max-w-[340px] h-[512px] rounded-3xl border-3 border-b-violet-200 border-r-[#CAD9DF]"
        key={index}
        hideCloseButton={true}
        classNames={{
          backdrop: 'bg-gradient-to-t from-[#e7bbb1]/40 to-[#94aac1]/40 backdrop-opacity-20',
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody className="p-4 gap-3">
                <div className="flex flex-col justify-center items-center h-1/5 rounded-3xl bg-[#D9D9D9]/50">
                  <span className="text-2xl font-semibold">
                    詳細日程表
                  </span>
                  <span className="text-lg">
                    {agendaDatas[index].title}
                  </span>
                </div>
                <div className="flex flex-col justify-between items-start h-4/5 rounded-3xl bg-[#D9D9D9]/50 text-base font-medium px-5 py-8">
                  {agendaDatas[index].contents.map((content, index) => (
                    <span key={index}>{content}</span>
                  ))}

                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
