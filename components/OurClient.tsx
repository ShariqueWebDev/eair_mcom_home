import { SquareArrowOutUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import LogoWall from "./LogoWall";
import Wrapper from "./Others/Wrapper";
// import { logos } from "@/lib/Constants";

export const logos: { imgUrl: string; altText: string }[] = [
  {
    imgUrl: "/clients/1.webp",
    altText: "",
  },
  {
    imgUrl: "/clients/2.webp",
    altText: "",
  },
  {
    imgUrl: "/clients/3.webp",
    altText: "",
  },
  {
    imgUrl: "/clients/4.webp",
    altText: "",
  },
  {
    imgUrl: "/clients/5.webp",
    altText: "",
  },
  {
    imgUrl: "/clients/6.webp",
    altText: "",
  },
  {
    imgUrl: "/clients/7.png",
    altText: "",
  },
  {
    imgUrl: "/clients/8.png",
    altText: "",
  },
  {
    imgUrl: "/clients/9.png",
    altText: "",
  },
  {
    imgUrl: "/clients/10.png",
    altText: "",
  },
  {
    imgUrl: "/clients/11.png",
    altText: "",
  },
  {
    imgUrl: "/clients/12.png",
    altText: "",
  },
  {
    imgUrl: "/clients/13.png",
    altText: "",
  },
  {
    imgUrl: "/clients/14.png",
    altText: "",
  },
  {
    imgUrl: "/clients/15.png",
    altText: "",
  },
  {
    imgUrl: "/clients/16.png",
    altText: "",
  },
  {
    imgUrl: "/clients/17.png",
    altText: "",
  },
  {
    imgUrl: "/clients/18.png",
    altText: "",
  },
  {
    imgUrl: "/clients/19.png",
    altText: "",
  },
  {
    imgUrl: "/clients/20.png",
    altText: "",
  },
  {
    imgUrl: "/clients/21.png",
    altText: "",
  },
  {
    imgUrl: "/clients/22.png",
    altText: "",
  },
  {
    imgUrl: "/clients/23.png",
    altText: "",
  },
  {
    imgUrl: "/clients/24.png",
    altText: "",
  },
  {
    imgUrl: "/clients/25.png",
    altText: "",
  },
  {
    imgUrl: "/clients/26.png",
    altText: "",
  },
  {
    imgUrl: "/clients/27.png",
    altText: "",
  },
  {
    imgUrl: "/clients/28.png",
    altText: "",
  },
  {
    imgUrl: "/clients/29.png",
    altText: "",
  },
  {
    imgUrl: "/clients/30.png",
    altText: "",
  },
  {
    imgUrl: "/clients/31.png",
    altText: "",
  },
];

const OurClients = () => {
  return (
    <Wrapper>
      <div className="templateContainer  text-center py-10 lg:pb-14 heading-all space-y-10 bg-white  ">
        <div className="space-y-3">
          <h2
            data-aos="fade-up"
            className="text-center text-gray-800 font-semibold text-3xl heading-all lg:text-4xl tracking-wide"
          >
            CLIENTS WE ARE PROUD OF
          </h2>
          <div className="flex items-center justify-center">
            <p
              data-aos="fade-up"
              className="lg:max-w-[40rem] text-center font-normal text-gray-600 text-sm tracking-wider"
            >
              Our clients trust us to deliver exceptional talent that drives
              success across industries, and we take pride in every partnership
              we build.
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

export default OurClients;
