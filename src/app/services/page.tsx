import BlogSection from "@/components/BlogSection";
import FeaturesWeb from "@/components/FeaturesWeb";
import ServiceFeature from "@/components/ServiceFeature";
// import BenefitSectionForService from "@/components/Services/BenefitSection";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Our Services -  Mcom",
  description:
    "Explore  Mcom’s wide range of services including Cybersecurity, IT Infrastructure, Cloud Solutions, Product Distribution, and Managed IT Services tailored for modern enterprises.",
  keywords: [
    " Mcom Services",
    "Cybersecurity Solutions",
    "Cloud Infrastructure Services",
    "Managed IT Services",
    "IT Support UAE",
    "IT Product Distribution",
    "Technology Services UAE",
  ],
  authors: [{ name: " Mcom", url: "https://mcom.com" }],
  creator: " Mcom",
  publisher: " Mcom",
  metadataBase: new URL("https://mcom.com"),
  openGraph: {
    title: " Mcom Services - IT & Cybersecurity Solutions",
    description:
      "Discover  Mcom’s comprehensive IT and cybersecurity service offerings designed to empower businesses with secure, scalable, and reliable solutions.",
    url: "https://mcom.com/services",
    siteName: " Mcom",
    images: [
      {
        url: "/logo/logo-mcom.png",
        width: 800,
        height: 600,
        alt: " Mcom Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services -  Mcom",
    description:
      "Explore our expert IT services — from cybersecurity to cloud infrastructure — all under one roof at  Mcom.",
    images: ["/logo/logo-mcom.png"],
    site: "@mcom",
    creator: "@mcom",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
  alternates: {
    canonical: "https://mcom.com/services",
  },
};

const ServicePage = () => {
  return (
    <div>
      <ServiceFeature />
      <BlogSection />
      <FeaturesWeb />
    </div>
  );
};

export default ServicePage;
