import { Navbar, Li, H1, P, Ul, Button, Badge, H2, H3 } from "@/components";
import Image from "next/image";

const Home = () => {
  return (
    <>
      <header>
        <Navbar logo="/images/assets/logo.webp" button="Jdeme na to">
          <Li>Domů</Li>
          <Li>O nás</Li>
          <Li>Partnerství</Li>
          <Li>Náš team</Li>
          <Li>Kontakty</Li>
        </Navbar>
        <section id="welcome">
          <div>
            <header>
              <H1>Tvůj zážitek. Náše <span>práce</span>.</H1>
              <P>Jsme parta z <strong>Liberce</strong> a <strong>maturitní plesy</strong> máme v malíku. Zařídíme <strong>DJ, moderátora, světla</strong> i <strong>výzdobu</strong> - vy jen dorazíte v šatech a oblecích.</P>
            </header>
            <Ul>
              <Li><Button link="#">Pusťme se do toho</Button></Li>
              <Li><Button link="#" variant="secondary" isArrow={false}>Kontaktuj nás</Button></Li>
            </Ul>
          </div>
          <Ul>
            <Li><i className="fa-brands fa-instagram"></i></Li>
            <Li><i className="fa-brands fa-facebook"></i></Li>
            <Li><i className="fa-brands fa-tiktok"></i></Li>
            <Li><i className="fa-brands fa-linkedin-in"></i></Li>
          </Ul>
          <div>
            <article>
              <header>
                <Badge>Maturák, který si budete pamatovat.</Badge>
              </header>
              <div>
                <div>
                  <H2>👋 Kdo jsme</H2>
                  <P>Jsme parta z Liberce, co dělá maturitní plesy bez stresu a s maximální <strong>zábavou</strong>.</P>
                </div>
                <div>
                  <P><strong>Proč si vybrat nás:</strong></P>
                  <Ul>
                    <Li>🎶 DJ a moderátor v ceně</Li>
                    <Li>💡 Kompletní technika a světla</Li>
                    <Li>📸 Fotokoutek a profi fotograf</Li>
                  </Ul>
                </div>
              </div>
              <footer>
                <Button link="#" variant="secondary">Kontaktuj nás</Button>
              </footer>
            </article>
              <figure>
                <Image className="img-responsive" src="/images/content/prom-image.webp" alt="3kprods - maturák" loading="lazy" width={504} height={548}/>
            </figure>
          </div>
        </section>
      </header>
      <main>
        <header>
          <H2>Co vše zařídíme?</H2>
          <H3>Všechno pro vaši <span>akci</span> - od světel až po poslední <span>sousto</span>!</H3>
        </header>
      </main>
      {/* <footer>

      </footer> */}
    </>
  )
}
export default Home;