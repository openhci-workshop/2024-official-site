'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'

import { Button, ButtonGroup } from '@nextui-org/react'
import { teams, students } from './studentAndTeam'
import clsx from 'clsx'

export default function Student() {
    const [selectedTeam, setSelectedTeam] = useState<string | null>('總召')

    const handleButtonClick = (team: string) => {
        setSelectedTeam(team)
    }

    useEffect(() => {
        // choose the team randomly from the list of teams
        const randomTeam = teams[Math.floor(Math.random() * teams.length)]
        setSelectedTeam(randomTeam)
    }, [])

    return (
        <div
            data-aos="fade-up"
            data-aos-offset="200"
            className="pt-8 flex flex-col items-start w-full gap-[22px] xl:gap-[40px] "
        >
            <span className="font-semibold text-md xl:text-3xl">籌辦團隊</span>
            {/* Teams */}
            <div className="flex flex-wrap gap-2 xl:gap-4">
                {teams.map((team, index) => (
                    <Button
                        key={index}
                        size="md"
                        radius="full"
                        onClick={() => handleButtonClick(team)}
                        className={clsx(
                            'text-xs xl:text-base font-medium',
                            selectedTeam === team ? 'bg-[#94AAC1] text-white' : 'bg-[#E9E9E9] text-[#222]'
                        )}
                    >
                        {team}
                    </Button>
                ))}
            </div>
            {/* Students */}
            <div className="grid w-full grid-cols-3 gap-3 xl:grid-cols-4">
                {/* <div className="col-span-2 rounded-lg shadow-md xl:col-span-3"> */}
                {selectedTeam === null
                    ? students.map((student) => (
                          <div key={student.name} className="flex flex-col items-stretch col-span-3 xl:col-span-1">
                              <Image
                                  width={245}
                                  height={245}
                                  // className='w-[185px] h-[185px]  xl:w-[245px] xl:h-[245px] rounded-lg self-center mb-3'
                                  className="self-start object-cover w-full mb-3 bg-cover rounded-lg h-1/3"
                                  src={student.image}
                                  alt={student.name}
                              />
                              <div className="flex flex-col gap-1">
                                  <span className="text-xs font-medium xl:text-xl">{student.name}</span>
                                  <span className="text-xxs xl:text-base">
                                    {student.school} {student.department}
                                  </span>
                              </div>
                          </div>
                      ))
                    : students
                          .filter((student) => student.team === selectedTeam)
                          .map((student) => (
                              <div key={student.name} className="flex flex-col items-stretch justify-start col-span-1">
                                  <Image
                                      width={245}
                                      height={245}
                                      // className='w-[185px] h-[185px]  xl:w-[245px] xl:h-[245px] rounded-lg self-center mb-3'
                                      className="self-start object-cover w-full mb-3 bg-cover rounded-lg h-1/2"
                                      src={student.image}
                                      alt={student.name}
                                  />
                                  <div className="flex flex-col gap-1">
                                      <span className="text-xs font-medium xl:text-xl">{student.name}</span>
                                      <span className="text-xxs xl:text-base">
                                        {student.school} {student.department}
                                      </span>
                                  </div>
                              </div>
                          ))}
                {/* </div> */}
            </div>
        </div>
    )
}
