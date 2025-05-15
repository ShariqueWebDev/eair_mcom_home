import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <div>
      <section className="relative w-full md:h-screen h-[80svh] flex items-center md:px-20 px-5 text-white overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: "url('/banner-bg.webp')" }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10 md:w-1/2 w-full mt-12">
          <h1 className="text-2xl uppercase max-sm:text-center md:text-5xl font-bold leading-tight mb-4 heading-all">
            Innovate, Integrate, Elevate - ELV Partner For Seamless Solutions
          </h1>
          <p className=" text-sm mb-6 text-gray-200 max-sm:text-center">
            We build modern solutions that drive results Web Development,{" "}
            <br className="md:flex hidden" />
            Digital Marketing, and more.
          </p>
          <div className="max-sm:flex justify-center items-center">
            <Link
              href="#contact"
              className="inline-block px-6 py-2 text-sm border border-white text-white font-semibold rounded-md shadow-lg transition duration-300"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
