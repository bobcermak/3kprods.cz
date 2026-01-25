import { H1, H2, P, Button } from "@/components";

const NotFoundPage = () => {
  return (
    <div className="desktop:min-h-full py-60 flex items-center justify-center bg-gray-300">
      <div className="w-full text-center flex flex-col items-center justify-center">
        <div className="mb-4">
            <H1 className="text-center" color="text-light-blue" size="text-title">404</H1>
        </div>
        <div className="mb-8 flex flex-col items-center justify-center">
          <H2 size="text-title" color="text-blue" weight="font-bold" align="text-center" className="mb-4">Stránka nenalezena</H2>
          <P align="text-center" className="text-gray-600 text-sub mb-2"> Vypadá to, že jsi se zaběhl na špatné místo.</P>
          <P align="text-center" className="text-gray-500">Stránka, kterou hledáš, neexistuje nebo byla přesunuta.</P>
        </div>
        <div>
          <Button href="/">Zpět na úvodní stránku</Button>
        </div>
      </div>
    </div>
  );
}
export default NotFoundPage;