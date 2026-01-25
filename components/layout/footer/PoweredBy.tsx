import { Button } from "@/components";
import { type FC } from "react";

type PoweredByProps = {
    powered?: string,
    firstName?: string,
    lastName?: string,
    link: string
}
const PoweredBy: FC<PoweredByProps> = ({ powered = "powered", firstName, lastName, link }) => {
  return (
    <Button href={link} noStyle={true} hover="hover:text-green active:text-green transition-colors duration-250" className="font-orbitron text-white">{powered} by #<span className="font-outfit font-bold text-[20px]">{firstName}</span><span>{lastName}</span></Button>
  )
}
export default PoweredBy;