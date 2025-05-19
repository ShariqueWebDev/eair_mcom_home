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
];

const OurClients = () => {
  return (
    <Wrapper>
      <div className="templateContainer  text-center py-10 lg:py-14 heading-all space-y-10 bg-white  ">
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
            duration="200s"
            bgColor="#fff"
            bgAccentColor="#fff"
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default OurClients;
