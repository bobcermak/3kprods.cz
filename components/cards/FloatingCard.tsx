"use client";

import { useState, useEffect } from "react";
import { H4, P } from "@/components";
import { FaTimes, FaRegComments } from "react-icons/fa";
import Link from "next/link";

const FloatingCard = () => {
    //Hooks
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);
    return (
        <div className={`fixed left-[50%] translate-x-[-50%] w-[80%] xphone:left-auto xphone:translate-x-0 xphone:w-auto xphone:right-0 xphone:mr-6 desktop:mr-3 xdesktop:mr-6 z-50 max-w-100 transition-all duration-700 ease-in-out ${isVisible ? "bottom-6 translate-y-0" : "bottom-0 translate-y-full pointer-events-none"}`}>
            <div className="rounded-[15px] py-6 px-3 shadow-primary border border-dark/25 relative backdrop-blur-sm bg-white/95 hover:scale-[1.02] transition-transform duration-500">
                <button onClick={() => setIsVisible(false)} className="absolute cursor-pointer top-5.5 right-5 text-dark/30 hover:text-light-blue active:text-light-blue duration-350 transition-all bg-light-blue/20 rounded-full p-1">
                    <FaTimes size={14}/>
                </button>
                <div className="flex gap-3">
                    <div className="min-w-12 h-12 bg-light-blue/10 rounded-full flex items-center justify-center text-light-blue">
                        <FaRegComments size={20}/>
                    </div>
                    <div>
                        <H4 size="text-sm" weight="font-bold" className="mb-1">Máte projekt v hlavě?</H4>
                        <P size="text-[12px]" className="mb-2 leading-relaxed opacity-60 max-w-[90%]">
                            Rádi s vámi probereme možnosti realizace. Nezávazně a u kávy.
                        </P>
                        <div className="flex justify-start">
                            <Link className="text-[12px] opacity-40 hover:text-light-blue active:text-light-blue duration-250 transition-all" href="#contact-us" aria-label="Kontaktovat nás">
                                Klikni pro více info →
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default FloatingCard;