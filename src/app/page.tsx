import Image from 'next/image'
import Header from '@/app/components/Header'
import Banner from '@/app/components/Banner'

export default function Home() {
    return (
        <>
            <Header />
            <Banner />
            <div className="w-full h-10"></div>
        </>
    )
}
