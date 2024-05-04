'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    Button,
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
} from '@nextui-org/react'
import { MdMenu } from 'react-icons/md'

export default function Header() {
    const menuList = [
        { name: '工作坊介紹', link: '#intro' },
        { name: '主題演講', link: '#speech' },
        { name: '活動資訊', link: '#inform' },
        { name: 'FAQ', link: '#FAQ' },
        { name: '作品成果', link: '#works' },
        { name: '組織成員', link: '#members' },
    ]
    return (
        <>
            <Navbar
                maxWidth="full"
                className="fixed hidden px-6 py-4 font-bold text-white bg-transparent md:block drop-shadow"
            >
                <NavbarBrand>
                    <Image src="/Light_l_Logo.png" alt="logo" width={80} height={80} className="block md:hidden" />
                    <Image
                        src="/OpenHCI_Light_Logo.png"
                        alt="logo"
                        width={230}
                        height={130}
                        className="hidden md:block"
                    />
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
            <Navbar
                maxWidth="full"
                className="fixed items-center justify-between py-4 font-bold text-white bg-transparent drop-shadow md:hidden"
            >
                <Image src="/Light_l_Logo.png" alt="logo" width={80} height={80} className="block md:hidden" />

                <Dropdown>
                    <DropdownTrigger>
                        <Button
                            className="block text-white bg-transparent md:hidden"
                            startContent={<MdMenu size="3rem" />}
                        ></Button>
                    </DropdownTrigger>
                    <DropdownMenu>
                        {menuList.map((item, index) => (
                            <DropdownItem key={index}>
                                <Link href={item.link}>{item.name}</Link>{' '}
                            </DropdownItem>
                        ))}
                    </DropdownMenu>
                </Dropdown>
            </Navbar>
        </>
    )
}