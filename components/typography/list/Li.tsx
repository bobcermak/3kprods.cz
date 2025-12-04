import type { FontWeight, Leading, TextColor, TextCase } from "../types";

type LiProps = {
  size?: string,
  weight?: FontWeight,
  leading?: Leading,
  color?: TextColor,
  textCase?: TextCase,
  className?: string,
  children: React.ReactNode
}
const Li = ({ size = "text-body", weight = "font-semibold", leading = "leading-normal", color = "text-dark", textCase, className = "m-0 p-0 list-none", children }: LiProps) => {
  const classes: string = ["cursor-pointer", size, weight, leading, color, textCase, className].join(" ");
  return <li className={classes}>{children}</li>;
}
export default Li;