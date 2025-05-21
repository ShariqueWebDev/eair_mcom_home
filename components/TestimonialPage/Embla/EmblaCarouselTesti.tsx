import React, { ReactHTMLElement, ReactNode } from "react";
import { EmblaOptionsType } from "embla-carousel";
import { DotButton, useDotButton } from "./EmblaCarouselDotButtonTesti";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtonsTesti";
import useEmblaCarousel from "embla-carousel-react";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
  // components: ReactNode;
};

const testimonialData = [
  {
    review:
      "Mcom provided and installed a cutting-edge CCTV central monitoring system at our banking facility. The integration with intrusion alarms and real-time streaming capability has significantly elevated our security standards.",
    name: "Hamad",
    designation: "Client",
    imgPath: "/profile/profile-1.webp",
  },
  {
    review:
      "We partnered with Mcom to upgrade our vehicle access and monitoring systems with ANPR and automated gate barriers. The accuracy of number plate recognition—even at high speeds—is impressive.",
    name: "Marwan",
    designation: "Client",
    imgPath: "/profile/profile-2.webp",
  },
  {
    review:
      "Mcom’s biometric fingerprint time attendance systems have helped us streamline employee check-ins with accuracy and ease. The devices are reliable, user-friendly, and support both fingerprint and RFID.",
    name: "Zayed",
    designation: "Client",
    imgPath: "/profile/profile-3.webp",
  },
  {
    review:
      "Our jewelry store required a robust VMS with 24/7 monitoring capabilities. Mcom delivered a comprehensive solution with multibrand NVR support, group camera views, and seamless playback. ",
    name: "Fahad",
    designation: "Client",
    imgPath: "/profile/profile-4.webp",
  },
];

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="embla__testimonail ">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {testimonialData.map((item, index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number">
                <div className="space-y-5 text-center">
                  <h3
                    className="text-gray-700 font-normal max-sm:text-base text-xl"
                    data-aos="fade-up"
                  >
                    {item?.review}
                  </h3>
                  <div className="space-y-2 flex flex-col justify-center items-center">
                    <h4 className="text-xl font-medium" data-aos="fade-up">
                      {item?.name}
                    </h4>
                    <p className="text-gray-400 text-sm" data-aos="fade-up">
                      {item?.designation}
                    </p>
                    <div
                      className="w-16 h-16 !mt-7 rounded-full overflow-hidden"
                      data-aos="fade-up"
                    >
                      <img
                        src={item?.imgPath}
                        alt="Testimonial"
                        className="w-full h-full object-top object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls sm:relative" data-aos="fade-up">
        <div className="embla__buttons max-sm:!flex gap-3">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        {/* <div className="embla__dots">
          {scrollSnaps.map((_: any, index: number) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default EmblaCarousel;
