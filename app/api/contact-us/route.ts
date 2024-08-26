import { NextResponse } from "next/server";
import { Resend } from "resend";
import ContactConfirmationEmail from "@/react-email-starter/emails/contact-confirmation";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { name, email, company, message } = await request.json();

  try {
    // Send email to the user
    console.log({
      name,
      email,
      company,
      message,
      key: process.env.RESEND_API_KEY,
    });
    const response = await resend.emails.send({
      from: "Chaotic <noreply@emails.usechaotic.com>",
      to: email,
      // cc: "founders@usechaotic.com",
      bcc: "moustafaelhadary96@gmail.com",
      subject: "Thank you for contacting Chaotic",
      react: ContactConfirmationEmail({ name, email, company, message }),
    });

    console.log({ response });

    // Send email to founders@useChaotic.com
    // await resend.emails.send({
    //   from: "Chaotic Contact Form <noreply@usechaotic.com>",
    //   to: "founders@useChaotic.com",
    //   subject: "New Contact Form Submission",
    //   react: ContactConfirmationEmail({ name, email, company, message }),
    // });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Error sending email" }, { status: 500 });
  }
}
