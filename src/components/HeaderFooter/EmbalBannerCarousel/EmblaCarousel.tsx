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
      once: false,
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
    }, 3000); // Change slide every 3 seconds

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
                <section
                  key={selectedIndex === index ? `slide-${index}` : undefined}
                  className="relative w-full md:h-screen h-[80svh] flex items-center md:px-20 px-5 text-white overflow-hidden"
                >
                  <div
                    className="absolute inset-0 bg-center bg-cover"
                    style={{ backgroundImage: `url(${item?.imgPath})` }}
                  />
                  <div className="absolute inset-0 bg-black/60" />

                  <div className="relative z-10 md:w-1/2 w-full mt-12">
                    <div
                      className="text-2xl uppercase max-sm:text-center md:text-5xl font-bold leading-tight mb-4 heading-all"
                      data-aos="fade-up"
                    >
                      {item?.title}
                    </div>
                    <p
                      className="text-sm max-sm:mb-6 text-gray-300 max-sm:text-center"
                      data-aos="fade-up"
                      data-aos-delay="200"
                    >
                      {item?.subtitle}
                    </p>
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
