"use client";
// import { geographyCardData } from "@/lib/constant";
import Image from "next/image";
import React, { useState } from "react";
import {
  FaLeaf,
  FaChartBar,
  FaIndustry,
  FaAppleAlt,
  FaUniversity,
  FaProjectDiagram,
} from "react-icons/fa";
// import GeographiesCard from "../HomeComps/GeographiesCard";
import { FiChevronsRight } from "react-icons/fi";
import { Stethoscope } from "lucide-react";
import Branches from "./Branches";
import { serviceData } from "../../lib/serviceData";

const SectorsWeConsider = () => {
  const [singleService, setSingleService] = useState("cctv-service");

  // const sectors = [
  //   { name: "Project Finance", icon: <FaProjectDiagram /> },
  //   {
  //     name: "Manufacturing",
  //     icon: <FaIndustry />,
  //   },
  //   {
  //     name: "Financial Sector (banks, financial institutions)",
  //     icon: <FaUniversity />,
  //   },
  //   { name: "Cleantech/Green Energy", icon: <FaLeaf /> },
  //   { name: "Food and Agro-Based Industries", icon: <FaAppleAlt /> },
  //   { name: "Commodities Traders", icon: <FaChartBar /> },
  //   { name: "Healthcare", icon: <Stethoscope /> },
  // ];

  const servicesHandler = (data: any) => {
    setSingleService(data);
  };

  return (
    <>
      <div
        className="flex md:flex-row flex-col  MainContainer py-8 gap-2 mt-16"
        data-aos="fade-up"
      >
        <div className="md:w-[50%] border w-full h-full md:sticky md:top-6 static top-0 mx-auto   text-text flex flex-col lg:flex-row gap-5 py-4 md:py-6 lg:py-10 bg-[#2e3096] rounded-lg">
          <div className="py-8 px-4 w-full bg-mainBg text-gray-900 ">
            <h2
              className="text-3xl font-bold mb-4 heading-all text-white uppercase text-center text-"
              data-aos="fade-down"
            >
              Sevices We Providing
            </h2>
            <ul className="space-y-3 ">
              {serviceData.map((sector, index) => (
                <li
                  key={index}
                  className="flex gap-3 items-center bg-white shadow-md p-4 rounded-lg hover:bg-gray-50 transition"
                  // data-aos="fade-down"
                >
                  <div className="text-lg w-7 font-medium">
                    <Image
                      src={sector?.iconPath}
                      width={50}
                      height={50}
                      alt=""
                    />
                  </div>
                  <div className="text-xl font-medium heading-all text-primary mr-4">
                    {sector?.name}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="md:w-[50%] w-full rounded-md ml-5 bg-gray-100">
          <Branches />
        </div>
      </div>
    </>
  );
};

export default SectorsWeConsider;
