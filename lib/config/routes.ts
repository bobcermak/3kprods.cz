export type Route = {
  path: string,
  title: string,
  description: string,
  priority: number,
  changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never"
}
export const routes = {
  home: {
    path: "/",
    title: "Maturitní plesy a studentské akce na klíč",
    description: "Hudba, dekorace, světla i moderace pro nejlepší maturák a studentské akce s týmem 3K Productions. Kompletní event management na míru v ČR.",
    priority: 1,
    changeFrequency: "monthly"
  },
  terms: {
    path: "/obchodni-podminky",
    title: "Obchodní podmínky",
    description: "Podmínky objednávky a realizace event služeb 3K Productions, užívání webu a odběru novinek.",
    priority: 0.3,
    changeFrequency: "yearly"
  },
  cookies: {
    path: "/cookies",
    title: "Cookies",
    description: "Jak to má web 3K Productions s cookies: žádné sledovací ani reklamní cookies, žádné měřicí kódy a proto ani cookie lišta.",
    priority: 0.3,
    changeFrequency: "yearly"
  },
  privacy: {
    path: "/zasady-ochrany-osobnich-udaju",
    title: "Zásady ochrany osobních údajů",
    description: "Jak 3K Productions zpracovává osobní údaje, jaká máte práva a komu údaje předáváme.",
    priority: 0.3,
    changeFrequency: "yearly"
  }
} as const satisfies Record<string, Route>;
export const routeList: Route[] = Object.values(routes);