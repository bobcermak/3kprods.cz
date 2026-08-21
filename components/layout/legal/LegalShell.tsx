import { H1, H3, P, Ul, Li, Button } from "@/components";
import { formatDate } from "@/lib/config/site";
import { type FC } from "react";

export type LegalSectionLink = {
  id: string,
  title: string
}
type LegalShellProps = {
  badge?: string,
  title: React.ReactNode,
  perex: React.ReactNode,
  updatedAt: string,
  sections: LegalSectionLink[],
  children: React.ReactNode
}
const LegalShell: FC<LegalShellProps> = ({ badge, title, perex, updatedAt, sections, children }) => {
  return (
    <main>
      <section className="relative blur-setup blur-setup--green blur-setup-hero-left blur-setup-hero-right bg-[linear-gradient(46deg,#1C2E55_0%,#243C91_25%,#4461EF_49%,#98A8F7_81%)] laptop:bg-[linear-gradient(86deg,#1C2E55_0%,#243C91_25%,#4461EF_49%,#98A8F7_81%)]">
        <div className="relative z-1 mx-auto w-xcontent laptop:w-content pt-45 pb-20 laptop:pt-[260px] laptop:pb-25">
          <nav aria-label="Drobečková navigace" className="mb-8">
            <Ul type="list-none" className="flex flex-wrap items-center gap-2">
              <Li className="list-none"><Button href="/" noStyle={true} hover="hover:text-green active:text-green" className="text-white/60 text-sm font-semibold">Domů</Button></Li>
              <Li className="list-none text-white/40 text-sm" aria-hidden="true">/</Li>
              <Li className="list-none text-green text-sm font-semibold cursor-default!">{badge ?? "Dokument"}</Li>
            </Ul>
          </nav>
          <div className="max-w-[940px]">
            <H1 size="text-title" color="text-white" className="laptop:text-heading">{title}</H1>
            <P color="text-white" weight="font-medium" className="mt-6 max-w-[720px] opacity-90">{perex}</P>
          </div>
          <div className="mt-10 w-fit px-5 py-3 rounded-[40px] bg-white/10 backdrop-blur-sm border border-white/40">
            <P size="text-sm" color="text-white" weight="font-semibold" className="m-0">Poslední aktualizace: <time dateTime={updatedAt}>{formatDate(updatedAt)}</time></P>
          </div>
        </div>
      </section>
      <div className="mx-auto w-xcontent laptop:w-content py-20 laptop:py-25 laptop:flex laptop:items-start laptop:gap-16">
        <aside className="laptop:sticky laptop:top-32 laptop:basis-[300px] laptop:shrink-0 mb-12 laptop:mb-0">
          <div className="bg-dark-white rounded-[20px] inner-shadow-primary px-6 py-8">
            <H3 size="text-body" weight="font-extrabold" color="text-light-blue">Obsah dokumentu</H3>
            <Ul type="list-none" className="mt-5 flex flex-col gap-3">
              {sections.map((section, index) => (
                <Li key={section.id} className="list-none">
                  <a href={`#${section.id}`} className="flex gap-3 text-sm font-semibold text-dark/70 hover:text-light-blue active:text-light-blue transition-colors duration-250">
                    <span className="text-light-blue/60 tabular-nums">{String(index + 1).padStart(2, "0")}</span>
                    <span>{section.title}</span>
                  </a>
                </Li>
              ))}
            </Ul>
          </div>
        </aside>
        <article className="laptop:basis-full laptop:min-w-0 max-w-[900px] flex flex-col gap-14">
          {children}
        </article>
      </div>
    </main>
  )
}
export default LegalShell;