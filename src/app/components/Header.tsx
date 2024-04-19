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
} from '@nextui-org/react'
export default function Header() {
    return (
        <Navbar
            maxWidth="xl"
            className="px-6 py-4 fixed bg-transparent  text-white font-bold drop-shadow"
            isBlurred={false}
        >
            <NavbarBrand>
                <Image src="/OpenHCI_Light_Logo.png" alt="logo" width={230} height={130} />
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-6" justify="end">
                <NavbarItem>
                    <Link color="foreground" href="#">
                        工作坊介紹
                    </Link>
                </NavbarItem>
                <NavbarItem isActive>
                    <Link href="#" aria-current="page">
                        主題演講
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        活動資訊
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        FAQ
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        作品成果
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        組織成員
                    </Link>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    )
}
