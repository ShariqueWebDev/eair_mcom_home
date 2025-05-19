// "use client";
// import { useState, useRef } from "react";
// import Image from "next/image";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Breadcrumb from "./BreadCrumb/BreadCrumb";
// import { Check } from "lucide-react";

// interface Category {
//   name: string;
//   bgColor: string;
//   icon: string;
//   subImage: string;
//   points: string[];
// }

// const categories: Category[] = [
//   {
//     name: "IT Service",
//     bgColor: "bg-[#fbf9e4]",
//     icon: "/service_img/icons/global-icon-png-1-62588758.jpg",
//     subImage: "/service_img/subImg/it.webp",
//     points: [
//       "Server installation and configuration.",
//       "Infrastructure planning and implementing.",
//       "Remote access services.",
//       "Exchange server configuration.",
//       "Terminal server and client connectivity.",
//       "Email server solutions for corporate.",
//       "NAT solutions.",
//     ],
//   },
//   {
//     name: "CCTV Service",
//     bgColor: "bg-[#fef1f1]",
//     icon: "/service_img/icons/cctv-camera-131-1086991-134936168.png",
//     subImage: "/service_img/subImg/cctv.webp",
//     points: [
//       "Digital video recording and clients installation.",
//       "CCTV camera installation.",
//       "Certification of CCTV projects.",
//       "IP Camera Installation & Configuration.",
//       "Remote Monitoring Setup (Mobile & PC Access).",
//       "Upgrading Legacy CCTV Systems to HD/IP.",
//       "Cloud Storage & Backup Solutions",
//     ],
//   },
//   {
//     name: "Bio-Metric Service",
//     bgColor: "bg-[#F5EEDD]",
//     icon: "/service_img/icons/Fingerprint-512-3274273457.png",
//     subImage: "/service_img/subImg/bio-metric.webp",
//     points: [
//       "Annual Maintenance Contracts (AMC) for Servers, Workstations, Printers, and Plotters.",
//       "Access Control System Installation & Configuration.",
//       "PABX (Private Automatic Branch Exchange) Installation & Configuration.",
//       "Biometric Time Attendance System Setup.",
//       "Intercom & Paging System Installation.",
//     ],
//   },
//   {
//     name: "UI / UX Service",
//     bgColor: "bg-[#e1fcf2]",
//     icon: "/service_img/icons/pngtree-ui-and-ux-app-concept-elements-collection-for-social-media-png-image_6866294-2171584179.png",
//     subImage: "/service_img/subImg/ui-ux-service2.webp",
//     points: [
//       "Website Domain Purchase & Configuration.",
//       "Graphics Design & Visual Content Creation.",
//       "Web development.",
//       "UI/UX Wireframing & Prototyping.",
//       "User Journey Mapping & Persona Development.",
//       "Brand Identity Design (Logo, Colors, Fonts).",
//       "User Testing & Feedback Implementation.",
//     ],
//   },
//   {
//     name: "Networking Service",
//     bgColor: "bg-[#f4f1fe]",
//     icon: "/service_img/icons/pngtree-network-icon-png-image_8443511-389870977.png",
//     subImage: "/service_img/subImg/network.webp",
//     points: [
//       "Computer Assembling & Hardware Setup.",
//       "System Troubleshooting & Diagnostics.",
//       "Data Recovery & Backup Solutions.",
//       "Regular System Servicing & Cleaning.",
//       "LAN & WAN Network Setup.",
//       "Firewall Installation & Network Security Setup.",
//       "Server Installation & Maintenance.",
//     ],
//   },
// ];

// export default function CategorySection() {
//   const [activeSlide, setActiveSlide] = useState<number>(0);
//   const sliderRef = useRef<Slider>(null);

//   const settings = {
//     centerMode: true,
//     centerPadding: "0px",
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     infinite: true,
//     speed: 500,
//     dots: false,
//     beforeChange: (_current: number, next: number) => {
//       setActiveSlide(next);
//     },
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           centerMode: false,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           centerMode: false,
//         },
//       },
//     ],
//   };

//   const handleCategorySelect = (index: number) => {
//     setActiveSlide(index);
//     if (sliderRef.current) {
//       sliderRef.current.slickGoTo(index);
//     }
//   };

