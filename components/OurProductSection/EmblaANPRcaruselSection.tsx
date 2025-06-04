"use client";
import React, { useEffect, useState } from "react";
import { EmblaOptionsType } from "embla-carousel";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselButton";
import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";
// import { SlidesDataProps } from "../Banner";
import Image from "next/image";
import Wrapper from "../Others/Wrapper";
import { SlidesDataProps } from "../HeaderFooter/Banner";
import { Check } from "lucide-react";

export type slideProductDataProps = {
  id: number;
  title: string;
  subtitle: string;
  imgPath: string;
  features: string[];
};

type PropType = {
  slides: slideProductDataProps[];
  options?: EmblaOptionsType;
};

const EmblaANPRcarouselSection: React.FC<PropType> = ({ slides, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ ...options, loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);

    const autoScrollInterval = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);

    return () => {
      emblaApi.off("select", onSelect);
      clearInterval(autoScrollInterval);
    };
  }, [emblaApi]);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="w-full relative mx-auto bg-gray-100">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y touch-pinch-zoom -ml-0">
          {slides.map((item: slideProductDataProps, index: number) => (
            <div className="flex-[0_0_100%] min-w-0 pl-0 py-10" key={index}>
              <div>
                <Wrapper className=" w-full ">
                  <div
                    // key={selectedIndex === index ? `slide-${index}` : undefined}
                    className="flex md:flex-row md:gap-10 gap-5
                     flex-col-reverse justify-center items-center"
                  >
                    <div className="md:w-1/2 w-full ">
                      <div className="flex justify-center  flex-col items-center">
                        {/* <h3
                          className="md:text-3xl text-2xl  font-semibold heading-all"
                          data-aos="fade-up"
                        >
                          {item?.title}
                        </h3> */}
                        {/* <h4
                          className="text-sm text-gray-500 max-sm:text-center "
                          data-aos="fade-up"
                        >
                          {item?.subtitle}
                        </h4> */}

                        <div
                          className="max-w-[580px] rounded-lg overflow-hidden mt-5"
                          data-aos="fade-up"
                        >
                          <Image
                            src={item?.imgPath}
                            alt={item?.title}
                            className="w-full h-full object-cover object-center   "
                            width={1600}
                            height={700}
                            // quality={75}
                            // priority={index === 0}

                            // loading={index > 0 ? "lazy" : undefined}
                          />
                        </div>
                      </div>
                      {/* <div className="absolute inset-0 bg-black/60" /> */}
                    </div>
                    <div className="z-10 md:p-11 p-3 bg-white rounded-lg md:w-1/2 w-full md:mt-12 mt-0">
                      <h4
                        className="md:text-3xl text-xl mb-5 heading-all font-semibold"
                        data-aos="fade-up"
                      >
                        {item?.title}
                      </h4>
                      <ul className="">
                        {item?.features?.map((feature, index) => {
                          return (
                            <li
                              className="flex gap-3 text-gray-600 mb-3 text-sm items-center"
                              data-aos="fade-up"
                            >
                              <span className="bg-[#2d2f95] rounded-full  p-0.5">
                                <Check size={11} color="#fff" />
                              </span>
                              {feature}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </Wrapper>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Optional Navigation */}
      <div className="absolute top-1/2 left-0 w-full flex justify-between px-3 -translate-y-1/2 pointer-events-none">
        <div className="pointer-events-auto">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        </div>
        <div className="pointer-events-auto">
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
  );
};

export default EmblaANPRcarouselSection;
