import { Button } from "@/components";
import { FC } from "react";

type PoweredByProps = {
    powered?: string,
    firstName?: string,
    lastName?: string,
}
const PoweredBy: FC<PoweredByProps> = ({ powered = "powered", firstName, lastName }) => {
  return (
    <Button href="#" noStyle={true}>{powered} by #{firstName}{lastName}</Button>
  )
}
export default PoweredBy;