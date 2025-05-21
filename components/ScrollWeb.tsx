// "use client";
// import Link from "next/link";
// import Image from "next/image";

// interface Project {
//   title: string;
//   description: string;
//   href: string;
//   smallImage: string;
//   largeImage: string;
//   smallImageAlt: string;
//   largeImageAlt: string;
//   reverse: boolean;
// }

// const projects: Project[] = [
//   {
//     title: "Blooming Perspectives",
//     description:
//       "A photography series capturing the delicate beauty of flowers and natural landscapes. Focused on texture, light, and color to evoke calm and wonder.",
//     href: "/projects/blooming-perspectives",
//     smallImage: "/ScrollWeb_img/inteligencia-artificial-2.jpg",
//     largeImage: "/ScrollWeb_img/inteligencia-artificial-2.jpg",
//     smallImageAlt: "Blooming Perspectives feature image 1",
//     largeImageAlt: "Blooming Perspectives feature image 2",
//     reverse: true,
//   },
//   {
//     title: "Vibrant Frequencies",
//     description:
//       "A bold abstract series blending geometric shapes, vivid colors, and rhythmic textures. This project explores energy and movement through digital distortion and dynamic patterns.",
//     href: "/projects/vibrant-frequencies",
//     smallImage: "/ScrollWeb_img/inteligencia-artificial-2.jpg",
//     largeImage: "/ScrollWeb_img/inteligencia-artificial-2.jpg",
//     smallImageAlt: "Vibrant Frequencies feature image 1",
//     largeImageAlt: "Vibrant Frequencies feature image 2",
//     reverse: false,
//   },
//   {
//     title: "Layers in Motion",
//     description:
//       "A 3D rendering series exploring light, form, and translucency. Dynamic shapes and gradients create a sense of depth and fluid movement.",
//     href: "/projects/layers-in-motion",
//     smallImage: "/ScrollWeb_img/inteligencia-artificial-2.jpg",
//     largeImage: "/ScrollWeb_img/inteligencia-artificial-2.jpg",
//     smallImageAlt: "Layers in Motion feature image 1",
//     largeImageAlt: "Layers in Motion feature image 2",
//     reverse: true,
//   },
//   {
//     title: "Guided Journeys",
//     description:
//       "A UI/UX project focusing on creating a mobile app for guided mindfulness and meditation. The design emphasizes usability, accessibility, and a calming aesthetic.",
//     href: "/projects/guided-journeys",
//     smallImage: "/ScrollWeb_img/inteligencia-artificial-2.jpg",
//     largeImage: "/ScrollWeb_img/inteligencia-artificial-2.jpg",
//     smallImageAlt: "Guided Journeys feature image 1",
//     largeImageAlt: "Guided Journeys feature image 2",
//     reverse: false,
//   },
// ];

// export default function ScrollWeb() {
//   return (
//     <section className="flex flex-col gap-16 lg:gap-32 min-h-screen">
//       <div className="mx-auto w-full max-w-3xl text-center mt-20 px-6 flex flex-col gap-6">
//         <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
//           Vision and Solution
//         </h1>
//         <p className="text-lg text-gray-600">
//           See how I partner with clients to create designs that stand out, drive
//           engagement, and push boundaries.
//         </p>
//       </div>

//       <div className="mx-auto max-w-7xl w-full px-6 lg:px-8">
//         <div className="grid md:grid-cols-12 gap-6">
//           <div className="md:col-start-2 md:col-span-10 flex flex-col gap-8 md:gap-8">
//             {projects.map((project, index) => (
//               <div key={index} className="relative">
//                 <Link
//                   href={project.href}
//                   className={`flex flex-col md:flex-row gap-8 js-project-container relative ${
//                     project.reverse ? "md:flex-row-reverse" : ""
//                   }`}
//                 >
//                   <div className="md:w-1/3">
//                     <div className="lg:sticky pt-6 top-0 md:-mt-6">
//                       {/* for text  */}
//                       <div className="pb-6">
//                         <h4 className="mb-6 text-2xl md:text-3xl font-semibold">
//                           {project.title}
//                         </h4>

//                         <p className="text-base text-gray-600">
//                           {project.description}
//                         </p>
//                       </div>

//                       {/* for small image */}
//                       <div className="relative">
//                         <Image
//                           src={project.smallImage}
//                           alt={project.smallImageAlt}
//                           width={1920}
//                           height={1440}
//                           className="w-full rounded-xl bg-slate-100"
//                           loading="lazy"
//                         />
//                       </div>
//                     </div>
//                   </div>

