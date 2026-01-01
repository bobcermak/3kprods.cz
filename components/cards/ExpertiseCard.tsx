import { P, Button } from "@/components";
import React, { type FC } from "react";
import Image from "next/image";

type ExpertiseCardProps = {
    content: React.ReactNode,
    arrowHref: string,
    buttonContent: string,
    buttonHref: string,
    className?: string
}
const ExpertiseCard: FC<ExpertiseCardProps> = ({ content, arrowHref, buttonContent, buttonHref, className }) => {
  return (
    <article className={`bg-green rounded-[40px] px-10 py-15 ${className}`}>
        <header>
            <a className="w-15 h-15 p-6 bg-light-blue rounded-full flex items-center justify-center hover:shadow-xl active:shadow-xl transition-shadow duration-250" href={arrowHref} target="_blank" rel="noopener noreferrer" aria-label="Šipka"><Image className="svg-responsive" src="/images/vectors/triangle.svg" alt="3kprods - odkaz na video" loading="lazy" width={16} height={16} /></a>
        </header>
        <div className="mt-4">
            <P size="text-sub" weight="font-bold">{content}</P>
        </div>
        <footer className="mt-8">
            <Button href={buttonHref} isArrow={false}>{buttonContent}</Button>
        </footer>
    </article>
  )
}
export default ExpertiseCard;