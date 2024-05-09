import type { Metadata } from 'next'
import { Noto_Sans_TC } from 'next/font/google'
import './globals.css'
import { GoogleTagManager } from '@next/third-parties/google'
import { GoogleAnalytics } from '@next/third-parties/google'

const notoSansTC = Noto_Sans_TC({ subsets: ['latin'], weight: ['100', '400', '500', '600', '700', '800', '900'] })

// Define the environment variable
const GOOGLE_TAG_MANAGER = process.env.GOOGLE_TAG_MANAGER;
const GOOGLE_ANALYTICS = process.env.GOOGLE_ANALYTICS;

export const metadata: Metadata = {
    title: 'OpenHCI 2024',
    description: 'OpenHCI 2024 是一個專門推廣人機互動學門及促進垮領域合作的密集工作坊。',
    metadataBase: new URL('https://www.2024.openhci.com/'),
    keywords: [
        'OpenHCI2024', 'OpenHCI 2024', 'Open HCI 2024', 'Open HCI2024',
        'OpenCHI2024', 'OpenCHI 2024', 'Open CHI 2024', 'Open CHI2024',
        '2024OpenHCI', '2024 OpenHCI', '2024 Open HCI', 
        '2024 OpenCHI', '2024 OpenCHI2024', '2024 Open CHI', 
        'HCI', 'CHI', 'Human Computer Interaction', 'Computer-Human Interaction', 'Conference on Human Factors in Computing Systems', 
        '人機互動', '工作坊', '人機互動工作坊',
        'OpenHCI 2024 是一個專門推廣人機互動學門及促進垮領域合作的密集工作坊。',
    ],
    alternates: {
        canonical: 'https://www.2024.openhci.com/',
        languages: {
            'en-US': 'https://www.2024.openhci.com/',
            'zh-Hant': 'https://www.2024.openhci.com/',
        },
    },
    openGraph: {
        title: 'OpenHCI 2024',
        description: 'OpenHCI 2024 是一個專門推廣人機互動學門及促進垮領域合作的密集工作坊。',
        url: 'https://www.2024.openhci.com/',
        images: '/opengraph-image.png',
        siteName: 'OpenHCI 2024',
        type: 'website',
    },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <GoogleTagManager gtmId={GOOGLE_TAG_MANAGER || 'default'} />
            <body className={notoSansTC.className}>{children}</body>
            <GoogleAnalytics gaId={GOOGLE_ANALYTICS || 'default'} />
        </html>
    )
}
