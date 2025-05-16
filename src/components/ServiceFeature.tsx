// import Image from "next/image";
// import Link from "next/link";

// export default function ServiceFeature() {
//   return (
//     <div className="relative overflow-hidden pt-16 pb-32 space-y-24 ">
//       {/* First Section: NLP */}
//       <div className="relative">
//         <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
//           <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
//             <div>
//               <div>
//                 <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-500">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth="1.5"
//                     stroke="currentColor"
//                     aria-hidden="true"
//                     className="h-8 w-8 text-white"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
//                     />
//                   </svg>
//                 </span>
//               </div>
//               <div className="mt-6">
//                 <h2 className="text-3xl font-bold tracking-tight">
//                   Natural Language Processing (NLP):
//                 </h2>
//                 <p className="mt-4 text-lg">
//                   The AI product utilizes advanced NLP algorithms to understand
//                   and interpret human language, enabling it to accurately
//                   process and analyze text-based inputs.
//                 </p>
//                 <div className="mt-6">
//                   <Link
//                     href="/login"
//                     className="inline-flex rounded-lg bg-pink-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-pink-600 hover:bg-pink-700 hover:ring-pink-700"
//                   >
//                     Learn More
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="mt-12 sm:mt-16 lg:mt-0">
//             <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
//               <Image
//                 loading="lazy"
//                 width={647}
//                 height={486}
//                 className="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
//                 style={{ color: "transparent" }}
//                 src="/service_img/it.webp"
//                 alt="NLP illustration"
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Second Section: Sentiment Analysis */}
//       <div className="relative">
//         <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
//           <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 lg:col-start-2">
//             <div>
//               <div>
//                 <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-500">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth="1.5"
//                     stroke="currentColor"
//                     aria-hidden="true"
//                     className="h-8 w-8 text-white"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
//                     />
//                   </svg>
//                 </span>
//               </div>
//               <div className="mt-6">
//                 <h2 className="text-3xl font-bold tracking-tight">
//                   Sentiment Analysis:
//                 </h2>
//                 <p className="mt-4 text-lg">
//                   The product has built-in sentiment analysis capabilities,
//                   allowing it to determine the sentiment (positive, negative, or
//                   neutral) expressed in text or customer feedback.
//                 </p>
//                 <div className="mt-6">
//                   <Link
//                     href="/login"
//                     className="inline-flex rounded-lg bg-pink-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-pink-600 hover:bg-pink-700 hover:ring-pink-700"
//                   >
//                     Learn More
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="mt-12 sm:mt-16 lg:mt-0">
//             <div className="-ml-48 pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
//               <Image
//                 loading="lazy"
//                 width={647}
//                 height={486}
//                 className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
//                 style={{ color: "transparent" }}
//                 src="/service_img/it.webp"
//                 alt="Sentiment analysis illustration"
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Third Section: NLG */}
//       <div className="relative">
//         <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
//           <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
//             <div>
//               <div>
//                 <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-500">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth="1.5"
//                     stroke="currentColor"
//                     aria-hidden="true"
//                     className="h-8 w-8 text-white"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
//                     />
//                   </svg>
//                 </span>
//               </div>
//               <div className="mt-6">
//                 <h2 className="text-3xl font-bold tracking-tight">
//                   Natural Language Generation (NLG):
//                 </h2>
//                 <p className="mt-4 text-lg">
//                   The AI product can generate human-like written content,
//                   summaries, or reports based on structured data or analysis
//                   results.
//                 </p>
//                 <div className="mt-6">
//                   <Link
//                     href="/login"
//                     className="inline-flex rounded-lg bg-pink-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-pink-600 hover:bg-pink-700 hover:ring-pink-700"
//                   >
//                     Learn More
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="mt-12 sm:mt-16 lg:mt-0">
//             <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
//               <Image
//                 loading="lazy"
//                 width={646}
//                 height={485}
//                 className="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
//                 style={{ color: "transparent" }}
//                 src="/service_img/it.webp"
//                 alt="NLG illustration"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// little good ///////////
// "use client";
// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Image from "next/image";
// import Link from "next/link";

// // Category data
// const categories = [
//   {
//     id: 1,
//     name: "Vegetables",
//     items: 485,
//     image: "/service_img/it.webp",
//     bgColor: "bg-[#fef1f1]",
//   },
//   {
//     id: 2,
//     name: "Fruits",
//     items: 291,
//     image: "/service_img/it.webp",
//     bgColor: "bg-[#e1fcf2]",
//   },
//   {
//     id: 3,
//     name: "Cold Drinks",
//     items: 49,
//     image: "/service_img/it.webp",
//     bgColor: "bg-[#f4f1fe]",
//   },
//   {
//     id: 4,
//     name: "Bakery",
//     items: 8,
//     image: "/service_img/it.webp",
//     bgColor: "bg-[#fbf9e4]",
//   },
// ];

// // Slider settings
// const sliderSettings = {
//   dots: false,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 4,
//   slidesToScroll: 1,
//   arrows: true,
//   responsive: [
//     {
//       breakpoint: 1399,
//       settings: {
//         slidesToShow: 3,
//       },
//     },
//     {
//       breakpoint: 991,
//       settings: {
//         slidesToShow: 2,
//       },
//     },
//     {
//       breakpoint: 767,
//       settings: {
//         slidesToShow: 1,
//       },
//     },
//   ],
// };

// const ServiceFeature = () => {
//   return (
//     <section className="py-[50px] overflow-hidden max-[1199px]:py-[35px]">
//       <div className="container mx-auto px-4 max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
//         <div className="flex flex-wrap -mx-3">
//           {/* Left Image Section */}
//           <div className="w-full min-[992px]:w-5/12 px-3 mb-6 max-[991px]:hidden">
//             <div className="relative">
//               <Image
//                 src="/service_img/it.webp"
//                 alt="category"
//                 width={500}
//                 height={500}
//                 className="w-full rounded-[30px]"
//               />
//               <div className="absolute top-5 right-5 bg-black bg-opacity-80 py-1.5 px-4 rounded-[15px]">
//                 <span className="text-white text-sm font-normal">50% Off</span>
//               </div>
//             </div>
//           </div>

//           {/* Right Category Slider Section */}
//           <div className="w-full min-[992px]:w-7/12 px-3 mb-6">
//             <div className="max-[991px]:mt-[-24px]">
//               {/* Title */}
//               <div className="mb-[30px] max-[991px]:hidden">
//                 <h2
//                   className="font-['Quicksand'] text-[124px] text-white opacity-15 font-bold leading-[1.2] tracking-[0.03rem]
//                   max-[1399px]:text-[95px] max-[1199px]:text-[70px] max-[767px]:text-[42px]"
//                 >
//                   Explore Categories
//                 </h2>
//               </div>

