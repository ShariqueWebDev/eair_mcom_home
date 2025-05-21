// import BlogSection from "@/components/BlogSection";
// import Breadcrumb from "@/components/BreadCrumb/BreadCrumb";
// import FeaturesWeb from "@/components/FeaturesWeb";
// import ServiceSection from "@/components/HeaderFooter/ServiceSection";
// import ServiceFeature from "@/components/ServiceFeature";
// import BenefitSectionForService from "@/components/Services/BenefitSection";
import { Metadata } from "next";
import React from "react";
import Breadcrumb from "../../components/BreadCrumb/BreadCrumb";
// import ServiceSection from "../../components/HeaderFooter/ServiceSection";
import BlogSection from "../../components/BlogSection";
import FeaturesWeb from "../../components/FeaturesWeb";
import ServiceSec from "../../components/HeaderFooter/ServiceSec";
// import ScrollWeb from "../../components/ScrollWeb";

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
  authors: [{ name: " Mcom", url: `${process.env.FRONTEND_URL}` }],
  creator: " Mcom",
  publisher: " Mcom",
  metadataBase: new URL(`${process.env.FRONTEND_URL}`),
  openGraph: {
    title: " Mcom Services - IT & Cybersecurity Solutions",
    description:
      "Discover  Mcom’s comprehensive IT and cybersecurity service offerings designed to empower businesses with secure, scalable, and reliable solutions.",
    url: `${process.env.FRONTEND_URL}`,
    siteName: " Mcom",
    images: [
      {
        url: `${process.env.FRONTEND_URL}/logo/final-logo.png`,
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
    images: [`${process.env.FRONTEND_URL}/logo/final-logo.png`],
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
    canonical: `${process.env.FRONTEND_URL}/services`,
  },
};

const ServicePage = () => {
  return (
    <div>
      {/* <ServiceFeature /> */}
      <Breadcrumb
        path="Service"
        title="Our Service"
        paragraph="Explore our range of services tailored to your needs."
        bgImg="/top-banner/about-banner.webp"
      />
      {/* <ServiceSection /> */}
      <ServiceSec />
      <BlogSection />
      <FeaturesWeb />
      {/* <ScrollWeb /> */}
    </div>
  );
};

export default ServicePage;
