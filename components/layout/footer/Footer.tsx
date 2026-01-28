"use client";

import { usePathname } from "next/navigation";
import { H2, H3, P, Ul, Li, Button, NewsletterForm, FooterCredits } from "@/components";
import Image from "next/image";

const Footer = () => {
    const pathname = usePathname();
    return (
        <footer className={`${pathname === "/" ? "mt-25" : ""} relative bg-blue`}>
            <div className="absolute inset-0 blur-setup blur-setup--green blur-setup-hero-left blur-setup-footer-right pointer-events-none z-0"/>
            <section className="relative mx-auto w-xcontent laptop:flex laptop:gap-25 z-10" id="contact-us">
                <div className="basis-[80%]">
                    <div className="max-w-[680px] laptop:max-w-[940px] mt-15 laptop:mt-25">
                        <H2 color="text-white" size="text-title" weight="font-extrabold" case="lowercase" className="laptop:text-heading"><span className="uppercase">J</span>ednoduše nám <span className="font-extrabold text-green">napište</span> nebo <span className="font-extrabold text-green">zavolejte</span>.</H2>
                    </div>
                    <div className="mt-10">
                        <Ul className="flex flex-col gap-6 bg-dark-white rounded-[20px] inner-shadow-primary px-5 py-10">
                            <Li className="m-0 pb-6 border-b border-dashed list-none">
                                <div className="flex gap-6 p-5 bg-white rounded-[20px] shadow-primary">
                                    <i className="fa-solid fa-phone text-[2rem] bg-green rounded-full p-3.5"></i>
                                    <div className="flex flex-col gap-2">
                                        <Button href="tel:+420722145257" noStyle={true} hover="hover:text-light-blue active:text-light-blue" className="underline"><strong className="font-bold">+420 722 145 257</strong></Button>
                                        <Button href="tel:+420739145788" noStyle={true} hover="hover:text-light-blue active:text-light-blue" className="underline"><strong className="font-bold">+420 739 145 788</strong></Button>
                                    </div>
                                </div>
                            </Li>
                            <Li className="m-0 pb-6 border-b border-dashed list-none">
                                <div className="flex items-center gap-6 p-5 bg-white rounded-[20px] shadow-primary">
                                    <i className="fa-solid fa-envelope text-[2rem] bg-green rounded-full p-3.5"></i>
                                    <Button href="mailto:info@3kprods.cz" noStyle={true} hover="hover:text-light-blue active:text-light-blue" className="underline"><strong className="font-bold">info@3kprods.cz</strong></Button>
                                </div>
                            </Li>
                            <Li className="m-0 pb-6 border-b border-dashed list-none">
                                <div className="flex items-center gap-6 p-5 bg-white rounded-[20px] shadow-primary">
                                    <i className="fa-solid fa-location-dot text-[2rem] bg-green rounded-full px-4.5 py-3.5"></i>
                                    <Button href="https://maps.app.goo.gl/Z6ivpNXnn94nXLeP7" noStyle={true} hover="hover:text-light-blue active:text-light-blue" className="underline"><strong className="font-bold">Liberec, Liberecký kraj, Česká Republika</strong></Button>
                                </div>
                            </Li>
                        </Ul>
                    </div>
                </div>
                <div className="mt-10 laptop:sticky laptop:top-[40%] laptop:mt-25 laptop:self-start h-fit min-[1701px]:static min-[1701px]:self-center">
                    <div className="flex justify-center items-center gap-5 laptop:justify-start">
                        <Button href="/" noStyle={true} ariaLabel="3kprods - logo" className="min-w-[100px]"><Image className="img-responsive" src="/images/assets/logo.webp" alt="3kprods - logo" loading="lazy" width={100} height={100}/></Button>
                        <H3 size="text-body" weight="font-semibold" case="lowercase" className="text-white/60"><span className="uppercase">R</span>ychle a efektivně na eventy a marketing!</H3>
                    </div>
                    <div className="mt-10">
                        <P color="text-white" size="text-sub" weight="font-bold" className="stablet:text-center laptop:text-left">Nenechte si nic ujít! Přihlaste se k našemu <span className="text-green">newsletteru</span> a buďte vždy o krok napřed.</P>
                        <NewsletterForm icon={<i className="fa-solid fa-envelope text-dark/60"></i>} placeholder="example@domain.com" className="mt-6"/>
                    </div>
                </div>
            </section>
            <FooterCredits year={2025} companyName="3K Productions" className="relative z-10 mx-auto w-xcontent mt-15 py-15 laptop:mt-25 laptop:py-25 border-t border-white/60 flex flex-col gap-8 slaptop:flex-row slaptop:items-center slaptop:justify-between" socialLinks={[{social: <i className="fa-brands fa-instagram text-white text-[20px] border rounded-full px-[8.25px] py-[7px] hover:text-green hover:border-green active:text-green active:border-green transition-all duration-250"></i>, url: "https://www.instagram.com/3kprods/", ariaLabel: "Instagram"}, {social: <i className="fa-brands fa-tiktok text-white text-[20px] border rounded-full px-[8.25px] py-[7px] hover:text-green hover:border-green active:text-green active:border-green transition-all duration-250"></i>, url: "https://www.tiktok.com/@3kprods", ariaLabel: "TikTok"}, {social: <i className="fa-brands fa-linkedin-in text-white text-[20px] border rounded-full px-[8.25px] py-[7px] hover:text-green hover:border-green active:text-green active:border-green transition-all duration-250"></i>, url: "https://www.linkedin.com/company/3kprods/", ariaLabel: "LinkedIn"}]}/>
      </footer>
    )
}
export default Footer;