//               {/* Slider */}
//               <div
//                 className="bg-white pt-[30px] pl-[30px] rounded-tl-[30px] ml-[-150px] w-[calc(100%+150px)]
//                 max-[991px]:ml-0 max-[991px]:w-full max-[991px]:p-0"
//               >
//                 <Slider {...sliderSettings}>
//                   {categories.map((category) => (
//                     <div key={category.id} className="px-3">
//                       <div
//                         className={`p-[30px] rounded-[20px] flex flex-col items-center text-center max-[1399px]:p-5
//                         ${category.bgColor}`}
//                         data-aos="flip-left"
//                         data-aos-duration="1000"
//                         data-aos-delay={category.id * 200}
//                       >
//                         <div className="mb-3">
//                           <Image
//                             src={category.image}
//                             alt={category.name}
//                             width={50}
//                             height={50}
//                             className="w-[50px] h-[50px] max-[1399px]:w-[65px] max-[1399px]:h-[65px]
//                             max-[1199px]:w-[50px] max-[1199px]:h-[50px]"
//                           />
//                         </div>
//                         <div>
//                           <h5 className="mb-0.5 text-base font-['Quicksand'] text-[#3d4750] font-semibold tracking-[0.03rem]">
//                             <Link
//                               href="/shop"
//                               className="font-['Poppins'] text-base font-medium text-[#3d4750] capitalize"
//                             >
//                               {category.name}
//                             </Link>
//                           </h5>
//                           <p className="font-['Poppins'] text-[13px] text-[#686e7d] leading-[25px] font-light tracking-[0.03rem]">
//                             {category.items} items
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </Slider>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServiceFeature;

// import Image from "next/image";

// const categories = [
//   {
//     name: "Bakery",
//     items: "08 items",
//     bgColor: "bg-[#fbf9e4]",
//     icon: "/assets/img/category/4.svg",
//   },
//   {
//     name: "Vegetables",
//     items: "485 items",
//     bgColor: "bg-[#fef1f1]",
//     icon: "/assets/img/category/1.svg",
//   },
//   {
//     name: "Fruits",
//     items: "291 items",
//     bgColor: "bg-[#e1fcf2]",
//     icon: "/assets/img/category/2.svg",
//   },
//   {
//     name: "Cold Drinks",
//     items: "49 items",
//     bgColor: "bg-[#f4f1fe]",
//     icon: "/assets/img/category/3.svg",
//   },
// ];

// export default function CategorySection() {
//   return (
//     <section className="py-12 overflow-hidden lg:py-16">
//       <div className="container mx-auto px-4 max-w-7xl">
//         <div className="flex flex-wrap items-center -mx-3">
//           {/* Image Section */}
//           <div className="w-full lg:w-5/12 px-3 mb-6 lg:mb-0">
//             <div className="relative hidden lg:block">
//               <Image
//                 src="/service_img/it.webp"
//                 alt="Category"
//                 width={600}
//                 height={400}
//                 className="w-full rounded-3xl"
//               />
//               <div className="absolute top-5 right-5 bg-black bg-opacity-80 text-white text-sm py-1 px-3 rounded-xl">
//                 50% Off
//               </div>
//             </div>
//           </div>

//           {/* Categories Section */}
//           <div className="w-full lg:w-7/12 px-3">
//             <div className="relative">
//               <h2 className="hidden lg:block font-quicksand text-[120px] text-white opacity-10 font-bold leading-tight tracking-wide mb-8">
//                 Explore Categories
//               </h2>
//               <div className="flex flex-wrap -mx-3">
//                 {categories.map((category, index) => (
//                   <div key={index} className="w-1/2 lg:w-1/4 px-3 mb-6">
//                     <div
//                       className={`p-6 rounded-2xl flex flex-col items-center text-center ${category.bgColor} transition-transform transform hover:scale-105`}
//                       data-aos="flip-left"
//                       data-aos-duration="1000"
//                       data-aos-delay={200 + index * 200}
//                     >
//                       <div className="mb-3">
//                         <Image
//                           src={category.icon}
//                           alt={category.name}
//                           width={50}
//                           height={50}
//                           className="w-12 h-12 lg:w-16 lg:h-16"
//                         />
//                       </div>
//                       <div>
//                         <h5 className="font-quicksand text-base font-semibold text-gray-800 mb-1">
//                           <a
//                             href="/shop"
//                             className="font-poppins text-base font-medium text-gray-800 capitalize"
//                           >
//                             {category.name}
//                           </a>
//                         </h5>
//                         <p className="font-poppins text-xs text-gray-600">
//                           {category.items}
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";
// import Image from "next/image";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const categories = [
//   {
//     name: "Bakery",
//     items: "08 items",
//     bgColor: "bg-[#fbf9e4]",
//     icon: "/service_img/it_support_chco4irb196a_64-2.png",
//   },
//   {
//     name: "Vegetables",
//     items: "485 items",
//     bgColor: "bg-[#fef1f1]",
//     icon: "/service_img/it_support_chco4irb196a_64-2.png",
//   },
//   {
//     name: "Fruits",
//     items: "291 items",
//     bgColor: "bg-[#e1fcf2]",
//     icon: "/service_img/it_support_chco4irb196a_64-2.png",
//   },
//   {
//     name: "Cold Drinks",
//     items: "49 items",
//     bgColor: "bg-[#f4f1fe]",
//     icon: "/service_img/it_support_chco4irb196a_64-2.png",
//   },
//   {
//     name: "Vegetables",
//     items: "485 items",
//     bgColor: "bg-[#fef1f1]",
//     icon: "/service_img/it_support_chco4irb196a_64-2.png",
//   },
//   {
//     name: "Fruits",
//     items: "291 items",
//     bgColor: "bg-[#e1fcf2]",
//     icon: "/service_img/it_support_chco4irb196a_64-2.png",
//   },

//   {
//     name: "Vegetables",
//     items: "485 items",
//     bgColor: "bg-[#fef1f1]",
//     icon: "/service_img/it_support_chco4irb196a_64-2.png",
//   },
// ];

// export default function CategorySection() {
//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <section className="py-12 overflow-hidden lg:py-16">
//       <div className="container mx-auto px-4 max-w-7xl">
//         <div className="flex flex-wrap items-center -mx-3">
//           {/* Image Section */}
//           <div className="w-full lg:w-5/12 px-3 mb-6 lg:mb-0">
//             <div className="relative hidden lg:block">
//               <Image
//                 src="/service_img/it.webp"
//                 alt="Category"
//                 width={600}
//                 height={400}
//                 className="w-full h-[400px] md:h-[500px] lg:h-[500px] object-cover rounded-3xl"
//               />

//               <div className="absolute top-5 right-5 bg-black bg-opacity-80 text-white text-sm py-1 px-3 rounded-xl">
//                 50% Off
//               </div>
//             </div>
//           </div>

