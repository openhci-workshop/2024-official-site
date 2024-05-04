import type { Metadata } from "next";
import { Noto_Sans_TC } from "next/font/google";
import "./globals.css";
import { GoogleTagManager } from '@next/third-parties/google'
import { GoogleAnalytics } from '@next/third-parties/google'

const notoSansTC = Noto_Sans_TC({ subsets: ["latin"], weight: ["100", "400", "500", "600", "700", "800", "900"] });

// Define the environment variable
// const GOOGLE_TAG_MANAGER = process.env.GOOGLE_TAG_MANAGER;
// const GOOGLE_ANALYTICS = process.env.GOOGLE_ANALYTICS;

export const metadata: Metadata = {
  title: "2024 OPENHCI Official website",
  description: "Official website of 2024 OPENHCI workshop",
  metadataBase: new URL("https://www.2024.openhci.com/"),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'zh-Hant': '/zh-Hant',
    },
  },
  openGraph: {
    images: '/opengraph-image.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={notoSansTC.className}>{children}</body>
      {/* <GoogleAnalytics gaId={GOOGLE_ANALYTICS || 'default'} /> */}
    </html>
  );
}
