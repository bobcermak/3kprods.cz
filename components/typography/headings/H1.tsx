import { twMerge } from "tailwind-merge";
import { FontFamily, FontStyle, TextSize, FontWeight, Leading, TextAlign, TextColor, TextCase } from "../types";

type H1Props = {
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
const H1 = ({ family = "font-bungee", style = "not-italic", size = "text-heading", weight = "font-normal", leading = "leading-tight", color = "color-dark", align = "text-left", case: textCase = "uppercase", className, children }: H1Props) => {
  const classes: string = twMerge(family, style, size, weight, leading, color, align, textCase, className);
  return <h1 className={classes}>{children}</h1>;
}
export default H1;