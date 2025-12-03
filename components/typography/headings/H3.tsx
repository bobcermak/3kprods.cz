import { twMerge } from "tailwind-merge";
import { FontFamily, FontStyle, FontWeight, Leading, TextAlign, TextColor, TextCase } from "../types";

type H3Props = {
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
const H3 = ({ family = "font-raleway", style = "not-italic", weight = "font-bold", leading = "leading-tight", color = "text-dark", align = "text-left", case: textCase, className = "text-sub", children }: H3Props) => {
  const classes: string = twMerge(family, style, weight, leading, color, align, textCase, className);
  return <h3 className={classes}>{children}</h3>;
}
export default H3;