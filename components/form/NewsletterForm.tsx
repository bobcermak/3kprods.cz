import { Button } from "@/components";
import { type FC } from "react";

type NewsletterFormProps = {
    placeholder?: string,
    icon?: React.ReactNode,
    className?: string
}
const NewsletterForm: FC<NewsletterFormProps> = ({ placeholder, icon, className }) => {
    return (
        <form className={`mx-auto laptop:ml-0 max-w-[640px] bg-white rounded-[80px] ${className} shadow-secondary border border-dark/60 overflow-hidden`}>
            <div className="flex items-center justify-between inner-shadow-primary py-3">
                <div className="pl-5 tablet:pl-6 flex items-center gap-2 basis-full tablet:basis-[65%]">
                    {icon}
                    <input type="text" name="email" placeholder={placeholder} className="placeholder:font-semibold w-full outline-none"/>
                </div>
                <button type="submit" className="pr-5 tablet:hidden"><i className="fa-solid fa-arrow-right rounded-full transition-transform duration-250 ease-in-out group-hover:translate-x-0.5 group-active:translate-x-0.5 text-white bg-light-blue py-1.5 px-1.75"></i></button>
                <div className="pr-6 hidden tablet:block">
                    <Button isLink={false} type="submit">Odeslat</Button>
                </div>
            </div>
        </form>
    )
}
export default NewsletterForm;