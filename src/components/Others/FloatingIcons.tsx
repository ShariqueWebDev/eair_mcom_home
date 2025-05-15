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
        href="https://wa.me/+917718093407"
        className={` rounded-full transition-all cursor-pointer duration-[0.2s] ease-out hidden md:flex p-2.5  text-white  bg-green-600  hover:bg-green-800`}
      >
        <FaWhatsapp className="text-2xl" />
      </a>
    </div>
  );
};

export default SocialMediaButton;
