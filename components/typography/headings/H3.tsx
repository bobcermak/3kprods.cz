import { twMerge } from "tailwind-merge";
import { FontFamily, FontStyle, TextSize, FontWeight, Leading, TextAlign, TextColor, TextCase } from "../types";

type H3Props = {
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
const H3 = ({ family = "font-raleway", style = "not-italic", size = "text-sub", weight = "font-bold", leading = "leading-tight", color = "color-dark", align = "text-left", case: textCase, className, children }: H3Props) => {
  const classes = twMerge(family, style, size, weight, leading, color, align, textCase, className);
  return <h3 className={classes}>{children}</h3>;
}
export default H3;