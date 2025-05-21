"use client";
import { Check, MapPin } from "lucide-react";
import Image from "next/image";
import React from "react";

const Branches = () => {
  const [selectedLocation, setSelectedLocation] = React.useState(null);
  const locations = [
    { code: "IN", name: "India", className: "india" },
    { code: "LK", name: "Sri Lanka", className: "srilanka" },
    { code: "NP", name: "Nepal", className: "nepal" },
    { code: "VN", name: "Vietnam", className: "vietnam" },
    { code: "PH", name: "Philippines", className: "philippines" },
    { code: "MV", name: "Maldives", className: "maldives" },
    { code: "KH", name: "Cambodia", className: "cambodia" },
    { code: "SG", name: "Singapore", className: "singapore" },
    { code: "ID", name: "Indonesia", className: "indonesia" },
    { code: "AE", name: "UAE", className: "uae" },
    { code: "SA", name: "Saudi Arabia", className: "ksa" },
    { code: "OM", name: "Oman", className: "oman" },
    { code: "GE", name: "Georgia", className: "georgia" },
    { code: "AZ", name: "Azerbaijan", className: "azerbaijan" },
    { code: "TR", name: "Turkey", className: "turkey" },
    { code: "EU", name: "Europe", className: "europe" },
    { code: "US", name: "USA", className: "usa" },
    { code: "MX", name: "Mexico", className: "mexico" },
    { code: "EG", name: "Egypt", className: "egypt" },
    { code: "MA", name: "Morocco", className: "morocco" },
    { code: "GH", name: "Ghana", className: "ghana" },
    { code: "CI", name: "Ivory Coast", className: "ivorycoast" },
    { code: "KE", name: "Kenya", className: "kenya" },
    { code: "NG", name: "Nigeria", className: "nigeria" },
    { code: "NA", name: "Namibia", className: "namibia" },
    { code: "BW", name: "Botswana", className: "botswana" },
    { code: "ZM", name: "Zambia", className: "zambia" },
    { code: "TZ", name: "Tanzania", className: "tanzania" },
    { code: "ET", name: "Ethiopia", className: "ethiopia" },
    { code: "UG", name: "Uganda", className: "uganda" },
  ];

  return (
    <div className="flex justify-center mt-7 ">
      <div
        className="relative overflow-hidden max-w-[500px] w-full rounded-[19px] md:h-[430px] h-auto bg-gray-100 bg-opacity-50 backdrop-blur-md p-6  from-purple-500/30 to-pink-500/30"
        data-aos="fade-up"
      >
        <div className="flex items-center gap-3" data-aos="fade-up">
          <div className="relative h-12 w-12 overflow-hidden ">
            <Image
              src={"/icon/cctv1.png"}
              alt={""}
              width={48}
              height={48}
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="text-xl md:h-[40px] uppercase  font-semibold text-gray-800">
              CCTV Service
            </h3>
          </div>
        </div>
        <div
          className="relative my-5 h-[1px] w-full bg-gray-400"
          data-aos="fade-up"
        ></div>
        <div className="">
          <div className="flex gap-3 mb-4" data-aos="fade-up">
            <div className="w-4 h-4 p-0.5 mt-1 bg-[#353382] rounded-full flex justify-center items-center">
              <Check color="#fff" size={16} />
            </div>
            <p className="text-sm mb-2 font-[500] text-gray-700">
              Digital video recording and clients installation.
            </p>
          </div>
          <div className="flex gap-3 mb-4" data-aos="fade-up">
            <div className="w-4 h-4 p-0.5 mt-1 bg-[#353382] rounded-full flex justify-center items-center">
              <Check color="#fff" size={16} />
            </div>
            <p className="text-sm mb-2 font-[500] text-gray-700">
              CCTV camera installation.
            </p>
          </div>
          <div className="flex gap-3 mb-4" data-aos="fade-up">
            <div className="w-4 h-4 p-0.5 mt-1 bg-[#353382] rounded-full flex justify-center items-center">
              <Check color="#fff" size={16} />
            </div>
            <p className="text-sm mb-2 font-[500] text-gray-700">
              Certification of CCTV projects.
            </p>
          </div>
          <div className="flex gap-3 mb-4" data-aos="fade-up">
            <div className="w-4 h-4 p-0.5 mt-1 bg-[#353382] rounded-full flex justify-center items-center">
              <Check color="#fff" size={16} />
            </div>
            <p className="text-sm mb-2 font-[500] text-gray-700">
              IP Camera Installation & Configuration.
            </p>
          </div>
          <div className="flex gap-3 mb-4" data-aos="fade-up">
            <div className="w-4 h-4 p-0.5 mt-1 bg-[#353382] rounded-full flex justify-center items-center">
              <Check color="#fff" size={16} />
            </div>
            <p className="text-sm mb-2 font-[500] text-gray-700">
              Remote Monitoring Setup (Mobile & PC Access).
            </p>
          </div>
          <div className="flex gap-3 mb-4" data-aos="fade-up">
            <div className="w-4 h-4 p-0.5 mt-1 bg-[#353382] rounded-full flex justify-center items-center">
              <Check color="#fff" size={16} />
            </div>
            <p className="text-sm mb-2 font-[500] text-gray-700">
              Upgrading Legacy CCTV Systems to HD/IP.
            </p>
          </div>
          <div className="flex gap-3 mb-4" data-aos="fade-up">
            <div className="w-4 h-4 p-0.5 mt-1 bg-[#353382] rounded-full flex justify-center items-center">
              <Check color="#fff" size={16} />
            </div>
            <p className="text-sm mb-2 font-[500] text-gray-700">
              Cloud Storage & Backup Solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Branches;
