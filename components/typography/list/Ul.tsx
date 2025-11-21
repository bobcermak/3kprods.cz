import { twMerge } from "tailwind-merge";
import { UlType } from "../types";

type UlProps = {
  type?: UlType;
  gap?: string;
  className?: string;
  children: React.ReactNode;
}
const Ul = ({ type = "list-decimal", gap = "space-y-1", className, children }: UlProps) => {
  const isOrdered = type === "list-decimal";
  const Tag = isOrdered ? "ol" : "ul";
  const classes = twMerge(type, gap, className);
  return <Tag className={classes}>{children}</Tag>;
}
export default Ul;