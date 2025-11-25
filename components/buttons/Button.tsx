"use client";

import Link from "next/link";
import type { FC, MouseEvent } from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = {
  isLink?: boolean;
  link?: string;
  variant?: "primary" | "secondary";
  isArrow?: boolean;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
}
const Button: FC<ButtonProps> = ({ isLink = true, link = "#", variant = "primary", isArrow = true, onClick, children }) => {
  const baseStyles: string = `inline-block pl-6 ${isArrow ? "pr-3" : "pr-6"} py-3 no-underline rounded-[2.5rem] text-body font-bold text-center uppercase cursor-pointer w-fit backdrop-blur-xl backdrop-saturate-150 border border-white/20 transition-colors duration-250 ease-in-out ${isArrow ? "group" : ""}`;
  const variantStyles: Record<"primary" | "secondary", string> = {
    primary: `bg-[#4461EF]/50 text-white hover:bg-[#4461EF]/70`,
    secondary: `bg-[#C7EFB3]/50 text-blue hover:bg-[#C7EFB3]/80`
  };
  const combinedClasses: string = twMerge(baseStyles, variantStyles[variant]);
  const external: boolean = link ? link.startsWith("http") : false;
  const arrow = isArrow ? (
    <i className={`fa-solid fa-arrow-right ml-2.5 rounded-full transition-transform duration-250 ease-in-out group-hover:translate-x-0.5 ${variant === "primary" ? "text-white bg-light-blue" : "text-blue bg-green"} py-1.5 px-1.75`}></i>
  ) : null;
  if (!isLink) return <button className={combinedClasses} onClick={onClick}>{children}{arrow}</button>;
  return external ? (
    <a className={combinedClasses} href={link} target="_blank" rel="noopener noreferrer">{children}{arrow}</a>
  ) : (
    <Link className={combinedClasses} href={link}>{children}{arrow}</Link>
  );
}
export default Button;