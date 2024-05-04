'use client'

import React, { useEffect, useState } from 'react'

import Topics from './components/topics'
import SpeakerInfo from './components/speakerInfos'
import Infos from './components/infos'
import Agenda from './components/agenda'
import Enrollment from './components/enrollment'
import PreviousWork from './components/previousWork'
import FAQ from './components/faq'
import Sponsor from './components/sponsor'
import Footer from './components/footer'
import Student from './components/student'
import Banner from './components/Banner'
import Header from './components/Header'

export default function Home() {
    const [currentBg, setCurrentBg] = useState('/desktop_bg.png')
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setCurrentBg('/mobile_bg.png')
            } else {
                setCurrentBg('/desktop_bg.png')
            }
        }
        window.addEventListener('resize', handleResize)
        handleResize()
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    const containerStyle = {
        backgroundImage: `url(${currentBg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        position: 'relative',
        top: 0,
        left: 0,
        backgroundBlendMode: 'normal',
    } as const

    return (
        <>
            <Header />
            <Banner />
            <main
                className="px-4 md:px-44 xl:px-56 overflow-hidden w-full flex flex-col items-center py-20 gap-[55px] xl:gap-24"
                style={containerStyle}
            >
                <Topics />
                <SpeakerInfo />
                <Infos />
                <Agenda />
                <div className="flex flex-col items-center w-full">
                    <Enrollment />
                    <FAQ />
                </div>
                <PreviousWork />
                <Student />
                <Sponsor />
                <Footer />
            </main>
        </>
    )
}
