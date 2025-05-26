import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "MCOM - IT & Cybersecurity Solutions",
  description:
    " Mcom offers expert Cybersecurity Services, IT and Cloud Infrastructure solutions, product distribution, and managed services with a commitment to excellence.",
  icons: {
    icon: "/logo/final-logo.png",
    shortcut: "/logo/final-logo.png",
    apple: "/logo/final-logo.png",
  },
  keywords: [
    "Cybersecurity",
    "Cloud Infrastructure",
    "Managed IT Services",
    "IT Solutions",
    "Product Distribution",
    " Mcom",
    "IT Services UAE",
  ],
  authors: [{ name: " Mcom", url: `${process.env.FRONTEND_URL}` }],
  creator: " Mcom",
  publisher: " Mcom",
  metadataBase: new URL("https://mcom.com"),
  openGraph: {
    title: "MCOM - Complete IT & Cybersecurity Solutions",
    description:
      "Discover  Mcom's full range of cybersecurity, cloud infrastructure, IT distribution, and managed services designed for modern businesses.",
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
    title: "MCOM - Cybersecurity & IT Solutions",
    description:
      "Expert IT services from  Mcom: cybersecurity, cloud infrastructure, product distribution, and more.",
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
    canonical: `${process.env.FRONTEND_URL}`,
  },
};

const layout = ({ children }: any) => {
  return <div className="">{children}</div>;
};

export default layout;