//           {/* Categories Section with Slider */}
//           <div className="w-full lg:w-7/12 px-3">
//             <h2 className="hidden lg:block font-quicksand text-[120px] opacity-10 font-bold leading-tight tracking-wide mb-8">
//               Explore Categories
//             </h2>
//             <div className="relative">
//               <Slider {...settings}>
//                 {categories.map((category, index) => (
//                   <div key={index} className="px-3">
//                     <div
//                       className={`p-6 rounded-2xl flex flex-col items-center text-center ${category.bgColor} transition-transform transform hover:scale-105`}
//                       data-aos="flip-left"
//                       data-aos-duration="1000"
//                       data-aos-delay={200 + index * 200}
//                     >
//                       <div className="mb-3">
//                         <Image
//                           src={category.icon}
//                           alt={category.name}
//                           width={50}
//                           height={50}
//                           className="w-12 h-12 lg:w-16 lg:h-16"
//                         />
//                       </div>
//                       <div>
//                         <h5 className="font-quicksand text-base font-semibold text-gray-800 mb-1">
//                           <a
//                             href="/shop"
//                             className="font-poppins text-base font-medium text-gray-800 capitalize"
//                           >
//                             {category.name}
//                           </a>
//                         </h5>
//                         <p className="font-poppins text-xs text-gray-600">
//                           {category.items}
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </Slider>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

///////////////////////// slider /////////////////////////////
// "use client";
// import { useState } from "react";
// import Image from "next/image";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const categories = [
//   {
//     name: "Cyber Security",
//     items: "Amyntor specializes in providing a range..",
//     bgColor: "bg-[#fbf9e4]",
//     icon: "/service_img/cyber-4084714_1920-2420054903.jpg",
//   },
//   {
//     name: "Vegetables",
//     items: "485 items",
//     bgColor: "bg-[#fef1f1]",
//     icon: "/service_img/wp8548012-173446701.jpg",
//   },
//   {
//     name: "Fruits",
//     items: "291 items",
//     bgColor: "bg-[#e1fcf2]",
//     icon: "/service_img/it.webp",
//   },
//   {
//     name: "Cold Drinks",
//     items: "49 items",
//     bgColor: "bg-[#f4f1fe]",
//     icon: "/service_img/it.webp",
//   },
//   {
//     name: "Vegetables",
//     items: "485 items",
//     bgColor: "bg-[#fef1f1]",
//     icon: "/service_img/it.webp",
//   },
//   {
//     name: "Fruits",
//     items: "291 items",
//     bgColor: "bg-[#e1fcf2]",
//     icon: "/service_img/it.webp",
//   },
//   {
//     name: "Vegetables",
//     items: "485 items",
//     bgColor: "bg-[#fef1f1]",
//     icon: "/service_img/it.webp",
//   },
// ];

// export default function CategorySection() {
//   const [activeSlide, setActiveSlide] = useState(0);

//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     centerMode: true, // Enable center mode to identify the centered slide
//     centerPadding: "0px",
//     beforeChange: (current, next) => setActiveSlide(next), // Update active slide
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

//   return (
//     <section className="py-12 overflow-hidden lg:py-16">
//       <div className="container mx-auto px-4 max-w-7xl">
//         <div className="flex flex-wrap items-center -mx-3">
//           {/* Image Section */}
//           <div className="w-full lg:w-5/12 px-3 mb-6 lg:mb-0">
//             <div className="relative hidden lg:block">
//               <Image
//                 src={categories[activeSlide]?.icon || "/service_img/it.webp"} // Use the icon of the active slide
//                 alt={categories[activeSlide]?.name || "Category"}
//                 width={600}
//                 height={400}
//                 className="w-full h-[400px] md:h-[500px] lg:h-[500px] object-cover rounded-3xl"
//               />
//               <div className="absolute top-5 right-5 bg-black bg-opacity-80 text-white text-sm py-1 px-3 rounded-xl">
//                 50% Off
//               </div>
//             </div>
//           </div>

//           {/* Categories Section with Slider */}
//           <div className="w-full lg:w-7/12 px-3">
//             <h2 className="hidden lg:block font-quicksand text-[120px] opacity-60 font-bold text-black leading-tight tracking-wide mb-8">
//               Explore Categories
//             </h2>
//             <div className="relative">
//               <Slider {...settings}>
//                 {categories.map((category, index) => (
//                   <div key={index} className="px-3">
//                     <div
//                       className={`p-6 rounded-2xl flex flex-col items-center text-center ${category.bgColor} transition-transform transform hover:scale-105`}
//                       data-aos="flip-left"
//                       data-aos-duration="1000"
//                       data-aos-delay={200 + index * 200}
//                     >
//                       <div className="mb-3">
//                         <Image
//                           src={category.icon}
//                           alt={category.name}
//                           width={50}
//                           height={50}
//                           className="w-12 h-12 lg:w-16 lg:h-16"
//                         />
//                       </div>
//                       <div>
//                         <h5 className="font-quicksand text-base font-semibold text-gray-800 mb-1">
//                           <a
//                             href="/shop"
//                             className="font-poppins text-base font-medium text-gray-800 capitalize"
//                           >
//                             {category.name}
//                           </a>
//                         </h5>
//                         <p className="font-poppins text-xs text-gray-600">
//                           {category.items}
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </Slider>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";
// import { useState } from "react";
// import Image from "next/image";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const categories = [
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
//     bgColor: "bg-[#e1f4]",
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
//   const [activeSlide, setActiveSlide] = useState(0);

//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     centerMode: true,
//     centerPadding: "0px",
//     beforeChange: (current, next) => setActiveSlide(next),
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

//   return (
//     <section className="py-12 overflow-hidden lg:py-16">
//       <div className="container mx-auto px-4 max-w-7xl">
//         <div className="flex flex-wrap items-center -mx-3">
//           {/* Image Section */}
//           <div className="w-full lg:w-5/12 px-3 mb-6 lg:mb-0">
//             <div className="relative hidden lg:block">
//               <Image
//                 src={
//                   categories[activeSlide]?.subImage || "/service_img/it.webp"
//                 }
//                 alt={categories[activeSlide]?.name || "Category"}
//                 width={600}
//                 height={400}
//                 className="w-full h-[400px] md:h-[500px] lg:h-[500px] object-cover rounded-3xl"
//               />
//               <div className="absolute bottom-32 left-5 bg-black bg-opacity-80 text-white text-lg py-3 px-5 rounded-xl w-full max-w-[90%] max-h-[40vh] overflow-y-auto overflow-x-hidden">
//                 {Array.isArray(categories[activeSlide]?.points)
//                   ? categories[activeSlide].points.map((point, i) => (
//                       <div
//                         key={i}
//                         className="mb-1 break-words whitespace-normal"
//                       >
//                         • {point}
//                       </div>
//                     ))
//                   : categories[activeSlide]?.points ||
//                     "Explore our range of services."}
//               </div>
//             </div>
//           </div>

