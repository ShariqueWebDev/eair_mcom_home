// "use client";
// import { Check } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import { useState } from "react";
// import { serviceData } from "../../lib/serviceData";

// const ServiceSection = ({ isPage }: { isPage?: boolean }) => {
//   return (
//     <section className="relative z-20 overflow-hidden py-10  md:pt-16">
//       <div className="mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0">
//         {/* Header Section */}
//         <div className="relative z-10 mb-12 text-center">
//           {/* <span className="inline-flex items-center gap-2 rounded-full px-4.5 py-1.5 text-sm font-medium border border-gray-500 text-gray-800 mb-4">
//             <span className="text-[11px]">Our Services</span>
//           </span> */}
//           <h2
//             className="mb-4.5 text-2xl font-bold text-gray-800 heading-all sm:text-4xl uppercase xl:text-4xl"
//             data-aos="fade-up"
//           >
//             Excellence in HVAC Installation, <br className="max-sm:hidden" />{" "}
//             Service & Repair
//           </h2>
//           <p
//             className="mx-auto max-w-[714px] font-medium text-gray-600"
//             data-aos="fade-up"
//           >
//             Mcom is a heating and cooling service company with a history of
//             excellence, customer service, and quality craftsmanship. We
//             specialize in HVAC service, replacement, and repair for both
//             residential and commercial customers in North America.
//           </p>
//         </div>

//         {/* Testimonials Grid */}
//         <div className={``}>
//           {/* Column 1 */}
//           <div className="space-y-7.5 md:flex md:justify-center md:flex-wrap grid-cols-1 max-sm:place-items-center gap-5">
//             {serviceData?.map((service, index) => (
//               <div
//                 key={index}
//                 className="relative overflow-hidden max-w-[350px] w-full rounded-[19px] md:h-[490px] h-auto bg-gray-100 bg-opacity-50 backdrop-blur-md p-8  from-purple-500/30 to-pink-500/30"
//                 data-aos="fade-up"
//               >
//                 <div className="flex items-center gap-4.5" data-aos="fade-up">
//                   <div className="relative h-12 w-12 overflow-hidden ">
//                     <Image
//                       src={service.iconPath}
//                       alt={service.name}
//                       width={48}
//                       height={48}
//                       className="object-cover"
//                     />
//                   </div>
//                   <div>
//                     <h3 className="text- uppercase  font-semibold text-gray-800">
//                       {service.name}
//                     </h3>
//                     {/* <p className="text-sm font-medium text-gray-400 lowercase">
//                       {service.handle}
//                     </p> */}
//                   </div>
//                 </div>
//                 <div
//                   className="relative my-6 h-[1px] w-full bg-gray-600"
//                   data-aos="fade-up"
//                 ></div>
//                 <div className="">
//                   {service?.points?.map((item, index) => {
//                     return (
//                       <div
//                         className="flex gap-3 mb-2"
//                         key={index}
//                         data-aos="fade-up"
//                       >
//                         <div className="w-4 h-4 p-0.5 mt-1 bg-[#353382] rounded-full flex justify-center items-center">
//                           <Check color="#fff" size={16} />
//                         </div>
//                         <p className="text-sm mb-2 text-gray-700">{item}</p>
//                       </div>
//                     );
//                   })}
//                 </div>
//                 <div className="absolute inset-0 -z-10 overflow-hidden">
//                   <span
//                     className="absolute bottom-0 right-0 h-full w-full bg-cover bg-center bg-no-repeat"
//                     // style={{ backgroundImage: "url(/images/blur/blur-18.svg)" }}
//                   ></span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//         {isPage && (
//           <div className="flex justify-center max-sm:mt-5 ">
//             <Link href={"/services"} data-aos={"fade-up"} className=" mx-auto ">
//               <button className="bg-[#323085] text-white text-sm rounded-md  px-5 py-1.5 !cursor-pointer">
//                 Know more
//               </button>
//             </Link>
//           </div>
//         )}
//         {/* Show More Button */}
//         {/* {!showAll && (
//           <div className="absolute inset-x-0 bottom-20 flex justify-center bg-gradient-to-t from-gray-900 pb-8 pt-32 transition-opacity duration-300">
//             <button
//               type="button"
//               className="relative top-20 mx-auto -mt-7.5 flex rounded-lg px-4.5 py-3 text-sm font-semibold text-white border border-transparent bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition duration-300 ease-in transform translate-y-0"
//               onClick={handleShowMore}
//             >
//               Okay, I get the point
//             </button>
//           </div>
//         )} */}
//       </div>
//     </section>
//   );
// };

// export default ServiceSection;
