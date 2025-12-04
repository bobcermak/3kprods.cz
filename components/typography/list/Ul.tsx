"use client";

import { UlType } from "../types";

type UlProps = {
  type?: UlType,
  gap?: string,
  className?: string,
  onClick?: () => void,
  children: React.ReactNode
}
const Ul = ({ type = "list-disc", gap = "space-y-1", className, onClick, children }: UlProps) => {
  const Tag: "ol" | "ul" | "menu" = type === "list-decimal" ? "ol" : type === "menu" ? "menu" : "ul";
  const classes: string = [type !== "menu" ? type : "", gap, className].join(" ");
  return <Tag className={classes} onClick={onClick}>{children}</Tag>;
}
export default Ul;