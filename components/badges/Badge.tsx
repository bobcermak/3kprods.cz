import Image from "next/image";
import { FC } from "react";
import { P } from "@/components";

type BadgeProps = {
    icon?: boolean,
    children?: React.ReactNode
}
const Badge: FC<BadgeProps> = ({ icon = true, children }) => {
  return (
    <div className="bg-light-blue flex gap-4 px-6 py-3 items-center rounded-2xl w-fit">
        {icon && <figure><Image className="svg-responsive" src={"/images/vectors/hand-right.svg"} alt="3kprods - ruka na upoutávku" loading="lazy" width={32} height={28}/></figure>}
        <P case={"uppercase"} color={"text-white"}><strong>{children}</strong></P>
    </div>
  )
}
export default Badge;