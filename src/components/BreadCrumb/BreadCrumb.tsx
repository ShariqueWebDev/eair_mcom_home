"use client";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const Breadcrumb = ({
  path,
  title,
  paragraph,
  bgImg,
}: {
  path: string;
  title: string;
  paragraph: string;
  bgImg: string;
}) => {
  return (
    <section
      id="common_banner"
      className="relative overflow-hidden bg-cover bg-center bg-no-repeat h-[300px] sm:h-[450px] md:h-[350px]  sm:mb-1  flex items-center md:px-20 px-5 "
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Breadcrumb Navigation */}
      <div className="mt-10">
        <div className="relative  z-10 w-full max-w-7xl mx-auto mt-5">
          <div className="flex items-center gap-2 text-sm text-white">
            <Link
              href="/"
              className="text-gray-300 hover:text-blue-400 transition-colors"
            >
              Home
            </Link>
            <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
            <span className="font-medium">{path}</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="relative max-w-[90%] sm:max-w-[700px] md:max-w-[850px] bg-opacity-90  py-6 sm:py-8 md:py-10 rounded-md text-start">
          <h1 className=" text-3xl md:text-4xl  font-bold text-white pb-4 sm:pb- heading-all">
            {title}
            {/* Empower Your Business with Agile Solutions */}
          </h1>
          <p className="text-xs sm:text-sm md:text-base  text-gray-300 mt2 leading-relaxed">
            {paragraph}
            {/* Encompasses a rich tapestry of skills. With our headquarters nestled
          in Thiruvananthapuram, we extend our presence across the vast expanse
          of India. As proud sentinels of Cybersecurity Services, complete IT
          and Cloud Infrastructure solutions, and managed services prowess, we
          invite you to embark on a remarkable journey with us. Our unwavering
          dedication has garnered resounding endorsements from customers
          spanning the globe, attesting to our sterling reputation. Placing
          paramount importance on exceptional customer service, */}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumb;
