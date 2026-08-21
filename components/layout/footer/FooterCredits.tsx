import { P, Ul, Li, Button, PoweredBy } from "@/components";
import { type FC } from "react";

type SocialLink = {
  social: React.ReactNode,
  url: string,
  ariaLabel: string
}
type LegalLink = {
  label: string,
  href: string
}
type FooterCreditsProps = {
  year: number,
  companyName: string,
  socialLinks?: SocialLink[],
  legalLinks?: LegalLink[],
  className?: string,
  rowClassName?: string,
  linksClassName?: string,
  linksAClassName?: string
}
const FooterCredits: FC<FooterCreditsProps> = ({ year, companyName, socialLinks, legalLinks, className, rowClassName, linksClassName, linksAClassName }) => {
  const currentYear = new Date().getFullYear();
  return (
    <section className={className}>
      {legalLinks?.length ? (
        <nav aria-label="Právní dokumenty" className="mb-8 slaptop:mb-10">
          <Ul type="list-none" className="flex flex-wrap gap-x-8 gap-y-3">
            {legalLinks.map((link) => (
              <Li key={link.href} className="list-none">
                <Button href={link.href} noStyle={true} hover="hover:text-green active:text-green transition-colors duration-250" className="text-white/60 font-medium no-underline">{link.label}</Button>
              </Li>
            ))}
          </Ul>
        </nav>
      ) : null}
      <div className={rowClassName}>
        <P weight="font-medium" className="order-1 text-white/60 slaptop:order-0">&copy; {year} - {currentYear} {companyName} - Všechna práva vyhrazena</P>
        <PoweredBy firstName="Bob" lastName="Cermak" link="https://bobcermak.cz"/>
        <Ul className="flex gap-4 slaptop:gap-4">
          {socialLinks?.map((item) => (
            <Li key={item.url} className={linksClassName}>
              <Button href={item.url} noStyle={true} className={linksAClassName} ariaLabel={item.ariaLabel}>{item.social}</Button>
            </Li>
          ))}
        </Ul>
      </div>
    </section>
  )
}
export default FooterCredits;