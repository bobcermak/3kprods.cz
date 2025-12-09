// "use server";

// import nodemailer from "nodemailer";

// const sendNewsletterEmail = async (email: string) => {
//     if (!email) return;
//     const transporter = nodemailer.createTransport({
//         service: "gmail",
//         auth: {
//             user: process.env.SMTP_USER,
//             pass: process.env.SMTP_PASS,
//         },
//     });
//     await transporter.sendMail({
//         from: process.env.SMTP_USER,
//         to: "bob.cermak.dev@gmail.com",
//         subject: "Nový newsletter odběr",
//         text: `Uživatel zadal: ${email}`,
//     });
// }
// export default sendNewsletterEmail;