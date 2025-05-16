import React from "react";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/BreadCrumb/BreadCrumb";
import { Metadata } from "next";

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
      <section
        id="home"
        className="relative z-10 overflow-hidden rounded-b-[50px] md:px-20 px-5 py-16  "
      >
        {/* Content Container */}
        <div className="flex flex-wrap gap--7.5 ">
          {/* Featured Post */}
          <div className="flex w-full  flex-col gap-3 rounded-xl bg-white p-4  lg:flex-row lg:items-center lg:p-2.5">
            <div className="aspect-[536/320] w-full flex items-center justify-center rounded-lg bg-[#dbcfcb] ">
              <Link href="/pricing">
                <Image
                  src="/mission.png"
                  alt="Wellness Unveiled: Empowering Your Journey to a Balanced and Vibrant Life"
                  width={270}
                  height={270}
                  className="object-cover"
                  priority
                />
              </Link>
            </div>

            <div className="w-full lg:max-w-[540px] bg-gray-100 h-full rounded-lg md:p-10 p-5">
              <Link
                href="/category/health"
                className="mb-4 inline-flex rounded-full bg-purple-100 px-3 py-1 text-sm font-medium capitalize text-purple-800"
              >
                ✨
              </Link>
              <h1 className="mb-4 text-2xl font-bold text-gray-900 xl:text-4xl ">
                <Link href="/pricing" className="heading-all">
                  Our Mission
                </Link>
              </h1>
              <p className="max-w-[524px] text-sm text-gray-600">
                At Mcom, we are driven by a singular mission - to cultivate a
                dynamic and diverse portfolio in the realm of Cybersecurity
                Services, complete IT and Cloud Infrastructure solutions, IT
                product distributions, and managed services. Guided by our
                unwavering commitment to excellence.
              </p>
            </div>
          </div>

          {/* Secondary Post 1 */}
          <div className="flex w-full flex-col gap-3 rounded-xl bg-white max-sm:mx-1 p-2.5  sm:flex-row sm:items-center lg:w-1/2">
            <div className="relative aspect-[238/180] w-full overflow-hidden">
              <Link href="/posts/culinary-expeditions-tasting-the-worlds-flavors-in-the-heart-of-local-culture">
                <Image
                  src="/vision.jpeg"
                  alt="Culinary Expeditions: Tasting the World's Flavors in the Heart of Local Culture"
                  fill
                  className="rounded-lg object-cover"
                  sizes="100vw"
                />
              </Link>
            </div>
            <div className="w-full lg:max-w-[272px] bg-gray-100 md:h-full rounded-lg p-5">
              <Link
                href="/category/health"
                className="mb-4 inline-flex rounded-full bg-blue-100 px-3 py-1 text-sm font-medium capitalize text-blue-800"
              >
                ✨
              </Link>
              <h2 className="mb-3 text-3xl font-semibold text-gray-900">
                <Link
                  href="/posts/culinary-expeditions-tasting-the-worlds-flavors-in-the-heart-of-local-culture "
                  className="heading-all"
                >
                  Our Vision
                </Link>
              </h2>
              <p className="max-w-[524px] text-sm text-gray-600">
                At Mcom, we are driven by a singular.
              </p>
            </div>
          </div>

          {/* Secondary Post 2 */}
          <div className="flex w-full flex-col gap-3 rounded-xl bg-white max-sm:mx-1  p-2.5  sm:flex-row sm:items-center lg:w-1/2">
            <div className="relative aspect-[238/180] w-full overflow-hidden">
              <Link href="/posts/begin-here-to-obtain-a-brief-summary-encompassing-all-the-essential">
                <Image
                  src="/values.jpeg"
                  alt="Begin here to obtain a brief summary encompassing all the essential"
                  fill
                  className=" w-full h-full rounded-lg object-cover object-center"
                  sizes="100vw"
                />
              </Link>
            </div>
            <div className="w-full lg:max-w-[272px] bg-gray-100 md:h-full rounded-lg p-5">
              <Link
                href="/category/lifestyle"
                className="mb-4 inline-flex rounded-full bg-blue-100 px-3 py-1 text-sm font-medium capitalize text-blue-800"
              >
                ✨
              </Link>
              <h2 className="mb-3 text-3xl font-semibold text-gray-900">
                <Link
                  href="/posts/begin-here-to-obtain-a-brief-summary-encompassing-all-the-essential"
                  className="heading-all"
                >
                  Our Value
                </Link>
              </h2>
              <p className="max-w-[524px] text-gray-600">
                Empowering Success through Authenticity, Expertise, and Timely
                Solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <section className="overflow-hidden py-16 md:px-32 px-5 bg-gray-100">
          <div className="mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0">
            {/* Header */}
            <div className="relative z-10 mb-12 text-center" data-aos="fade-up">
              {/* <span className="inline-flex items-center gap-2 rounded-full px-4.5 py-1.5 text-sm font-medium border border-gray-500 text-gray-800 mb-4">
                <span className="text-[11px]">Meet Our Team</span>
              </span> */}
              <h2 className="mb-4.5 text-2xl sm:text-4xl xl:text-5xl font-bold heading-all">
                Our Dynamic Team
              </h2>
              <p className="mx-auto max-w-[714px] font-medium text-gray-600">
                Build SaaS AI applications using OpenAI and Next.js, this kit
                comes with pre-configured and pre-built examples, making it
                easier to quickly kickstart your AI startup.
              </p>
            </div>

            {/* Team Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16  ">
              {teamMembers.map((member, index) => (
                <div key={index} className="flex justify-center bg">
                  <div
                    className="group text-center shadow-sm pt-9 pb-5 px-10 bg-white rounded-md"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    {/* Team Image */}
                    <div className="relative mx-auto mb-7.5 h-50 w-50 rounded-full overflow-hidden shadow-[0_3px_10px_rgb(0,0,0,0.2)]  transition-all duration-300">
                      <Image
                        src={member.image}
                        alt={member.name}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-full hover:scale-110 group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b group from-transparent to-gray-800 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                    </div>

                    {/* Team Info */}
                    <h3 className="mb-2.5 text-xl font-semibold heading-all text-gray-800 transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="mb-6 font-medium text-sm text-gray-500">
                      {member.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default AboutPage;
