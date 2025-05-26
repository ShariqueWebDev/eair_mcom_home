import React from "react";
import EmblaCarousel from "./EmblaStory";

const StorySection = () => {
  return (
    <div>
      <div className="flex md:flex-row flex-col justify-center items-center md:gap-10 gap-5 md:px-20 px-4 mb-3">
        <h3 className=" md:text-3xl text-xl font-semibold heading-all md:w-[45%] w-full">
          Let us tell some stories of how Mcom bridges the gap between Wisenet
          and customers.
        </h3>
        <p className="md:w-[55%] max-sm:text-sm w-full">
          Getting the best security products can drive you crazy if you don’t
          know where to shop. We at Mcom, bring our clients Wisenet products at
          amazing deals. We help clients from all industries and offer solutions
          according to their needs. Here is how connecting with Mcom for
          security solutions can enhance the buying experience.{" "}
        </p>
      </div>
      <EmblaCarousel />
    </div>
  );
};

export default StorySection;
