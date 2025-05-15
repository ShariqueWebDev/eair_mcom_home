////////////////////////// Reuse for future ///////////////

// "use client";
// import Link from "next/link";
// import Image from "next/image";
// import { ChevronDoubleRightIcon } from "@heroicons/react/24/solid";

// const BannerNewSection = () => {
//   return (
//     <div>
//       <section
//         id="common_banner"
//         className="bg-black pb-20 md:pb-32 mb-32 md:mb-64"
//       >
//         <div className="w-full h-[200px] relative">
//           <div className="max-w-7xl mx-auto px-4 pt-6 md:pt-10 relative z-10">
//             {/* Breadcrumb */}
//             <div className="flex items-center gap-2 text-sm md:text-base text-white">
//               <Link
//                 href="/"
//                 className="text-gray-400 hover:text-blue-500 transition-colors"
//               >
//                 Home
//               </Link>
//               <ChevronDoubleRightIcon className="w-4 h-4 text-gray-500" />
//               <span className="font-medium">About Us</span>
//             </div>
//           </div>

//           {/* Banner Image */}
//           <div className="w-full max-w-7xl mx-auto px-4 mt-6 md:mt-10">
//             <div className="relative w-full overflow-hidden rounded-md">
//               <Image
//                 src="/about_img/abt_banner.jpg"
//                 alt="About Us Banner"
//                 width={1920}
//                 height={600}
//                 className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] object-cover rounded-md"
//                 priority
//               />
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default BannerNewSection;

// "use client";
// import Link from "next/link";
// import { ChevronDoubleRightIcon } from "@heroicons/react/24/solid";

// const BannerNewSection = () => {
//   return (
//     <section
//       id="common_banner"
//       className="relative bg-cover bg-center bg-no-repeat h-[500px] mb-20"
//       style={{ backgroundImage: "url('/about_img/abt_banner.jpg')" }}
//     >
//       <div className=" inset-0 bg-black/50 z-0" />{" "}
//       <div className="z-10 max-w-7xl mx-auto px-4 pt-6 md:pt-10">
//         {/* Breadcrumb */}
//         <div className="flex items-center gap-2 text-sm md:text-base text-white pt-5">
//           <Link
//             href="/"
//             className="text-gray-300 hover:text-blue-400 transition-colors"
//           >
//             Home
//           </Link>
//           <ChevronDoubleRightIcon className="w-4 h-4 text-gray-400" />
//           <span className="font-medium">About Us</span>
//         </div>
//       </div>
//       {/* card  */}
//       <div className="flex items-center justify-center w-[800px] h-[200px] sm:h-[300px]">
//         <div className="bg-[#f3f5f7] bg-opacity-90 px-6 py-10 rounded-md text-center shadow-md">
//           <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 pb-12">
//             Empower Your Business with Agile Solutions
//           </h1>
//           <p className="text-sm sm:text-base text-gray-700 mt-2">
//             Encompasses a rich tapestry of skills. With our headquarters nestled
//             in Thiruvananthapuram, we extend our presence across the vast
//             expanse of India. As proud sentinels of Cybersecurity Services,
//             complete IT and Cloud Infrastructure solutions, and managed services
//             prowess, we invite you to embark on a remarkable journey with us.
//             Our unwavering dedication has garnered resounding endorsements from
//             customers spanning the globe, attesting to our sterling reputation.
//             Placing paramount importance on exceptional customer service,
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BannerNewSection;

// "use client";
// import Link from "next/link";
// import { ChevronDoubleRightIcon } from "@heroicons/react/24/solid";

// const BannerNewSection = () => {
//   return (
//     <section
//       id="common_banner"
//       className="relative bg-cover bg-center bg-no-repeat h-[500px] mb-20 flex items-center justify-center"
//       style={{ backgroundImage: "url('/about_img/abt_banner.jpg')" }}
//     >
//       <div className="absolute inset-0 bg-black/50 z-0" />

//       <div className="absolute top-0 left-30 px-6 z-10 w-full max-w-7xl mx-auto pt-15">
//         <div className="flex items-center gap-2 text-sm md:text-base text-white pt-5">
//           <Link
//             href="/"
//             className="text-gray-300 hover:text-blue-400 transition-colors"
//           >
//             Home
//           </Link>
//           <ChevronDoubleRightIcon className="w-4 h-4 text-gray-400" />
//           <span className="font-medium">About Us</span>
//         </div>
//       </div>

//       <div className="absolute top-0 left-30 z-10 max-w-[850px] bg-opacity-90 px-6 py-10 mt-26 rounded-md text-start shadow-md">
//         <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white pb-6">
//           Empower Your Business with Agile Solutions
//         </h1>
//         <p className="text-sm sm:text-base text-white mt-2">
//           Encompasses a rich tapestry of skills. With our headquarters nestled
//           in Thiruvananthapuram, we extend our presence across the vast expanse
//           of India. As proud sentinels of Cybersecurity Services, complete IT
//           and Cloud Infrastructure solutions, and managed services prowess, we
//           invite you to embark on a remarkable journey with us. Our unwavering
//           dedication has garnered resounding endorsements from customers
//           spanning the globe, attesting to our sterling reputation. Placing
//           paramount importance on exceptional customer service,
//         </p>
//       </div>
//     </section>
//   );
// };

// export default BannerNewSection;

"use client";
import Link from "next/link";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/solid";

const BannerNewSection = () => {
  return (
    <section
      id="common_banner"
      className="relative bg-cover bg-center bg-no-repeat h-[400px] sm:h-[450px] md:h-[500px] mb-10 sm:mb-16 md:mb-20 flex items-center justify-center"
      style={{ backgroundImage: "url('/about_img/abt_banner.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Breadcrumb Navigation */}
      <div className="absolute top-20 left-30 px-4 sm:px-6 z-10 w-full max-w-7xl mx-auto">
        <div className="flex items-center gap-2 text-xs sm:text-sm md:text-base text-white">
          <Link
            href="/"
            className="text-gray-300 hover:text-blue-400 transition-colors"
          >
            Home
          </Link>
          <ChevronDoubleRightIcon className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
          <span className="font-medium">About Us</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="absolute top-0 left-30 max-w-[90%] sm:max-w-[700px] md:max-w-[850px] bg-opacity-90 px-4 sm:px-6 py-6 sm:py-8 md:py-10 mt-16 sm:mt-20 md:mt-26 rounded-md text-start">
        <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white pb-4 sm:pb-6">
          Empower Your Business with Agile Solutions
        </h1>
        <p className="text-xs sm:text-sm md:text-base text-white mt-2 leading-relaxed">
          Encompasses a rich tapestry of skills. With our headquarters nestled
          in Thiruvananthapuram, we extend our presence across the vast expanse
          of India. As proud sentinels of Cybersecurity Services, complete IT
          and Cloud Infrastructure solutions, and managed services prowess, we
          invite you to embark on a remarkable journey with us. Our unwavering
          dedication has garnered resounding endorsements from customers
          spanning the globe, attesting to our sterling reputation. Placing
          paramount importance on exceptional customer service,
        </p>
      </div>
    </section>
  );
};

export default BannerNewSection;