//           {/* Categories Section with Slider */}
//           <div className="w-full lg:w-7/12 px-3">
//             <h2 className="hidden lg:block font-quicksand text-[120px] opacity-60 font-bold text-black leading-tight tracking-wide mb-8">
//               Explore Categories
//             </h2>
//             <div className="relative">
//               <Slider {...settings}>
//                 {categories.map((category, index) => (
//                   <div key={index} className="px-3">
//                     <div
//                       className={`p-6 rounded-2xl flex flex-col items-center text-center ${category.bgColor} transition-transform transform hover:scale-105`}
//                       data-aos="flip-left"
//                       data-aos-duration="1000"
//                       data-aos-delay={200 + index * 200}
//                     >
//                       <div className="mb-3">
//                         <Image
//                           src={category.icon}
//                           alt={category.name}
//                           width={50}
//                           height={50}
//                           className="w-12 h-12 lg:w-16 lg:h-16"
//                         />
//                       </div>
//                       <div>
//                         <h5 className="font-quicksand text-base font-semibold text-gray-800 mb-1">
//                           <a
//                             href="/shop"
//                             className="font-poppins text-base font-medium text-gray-800 capitalize"
//                           >
//                             {category.name}
//                           </a>
//                         </h5>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </Slider>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";
// import { useState } from "react";
// import Image from "next/image";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const categories = [
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
//     bgColor: "bg-[#e1f4]",
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
//   const [activeSlide, setActiveSlide] = useState(0);

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
//     beforeChange: (current, next) => setActiveSlide(next),
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

//   return (
//     <section className="py-12 overflow-hidden lg:py-16">
//       <div className="container mx-auto px-4 max-w-7xl">
//         <div className="flex flex-wrap items-center -mx-3">
//           {/* Image Section */}
//           <div className="w-full lg:w-5/12 px-3 mb-6 lg:mb-0">
//             <div className="relative hidden lg:block">
//               <Image
//                 src={
//                   categories[activeSlide]?.subImage || "/service_img/it.webp"
//                 }
//                 alt={categories[activeSlide]?.name || "Category"}
//                 width={600}
//                 height={400}
//                 className="w-full h-[400px] md:h-[500px] lg:h-[500px] object-cover rounded-3xl"
//               />
//               <div className="absolute bottom-32 left-5 bg-black bg-opacity-80 text-white text-lg py-3 px-5 rounded-xl w-full max-w-[90%] max-h-[40vh] overflow-y-auto overflow-x-hidden">
//                 {Array.isArray(categories[activeSlide]?.points)
//                   ? categories[activeSlide].points.map((point, i) => (
//                       <div
//                         key={i}
//                         className="mb-1 break-words whitespace-normal"
//                       >
//                         • {point}
//                       </div>
//                     ))
//                   : categories[activeSlide]?.points ||
//                     "Explore our range of services."}
//               </div>
//             </div>
//           </div>

//           {/* Categories Section with Slider */}
//           <div className="w-full lg:w-7/12 px-3">
//             <h2 className="hidden lg:block font-quicksand text-[120px] opacity-60 font-bold text-black leading-tight tracking-wide mb-8">
//               Explore Categories
//             </h2>
//             <div className="relative">
//               <Slider {...settings}>
//                 {categories.map((category, index) => (
//                   <div key={index} className="px-3">
//                     <div
//                       className={`p-6 rounded-2xl flex flex-col items-center text-center ${
//                         category.bgColor
//                       } transition-transform transform hover:scale-105
//             ${index === activeSlide ? "border-4 border-green-500" : ""}
// `}
//                       data-aos="flip-left"
//                       data-aos-duration="1000"
//                       data-aos-delay={200 + index * 200}
//                     >
//                       <div className="mb-3">
//                         <Image
//                           src={category.icon}
//                           alt={category.name}
//                           width={50}
//                           height={50}
//                           className="w-12 h-12 lg:w-16 lg:h-16"
//                         />
//                       </div>
//                       <div>
//                         <h5 className="font-quicksand text-base font-semibold text-gray-800 mb-1">
//                           <a
//                             href="/shop"
//                             className="font-poppins text-base font-medium text-gray-800 capitalize"
//                           >
//                             {category.name}
//                           </a>
//                         </h5>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </Slider>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";
// import { useState } from "react";
// import Image from "next/image";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const categories = [
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
//     bgColor: "bg-[#e1f4]",
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
//   const [activeSlide, setActiveSlide] = useState(0);

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
//     beforeChange: (current, next) => setActiveSlide(next),
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

//   return (
//     <section className="py-12 overflow-hidden lg:py-16">
//       <div className="container mx-auto px-4 max-w-7xl">
//         <div className="flex flex-wrap items-center -mx-3">
//           {/* Image Section */}
//           <div className="w-full lg:w-5/12 px-3 mb-6 lg:mb-0">
//             <div className="relative">
//               <Image
//                 src={
//                   categories[activeSlide]?.subImage || "/service_img/it.webp"
//                 }
//                 alt={categories[activeSlide]?.name || "Category"}
//                 width={600}
//                 height={400}
//                 className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[500px] object-cover rounded-3xl"
//               />
//               <div className="absolute bottom-4 sm:bottom-8 left-3 sm:left-5 bg-black bg-opacity-80 text-white text-sm sm:text-lg py-2 sm:py-3 px-3 sm:px-5 rounded-xl w-[calc(100%-24px)] sm:w-[calc(100%-40px)] max-h-[40vh] overflow-y-auto overflow-x-hidden">
//                 {Array.isArray(categories[activeSlide]?.points)
//                   ? categories[activeSlide].points.map((point, i) => (
//                       <div
//                         key={i}
//                         className="mb-1 break-words whitespace-normal text-xs sm:text-base"
//                       >
//                         • {point}
//                       </div>
//                     ))
//                   : categories[activeSlide]?.points ||
//                     "Explore our range of services."}
//               </div>
//             </div>
//           </div>

//           {/* Categories Section */}
//           <div className="w-full lg:w-7/12 px-3">
//             <h2 className="font-quicksand text-4xl sm:text-6xl lg:text-[120px] opacity-60 font-bold text-black leading-tight tracking-wide mb-6 lg:mb-8">
//               Explore Categories
//             </h2>
//             <div className="relative">
//               {/* Slider for Desktop/Tablet (md and above) */}
//               <div className="hidden md:block">
//                 <Slider {...settings}>
//                   {categories.map((category, index) => (
//                     <div key={index} className="px-3">
//                       <div
//                         className={`p-6 rounded-2xl flex flexed-col items-center text-center ${
//                           category.bgColor
//                         } transition-transform transform hover:scale-105 ${
//                           index === activeSlide
//                             ? "border-4 border-green-500"
//                             : ""
//                         }`}
//                         data-aos="flip-left"
//                         data-aos-duration="1000"
//                         data-aos-delay={200 + index * 200}
//                       >
//                         <div className="mb-3">
//                           <Image
//                             src={category.icon}
//                             alt={category.name}
//                             width={50}
//                             height={50}
//                             className="w-12 h-12 lg:w-16 lg:h-16"
//                           />
//                         </div>
//                         <div>
//                           <h5 className="font-quicksand text-base font-semibold text-gray-800 mb-1">
//                             <a
//                               href="/shop"
//                               className="font-poppins text-base font-medium text-gray-800 capitalize"
//                             >
//                               {category.name}
//                             </a>
//                           </h5>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </Slider>
//               </div>
//               {/* Grid for Mobile (below md) */}
//               <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 {categories.map((category, index) => (
//                   <div
//                     key={index}
//                     className={`p-6 rounded-2xl flex flex-col items-center text-center ${
//                       category.bgColor
//                     } transition-transform transform hover:scale-105 cursor-pointer ${
//                       index === activeSlide ? "border-4 border-green-500" : ""
//                     }`}
//                     onClick={() => setActiveSlide(index)}
//                     data-aos="flip-left"
//                     data-aos-duration="1000"
//                     data-aos-delay={200 + index * 200}
//                   >
//                     <div className="mb-3">
//                       <Image
//                         src={category.icon}
//                         alt={category.name}
//                         width={50}
//                         height={50}
//                         className="w-10 h-10 sm:w-12 sm:h-12"
//                       />
//                     </div>
//                     <div>
//                       <h5 className="font-quicksand text-sm sm:text-base font-semibold text-gray-800 mb-1">
//                         <a
//                           href="/shop"
//                           className="font-poppins text-sm sm:text-base font-medium text-gray-800 capitalize"
//                         >
//                           {category.name}
//                         </a>
//                       </h5>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

