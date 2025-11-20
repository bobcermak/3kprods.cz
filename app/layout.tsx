import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "3K Productions | Tvůj Zážitek - Naše Práce",
  description: "Nejlepší maturák tvého života s 3K Productions! Hudba, dekorace a zábava připravená profesionály.",
  viewport: "width=device-width, initial-scale=1.0",
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
      {children}
    </body>
    </html>
  );
}