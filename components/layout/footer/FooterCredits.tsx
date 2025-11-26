import { P, Ul, Li, Button, PoweredBy } from "@/components";
import { FC } from "react";

type SocialLink = {
    social: React.ReactNode,
    url: string
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
        <PoweredBy firstName="Bob" lastName="Cermak"/>
        <Ul>
        {socialLinks?.map((item) => (
          <Li key={item.url} className={linksClassName}>
            <Button href={item.url} noStyle={true} className={linksAClassName}>{item.social}</Button>
          </Li>
        ))}
        </Ul>
    </section>
  )
}
export default FooterCredits;