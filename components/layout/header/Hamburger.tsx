import { Button } from '@/components';
import { FC } from 'react';

type HamburgerProps = {
  isOpen: boolean,
  onToggle: (value: boolean) => void
}
const Hamburger: FC<HamburgerProps> = ({ isOpen, onToggle }) => {
  return (
    <Button onClick={() => { onToggle(!isOpen); }} isLink={false} noStyle={true} className="bg-light-blue/50 rounded-full relative inline-block min-w-[52px] h-[52px] cursor-pointer overflow-hidden laptop:hidden" aria-label="Otevřít menu">
      <span className={`absolute h-1 bg-white rounded-2xl right-2.5 w-8 transition-all ease-in-out ${isOpen ? "top-[24px]" : "top-[15px]"}`} style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)", transition: isOpen ? "top 150ms ease-in-out, transform 150ms ease-in-out 250ms" : "top 150ms ease-in-out 250ms, transform 150ms ease-in-out"}}></span>
      <span className={`absolute h-1 bg-white rounded-2xl right-2.5 top-6 w-6 transition-all ease-in-out delay-150 ${isOpen ? "opacity-0" : "opacity-100"}`}></span>
      <span className={`absolute h-1 bg-white rounded-2xl right-2.5 w-8 transition-all ease-in-out ${isOpen ? "top-[24px]" : "top-[33px]"}`} style={{ transform: isOpen ? "rotate(-45deg)" : "rotate(0deg)", transition: isOpen ? "top 150ms ease-in-out, transform 150ms ease-in-out 250ms" : "top 150ms ease-in-out 250ms, transform 150ms ease-in-out"}}></span>
    </Button>
  )
}
export default Hamburger;