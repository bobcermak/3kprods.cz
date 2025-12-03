import { twMerge } from "tailwind-merge";
import type { FontWeight, Leading, TextColor, TextCase } from "../types";

type LiProps = {
  weight?: FontWeight,
  leading?: Leading,
  color?: TextColor,
  textCase?: TextCase,
  className?: string,
  children: React.ReactNode
}
const Li = ({ weight = "font-semibold", leading = "leading-snug", color = "text-dark", textCase, className = "text-body", children }: LiProps) => {
  const classes: string = twMerge("cursor-pointer", weight, leading, color, textCase, className);
  return <li className={classes}>{children}</li>;
}
export default Li;