///////////////////// 15-5-2025------------
// "use client";
// import { useState, useRef } from "react";
// import Image from "next/image";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const categories = [
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
//     bgColor: "bg-[#e1f4]",
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
//   const [activeSlide, setActiveSlide] = useState(0);
//   const sliderRef = useRef<any>(null);

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
//     beforeChange: (current: any, next: any) => {
//       console.log("Slider changing to index:", next);
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

//   const handleCategorySelect = (index: any) => {
//     console.log("Category selected:", index);
//     setActiveSlide(index);
//     if (sliderRef.current) {
//       sliderRef.current.slickGoTo(index);
//     }
//   };

//   return (
//     <section className="py-12 overflow-hidden lg:py-16">
//       <div className="container mx-auto px-4 max-w-7xl">
//         <div className="flex flex-wrap items-center -mx-3">
//           {/* Image Section */}
//           <div className="w-full lg:w-5/12 px-3 mb-6 lg:mb-0">
//             <div className="relative">
//               <Image
//                 src={
//                   categories[activeSlide]?.subImage || "/service_img/it.webp"
//                 }
//                 alt={categories[activeSlide]?.name || "Category"}
//                 width={600}
//                 height={400}
//                 className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[500px] object-cover rounded-3xl"
//               />

//               {/* Overlay text */}
//               <div className="absolute top-24 sm:bottom-8 left-1/2 -translate-x-1/2 bg-white bg-opacity-80 text-gray-700 text-sm sm:text-lg py-2 sm:py-3 px-3 sm:px-5 rounded-xl w-[calc(100%-24px)] sm:w-[calc(100%-40px)] max-h-[32vh] overflow-y-auto overflow-x-hidden pointer-events-none">
//                 {Array.isArray(categories[activeSlide]?.points)
//                   ? categories[activeSlide].points.map((point, i) => (
//                       <div
//                         key={i}
//                         className="mb-1 break-words whitespace-normal text-xs sm:text-base"
//                       >
//                         • {point}
//                       </div>
//                     ))
//                   : categories[activeSlide]?.points ||
//                     "Explore our range of services."}
//               </div>
//             </div>
//           </div>

//           {/* Categories Section */}
//           <div className="w-full lg:w-7/12 px-3">
//             <h2 className="font-quicksand text-4xl sm:text-6xl lg:text-[120px] opacity-60 font-bold text-black leading-tight tracking-wide mb-6 lg:mb-8">
//               Explore Categories
//             </h2>
//             <div className="relative">
//               {/* Slider for Desktop/Tablet (md and above) */}
//               <div className="hidden md:block">
//                 <Slider {...settings} ref={sliderRef}>
//                   {categories.map((category, index) => (
//                     <div key={index} className="px-3">
//                       <div
//                         className={`p-6 rounded-2xl flex flex-col items-center text-center ${
//                           category.bgColor
//                         } transition-transform transform hover:scale-105 cursor-pointer ${
//                           index === activeSlide
//                             ? "border-4 border-[#2e2e84]"
//                             : ""
//                         }`}
//                         onClick={() => handleCategorySelect(index)}
//                         onTouchStart={() => handleCategorySelect(index)} // Added for touch support
//                         data-aos="flip-left"
//                         data-aos-duration="1000"
//                         data-aos-delay={200 + index * 200}
//                       >
//                         <div className="mb-3">
//                           <Image
//                             src={category.icon}
//                             alt={category.name}
//                             width={50}
//                             height={50}
//                             className="w-12 h-12 lg:w-16 lg:h-16"
//                           />
//                         </div>
//                         <div>
//                           <h5 className="font-quicksand text-base font-semibold text-gray-800 mb-1">
//                             <a
//                               href="/shop"
//                               className="font-poppins text-base font-medium text-gray-800 capitalize"
//                             >
//                               {category.name}
//                             </a>
//                           </h5>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </Slider>
//               </div>
//               {/* Grid for Mobile (below md) */}
//               <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 {categories.map((category, index) => (
//                   <div
//                     key={index}
//                     className={`p-4 sm:p-6 rounded-2xl flex flex-col items-center text-center ${
//                       category.bgColor
//                     } transition-transform transform hover:scale-105 cursor-pointer ${
//                       index === activeSlide ? "border-4 border-[#2e2e84]" : ""
//                     }`}
//                     onClick={() => handleCategorySelect(index)}
//                     onTouchStart={() => handleCategorySelect(index)} // Added for touch support
//                     data-aos="flip-left"
//                     data-aos-duration="1000"
//                     data-aos-delay={200 + index * 200}
//                   >
//                     <div className="mb-3">
//                       <Image
//                         src={category.icon}
//                         alt={category.name}
//                         width={50}
//                         height={50}
//                         className="w-10 h-10 sm:w-12 sm:h-12"
//                       />
//                     </div>
//                     <div>
//                       <h5 className="font-quicksand text-sm sm:text-base font-semibold text-gray-800 mb-1">
//                         <a
//                           href="/shop"
//                           className="font-poppins text-sm sm:text-base font-medium text-gray-800 capitalize pointer-events-none" // Prevent link clicks
//                         >
//                           {category.name}
//                         </a>
//                       </h5>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";
// import { useState, useRef } from "react";
// import Image from "next/image";
// import Slider, { Settings } from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const categories = [
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
//     bgColor: "bg-[#e1f4]",
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
//   const [activeSlide, setActiveSlide] = useState(0);
//   const sliderRef = useRef<Slider>(null);

//   const settings: Settings = {
//     centerMode: true,
//     centerPadding: "0px",
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     infinite: true,
//     speed: 500,
//     dots: false,
//     beforeChange: (next: number) => {
//       console.log("Slider changing to index:", next);
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
//     console.log("Category selected:", index);
//     setActiveSlide(index);
//     if (sliderRef.current) {
//       sliderRef.current.slickGoTo(index);
//     }
//   };

//   const validActiveSlide = Math.min(
//     Math.max(activeSlide, 0),
//     categories.length - 1
//   );