//                   {/* for large image  */}
//                   <div className="md:flex-grow md:min-w-[65%] md:max-w-[65%]">
//                     <div className="relative">
//                       <Image
//                         src={project.largeImage}
//                         alt={project.largeImageAlt}
//                         width={1920}
//                         height={2560}
//                         className="w-full rounded-xl bg-slate-100"
//                         loading="lazy"
//                       />
//                     </div>
//                   </div>
//                 </Link>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";
// import Link from "next/link";
// import Image from "next/image";

// interface Project {
//   title: string;
//   description: string;
//   href: string;
//   smallImage: string;
//   largeImage: string;
//   smallImageAlt: string;
//   largeImageAlt: string;
//   reverse: boolean;
// }

// const projects: Project[] = [
//   {
//     title1:
//       "CCTV Central Monitoring with Integrated Intrusion Alarm Solutions for",
//     points1: ["DUBAI Police", "SHARJAH Police", "RAS AL KHAIMAH Police"],
//     title2: "CCTV Central Monitoring Solutions for",
//     points2: ["Banking", "Jewellery", "Money Exchange", "Corporate Sectors"],
//     href: "/projects/blooming-perspectives",
//     smallImage: "/ScrollWeb_img/inteligencia-artificial-2.jpg",
//     largeImage: "/ScrollWeb_img/inteligencia-artificial-2.jpg",
//     smallImageAlt: "Blooming Perspectives feature image 1",
//     largeImageAlt: "Blooming Perspectives feature image 2",
//     reverse: true,
//   },

//   {
//     title1: "Software Features",
//     points1: [
//       "Supports all brands of DVR, NVR and IPC devices",
//       "Live streaming through RTSP, HTTP, TCP, UDP and Onvif",
//       "Live view customization (1, 4, 9, 16, 25, 36, 49, 64, 81, 100)",
//       "Full screen mode",
//       "Customizable layout",
//       "Snapshot & triple snapshot",
//       "Camera swapping by drag & drop the views",
//       "Multi-language support with appropriate screen alignment (LTR or RTL)",
//     ],
//     href: "/projects/vibrant-frequencies",
//     smallImage: "/ScrollWeb_img/inteligencia-artificial-2.jpg",
//     largeImage: "/ScrollWeb_img/inteligencia-artificial-2.jpg",
//     smallImageAlt: "Vibrant Frequencies feature image 1",
//     largeImageAlt: "Vibrant Frequencies feature image 2",
//     reverse: false,
//   },

//   {
//     title1: "Intelligent Alerts",
//     points1: [
//       "Record missing alerts (Day wise or Selected date)",
//       "DVR status notification alerts (Online or Offline)",
//       "Recording stop alerts",
//       "Schedule stop or change alerts",
//       "Alert notification send through EMAIL or SMS",
//     ],
//     href: "/projects/layers-in-motion",
//     smallImage: "/ScrollWeb_img/inteligencia-artificial-2.jpg",
//     largeImage: "/ScrollWeb_img/inteligencia-artificial-2.jpg",
//     smallImageAlt: "Layers in Motion feature image 1",
//     largeImageAlt: "Layers in Motion feature image 2",
//     reverse: true,
//   },
// ];

// export default function ScrollWeb() {
//   return (
//     <section className="flex flex-col gap-16 lg:gap-32 min-h-screen">
//       <div className="mx-auto w-full max-w-3xl text-center mt-20 px-6 flex flex-col gap-6">
//         <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
//           Vision and Solution
//         </h1>
//         <p className="text-lg text-gray-600">
//           See how I partner with clients to create designs that stand out, drive
//           engagement, and push boundaries.
//         </p>
//       </div>

//       <div className="mx-auto max-w-7xl w-full px-6 lg:px-8">
//         <div className="grid md:grid-cols-12 gap-6">
//           <div className="md:col-start-2 md:col-span-10 flex flex-col gap-8 md:gap-8">
//             {projects.map((project, index) => (
//               <div key={index} className="relative">
//                 <Link
//                   href={project.href}
//                   className={`flex flex-col md:flex-row gap-8 js-project-container relative ${
//                     project.reverse ? "md:flex-row-reverse" : ""
//                   }`}
//                 >
//                   <div className="md:w-1/3">
//                     <div className="lg:sticky pt-6 top-0 md:-mt-6">
//                       {/* for text  */}
//                       <div className="pb-6">
//                         <h4 className="mb-6 text-2xl md:text-3xl font-semibold">
//                           {project.title}
//                         </h4>

