import { Phone } from "lucide-react";
import React from "react";

const FloatingCall = () => {
  return (
    <div>
      <a
        target="_blank"
        href="tel:+971559563722"
        className={` rounded-full transition-all mb-2 cursor-pointer duration-[0.2s] ease-out hidden md:flex p-2.5 hover:bg-[#4e4d92]  text-white  bg-[#343286]`}
      >
        <Phone className="text-2xl" />
      </a>
    </div>
  );
};

export default FloatingCall;
