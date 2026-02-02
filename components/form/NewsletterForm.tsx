"use client";

import { Button, P } from "@/components";
import { useState, type FC } from "react";
import { sendNewsletterAction } from "@/lib/actions/sendNewsletterAction";
import { useFormStatus } from "react-dom";

type NewsletterFormProps = {
    placeholder?: string,
    icon?: React.ReactNode,
    className?: string
}
const SubmitButton = () => {
    const { pending } = useFormStatus();
    return (
        <Button isLink={false} type="submit">
            {pending ? "Odesílám..." : "Odeslat"}
        </Button>
    );
};
const NewsletterForm: FC<NewsletterFormProps> = ({ placeholder, icon, className }) => {
    //Hooks
    const [submit, setSubmit] = useState<boolean>(false);
    const [successSubmit, setSuccessSubmit] = useState<boolean>(false);

    const handleErrorState = (): void => {
        setSubmit(true);
        setSuccessSubmit(false);
        setTimeout(() => {
            setSubmit(false);
        }, 1500);
    };
    const handleSubmit = async (formData: FormData): Promise<void> => {
        const email = formData.get("email") as string;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(email)) {
            const result = await sendNewsletterAction(email, "Vítej v našem newsletteru! 🚀");
            setSubmit(true);
            if (result.success) setSuccessSubmit(true);
            else handleErrorState();
        } 
        else handleErrorState();
    }
    return !submit ? (
        <form action={handleSubmit} className={`mx-auto laptop:ml-0 max-w-[640px] bg-white rounded-[80px] ${className} shadow-secondary border border-dark/60 overflow-hidden`}>
            <div className="flex items-center justify-between inner-shadow-primary py-3">
                <div className="pl-5 tablet:pl-6 flex items-center gap-2 basis-full tablet:basis-[65%]">
                    {icon}
                    <input type="text" name="email" placeholder={placeholder} className="placeholder:font-semibold w-full outline-none"/>
                </div>
                <button type="submit" className="pr-5 tablet:hidden"><i className="fa-solid fa-arrow-right rounded-full transition-transform duration-250 ease-in-out group-hover:translate-x-0.5 group-active:translate-x-0.5 text-white bg-light-blue py-1.5 px-1.75"></i></button>
                <div className="pr-6 hidden tablet:block">
                    <SubmitButton/>
                </div>
            </div>
        </form>
    ) : (
        <div className={`mx-auto laptop:ml-0 max-w-[400px] bg-white rounded-[80px] ${className} shadow-secondary border border-dark/60 overflow-hidden`}>
            <div className="flex items-center justify-center inner-shadow-primary py-4">
                {successSubmit ? (
                    <div className="flex items-center gap-2">
                        <i className="fa-solid fa-circle-check text-green-500 text-sub"></i>
                        <P className="m-0" weight="font-semibold">Děkujeme za přihlášení! 🚀</P>
                    </div>
                ) : (
                    <div className="flex items-center gap-2">
                        <i className="fa-solid fa-circle-exclamation text-red-500 text-sub"></i>
                        <P className="m-0" weight="font-semibold">Něco se pokazilo. Zkuste to znovu.</P>
                    </div>
                )} 
            </div>
        </div>
    )
}
export default NewsletterForm;