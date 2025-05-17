import { EmblaOptionsType } from "embla-carousel";

export const OPTIONS: EmblaOptionsType = {};
// const SLIDE_COUNT = 5;
// const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export type SlidesDataProps = {
  title: string;
  subtitle: React.ReactElement;
  imgPath: string;
};

export const slidesData: SlidesDataProps[] = [
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

    imgPath: "/banner-bg/license.webp",
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
    title: "Secure & Seamless Access with Biometric Services",
    subtitle: (
      <div>
        Empowering businesses with advanced fingerprint, facial, and retina
        recognition solutions <br className="max-sm:hidden" /> for unmatched
        identity verification and data protection.
      </div>
    ),

    imgPath: "/banner-bg/bio-metric1.webp",
  },
];
