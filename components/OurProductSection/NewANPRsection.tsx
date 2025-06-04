import React from "react";
import { ANPRslidesData } from "./ANPRSection";
import Image from "next/image";
import { Check } from "lucide-react";

const NewANPRsection = () => {
  return (
    <div>
      <div className="md:px-20 px-4 md:mt-16 mt-10">
        {/* <ANPRSection /> */}
        <h4
          className="mb-4.5 text-2xl text-center font-bold text-gray-800 heading-all sm:text-4xl uppercase xl:text-4xl"
          data-aos="fade-up"
        >
          Explore Our ANPR Systems
        </h4>
        {ANPRslidesData?.map((item, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={index}
              className={`flex md:gap-10 gap-5 flex-col-reverse justify-center items-center mt-7 ${
                isEven ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Image Section */}
              <div className="md:w-1/2 w-full">
                <div className="flex justify-center flex-col items-center">
                  <div
                    className="max-w-[580px] w-full md:h-[350px] rounded-lg overflow-hidden "
                    data-aos="fade-up"
                  >
                    <Image
                      src={item?.imgPath}
                      alt={item?.title}
                      className="w-full h-full object-cover object-center"
                      width={1600}
                      height={700}
                    />
                  </div>
                </div>
              </div>

              {/* Text Section */}
              <div className="z-10 m py-3 bg-white rounded-lg md:w-1/2 w-full ">
                <h4
                  className="md:text-3xl text-xl mb-5 heading-all font-semibold"
                  data-aos="fade-up"
                >
                  {item?.title}
                </h4>
                <ul>
                  {item?.features?.map((feature, fIndex) => (
                    <li
                      key={fIndex}
                      className="flex gap-3 text-gray-600 mb-3 tracking-wide text-sm items-center"
                      data-aos="fade-up"
                    >
                      <span className="bg-[#2d2f95] rounded-full p-0.5">
                        <Check size={11} color="#fff" />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NewANPRsection;