//   return (
//     <section className="py-12 overflow-hidden lg:py-16">
//       <div className="container mx-auto px-4 max-w-7xl">
//         <div className="flex flex-wrap items-center -mx-3">
//           {/* Image Section */}
//           <div className="w-full lg:w-5/12 px-3 mb-6 lg:mb-0">
//             <div className="relative">
//               <Image
//                 src={
//                   categories[validActiveSlide]?.subImage ||
//                   "/service_img/it.webp"
//                 }
//                 alt={categories[validActiveSlide]?.name || "Category"}
//                 width={600}
//                 height={400}
//                 className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[500px] object-cover rounded-3xl"
//               />

//               {/* Overlay text */}
//               <div className="absolute top-24 sm:bottom-8 left-1/2 -translate-x-1/2 bg-white bg-opacity-80 text-gray-700 text-sm sm:text-lg py-2 sm:py-3 px-3 sm:px-5 rounded-xl w-[calc(100%-24px)] sm:w-[calc(100%-40px)] max-h-[32vh] overflow-y-auto overflow-x-hidden pointer-events-none">
//                 {Array.isArray(categories[validActiveSlide]?.points)
//                   ? categories[validActiveSlide].points.map((point, i) => (
//                       <div
//                         key={i}
//                         className="mb-1 break-words whitespace-normal text-xs sm:text-base"
//                       >
//                         • {point}
//                       </div>
//                     ))
//                   : categories[validActiveSlide]?.points ||
//                     "Explore our range of services."}
//               </div>
//             </div>
//           </div>

//           {/* Categories Section */}
//           <div className="w-full lg:w-7/12 px-3">
//             <h2 className="font-quicksand text-4xl sm:text-6xl lg:text-[120px] opacity-60 font-bold text-black leading-tight tracking-wide mb-6 lg:mb-8">
//               Explore Categories
//             </h2>
//             <div className="relative">
//               {/* Slider for Desktop/Tablet (md and above) */}
//               <div className="hidden md:block">
//                 <Slider {...settings} ref={sliderRef}>
//                   {categories.map((category, index) => (
//                     <div key={index} className="px-3">
//                       <div
//                         className={`p-6 rounded-2xl flex flex-col items-center text-center ${
//                           category.bgColor
//                         } transition-transform transform hover:scale-105 cursor-pointer ${
//                           index === activeSlide
//                             ? "border-4 border-[#2e2e84]"
//                             : ""
//                         }`}
//                         onClick={() => handleCategorySelect(index)}
//                         onTouchEnd={() => handleCategorySelect(index)}
//                       >
//                         <div className="mb-3">
//                           <Image
//                             src={category.icon}
//                             alt={category.name}
//                             width={50}
//                             height={50}
//                             className="w-12 h-12 lg:w-16 lg:h-16"
//                           />
//                         </div>
//                         <div>
//                           <h5 className="font-quicksand text-base font-semibold text-gray-800 mb-1">
//                             <a
//                               href="/shop"
//                               className="font-poppins text-base font-medium text-gray-800 capitalize"
//                             >
//                               {category.name}
//                             </a>
//                           </h5>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </Slider>
//               </div>
//               {/* Grid for Mobile (below md) */}
//               <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 {categories.map((category, index) => (
//                   <div
//                     key={index}
//                     className={`p-4 sm:p-6 rounded-2xl flex flex-col items-center text-center ${
//                       category.bgColor
//                     } transition-transform transform hover:scale-105 cursor-pointer ${
//                       index === activeSlide ? "border-4 border-[#2e2e84]" : ""
//                     }`}
//                     onClick={() => handleCategorySelect(index)}
//                     onTouchEnd={() => handleCategorySelect(index)}
//                   >
//                     <div className="mb-3">
//                       <Image
//                         src={category.icon}
//                         alt={category.name}
//                         width={50}
//                         height={50}
//                         className="w-10 h-10 sm:w-12 sm:h-12"
//                       />
//                     </div>
//                     <div>
//                       <h5 className="font-quicksand text-sm sm:text-base font-semibold text-gray-800 mb-1">
//                         <a
//                           href="/shop"
//                           className="font-poppins text-sm sm:text-base font-medium text-gray-800 capitalize"
//                         >
//                           {category.name}
//                         </a>
//                       </h5>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";
// import { useState, useRef, useEffect } from "react";
// import Image from "next/image";
// import Slider, { Settings } from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const categories = [
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
//     bgColor: "bg-[#e1f4]",
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
//   const [activeSlide, setActiveSlide] = useState(1); // Start with second slide for centering
//   const sliderRef = useRef<Slider>(null);

//   // Center the initial slide on mount
//   useEffect(() => {
//     if (sliderRef.current) {
//       sliderRef.current.slickGoTo(1, true); // Silent transition to center the second slide
//     }
//   }, []);

//   const settings: Settings = {
//     centerMode: true,
//     centerPadding: "0px",
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     infinite: true,
//     speed: 500,
//     dots: false,
//     initialSlide: 1, // Start with the second slide centered
//     beforeChange: (next: number) => {
//       console.log("Slider changing to index:", next);
//       setActiveSlide(next);
//       if (sliderRef.current) {
//         sliderRef.current.slickGoTo(next, false); // Ensure the next slide is centered
//       }
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
//     console.log("Category selected:", index);
//     setActiveSlide(index);
//     if (sliderRef.current) {
//       sliderRef.current.slickGoTo(index, false); // Center the selected slide
//     }
//   };

//   const validActiveSlide = Math.min(
//     Math.max(activeSlide, 0),
//     categories.length - 1
//   );

//   return (
//     <section className="py-12 overflow-hidden lg:py-16">
//       <div className="container mx-auto px-4 max-w-7xl">
//         <div className="flex flex-wrap items-center -mx-3">
//           {/* Image Section */}
//           <div className="w-full lg:w-5/12 px-3 mb-6 lg:mb-0">
//             <div className="relative">
//               <Image
//                 src={
//                   categories[validActiveSlide]?.subImage ||
//                   "/service_img/it.webp"
//                 }
//                 alt={categories[validActiveSlide]?.name || "Category"}
//                 width={600}
//                 height={400}
//                 className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[500px] object-cover rounded-3xl"
//               />

//               {/* Overlay text */}
//               <div className="absolute top-24 sm:bottom-8 left-1/2 -translate-x-1/2 bg-white bg-opacity-80 text-gray-700 text-sm sm:text-lg py-2 sm:py-3 px-3 sm:px-5 rounded-xl w-[calc(100%-24px)] sm:w-[calc(100%-40px)] max-h-[32vh] overflow-y-auto overflow-x-hidden pointer-events-none">
//                 {Array.isArray(categories[validActiveSlide]?.points)
//                   ? categories[validActiveSlide].points.map((point, i) => (
//                       <div
//                         key={i}
//                         className="mb-1 break-words whitespace-normal text-xs sm:text-base"
//                       >
//                         • {point}
//                       </div>
//                     ))
//                   : categories[validActiveSlide]?.points ||
//                     "Explore our range of services."}
//               </div>
//             </div>
//           </div>

