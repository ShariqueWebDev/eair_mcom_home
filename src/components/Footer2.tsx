"use client";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import Wrapper from "./Others/Wrapper";

export default function Footer2() {
  return (
    <Wrapper className="bg-gray-900 text-white pt-12 pb-5">
      <footer className="">
        <div className="container mx-auto">
          <div className="flex flex-col gap-8 sm:gap-10 md:grid md:grid-cols-2 md:gap-6 lg:flex lg:flex-row lg:justify-between lg:gap-8">
            {/* Left Section: Logo and Description (Full width on md) */}
            <div className="flex-1 text-center md:col-span-2 lg:text-left">
              <div className="mb-4 flex justify-center lg:justify-start">
                <div
                  className="relative w-16 h-8 sm:w-20 sm:h-10 md:w-24 md:h-12 lg:w-28 lg:h-14 rounded overflow-hidden"
                  data-aos="fade-up"
                >
                  <Image
                    src="/logo/white-logo.png"
                    alt="Company Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <p
                className="text-xs sm:text-sm md:text-sm mb-4 max-w-[16rem] text-gray-300 sm:max-w-xs md:max-w-2xl lg:max-w-sm mx-auto lg:mx-0"
                data-aos="fade-up"
              >
                At Mcom, we are driven by a singular mission - to cultivate a
                dynamic and diverse portfolio in the realm of Cybersecurity
                Services, complete IT and Cloud Infrastructure solutions, IT
                product distributions, and managed services.
              </p>
              {/* Social Media Icons */}
              <div
                className="flex justify-center lg:justify-start gap-3 sm:gap-4 md:gap-5"
                data-aos="fade-up"
              >
                <a
                  href="#"
                  className="text-base sm:text-lg md:text-xl lg:text-xl hover:text-gray-300 transition-colors"
                >
                  <FaFacebook />
                </a>
                <a
                  href="#"
                  className="text-base sm:text-lg md:text-xl lg:text-xl hover:text-gray-300 transition-colors"
                >
                  <FaInstagram />
                </a>
                <a
                  href="#"
                  className="text-base sm:text-lg md:text-xl lg:text-xl hover:text-gray-300 transition-colors"
                >
                  <FaTwitter />
                </a>
                <a
                  href="#"
                  className="text-base sm:text-lg md:text-xl lg:text-xl hover:text-gray-300 transition-colors"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>

            {/* Links Section */}
            <div className="text-center md:text-left">
              <h3
                className="text-base heading-all sm:text-lg md:text-xl lg:text-xl font-semibold mb-3"
                data-aos="fade-up"
              >
                Links
              </h3>
              <ul className=" text-sm text-gray-300 sm:text-sm md:text-base space-y-4 lg:text-sm">
                <li data-aos="fade-up">
                  <Link
                    href="/"
                    className="hover:text-gray-300 transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li data-aos="fade-up">
                  <Link
                    href="/about"
                    className="hover:text-gray-300 transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li data-aos="fade-up">
                  <Link
                    href="/services"
                    className="hover:text-gray-300 transition-colors"
                  >
                    Services
                  </Link>
                </li>
                <li data-aos="fade-up">
                  <Link
                    href="/contact"
                    className="hover:text-gray-300 transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Section */}
            <div className="text-center md:text-left md:ml-10 ml-0">
              <h3
                className="text-base sm:text-lg heading-all md:text-xl lg:text-xl font-semibold mb-3"
                data-aos="fade-up"
              >
                Contact Us
              </h3>
              <ul className="space-y-4 text-xs text-gray-300 sm:text-sm md:text-base lg:text-base">
                <li
                  className="flex items-center justify-center md:justify-start text-sm"
                  data-aos="fade-up"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 shrink-0 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  +971 55 956 3722
                </li>
                <li
                  className="flex items-center justify-center md:justify-start  text-sm"
                  data-aos="fade-up"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 shrink-0 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  sales@mccomcctv.com
                </li>
                <li
                  className="flex items-start justify-center md:justify-start  text-sm"
                  data-aos="fade-up"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 shrink-0 mt-0.5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span
                    className="max-w-[9rem] sm:max-w-36 md:max-w-40 lg:max-w-44"
                    data-aos="fade-up"
                  >
                    Office 210, Lulu Office Building, Al Muteena, Dubai, UAE
                  </span>
                </li>
              </ul>
            </div>

            {/* Open Hours Section */}
            <div className="text-center md:text-left">
              <h3
                className="text-base sm:text-lg heading-all md:text-xl lg:text-xl font-semibold mb-3"
                data-aos="fade-up"
              >
                Open Hours
              </h3>
              <ul className="space-y-2 text-gray-300 text-sm  md:text-base ">
                <li
                  className="flex items-center justify-center md:justify-start text-sm"
                  data-aos="fade-up"
                >
                  Mon-Sat: 9am - 6pm
                </li>
              </ul>
            </div>

            {/* Map Section */}
            <div
              className="flex-1 w-full text-center md:text-left"
              data-aos="fade-up"
            >
              <div className="w-full h-32 sm:h-36 md:h-40 lg:h-48 rounded overflow-hidden">
                <iframe
                  className="w-full h-full border-0"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.331203857261!2d55.31852477593921!3d25.27114742921135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f434a4e13e249%3A0xa55f0198ec9cbd60!2sLulu%20Building%2C%20Al%20Muteena%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sus!4v1715869900000!5m2!1sen!2sus"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Bottom Section: Copyright */}
          <div className="border-t border-gray-700 mt-8 sm:mt-10 md:mt-12 pt-4 text-center text-xs sm:text-sm md:text-base lg:text-base">
            <p className="text-sm text-gray-300">
              © 2025 By Mcom | All Rights Reserved. Terms & Conditions. Privacy
              Policy
            </p>
          </div>
        </div>
      </footer>
    </Wrapper>
  );
}
