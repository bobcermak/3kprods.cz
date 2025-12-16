import { P, Ul, Li, Button, PoweredBy } from "@/components";
import { type FC } from "react";

type SocialLink = {
    social: React.ReactNode,
    url: string,
    ariaLabel: string
}
type FooterCreditsProps = {
    year: number,
    companyName: string,
    socialLinks?: SocialLink[],
    className?: string,
    linksClassName?: string,
    linksAClassName?: string
}
const FooterCredits: FC<FooterCreditsProps> = ({ year, companyName, socialLinks, className, linksClassName, linksAClassName }) => {
  return (
    <section className={className}>
        <P>&copy; {year} {companyName} - Všechna práva vyhrazena</P>
        <PoweredBy firstName="Bob" lastName="Cermak" link="https://www.linkedin.com/in/bohuslav-%C4%8Derm%C3%A1k-0020ba376/"/>
        <Ul>
        {socialLinks?.map((item) => (
          <Li key={item.url} className={linksClassName}>
            <Button href={item.url} noStyle={true} className={linksAClassName} ariaLabel={item.ariaLabel}>{item.social}</Button>
          </Li>
        ))}
        </Ul>
    </section>
  )
}
export default FooterCredits;