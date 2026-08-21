export const siteConfig = {
  url: "https://3kprods.cz",
  name: "3K Productions",
  shortName: "3kprods",
  locale: "cs_CZ",
  language: "cs-CZ",
  title: "3K Productions | Maturitní plesy a studentské akce na klíč",
  description: "Hudba, dekorace, světla i moderace pro nejlepší maturák a studentské akce s týmem 3K Productions. Kompletní event management na míru v ČR.",
  logo: "/images/assets/logo.webp",
  founded: "",
  company: {
    legalName: "",
    legalForm: "fyzická osoba podnikající dle živnostenského zákona",
    ico: "",
    dic: "",
    address: "",
    city: "Liberec",
    cityLocative: "Liberci",
    region: "Liberecký kraj",
    country: "Česká republika",
    countryCode: "CZ",
    registration: "",
    vatPayer: false
  },
  contact: {
    email: "info@3kprods.cz",
    phone: "+420722145257",
    phoneSecondary: "+420739145788",
    phoneDisplay: "+420 722 145 257",
    phoneSecondaryDisplay: "+420 739 145 788",
    mapUrl: "https://maps.app.goo.gl/Z6ivpNXnn94nXLeP7"
  },
  social: {
    instagram: "https://www.instagram.com/3kprods/",
    tiktok: "https://www.tiktok.com/@3kprods",
    linkedin: "https://www.linkedin.com/company/3kprods/",
    youtube: "https://www.youtube.com/@3KProds"
  },
  legal: {
    updatedAt: "2026-08-21",
    responseDays: 30
  }
} as const;
export const socialLinks: string[] = [siteConfig.social.instagram, siteConfig.social.tiktok, siteConfig.social.linkedin, siteConfig.social.youtube];
export const companyIdentity = (): string => {
  const c = siteConfig.company;
  const parts: string[] = [];
  if (c.legalName) {
    parts.push(c.legalName);
    if (c.legalForm) parts.push(c.legalForm);
  }
  else parts.push(siteConfig.name);
  if (c.ico) parts.push(`IČO ${c.ico}`);
  if (c.dic) parts.push(`DIČ ${c.dic}`);
  parts.push(c.address ? `se sídlem ${c.address}` : `s působištěm v ${c.cityLocative}`);
  if (c.registration) parts.push(c.registration);
  return parts.join(", ");
};
export const hasCompanyDetails = (): boolean => Boolean(siteConfig.company.legalName);
export const absoluteUrl = (path: string = "/"): string => new URL(path, siteConfig.url).toString();
export const formatDate = (iso: string): string => new Date(iso).toLocaleDateString("cs-CZ", { day: "numeric", month: "numeric", year: "numeric" });