//                         <p className="text-base text-gray-600">
//                           {project.description}
//                         </p>
//                       </div>

//                       {/* for small image */}
//                       <div className="relative">
//                         <Image
//                           src={project.smallImage}
//                           alt={project.smallImageAlt}
//                           width={1920}
//                           height={1440}
//                           className="w-full rounded-xl bg-slate-100"
//                           loading="lazy"
//                         />
//                       </div>
//                     </div>
//                   </div>

//                   {/* for large image  */}
//                   <div className="md:flex-grow md:min-w-[65%] md:max-w-[65%]">
//                     <div className="relative">
//                       <Image
//                         src={project.largeImage}
//                         alt={project.largeImageAlt}
//                         width={1920}
//                         height={2560}
//                         className="w-full rounded-xl bg-slate-100"
//                         loading="lazy"
//                       />
//                     </div>
//                   </div>
//                 </Link>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

//////////////////////////// good section ///////////////////////

// "use client";

// import Image from "next/image";

// interface Project {
//   title1: string;
//   points1: string[];
//   title2?: string;
//   points2?: string[];

//   smallImage: string;
//   largeImage: string;
//   smallImageAlt: string;
//   largeImageAlt: string;
//   reverse: boolean;
// }

// const projects: Project[] = [
//   {
//     title1:
//       "CCTV Central Monitoring with Integrated Intrusion Alarm Solutions for",
//     points1: ["DUBAI Police", "SHARJAH Police", "RAS AL KHAIMAH Police"],
//     title2: "CCTV Central Monitoring Solutions for",
//     points2: ["Banking", "Jewellery", "Money Exchange", "Corporate Sectors"],

//     smallImage: "/ScrollWeb_img/inteligencia-artificial-2.jpg",
//     largeImage: "/ScrollWeb_img/inteligencia-artificial-2.jpg",
//     smallImageAlt: "Blooming Perspectives feature image 1",
//     largeImageAlt: "Blooming Perspectives feature image 2",
//     reverse: true,
//   },
//   {
//     title1: "Software Features",
//     points1: [
//       "Supports all brands of DVR, NVR and IPC devices",
//       "Live streaming through RTSP, HTTP, TCP, UDP and Onvif",
//       "Live view customization (1, 4, 9, 16, 25, 36, 49, 64, 81, 100)",
//       "Full screen mode",
//       "Customizable layout",
//       "Snapshot & triple snapshot",
//       "Camera swapping by drag & drop the views",
//       "Multi-language support with appropriate screen alignment (LTR or RTL)",
//     ],

//     smallImage: "/ScrollWeb_img/inteligencia-artificial-2.jpg",
//     largeImage: "/ScrollWeb_img/inteligencia-artificial-2.jpg",
//     smallImageAlt: "Vibrant Frequencies feature image 1",
//     largeImageAlt: "Vibrant Frequencies feature image 2",
//     reverse: false,
//   },
//   {
//     title1: "Intelligent Alerts",
//     points1: [
//       "Record missing alerts (Day wise or Selected date)",
//       "DVR status notification alerts (Online or Offline)",
//       "Recording stop alerts",
//       "Schedule stop or change alerts",
//       "Alert notification send through EMAIL or SMS",
//     ],

//     smallImage: "/ScrollWeb_img/inteligencia-artificial-2.jpg",
//     largeImage: "/ScrollWeb_img/inteligencia-artificial-2.jpg",
//     smallImageAlt: "Layers in Motion feature image 1",
//     largeImageAlt: "Layers in Motion feature image 2",
//     reverse: true,
//   },
// ];

// export default function ScrollWeb() {
//   return (
//     <section className="flex flex-col gap-5 lg:gap-10 min-h-screen">
//       <div className="mx-auto w-full max-w-3xl text-center mt-20 px-6 flex flex-col gap-6">
//         <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
//           Vision and Solution
//         </h1>
//         <p className="text-lg text-gray-600">
//           See how I partner with clients to create designs that stand out, drive
//           engagement, and push boundaries.
//         </p>
//       </div>

