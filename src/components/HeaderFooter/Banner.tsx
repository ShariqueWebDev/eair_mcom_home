import Link from "next/link";
import React from "react";
import EmblaCarousel from "./EmbalBannerCarousel/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";
import "./EmbalBannerCarousel/embla.css";
const OPTIONS: EmblaOptionsType = {};
// const SLIDE_COUNT = 5;
// const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export type SlidesDataProps = {
  title: string;
  subtitle: React.ReactElement;
  imgPath: string;
};

const slidesData: SlidesDataProps[] = [
  {
    title: "Innovate, Integrate, Elevate - ELV Partner For Seamless Solutions",
    subtitle: (
      <div>
        Your One-Stop ELV Partner for Smarter, Safer,{" "}
        <br className="max-sm:hidden" /> and Connected Infrastructure.
      </div>
    ),
    imgPath: "/banner-bg/banner1.webp",
  },
  {
    title: "Smart License Plate Detection",
    subtitle: <div>ANPR Cameras Monitoring Urban Traffic Seamlessly</div>,

    imgPath: "/banner-bg/licence-detec.webp",
  },
  {
    title: "Smart Visitor Digital Log Book",
    subtitle: (
      <div>
        Paperless Entry with Auto Face Capture, <br className="max-sm:hidden" />{" "}
        Real-Time Reports & Multilingual Experience
      </div>
    ),

    imgPath: "/banner-bg/log-book1.webp",
  },
  {
    title: "Advanced Video Management Server (VMS)",
    subtitle: (
      <div>
        4/7 Reliable Recording, Smart Alerts & Seamless{" "}
        <br className="max-sm:hidden" /> CMS Integration with H.265+ Support
      </div>
    ),

    imgPath: "/banner-bg/video-manag.webp",
  },
  {
    title: "Queue Management & Digital Signage Solutions",
    subtitle: (
      <div>
        Streamline Customer Flow with Centralized Control,{" "}
        <br className="max-sm:hidden" /> Multilingual Support & Smart
        Notifications
      </div>
    ),

    imgPath: "/banner-bg/queue-manag.webp",
  },
];

const Banner = () => {
  return (
    <div>
      <EmblaCarousel slides={slidesData} options={OPTIONS} />
    </div>
  );
};

export default Banner;
