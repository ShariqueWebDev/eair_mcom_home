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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