//       <div className="mx-auto max-w-7xl w-full px-6 lg:px-8">
//         <div className="grid md:grid-cols-12 gap-6">
//           <div className="md:col-start-2 md:col-span-10 flex flex-col gap-8 md:gap-8">
//             {projects.map((project, index) => (
//               <div key={index} className="relative">
//                 <div
//                   className={`flex flex-col gap-8 js-project-container relative md:flex-row ${
//                     project.reverse ? "md:flex-row-reverse" : ""
//                   }`}
//                 >
//                   <div className="w-full md:w-1/3">
//                     <div className="lg:sticky pt-6 top-0 md:-mt-6">
//                       {/* Text Content */}
//                       <div className="pb-6">
//                         <h4 className="mb-4 sm:text-xl md:text-2xl text-base font-semibold">
//                           {project.title1}
//                         </h4>
//                         <ul className="list-disc list-inside mb-6 text-gray-700">
//                           {project.points1.map((point, i) => (
//                             <li key={i}>{point}</li>
//                           ))}
//                         </ul>

//                         {project.title2 && (
//                           <>
//                             <h4 className="mb-4 md:text-2xl text-xl font-semibold">
//                               {project.title2}
//                             </h4>
//                             <ul className="list-disc list-inside text-gray-700">
//                               {project.points2?.map((point, i) => (
//                                 <li key={i}>{point}</li>
//                               ))}
//                             </ul>
//                           </>
//                         )}
//                       </div>

//                       {/* Small Image */}
//                       <Image
//                         src={project.smallImage}
//                         alt={project.smallImageAlt}
//                         width={1920}
//                         height={1440}
//                         className="w-full rounded-xl bg-slate-100 h-40 sm:h-48 object-cover"
//                         loading="lazy"
//                       />
//                     </div>
//                   </div>

//                   {/* Large Image */}
//                   <div className="w-full md:flex-grow md:min-w-[65%] md:max-w-[65%]">
//                     <div className="relative">
//                       <Image
//                         src={project.largeImage}
//                         alt={project.largeImageAlt}
//                         width={1920}
//                         height={2560}
//                         className="w-full rounded-xl bg-slate-100 h-[300px] sm:h-[400px] md:h-auto object-cover"
//                         loading="lazy"
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import Image from "next/image";
import Wrapper from "./Others/Wrapper";
import { Check } from "lucide-react";

interface Project {
  main_title: string;
  title1: string;
  points1: string[];
  title2?: string;
  points2?: string[];

  description: string; // new field instead of smallImage
  largeImage: string;
  largeImageAlt: string;
  reverse: boolean;
}

