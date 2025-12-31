import { H3, P } from '@/components';
import { type FC } from 'react';

type InfoCardProps = {
    icon?: React.ReactNode,
    title: string,
    children: React.ReactNode
}
const InfoCard: FC<InfoCardProps> = ({ icon, title, children }) => {
  return (
    <div className="bg-light-blue/50 rounded-[20px] px-6 py-8 w-65 phone:w-70 border-l-5 border-light-blue">
        <div className="flex gap-2 items-center">
            {icon}
            <H3 color="text-white">{title}</H3>
        </div>
        <P className="mt-2 text-dark-white/80">{children}</P>
    </div>
  )
}
export default InfoCard;