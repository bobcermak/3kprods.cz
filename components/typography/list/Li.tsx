import { twMerge } from "tailwind-merge";
import type { TextSize, FontWeight, Leading, TextColor, TextCase } from "../types";

type LiProps = {
  size?: TextSize;
  weight?: FontWeight;
  leading?: Leading;
  color?: TextColor;
  textCase?: TextCase;
  className?: string;
  children: React.ReactNode;
}
const Li = ({ size = "text-body", weight = "font-semibold", leading = "leading-snug", color = "color-dark", textCase, className, children }: LiProps) => {
  const classes = twMerge(size, weight, leading, color, textCase, className);
  return <li className={classes}>{children}</li>;
}
export default Li;