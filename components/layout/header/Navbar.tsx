import Link from 'next/link';
import Image from 'next/image';
import type { FC } from 'react';
import { Button, Ul } from '@/components';

type NavbarProps = {
    logo: string,
    button: string,
    classNameNav?: string,
    classNameUl?: string,
    children: React.ReactNode
}
const Navbar: FC<NavbarProps> = ({ logo, button, classNameNav, classNameUl, children }) => {
    return (
        <nav className={classNameNav}>
            <Link href="/"><Image className="img-responsive" src={logo} alt="3kprods - logo" loading="lazy" width={100} height={100}/></Link>
            <Ul type="menu" className={classNameUl}>
                {children}
            </Ul>
            <Button href="#">{button}</Button>
        </nav>
    )
}
export default Navbar;