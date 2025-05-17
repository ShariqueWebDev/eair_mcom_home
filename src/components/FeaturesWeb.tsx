// "use client";

// import Image from "next/image";
// import { useEffect } from "react";

// const FeaturesWeb = () => {
//   useEffect(() => {
//     const style = document.createElement("style");
//     style.textContent = `
//       @keyframes slide-left {
//         from { opacity: 0; transform: translateX(-50px); }
//         to { opacity: 1; transform: translateX(0); }
//       }
//       @keyframes slide-right {
//         from { opacity: 0; transform: translateX(50px); }
//         to { opacity: 1; transform: translateX(0); }
//       }
//       .animate-slide-left {
//         animation: slide-left 0.5s ease-out forwards;
//       }
//       .animate-slide-right {
//         animation: slide-right 0.5s ease-out forwards;
//       }
//     `;
//     document.head.appendChild(style);
//     return () => document.head.removeChild(style);
//   }, []);

//   return (
//     <section className="overflow-hidden bg-black py-20 lg:pb-24 xl:pb-28">
//       <div className="mx-auto max-w-6xl px-4 md:px-8">
//         <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-16">
//           {/* Image Section */}
//           <div className="hidden md:block md:w-1/2 relative aspect-[588/526.5] animate-slide-left">
//             <Image
//               src="/image/about-light-01.webp"
//               alt="About"
//               className="dark:hidden absolute inset-0 w-full h-full object-cover"
//               width={588}
//               height={526.5}
//               priority
//             />
//             <Image
//               src="/images/about/about-dark-01.png"
//               alt="About"
//               className="hidden dark:block absolute inset-0 w-full h-full object-cover"
//               width={588}
//               height={526.5}
//               priority
//             />
//           </div>
//           {/* Content Section */}
//           <div className="md:w-1/2 animate-slide-right">
//             <h4 className="font-medium uppercase text-gray-900 dark:text-white flex items-center gap-4">
//               <span className="inline-flex bg-[#20c4a9] text-white text-sm px-4 py-1 rounded-full">
//                 New
//               </span>
//               SaaS Boilerplate for Next.js
//             </h4>
//             <h2 className="text-3xl xl:text-5xl font-bold text-white mt-4 mb-6">
//               A Complete Solution for
//               <span className="relative inline-block ml-2">
//                 <span className="bg-gradient-to-r from-sky-400 to-[#e441b6] bg-clip-text text-transparent">
//                   Nextjs Startup
//                 </span>
//                 <span className="absolute bottom-0 left-0 w-[45%] h-1 bg-[#20c4a9] -z-10"></span>
//               </span>
//             </h2>

//             <p className="text-white">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
//               ultricies lacus non fermentum ultrices. Fusce consectetur le.
//             </p>
//             {/* Feature Items */}
//             <div className="mt-8 flex items-center gap-5">
//               <div className="flex h-16 w-16 items-center justify-center rounded-full border border-gray-300 dark:border-gray-600 dark:bg-gray-800">
//                 <p className="text-lg font-semibold text-white">01</p>
//               </div>
//               <div className="w-3/4">
//                 <h3 className="text-lg font-semibold text-white">
//                   Mailchimp for Newsletter Emails + SMTP for Transactional
//                   Emails
//                 </h3>
//                 <p className="text-white">
//                   Ut ultricies lacus non fermentum ultrices.
//                 </p>
//               </div>
//             </div>
//             <div className="mt-8 flex items-center gap-5">
//               <div className="flex h-16 w-16 items-center justify-center rounded-full border border-gray-300 dark:border-gray-600 dark:bg-gray-800">
//                 <p className="text-lg font-semibold text-white">02</p>
//               </div>
//               <div className="w-3/4">
//                 <h3 className="text-lg font-semibold text-white">
//                   Algolia Integration for Site Search
//                 </h3>
//                 <p className="text-white">
//                   Consectetur adipiscing elit fermentum ultricies.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FeaturesWeb;

// "use client";

// import Image from "next/image";
// import { useEffect } from "react";

// const FeaturesWeb: React.FC = () => {
//   useEffect(() => {
//     const style = document.createElement("style");
//     style.textContent = `
//       @keyframes slide-left {
//         from { opacity: 0; transform: translateX(-50px); }
//         to { opacity: 1; transform: translateX(0); }
//       }
//       @keyframes slide-right {
//         from { opacity: 0; transform: translateX(50px); }
//         to { opacity: 1; transform: translateX(0); }
//       }
//       .animate-slide-left {
//         animation: slide-left 0.5s ease-out forwards;
//       }
//       .animate-slide-right {
//         animation: slide-right 0.5s ease-out forwards;
//       }
//     `;
//     document.head.appendChild(style);
//     return () => document.head.removeChild(style);
//   }, []);

