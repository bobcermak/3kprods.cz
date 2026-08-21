import { Ul, Li, Navbar, Button, Footer, PageWrapper, FloatingCard, JsonLd } from "@/components";
import type { Metadata, Viewport } from "next";
import { siteConfig } from "@/lib/config/site";
import { organizationSchema, websiteSchema } from "@/lib/seo/schema";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  referrer: "strict-origin-when-cross-origin",
  keywords: ["3K Productions", "maturitní ples", "maturák", "studentská akce", "studentská party", "DJ na ples", "dekorace na ples", "světla a zvuk", "event management", "Liberec"],
  authors: [{ name: "Bohuslav Čermák" }],
  creator: "Bohuslav Čermák",
  publisher: siteConfig.name,
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
  formatDetection: { telephone: true, email: true, address: false },
  icons: {
    icon: [
      { url: "/images/assets/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/images/assets/favicon-32x32.png", sizes: "32x32", type: "image/png" }
    ],
    apple: "/images/assets/favicon-180x180.png"
  }
};
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
  themeColor: "#1C2E55",
  colorScheme: "light"
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body>
        {/* Strojově čitelná verze obsahu pro jazykové modely - React ji vyzvedne do <head>. */}
        <link rel="alternate" type="text/plain" href="/llms.txt" title="llms.txt" />
        <JsonLd nodes={[organizationSchema(), websiteSchema()]} />
        <Ul className="hidden fixed left-0 top-0 ml-6 desktop:ml-3 xdesktop:ml-6 mt-[311px] laptop:flex flex-col gap-10 px-4 py-6 w-fit bg-white/10 backdrop-blur-sm border border-white/40 rounded-[40px] shadow-md z-40">
          <Li><a aria-label="Instagram" target="_blank" className="text-white text-[28px] bg-dark px-[14.75px] hover:text-dark hover:bg-white active:text-dark active:bg-white transition-all duration-250 py-[10.6px] rounded-full" href="https://www.instagram.com/3kprods/"><i className="fa-brands fa-instagram"></i></a></Li>
          <Li><a aria-label="TikTok" target="_blank" className="text-white text-[28px] bg-dark px-[14.75px] hover:text-dark hover:bg-white active:text-dark active:bg-white transition-all duration-250 py-[10.6px] rounded-full" href="https://www.tiktok.com/@3kprods"><i className="fa-brands fa-tiktok"></i></a></Li>
          <Li><a aria-label="LinkedIn" target="_blank" className="text-white text-[28px] bg-dark px-[14.75px] hover:text-dark hover:bg-white active:text-dark active:bg-white transition-all duration-250 py-[10.6px] rounded-full" href="https://www.linkedin.com/company/3kprods/"><i className="fa-brands fa-linkedin-in"></i></a></Li>
        </Ul>
        <header>
          <Navbar logo="/images/assets/logo.webp" button="Jdeme na to" className="fixed z-50 left-0 right-0 laptop:left-[50%] laptop:translate-x-[-50%] flex items-center justify-between px-3 py-1 laptop:w-container transform-gpu backface-hidden" href="tel:+420722145257">
            <Li className="laptop:ml-21 mb-0"><Button href="/" noStyle={true} hover="hover:bg-light-blue rounded-[12px] px-6 py-3 active:bg-light-blue transition-all duration-250" className="text-green uppercase font-semibold text-body">Domů</Button></Li>
            <Li><Button href="/#welcome" noStyle={true} hover="hover:bg-light-blue rounded-[12px] px-6 py-3 active:bg-light-blue transition-all duration-250" className="text-white uppercase font-semibold text-body">O nás</Button></Li>
            <Li><Button href="/#services" noStyle={true} hover="hover:bg-light-blue rounded-[12px] px-6 py-3 active:bg-light-blue transition-all duration-250" className="text-white uppercase font-semibold text-body">Služby</Button></Li>
            <Li><Button href="/#reviews" noStyle={true} hover="hover:bg-light-blue rounded-[12px] px-6 py-3 active:bg-light-blue transition-all duration-250" className="text-white uppercase font-semibold text-body">Recenze</Button></Li>
            <Li><Button href="/#contact-us" noStyle={true} hover="hover:bg-light-blue rounded-[12px] px-6 py-3 active:bg-light-blue transition-all duration-250" className="text-white uppercase font-semibold text-body">Kontakty</Button></Li>
            <Li className="laptop:hidden px-6 laptop:px-0"><Button href="/#contact-us" variant="secondary" isArrow={false}>Kontaktuj nás</Button></Li>
          </Navbar>
        </header>
        <PageWrapper>
          {children}
          <Footer />
        </PageWrapper>
        <FloatingCard />
      </body>
    </html>
  )
}