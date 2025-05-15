import { Check } from "lucide-react";
import Image from "next/image";
import React from "react";

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
    // "Dedicated Project Managers",
  ];

  return (
    <div className="bg-gray-100 md:py-16 py-10 md:px-20 px-5">
      <div className="text-center mb-10">
        <h2 className="mb-4 text-2xl font-bold text-gray-800 heading-all sm:text-4xl">
          Focus On Getting Our Jobs Done
        </h2>
        <p className="max-w-[714px] mx-auto text-center font-medium text-gray-600">
          We believe in delivering results with precision, professionalism, and
          a no-excuse attitude. Our team is committed to completing every
          project efficiently—whether it’s a single system installation or a
          large-scale infrastructure setup. With a focus on quality,
          transparency, and speed, we ensure that your expectations are not just
          met, but exceeded.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-start gap-10">
        {/* Left Column */}
        <ul className="bg-white w-full max-w-[350px] p-6 rounded-lg shadow-sm">
          {WhyChoosePoints.slice(0, 5).map((item, index) => (
            <li key={index} className="flex gap-3 mb-3">
              <div className="w-5 h-5 p-1 bg-[#353382] rounded-full flex justify-center items-center">
                <Check color="#fff" size={14} />
              </div>
              <p className="text-sm text-gray-800">{item}</p>
            </li>
          ))}
        </ul>

        {/* Center Image */}

        {/* Right Column */}
        <ul className="bg-white w-full max-w-[350px] p-6 rounded-lg shadow-sm">
          {WhyChoosePoints.slice(5).map((item, index) => (
            <li key={index} className="flex gap-3 mb-3">
              <div className="w-5 h-5 p-1 bg-[#353382] rounded-full flex justify-center items-center">
                <Check color="#fff" size={14} />
              </div>
              <p className="text-sm text-gray-800">{item}</p>
            </li>
          ))}
        </ul>
        <div className="w-full max-w-[300px] h-[210px] overflow-hidden rounded-lg shadow-sm">
          <Image
            src={"/why-choose.webp"}
            width={1200}
            height={900}
            alt="Why Choose Us"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
