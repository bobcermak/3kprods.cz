"use client";

import Link from 'next/link';
import Image from 'next/image';
import { type FC, useState, useEffect } from 'react';
import React from 'react';
import { Button, Ul, Hamburger } from '@/components';

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
    const classes: string = [className, isMenuOpen && blur].filter(Boolean).join(" ");

    useEffect(() => {
        if (isMenuOpen) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "";
    }, [isMenuOpen]);

    return (
        <nav className={classes}>
            {/* Shadow Layer - Separate wrapper for Safari fix */}
            <div className="absolute inset-0 -z-20 rounded-bl-[3rem] rounded-br-[3rem] shadow-primary pointer-events-none" />

            {/* Blur/Background Layer */}
            <div className="absolute inset-0 -z-10 rounded-bl-[3rem] rounded-br-[3rem] bg-white/10 backdrop-blur-[200px] pointer-events-none" />

            <Link href="/" className="w-[80px] h-[80px] z-50" onClick={() => { setIsMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}><Image className="img-responsive" src={logo} alt="3kprods - logo" width={100} height={100} /></Link>
            <Ul onClick={() => setIsMenuOpen(false)} type="menu" className={`flex laptop:items-center absolute laptop:static top-full laptop:top-none left-0 laptop:left-none right-0 laptop:right-none mx-5 mt-6 laptop:m-0 rounded-[1.25rem] laptop:rounded-b-none shadow-secondary laptop:shadow-none inner-shadow-primary inner-shadow-none laptop:justify-center bg-[linear-gradient(77deg,#1C2E55_0%,#243c91_25%,#4461ef_49%,#98a8f7_100%)] laptop:bg-none flex-col laptop:flex-row gap-6 laptop:gap-8 px-3 py-6 laptop:p-0 transition-all duration-550 ease-in-out laptop:opacity-100 laptop:pointer-events-auto laptop:visible ${isMenuOpen ? "opacity-100 translate-x-0 visible" : "opacity-0 -translate-x-10 pointer-events-none invisible"}`}>
                {children}
            </Ul>
            <div className="flex items-center gap-4">
                <Button onClick={() => setIsMenuOpen(false)} href={href}>{button}</Button>
                <Hamburger isOpen={isMenuOpen} onToggle={() => { setTimeout(() => setIsMenuOpen(prev => !prev), 100) }} />
            </div>
        </nav>
    )
}
export default Navbar;