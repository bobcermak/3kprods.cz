"use server";

import { Newsletter } from "@/components";
import { createElement } from "react";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
export const sendNewsletterAction = async (to: string, subject: string) => {
  try {
    const { data, error } = await resend.emails.send({
      from: "Resend Test <onboarding@resend.dev>",
      to: [to], 
      subject: subject,
      react: createElement(Newsletter, { userName: to.split('@')[0] })
    });
    if (error) {
      console.error(error);
      return { success: false, error: error.message };
    }
    return { success: true, id: data?.id };
  } 
  catch {
    return { success: false, error: "Chyba serveru" };
  }
}