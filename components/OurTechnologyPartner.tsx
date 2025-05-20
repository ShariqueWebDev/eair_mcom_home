import { SquareArrowOutUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import LogoWall from "./LogoWall";
import Wrapper from "./Others/Wrapper";
// import { logos } from "@/lib/Constants";

export const logos: { imgUrl: string; altText: string }[] = [
  {
    imgUrl: "/technology-partner/1.png",
    altText: "",
  },
  {
    imgUrl: "/technology-partner/2.png",
    altText: "",
  },
  {
    imgUrl: "/technology-partner/3.png",
    altText: "",
  },
  {
    imgUrl: "/technology-partner/4.png",
    altText: "",
  },
  {
    imgUrl: "/technology-partner/5.png",
    altText: "",
  },
  {
    imgUrl: "/technology-partner/6.png",
    altText: "",
  },
  {
    imgUrl: "/technology-partner/7.png",
    altText: "",
  },
  {
    imgUrl: "/technology-partner/8.png",
    altText: "",
  },
  {
    imgUrl: "/technology-partner/9.png",
    altText: "",
  },
  {
    imgUrl: "/technology-partner/10.png",
    altText: "",
  },
  {
    imgUrl: "/technology-partner/11.png",
    altText: "",
  },
  {
    imgUrl: "/technology-partner/12.png",
    altText: "",
  },
  {
    imgUrl: "/technology-partner/13.png",
    altText: "",
  },
  {
    imgUrl: "/technology-partner/14.png",
    altText: "",
  },
  {
    imgUrl: "/technology-partner/15.png",
    altText: "",
  },
  {
    imgUrl: "/technology-partner/16.png",
    altText: "",
  },
  {
    imgUrl: "/technology-partner/17.png",
    altText: "",
  },
  {
    imgUrl: "/technology-partner/18.png",
    altText: "",
  },
  {
    imgUrl: "/technology-partner/19.png",
    altText: "",
  },
  {
    imgUrl: "/technology-partner/20.png",
    altText: "",
  },
  {
    imgUrl: "/technology-partner/21.png",
    altText: "",
  },
];

const OurTechnologyPartner = () => {
  return (
    <Wrapper>
      <div className="templateContainer  text-center py-10 lg:py-14 heading-all space-y-10 bg-white  ">
        <div className="space-y-3">
          <h2
            data-aos="fade-up"
            className="text-center uppercase text-gray-800 font-semibold text-3xl heading-all lg:text-4xl tracking-wide"
          >
            Our Technology partners
          </h2>
          <div className="flex items-center justify-center">
            <p
              data-aos="fade-up"
              className="lg:max-w-[40rem] text-center font-normal text-gray-600 text-sm tracking-wider"
            >
              We are proud to collaborate with a diverse network of leading
              global technology partners who share our commitment to innovation,
              quality, and excellence.
            </p>
          </div>
        </div>
        <div data-aos="fade-up" style={{ width: "100%", position: "relative" }}>
          <LogoWall
            items={logos}
            direction="horizontal"
            pauseOnHover={false}
            size="clamp(8rem, 1rem + 20vmin, 25rem)"
            duration="70s"
            bgColor="#fff"
            bgAccentColor="#fff"
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default OurTechnologyPartner;
