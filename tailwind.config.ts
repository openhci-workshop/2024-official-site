import type { Config } from 'tailwindcss'
import { nextui } from '@nextui-org/react'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            dropShadow: {
                '3xl': '0 35px 60px -15px rgba(255, 255, 255, 1)',
            },
            fontFamily: { kompot: ['kompot'] },

            backgroundImage: {
                'gradient-radial':
                    'radial-gradient(ellipse at center, rgba(255,255,255,0.8) 12%, rgba(202,217,223,0.8) 35%, rgba(242,212,205,0.85) 50%, rgba(255,255,255,0.12) 70%)',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            fontSize: {
                xxs: ['8.91px', '12px'],
                xs: ['11.13px', '16px'],
                sm: ['13.36px', '22px'],
                md: ['17.81px', '22px'],

                base: ['16px', '24px'],
                lg: ['18px', '40px'],
                xl: ['20px', '40px'],
                '2xl': ['24px', '40px'],
                '3xl': ['32px', '40px'],
            },
        },
    },
    plugins: [nextui()],
}
export default config
