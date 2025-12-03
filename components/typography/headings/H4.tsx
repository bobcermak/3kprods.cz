import { twMerge } from "tailwind-merge";
import { FontFamily, FontStyle, FontWeight, Leading, TextAlign, TextColor, TextCase } from "../types";

type H4Props = {
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
const H4 = ({ family = "font-raleway", style = "not-italic", weight = "font-semibold", leading = "leading-tight", color = "text-dark", align = "text-left", case: textCase, className = "text-sub", children }: H4Props) => {
  const classes: string = twMerge(family, style, weight, leading, color, align, textCase, className);
  return <h4 className={classes}>{children}</h4>;
}
export default H4;