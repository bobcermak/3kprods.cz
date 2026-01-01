import { H1, H2, H3, H4, P, Ul, Li, Button, Badge, InfoCard, ExpertiseCard } from "@/components";
import Image from "next/image";

const HomePage = () => {
  return (
    <>
      <main>
        <section className="blur-setup blur-setup--green blur-setup-hero-left blur-setup-hero-right bg-[linear-gradient(46deg,#1C2E55_0%,#243C91_25%,#4461EF_49%,#98A8F7_81%)] laptop:bg-[linear-gradient(86deg,#1C2E55_0%,#243C91_25%,#4461EF_49%,#98A8F7_81%)]" id="welcome">
          <div className="mt-47 stablet:mt-[297px] laptop:mt-[314px] mx-auto w-xcontent laptop:flex laptop:justify-between">
            <div className="flex flex-col gap-10">
              <header className="flex flex-col gap-10">
                <H1 size="text-title" color="text-white" className="mx-auto relative w-[319.5px] xphone:text-heading xphone:w-[512.5px] stablet:w-[542.5px] after:content[''] after:absolute after:right-0 after:bottom-[-30px] after:bg-blue after:w-[68px] after:h-[200px] xphone:after:w-[120px] xphone:after:h-60 stablet:after:w-[150px] stablet:after:h-[300px] after:rounded-[20px] z-1 after:-z-1 laptop:text-title laptop:w-[319.5px] laptop:after:w-[68px] laptop:after:h-[200px] desktop:text-heading desktop:w-[512.5px] desktop:after:w-[120px] desktop:after:h-60 xdesktop:text-display xdesktop:w-[633.5px] xdesktop:after:w-[150px] xdesktop:after:h-[300px]">Tvůj zážitek. Náše <span className="text-green">práce</span>.</H1>
                <P color="text-white" weight="font-bold" className="z-1 mx-auto max-w-[319.5px] xphone:max-w-[512.5px] laptop:max-w-[320px] stablet:max-w-[542.5px] desktop:max-w-[512.5px] desktop:ml-0">Jsme parta z <strong className="text-green font-bold">Liberce</strong> a <strong className="text-green font-bold">maturitní plesy</strong> máme v malíku. Zařídíme <strong className="text-green font-bold">DJ, moderátora, světla</strong> i <strong className="text-green font-bold">výzdobu</strong> - vy jen dorazíte v šatech a oblecích.</P>
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
                    <P color="text-green" className="mb-4 uppercase"><strong className="font-bold">Proč si vybrat nás:</strong></P>
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
          </div>
        </section>
        <section className="blur-setup blur-setup--blue blur-setup-services-left blur-setup-services-right bg-[url('/images/vectors/services-bg-mobile-image.svg')] bg-cover bg-center bg-no-repeat py-25" id="services">
          <div className="mx-auto w-xcontent flex flex-col gap-20 slaptop:flex-row slaptop:items-center laptop:justify-between xdesktop:w-content xldesktop:justify-center xldesktop:gap-24 relative desktop:before:content-[''] desktop:before:-bottom-25 desktop:before:-left-30 desktop:before:z-10 desktop:before:w-50 desktop:before:h-51 desktop:before:absolute desktop:before:bg-[url('/images/vectors/shape.svg')] desktop:before:bg-no-repeat desktop:before:bg-contain desktop:before:pointer-events-none desktop:after:content-[''] desktop:after:w-50 desktop:after:h-51 desktop:after:z-10 desktop:after:absolute desktop:after:bg-[url('/images/vectors/shape.svg')] desktop:after:bg-no-repeat desktop:after:bg-contain desktop:after:pointer-events-none desktop:after:-top-18 desktop:after:-right-38 desktop:after:-rotate-90">
            <div className="slaptop:order-1 slaptop:basis-3/5 laptop:basis-1/2">
              <header className="relative z-1">
                <H2 weight="font-medium">Co vše zařídíme?</H2>
                <H3 size="text-title" weight="font-extrabold" case="lowercase" className="laptop:text-heading mt-4 z-10"><span className="uppercase">V</span>šechno pro vaši <strong className="font-extrabold text-light-blue">akci</strong> - od světel až po poslední <strong className="font-extrabold text-light-blue">sousto</strong>!</H3>
              </header>
              <div className="mt-4">
                <P className="text-dark/60">Pro vaše akce dokážeme zpracovat grafiku, připravit dekorace nebo vytisknout všechny potřebné tiskoviny.</P>
                <Ul className="mt-15 slaptop:mt-10 flex flex-col gap-6 slaptop:gap-4 border-b pb-15 slaptop:pb-10 mb-15 slaptop:mb-10 laptop:flex-row laptop:gap-6">
                  <Li className="flex gap-6 items-center laptop:basis-1/2 laptop:grow"><i className="fa-regular fa-user text-[2rem] bg-light-blue text-white px-4 py-3.5 rounded-full"></i>Děláme maturáky jinak - bez kompromisů, bez nudy.</Li>
                  <Li className="flex gap-6 items-center laptop:basis-1/2 laptop:grow"><i className="fa-solid fa-handshake-angle text-[1.75rem] bg-light-blue text-white px-[12.5px] py-4 rounded-full"></i>Každou práci dotáhneme do konce.</Li>
                </Ul>
              </div>
              <div>
                <Ul className="grid gap-y-8 slaptop:flex slaptop:flex-wrap slaptop:gap-4 desktop:gap-8 slaptop:max-w-none stablet:max-w-[440px] mx-auto">
                  <Li className="grow desktop:basis-[30%] list-none"><InfoCard icon={<i className="fa-solid fa-compact-disc text-sub text-light-blue"></i>} title="DJ">DJ? Máme ho v kapse</InfoCard></Li>
                  <Li className="grow desktop:basis-[30%] justify-self-end list-none"><InfoCard icon={<i className="fa-solid fa-bolt text-sub text-light-blue"></i>} title="Osvětlení">Světla, co váš ples rozzáří</InfoCard></Li>
                  <Li className="grow desktop:basis-[30%] list-none"><InfoCard icon={<i className="fa-solid fa-camera text-sub text-light-blue"></i>} title="Fotograf">Selfie i skupiny - máme je</InfoCard></Li>
                </Ul>
                <Button className="mt-10" href="tel:+420722145257" variant="secondary">Chci maturák!</Button>
              </div>
            </div>
            <div className="flex flex-col gap-15 stablet:relative stablet:block slaptop:flex slaptop:flex-col slaptop:gap-0 relative z-1 before:content-[''] before:-top-12 before:left-50 xphone:before:left-100 stablet:before:left-120 slaptop:before:hidden before:z-10 before:-rotate-90 before:w-25 before:h-26 before:absolute before:bg-[url('/images/vectors/shape.svg')] before:bg-no-repeat before:bg-contain before:pointer-events-none">
              <ExpertiseCard className="stablet:absolute slaptop:static slaptop:-mt-10 slaptop:-ml-10 laptop:ml-10 stablet:max-w-[340px] -left-6 top-24 desktop:absolute desktop:top-40 desktop:-left-30 xdesktop:top-32 xdesktop:-left-40 xxldesktop:top-20 xxldesktop:-left-60" content={<>Na co jsme machři a co dávno zvládáme levou <b className="font-bold text-light-blue">zadní</b>!</>} arrowHref="https://www.youtube.com/@3KProds/videos" buttonContent="Naše projekty" buttonHref="https://www.3kprods.cz/"/>
              <figure className="slaptop:hidden w-[312px] h-[375px] mx-auto stablet:w-[540px] tablet:w-[600px] stablet:h-auto stablet:mr-0">
                <Image className="img-responsive" src="/images/content/moderator-mobile-image.webp" alt="3kprods - fotka moderátora" loading="lazy" width={312} height={375} />
              </figure>
              <figure className="hidden slaptop:block slaptop:-order-1 laptop:w-[500px] desktop:w-[600px] laptop:h-auto">
                <Image className="img-responsive" src="/images/content/moderator-image.webp" alt="3kprods - fotka moderátora" loading="lazy" width={600} height={720} />
              </figure>
            </div>
          </div>
        </section>
        <div className="mx-auto w-xcontent" id="stats">
          <Ul className="my-25 px-15 py-20 bg-light-blue/60 rounded-[60px] slaptop:rounded-[80px]">
            <Li>
              <P family="font-bungee" weight="font-medium" color="text-white" size="text-heading" className="relative after:absolute after:content-[''] after:bottom-0 after:left-0 after:w-[140px] after:h-0.5 after:bg-white">100+</P>
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
export default HomePage;