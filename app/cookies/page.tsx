import type { Metadata } from "next";
import { P, Ul, Li, Button, JsonLd, LegalShell, LegalSection } from "@/components";
import type { LegalSectionLink } from "@/components/layout/legal/LegalShell";
import { siteConfig, absoluteUrl } from "@/lib/config/site";
import { routes } from "@/lib/config/routes";
import { webPageSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Cookies",
  description: routes.cookies.description,
  alternates: { canonical: routes.cookies.path },
  openGraph: {
    title: `Cookies | ${siteConfig.name}`,
    description: routes.cookies.description,
    url: absoluteUrl(routes.cookies.path),
    type: "article"
  }
};
const sections: LegalSectionLink[] = [
  { id: "co-jsou", title: "Co jsou cookies" },
  { id: "jake-pouzivame", title: "Jaké cookies používáme" },
  { id: "ulozeni", title: "Co si ukládáme do prohlížeče" },
  { id: "treti-strany", title: "Služby třetích stran" },
  { id: "lista", title: "Proč tu není cookie lišta" },
  { id: "sprava", title: "Jak cookies spravovat" },
  { id: "zmeny", title: "Změny tohoto dokumentu" }
];
const CookiesPage = () => {
  const mailLink = <Button href={`mailto:${siteConfig.contact.email}`} noStyle={true} hover="hover:text-light-blue active:text-light-blue" className="underline font-bold">{siteConfig.contact.email}</Button>;
  const privacyLink = <Button href={routes.privacy.path} noStyle={true} hover="hover:text-light-blue active:text-light-blue" className="underline font-bold">Zásadách ochrany osobních údajů</Button>;

  return (
    <>
      <JsonLd nodes={[webPageSchema({ path: routes.cookies.path, name: "Cookies", description: routes.cookies.description, updatedAt: siteConfig.legal.updatedAt })]} />
      <LegalShell
        badge="Cookies"
        title={<>Jak to máme s <span className="text-green">cookies</span></>}
        perex="Krátce a bez kliček: nesledujeme vás. Tenhle web nemá analytiku, reklamní pixely ani sledovací cookies. Přesto si zaslouží vysvětlit, co se ve vašem prohlížeči při návštěvě opravdu děje."
        updatedAt={siteConfig.legal.updatedAt}
        sections={sections}
      >
        <LegalSection id="co-jsou" index={1} title="Co jsou cookies">
          <P>Cookies jsou malé textové soubory, které web ukládá do vašeho prohlížeče. Při další návštěvě si je vyžádá zpátky a díky tomu si vás dokáže „pamatovat“ - třeba že jste přihlášení, co máte v košíku nebo jaký jazyk jste si zvolili.</P>
          <P>Vedle nich existuje i další úložiště prohlížeče, zejména local storage a session storage. Funguje podobně, ale data se na server samy neodesílají.</P>
          <P>Cookies se běžně dělí na technické, které jsou nutné k fungování webu, a na analytické a reklamní, které měří chování návštěvníků a cílí reklamu. Právě ty druhé vyžadují váš předchozí souhlas podle § 89 odst. 3 zákona č. 127/2005 Sb., o elektronických komunikacích.</P>
        </LegalSection>
        <LegalSection id="jake-pouzivame" index={2} title="Jaké cookies používáme">
          <P><strong className="font-bold">Žádné.</strong> Tenhle web neukládá do vašeho prohlížeče jedinou cookie - technickou ani jinou.</P>
          <P>Konkrétně tu nenajdete:</P>
          <Ul className="flex flex-col gap-3 pl-5">
            <Li className="list-disc cursor-default!"><P size="text-sm" className="m-0"><strong className="font-bold">analytiku</strong> - žádné Google Analytics, Matomo ani jiné měření návštěvnosti,</P></Li>
            <Li className="list-disc cursor-default!"><P size="text-sm" className="m-0"><strong className="font-bold">reklamní a remarketingové kódy</strong> - žádný Meta Pixel, Sklik ani Google Ads,</P></Li>
            <Li className="list-disc cursor-default!"><P size="text-sm" className="m-0"><strong className="font-bold">sledování napříč weby</strong> - nesestavujeme profily návštěvníků a nikomu je neprodáváme,</P></Li>
            <Li className="list-disc cursor-default!"><P size="text-sm" className="m-0"><strong className="font-bold">vložené widgety sociálních sítí</strong> - na sítě vedou jen obyčejné odkazy, které nic nenačítají na pozadí.</P></Li>
          </Ul>
          <P>Nic z toho se nepoužívá ani skrytě: web je statický a veškerý kód, který v prohlížeči běží, je náš vlastní.</P>
        </LegalSection>
        <LegalSection id="ulozeni" index={3} title="Co si ukládáme do prohlížeče">
          <P>Jedinou výjimkou je jeden zápis v <strong className="font-bold">session storage</strong>:</P>
          <div className="bg-dark-white rounded-[20px] px-6 py-7 inner-shadow-primary">
            <Ul type="list-none" className="flex flex-col gap-3">
              <Li className="list-none cursor-default!"><P size="text-sm" className="m-0"><strong className="font-bold">Název:</strong> floating-card-seen</P></Li>
              <Li className="list-none cursor-default!"><P size="text-sm" className="m-0"><strong className="font-bold">Typ:</strong> session storage, nikoli cookie - na server se neodesílá</P></Li>
              <Li className="list-none cursor-default!"><P size="text-sm" className="m-0"><strong className="font-bold">Účel:</strong> zapamatovat si, že jste zavřeli vyskakovací kartičku s nabídkou konzultace, aby na vás nevyskakovala pořád dokola</P></Li>
              <Li className="list-none cursor-default!"><P size="text-sm" className="m-0"><strong className="font-bold">Obsah:</strong> jediná hodnota &bdquo;true&ldquo;, žádný identifikátor osoby</P></Li>
              <Li className="list-none cursor-default!"><P size="text-sm" className="m-0"><strong className="font-bold">Životnost:</strong> zmizí ve chvíli, kdy zavřete záložku prohlížeče</P></Li>
            </Ul>
          </div>
          <P>Tenhle zápis slouží výhradně k pohodlí při ovládání webu, nic neměří a nikam se neodesílá. Podle § 89 odst. 3 zákona o elektronických komunikacích proto nevyžaduje souhlas.</P>
        </LegalSection>
        <LegalSection id="treti-strany" index={4} title="Služby třetích stran">
          <P>Web načítá webová písma ze služby <strong className="font-bold">Google Fonts</strong> (fonts.googleapis.com a fonts.gstatic.com). Ani ta neukládají cookies, ale při stažení písma se ke společnosti Google Ireland Limited dostane vaše IP adresa a údaj o prohlížeči - stejně jako u jakéhokoli jiného souboru staženého z cizího serveru.</P>
          <P>Podmínky ochrany soukromí Google najdete na <Button href="https://policies.google.com/privacy" noStyle={true} hover="hover:text-light-blue active:text-light-blue" className="underline font-bold">policies.google.com/privacy</Button>.</P>
          <P>Kromě písem web nenačítá žádný obsah z cizích serverů - fotografie, videa i skripty běží z našeho hostingu.</P>
          <P>Odkazy vedoucí na Instagram, TikTok, LinkedIn nebo YouTube jsou obyčejné odkazy. Cookies vám nastaví teprve ta síť, na kterou kliknete, a to už podle svých vlastních pravidel.</P>
        </LegalSection>
        <LegalSection id="lista" index={5} title="Proč tu není cookie lišta">
          <P>Souhlas s ukládáním dat do prohlížeče se vyžaduje jen tam, kde se ukládá něco, co k fungování webu není nezbytné - typicky u analytiky a reklamy.</P>
          <P>Protože tu nic takového nemáme, nemáme se vás na co ptát. Lišta, která by se ptala na souhlas s cookies, jež neexistují, by byla jen otravné klikání navíc.</P>
          <P>Kdybychom někdy analytiku nasadili, přibude tu cookie lišta s možností souhlas odmítnout nebo kdykoli změnit - a tenhle dokument upravíme dřív, než se tak stane.</P>
        </LegalSection>
        <LegalSection id="sprava" index={6} title="Jak cookies spravovat">
          <P>I když od nás žádné cookies nedostanete, kontrolu nad úložištěm prohlížeče máte vždycky vy. Smazat obsah a nastavit pravidla pro všechny weby lze v nastavení prohlížeče:</P>
          <Ul className="flex flex-col gap-3 pl-5">
            <Li className="list-disc cursor-default!"><P size="text-sm" className="m-0"><strong className="font-bold">Chrome:</strong> Nastavení → Ochrana soukromí a zabezpečení → Soubory cookie třetích stran</P></Li>
            <Li className="list-disc cursor-default!"><P size="text-sm" className="m-0"><strong className="font-bold">Firefox:</strong> Nastavení → Soukromí a zabezpečení → Cookies a data stránek</P></Li>
            <Li className="list-disc cursor-default!"><P size="text-sm" className="m-0"><strong className="font-bold">Safari:</strong> Nastavení → Soukromí → Spravovat data webů</P></Li>
            <Li className="list-disc cursor-default!"><P size="text-sm" className="m-0"><strong className="font-bold">Edge:</strong> Nastavení → Soubory cookie a oprávnění webu</P></Li>
          </Ul>
          <P>Smazání dat našeho webu nemá na jeho funkčnost žádný vliv - jen se vám znovu jednou ukáže vyskakovací kartička.</P>
        </LegalSection>
        <LegalSection id="zmeny" index={7} title="Změny tohoto dokumentu">
          <P>Dokument upravíme, pokud na webu přibude cokoli, co do prohlížeče ukládá data. Datum poslední revize najdete nahoře u nadpisu.</P>
          <P>Jak nakládáme s osobními údaji obecně, se dočtete v {privacyLink}. Na cokoli dalšího se ptejte na {mailLink}.</P>
        </LegalSection>
      </LegalShell>
    </>
  )
}
export default CookiesPage;