"use client";
import React from "react";
// import TopBanner from "../TopBanner/TopBanner";
// import PathName from "../PathName/PathName";
// import Wrapper from "../Wrapper/Wrapper";
import { EmblaOptionsType } from "embla-carousel";
import "../TestimonialPage/Embla/emblaTesti.css";
import EmblaCarousel from "./Embla/EmblaCarouselTesti";
import TestimonialCard from "./TestimonialCard";

const TestimonialSection = () => {
  const OPTIONS: EmblaOptionsType = {};
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  const breadCrumData = [
    { name: "Home", homePath: "/" },
    { name: "Testimonial" },
  ];

  return (
    <div className="bg-gray-100 md:pt-16 py-10 max-sm:px-5 ">
      <>
        <h4
          className="text-center font-semibold md:text-4xl text-3xl text-gray-800 heading-all uppercase"
          data-aos="fade-up"
        >
          Our Testimonials
        </h4>
        <div className="">
          <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </div>
      </>
    </div>
  );
};

export default TestimonialSection;
