import { Phone } from "lucide-react";
import React from "react";

const FloatingCall = () => {
  return (
    <div className="relative ">
      {" "}
      {/* Moved group here */}
      <a
        target="_blank"
        href="tel:+971559563722"
        className="rounded-full relative group transition-all mb-2 cursor-pointer duration-[0.2s] hidden md:flex p-2.5 hover:bg-[#4e4d92] text-white bg-[#343286]"
      >
        <Phone className="text-2xl" />
        <div className="absolute bg-[#343286] top-2 -left-[75px] opacity-0 group-hover:opacity-100 group-hover:bg-[#4e4d92] transition-opacity duration-300 py-1 -z-10 rounded-lg text-sm px-4 text-white">
          Call now
        </div>
      </a>
    </div>
  );
};

export default FloatingCall;
