import { H2 } from "@/components";
import { type FC } from "react";

type LegalSectionProps = {
  id: string,
  index: number,
  title: string,
  children: React.ReactNode
}
const LegalSection: FC<LegalSectionProps> = ({ id, index, title, children }) => {
  return (
    <section id={id} className="scroll-mt-32">
      <header className="flex items-baseline gap-4">
        <span className="font-bungee text-light-blue/40 text-body tabular-nums">{String(index).padStart(2, "0")}</span>
        <H2 size="text-sub" color="text-blue" weight="font-extrabold" case={null} className="laptop:text-title">{title}</H2>
      </header>
      <div className="mt-5 flex flex-col gap-4 border-l-2 border-light-blue/15 pl-6 laptop:pl-8">
        {children}
      </div>
    </section>
  )
}
export default LegalSection;