//           {/* Categories Section */}
//           <div className="w-full lg:w-7/12 px-3">
//             <h2 className="font-quicksand text-4xl sm:text-6xl lg:text-[120px] opacity-60 font-bold text-black leading-tight tracking-wide mb-6 lg:mb-8">
//               Explore Categories
//             </h2>
//             <div className="relative">
//               {/* Slider for Desktop/Tablet (md and above) */}
//               <div className="hidden md:block">
//                 <Slider {...settings} ref={sliderRef}>
//                   {categories.map((category, index) => (
//                     <div key={index} className="px-3">
//                       <div
//                         className={`p-6 rounded-2xl flex flex-col items-center text-center ${
//                           category.bgColor
//                         } transition-transform transform hover:scale-105 cursor-pointer ${
//                           index === activeSlide
//                             ? "border-4 border-[#2e2e84] scale-110 z-10"
//                             : ""
//                         }`}
//                         onClick={() => handleCategorySelect(index)}
//                         onTouchEnd={() => handleCategorySelect(index)}
//                       >
//                         <div className="mb-3">
//                           <Image
//                             src={category.icon}
//                             alt={category.name}
//                             width={50}
//                             height={50}
//                             className="w-12 h-12 lg:w-16 lg:h-16"
//                           />
//                         </div>
//                         <div>
//                           <h5 className="font-quicksand text-base font-semibold text-gray-800 mb-1">
//                             <a
//                               href="/shop"
//                               className="font-poppins text-base font-medium text-gray-800 capitalize"
//                             >
//                               {category.name}
//                             </a>
//                           </h5>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </Slider>
//               </div>
//               {/* Grid for Mobile (below md) */}
//               <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 {categories.map((category, index) => (
//                   <div
//                     key={index}
//                     className={`p-4 sm:p-6 rounded-2xl flex flex-col items-center text-center ${
//                       category.bgColor
//                     } transition-transform transform hover:scale-105 cursor-pointer ${
//                       index === activeSlide ? "border-4 border-[#2e2e84]" : ""
//                     }`}
//                     onClick={() => handleCategorySelect(index)}
//                     onTouchEnd={() => handleCategorySelect(index)}
//                   >
//                     <div className="mb-3">
//                       <Image
//                         src={category.icon}
//                         alt={category.name}
//                         width={50}
//                         height={50}
//                         className="w-10 h-10 sm:w-12 sm:h-12"
//                       />
//                     </div>
//                     <div>
//                       <h5 className="font-quicksand text-sm sm:text-base font-semibold text-gray-800 mb-1">
//                         <a
//                           href="/shop"
//                           className="font-poppins text-sm sm:text-base font-medium text-gray-800 capitalize"
//                         >
//                           {category.name}
//                         </a>
//                       </h5>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";
// import { useState, useRef } from "react";
// import Image from "next/image";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

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
//     bgColor: "bg-[#e1f4]",
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
//       console.log("Slider changing to index:", next);
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
//     console.log("Category selected:", index);
//     setActiveSlide(index);
//     if (sliderRef.current) {
//       sliderRef.current.slickGoTo(index);
//     }
//   };

//   return (
//     <section className="py-12 overflow-hidden lg:py-16">
//       <div className="mx-auto px-4 max-w-7xl">
//         <div className="flex flex-wrap items-center -mx-3">
//           {/* Image Section */}
//           <div className="w-full lg:w-5/12 px-3 mb-6 lg:mb-0">
//             <div className="relative flex items-center justify-center">
//               {/* Image */}
//               <Image
//                 src={
//                   categories[activeSlide]?.subImage || "/service_img/it.webp"
//                 }
//                 alt={categories[activeSlide]?.name || "Category"}
//                 width={600}
//                 height={400}
//                 className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[500px] object-cover rounded-3xl"
//               />

//               {/* Black overlay */}
//               <div className="absolute inset-0 bg-black opacity-30 rounded-3xl"></div>

//               {/* Overlay text */}
//               <div className="absolute inset-0 flex items-center justify-center px-3 sm:px-5">
//                 <div className="bg-white bg-opacity-80 py-12 text-gray-700 text-sm sm:text-lg px-5 rounded-xl pointer-events-none w-full sm:w-3/4 overflow-hidden">
//                   {Array.isArray(categories[activeSlide]?.points)
//                     ? categories[activeSlide].points.map((point, i) => (
//                         <div
//                           key={i}
//                           className="mb-1 break-words text-xs sm:text-base leading-tight"
//                         >
//                           {point}
//                         </div>
//                       ))
//                     : categories[activeSlide]?.points ||
//                       "Explore our range of services."}
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Categories Section */}
//           <div className="w-full lg:w-7/12 px-3">
//             <h2 className="font-quicksand text-4xl sm:text-6xl lg:text-[120px] font-bold leading-tight tracking-wide mb-6 lg:mb-8 outline-text">
//               Explore <br /> Categories
//             </h2>

//             <div className="relative">
//               {/* Slider for Desktop/Tablet (md and above) */}
//               <div className="hidden md:block">
//                 <Slider {...settings} ref={sliderRef}>
//                   {categories.map((category, index) => (
//                     <div key={index} className="px-3">
//                       <div
//                         className={`p-6 rounded-2xl flex flex-col items-center text-center ${
//                           category.bgColor
//                         } transition-transform transform hover:scale-105 cursor-pointer ${
//                           index === activeSlide
//                             ? "border-4 border-[#2e2e84]"
//                             : ""
//                         }`}
//                         onClick={() => handleCategorySelect(index)}
//                         onTouchStart={() => handleCategorySelect(index)}
//                         data-aos="flip-left"
//                         data-aos-duration="1000"
//                         data-aos-delay={200 + index * 200}
//                       >
//                         <div className="mb-3">
//                           <Image
//                             src={category.icon}
//                             alt={category.name}
//                             width={50}
//                             height={50}
//                             className="w-12 h-12 lg:w-16 lg:h-16"
//                           />
//                         </div>
//                         <div>
//                           <h5 className="font-quicksand text-base font-semibold text-gray-800 mb-1">
//                             <p className="font-poppins text-base font-medium text-gray-800 capitalize">
//                               {category.name}
//                             </p>
//                           </h5>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </Slider>
//               </div>
//               {/* Grid for Mobile (below md) */}
//               <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 {categories.map((category, index) => (
//                   <div
//                     key={index}
//                     className={`p-4 sm:p-6 rounded-2xl flex flex-col items-center text-center ${
//                       category.bgColor
//                     } transition-transform transform hover:scale-105 cursor-pointer ${
//                       index === activeSlide ? "border-4 border-[#2e2e84]" : ""
//                     }`}
//                     onClick={() => handleCategorySelect(index)}
//                     data-lotypes="true"
//                     onTouchStart={() => handleCategorySelect(index)}
//                     data-aos="flip-left"
//                     data-aos-duration="1000"
//                     data-aos-delay={200 + index * 200}
//                   >
//                     <div className="mb-3">
//                       <Image
//                         src={category.icon}
//                         alt={category.name}
//                         width={50}
//                         height={50}
//                         className="w-10 h-10 sm:w-12 sm:h-12"
//                       />
//                     </div>
//                     <div>
//                       <h5 className="font-quicksand text-sm sm:text-base font-semibold text-gray-800 mb-1">
//                         <p className="font-poppins text-sm sm:text-base font-medium text-gray-800 capitalize pointer-events-none">
//                           {category.name}
//                         </p>
//                       </h5>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
////////////////////// best service card////////////////////////
"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Breadcrumb from "./BreadCrumb/BreadCrumb";
import { Check } from "lucide-react";