const projects: Project[] = [
  {
    main_title: "CCTV - CMS Solution ",
    title1: "CCTV Central Monitoring with Integrated Intrusion Alarm",
    points1: ["DUBAI Police", "SHARJAH Police", "RAS AL KHAIMAH Police"],
    title2: "CCTV Central Monitoring Solutions for",
    points2: ["Banking", "Jewellery", "Money Exchange", "Corporate Sectors"],

    description:
      "CCTV description: We provide advanced CCTV Central Monitoring and Intrusion Alarm Solutions for law enforcement and high-security sectors like banking, jewelry, and corporate environments. Our system supports all major DVR/NVR/IPC brands with real-time streaming, customizable multi-camera views, and multilingual support. It's a reliable, scalable, and user-friendly solution for 24/7 surveillance and protection.",
    largeImage: "/solution_img/cctv.webp",
    largeImageAlt: "Blooming Perspectives feature image 2",
    reverse: true,
  },
  {
    main_title: "ANPR Solution",
    title1: "ANPR Features",
    points1: [
      "Can capture number plates of the vehicle at the speed of 200 km/h.",
      "Recognize plate color, font color, plate type, and country.",
      "5000+ installations in United Arab Emirates.",
    ],
    title2: "ANPR Highway System",
    points2: [
      "Over speed, under speed, unfastened safety belt, calling while driving, running red light.",
      "Supports statistics (by lane and by time period) on vehicle flow, average speed, vehicle type, occupancy, average queue length and supports exporting reports, etc.",
    ],
    description:
      "Our ANPR (Automatic Number Plate Recognition) systems are designed for high-speed and high-accuracy vehicle monitoring. Ideal for highways and urban environments, these systems can detect various traffic violations such as speeding, running red lights, and distracted driving. With support for detailed vehicle classification, plate recognition by country and type, and robust reporting tools, our ANPR solutions offer scalable.",

    largeImage: "/solution_img/anpr.webp",
    largeImageAlt: "Blooming Perspectives feature image 2",
    reverse: false,
  },

  {
    main_title: "VMS Solution",
    title1: "VMS Features",
    points1: [
      "24x7 Reliable recording",
      "Multibrand NVR, DVR and Camera",
      "Remote playback",
    ],
    title2: "Snappy VMS Live",
    points2: [
      "Previous / Next view options for the connected cameras.",
      "Group view to view video from multiple recorders channels can grouped.",
      "Auto switch to mainstream when switched to single view helps to maintain a high quality resolution in single view.",
    ],
    description:
      "Our Video Management System (VMS) offers 24/7 reliable recording with support for multi-brand NVRs, DVRs, and cameras. With Snappy VMS Live, users can enjoy seamless live viewing, intuitive playback controls, group camera views, and automatic quality switching for single views. Designed for high-performance surveillance, it's ideal for monitoring environments requiring flexibility, scalability, and user-friendly operation.",

    largeImage: "/solution_img/video-server.webp",
    largeImageAlt: "Blooming Perspectives feature image 2",
    reverse: true,
  },

  // new added
  {
    main_title: "BIO - Metric ",
    title1: "Finger Print Time Attendance",
    points1: [
      "Standalone fingerprint time attendance + RFID function.",
      "3.2-inch color TFT screen.",
      "Can enroll Max = 10 fingerprints to 1 user.",
    ],
    title2: "Mini Finger Print Access Control",
    points2: [
      "Professional fingerprint access control with time attendance function.",
      "2.4-inch TFT screen.",
      "Can enroll Max = 10 fingerprints to 1 user.",
      "Stores 800 templates and 50,000 transactions.",
    ],
    description:
      "Our biometric solutions include advanced fingerprint-based time attendance and access control systems. With standalone operation, RFID functionality, and user-friendly TFT displays, these devices offer accurate tracking and high storage capacity. Whether for small offices or secure facilities, they support multiple fingerprints per user, large transaction logs, and reliable performance for streamlined workforce and access management.",

    largeImage: "/solution_img/bio-metrics.webp",
    largeImageAlt: "Blooming Perspectives feature image 2",
    reverse: false,
  },

  {
    main_title: "DCS Solution",
    title1: "Data Center Solution",
    points1: [
      "Data Center is a repository that houses computing facilities like servers, routers, switches and firewalls, as well as supporting components like backup equipment, fire suppression facilities and air conditioning.",
      "Everything is literally virtualized and delivered as a service and the virtualization of data centers is the next logical step. The virtual layer is taking over in data centers, making them flexible, highly secure and extremely agile.",
      "Infrastructure and network, both are not just virtualized in a software defined data center but are delivered as a service also.",
    ],
    title2: "Power Management",
    points2: [
      "Data centers employ battery-based backup power systems able to compensate for short-term power outages and larger generators that can supply power in case longer commercial power grid outages occur.",
      "Identifying and analyzing power consumption across the data center on a modular level.",
      "Planning for capacity increment in line with the future data center requirements.",
    ],
    description:
      "Our Data Center Solutions offer a comprehensive infrastructure that includes virtualized servers, storage, and network resources—designed for agility, scalability, and enhanced security. We also provide advanced power management systems with modular monitoring, battery backup.",

    largeImage: "/solution_img/data-server.webp",
    largeImageAlt: "Blooming Perspectives feature image 2",
    reverse: true,
  },
  {
    main_title: "NTS Solution",
    title1: "Networking Solutions",
    points1: [
      "Our open, agile, cloud-driven networking solutions will help your business to grow across borders with ease.",
      "Local to global in emerging or local markets, our services will exceed your expectations.",
      "Networking Solutions offers IT services that meet your current requirements yet will evolve as you do, helping you grow your business effectively to meet the future head on.",
      "Our guaranteed one hour response time ensures that any issues are resolved quickly, so your operations stay up and running at full speed.",
    ],
    title2: "Server Virtualization",
    points2: [
      "Masking of server resources, including the number and identity of individual physical servers, processors and operating systems from server users.",
    ],
    description:
      "Our Networking Solutions are designed to be cloud-driven, scalable, and responsive—empowering your business to expand seamlessly across regions. With rapid support and future-ready infrastructure, we ensure uninterrupted connectivity. Combined with Server Virtualization, which abstracts physical hardware to maximize efficiency and flexibility, our offerings provide a powerful foundation for modern, agile IT environments.",
    largeImage: "/solution_img/networking.webp",
    largeImageAlt: "Blooming Perspectives feature image 2",
    reverse: false,
  },
  {
    main_title: "Gate Barrier ",
    title1: "Intelligent Gate Barrier Solutions",
    points1: [
      "Automated gate barrier systems for secure, efficient vehicle access control in commercial and residential premises.",
      "Supports RFID, ANPR, and remote access for seamless entry and exit management.",
      "Integrated with surveillance and access control systems for real-time monitoring and enhanced security.",
    ],
    title2: "Smart Entry & Exit Management",
    points2: [
      "Supports integration with access control systems, surveillance cameras, and visitor management platforms for complete security.",
      "Available in various boom lengths and motor speeds to suit different entry/exit needs, from parking lots to high-security zones.",
      "Built-in safety sensors and automatic rebound function to prevent accidents and ensure safe operation.",
    ],
    description:
      "Our Gate Barrier solutions offer intelligent, automated access control for secured entry and exit across commercial, industrial, and residential sites. With integration support for RFID, ANPR, and remote access, these systems ensure both security and convenience. Designed for durability and real-time monitoring, Mcom’s gate barriers deliver dependable access management with minimal human intervention.",

    largeImage: "/solution_img/gate-barrier.webp",
    largeImageAlt: "Blooming Perspectives feature image 2",
    reverse: true,
  },
];

