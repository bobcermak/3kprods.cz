import { P } from "@/components";
import { FC } from "react";

type ReviewCardProps = {
    children?: React.ReactNode
}
const ReviewCard: FC<ReviewCardProps> = ({ children }) => {
  return (
    <article className="px-5 py-10 max-w-[509px]">
        <div className="flex justify-between">
            <header className="w-[140px]">
                <img className="svg-responsive" src="/images/vectors/stars.svg" alt="3kprods - fotka hvězdiček" loading="lazy"/>
            </header>
            <div className="w-8 h-8">
                <img className="svg-responsive" src="/images/vectors/comment.svg" alt="3kprods - fotka komentáře" loading="lazy"/>
            </div>
        </div>
        <footer className="mt-4">
            <P>{children}</P>
        </footer>
    </article>
  )
}
export default ReviewCard;