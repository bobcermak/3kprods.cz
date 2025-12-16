import { Button } from "@/components";
import { type FC } from "react";
// import sendNewsletterEmail from "@/server-actions/newsletter";

type NewsletterFormProps = {
    placeholder?: string,
    icon?: React.ReactNode,
    children?: React.ReactNode
}
const NewsletterForm: FC<NewsletterFormProps> = ({ placeholder, icon, children }) => {
    // const handleSubmit = async (formData: FormData) => {
    //     "use server";
    //     const email = formData.get("email") as string;
    //     await sendNewsletterEmail(email);
    // }
    return (
        // action={handleSubmit}
        <form>
            <div>
                {icon}
                <input type="text" name="email" placeholder={placeholder}/>
            </div>
            <Button isLink={false} type="submit">{children}</Button>
        </form>
    )
}
export default NewsletterForm;