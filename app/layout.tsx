import { H2, H3, P, Ul, Li, Button, NewsletterForm, FooterCredits } from "@/components";
import Image from "next/image";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "3K Productions | Tvůj Zážitek - Naše Práce",
  description: "Nejlepší maturák tvého života s 3K Productions! Hudba, dekorace a zábava připravená profesionály.",
  referrer: "strict-origin-when-cross-origin",
  keywords: ["3K Productions", "maturák", "studentská akce", "party", "zábava"],
  icons: {
    icon: [
      { url: "/images/assets/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/images/assets/favicon-32x32.png", sizes: "32x32", type: "image/png" }
    ],
    apple: "/images/assets/favicon-180x180.png"
  }
};
export const viewport = {
  width: "device-width",
  initialScale: 1.0
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
    <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "3K Productions",
              description:
                "Nejlepší maturák tvého života s 3K Productions! Hudba, dekorace a zábava připravená profesionály.",
              url: "https://3kproductions.cz",
              logo: "https://3kproductions.cz/images/ui/favicon-180x180.png",
              sameAs: [
                "https://www.instagram.com/3kproductions/",
                "https://www.facebook.com/3kproductions/"
              ]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "3K Productions",
              description:
                "Organizace maturáků, studentských akcí a party na míru. Profesionální zajištění hudby, dekorací a zábavy.",
              url: "https://3kproductions.cz",
              areaServed: "Czech Republic",
              serviceType: "Event Management",
              provider: {
                "@type": "Organization",
                name: "3K Productions"
              }
            })
          }}
        />
    </head>
    <body>
      <Ul className="absolute flex gap-4 px-6 py-4 w-fit border border-white/40 rounded-full glass">
        <Li><a target="_blank" className="text-white text-[28px] bg-dark px-[14.75px] hover:text-dark hover:bg-white active:text-dark active:bg-white transition-all duration-250 py-[10.6px] rounded-full" href="https://www.instagram.com/3kprods/"><i className="fa-brands fa-instagram"></i></a></Li>
        <Li><a target="_blank" className="text-white text-[28px] bg-dark px-[14.75px] hover:text-dark hover:bg-white active:text-dark active:bg-white transition-all duration-250 py-[10.6px] rounded-full" href="https://www.tiktok.com/@3kprods"><i className="fa-brands fa-tiktok"></i></a></Li>
        <Li><a target="_blank" className="text-white text-[28px] bg-dark px-[14.75px] hover:text-dark hover:bg-white active:text-dark active:bg-white transition-all duration-250 py-[10.6px] rounded-full" href="https://www.linkedin.com/company/3kprods/"><i className="fa-brands fa-linkedin-in"></i></a></Li>
      </Ul>
      {children}
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
              <NewsletterForm icon={<i className="fa-solid fa-envelope"></i>} placeholder="example@domain.com">Chci začít</NewsletterForm>
            </div>
          </div>
        </section>
        <FooterCredits year={2025} companyName="3K Productions" socialLinks={[{social: <i className="fa-brands fa-instagram"></i>, url: "https://www.instagram.com/3kprods/", ariaLabel: "Instagram"}, {social: <i className="fa-brands fa-tiktok"></i>, url: "https://www.tiktok.com/@3kprods", ariaLabel: "TikTok"}, {social: <i className="fa-brands fa-linkedin-in"></i>, url: "https://www.linkedin.com/company/3kprods/", ariaLabel: "LinkedIn"}]}/>
      </footer>
    </body>
    </html>
  );
}