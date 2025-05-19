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
import { SlidesDataProps } from "../Banner";
import Aos from "aos";
import "aos/dist/aos.css";
// import Wrapper from "@/components/Others/Wrapper";
import Image from "next/image";
import Wrapper from "../../Others/Wrapper";

type PropType = {
  slides: SlidesDataProps[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = ({ slides, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ ...options, loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
      // disable: "mobile", // Disable animations on mobile for performance
    });
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
      Aos.refreshHard(); // Re-trigger AOS on slide change
    };

    emblaApi.on("select", onSelect);

    // Auto-scrolling logic
    const autoScrollInterval = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000); // Change slide every 3 seconds

    return () => {
      emblaApi.off("select", onSelect);
      clearInterval(autoScrollInterval); // Clean up interval
    };
  }, [emblaApi]);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((item: SlidesDataProps, index: number) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number">
                <Wrapper className=" relative w-full md:h-screen h-[80svh] flex items-center text-white overflow-hidden">
                  <section
                  // key={selectedIndex === index ? `slide-${index}` : undefined}
                  >
                    <div
                      className="absolute inset-0 bg-center bg-cover"
                      // style={{ backgroundImage: `url(${item?.imgPath})` }}
                    />

                    {/* <div className="absolute inset-0 bg-black/60" /> */}
                    <div className="absolute inset-0">
                      <Image
                        src={item?.imgPath}
                        alt={item?.title}
                        fill
                        style={{ objectFit: "cover" }}
                        quality={75}
                        priority={index === 0} // Prioritize first slide
                        loading={index > 0 ? "lazy" : undefined} // Lazy load others
                      />
                      <div className="absolute inset-0 bg-black/60" />
                    </div>

                    <div className="relative z-10 md:w-1/2 w-full mt-12">
                      <div
                        className="text-2xl uppercase max-sm:text-center md:text-5xl font-bold leading-tight mb-4 heading-all"
                        data-aos="fade-up"
                      >
                        {item?.title}
                      </div>
                      <div
                        className="text-sm max-sm:mb-6 text-gray-300 max-sm:text-center"
                        data-aos="fade-up"
                        data-aos-delay="200"
                      >
                        {item?.subtitle}
                      </div>
                      <div
                        className="max-sm:flex justify-center items-center"
                        data-aos="fade-up"
                        data-aos-delay="400"
                      >
                        <Link
                          href="/contact"
                          className="inline-block px-6 py-2 uppercase text-sm border border-white text-white font-semibold rounded-md shadow-lg transition duration-300"
                        >
                          Get Started
                        </Link>
                      </div>
                    </div>
                  </section>
                </Wrapper>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Optional Navigation */}
      {/* <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div> */}
    </section>
  );
};

export default EmblaCarousel;
