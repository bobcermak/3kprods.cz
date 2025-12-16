import { H3, P } from '@/components';
import { type FC } from 'react';

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