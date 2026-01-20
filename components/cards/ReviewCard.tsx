import { H4, P } from "@/components";
import { FC } from "react";

type ReviewCardProps = {
    personName: string,
    personDescription: string,
    children: React.ReactNode
}
const ReviewCard: FC<ReviewCardProps> = ({ personName, personDescription, children }) => {
  return (
    <article>
        <div className="px-5 py-10 bg-[linear-gradient(82deg,#FFFFFF_25%,#EDF0FE_100%)] rounded-[20px] border border-light-blue shadow-lg">
            <header className="flex justify-between items-center">
                <figure className="w-[140px]">
                    <img className="svg-responsive" src="/images/vectors/stars.svg" alt="3kprods - fotka hvězdiček" loading="lazy"/>
                </figure>
                <figure className="w-8 h-8">
                    <img className="svg-responsive" src="/images/vectors/comment.svg" alt="3kprods - fotka komentáře" loading="lazy"/>
                </figure>
            </header>
            <div className="mt-4">
                <P className="line-clamp-3">{children}</P>
            </div>
        </div>
        <footer className="mt-6">
            <H4 size="text-sub" weight="font-bold" case="capitalize">{personName}</H4>
            <P size="text-[18px]" weight="font-semibold" className="text-dark/60">{personDescription}</P>
        </footer>
    </article>
  )
}
export default ReviewCard;