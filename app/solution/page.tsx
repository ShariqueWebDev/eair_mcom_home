import { Metadata } from "next";
import React from "react";

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
  authors: [{ name: " Mcom", url: "https://mcom.com" }],
  creator: " Mcom",
  publisher: " Mcom",
  metadataBase: new URL("https://mcom.com"),
  openGraph: {
    title: "Our Solutions - CCTV, VMS, ANPR, Biometric & Access Control | Mcom",
    description:
      "Explore Mcom’s intelligent security and monitoring solutions including CCTV Central Monitoring, ANPR, Video Management Systems, Biometric Access, Door Control Systems, and Network Time Servers tailored for diverse industries.",
    url: "https://mcom.com/services",
    siteName: " Mcom",
    images: [
      {
        url: "/logo/final-logo.png",
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
    images: ["/logo/final-logo.png"],
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

const SolutionPage = () => {
  return <div></div>;
};

export default SolutionPage;
