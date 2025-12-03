import { twMerge } from "tailwind-merge";
import { FontFamily, FontStyle, FontWeight, Leading, TextAlign, TextColor, TextCase } from "../types";

type PProps = {
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
const P = ({ family = "font-raleway", style = "not-italic", weight = "font-semibold", leading = "leading-snug", color = "text-dark", align = "text-left", case: textCase, className = "text-body", children }: PProps) => {
  const classes: string = twMerge(family, style, weight, leading, color, align, textCase, className);
  return <p className={classes}>{children}</p>;
}
export default P;