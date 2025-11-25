import { twMerge } from "tailwind-merge";
import { FontFamily, FontStyle, TextSize, FontWeight, Leading, TextAlign, TextColor, TextCase } from "../types";

type H2Props = {
  family?: FontFamily,
  style?: FontStyle,
  size?: TextSize,
  weight?: FontWeight,
  leading?: Leading,
  align?: TextAlign,
  color?: TextColor,
  case?: TextCase,
  className?: string,
  children: React.ReactNode
}
const H2 = ({ family = "font-raleway", style = "not-italic", size = "text-title", weight = "font-extrabold", leading = "leading-tight", color = "text-light-blue", align = "text-left", case: textCase = "uppercase", className, children }: H2Props) => {
  const classes: string = twMerge(family, style, size, weight, leading, color, align, textCase, className);
  return <h2 className={classes}>{children}</h2>;
}
export default H2;