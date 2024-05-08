'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Button,
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
} from '@nextui-org/react'
import { MdMenu } from 'react-icons/md'

export default function Header() {
    const [activeItem, setActiveItem] = useState('')
    const [isMenuOpen, setIsMenuOpen] = React.useState(false)

    const menuList = [
        { name: '工作坊介紹', link: '#intro' },
        { name: '主題演講', link: '#speech' },
        { name: '活動資訊', link: '#info' },
        { name: 'FAQ', link: '#FAQ' },
        { name: '作品成果', link: '#works' },
        { name: '組織成員', link: '#members' },
    ]

    const handleScroll = () => {
        const positions = menuList.map((item) => {
            const element = document.querySelector(item.link)
            return element ? element.getBoundingClientRect().top + window.scrollY - 70 : 0
        })

        const currentPosition = window.scrollY + 200
        const documentHeight = document.documentElement.scrollHeight

        if (window.scrollY < 200) {
            //停留在banner清空
            setActiveItem('')
        } else {
            const activeIndex = positions.findIndex(
                (pos, index) =>
                    pos <= currentPosition && (positions[index + 1] ? positions[index + 1] > currentPosition : true)
            )

            if (currentPosition >= documentHeight) {
                setActiveItem(menuList[menuList.length - 1].name)
            } else if (activeIndex !== -1 && menuList[activeIndex].name !== activeItem) {
                setActiveItem(menuList[activeIndex].name)
            } else if (activeIndex === -1) {
                setActiveItem('')
            }
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    return (
        <>
            {/* 電腦 */}
            <Navbar
                maxWidth="full"
                className="fixed hidden px-6  font-bold text-white bg-transparent xl:block drop-shadow"
            >
                <NavbarBrand>
                    <Link href="/">
                        <Image src="/Light_l_Logo.png" alt="logo" width={80} height={80} className="block md:hidden" />
                    </Link>
                    <Link href="/">
                        <Image
                            src="/OpenHCI_Light_Logo.png"
                            alt="logo"
                            width={230}
                            height={130}
                            className="hidden md:block"
                        />
                    </Link>
                </NavbarBrand>
                <NavbarContent className="gap-6 " justify="end">
                    {menuList.map((item, index) => (
                        <NavbarItem key={index}>
                            <Link
                                color="foreground"
                                href={item.link}
                                className={` hover:underline-offset-8 hover:decoration-4 hover:underline hover:decoration-[#F2D4CD] ${
                                    activeItem === item.name
                                        ? 'underline decoration-[#F2D4CD] underline-offset-8 decoration-4'
                                        : ''
                                }`}
                                onClick={() => setActiveItem(item.name)}
                            >
                                {item.name}
                            </Link>
                        </NavbarItem>
                    ))}
                </NavbarContent>
            </Navbar>
            {/* 平板 */}
            <Navbar
                maxWidth="full"
                className="fixed hidden px-6  font-bold text-white bg-transparent md:block xl:hidden drop-shadow"
            >
                <NavbarBrand>
                    <Link href="/">
                        <Image
                            src="/OpenHCI_Light_Logo.png"
                            alt="logo"
                            width={230}
                            height={130}
                            className="hidden md:block"
                        />
                    </Link>
                </NavbarBrand>
                <NavbarContent className="gap-6 " justify="end">
                    {menuList.map((item, index) => (
                        <NavbarItem key={index}>
                            <Link color="foreground" href={item.link}>
                                {item.name}
                            </Link>
                        </NavbarItem>
                    ))}
                </NavbarContent>
            </Navbar>
            {/* 手機 */}
            <Navbar
                isMenuOpen={isMenuOpen}
                onMenuOpenChange={setIsMenuOpen}
                maxWidth="full"
                className="fixed items-center justify-between py-1 font-bold text-white bg-transparent drop-shadow md:hidden"
            >
                <Link href="/">
                    <Image src="/Light_l_Logo.png" alt="logo" width={80} height={80} className="block md:hidden" />
                </Link>
                <NavbarContent justify="end">
                    <NavbarMenuToggle aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} />
                </NavbarContent>
                <NavbarMenu className="items-center justify-center flex gap-4">
                    {menuList.map((item, index) => (
                        <NavbarMenuItem key={index}>
                            <Link
                                href={item.link}
                                className="text-zinc-500 font-semibold"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                </NavbarMenu>
            </Navbar>
        </>
    )
}
