import React from "react";
import Image from "next/image";
import Link from "next/link";
// import Breadcrumb from "@/components/BreadCrumb/BreadCrumb";
import { Metadata } from "next";
import Breadcrumb from "../../components/BreadCrumb/BreadCrumb";
import AboutUsSection from "../../components/About/AboutUsSection";
import Wrapper from "../../components/Others/Wrapper";
import OurClients from "../../components/OurClient";
import Achievment from "../../components/Achievment";
import OurTechnologyPartner from "../../components/OurTechnologyPartner";
// import AboutUsSection from "@/components/About/AboutUsSection";
// import Wrapper from "@/components/Others/Wrapper";
// import OurClients from "@/components/OurClient";
// import Achievment from "@/components/Achievment";

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
    title: "About  Mcom - Technology You Can Trust",
    description:
      "Discover  Mcom’s story, team, and services in Cybersecurity, Cloud, and IT Infrastructure.",
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
      <Wrapper className="pt-16">
        <div className=" text-justify md:px-3">
          <h1 className="text-left md:text-5xl text-3xl font-bold uppercase heading-all  text-gray-800 mb-6">
            About Vostok
          </h1>
          <div className="flex flex-col md:flex-row  md:space-y-0">
            {/* First column with two list items */}
            <ul className=" space-y-3 text-gray-700 md:!w-[50%] w-full text-sm ">
              <li>
                Vostok Trading LLC is a young entrepreneurial company, providing
                solutions in the field of Information and Communication
                Technologies. We are headquartered in Dubai, the commercial
                capital of the Middle East. Within a span of a few years, we
                have notched up around 10000 clients in the Middle East region.
                Our team of 100 professionals is dedicated to bringing best of
                breed emerging enterprise technology to the region for the
                benefit of small, medium and large enterprises in the region.
              </li>
              <li>
                Vostok's mission is to maximize the value by providing the
                high-quality core services that our customers and vendor
                partners need to cost-effectively sell, deploy and support
                world-class technology solutions.
              </li>
            </ul>

            {/* Second column with one list item */}
            <ul className=" space-y-3 text-gray-700 md:!w-[50%] w-full md:pl-12   text-sm">
              <li>
                The core business activities of us include creating projects &
                implementing solutions related to Information Technology,
                Security Surveillance, Telephony, Trading, Distribution,
                Retailing of hardware products and providing hardware & software
                related services. The solutions provided by us and the products
                we carry are detailed elsewhere. We are often participating in
                exhibitions to promote our new products and solutions. Event
                list are carrying the details of future exhibitions which we
                will participate.
              </li>
            </ul>
          </div>
        </div>
      </Wrapper>
      <AboutUsSection />
      {/* <Wrapper className="overflow-hidden md:py-16 py-10 bg-gray-100">
        <div className="">
          <div className="relative z-10 mb-12 text-center" data-aos="fade-up">
         
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
      </Wrapper> */}
      <div className="">
        <OurClients />
      </div>
      <Wrapper>
        <hr className="text-gray-200 " />
      </Wrapper>
      <OurTechnologyPartner />

      <div className="bg-gray-100">
        <Achievment />
      </div>
    </div>
  );
};

export default AboutPage;
