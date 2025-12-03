import { twMerge } from "tailwind-merge";
import { FontFamily, FontStyle, FontWeight, Leading, TextAlign, TextColor, TextCase } from "../types";

type H1Props = {
  family?: FontFamily,
  style?: FontStyle,
  weight?: FontWeight,
  leading?: Leading,
  align?: TextAlign,
  color?: TextColor,
  case?: TextCase,
  className?: string,
  children: React.ReactNode
}
const H1 = ({ family = "font-bungee", style = "not-italic", weight = "font-normal", leading = "leading-tight", color = "text-dark", align = "text-left", case: textCase = "uppercase", className = "text-heading", children }: H1Props) => {
  const classes: string = twMerge(family, style, weight, leading, color, align, textCase, className);
  return <h1 className={classes}>{children}</h1>;
}
export default H1;