//   return (
//     <>
//       <Breadcrumb
//         path="Service"
//         title="Our Service"
//         paragraph="Explore our range of services tailored to your needs."
//         bgImg="/top-banner/about-banner.webp"
//       />
//       <section className="py-8 lg:py-16 md:px-20 px-5  overflow-hidden">
//         <div className="mx-auto px-4 max-w-7xl">
//           <div className="flex flex-wrap items-center -mx-3">
//             {/* Image Section */}
//             <div className="w-full lg:w-5/12 px-3 mb-6 lg:mb-0">
//               <div className="relative flex items-center justify-center">
//                 <Image
//                   src={
//                     categories[activeSlide]?.subImage ||
//                     "/service_img/subImg/it.webp"
//                   }
//                   alt={categories[activeSlide]?.name || "Category"}
//                   width={600}
//                   height={400}
//                   className="w-full h-[400px]  md:h-[500px]  object-cover rounded-lg"
//                 />
//                 <div className="absolute inset-0 bg-black opacity-30 rounded-lg"></div>
//                 <div className="absolute inset-0 flex items-center justify-center px-3 sm:px-5">
//                   <div className="bg-white bg-opacity-80 py-8 text-gray-700 text-sm sm:text-lg px-5 rounded-lg pointer-events-none w-full sm:w-3/4">
//                     {categories[activeSlide]?.points.map((point, i) => (
//                       <div
//                         key={i}
//                         className="mb-3 break-words text-xs sm:text-base flex items-start "
//                       >
//                         <div className="bg-[#2e2e84] rounded-full p-0.5 mr-3 mt-1">
//                           <Check size={12} color="#fff" />
//                         </div>
//                         {point}
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Categories Section */}
//             <div className="w-full lg:w-7/12 px-3">
//               <h2 className="font-quicksand heading-all text-4xl sm:text-6xl text-gray-700 lg:text-[100px] font-bold leading- tracking- mb-6 lg:mb-8">
//                 Explore <br /> Our Services
//               </h2>

//               <div className="relative  md:h-[160px]">
//                 {/* Slider for Desktop/Tablet (md and above) */}
//                 <div className="hidden md:block">
//                   <Slider {...settings} ref={sliderRef}>
//                     {categories.map((category, index) => (
//                       <div key={index} className="px-3">
//                         <div
//                           className={`p-6 rounded-2xl flex flex-col items-center text-center ${
//                             category.bgColor
//                           } cursor-pointer ${
//                             index === activeSlide
//                               ? "border border-[#2e2e84]"
//                               : ""
//                           }`}
//                           onClick={() => handleCategorySelect(index)}
//                           onTouchStart={() => handleCategorySelect(index)}
//                         >
//                           <div className="mb-3 transform transition-transform duration-300 hover:scale-110">
//                             <Image
//                               src={category.icon}
//                               alt={category.name}
//                               width={50}
//                               height={50}
//                               className={` ${
//                                 index === activeSlide ? "scale-150 my-2 " : ""
//                               } w-10 h-10 lg:w-12 lg:h-12 transition-all duration-500`}
//                             />
//                           </div>
//                           <div>
//                             <h5 className="font-quicksand text-base font-semibold text-gray-800 mb-1">
//                               <p className="font-poppins text-base font-medium text-gray-800 capitalize">
//                                 {category.name}
//                               </p>
//                             </h5>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </Slider>
//                 </div>

//                 {/* Card List for Mobile (below md) */}
//                 <div className="md:hidden space-y-4">
//                   {categories.map((category, index) => (
//                     <div
//                       key={index}
//                       className={`p-4 rounded-lg ${
//                         category.bgColor
//                       } shadow-md cursor-pointer transition-transform hover:scale-[1.02] ${
//                         index === activeSlide ? "" : ""
//                       }`}
//                       onClick={() => handleCategorySelect(index)}
//                       onTouchStart={() => handleCategorySelect(index)}
//                     >
//                       {/* Card Header: Icon and Name */}
//                       <div className="flex items-center mb-3">
//                         <Image
//                           src={category.icon}
//                           alt={category.name}
//                           width={40}
//                           height={40}
//                           className="w-10 h-10 mr-3"
//                         />
//                         <h3 className="font-quicksand text-lg font-semibold text-gray-800">
//                           {category.name}
//                         </h3>
//                       </div>

//                       {/* SubImage */}
//                       <div className="relative mb-3">
//                         <Image
//                           src={category.subImage}
//                           alt={category.name}
//                           width={300}
//                           height={200}
//                           className="w-full h-40 object-cover rounded-lg"
//                         />
//                         <div className="absolute inset-0 bg-black opacity-20 rounded-lg"></div>
//                       </div>

//                       {/* Points */}
//                       <ul className="text-sm text-gray-700 space-y-1">
//                         {category.points.map((point, i) => (
//                           <li key={i} className="flex items-start">
//                             <span className="mr-2">•</span>
//                             <span>{point}</span>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }
import React from "react";

const ServiceFeature = () => {
  return <div></div>;
};

export default ServiceFeature;
