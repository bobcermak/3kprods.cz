import Image from 'next/image';
import { H1, H2, H3, H4, P, Ul, Li, Button } from '@/components';

const Home = () => {
  return (
    <>
      {/* <header></header> */}
      <main className='bg-light-blue'>
        <H1>Welcome to 3kprods.cz</H1>
        <Image src="/images/content/couple-image.webp" alt="Ukázkový obrázek" width={800} height={600} sizes="(max-width: 768px) 100vw, 50vw"/>
        <Image src="/images/content/prom-image.webp" alt="Ukázkový obrázek" width={800} height={600} sizes="(max-width: 768px) 100vw, 50vw"/>
      </main>
      {/* <footer></footer> */}
    </>
  )
}
export default Home;