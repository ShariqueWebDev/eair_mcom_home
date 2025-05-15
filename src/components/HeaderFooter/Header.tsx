"use client";
import React, { useEffect, useState } from "react";
import "./style.css";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { menu } from "@/../lib/Menu";
import { Mail, MapPin, Phone } from "lucide-react";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }

      if (currentScrollY > 500) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className={`fixed z-50 w-full md:px-10 transition-all ease-in-out duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        } ${hasScrolled ? "bg-gray-100" : "bg-transparent"}`}
      >
        <div className="templateContainer py-2 flex flex-row-reverse lg:flex-row justify-between items-center">
          {/* Sidebar Menu */}
          <div
            className={`fixed top-0 left-0 w-full h-screen bg-white transform flex items-center ${
              isOpen ? "translate-y-0" : "-translate-y-full"
            } transition-transform duration-500 ease-in-out`}
            style={{
              backgroundImage: "url(/menu-bg.webp)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/70 z-0"></div>

            {/* Content (z-10 to appear above overlay) */}
            <Link className="lg:hidden absolute top-4 left-4 z-10" href={"/"}>
              <Image
                src={"/logo/logo-mcom.png"}
                alt=""
                height={100}
                className="w-32"
                width={200}
              />
            </Link>

            <ul className="templateContainer md:!px-28 flex flex-col items-start !space-y-8 textgray lg:space-y-4 uppercase md:justify-center max-sm:mt-60 h-full z-10">
              {menu.map((item, index) => (
                <li
                  key={index}
                  className={`md:!text-5xl text-2xl font-medium tracking-wide heading-all text-gray-200 hover-class ${
                    pathname === item.url && "active-class"
                  }`}
                >
                  <Link href={item.url}>
                    <span onClick={() => setIsOpen(false)} className="">
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mr-32 z-10 md:block hidden">
              <div className="mb-5">
                <h4 className="uppercase flex items-center gap-2 text-sm font-semibold text-gray-200">
                  <MapPin size={18} />
                  Address
                </h4>
                <p className="text-sm text-gray-400 mt-1 tracking-wide">
                  Office 210, Lulu Office Building, Al Muteena, Dubai, UAE
                </p>
                <hr className="mt-2 text-gray-400" />
              </div>
              <div className="mb-5">
                <h4 className="uppercase text-sm flex items-center gap-2 font-semibold text-gray-200">
                  <Mail size={18} />
                  Email
                </h4>
                <p className="text-sm text-gray-400 mt-1 tracking-wide">
                  sales@mcomcctv.com
                </p>
                <hr className="mt-2 text-gray-400" />
              </div>
              <div>
                <h4 className="uppercase text-sm flex items-center gap-2 font-semibold text-gray-200">
                  <Phone size={18} />
                  Phone
                </h4>
                <p className="text-sm text-gray-400 mt-1 tracking-wide">
                  + (971) 55 956 3722
                </p>
                <hr className="mt-2 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Hamburger Menu */}
          <div className="w-1/2 md:w-1/3 flex items-center justify-end lg:justify-start">
            <button
              className={`hamburger z-50 ${isOpen ? "open" : ""}`}
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <span
                className={`${
                  isOpen ? "bg-[#fff]" : hasScrolled ? "bg-[#000]" : "bg-[#fff]"
                }`}
              ></span>
              <span
                className={`${
                  isOpen ? "bg-[#fff]" : hasScrolled ? "bg-[#000]" : "bg-[#fff]"
                }`}
              ></span>
              <span
                className={`${
                  isOpen ? "bg-[#fff]" : hasScrolled ? "bg-[#000]" : "bg-[#fff]"
                }`}
              ></span>
            </button>
          </div>

          {/* LOGO */}
          <div className="w-1/2 md:w-1/3 flex items-center justify-start lg:justify-center">
            <Link href={"/"}>
              <Image
                src={"/logo/logo-mcom.png"}
                alt=""
                height={100}
                className="w-28"
                width={200}
              />
            </Link>
          </div>

          {/* BUTTONS */}
          <div className="!space-x-2 hidden lg:flex w-1/3 items-center justify-end">
            <Link href={"/contact"}>
              <button
                className={`border text-[12px] rounded-md !px-4 !py-1.5 transition-all ease-in-out duration-200 uppercase cursor-pointer ${
                  hasScrolled
                    ? "bg-white text-templatePrimary border-templateWhite hover:scale-95"
                    : " border border-white text-white hover:scale-95"
                }`}
              >
                Get Quote
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
