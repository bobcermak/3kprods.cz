import { P, H3 } from '@/components'
import { FC } from 'react'

type InfoCardProps = {
    icon?: React.ReactNode,
    title: string,
    children: React.ReactNode
}
const InfoCard: FC<InfoCardProps> = ({ icon, title, children }) => {
  return (
    <div>
        <div>
            {icon}
            <H3>{title}</H3>
        </div>
        <P>{children}</P>
    </div>
  )
}
export default InfoCard;