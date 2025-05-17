import React from "react";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/BreadCrumb/BreadCrumb";
import { Metadata } from "next";
import AboutUsSection from "@/components/About/AboutUsSection";
import Wrapper from "@/components/Others/Wrapper";
import OurClients from "@/components/OurClient";

export const metadata: Metadata = {
  title: "About Us -  Mcom",
  description:
    "Learn more about  Mcom — a trusted leader in Cybersecurity, IT Infrastructure, Cloud Solutions, Product Distribution, and Managed IT Services across the region.",
  keywords: [
    "About  Mcom",
    "IT Services",
    "Cybersecurity Experts",
    "Cloud Infrastructure UAE",
    "Managed IT UAE",
    "Technology Company",
    "IT Company About",
  ],
  authors: [{ name: " Mcom", url: "https://mcom.com" }],
  creator: " Mcom",
  publisher: " Mcom",
  metadataBase: new URL("https://mcom.com"),
  openGraph: {
    title: "About  Mcom - IT & Cybersecurity Experts",
    description:
      "Get to know the mission, values, and expertise behind  Mcom. We deliver cutting-edge IT and Cybersecurity solutions with a strong commitment to excellence.",
    url: "https://mcom.com/about",
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
    title: "About  Mcom - Technology You Can Trust",
    description:
      "Discover  Mcom’s story, team, and services in Cybersecurity, Cloud, and IT Infrastructure.",
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
    canonical: "https://mcom.com/about",
  },
};

const AboutPage = () => {
  const teamMembers = [
    {
      name: "Christian Cannon",
      role: "Product Designer",
      image: "/profile-pic.webp",
    },
    {
      name: "Ricky Riley",
      role: "Frontend Developer",
      image: "/profile-pic.webp",
    },
    {
      name: "Gilbert Graham",
      role: "Backend Developer",
      image: "/profile-pic.webp",
    },
    {
      name: "Elijah Carroll",
      role: "Content Writer",
      image: "/profile-pic.webp",
    },
    {
      name: "Millie Buchanan",
      role: "SEO Expert",
      image: "/profile-pic.webp",
    },
    {
      name: "Jeffrey Alvarado",
      role: "DevOps",
      image: "/profile-pic.webp",
    },
    {
      name: "Kathryn Klein",
      role: "Full-stack Developer",
      image: "/profile-pic.webp",
    },
    {
      name: "Minnie Jordan",
      role: "Testing Developer",
      image: "/profile-pic.webp",
    },
  ];
  return (
    <div>
      <Breadcrumb
        bgImg="/top-banner/about-banner.webp"
        path="About"
        title="About MCOM"
        paragraph=" Mcom is dedicated to delivering cutting-edge Cybersecurity, IT Infrastructure, Cloud solutions, and managed services — all rooted in a commitment to innovation, integrity, and excellence."
      />
      <AboutUsSection />
      <Wrapper className="overflow-hidden md:py-16 py-10 bg-gray-100">
        <div className="">
          {/* Header */}
          <div className="relative z-10 mb-12 text-center" data-aos="fade-up">
            {/* <span className="inline-flex items-center gap-2 rounded-full px-4.5 py-1.5 text-sm font-medium border border-gray-500 text-gray-800 mb-4">
                <span className="text-[11px]">Meet Our Team</span>
              </span> */}
            <h2
              className="mb-4 text-2xl sm:text-4xl xl:text-5xl font-bold heading-all"
              data-aos="fade-up"
            >
              Our Dynamic Team
            </h2>
            <p
              className="mx-auto max-w-[714px] font-medium text-gray-600"
              data-aos="fade-up"
            >
              Build SaaS AI applications using OpenAI and Next.js, this kit
              comes with pre-configured and pre-built examples, making it easier
              to quickly kickstart your AI startup.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 pb-16 ">
            {teamMembers.map((member, index) => (
              <div
                className=" !max-w-[350px] w-full px-5 md:py-7 pb-0 pt-5 flex flex-col items-center justify-center shadow-lg rounded-md border-gray-100 !bg-white"
                key={index}
                data-aos="fade-up"
              >
                <div className="md:w-[150px] w-[100px] md:h-[150px] h-[100px] rounded-full overflow-hidden">
                  <Image
                    src={member?.image}
                    width={1000}
                    height={1000}
                    alt={member?.name}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="mt-5 text-center max-sm:h-[75px] h-[80px] ">
                  <h3
                    className="mb-1 md:text-xl text-sm font-semibold heading-all text-gray-800 transition-colors duration-300"
                    data-aos="fade-up"
                  >
                    {member.name}{" "}
                  </h3>{" "}
                  <p
                    className=" font-medium text-xs text-gray-500"
                    data-aos="fade-up"
                  >
                    {member.role}{" "}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
      <div className="">
        <OurClients />
      </div>
    </div>
  );
};

export default AboutPage;
