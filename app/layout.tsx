import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import Header from "../";
// import FloatingCall from "@/components/Others/FloatingCall";
// import SocialMediaButton from "@/components/Others/FloatingIcons";
// import Footer2 from "@/components/Footer2";
// import AosWrapper from "@/components/Others/AosWrapper";
import Header from "../components/HeaderFooter/Header";
import Footer2 from "../components/Footer2";
import FloatingCall from "../components/Others/FloatingCall";
import SocialMediaButton from "../components/Others/FloatingIcons";
import AosWrapper from "../components/Others/AosWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log(process.env.FRONTEND_URL);

  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Alef:wght@400;700&family=Quicksand:wght@300;700&display=swap"
        ></link>
      </head>
      <body className={``}>
        <AosWrapper />
        <Header />
        {children}
        <Footer2 />
        <div className="fixed bottom-10 right-10 z-[1000]">
          <FloatingCall />
          <SocialMediaButton />
        </div>
        {/* <Footer2 /> */}
      </body>
    </html>
  );
}
