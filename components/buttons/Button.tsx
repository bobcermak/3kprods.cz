"use client";

import Link from "next/link";
import type { FC, MouseEvent } from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = {
  isLink?: boolean,
  href?: string,
  variant?: "primary" | "secondary",
  isArrow?: boolean,
  noStyle?: boolean,
  hover?: string,
  type?: "submit" | "reset",
  className?: string,
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void,
  children: React.ReactNode
}
const Button: FC<ButtonProps> = ({ isLink = true, href = "#", variant = "primary", isArrow = true, noStyle = false, hover = "", type, onClick, className, children }) => {
  const baseStyles: string = `inline-block pl-6 ${isArrow ? "pr-3" : "pr-6"} py-3 no-underline rounded-[2.5rem] text-body font-bold text-center uppercase cursor-pointer w-fit backdrop-blur-xl backdrop-saturate-150 border border-white/20 duration-250 ease-in-out ${isArrow ? "group hover:shadow-[0_0_25px_rgba(0,0,0,0.25)]" : ""}`;
  const variantStyles: Record<"primary" | "secondary", string> = {
    primary: `bg-[#4461EF]/50 text-white hover:bg-[#4461EF]/70`,
    secondary: `bg-[#C7EFB3]/50 text-blue hover:bg-[#C7EFB3]/80`
  };
  const combinedClasses: string = !noStyle ? twMerge(baseStyles, variantStyles[variant], className) : `${className} hover:${hover} duration-250 ease-in-out`;
  const external: boolean = href ? href.startsWith("http") : false;
  const arrow = isArrow && !noStyle ? (
    <i className={`fa-solid fa-arrow-right ml-2.5 rounded-full transition-transform duration-250 ease-in-out group-hover:translate-x-0.5 ${variant === "primary" ? "text-white bg-light-blue" : "text-blue bg-green"} py-1.5 px-1.75`}></i>
  ) : null;
  if (!isLink) return <button className={combinedClasses} type={type} onClick={onClick}>{children}{arrow}</button>;
  return external ? (
    <a className={combinedClasses} href={href} target="_blank" rel="noopener noreferrer">{children}{arrow}</a>
  ) : (
    <Link className={combinedClasses} href={href}>{children}{arrow}</Link>
  );
}
export default Button;