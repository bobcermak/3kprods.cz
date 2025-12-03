import { twMerge } from "tailwind-merge";
import { FontFamily, FontStyle, FontWeight, Leading, TextAlign, TextColor, TextCase } from "../types";

type H2Props = {
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
const H2 = ({ family = "font-raleway", style = "not-italic", weight = "font-extrabold", leading = "leading-tight", color = "text-light-blue", align = "text-left", case: textCase = "uppercase", className = "text-title", children }: H2Props) => {
  const classes: string = twMerge(family, style, weight, leading, color, align, textCase, className);
  return <h2 className={classes}>{children}</h2>;
}
export default H2;