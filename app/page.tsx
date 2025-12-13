import { H1, H2, H3, H4, P, Ul, Li, Button, Navbar, Badge, InfoCard } from "@/components";
import Image from "next/image";

const Home = () => {
  return (
    <>
      <header className="blur-setup blur-setup--green blur-setup-hero-left blur-setup-hero-right bg-[linear-gradient(46deg,#1C2E55_0%,#243C91_25%,#4461EF_49%,#98A8F7_81%)] laptop:bg-[linear-gradient(86deg,#1C2E55_0%,#243C91_25%,#4461EF_49%,#98A8F7_81%)]">
        <Navbar logo="/images/assets/logo.webp" button="Jdeme na to" className="fixed z-50 left-0 right-0 laptop:left-[50%] laptop:translate-x-[-50%] flex items-center justify-between px-3 py-1 rounded-bl-[3rem] rounded-br-[3rem] bg-white/10 backdrop-blur-[100px] shadow-primary laptop:w-container" href="tel:+420722145257">
          <Li className="laptop:ml-21 mb-0"><Button href="/" noStyle={true} hover="hover:bg-light-blue rounded-[12px] px-6 py-3 active:bg-light-blue transition-all duration-250" className="text-green uppercase font-bold text-body">Domů</Button></Li>
          <Li><Button href="#welcome" noStyle={true} hover="hover:bg-light-blue rounded-[12px] px-6 py-3 active:bg-light-blue transition-all duration-250" className="text-white uppercase font-bold text-body">O nás</Button></Li>
          <Li><Button href="https://www.3kprods.cz/partnership.html" noStyle={true} hover="hover:bg-light-blue rounded-[12px] px-6 py-3 active:bg-light-blue transition-all duration-250" className="text-white uppercase font-bold text-body">Partnerství</Button></Li>
          <Li><Button href="https://www.3kprods.cz/team.html" noStyle={true} hover="hover:bg-light-blue rounded-[12px] px-6 py-3 active:bg-light-blue transition-all duration-250" className="text-white uppercase font-bold text-body">Náš team</Button></Li>
          <Li><Button href="#contact-us" noStyle={true} hover="hover:bg-light-blue rounded-[12px] px-6 py-3 active:bg-light-blue transition-all duration-250" className="text-white uppercase font-bold text-body">Kontakty</Button></Li>
          <Li className="laptop:hidden px-6 laptop:px-0"><Button href="#contact-us" variant="secondary" isArrow={false}>Kontaktuj nás</Button></Li>
        </Navbar>
        <section className="mt-47 stablet:mt-[297px] laptop:mt-[314px] stab mx-6 stablet:mx-auto stablet:w-content desktop:w-xcontent laptop:flex laptop:justify-between" id="welcome">
          <div className="flex flex-col gap-10">
            <header className="flex flex-col gap-10">
              <H1 size="text-title" color="text-white" className="mx-auto relative w-[319.5px] xphone:text-heading xphone:w-[512.5px] stablet:w-[542.5px] after:content[''] after:absolute after:right-0 after:bottom-[-30px] after:bg-blue after:w-[68px] after:h-[200px] xphone:after:w-[120px] xphone:after:h-60 stablet:after:w-[150px] stablet:after:h-[300px] after:rounded-[20px] z-1 after:-z-1 laptop:text-title laptop:w-[319.5px] laptop:after:w-[68px] laptop:after:h-[200px] desktop:text-heading desktop:w-[512.5px] desktop:after:w-[120px] desktop:after:h-60 xdesktop:text-display xdesktop:w-[633.5px] xdesktop:after:w-[150px] xdesktop:after:h-[300px]">Tvůj zážitek. Náše <span className="text-green">práce</span>.</H1>
              <P color="text-white" weight="font-bold" className="z-1 mx-auto max-w-[319.5px] xphone:max-w-[512.5px] laptop:max-w-[320px] stablet:max-w-[542.5px] desktop:max-w-[512.5px] desktop:ml-0">Jsme parta z <strong className="text-green">Liberce</strong> a <strong className="text-green">maturitní plesy</strong> máme v malíku. Zařídíme <strong className="text-green">DJ, moderátora, světla</strong> i <strong className="text-green">výzdobu</strong> - vy jen dorazíte v šatech a oblecích.</P>
            </header>
            <Ul className="mx-auto w-[319.5px] xphone:w-[512.5px] stablet:w-[542.5px] flex flex-col gap-4 xphone:flex-row laptop:w-[319.5px] laptop:flex-col desktop:flex-row desktop:w-auto desktop:ml-0">
              <Li><Button href="tel:+420722145257">Pusťme se do toho</Button></Li>
              <Li><Button href="#contact-us" variant="secondary" isArrow={false}>Kontaktuj nás</Button></Li>
            </Ul>
          </div>
          <Ul className="relative flex gap-4 mx-auto mt-15 mb-[106px] px-6 py-4 w-fit border border-white/40 rounded-[40px] glass laptop:hidden z-1">
            <Li><a aria-label="Instagram" target="_blank" className="text-white text-[28px] bg-dark px-[14.75px] hover:text-dark hover:bg-white active:text-dark active:bg-white transition-all duration-250 py-[10.6px] rounded-full" href="https://www.instagram.com/3kprods/"><i className="fa-brands fa-instagram"></i></a></Li>
            <Li><a aria-label="TikTok" target="_blank" className="text-white text-[28px] bg-dark px-[14.75px] hover:text-dark hover:bg-white active:text-dark active:bg-white transition-all duration-250 py-[10.6px] rounded-full" href="https://www.tiktok.com/@3kprods"><i className="fa-brands fa-tiktok"></i></a></Li>
            <Li><a aria-label="LinkedIn" target="_blank" className="text-white text-[28px] bg-dark px-[14.75px] hover:text-dark hover:bg-white active:text-dark active:bg-white transition-all duration-250 py-[10.6px] rounded-full" href="https://www.linkedin.com/company/3kprods/"><i className="fa-brands fa-linkedin-in"></i></a></Li>
          </Ul>
          <div className="relative tablet:mb-[185px] laptop:flex laptop:items-stretch laptop:-mt-[181px] z-1">
            <article className="relative bg-blue rounded-[40px] px-6 py-20 z-0 desktop:pb-14 laptop:z-10 desktop:px-12 desktop:pt-[92px] laptop:pb-11 laptop:mt-30 laptop:w-[404px] desktop:w-[434px] xdesktop:w-[504px] xdesktop:h-[548px] container-parent">
              <header className="absolute top-0 left-6 right-6 desktop:left-12 desktop:right-9 badge-container badge-container--xdesktop">
                <Badge>Maturák, který si budete pamatovat.</Badge>
              </header>
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-3">
                  <H2 size="text-body" color="text-white">👋 Kdo jsme</H2>
                  <P color="text-white" weight="font-medium">Jsme parta z Liberce, co dělá maturitní plesy bez stresu a s maximální <strong className="text-green font-medium">zábavou</strong>.</P>
                </div>
                <div>
                  <P color="text-green" className="mb-4 uppercase"><strong>Proč si vybrat nás:</strong></P>
                  <Ul className="flex flex-col gap-4">
                    <Li color="text-white" weight="font-bold" className="flex gap-4 items-center uppercase list-none"><i className="fa-solid fa-check bg-light-blue px-[9px] py-2 rounded-full h-min"></i>🎶 DJ a moderátor v ceně</Li>
                    <Li color="text-white" weight="font-bold" className="flex gap-4 items-center uppercase list-none"><i className="fa-solid fa-check bg-light-blue px-[9px] py-2 rounded-full h-fit"></i>💡 Kompletní technika a světla</Li>
                    <Li color="text-white" weight="font-bold" className="flex gap-4 items-center uppercase list-none"><i className="fa-solid fa-check bg-light-blue px-[9px] py-2 rounded-full h-fit"></i>📸 Fotokoutek a profi fotograf</Li>
                  </Ul>
                </div>
              </div>
              <footer className="mt-8">
                <Button href="#contact-us" variant="secondary">Kontaktuj nás</Button>
              </footer>
            </article>
            <figure className="relative mx-auto -my-9 w-[90%] h-[300px] z-10 mb-25 laptop:z-0 laptop:mx-none laptop:my-0 laptop:w-[404px] laptop:h-[505px] laptop:-ml-[152px] desktop:w-[434px] desktop:h-[529px] xdesktop:w-[504px] xdesktop:h-[548px]">
              <Image className="img-responsive rounded-[40px]" src="/images/content/prom-image.webp" alt="3kprods - fotka maturitního plesu" loading="lazy" width={504} height={548}/>
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
              <Button href="tel:+420722145257" variant="secondary">Chci maturák!</Button>
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
                <Button href="https://www.3kprods.cz/" isArrow={false}>Naše projekty</Button>
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
    </>
  )
}
export default Home;