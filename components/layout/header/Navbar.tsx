"use client";

import Link from 'next/link';
import Image from 'next/image';
import { type FC, useState, useEffect } from 'react';
import React from 'react';
import { Button, Ul, Hamburger } from '@/components';
import { twMerge } from "tailwind-merge";

type NavbarProps = {
    logo: string,
    button: string,
    className?: string,
    href: string,
    children: React.ReactNode
}
const Navbar: FC<NavbarProps> = ({ logo, button, className, href, children }) => {
    //Hooks
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const blur: string = `after:content-[''] after:fixed after:top-0 after:left-0 after:w-screen after:h-screen after:-z-10 after:bg-[linear-gradient(77deg,#1C2E55_0%,#243c91_25%,#4461ef_49%,#98a8f7_100%)]`;
    const classes: string = twMerge(className, isMenuOpen && blur);
    useEffect(() => {
        if (isMenuOpen) document.body.style.overflow = "hidden"; 
        else document.body.style.overflow = "";
    }, [isMenuOpen]);
    return (
        <nav className={classes}>
            <Link href="/" className="w-[80px] h-[80px] z-50"><Image className="img-responsive" src={logo} alt="3kprods - logo" loading="lazy" width={100} height={100}/></Link>
            <Ul type="menu" className={`flex absolute top-full left-0 right-0 mx-5 mt-6 rounded-[20px] shadow-secondary inner-shadow-primary bg-[linear-gradient(77deg,#1C2E55_0%,#243c91_25%,#4461ef_49%,#98a8f7_100%)] flex-col gap-6 px-6 py-6 transition-all duration-550 ease-in-out ${isMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10 pointer-events-none"}`}>
                {children}
            </Ul>
            <div className="flex items-center gap-4">
                <Button href={href}>{button}</Button>
                <Hamburger isClicked={() => {setTimeout(() => setIsMenuOpen(prev => !prev), 100)}}/>
            </div>
        </nav>
    )
}
export default Navbar;