import { twMerge } from "tailwind-merge";
import { FontFamily, FontStyle, TextSize, FontWeight, Leading, TextAlign, TextColor, TextCase } from "../types";

type PProps = {
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
const P = ({ family = "font-raleway", style = "not-italic", size = "text-body", weight = "font-semibold", leading = "leading-snug", color = "text-dark", align = "text-left", case: textCase, className, children }: PProps) => {
  const classes: string = twMerge(family, style, size, weight, leading, color, align, textCase, className);
  return <p className={classes}>{children}</p>;
}
export default P;