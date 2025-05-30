"use client";
import React, { useState } from "react";
import { EmblaOptionsType } from "embla-carousel";
import { PrevButton, NextButton, usePrevNextButtons } from "./EmblaStoryButton";
import useEmblaCarousel from "embla-carousel-react";

type Detail = {
  name: string;
  title: string;
  desc: string;
  imgPath: string;
};

type Story = {
  main_title: string;
  details: Detail[];
};

type PropType = {
  slides: Detail[];
  options?: EmblaOptionsType;
};

const storyData: Story[] = [
  {
    main_title: "Hospitality",
    details: [
      {
        name: "Hospitality",
        title: "Novotel Hotel",
        desc: `Large hospitality development on the Blue Waters Island.
1400 WISENET Cameras.`,
        imgPath: "/story-img/hotel1.webp",
      },
      {
        name: "Hospitality",
        title: "The S Hotel",
        desc: `One of the largest indoor theme park in the region.
Situated on the Yas Island, one of the world’s leading leisure and entertainment destination.
1800+ Wisenet cameras`,
        imgPath: "/story-img/hotel2.webp",
      },
      {
        name: "Hospitality",
        title: "C Central Hotel",
        desc: `One of the largest indoor theme park in the region.
          Situated on the Yas Island, one of the world’s leading leisure and entertainment destination.
          1800+ Wisenet cameras`,
        imgPath: "/story-img/hotel3.webp",
      },
      {
        name: "Hospitality",
        title: "Five Hotel",
        desc: `One of the largest indoor theme park in the region.
          Situated on the Yas Island, one of the world’s leading leisure and entertainment destination.
          1800+ Wisenet cameras`,
        imgPath: "/story-img/hotel4.webp",
      },
    ],
  },
  {
    main_title: "Residential",
    details: [
      {
        name: "API Properties",
        title: "API Properties",
        desc: `A modern residential complex with advanced security systems.`,
        imgPath: "/story-img/resident1.webp",
      },
      {
        name: "Ayla Resident",
        title: "Ayla Resident",
        desc: `A modern residential complex with advanced security systems.`,
        imgPath: "/story-img/resident2.webp",
      },
      {
        name: "API Trio Tower",
        title: "API Trio Tower",
        desc: `A modern residential complex with advanced security systems.`,
        imgPath: "/story-img/resident3.webp",
      },
      {
        name: "Masaken Al Muraqqabat 01",
        title: "Masaken Al Muraqqabat 01",
        desc: `A modern residential complex with advanced security systems.`,
        imgPath: "/story-img/resident4.webp",
      },
    ],
  },

  {
    main_title: "Retail",
    details: [
      {
        name: "Retail",
        title: "Palm Strip Mall",
        desc: `A bustling retail plaza with state-of-the-art surveillance.`,
        imgPath: "/story-img/retail1.webp",
      },
      {
        name: "Retail",
        title: "Sunset Mall",
        desc: `A bustling retail plaza with state-of-the-art surveillance.`,
        imgPath: "/story-img/retail2.webp",
      },
    ],
  },
];

const EmblaCarousel: React.FC<PropType> = ({ slides, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="w-full  mx-auto mb-10 mt-10">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex ml-[-1rem] touch-pan-y touch-pinch-zoom">
          {slides.map((slide, index) => (
            <div
              className="md:flex-[0_0_25%] flex-[0_0_100%] min-w-0 pl-4 transform-gpu"
              key={index}
            >
              <div className="  rounded-lg  select-none ">
                <img
                  src={slide.imgPath}
                  alt={slide.title}
                  className="w-full h-[250px] object-cover rounded-lg"
                />
                <div className="py-4">
                  <h3 className="text-xl font-semibold">{slide.title}</h3>
                  {/* <p className="text-sm text-gray-600">{slide.desc}</p> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-[auto_1fr] justify-between gap-6 mt-7">
        <div className="grid grid-cols-2 gap-2 items-center">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
  );
};

const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<string>("Hospitality");
  const selectedStory = storyData.find(
    (story) => story.main_title === selectedCategory
  );
  const slides = selectedStory ? selectedStory.details : [];

  return (
    <div className="p-4 md:px-20 px-4">
      <div className="flex gap-4 mb-6 overflow-x-auto [&::-webkit-scrollbar]:hidden scrollbar-none">
        {storyData.map((story, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(story.main_title)}
            className={`px-4 py-2 rounded-full ${
              selectedCategory === story.main_title
                ? "bg-[#2d2f93] text-white"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            {story.main_title}
          </button>
        ))}
      </div>
      <EmblaCarousel slides={slides} options={{ loop: true }} />
    </div>
  );
};

export default App;
