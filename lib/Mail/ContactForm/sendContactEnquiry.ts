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
      to: "info@yovantrecruitment.com",
      name: "Yovant Recruitment Services",
      subject: "Contact Form Enquiry ( Yovant Recruitment Services )",
      body: emailBody,
    });

    return true; // Email sent successfully
  } catch (error) {
    console.error("Error sending email:", error);
    return false; // Failed to send email
  }
};
