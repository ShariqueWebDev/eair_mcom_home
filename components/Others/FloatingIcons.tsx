"use client";
import {
  Facebook,
  Instagram,
  MessageCircle,
  Phone,
  Twitter,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const SocialMediaButton = () => {
  const [btnPosition, setBtnPosition] = useState("bottom-5");
  const [isOpen, setIsOpen] = useState(false);

  const toggleSocialButtons = () => {
    setIsOpen(!isOpen);
  };

  const btnPositionHandler = () => {
    if (window.scrollY > 700) {
      setBtnPosition("bottom-[68px]");
    } else {
      setBtnPosition("bottom-5");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", btnPositionHandler);
    return () => window.removeEventListener("scroll", btnPositionHandler);
  }, []);

  return (
    <div className={``}>
      <a
        target="_blank"
        href="https://wa.me/+971559563722"
        className={` rounded-full transition-all relative group cursor-pointer duration-[0.2s] ease-out hidden md:flex p-2.5  text-white  bg-green-600  hover:bg-green-800`}
      >
        <FaWhatsapp className="text-2xl" />
        <div className="">
          <div className="absolute bg-green-600 top-2 -left-[85px] opacity-0 group-hover:opacity-100 group-hover:bg-green-800 transform translate-x-100 group-hover:translate-x-0 transition-opacity duration-300 py-1 -z-10 rounded-lg text-sm px-4 text-white">
            Whatsapp
          </div>
        </div>
      </a>
    </div>
  );
};

export default SocialMediaButton;
