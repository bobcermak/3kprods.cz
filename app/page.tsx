import { Navbar, Li, H1, P, Ul, Button, Badge, H2, H3, InfoCard, H4 } from "@/components";
import Link from "next/link";
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
                <Image className="img-responsive" src="/images/content/prom-image.webp" alt="3kprods - maturitního plesu" loading="lazy" width={504} height={548}/>
              </figure>
          </div>
        </section>
      </header>
      <main>
        <section id="services">
          <div>
            <header>
              <H2>Co vše zařídíme?</H2>
              <H3>Všechno pro vaši <strong>akci</strong> - od světel až po poslední <strong>sousto</strong>!</H3>
            </header>
            <div>
              <P>Pro vaše akce dokážeme zpracovat grafiku, připravit dekorace nebo vytisknout všechny potřebné tiskoviny.</P>
              <Ul>
                <Li><i className="fa-regular fa-user"></i>Děláme maturáky jinak - bez kompromisů, bez nudy.</Li>
                <Li><i className="fa-solid fa-handshake-angle"></i>Každou práci dotáhneme do konce.</Li>
              </Ul>
            </div>
            <div>
              <Ul>
                <Li><InfoCard icon={<i className="fa-solid fa-compact-disc"></i>} title="DJ">DJ? Máme ho v kapse</InfoCard></Li>
                <Li><InfoCard icon={<i className="fa-solid fa-bolt"></i>} title="Osvětlení">Světla, co váš ples rozzáří</InfoCard></Li>
                <Li><InfoCard icon={<i className="fa-solid fa-camera"></i>} title="Fotograf">Selfie i skupiny - máme je</InfoCard></Li>
              </Ul>
              <Button link="#" variant="secondary">Chci maturák!</Button>
            </div>
          </div>
          <div>
            <article>
              <header>
                <Image className="svg-responsive" src="/images/vectors/triangle.svg" alt="3kprods - odkaz na video" loading="lazy" width={16} height={16} />
              </header>
              <div>
                <P>Na co jsme machři a co dávno zvládáme levou <b>zadní</b>!</P>
              </div>
              <footer>
                <Button link="#" isArrow={false}>Naše projekty</Button>
              </footer>
            </article>
            <figure className="slaptop:hidden">
              <Image className="img-responsive" src="/images/content/moderator-mobile-image.webp" alt="3kprods - fotka moderátora" loading="lazy" width={312} height={375} />
            </figure>
            <figure className="hidden slaptop:block">
              <Image className="img-responsive" src="/images/content/moderator-image.webp" alt="3kprods - fotka moderátora" loading="lazy" width={600} height={720} />
            </figure>
          </div>
        </section>
        <div id="stats">
          <Ul>
            <Li>
              <P>100+</P>
              <div>
                <i className="fa-solid fa-trophy"></i>
                <H4>Uspořádaných maturáků</H4>
              </div>
            </Li>
            <Li>
              <P>20<span className="phone:hidden">K</span><span className="hidden phone:inline"> 000</span>+</P>
              <div>
                <i className="fa-solid fa-camera"></i>
                <H4>Fotek a videí</H4>
              </div>
            </Li>
            <Li>
              <P>10+</P>
              <div>
                <i className="fa-solid fa-school"></i>
                <H4>let zkušeností</H4>
              </div>
            </Li>
          </Ul>
        </div>
        <section id="reviews">
          <div>
            <header>
              <H2>Co se o nás povída?</H2>
              <H3><strong>Maturanti</strong> o nás mluví jasně — s námi byl jejich <strong>večer výjimečný</strong>!</H3>
            </header>
            <div>
              {/*Carousel*/}
            </div>
          </div>
          <figure>
            <Badge>Pojď do toho s námi !</Badge>
            <Image className="img-responsive" src="/images/content/couple-image.webp" alt="3kprods - fotka z maturitního plesu" loading="lazy" width={668} height={720} />
          </figure>
        </section>
      </main>
      <footer>
        <section>
          <div>
            <header>
              <H2>Jednoduše nám <span>napište</span> nebo <span>zavolejte</span>.</H2>
            </header>
            <div>
              <Ul>
                <Li>
                  <i className="fa-solid fa-phone"></i>
                  <div>
                    <Button link="tel:+420722145257" noStyle={true}>+420 722 145 257</Button>
                    <Button link="tel:+420739145788" noStyle={true}>+420 739 145 788</Button>
                  </div>
                </Li>
                <Li>
                  <i className="fa-solid fa-envelope"></i>
                  <Button link="mailto:info@3kprods.cz" noStyle={true}>info@3kprods.cz</Button>
                </Li>
                <Li>
                  <i className="fa-solid fa-location-dot"></i>
                  <Button link="https://maps.app.goo.gl/Z6ivpNXnn94nXLeP7" noStyle={true}>Liberec, Liberecký kraj, Česká Republika</Button>
                </Li>
              </Ul>
            </div>
          </div>
          <div>
            <div>
              <Link href="/"><Image className="img-responsive" src="/images/assets/logo.webp" alt="3kprods - logo" loading="lazy" width={100} height={100}/></Link>
              <H3>Rychle a efektivně na eventy a marketing!</H3>
            </div>
            <div>
              <P>Nenechte si nic ujít! Přihlaste se k našemu <span>newsletteru</span> a buďte vždy o krok napřed.</P>
            </div>
          </div>
        </section>
        <section>

        </section>
      </footer>
    </>
  )
}
export default Home;