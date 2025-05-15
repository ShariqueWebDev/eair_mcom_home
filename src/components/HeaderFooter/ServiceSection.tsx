"use client";
import { Check } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const serviceData = [
  {
    name: "IT Service",
    iconPath: "/icon/it-service1.png",
    handle: "@Shane",
    image: "/images/user/user-01.png",
    text: "The pre-built examples in this kit saved me weeks of development time. It’s a fantastic starting point for any AI SaaS project!",
    points: [
      "Server installation and configuration.",
      "Infrastructure planning and implementing.",
      "Remote access services.",
      "Exchange server configuration.",
      "Terminal server and client connectivity.",
      "Email server solutions for corporate.",
      "NAT solutions.",
    ],
  },
  {
    name: "CCTV Service",
    iconPath: "/icon/cctv1.png",
    handle: "@Olivia",
    image: "/images/user/user-02.png",
    text: "Building with OpenAI and Next.js has never been easier. The kit’s structure is intuitive and well-documented.",
    points: [
      "Digital video recording and clients installation.",
      "CCTV camera installation.",
      "Certification of CCTV projects.",
      "IP Camera Installation & Configuration.",
      "Remote Monitoring Setup (Mobile & PC Access).",
      "Upgrading Legacy CCTV Systems to HD/IP.",
      "Cloud Storage & Backup Solutions",
    ],
  },
  {
    name: "UI/UX Service",
    handle: "@Jeanette",
    iconPath: "/icon/ui.png",
    image: "/images/user/user-03.png",
    text: "I was able to launch my AI startup in record time thanks to the pre-configured setup. Highly recommend!",
    points: [
      "Website Domain Purchase & Configuration.",
      "Graphics Design & Visual Content Creation.",
      "Web development.",
      "UI/UX Wireframing & Prototyping.",
      "User Journey Mapping & Persona Development.",
      "Brand Identity Design (Logo, Colors, Fonts).",
      "User Testing & Feedback Implementation.",
    ],
  },
  {
    name: "Networking Service",
    handle: "@Hilda",
    iconPath: "/icon/cloud-service1.png",
    image: "/images/user/user-04.png",
    text: "The flexibility of this kit is unmatched. It’s perfect for rapid prototyping and scaling AI applications.",
    points: [
      "Computer Assembling & Hardware Setup.",
      "System Troubleshooting & Diagnostics.",
      "Data Recovery & Backup Solutions.",
      "Regular System Servicing & Cleaning.",
      "LAN & WAN Network Setup.",
      "Firewall Installation & Network Security Setup.",
      "Server Installation & Maintenance.",
    ],
  },
  {
    name: "Bio-Metric Service",
    handle: "@Mitchell",
    iconPath: "/icon/fingerprint1.png",
    image: "/images/user/user-05.png",
    text: "A game-changer for developers looking to integrate AI into their SaaS products. Clean code and great examples!",
    points: [
      "Annual Maintenance Contracts (AMC) for Servers, Workstations, Printers, and Plotters.",
      "Access Control System Installation & Configuration.",
      "PABX (Private Automatic Branch Exchange) Installation & Configuration.",
      "Biometric Time Attendance System Setup.",
      "Intercom & Paging System Installation.",
    ],
  },
  //   {
  //     name: "Jay Alexander",
  //     handle: "@Chris",
  //     image: "/images/user/user-06.png",
  //     text: "This kit made it so easy to get started with AI development. The examples are practical and production-ready.",
  //   },
  //   {
  //     name: "Fred Graham",
  //     handle: "@Allie",
  //     image: "/images/user/user-07.png",
  //     text: "The documentation and examples are top-notch. It’s clear the creators put a lot of thought into usability.",
  //   },
  //   {
  //     name: "Chris Cunningham",
  //     handle: "@Blake",
  //     image: "/images/user/user-08.png",
  //     text: "I love how this kit streamlines the process of building AI-powered SaaS apps. It’s a must-have for startups.",
  //   },
  //   {
  //     name: "Polly Webster",
  //     handle: "@Adelaide",
  //     image: "/images/user/user-09.png",
  //     text: "The pre-configured setup allowed me to focus on building features rather than boilerplate code. Amazing!",
  //   },
  //   {
  //     name: "Marc Herrera",
  //     handle: "@Shane",
  //     image: "/images/user/user-01.png",
  //     text: "The pre-built examples in this kit saved me weeks of development time. It’s a fantastic starting point for any AI SaaS project!",
  //   },
  //   {
  //     name: "Alfred Montgomery",
  //     handle: "@Olivia",
  //     image: "/images/user/user-02.png",
  //     text: "Building with OpenAI and Next.js has never been easier. The kit’s structure is intuitive and well-documented.",
  //   },
  //   {
  //     name: "Marvin Williamson",
  //     handle: "@Jeanette",
  //     image: "/images/user/user-03.png",
  //     text: "I was able to launch my AI startup in record time thanks to the pre-configured setup. Highly recommend!",
  //   },
];

