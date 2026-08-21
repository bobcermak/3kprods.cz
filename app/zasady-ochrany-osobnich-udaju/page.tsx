import type { Metadata } from "next";
import { type FC } from "react";
import { H3, H4, P, Ul, Li, Button, JsonLd, LegalShell, LegalSection } from "@/components";
import type { LegalSectionLink } from "@/components/layout/legal/LegalShell";
import { siteConfig, companyIdentity, hasCompanyDetails, absoluteUrl } from "@/lib/config/site";
import { routes } from "@/lib/config/routes";
import { webPageSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Zásady ochrany osobních údajů",
  description: routes.privacy.description,
  alternates: { canonical: routes.privacy.path },
  openGraph: {
    title: `Zásady ochrany osobních údajů | ${siteConfig.name}`,
    description: routes.privacy.description,
    url: absoluteUrl(routes.privacy.path),
    type: "article"
  }
};
const sections: LegalSectionLink[] = [
  { id: "spravce", title: "Kdo je správce údajů" },
  { id: "udaje", title: "Jaké údaje zpracováváme" },
  { id: "newsletter", title: "Odběr novinek" },
  { id: "foto", title: "Fotografie a video z akcí" },
  { id: "cookies", title: "Cookies a úložiště prohlížeče" },
  { id: "prijemci", title: "Komu údaje předáváme" },
  { id: "zahranici", title: "Předávání mimo EU" },
  { id: "doba", title: "Jak dlouho údaje uchováváme" },
  { id: "prava", title: "Vaše práva" },
  { id: "zabezpeceni", title: "Zabezpečení údajů" },
  { id: "deti", title: "Děti a mladiství" },
  { id: "zmeny", title: "Změny těchto zásad" }
];
type ProcessingCardProps = {
  title: string,
  purpose: string,
  data: string,
  basis: string,
  retention: string
}
const ProcessingCard: FC<ProcessingCardProps> = ({ title, purpose, data, basis, retention }) => (
  <div className="bg-dark-white rounded-[20px] px-6 py-7 inner-shadow-primary">
    <H4 size="text-body" weight="font-extrabold" color="text-light-blue">{title}</H4>
    <Ul type="list-none" className="mt-4 flex flex-col gap-3">
      <Li className="list-none cursor-default!"><P size="text-sm" className="m-0"><strong className="font-bold">Účel:</strong> {purpose}</P></Li>
      <Li className="list-none cursor-default!"><P size="text-sm" className="m-0"><strong className="font-bold">Rozsah údajů:</strong> {data}</P></Li>
      <Li className="list-none cursor-default!"><P size="text-sm" className="m-0"><strong className="font-bold">Právní základ:</strong> {basis}</P></Li>
      <Li className="list-none cursor-default!"><P size="text-sm" className="m-0"><strong className="font-bold">Doba uchování:</strong> {retention}</P></Li>
    </Ul>
  </div>
);
const PrivacyPolicyPage = () => {
  const cookiesLink = <Button href={routes.cookies.path} noStyle={true} hover="hover:text-light-blue active:text-light-blue" className="underline font-bold">Cookies</Button>;
  const mailLink = <Button href={`mailto:${siteConfig.contact.email}`} noStyle={true} hover="hover:text-light-blue active:text-light-blue" className="underline font-bold">{siteConfig.contact.email}</Button>;

  return (
    <>
      <JsonLd nodes={[webPageSchema({ path: routes.privacy.path, name: "Zásady ochrany osobních údajů", description: routes.privacy.description, updatedAt: siteConfig.legal.updatedAt })]} />
      <LegalShell
        badge="Zásady ochrany osobních údajů"
        title={<>Zásady ochrany <span className="text-green">osobních údajů</span></>}
        perex="Vážíme si vaší důvěry. Tady najdete srozumitelně popsané, jaké osobní údaje o vás zpracováváme, proč to děláme, jak dlouho si je necháváme a jaká práva vůči nám máte."
        updatedAt={siteConfig.legal.updatedAt}
        sections={sections}
      >
        <LegalSection id="spravce" index={1} title="Kdo je správce údajů">
          <P>Správcem osobních údajů je <strong className="font-bold">{companyIdentity()}</strong>{hasCompanyDetails() ? <> (dále jen &bdquo;my&ldquo; nebo &bdquo;{siteConfig.name}&ldquo;)</> : <> (dále jen &bdquo;my&ldquo;)</>}.</P>
          <P>Provozujeme web <strong className="font-bold">{siteConfig.url.replace("https://", "")}</strong> a zajišťujeme maturitní plesy, studentské akce a související produkční služby.</P>
          <P>Ve věcech ochrany osobních údajů nás kontaktujte na {mailLink} nebo telefonicky na <strong className="font-bold">{siteConfig.contact.phoneDisplay}</strong>. Nejmenovali jsme pověřence pro ochranu osobních údajů, protože nám to zákon neukládá.</P>
          <P>Osobní údaje zpracováváme v souladu s nařízením Evropského parlamentu a Rady (EU) 2016/679 (GDPR) a se zákonem č. 110/2019 Sb., o zpracování osobních údajů.</P>
        </LegalSection>
        <LegalSection id="udaje" index={2} title="Jaké údaje zpracováváme">
          <P>Zpracováváme jen údaje, které nám sami předáte, nebo které vzniknou při běžném provozu webu. Nekupujeme databáze a neprovádíme profilování ani automatizované rozhodování s právními účinky.</P>
          <ProcessingCard
            title="Poptávka a komunikace s vámi"
            purpose="Odpovědět na váš dotaz, připravit nabídku a domluvit podrobnosti akce."
            data="Jméno a příjmení, telefon, e-mail, název školy nebo organizace, obsah zprávy a údaje o plánované akci."
            basis="Jednání o uzavření smlouvy podle čl. 6 odst. 1 písm. b) GDPR, u nezávazných dotazů náš oprávněný zájem podle čl. 6 odst. 1 písm. f) GDPR na vyřízení poptávky."
            retention="12 měsíců od poslední komunikace, pokud nedojde k uzavření smlouvy."
          />
          <ProcessingCard
            title="Realizace objednané akce"
            purpose="Uzavřít a splnit smlouvu - domluvit program, termín, součinnost a předat výstupy."
            data="Identifikační a kontaktní údaje objednatele a kontaktních osob, fakturační údaje, údaje o místě a průběhu akce."
            basis="Plnění smlouvy podle čl. 6 odst. 1 písm. b) GDPR."
            retention="Po dobu trvání spolupráce a následně 4 roky od jejího ukončení, kvůli promlčecím lhůtám a možným sporům."
          />
          <ProcessingCard
            title="Fakturace a účetnictví"
            purpose="Vystavit daňový doklad a splnit účetní a daňové povinnosti."
            data="Fakturační údaje, údaje o platbách a o poskytnutém plnění."
            basis="Plnění právní povinnosti podle čl. 6 odst. 1 písm. c) GDPR - zejména zákon č. 563/1991 Sb., o účetnictví, a zákon č. 235/2004 Sb., o dani z přidané hodnoty."
            retention="5 let od konce účetního období, u dokladů podléhajících DPH 10 let."
          />
          <ProcessingCard
            title="Odběr novinek (newsletter)"
            purpose="Zasílat vám novinky, tipy a informace o našich službách."
            data="E-mailová adresa, kterou zadáte do formuláře v patičce webu."
            basis="Váš souhlas podle čl. 6 odst. 1 písm. a) GDPR, udělený odesláním formuláře."
            retention="Do odvolání souhlasu, tedy do odhlášení z odběru."
          />
          <ProcessingCard
            title="Provoz a bezpečnost webu"
            purpose="Zajistit dostupnost webu a ochránit ho před útoky a zneužitím."
            data="IP adresa, typ prohlížeče a zařízení, čas a obsah požadavku - tedy standardní záznamy webového serveru."
            basis="Náš oprávněný zájem podle čl. 6 odst. 1 písm. f) GDPR na bezpečném a funkčním provozu webu."
            retention="Podle nastavení hostingu, zpravidla několik týdnů až měsíců."
          />
          <P>Poskytnutí údajů je dobrovolné. Bez kontaktních údajů vám ale nedokážeme odpovědět na poptávku a bez fakturačních údajů nemůžeme vystavit doklad a uzavřít smlouvu.</P>
        </LegalSection>
        <LegalSection id="newsletter" index={3} title="Odběr novinek">
          <P>Když do formuláře v patičce webu zadáte e-mailovou adresu a odešlete ho, přihlásíte se k odběru novinek a my vám obratem pošleme uvítací e-mail. Doručení zajišťuje náš zpracovatel Resend, Inc. - vaše adresa se tedy dostane do jeho systému.</P>
          <P>Souhlas můžete kdykoli a zdarma odvolat. Stačí kliknout na odhlašovací odkaz v jakémkoli e-mailu, nebo nám napsat na {mailLink}. Odvoláním souhlasu není dotčena zákonnost zpracování před jeho odvoláním.</P>
          <P>Obchodní sdělení posíláme i vlastním zákazníkům na základě § 7 odst. 3 zákona č. 480/2004 Sb., o některých službách informační společnosti. I z nich se lze kdykoli odhlásit stejným způsobem.</P>
        </LegalSection>
        <LegalSection id="foto" index={4} title="Fotografie a video z akcí">
          <P>Na akcích, které pro vás zajišťujeme, běžně fotíme a natáčíme - výsledkem jsou reportážní fotografie, záznam a aftermovie. Tyto materiály předáváme objednateli jako součást objednané služby.</P>
          <P>Vybrané fotografie a sestřihy používáme také jako reference na webu a na sociálních sítích. Děje se tak na základě našeho oprávněného zájmu na propagaci vlastní práce podle čl. 6 odst. 1 písm. f) GDPR a v souladu s § 84 a násl. občanského zákoníku. U snímků, na nichž je konkrétní osoba zachycena jako hlavní motiv, si vyžádáme její souhlas.</P>
          <P>Nepřejete-li si být na zveřejněných materiálech, dejte nám vědět na {mailLink} - snímek stáhneme, nebo vás na něm rozostříme. Kdykoli můžete také uplatnit námitku podle článku 21 GDPR.</P>
        </LegalSection>
        <LegalSection id="cookies" index={5} title="Cookies a úložiště prohlížeče">
          <P>Náš web <strong className="font-bold">nepoužívá analytické, reklamní ani jiné sledovací cookies</strong> a nemá žádné měřicí kódy třetích stran. Nepotřebujeme proto ani cookie lištu.</P>
          <P>Jediné, co si ukládáme do vašeho prohlížeče, je záznam v tzv. session storage pod názvem <strong className="font-bold">floating-card-seen</strong>. Slouží k tomu, aby se vám vyskakovací kartička s nabídkou konzultace nezobrazovala pořád dokola. Neobsahuje žádný identifikátor osoby a zmizí ve chvíli, kdy zavřete záložku prohlížeče.</P>
          <P>Web načítá webová písma ze služby Google Fonts (fonts.googleapis.com a fonts.gstatic.com). Při jejich stažení se ke společnosti Google Ireland Limited dostane vaše IP adresa a informace o prohlížeči.</P>
          <P>Podrobný rozpis toho, co se ve vašem prohlížeči při návštěvě děje, najdete v samostatném dokumentu {cookiesLink}.</P>
        </LegalSection>
        <LegalSection id="prijemci" index={6} title="Komu údaje předáváme">
          <P>Osobní údaje neprodáváme a nepředáváme je nikomu pro jeho vlastní marketing. Zpřístupňujeme je pouze těm, bez kterých bychom službu neodvedli:</P>
          <Ul className="flex flex-col gap-3 pl-5">
            <Li className="list-disc cursor-default!"><P size="text-sm" className="m-0"><strong className="font-bold">Poskytovatel hostingu webu</strong> - provozuje server, na kterém web běží, a zpracovává provozní záznamy.</P></Li>
            <Li className="list-disc cursor-default!"><P size="text-sm" className="m-0"><strong className="font-bold">Resend, Inc.</strong> - doručuje e-maily z odběru novinek.</P></Li>
            <Li className="list-disc cursor-default!"><P size="text-sm" className="m-0"><strong className="font-bold">Google Ireland Limited</strong> - dodává webová písma, viz předchozí článek.</P></Li>
            <Li className="list-disc cursor-default!"><P size="text-sm" className="m-0"><strong className="font-bold">Účetní a daňový poradce</strong> - zpracovává účetní doklady.</P></Li>
            <Li className="list-disc cursor-default!"><P size="text-sm" className="m-0"><strong className="font-bold">Spolupracující dodavatelé</strong> - technika, fotografové, moderátoři a další profese podílející se na vaší akci, a to jen v nezbytném rozsahu.</P></Li>
            <Li className="list-disc cursor-default!"><P size="text-sm" className="m-0"><strong className="font-bold">Orgány veřejné moci</strong> - pokud nám to ukládá zákon.</P></Li>
          </Ul>
          <P>Se všemi zpracovateli máme uzavřenou smlouvu o zpracování osobních údajů podle článku 28 GDPR.</P>
        </LegalSection>
        <LegalSection id="zahranici" index={7} title="Předávání mimo EU">
          <P>Údaje zpracováváme přednostně v Evropské unii. Výjimkou je společnost Resend, Inc. se sídlem ve Spojených státech amerických, která pro nás doručuje e-maily.</P>
          <P>Předání je zajištěno standardními smluvními doložkami schválenými Evropskou komisí, případně rámcem EU-US Data Privacy Framework. Kopii záruk vám na vyžádání poskytneme na {mailLink}.</P>
        </LegalSection>
        <LegalSection id="doba" index={8} title="Jak dlouho údaje uchováváme">
          <P>Údaje držíme jen po dobu nezbytně nutnou k účelu, pro který jsme je získali. Konkrétní lhůty najdete u jednotlivých kategorií v článku 2. Po jejich uplynutí údaje bezpečně smažeme nebo anonymizujeme.</P>
          <P>Delší uchování připadá v úvahu pouze tam, kde nám to ukládá zákon, nebo pokud je nezbytné k určení, výkonu či obhajobě právních nároků.</P>
        </LegalSection>
        <LegalSection id="prava" index={9} title="Vaše práva">
          <P>Ve vztahu ke svým osobním údajům máte podle GDPR tato práva:</P>
          <Ul className="flex flex-col gap-3 pl-5">
            <Li className="list-disc cursor-default!"><P size="text-sm" className="m-0"><strong className="font-bold">Právo na přístup</strong> (čl. 15) - zjistit, jaké údaje o vás zpracováváme, a získat jejich kopii.</P></Li>
            <Li className="list-disc cursor-default!"><P size="text-sm" className="m-0"><strong className="font-bold">Právo na opravu</strong> (čl. 16) - nechat opravit nepřesné nebo doplnit neúplné údaje.</P></Li>
            <Li className="list-disc cursor-default!"><P size="text-sm" className="m-0"><strong className="font-bold">Právo na výmaz</strong> (čl. 17) - nechat údaje smazat, pokud pro jejich zpracování už není důvod.</P></Li>
            <Li className="list-disc cursor-default!"><P size="text-sm" className="m-0"><strong className="font-bold">Právo na omezení zpracování</strong> (čl. 18) - dočasně zpracování pozastavit, například po dobu ověřování přesnosti údajů.</P></Li>
            <Li className="list-disc cursor-default!"><P size="text-sm" className="m-0"><strong className="font-bold">Právo na přenositelnost</strong> (čl. 20) - dostat údaje ve strojově čitelném formátu nebo je nechat předat jinému správci.</P></Li>
            <Li className="list-disc cursor-default!"><P size="text-sm" className="m-0"><strong className="font-bold">Právo vznést námitku</strong> (čl. 21) - proti zpracování založenému na oprávněném zájmu, včetně přímého marketingu.</P></Li>
            <Li className="list-disc cursor-default!"><P size="text-sm" className="m-0"><strong className="font-bold">Právo odvolat souhlas</strong> (čl. 7 odst. 3) - kdykoli a bez udání důvodu tam, kde zpracováváme na základě souhlasu.</P></Li>
          </Ul>
          <P>Kterékoli právo uplatníte e-mailem na {mailLink}. Vyřídíme ho nejpozději do {siteConfig.legal.responseDays} dnů; ve složitějších případech se lhůta může prodloužit o další dva měsíce, o čemž vás vyrozumíme. Abychom údaje nevydali nesprávné osobě, můžeme si ověřit vaši totožnost.</P>
          <H3 size="text-body" weight="font-extrabold" color="text-blue" case={null} className="mt-2">Stížnost u dozorového úřadu</H3>
          <P>Máte-li za to, že s vašimi údaji nakládáme v rozporu s předpisy, obraťte se prosím nejprve na nás - většinu věcí vyřešíme obratem. Kdykoli se ale můžete obrátit i na dozorový úřad:</P>
          <P className="text-dark/70">Úřad pro ochranu osobních údajů<br />Pplk. Sochora 27, 170 00 Praha 7<br /><Button href="https://www.uoou.gov.cz" noStyle={true} hover="hover:text-light-blue active:text-light-blue" className="underline font-bold">www.uoou.gov.cz</Button></P>
        </LegalSection>
        <LegalSection id="zabezpeceni" index={10} title="Zabezpečení údajů">
          <P>Web běží výhradně přes šifrované spojení HTTPS. Přístup k údajům mají jen osoby, které je potřebují ke své práci, a to na základě individuálních přístupových údajů.</P>
          <P>Používáme aktuální software, zálohujeme a služby třetích stran vybíráme s ohledem na jejich úroveň zabezpečení. Pokud by i přesto došlo k porušení zabezpečení s vysokým rizikem pro vaše práva, budeme vás bez zbytečného odkladu informovat.</P>
        </LegalSection>
        <LegalSection id="deti" index={11} title="Děti a mladiství">
          <P>Naše akce se často týkají studentů středních škol. Web ani odběr novinek proto vědomě nesměřujeme na děti mladší 15 let - podle § 7 zákona č. 110/2019 Sb. může dítě mladší 15 let udělit souhlas se zpracováním údajů v souvislosti se službou informační společnosti pouze se souhlasem zákonného zástupce.</P>
          <P>Zjistíme-li, že jsme bez potřebného souhlasu získali údaje dítěte mladšího 15 let, bez zbytečného odkladu je smažeme. Dejte nám v takovém případě prosím vědět na {mailLink}.</P>
        </LegalSection>
        <LegalSection id="zmeny" index={12} title="Změny těchto zásad">
          <P>Zásady můžeme upravit, pokud se změní způsob, jakým údaje zpracováváme, nebo pokud to bude vyžadovat legislativa. Aktuální znění je vždy dostupné na této adrese a nahoře u nadpisu najdete datum poslední revize.</P>
          <P>Podstatné změny, které se dotknou zpracování založeného na vašem souhlasu, vám oznámíme předem e-mailem.</P>
        </LegalSection>
      </LegalShell>
    </>
  )
}
export default PrivacyPolicyPage;