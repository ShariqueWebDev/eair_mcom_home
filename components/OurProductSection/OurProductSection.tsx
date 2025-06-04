import React from "react";
import Wrapper from "../Others/Wrapper";
import EmblaCarouselProductSection from "./EmblaCarouselProductSection";
import { EmblaOptionsType } from "embla-carousel";
export const OPTIONS: EmblaOptionsType = {};

export type slideProductDataProps = {
  id: number;
  title: string;
  subtitle: string;
  imgPath: string;
  features: string[];
};

const OurProductSection = () => {
  const slidesData: slideProductDataProps[] = [
    {
      id: 1,
      title: "MC-IPCWD8M",
      subtitle: "Smart AI Black Light WDR Box Camera",
      imgPath: "/productImg/d8m.webp",
      features: [
        `1/2.8" 8MP SONY CMOS Sensor`,
        `Support H.265+, H.265, H.264 encoding`,
        `Support soft photosensitivity: dual light mode, full color mode, infrared mode`,
        `Support intelligent analysis: accurate human detection, area detection, tripwire detection`,
        `Support voice intercom, voice broadcast, custom voice`,
        `Support image flip, support digital wide dynamic`,

        `Supporting  Onvif`,
        `Provide SDK (WINDOWS, Android, Linux) development kit`,
      ],
    },
    {
      id: 2,
      title: "MC-IPCLW777",
      subtitle: "HD IPC IR Vandal proof Dome Camera",
      imgPath: "/productImg/w777.webp",

      features: [
        `1/2.8" 5MP SONY CMOS Sensor`,
        `Support H.265+, H.265, H.264 encoding`,
        `Support soft photosensitivity: dual light mode, full color mode, infrared mode`,
        `Support intelligent analysis: accurate human detection, area detection, tripwire detection`,
        `Support voice intercom, voice broadcast, custom voice`,
        `Support image flip, support digital wide dynamic`,
        `Supporting  Onvif`,
        `Provide SDK (WINDOWS, Android, Linux) development kit`,
      ],
    },
    {
      id: 3,
      title: "MC-IPCBFX773",
      subtitle: "HD IPC IR Vandal proof Varifocal Dome Camera",
      imgPath: "/productImg/f773.webp",

      features: [
        `1/2.8" 5MP SONY CMOS Sensor`,
        `Support H.265+, H.265, H.264 encoding`,
        `Support soft photosensitivity: dual light mode, full color mode, infrared mode`,
        `Support intelligent analysis: accurate human detection, area detection, tripwire detection`,
        `Support voice intercom, voice broadcast, custom voice`,
        `Support image flip, support digital wide dynamic`,
        `Supporting  Onvif`,

        `Provide SDK (WINDOWS, Android, Linux) development kit`,
      ],
    },
    {
      id: 4,
      title: "MC-IPCDFX774",
      subtitle: "HD IPC IR Vandalproof Dome Camera",
      imgPath: "/productImg/x774.webp",

      features: [
        `1/2.8" 5MP SONY CMOS Sensor`,
        `Support H.265+, H.265, H.264 encoding`,
        `Support soft photosensitivity: dual light mode, full color mode, infrared mode`,
        `Support intelligent analysis: accurate human detection, area detection, tripwire detection`,
        `Support voice intercom, voice broadcast, custom voice`,
        `Support image flip, support digital wide dynamic`,
        `Supporting  Onvif`,

        `Provide SDK (WINDOWS, Android, Linux) development kit`,
      ],
    },
    {
      id: 5,
      title: "MC-IPCBFX776",
      subtitle: "HD IPC IR Bullet Camera",
      imgPath: "/productImg/x776.webp",

      features: [
        `1/2.8" 5MP SONY CMOS Sensor`,
        `Support H.265+, H.265, H.264 encoding`,
        `Support soft photosensitivity: dual light mode, full color mode, infrared mode`,
        `Support intelligent analysis: accurate human detection, area detection, tripwire detection`,
        `Support voice intercom, voice broadcast, custom voice`,
        `Support image flip, support digital wide dynamic`,
        `Supporting  Onvif`,

        `Provide SDK (WINDOWS, Android, Linux) development kit`,
      ],
    },
    {
      id: 6,
      title: "MC-IPCBFX775",
      subtitle: "HD IPC IR Vandal proof Varifocal Bullet Camera",
      imgPath: "/productImg/x775.webp",

      features: [
        `1/2.8" 5MP SONY CMOS Sensor`,
        `Support H.265+, H.265, H.264 encoding`,
        `Support soft photosensitivity: dual light mode, full color mode, infrared mode`,
        `Support intelligent analysis: accurate human detection, area detection, tripwire detection`,
        `Support voice intercom, voice broadcast, custom voice`,
        `Support image flip, support digital wide dynamic`,
        `Supporting  Onvif`,

        `Provide SDK (WINDOWS, Android, Linux) development kit`,
      ],
    },
  ];
  return (
    <Wrapper className="md:py-16 py-10">
      <div className="">
        <h3
          className="mb-7 text-2xl font-bold text-gray-800 heading-all sm:text-4xl uppercase xl:text-4xl text-center"
          data-aos="fade-up"
        >
          Our Lastest Products
        </h3>
        <div className="">
          <EmblaCarouselProductSection
            key={""}
            slides={slidesData}
            options={OPTIONS}
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default OurProductSection;
