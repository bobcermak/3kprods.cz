import type { Metadata } from "next";
import { P, Ul, Li, Button, JsonLd, LegalShell, LegalSection } from "@/components";
import type { LegalSectionLink } from "@/components/layout/legal/LegalShell";
import { siteConfig, companyIdentity, hasCompanyDetails, absoluteUrl } from "@/lib/config/site";
import { routes } from "@/lib/config/routes";
import { webPageSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Obchodní podmínky",
  description: routes.terms.description,
  alternates: { canonical: routes.terms.path },
  openGraph: {
    title: `Obchodní podmínky | ${siteConfig.name}`,
    description: routes.terms.description,
    url: absoluteUrl(routes.terms.path),
    type: "article"
  }
};
const sections: LegalSectionLink[] = [
  { id: "uvod", title: "Úvodní ustanovení" },
  { id: "pojmy", title: "Vymezení pojmů" },
  { id: "sluzby", title: "Rozsah služeb" },
  { id: "smlouva", title: "Poptávka a uzavření smlouvy" },
  { id: "cena", title: "Cena a platební podmínky" },
  { id: "soucinnost", title: "Termín a součinnost objednatele" },
  { id: "storno", title: "Změny objednávky a storno" },
  { id: "vyssi-moc", title: "Vyšší moc" },
  { id: "odpovednost", title: "Odpovědnost za škodu" },
  { id: "licence", title: "Fotografie, video a licence" },
  { id: "reklamace", title: "Reklamace a vady plnění" },
  { id: "spotrebitel", title: "Práva spotřebitele" },
  { id: "web", title: "Užívání webu" },
  { id: "newsletter", title: "Odběr novinek" },
  { id: "osobni-udaje", title: "Ochrana osobních údajů" },
  { id: "zaver", title: "Závěrečná ustanovení" }
];
const TermsPage = () => {
  const company = siteConfig.company;
  const mailLink = <Button href={`mailto:${siteConfig.contact.email}`} noStyle={true} hover="hover:text-light-blue active:text-light-blue" className="underline font-bold">{siteConfig.contact.email}</Button>;
  const privacyLink = <Button href={routes.privacy.path} noStyle={true} hover="hover:text-light-blue active:text-light-blue" className="underline font-bold">Zásadách ochrany osobních údajů</Button>;

  return (
    <>
      <JsonLd nodes={[webPageSchema({ path: routes.terms.path, name: "Obchodní podmínky", description: routes.terms.description, updatedAt: siteConfig.legal.updatedAt })]} />
      <LegalShell
        badge="Obchodní podmínky"
        title={<>Obchodní <span className="text-green">podmínky</span></>}
        perex="Aby bylo od začátku jasné, na čem jsme. Tady najdete, jak u nás probíhá objednávka, kdy a kolik se platí, co se stane při změně termínu a jaká práva máte k fotkám a videím z vaší akce."
        updatedAt={siteConfig.legal.updatedAt}
        sections={sections}
      >
        <LegalSection id="uvod" index={1} title="Úvodní ustanovení">
          <P>Tyto obchodní podmínky (dále jen &bdquo;podmínky&ldquo;) vydává <strong className="font-bold">{companyIdentity()}</strong>{hasCompanyDetails() ? <>, vystupující pod označením {siteConfig.name}</> : null} (dále jen &bdquo;poskytovatel&ldquo; nebo &bdquo;my&ldquo;).</P>
          <P>Podmínky upravují tři věci: pravidla objednávky a realizace našich event služeb, pravidla užívání webu {siteConfig.url.replace("https://", "")} a pravidla odběru novinek.</P>
          <P>Podmínky se stávají součástí každé smlouvy uzavřené mezi námi a objednatelem. Odchylná ujednání v individuální smlouvě, nabídce nebo potvrzené objednávce mají přednost před zněním těchto podmínek.</P>
          <P>Vztahy těmito podmínkami neupravené se řídí právním řádem České republiky, zejména zákonem č. 89/2012 Sb., občanský zákoník.</P>
          {company.vatPayer ? <P>Poskytovatel je plátcem DPH{company.dic ? `, DIČ ${company.dic}` : ""}. Ceny se uvádějí bez DPH, není-li výslovně uvedeno jinak.</P> : <P>Poskytovatel není plátcem DPH. Uváděné ceny jsou konečné.</P>}
        </LegalSection>
        <LegalSection id="pojmy" index={2} title="Vymezení pojmů">
          <Ul className="flex flex-col gap-3 pl-5">
            <Li className="list-disc cursor-default!"><P size="text-sm" className="m-0"><strong className="font-bold">Objednatel</strong> - fyzická nebo právnická osoba, která si u nás objednává služby; typicky maturitní ročník, jeho zástupce, škola, spolek nebo firma.</P></Li>
            <Li className="list-disc cursor-default!"><P size="text-sm" className="m-0"><strong className="font-bold">Spotřebitel</strong> - objednatel, který je člověkem a při uzavírání smlouvy nejedná v rámci své podnikatelské činnosti.</P></Li>
            <Li className="list-disc cursor-default!"><P size="text-sm" className="m-0"><strong className="font-bold">Akce</strong> - maturitní ples, studentská party, firemní nebo jiná společenská událost, pro kterou zajišťujeme plnění.</P></Li>
            <Li className="list-disc cursor-default!"><P size="text-sm" className="m-0"><strong className="font-bold">Nabídka</strong> - písemný nebo e-mailový návrh rozsahu služeb a ceny, který objednateli připravíme na míru.</P></Li>
            <Li className="list-disc cursor-default!"><P size="text-sm" className="m-0"><strong className="font-bold">Výstupy</strong> - fotografie, videozáznam, aftermovie, grafické návrhy a tiskoviny vzniklé v souvislosti s akcí.</P></Li>
          </Ul>
        </LegalSection>
        <LegalSection id="sluzby" index={3} title="Rozsah služeb">
          <P>Zajišťujeme produkci společenských akcí, a to buď kompletně na klíč, nebo po jednotlivých částech. Konkrétně jde zejména o:</P>
          <Ul className="flex flex-col gap-3 pl-5">
            <Li className="list-disc cursor-default!"><P size="text-sm" className="m-0">DJ, hudební dramaturgii večera a moderaci programu,</P></Li>
            <Li className="list-disc cursor-default!"><P size="text-sm" className="m-0">ozvučení, osvětlení a obsluhu techniky po celou dobu akce,</P></Li>
            <Li className="list-disc cursor-default!"><P size="text-sm" className="m-0">návrh a realizaci dekorací a výzdoby prostoru,</P></Li>
            <Li className="list-disc cursor-default!"><P size="text-sm" className="m-0">fotografa, fotokoutek, videozáznam a sestřih aftermovie,</P></Li>
            <Li className="list-disc cursor-default!"><P size="text-sm" className="m-0">grafické návrhy a tisk vstupenek, plakátů, šerp a dalších tiskovin.</P></Li>
          </Ul>
          <P>Přesný rozsah plnění vždy vymezuje potvrzená nabídka. Co v ní není uvedeno, není součástí ceny - dodatečné požadavky řešíme písemným dodatkem a samostatnou kalkulací.</P>
          <P>Část plnění můžeme zajistit prostřednictvím spolupracujících dodavatelů. Za jejich plnění odpovídáme, jako bychom ho poskytovali sami.</P>
        </LegalSection>
        <LegalSection id="smlouva" index={4} title="Poptávka a uzavření smlouvy">
          <P>Web není e-shop a informace na něm uvedené nejsou nabídkou ve smyslu § 1732 odst. 2 občanského zákoníku. Slouží k představení služeb a k navázání kontaktu.</P>
          <P>Poptávku podáte telefonicky, e-mailem nebo přes naše sociální sítě. Následně si domluvíme nezávaznou konzultaci, na které projdeme termín, prostor a představu o akci.</P>
          <P>Na základě konzultace vám připravíme nabídku s rozsahem služeb a cenou. Nabídka platí <strong className="font-bold">14 dní</strong> od odeslání, není-li v ní uvedeno jinak.</P>
          <P>Smlouva je uzavřena okamžikem, kdy objednatel nabídku písemně (postačí e-mailem) potvrdí, případně podpisem samostatné smlouvy. Od té chvíle je termín rezervovaný pro objednatele.</P>
          <P>Termín akce blokujeme až po potvrzení objednávky a připsání zálohy podle článku 5. Do té doby ho můžeme nabídnout jinému zájemci.</P>
        </LegalSection>
        <LegalSection id="cena" index={5} title="Cena a platební podmínky">
          <P>Cena vychází z rozsahu objednaných služeb, velikosti prostoru, délky akce a místa konání. Vždy ji uvádíme v potvrzené nabídce.</P>
          <P>Není-li dohodnuto jinak, platí tento režim: <strong className="font-bold">záloha ve výši 50 % ceny</strong> je splatná do 14 dnů od potvrzení objednávky a <strong className="font-bold">doplatek</strong> do 14 dnů od konání akce na základě vystavené faktury.</P>
          <P>Platí se převodem na účet uvedený na faktuře. Závazek je splněn připsáním částky na náš účet.</P>
          <P>Cestovní náklady mimo Liberecký kraj, poplatky OSA či Intergram a náklady na pronájem prostor nejsou součástí ceny, pokud to nabídka výslovně neuvádí.</P>
          <P>Při prodlení s úhradou nám náleží úrok z prodlení ve výši stanovené nařízením vlády č. 351/2013 Sb. Je-li objednatel v prodlení se zálohou déle než 14 dní, můžeme od smlouvy odstoupit a termín uvolnit.</P>
        </LegalSection>
        <LegalSection id="soucinnost" index={6} title="Termín a součinnost objednatele">
          <P>Termín, místo a časový harmonogram akce potvrzujeme v nabídce. Nejpozději 14 dní před akcí si spolu projdeme finální scénář večera.</P>
          <P>Objednatel se zavazuje zajistit zejména:</P>
          <Ul className="flex flex-col gap-3 pl-5">
            <Li className="list-disc cursor-default!"><P size="text-sm" className="m-0">přístup do prostoru pro stavbu techniky v dohodnutém čase, zpravidla nejméně 4 hodiny před začátkem akce,</P></Li>
            <Li className="list-disc cursor-default!"><P size="text-sm" className="m-0">dostatečný a revidovaný přívod elektrické energie odpovídající technickému zadání,</P></Li>
            <Li className="list-disc cursor-default!"><P size="text-sm" className="m-0">možnost parkování a složení techniky v blízkosti vstupu,</P></Li>
            <Li className="list-disc cursor-default!"><P size="text-sm" className="m-0">souhlas majitele či provozovatele prostoru s instalací techniky a dekorací,</P></Li>
            <Li className="list-disc cursor-default!"><P size="text-sm" className="m-0">splnění povinností pořadatele akce, včetně ohlášení akce a zajištění pořadatelské služby, pokud je pořadatelem objednatel,</P></Li>
            <Li className="list-disc cursor-default!"><P size="text-sm" className="m-0">dostupnou kontaktní osobu po celou dobu konání akce.</P></Li>
          </Ul>
          <P>Neposkytne-li objednatel součinnost a kvůli tomu nebude možné plnění poskytnout včas nebo v plném rozsahu, nejde o vadu plnění a cena se nekrátí. Náklady, které nám tím prokazatelně vzniknou, hradí objednatel.</P>
        </LegalSection>
        <LegalSection id="storno" index={7} title="Změny objednávky a storno">
          <P>Změnu rozsahu služeb lze domluvit kdykoli, vždy ale písemně a s ohledem na naše kapacity. Změna se promítne do ceny.</P>
          <P>Zrušit objednávku může objednatel kdykoli písemným oznámením. Protože termín pro něj blokujeme a odmítáme kvůli němu jiné zakázky, náleží nám storno poplatek z celkové ceny podle toho, kolik dní před akcí zrušení doručíte:</P>
          <Ul className="flex flex-col gap-3 pl-5">
            <Li className="list-disc cursor-default!"><P size="text-sm" className="m-0"><strong className="font-bold">více než 90 dní</strong> před akcí - bez storno poplatku, hradí se pouze prokazatelně vynaložené náklady,</P></Li>
            <Li className="list-disc cursor-default!"><P size="text-sm" className="m-0"><strong className="font-bold">90 až 31 dní</strong> před akcí - 30 % ceny,</P></Li>
            <Li className="list-disc cursor-default!"><P size="text-sm" className="m-0"><strong className="font-bold">30 až 15 dní</strong> před akcí - 50 % ceny,</P></Li>
            <Li className="list-disc cursor-default!"><P size="text-sm" className="m-0"><strong className="font-bold">14 dní a méně</strong> před akcí - 100 % ceny.</P></Li>
          </Ul>
          <P>Storno poplatek se započítává proti uhrazené záloze. Přesahuje-li záloha jeho výši, rozdíl vrátíme do 14 dnů.</P>
          <P>Dohodneme-li se na přesunutí akce na náhradní termín, který máme volný, storno poplatek neúčtujeme a záloha se převádí na nový termín.</P>
          <P>Zrušíme-li akci my z důvodu na naší straně, vrátíme objednateli veškeré uhrazené platby do 14 dnů a pokusíme se zajistit náhradní řešení srovnatelné kvality.</P>
        </LegalSection>
        <LegalSection id="vyssi-moc" index={8} title="Vyšší moc">
          <P>Žádná ze stran neodpovídá za nesplnění povinnosti způsobené mimořádnou nepředvídatelnou a nepřekonatelnou překážkou vzniklou nezávisle na její vůli - zejména živelní událostí, výpadkem dodávky energie, úředním zákazem konání akcí nebo obdobným opatřením orgánu veřejné moci.</P>
          <P>Nastane-li taková překážka, budeme se přednostně snažit domluvit náhradní termín. Není-li to možné, vrátíme objednateli uhrazené platby snížené o prokazatelně vynaložené náklady a storno poplatek se neuplatní.</P>
        </LegalSection>
        <LegalSection id="odpovednost" index={9} title="Odpovědnost za škodu">
          <P>Odpovídáme za škodu způsobenou porušením našich povinností podle obecné úpravy občanského zákoníku.</P>
          <P>Neodpovídáme za škodu vzniklou v důsledku nesprávných nebo neúplných podkladů objednatele, nedostatečné součinnosti, stavu prostor, jednání účastníků akce ani za škodu způsobenou vyšší mocí.</P>
          <P>Vůči objednateli, který není spotřebitelem, se náhrada škody omezuje na částku odpovídající ceně plnění podle konkrétní smlouvy. Toto omezení se neuplatní u škody způsobené úmyslně nebo z hrubé nedbalosti a u újmy na přirozených právech člověka.</P>
          <P>Objednatel odpovídá za škodu na naší technice a vybavení způsobenou účastníky akce, pokud ji nezpůsobíme my nebo naši dodavatelé.</P>
        </LegalSection>
        <LegalSection id="licence" index={10} title="Fotografie, video a licence">
          <P>Fotografie, videozáznamy, aftermovie i grafické návrhy jsou autorskými díly ve smyslu zákona č. 121/2000 Sb., autorský zákon. Autorská práva k nim zůstávají nám.</P>
          <P>Úhradou celé ceny získává objednatel nevýhradní, časově a územně neomezenou licenci k užití výstupů pro vlastní nekomerční potřebu, včetně sdílení na sociálních sítích a na webu školy. Licence zahrnuje právo výstupy rozmnožovat a sdělovat veřejnosti v podobě, v jaké byly předány.</P>
          <P>Objednatel není oprávněn výstupy dále zpracovávat, ořezávat je způsobem měnícím jejich vyznění, odstraňovat z nich naše označení ani je poskytovat třetím osobám k výdělečným účelům bez našeho písemného souhlasu.</P>
          <P>Vyhrazujeme si právo užít výstupy jako referenci - na webu, na sociálních sítích a v propagačních materiálech. Objednatel s tím uzavřením smlouvy souhlasí; nesouhlas nám může kdykoli sdělit na {mailLink} a my materiály stáhneme. Nakládání s podobiznami fyzických osob se řídí {privacyLink}.</P>
          <P>Termín předání výstupů uvádíme v nabídce. Není-li sjednán, předáváme fotografie do 30 dnů a videosestřih do 60 dnů od konání akce. Výstupy archivujeme nejméně 6 měsíců od předání.</P>
        </LegalSection>
        <LegalSection id="reklamace" index={11} title="Reklamace a vady plnění">
          <P>Poskytneme-li plnění vadně, má objednatel právo na odstranění vady, případně na přiměřenou slevu z ceny odpovídající rozsahu vadného plnění.</P>
          <P>Vady vzniklé v průběhu akce vytkněte prosím ihned na místě naší kontaktní osobě - většinu problémů zvládneme vyřešit na místě a bez dopadu na program.</P>
          <P>Vady výstupů uplatněte bez zbytečného odkladu, nejpozději do 30 dnů od jejich předání, e-mailem na {mailLink}. Uveďte popis vady a čeho se týká.</P>
          <P>Reklamaci vyřídíme do 30 dnů od jejího uplatnění; u spotřebitele v této lhůtě reklamaci vyřídíme včetně odstranění vady, nedohodneme-li se na delší lhůtě.</P>
          <P>Rozdíly ve výsledném vzhledu fotografií a videa dané tvůrčím pojetím, světelnými podmínkami v prostoru nebo zvolenou stylizací nejsou vadou plnění.</P>
        </LegalSection>
        <LegalSection id="spotrebitel" index={12} title="Práva spotřebitele">
          <P>Tento článek se uplatní pouze na objednatele, který je spotřebitelem.</P>
          <P>Uzavřeme-li smlouvu distančně, tedy bez současné fyzické přítomnosti obou stran, má spotřebitel právo odstoupit od smlouvy do <strong className="font-bold">14 dnů</strong> ode dne jejího uzavření podle § 1829 občanského zákoníku. Odstoupení stačí poslat e-mailem na {mailLink}.</P>
          <P>Upozorňujeme, že podle § 1837 občanského zákoníku <strong className="font-bold">nelze odstoupit</strong> od smlouvy o využití volného času, pokud ji poskytovatel plní v určeném termínu. Většina našich smluv - tedy zajištění akce ke konkrétnímu datu - do této výjimky spadá.</P>
          <P>Požádá-li spotřebitel, abychom se službou začali už během čtrnáctidenní lhůty, a poté odstoupí, uhradí nám poměrnou část ceny za dosud poskytnuté plnění podle § 1834 občanského zákoníku.</P>
          <P>Před uzavřením smlouvy spotřebiteli vždy sdělíme celkovou cenu, rozsah plnění, termín i dobu trvání závazku. Smlouvu uzavíráme v českém jazyce a archivujeme ji v elektronické podobě.</P>
          <P>Spotřebitel má právo na mimosoudní řešení spotřebitelského sporu. Příslušným subjektem je <strong className="font-bold">Česká obchodní inspekce</strong>, Ústřední inspektorát - oddělení ADR, Gorazdova 1969/24, 120 00 Praha 2, <Button href="https://adr.coi.cz" noStyle={true} hover="hover:text-light-blue active:text-light-blue" className="underline font-bold">adr.coi.cz</Button>. Návrh lze podat nejpozději do jednoho roku ode dne, kdy spotřebitel poprvé uplatnil své právo u nás.</P>
          <P>Dozor nad dodržováním předpisů na ochranu spotřebitele vykonává Česká obchodní inspekce, <Button href="https://www.coi.cz" noStyle={true} hover="hover:text-light-blue active:text-light-blue" className="underline font-bold">www.coi.cz</Button>.</P>
        </LegalSection>
        <LegalSection id="web" index={13} title="Užívání webu">
          <P>Obsah webu - texty, fotografie, grafika, zdrojový kód i logo - je chráněn autorským právem a právy k označení. Bez našeho písemného souhlasu ho nelze kopírovat, upravovat ani šířit nad rámec běžného prohlížení a sdílení odkazu.</P>
          <P>Web poskytujeme &bdquo;tak jak je&ldquo;. Snažíme se o jeho nepřetržitou dostupnost a aktuálnost obsahu, negarantujeme ji však - provoz může být přerušen údržbou nebo příčinami mimo naši kontrolu.</P>
          <P>Uživatel nesmí web zatěžovat automatizovanými požadavky nad běžnou míru, narušovat jeho bezpečnost ani se pokoušet o neoprávněný přístup k jeho částem či datům.</P>
          <P>Odkazy na weby třetích stran uvádíme pro pohodlí uživatelů. Za jejich obsah neodpovídáme.</P>
        </LegalSection>
        <LegalSection id="newsletter" index={14} title="Odběr novinek">
          <P>Zadáním e-mailové adresy do formuláře v patičce webu se přihlásíte k odběru novinek. Odesláním formuláře udělujete souhlas se zasíláním obchodních sdělení.</P>
          <P>Odběr je zdarma a nezavazuje vás k ničemu dalšímu. Odhlásit se můžete kdykoli odkazem v každém e-mailu nebo zprávou na {mailLink}.</P>
          <P>Do formuláře zadávejte pouze vlastní e-mailovou adresu, případně adresu, k jejímuž přihlášení máte souhlas jejího držitele.</P>
          <P>Frekvenci ani obsah zasílaných zpráv negarantujeme a odběr můžeme kdykoli ukončit.</P>
        </LegalSection>
        <LegalSection id="osobni-udaje" index={15} title="Ochrana osobních údajů">
          <P>Osobní údaje zpracováváme v souladu s nařízením (EU) 2016/679 (GDPR). Podrobnosti o tom, jaké údaje zpracováváme, z jakého důvodu, jak dlouho a jaká máte práva, najdete v {privacyLink}.</P>
          <P>Uzavřením smlouvy berete na vědomí, že vaše kontaktní a fakturační údaje zpracováváme za účelem jejího plnění a splnění souvisejících zákonných povinností.</P>
        </LegalSection>
        <LegalSection id="zaver" index={16} title="Závěrečná ustanovení">
          <P>Veškeré právní vztahy se řídí právem České republiky. Je-li objednatel spotřebitelem, nejsou touto volbou dotčena jeho práva vyplývající z obecně závazných předpisů.</P>
          <P>Spory budeme přednostně řešit dohodou. Nepodaří-li se to, rozhodne je věcně a místně příslušný soud České republiky.</P>
          <P>Stane-li se některé ustanovení podmínek neplatným nebo neúčinným, nemá to vliv na platnost ostatních ustanovení. Neplatné ustanovení se nahradí ustanovením, jehož smysl se neplatnému co nejvíce blíží.</P>
          <P>Podmínky můžeme jednostranně měnit. Na již uzavřené smlouvy se vždy použije znění účinné ke dni uzavření smlouvy.</P>
          <P>Toto znění podmínek je účinné od {new Date(siteConfig.legal.updatedAt).toLocaleDateString("cs-CZ", { day: "numeric", month: "numeric", year: "numeric" })}.</P>
        </LegalSection>
      </LegalShell>
    </>
  )
}
export default TermsPage;