interface Category {
  name: string;
  bgColor: string;
  icon: string;
  subImage: string;
  points: string[];
}

const categories: Category[] = [
  {
    name: "IT Service",
    bgColor: "bg-[#fbf9e4]",
    icon: "/service_img/icons/global-icon-png-1-62588758.jpg",
    subImage: "/service_img/subImg/it.webp",
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
    bgColor: "bg-[#fef1f1]",
    icon: "/service_img/icons/cctv-camera-131-1086991-134936168.png",
    subImage: "/service_img/subImg/cctv.webp",
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
    name: "Bio-Metric Service",
    bgColor: "bg-[#F5EEDD]",
    icon: "/service_img/icons/Fingerprint-512-3274273457.png",
    subImage: "/service_img/subImg/bio-metric.webp",
    points: [
      "Annual Maintenance Contracts (AMC) for Servers, Workstations, Printers, and Plotters.",
      "Access Control System Installation & Configuration.",
      "PABX (Private Automatic Branch Exchange) Installation & Configuration.",
      "Biometric Time Attendance System Setup.",
      "Intercom & Paging System Installation.",
    ],
  },
  {
    name: "UI / UX Service",
    bgColor: "bg-[#e1fcf2]",
    icon: "/service_img/icons/pngtree-ui-and-ux-app-concept-elements-collection-for-social-media-png-image_6866294-2171584179.png",
    subImage: "/service_img/subImg/ui-ux-service2.webp",
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
    bgColor: "bg-[#f4f1fe]",
    icon: "/service_img/icons/pngtree-network-icon-png-image_8443511-389870977.png",
    subImage: "/service_img/subImg/network.webp",
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
];

export default function CategorySection() {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const sliderRef = useRef<Slider>(null);

  const settings = {
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 500,
    dots: false,
    beforeChange: (_current: number, next: number) => {
      setActiveSlide(next);
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };

  const handleCategorySelect = (index: number) => {
    setActiveSlide(index);
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
    }
  };

  return (
    <>
      <Breadcrumb
        path="Service"
        title="Our Service"
        paragraph="Explore our range of services tailored to your needs."
        bgImg="/top-banner/about-banner.webp"
      />
      <section className="py-8 lg:py-16 overflow-hidden">
        <div className="mx-auto px-4 max-w-7xl">
          <div className="flex flex-wrap items-center -mx-3">
            {/* Image Section */}
            <div className="w-full lg:w-5/12 px-3 mb-6 lg:mb-0">
              <div className="relative flex items-center justify-center">
                <Image
                  src={
                    categories[activeSlide]?.subImage ||
                    "/service_img/subImg/it.webp"
                  }
                  alt={categories[activeSlide]?.name || "Category"}
                  width={600}
                  height={400}
                  className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[500px] object-cover rounded-3xl"
                />
                <div className="absolute inset-0 bg-black opacity-30 rounded-3xl"></div>
                <div className="absolute inset-0 flex items-center justify-center px-3 sm:px-5">
                  <div className="bg-white bg-opacity-80 py-8 text-gray-700 text-sm sm:text-lg px-5 rounded-xl pointer-events-none w-full sm:w-3/4">
                    {categories[activeSlide]?.points.map((point, i) => (
                      <div
                        key={i}
                        className="mb-3 break-words text-xs sm:text-base flex items-start "
                      >
                        <div className="bg-[#2e2e84] rounded-full p-0.5 mr-3 mt-1">
                          <Check size={12} color="#fff" />
                        </div>
                        {point}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Categories Section */}
            <div className="w-full lg:w-7/12 px-3">
              <h2 className="font-quicksand heading-all text-4xl sm:text-6xl text-gray-500 lg:text-[120px] font-bold leading- tracking- mb-6 lg:mb-8">
                Explore <br /> Categories
              </h2>

              <div className="relative">
                {/* Slider for Desktop/Tablet (md and above) */}
                <div className="hidden md:block">
                  <Slider {...settings} ref={sliderRef}>
                    {categories.map((category, index) => (
                      <div key={index} className="px-3">
                        <div
                          className={`p-6 rounded-2xl flex flex-col items-center text-center ${
                            category.bgColor
                          } cursor-pointer ${
                            index === activeSlide
                              ? "border border-[#2e2e84]"
                              : ""
                          }`}
                          onClick={() => handleCategorySelect(index)}
                          onTouchStart={() => handleCategorySelect(index)}
                        >
                          <div className="mb-3 transform transition-transform duration-300 hover:scale-110">
                            <Image
                              src={category.icon}
                              alt={category.name}
                              width={50}
                              height={50}
                              className={` ${
                                index === activeSlide ? "scale-150 my-2 " : ""
                              } w-10 h-10 lg:w-12 lg:h-12 transition-all duration-500`}
                            />
                          </div>
                          <div>
                            <h5 className="font-quicksand text-base font-semibold text-gray-800 mb-1">
                              <p className="font-poppins text-base font-medium text-gray-800 capitalize">
                                {category.name}
                              </p>
                            </h5>
                          </div>
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>

                {/* Card List for Mobile (below md) */}
                <div className="md:hidden space-y-4">
                  {categories.map((category, index) => (
                    <div
                      key={index}
                      className={`p-4 rounded-lg ${
                        category.bgColor
                      } shadow-md cursor-pointer transition-transform hover:scale-[1.02] ${
                        index === activeSlide ? "border-4 border-[#2e2e84]" : ""
                      }`}
                      onClick={() => handleCategorySelect(index)}
                      onTouchStart={() => handleCategorySelect(index)}
                    >
                      {/* Card Header: Icon and Name */}
                      <div className="flex items-center mb-3">
                        <Image
                          src={category.icon}
                          alt={category.name}
                          width={40}
                          height={40}
                          className="w-10 h-10 mr-3"
                        />
                        <h3 className="font-quicksand text-lg font-semibold text-gray-800">
                          {category.name}
                        </h3>
                      </div>

                      {/* SubImage */}
                      <div className="relative mb-3">
                        <Image
                          src={category.subImage}
                          alt={category.name}
                          width={300}
                          height={200}
                          className="w-full h-40 object-cover rounded-lg"
                        />
                        <div className="absolute inset-0 bg-black opacity-20 rounded-lg"></div>
                      </div>

                      {/* Points */}
                      <ul className="text-sm text-gray-700 space-y-1">
                        {category.points.map((point, i) => (
                          <li key={i} className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