//   return (
//     <section className="overflow-hidden bg-black py-20 lg:pb-24 xl:pb-28">
//       <div className="mx-auto max-w-6xl px-4 md:px-8">
//         <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-16">
//           {/* Image Section */}
//           <div className="md:block md:w-1/2 relative aspect-[588/526.5] animate-slide-left">
//             <Image
//               src="/camera_img/feature-bg.jpg"
//               alt="About"
//               className="dark:hidden absolute inset-0 w-full h-full object-cover"
//               width={588}
//               height={526.5}
//               priority
//             />
//           </div>
//           {/* Content Section */}
//           <div className="md:w-1/2 animate-slide-right">
//             <h4 className="font-medium uppercase text-gray-900 dark:text-white flex items-center gap-4">
//               <span className="inline-flex bg-[#20c4a9] text-white text-sm px-4 py-1 rounded-full">
//                 New
//               </span>
//               SaaS Boilerplate for Next.js
//             </h4>
//             <h2 className="text-3xl xl:text-5xl font-bold text-white mt-4 mb-6">
//               A Complete Solution for
//               <span className="relative inline-block ml-2">
//                 <span className="bg-gradient-to-r from-sky-400 to-[#e441b6] bg-clip-text text-transparent">
//                   Nextjs Startup
//                 </span>
//                 <span className="absolute bottom-0 left-0 w-[45%] h-1 bg-[#20c4a9] -z-10"></span>
//               </span>
//             </h2>

//             <p className="text-white">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
//               ultricies lacus non fermentum ultrices. Fusce consectetur le.
//             </p>
//             {/* Feature Items */}
//             <div className="mt-8 flex items-center gap-5">
//               <div className="flex h-16 w-16 items-center justify-center rounded-full border border-gray-300 dark:border-gray-600 dark:bg-gray-800">
//                 <p className="text-lg font-semibold text-white">01</p>
//               </div>
//               <div className="w-3/4">
//                 <h3 className="text-lg font-semibold text-white">
//                   Mailchimp for Newsletter Emails + SMTP for Transactional
//                   Emails
//                 </h3>
//                 <p className="text-white">
//                   Ut ultricies lacus non fermentum ultrices.
//                 </p>
//               </div>
//             </div>
//             <div className="mt-8 flex items-center gap-5">
//               <div className="flex h-16 w-16 items-center justify-center rounded-full border border-gray-300 dark:border-gray-600 dark:bg-gray-800">
//                 <p className="text-lg font-semibold text-white">02</p>
//               </div>
//               <div className="w-3/4">
//                 <h3 className="text-lg font-semibold text-white">
//                   Algolia Integration for Site Search
//                 </h3>
//                 <p className="text-white">
//                   Consectetur adipiscing elit fermentum ultricies.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FeaturesWeb;

"use client";

import Image from "next/image";
import { useEffect } from "react";

const FeaturesWeb: React.FC = () => {
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @keyframes slide-left {
        from { opacity: 0; transform: translateX(-50px); }
        to { opacity: 1; transform: translateX(0); }
      }
      @keyframes slide-right {
        from { opacity: 0; transform: translateX(50px); }
        to { opacity: 1; transform: translateX(0); }
      }
      .animate-slide-left {
        animation: slide-left 0.5s ease-out forwards;
      }
      .animate-slide-right {
        animation: slide-right 0.5s ease-out forwards;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section
      className="relative h-[90vh] overflow-hidden py-20 lg:pb-24 xl:pb-28 mb-16"
      data-aos="fade-up"
    >
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/camera_img/feature-bg.jpg"
          alt="About"
          className="w-full h-full object-cover dark:hidden"
          fill
          priority
        />
      </div>

      {/* Content Area */}
      <div className="relative mx-auto max-w-6xl px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-16">
          {/* Spacer or left side if needed */}
          <div className="hidden md:block md:w-1/2"></div>

          {/* Content on the Right */}
          <div className="md:w-1/2 animate-slide-right md:order-last">
            <h4
              className="font-medium uppercase text-xs text-gray-500 dark:text-white flex items-center gap-4"
              data-aos="fade-up"
            >
              New features
            </h4>
            <h2
              className="text-3xl xl:text-5xl font-bold heading-all mt-4 mb-6"
              data-aos="fade-up"
            >
              Opting For Security & Making You
              <span className="relative inline-block ml-2">
                <span className="bg-gradient-to-r from-sky-400 to-[#e441b6] bg-clip-text text-transparent">
                  Free
                </span>
                {/* <span className="absolute bottom-0 left-0 w-[45%] h-1 bg-[#20c4a9] -z-10"></span> */}
              </span>
            </h2>

            {/* Features */}
            <div className="flex items-center gap-5 py-2" data-aos="fade-up">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 dark:border-gray-600 dark:bg-gray-800">
                <p className="text-lg font-semibold text-gray-400">01</p>
              </div>
              <div className="w-3/4">
                <h3 className="text-lg font-semibold">
                  Full-Time Device Protection
                </h3>
              </div>
            </div>
            <div className="flex items-center gap-5 py-2" data-aos="fade-up">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 dark:border-gray-600 dark:bg-gray-800">
                <p className="text-lg font-semibold text-gray-400">02</p>
              </div>
              <div className="w-3/4">
                <h3 className="text-lg font-semibold">
                  Live Footage Collection
                </h3>
              </div>
            </div>
            <div className="flex items-center gap-5 py-2" data-aos="fade-up">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 dark:border-gray-600 dark:bg-gray-800">
                <p className="text-lg font-semibold text-gray-400">03</p>
              </div>
              <div className="w-3/4">
                <h3 className="text-lg font-semibold">Drone CCTV Discussion</h3>
              </div>
            </div>
            <div className="flex items-center gap-5 py-2" data-aos="fade-up">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 dark:border-gray-600 dark:bg-gray-800">
                <p className="text-lg font-semibold text-gray-400">04</p>
              </div>
              <div className="w-3/4">
                <h3 className="text-lg font-semibold">
                  Hacker & Custom Solution
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesWeb;
