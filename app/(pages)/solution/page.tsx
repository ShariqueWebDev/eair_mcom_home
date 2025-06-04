import { Metadata } from "next";
import React from "react";
import ScrollWeb from "../../../components/ScrollWeb";
import Breadcrumb from "../../../components/BreadCrumb/BreadCrumb";

export const metadata: Metadata = {
  title: "Our Solutions - CCTV, VMS, ANPR, Biometric & Access Control | Mcom",
  description:
    "Explore Mcom’s intelligent security and monitoring solutions including CCTV Central Monitoring, ANPR, Video Management Systems, Biometric Access, Door Control Systems, and Network Time Servers tailored for diverse industries.",
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
    title: "Our Solutions - CCTV, VMS, ANPR, Biometric & Access Control | Mcom",
    description:
      "Explore Mcom’s intelligent security and monitoring solutions including CCTV Central Monitoring, ANPR, Video Management Systems, Biometric Access, Door Control Systems, and Network Time Servers tailored for diverse industries.",
    url: "https://mcom.com/services",
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
    title: "Our Solutions - CCTV, VMS, ANPR, Biometric & Access Control | Mcom",
    description:
      "Explore Mcom’s intelligent security and monitoring solutions including CCTV Central Monitoring, ANPR, Video Management Systems, Biometric Access, Door Control Systems, and Network Time Servers tailored for diverse industries.",
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

const SolutionPage = () => {
  return (
    <div>
      <Breadcrumb
        path="Solution"
        title="Biometric & Access Control"
        paragraph="Enhance security and streamline attendance with advanced fingerprint and RFID systems."
        bgImg="/contact-banner1.webp"
      />
      <ScrollWeb />
    </div>
  );
};

export default SolutionPage;
