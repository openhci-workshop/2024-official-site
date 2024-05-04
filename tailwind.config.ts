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
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            fontSize: {
                xxs: ['8.91px', '22px'],
                xs: ['11.13px', '22px'],
                sm: ['13.36px', '22px'],
                md: ['17.81px', '22px'],

                base: ['16px', '40px'],
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
