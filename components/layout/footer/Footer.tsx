import { H2, H3, P, Ul, Li, Button, NewsletterForm, FooterCredits } from "@/components";
import Image from "next/image";

const Footer = () => {
    return (
        <footer>
            <section id="contact-us">
                <div>
                    <header>
                        <H2>Jednoduše nám <span>napište</span> nebo <span>zavolejte</span>.</H2>
                    </header>
                    <div>
                        <Ul>
                            <Li>
                                <i className="fa-solid fa-phone"></i>
                                <div>
                                    <Button href="tel:+420722145257" noStyle={true} hover="hover:text-light-blue" className="underline">+420 722 145 257</Button>
                                    <Button href="tel:+420739145788" noStyle={true} hover="hover:text-light-blue" className="underline">+420 739 145 788</Button>
                                </div>
                            </Li>
                            <Li>
                                <i className="fa-solid fa-envelope"></i>
                                <Button href="mailto:info@3kprods.cz" noStyle={true} hover="hover:text-light-blue" className="underline">info@3kprods.cz</Button>
                            </Li>
                            <Li>
                                <i className="fa-solid fa-location-dot"></i>
                                <Button href="https://maps.app.goo.gl/Z6ivpNXnn94nXLeP7" noStyle={true} hover="hover:text-light-blue" className="underline">Liberec, Liberecký kraj, Česká Republika</Button>
                            </Li>
                        </Ul>
                    </div>
                </div>
                <div>
                    <div>
                        <Button href="/" noStyle={true} ariaLabel="3kprods - logo"><Image className="img-responsive" src="/images/assets/logo.webp" alt="3kprods - logo" loading="lazy" width={100} height={100}/></Button>
                        <H3>Rychle a efektivně na eventy a marketing!</H3>
                    </div>
                    <div>
                        <P>Nenechte si nic ujít! Přihlaste se k našemu <span>newsletteru</span> a buďte vždy o krok napřed.</P>
                        <NewsletterForm icon={<i className="fa-solid fa-envelope"></i>} placeholder="example@domain.com">Odeslat</NewsletterForm>
                    </div>
                </div>
            </section>
            <FooterCredits year={2025} companyName="3K Productions" socialLinks={[{social: <i className="fa-brands fa-instagram"></i>, url: "https://www.instagram.com/3kprods/", ariaLabel: "Instagram"}, {social: <i className="fa-brands fa-tiktok"></i>, url: "https://www.tiktok.com/@3kprods", ariaLabel: "TikTok"}, {social: <i className="fa-brands fa-linkedin-in"></i>, url: "https://www.linkedin.com/company/3kprods/", ariaLabel: "LinkedIn"}]}/>
      </footer>
    )
}
export default Footer;