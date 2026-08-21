import { siteConfig, socialLinks, absoluteUrl } from "@/lib/config/site";
import { routes } from "@/lib/config/routes";

export type SchemaNode = Record<string, unknown>;
export const ORGANIZATION_ID: string = `${siteConfig.url}/#organization`;
export const WEBSITE_ID: string = `${siteConfig.url}/#website`;
const optional = (key: string, value: string | undefined): SchemaNode => (value ? { [key]: value } : {});
export const organizationSchema = (): SchemaNode => ({
  "@type": "ProfessionalService",
  "@id": ORGANIZATION_ID,
  name: siteConfig.name,
  alternateName: siteConfig.shortName,
  ...optional("legalName", siteConfig.company.legalName),
  ...optional("vatID", siteConfig.company.dic),
  ...optional("taxID", siteConfig.company.ico),
  ...optional("foundingDate", siteConfig.founded),
  url: siteConfig.url,
  logo: {
    "@type": "ImageObject",
    url: absoluteUrl(siteConfig.logo),
    caption: `${siteConfig.name} - logo`
  },
  image: absoluteUrl(siteConfig.logo),
  description: "Organizace maturitních plesů, studentských akcí a party na míru. Zajistíme DJ, moderátora, ozvučení, osvětlení, dekorace, fotografa i aftermovie v Liberci a po celé ČR.",
  slogan: "Tvůj zážitek. Naše práce.",
  email: siteConfig.contact.email,
  telephone: siteConfig.contact.phone,
  address: {
    "@type": "PostalAddress",
    ...optional("streetAddress", siteConfig.company.address),
    addressLocality: siteConfig.company.city,
    addressRegion: siteConfig.company.region,
    addressCountry: siteConfig.company.countryCode
  },
  areaServed: [
    { "@type": "City", name: "Liberec" },
    { "@type": "AdministrativeArea", name: "Liberecký kraj" },
    { "@type": "Country", name: "Česká republika" }
  ],
  knowsLanguage: ["cs", "en"],
  currenciesAccepted: "CZK",
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: siteConfig.contact.phone,
      email: siteConfig.contact.email,
      availableLanguage: ["cs", "en"],
      areaServed: siteConfig.company.countryCode
    },
    {
      "@type": "ContactPoint",
      contactType: "sales",
      telephone: siteConfig.contact.phoneSecondary,
      availableLanguage: ["cs"],
      areaServed: siteConfig.company.countryCode
    }
  ],
  sameAs: socialLinks
});
export const websiteSchema = (): SchemaNode => ({
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: siteConfig.url,
  name: siteConfig.name,
  description: siteConfig.description,
  inLanguage: siteConfig.language,
  publisher: { "@id": ORGANIZATION_ID }
});
export const servicesSchema = (): SchemaNode => ({
  "@type": "Service",
  "@id": `${siteConfig.url}/#services`,
  name: "Kompletní zajištění maturitního plesu a studentských akcí",
  serviceType: "Event management",
  provider: { "@id": ORGANIZATION_ID },
  areaServed: { "@type": "Country", name: "Česká republika" },
  audience: {
    "@type": "Audience",
    audienceType: "Maturitní ročníky, střední školy, studentské spolky a firmy"
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Služby 3K Productions",
    itemListElement: [
      { name: "DJ na maturitní ples", description: "Profesionální DJ a hudební dramaturgie večera od nástupů až po volnou zábavu." },
      { name: "Moderátor akce", description: "Moderace nástupů, šerpování, půlnočního překvapení i celého programu." },
      { name: "Ozvučení", description: "Kompletní zvuková aparatura, mikrofony a technická obsluha po celou dobu akce." },
      { name: "Osvětlení", description: "Světelný park, efekty a nasvícení sálu i parketu na míru prostoru." },
      { name: "Dekorace a výzdoba", description: "Návrh a realizace dekorací a výzdoby sálu podle tématu plesu." },
      { name: "Fotograf a fotokoutek", description: "Reportážní fotografie z celého večera a fotokoutek s rekvizitami." },
      { name: "Video a aftermovie", description: "Videozáznam akce a sestřih aftermovie, které zachytí atmosféru večera." },
      { name: "Grafika a tiskoviny", description: "Grafické návrhy a tisk vstupenek, plakátů, šerp a dalších tiskovin." }
    ].map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.name,
        description: service.description,
        provider: { "@id": ORGANIZATION_ID }
      }
    }))
  }
});
export const faqSchema = (): SchemaNode => ({
  "@type": "FAQPage",
  "@id": `${siteConfig.url}/#faq`,
  inLanguage: siteConfig.language,
  mainEntity: [
    {
      question: "Co všechno zajistíte na maturitní ples?",
      answer: "Zajistíme kompletní produkci večera - DJ, moderátora, ozvučení, osvětlení, dekorace a výzdobu, fotografa i fotokoutek, video a aftermovie a k tomu grafiku a tisk vstupenek či plakátů. Vybrat si můžete i jen jednotlivé služby."
    },
    {
      question: "Kde působíte?",
      answer: "Sídlíme v Liberci a v Libereckém kraji odbavíme většinu akcí, jezdíme ale po celé České republice."
    },
    {
      question: "Jak si u vás akci objednám?",
      answer: "Ozvěte se telefonicky na +420 722 145 257 nebo e-mailem na info@3kprods.cz. Domluvíme si nezávaznou konzultaci, projdeme termín, prostor a představu o večeru a připravíme nabídku na míru."
    },
    {
      question: "Kolik stojí zajištění maturitního plesu?",
      answer: "Cena vychází z rozsahu objednaných služeb, velikosti prostoru a délky akce, proto ji počítáme individuálně. Nezávazná kalkulace je zdarma - stačí se ozvat."
    },
    {
      question: "Jak dlouho dopředu je potřeba akci rezervovat?",
      answer: "Termíny maturitních plesů se obsazují zpravidla s několikaměsíčním předstihem, doporučujeme se proto ozvat co nejdříve. Volný termín ověříme obratem."
    }
  ].map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer
    }
  }))
});
export const breadcrumbSchema = (items: { name: string, path: string }[]): SchemaNode => ({
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: absoluteUrl(item.path)
  }))
});
export const webPageSchema = ({ path, name, description, type = "WebPage", updatedAt }: { path: string, name: string, description: string, type?: string, updatedAt?: string }): SchemaNode => ({
  "@type": type,
  "@id": `${absoluteUrl(path)}#webpage`,
  url: absoluteUrl(path),
  name: name,
  description: description,
  inLanguage: siteConfig.language,
  isPartOf: { "@id": WEBSITE_ID },
  about: { "@id": ORGANIZATION_ID },
  ...optional("dateModified", updatedAt),
  breadcrumb: path === routes.home.path ? undefined : breadcrumbSchema([{ name: "Domů", path: routes.home.path }, { name: name, path: path }])
});
export const buildGraph = (...nodes: SchemaNode[]): SchemaNode => ({
  "@context": "https://schema.org",
  "@graph": nodes
});