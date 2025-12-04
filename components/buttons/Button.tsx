"use client";

import Link from "next/link";
import type { FC, MouseEvent } from "react";

type ButtonProps = {
  isLink?: boolean,
  href?: string,
  variant?: "primary" | "secondary",
  isArrow?: boolean,
  noStyle?: boolean,
  hover?: string,
  type?: "submit" | "reset",
  ariaLabel?: string,
  className?: string,
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void,
  children: React.ReactNode
}
const Button: FC<ButtonProps> = ({ isLink = true, href = "#", variant = "primary", isArrow = true, noStyle = false, hover = "", type, ariaLabel, className, onClick, children }) => {
  const baseStyles: string = `relative overflow-hidden inline-block pl-6 ${isArrow ? "pr-3" : "pr-6"} py-3 no-underline rounded-[2.5rem] text-body font-bold text-center uppercase cursor-pointer w-fit h-fit backdrop-blur-xl backdrop-saturate-150 border border-white/20 duration-250 ease-in-out ${isArrow ? "group hover:shadow-[0_0_25px_rgba(0,0,0,0.25)]" : ""} after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-r after:from-transparent after:via-white/40 after:to-transparent after:-translate-x-full after:opacity-0 after:duration-500 after:ease-out hover:after:opacity-100 hover:after:translate-x-full active:after:opacity-100 active:after:translate-x-full`;
  const variantStyles: Record<"primary" | "secondary", string> = {
    primary: `bg-light-blue/50 text-white hover:bg-light-blue/70 active:bg-light-blue/70`,
    secondary: `bg-green/50 text-blue hover:bg-green/80 active:bg-green/80`
  };
  const combinedClasses: string = !noStyle ? `${baseStyles} ${variantStyles[variant]} ${className}` : `${className} ${hover} cursor-pointer duration-250 ease-in-out`;
  const external: boolean = href ? href.startsWith("http") : false;
  const arrow = isArrow && !noStyle ? (
    <i className={`fa-solid fa-arrow-right ml-2.5 rounded-full transition-transform duration-250 ease-in-out group-hover:translate-x-0.5 group-active:translate-x-0.5 ${variant === "primary" ? "text-white bg-light-blue" : "text-blue bg-green"} py-1.5 px-1.75`}></i>
  ) : null;
  if (!isLink) return <button className={combinedClasses} type={type} onClick={onClick} aria-label={ariaLabel}>{children}{arrow}</button>;
  return external ? (
    <a className={combinedClasses} href={href} target="_blank" rel="noopener noreferrer" aria-label={ariaLabel}>{children}{arrow}</a>
  ) : (
    <Link className={combinedClasses} href={href} aria-label={ariaLabel}>{children}{arrow}</Link>
  );
}
export default Button;