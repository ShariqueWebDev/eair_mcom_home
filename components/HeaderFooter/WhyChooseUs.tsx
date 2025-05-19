import { Check } from "lucide-react";
import Image from "next/image";
import React from "react";
import Wrapper from "../Others/Wrapper";

const WhyChooseUs = () => {
  const WhyChoosePoints = [
    "Skilled & Certified Technicians",
    "Latest Technology & Tools",
    "On-Time Project Delivery",
    "Responsive Support",
    "End-to-End Solutions",
    "Security & Compliance First",
    "Transparent Pricing",
    "Trusted by Businesses & Institutions",
    "Customer-Centric Approach",
    "Warranty & Post-Installation Support",
  ];

  return (
    <Wrapper className="bg-gray-100 md:py-16 py-10 ">
      <div className="">
        <h4
          className="md:text-4xl text-3xl font-semibold text-center heading-all mb-7 uppercase text-gray-800"
          data-aos="fade-up"
        >
          Why Choose Us ?
        </h4>
        <div className=" flex md:flex-row flex-col md:gap-10  md:mb-10 mb-5">
          <h2
            className="mb-4 text-2xl font-bold text-gray-800 heading-all sm:text-4xl 00"
            data-aos="fade-up"
          >
            Focus On Getting Our Jobs Done
          </h2>
          <p
            className="max-w-[714px] mx-auto font-medium text-gray-600"
            data-aos="fade-up"
          >
            We believe in delivering results with precision, professionalism,
            and a no-excuse attitude. Our team is committed to completing every
            project efficiently—whether it’s a single system installation or a
            large-scale infrastructure setup. With a focus on quality,
            transparency, and speed, we ensure that your expectations are not
            just met, but exceeded.
          </p>
        </div>

        {/* Background Section */}
        <div className="relative rounded-lg overflow-hidden" data-aos="fade-up">
          {/* Background Image */}
          <Image
            src="/why-choose.webp"
            fill
            alt="Why Choose Us"
            className="object-cover object-center z-0"
            data-aos="fade-up"
          />

          {/* Optional dark overlay */}
          <div
            className="absolute inset-0 bg-black/50 bg-opacity-40 z-0"
            data-aos="fade-up"
          />

          {/* Content above image */}
          <div className="relative z-10 flex flex-col md:flex-row justify-center items-start gap-10 p-6 md:p-12">
            {/* Left Column */}
            <ul
              className="bg-white backdrop-blur-md w-full max-w-[450px] p-10 rounded-lg shadow-md"
              data-aos="fade-up"
            >
              {/* {WhyChoosePoints.slice(0, 5).map((item, index) => ( */}
              <li className="flex gap-3 mb-5" data-aos="fade-up">
                <div className="w-5 h-5 p-1 bg-[#353382] rounded-full flex justify-center items-center">
                  <Check color="#fff" size={14} />
                </div>
                <p className="text-sm text-gray-800">
                  Skilled & Certified Technicians
                </p>
              </li>
              <li className="flex gap-3 mb-5" data-aos="fade-up">
                <div className="w-5 h-5 p-1 bg-[#353382] rounded-full flex justify-center items-center">
                  <Check color="#fff" size={14} />
                </div>
                <p className="text-sm text-gray-800">
                  Latest Technology & Tools
                </p>
              </li>
              <li className="flex gap-3 mb-5" data-aos="fade-up">
                <div className="w-5 h-5 p-1 bg-[#353382] rounded-full flex justify-center items-center">
                  <Check color="#fff" size={14} />
                </div>
                <p className="text-sm text-gray-800">
                  On-Time Project Delivery
                </p>
              </li>
              <li className="flex gap-3 mb-5" data-aos="fade-up">
                <div className="w-5 h-5 p-1 bg-[#353382] rounded-full flex justify-center items-center">
                  <Check color="#fff" size={14} />
                </div>
                <p className="text-sm text-gray-800">Responsive Support</p>
              </li>
              <li className="flex gap-3 mb-5" data-aos="fade-up">
                <div className="w-5 h-5 p-1 bg-[#353382] rounded-full flex justify-center items-center">
                  <Check color="#fff" size={14} />
                </div>
                <p className="text-sm text-gray-800">End-to-End Solutions</p>
              </li>
              {/* ))} */}
            </ul>

            {/* Right Column */}
            <ul
              className="bg-white backdrop-blur-md w-full max-w-[450px] p-10 rounded-lg shadow-md"
              data-aos="fade-up"
            >
              {/* {WhyChoosePoints.slice(5).map((item, index) => ( */}
              <li className="flex gap-3 mb-5" data-aos="fade-up">
                <div className="w-5 h-5 p-1 bg-[#353382] rounded-full flex justify-center items-center">
                  <Check color="#fff" size={14} />
                </div>
                <p className="text-sm text-gray-800">
                  Security & Compliance First
                </p>
              </li>
              <li className="flex gap-3 mb-5" data-aos="fade-up">
                <div className="w-5 h-5 p-1 bg-[#353382] rounded-full flex justify-center items-center">
                  <Check color="#fff" size={14} />
                </div>
                <p className="text-sm text-gray-800">Transparent Pricing</p>
              </li>
              <li className="flex gap-3 mb-5" data-aos="fade-up">
                <div className="w-5 h-5 p-1 bg-[#353382] rounded-full flex justify-center items-center">
                  <Check color="#fff" size={14} />
                </div>
                <p className="text-sm text-gray-800">
                  Trusted by Businesses & Institutions
                </p>
              </li>
              <li className="flex gap-3 mb-5" data-aos="fade-up">
                <div className="w-5 h-5 p-1 bg-[#353382] rounded-full flex justify-center items-center">
                  <Check color="#fff" size={14} />
                </div>
                <p className="text-sm text-gray-800">
                  Customer-Centric Approach
                </p>
              </li>
              <li className="flex gap-3 mb-5" data-aos="fade-up">
                <div className="w-5 h-5 p-1 bg-[#353382] rounded-full flex justify-center items-center">
                  <Check color="#fff" size={14} />
                </div>
                <p className="text-sm text-gray-800">
                  Warranty & Post-Installation Support
                </p>
              </li>
              {/* ))} */}
            </ul>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default WhyChooseUs;
