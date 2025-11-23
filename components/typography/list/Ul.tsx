import { twMerge } from "tailwind-merge";
import { UlType } from "../types";

type UlProps = {
  type?: UlType;
  gap?: string;
  className?: string;
  children: React.ReactNode;
}
const Ul = ({ type = "list-decimal", gap = "space-y-1", className, children }: UlProps) => {
  const isOrdered: boolean = type === "list-decimal";
  const Tag: "ol" | "ul" = isOrdered ? "ol" : "ul";
  const classes: string = twMerge(type, gap, className);
  return <Tag className={classes}>{children}</Tag>;
}
export default Ul;