const ServiceSection = () => {
  const [showAll, setShowAll] = useState(false);

  const handleShowMore = () => {
    setShowAll(true);
  };

  // Distribute testimonials across three columns for lg screens
  //   const column1 = testimonials.slice(0, 3);
  //   const column2 = testimonials.slice(3, 6);
  //   const column3 = testimonials.slice(6, 9);

  return (
    <section className="relative z-20 overflow-hidden py-10  md:pt-16">
      <div className="mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0">
        {/* Header Section */}
        <div className="relative z-10 mb-12 text-center">
          {/* <span className="inline-flex items-center gap-2 rounded-full px-4.5 py-1.5 text-sm font-medium border border-gray-500 text-gray-800 mb-4">
            <span className="text-[11px]">Our Services</span>
          </span> */}
          <h2 className="mb-4.5 text-2xl font-bold text-gray-800 heading-all sm:text-4xl xl:text-5xl">
            What Our User Says
          </h2>
          <p className="mx-auto max-w-[714px] font-medium text-gray-600">
            Build SaaS AI applications using OpenAI and Next.js, this kit comes
            with pre-configured and pre-built examples, making it easier to
            quickly kickstart your AI startup.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className={``}>
          {/* Column 1 */}
          <div className="space-y-7.5 md:flex md:justify-center md:flex-wrap grid-cols-1  gap-5">
            {serviceData.map((service, index) => (
              <div
                key={index}
                className="relative overflow-hidden max-w-[350px] w-full rounded-[19px] md:h-[490px] h-auto bg-gray-100 bg-opacity-50 backdrop-blur-md p-8  from-purple-500/30 to-pink-500/30"
              >
                <div className="flex items-center gap-4.5">
                  <div className="relative h-12 w-12 overflow-hidden ">
                    <Image
                      src={service.iconPath}
                      alt={service.name}
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text- uppercase  font-semibold text-gray-800">
                      {service.name}
                    </h3>
                    {/* <p className="text-sm font-medium text-gray-400 lowercase">
                      {service.handle}
                    </p> */}
                  </div>
                </div>
                <div className="relative my-6 h-[1px] w-full bg-gray-600"></div>
                <div className="">
                  {service?.points?.map((item, index) => {
                    return (
                      <div className="flex gap-3 mb-2" key={index}>
                        <div className="w-4 h-4 p-0.5 mt-1 bg-[#353382] rounded-full flex justify-center items-center">
                          <Check color="#fff" size={16} />
                        </div>
                        <p className="text-sm mb-2 text-gray-700">{item}</p>
                      </div>
                    );
                  })}
                </div>
                <div className="absolute inset-0 -z-10 overflow-hidden">
                  <span
                    className="absolute bottom-0 right-0 h-full w-full bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: "url(/images/blur/blur-18.svg)" }}
                  ></span>
                </div>
              </div>
            ))}
          </div>
        </div>

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

export default ServiceSection;
