import { H2, H3, P, Ul, Li, Button, NewsletterForm, FooterCredits } from "@/components";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="mt-25 bg-blue pt-15">
            <section className="mx-auto w-xcontent" id="contact-us">
                <div>
                    <header className="max-w-[940px]">
                        <H2 color="text-white" size="text-title" weight="font-extrabold" case="lowercase" className="laptop:text-heading"><span className="uppercase">J</span>ednoduše nám <span className="font-extrabold text-green">napište</span> nebo <span className="font-extrabold text-green">zavolejte</span>.</H2>
                    </header>
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
                <div className="mt-10">
                    <div className="flex justify-center items-center gap-5">
                        <Button href="/" noStyle={true} ariaLabel="3kprods - logo" className="min-w-[100px]"><Image className="img-responsive" src="/images/assets/logo.webp" alt="3kprods - logo" loading="lazy" width={100} height={100}/></Button>
                        <H3 size="text-body" weight="font-semibold" case="lowercase" className="text-white/60"><span className="uppercase">R</span>ychle a efektivně na eventy a marketing!</H3>
                    </div>
                    <div className="mt-10">
                        <P color="text-white" size="text-sub" weight="font-bold">Nenechte si nic ujít! Přihlaste se k našemu <span className="text-green">newsletteru</span> a buďte vždy o krok napřed.</P>
                        <NewsletterForm icon={<i className="fa-solid fa-envelope"></i>} placeholder="example@domain.com">Odeslat</NewsletterForm>
                    </div>
                </div>
            </section>
            <FooterCredits year={2025} companyName="3K Productions" socialLinks={[{social: <i className="fa-brands fa-instagram"></i>, url: "https://www.instagram.com/3kprods/", ariaLabel: "Instagram"}, {social: <i className="fa-brands fa-tiktok"></i>, url: "https://www.tiktok.com/@3kprods", ariaLabel: "TikTok"}, {social: <i className="fa-brands fa-linkedin-in"></i>, url: "https://www.linkedin.com/company/3kprods/", ariaLabel: "LinkedIn"}]}/>
      </footer>
    )
}
export default Footer;