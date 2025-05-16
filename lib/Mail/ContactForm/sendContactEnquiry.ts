"use server";

import { sendmail } from "../../mail";
import { contactFormTemplate } from "./contactFormTemplate";

interface SendFuncProps {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export const sendContactEnquiry: React.FC<SendFuncProps> = async ({
  name,
  email,
  phone,
  message,
}) => {
  const emailBody = contactFormTemplate({
    name,
    email,
    phone,
    message,
  });

  try {
    await sendmail({
      to: "shariquedev966@gmail.com",
      name: " Mcom",
      subject: "Contact Form Enquiry (  Mcom )",
      body: emailBody,
    });

    return true; // Email sent successfully
  } catch (error) {
    console.error("Error sending email:", error);
    return false; // Failed to send email
  }
};
