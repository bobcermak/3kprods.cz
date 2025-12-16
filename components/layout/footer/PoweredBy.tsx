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
    <Button href={link} noStyle={true}>{powered} by #{firstName}{lastName}</Button>
  )
}
export default PoweredBy;