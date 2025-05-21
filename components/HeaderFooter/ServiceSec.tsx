"use client";
import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { serviceData } from "../../lib/serviceData";

const ServiceSec = ({ isPage }: { isPage?: boolean }) => {
  return (
    <section className="relative z-20 overflow-hidden py-10  md:pt-16">
      <div className="mx-auto max-w-[1190px] max-sm:px-4 sm:px-8 xl:px-0">
        {/* Header Section */}
        <div className="relative z-10 mb-12 text-center">
          {/* <span className="inline-flex items-center gap-2 rounded-full px-4.5 py-1.5 text-sm font-medium border border-gray-500 text-gray-800 mb-4">
            <span className="text-[11px]">Our Services</span>
          </span> */}
          <h2
            className="mb-4.5 text-2xl font-bold text-gray-800 heading-all sm:text-4xl uppercase xl:text-4xl"
            data-aos="fade-up"
          >
            End-to-End IT & Surveillance Services
          </h2>
          <p
            className="mx-auto max-w-[714px] font-medium text-gray-600"
            data-aos="fade-up"
          >
            We install, configure, and maintain systems that keep your business
            secure and connected — offering end-to-end solutions from CCTV and
            IT infrastructure to web development and digital branding. From
            biometrics to branding, we deliver reliable surveillance, seamless
            networking, and creative digital services under one roof.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className={``}>
          {/* Column 1 */}
          <div className="space-y-7.5  md:flex md:justify-center grid-cols-1 max-sm:place-items-center gap-5 max-sm:mx-1.5">
            <div
              className="relative overflow-hidden md:max-w-[300px] w-full rounded-[19px] md:h-[410px] h-auto bg-gray-100 bg-opacity-50 backdrop-blur-md p-6  from-purple-500/30 to-pink-500/30"
              data-aos="fade-up"
            >
              <div
                className="flex flex-col items-center gap-3"
                data-aos="fade-up"
              >
                <div className="relative h-12 w-12 mt-3 overflow-hidden ">
                  <Image
                    src={"/icon/cctv1.png"}
                    alt={""}
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="md:text-xl text-2xl heading-all  uppercase  font-semibold text-gray-800">
                    CCTV Service
                  </h3>
                </div>
              </div>
              <div
                className="relative md:my-3 my-6  h-[1px] w-full bg-gray-600"
                data-aos="fade-up"
              ></div>
              <div className="">
                <div className="flex gap-3 mb-1" data-aos="fade-up">
                  <div className="w-4 h-4 p-0.5 mt-1 bg-[#353382] rounded-full flex justify-center items-center">
                    <Check color="#fff" size={16} />
                  </div>
                  <p className="text-sm mb-2 font-[500] text-gray-700">
                    Digital video recording and clients installation.
                  </p>
                </div>
                <div className="flex gap-3 mb-1" data-aos="fade-up">
                  <div className="w-4 h-4 p-0.5 mt-1 bg-[#353382] rounded-full flex justify-center items-center">
                    <Check color="#fff" size={16} />
                  </div>
                  <p className="text-sm mb-2 font-[500] text-gray-700">
                    CCTV camera installation.
                  </p>
                </div>
                <div className="flex gap-3 mb-1" data-aos="fade-up">
                  <div className="w-4 h-4 p-0.5 mt-1 bg-[#353382] rounded-full flex justify-center items-center">
                    <Check color="#fff" size={16} />
                  </div>
                  <p className="text-sm mb-2 font-[500] text-gray-700">
                    Certification of CCTV projects.
                  </p>
                </div>
                <div className="flex gap-3 mb-1" data-aos="fade-up">
                  <div className="w-4 h-4 p-0.5 mt-1 bg-[#353382] rounded-full flex justify-center items-center">
                    <Check color="#fff" size={16} />
                  </div>
                  <p className="text-sm mb-2 font-[500] text-gray-700">
                    IP Camera Installation & Configuration.
                  </p>
                </div>
                <div className="flex gap-3 mb-1" data-aos="fade-up">
                  <div className="w-4 h-4 p-0.5 mt-1 bg-[#353382] rounded-full flex justify-center items-center">
                    <Check color="#fff" size={16} />
                  </div>
                  <p className="text-sm mb-2 font-[500] text-gray-700">
                    Remote Monitoring Setup (Mobile & PC Access).
                  </p>
                </div>
              </div>
            </div>

            <div
              className="relative overflow-hidden md:max-w-[300px] w-full rounded-[19px] md:h-[410px] h-auto bg-gray-100 bg-opacity-50 backdrop-blur-md p-6  from-purple-500/30 to-pink-500/30"
              data-aos="fade-up"
            >
              <div
                className="flex flex-col justify-center  items-center gap-3"
                data-aos="fade-up"
              >
                <div className="relative h-12 w-12 mt-3 overflow-hidden ">
                  <Image
                    src={"/icon/cloud-service1.png"}
                    alt={""}
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="md:text-xl text-2xl heading-all uppercase text-center  font-semibold text-gray-800">
                    Networking Service
                  </h3>
                </div>
              </div>
              <div
                className="relative md:my-3 my-6  h-[1px] w-full bg-gray-600"
                data-aos="fade-up"
              ></div>
              <div className="">
                <div className="flex gap-3 mb-1" data-aos="fade-up">
                  <div className="w-4 h-4 p-0.5 mt-1 bg-[#353382] rounded-full flex justify-center items-center">
                    <Check color="#fff" size={16} />
                  </div>
                  <p className="text-sm mb-2 font-[500] text-gray-700">
                    Computer Assembling & Hardware Setup.
                  </p>
                </div>
                <div className="flex gap-3 mb-1" data-aos="fade-up">
                  <div className="w-4 h-4 p-0.5 mt-1 bg-[#353382] rounded-full flex justify-center items-center">
                    <Check color="#fff" size={16} />
                  </div>
                  <p className="text-sm mb-2 font-[500] text-gray-700">
                    System Troubleshooting & Diagnostics.
                  </p>
                </div>
                <div className="flex gap-3 mb-1" data-aos="fade-up">
                  <div className="w-4 h-4 p-0.5 mt-1 bg-[#353382] rounded-full flex justify-center items-center">
                    <Check color="#fff" size={16} />
                  </div>
                  <p className="text-sm mb-2 font-[500] text-gray-700">
                    Data Recovery & Backup Solutions.
                  </p>
                </div>
                <div className="flex gap-3 mb-1" data-aos="fade-up">
                  <div className="w-4 h-4 p-0.5 mt-1 bg-[#353382] rounded-full flex justify-center items-center">
                    <Check color="#fff" size={16} />
                  </div>
                  <p className="text-sm mb-2 font-[500] text-gray-700">
                    Regular System Servicing & Cleaning.
                  </p>
                </div>
                <div className="flex gap-3 mb-1" data-aos="fade-up">
                  <div className="w-4 h-4 p-0.5 mt-1 bg-[#353382] rounded-full flex justify-center items-center">
                    <Check color="#fff" size={16} />
                  </div>
                  <p className="text-sm mb-2 font-[500] text-gray-700">
                    LAN & WAN Network Setup.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="relative overflow-hidden md:max-w-[300px] w-full rounded-[19px] md:h-[410px] h-auto bg-gray-100 bg-opacity-50 backdrop-blur-md p-6  from-purple-500/30 to-pink-500/30"
              data-aos="fade-up"
            >
              <div
                className="flex flex-col justify-center  items-center gap-3"
                data-aos="fade-up"
              >
                <div className="relative h-12 w-12 mt-3 overflow-hidden ">
                  <Image
                    src={"/icon/fingerprint1.png"}
                    alt={""}
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="md:text-xl text-2xl heading-all uppercase text-center  font-semibold text-gray-800">
                    Bio-Metric Service
                  </h3>
                </div>
              </div>
              <div
                className="relative md:my-3 my-6  h-[1px] w-full bg-gray-600"
                data-aos="fade-up"
              ></div>
              <div className="">
                <div className="flex gap-3 mb-1" data-aos="fade-up">
                  <div className="w-4 h-4 p-0.5 mt-1 bg-[#353382] rounded-full flex justify-center items-center">
                    <Check color="#fff" size={16} />
                  </div>
                  <p className="text-sm mb-2 font-[500] text-gray-700">
                    Annual Maintenance Contracts for Servers, Workstations,
                    Printers, and Plotters.
                  </p>
                </div>
                <div className="flex gap-3 mb-1" data-aos="fade-up">
                  <div className="w-4 h-4 p-0.5 mt-1 bg-[#353382] rounded-full flex justify-center items-center">
                    <Check color="#fff" size={16} />
                  </div>
                  <p className="text-sm mb-2 font-[500] text-gray-700">
                    Access Control System Installation & Configuration.
                  </p>
                </div>
                <div className="flex gap-3 mb-1" data-aos="fade-up">
                  <div className="w-4 h-4 p-0.5 mt-1 bg-[#353382] rounded-full flex justify-center items-center">
                    <Check color="#fff" size={16} />
                  </div>
                  <p className="text-sm mb-2 font-[500] text-gray-700">
                    PABX Installation & Configuration.
                  </p>
                </div>
                <div className="flex gap-3 mb-1" data-aos="fade-up">
                  <div className="w-4 h-4 p-0.5 mt-1 bg-[#353382] rounded-full flex justify-center items-center">
                    <Check color="#fff" size={16} />
                  </div>
                  <p className="text-sm mb-2 font-[500] text-gray-700">
                    Biometric Time Attendance System Setup.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {isPage && (
          <div className="flex justify-center max-sm:mt-8 mt-3 ">
            <Link href={"/services"} data-aos={"fade-up"} className=" mx-auto ">
              <button className="border border-gray-600 text-sm rounded-md  px-5 py-1.5 !cursor-pointer">
                Know more
              </button>
            </Link>
          </div>
        )}
        {/* Show More Button */}
        {/* {!showAll && (
          <div className="absolute inset-x-0 bottom-20 flex justify-center bg-gradient-to-t from-gray-900 pb-8 pt-32 transition-opacity duration-300">
            <button
              type="button"
              className="relative top-20 mx-auto -mt-7.5 flex rounded-lg px-4.5 py-3 text-sm font-semibold text-white border border-transparent bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition duration-300 ease-in transform translate-y-0"
              onClick={handleShowMore}
            >
              Okay, I get the point
            </button>
          </div>
        )} */}
      </div>
    </section>
  );
};

export default ServiceSec;
