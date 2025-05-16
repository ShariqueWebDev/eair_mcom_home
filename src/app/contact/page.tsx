import Breadcrumb from "@/components/BreadCrumb/BreadCrumb";
import ContactCard from "@/components/ContactCard";
import ContactForm from "@/components/Forms/ContactForm";
// import Breadcrumb from "@/components/Layouts/Breadcrumb/Breadcrumb";
import { Mail, MapPin, Phone } from "lucide-react";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Contact Us",
  openGraph: {
    siteName: "Yovant Recruitment Services",
    title: "Contact Us",
    description:
      "Welcome to Yovant Recruitment Services, a dynamic recruitment agency founded by Alex Farrow and Jayson Thankappan.",
    url: `https://yovantrecruitment.com/contact`,
    type: "website",
    images: [
      {
        url: `${process.env.FRONTEND}/assets/logo/webp/opengraph.webp`,
        width: 1200,
        height: 630,
        alt: "Yovant Recruitment Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us",
    description:
      "Welcome to Yovant Recruitment Services, a dynamic recruitment agency founded by Alex Farrow and Jayson Thankappan.",
    images: [`${process.env.FRONTEND}/assets/logo/webp/opengraph.webp`],
  },
  alternates: {
    canonical: `${process.env.FRONTEND}/contact`,
  },
};

const Contact = () => {
  const data = [
    {
      icon: MapPin,
      label: "Address",
      value: "Office 210, Lulu Office Building, Al Muteena, Dubai, UAE",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+ (971)  55 956 3722",
    },
    {
      icon: Mail,
      label: "Mail",
      value: "sales@mcomcctv.com",
    },
  ];

  return (
    <>
      {/* <Breadcrumb breadCrumb={["Home", "Contact Us"]} heading="Contact Us" /> */}
      <div className="">
        <Breadcrumb
          path="Contact"
          title="Contact Mcom"
          paragraph="Whether you're seeking IT solutions, product distribution, or managed services, our team is ready to help. Let’s start the conversation today."
          bgImg="/top-banner/contact-banner.webp"
        />
      </div>
      <div className="md:px-20 px-5  text-white py-8 md:py-16 flex flex-col lg:flex-row gap-14 lg:gap-14">
        <div className="space-y-2 w-full lg:w-[60%]">
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-4xl heading-all gradientHeading text-gray-800 font-bold tracking-wide">
              GET IN TOUCH
            </h2>
            <p className="tracking-wider leading-relaxed text-gray-600 text-[0.9rem] lg:text-[0.95rem] ">
              Need to get in touch? We'd love to hear from you! Please fill out
              the form or email{" "}
              <a href="mailto:sales@mcomcctv.com" className="text-lightGolden">
                sales@mcomcctv.com
              </a>
              , and our customer service team will respond within 24-72 hours.
            </p>
          </div>
          <div className="grid grid-cols-1 pt-4 md:grid-cols-2 gap-4 lg:gap-5">
            {data.map((item, index) => (
              <div key={index}>
                <ContactCard item={item} />
              </div>
            ))}
          </div>
        </div>
        <div className="w-full lg:w-[40%] space-y-5">
          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default Contact;
