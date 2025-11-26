import { P } from "@/components";
import { FC } from "react";

type PoweredByProps = {
    powered?: string,
    firstName?: string,
    lastName?: string,
}
const PoweredBy: FC<PoweredByProps> = ({ powered = "powered", firstName, lastName }) => {
  return (
    <P>{powered} by #{firstName}{lastName}</P>
  )
}
export default PoweredBy;