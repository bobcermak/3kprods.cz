import { twMerge } from "tailwind-merge";
import { FontFamily, FontStyle, TextSize, FontWeight, Leading, TextAlign, TextColor, TextCase } from "../types";

type H4Props = {
  family?: FontFamily,
  style?: FontStyle,
  size?: TextSize,
  weight?: FontWeight,
  leading?: Leading,
  align?: TextAlign,
  color?: TextColor,
  case?: TextCase,
  className?: string,
  children: React.ReactNode;
}
const H4 = ({ family = "font-raleway", style = "not-italic", size = "text-sub", weight = "font-semibold", leading = "leading-tight", color = "color-dark", align = "text-left", case: textCase, className, children }: H4Props) => {
  const classes = twMerge(family, style, size, weight, leading, color, align, textCase, className);
  return <h4 className={classes}>{children}</h4>;
}
export default H4;