export default function ScrollWeb() {
  return (
    <section className="flex flex-col gap-5 lg:gap-10 min-h-screen pb-16">
      <div className="mx-auto w-full max-w-3xl text-center md:mt-16 mt-12 md:px-6 flex flex-col gap-2">
        <h1 className="text-3xl uppercase md:text-4xl heading-all font-bold tracking-tight text-gray-800">
          Vision and Solution
        </h1>
        <p className="text- font-medium text-gray-600 px-4 ">
          See how I partner with clients to create designs that stand out, drive
          engagement, and push boundaries.
        </p>
      </div>

      <div className="mx-auto  w-full ">
        <Wrapper>
          <div className=" gap-6 ">
            <div className="md:col-start-2 md:col-span-10 flex flex-col gap-8 md:gap-8  ">
              {projects.map((project, index) => (
                <div key={index} className="relative ">
                  <div
                    className={`flex flex-col gap-10 js-project-container relative md:flex-row   ${
                      project.reverse ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    <div className="w-full md:w-1/2 md:py-8  ">
                      <div className="lg:sticky pt-6 top-10 md:-mt-6">
                        {/* Text Content */}
                        <h3 className="heading-all text-3xl md:text-4xl mb-5 font-semibold text-gray-800">
                          {project?.main_title}
                        </h3>
                        <div className="pb-6">
                          <h4 className="mb-4 sm:text heading-all border-l-3 border-[#2f3192] pl-2 md:text- text-base font-semibold text-gray-700">
                            {project.title1}
                          </h4>
                          <ul className=" text-sm mb-6 text-gray-700">
                            {project.points1.map((point, i) => (
                              <div className="flex gap-2">
                                <span className=" mt-1">
                                  <Check size={16} color="#2f3192" />
                                </span>
                                <li key={i} className="mb-2">
                                  {point}
                                </li>
                              </div>
                            ))}
                          </ul>

                          {project.title2 && (
                            <>
                              <h4 className="mb-3 md:text- heading-all border-l-3 border-[#2f3192] pl-2 text- font-semibold  text-gray-700">
                                {project.title2}
                              </h4>
                              <ul className=" text-sm text-gray-700">
                                {project.points2?.map((point, i) => (
                                  <div className="flex gap-2">
                                    <span className=" mt-1">
                                      <Check size={16} color="#2f3192" />
                                    </span>
                                    <li key={i} className="mb-2">
                                      {point}
                                    </li>
                                  </div>
                                ))}
                              </ul>
                            </>
                          )}
                        </div>

                        {/* Description instead of small Image */}
                        <p className="text-gray-700 text-sm leading-relaxed text-justify">
                          {project.description}
                        </p>
                      </div>
                    </div>

                    {/* Large Image */}
                    <div className="w-full md:flex-grow md:min-w-[50%] md:max-w-[50%]">
                      <div className="relative">
                        <Image
                          src={project.largeImage}
                          alt={project.largeImageAlt}
                          width={1920}
                          height={2560}
                          className="w-full  rounded-xl bg-slate-100 h-[300px] sm:h-[400px] md:h-[650px] object-cover"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Wrapper>
      </div>
    </section>
  );
}
