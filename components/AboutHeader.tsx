// // components/HomeSection.tsx
// import React from "react";

// const AboutHeader: React.FC = () => {
//   return (
//     <div className="lg:grid grid-cols-2">
//       {/* Hidden Home H1 */}
//       <div>
//         <h1>Home</h1>
//       </div>

//       {/* Logo Section */}
//       <div className="absolute top-[-50px] left-[var(--size-20)] lg:static lg:pb-[2.014vw] lg:pl-[var(--size-20)] lg:pr-[1.944vw] lg:pt-[1.667vw]">
//         <h1>About Vostok</h1>
//       </div>

//       {/* Navigation & Text */}
//       <div className="pt-[38px] lg:pt-0 pb-5 lg:pb-[6.944vw] relative">
//         <div className="max-lg:hidden border-l border-primary absolute left-0 bottom-0 h-full" />

//         {/* Menu */}
//         <div className="max-lg:hidden px-[var(--size-20)] flex justify-between">
//           <ul className="menu_header lowercase flex items-center gap-[2.083vw] font-medium text-[length:var(--size-20)]">
//             <li>
//               <a href="/about">ABOUT</a>
//             </li>
//             <li className="flex items-center">
//               <a href="/work">WORK</a>
//               <span className="font_editorial text-[.9vw] ml-[.2vw] relative top-[-.3vw]">
//                 (10)
//               </span>
//             </li>
//             <li>
//               <a href="/articles">BLOG</a>
//             </li>
//             <li>
//               <a href="/contact">CONTACT</a>
//             </li>
//           </ul>
//         </div>

//         {/* Divider */}
//         <div className="max-lg:hidden border-b border-primary ml-auto w-full" />

//         {/* Heading */}
//         <div className="text-center lg:text-left lg:pt-[1.319vw] px-[var(--size-20)]">
//           <div className="max-w-[600px] lg:max-w-full mx-auto">
//             <h1 className="text-[44px] lg:text-[3.333vw] leading-[108%]">
//               Vostok Trading LLC is a young entrepreneurial company, providing
//               solutions in the field of Information and Communication
//               Technologies. We are headquartered in Dubai, the commercial
//               capital of the Middle East. Within a span of a few years, we have
//               notched up around 10000 clients in the Middle East region. Our
//               team of 100 professionals is dedicated to bringing best of breed
//               emerging enterprise technology to the region for the benefit of
//               small, medium and large enterprises in the region.
//             </h1>
//           </div>
//         </div>

//         {/* Business Since */}
//         <div className="mt-[51px] lg:mt-0 lg:absolute lg:bottom-[var(--size-20)] lg:inset-x-[var(--size-20)] text-center lg:text-left">
//           <div className="inline-flex">
//             <div className="pl-4 lg:pl-[1.111vw] pr-2.5 lg:pr-[0.694vw] min-h-10 lg:min-h-[2.778vw] py-1 lg:py-[.3vw] border border-primary flex items-center justify-between rounded-[var(--rounded-base)]">
//               <div className="text-[12px] lg:text-[0.833vw] uppercase font-medium text-right">
//                 in business <br /> since
//               </div>
//               <div className="ml-4 lg:ml-[1.042vw] font_editorial text-[28px] lg:text-[1.944vw] leading-none">
//                 ©2016
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutHeader;

// components/HomeSection.tsx
import React from "react";

const AboutHeader: React.FC = () => {
  return (
    <div className="lg:grid grid-cols-2">
      <div>
        <h1 className="text-2xl lg:text-3xl font-semibold">About Vostok</h1>
      </div>

      {/* Content Section */}
      <div className="pt-10 lg:pt-0 pb-5 lg:pb-28 relative">
        <div className="lg:block border-l border-black absolute left-0 bottom-0 h-full" />

        <nav className="hidden lg:flex px-5 justify-between mb-4">
          <ul className="flex items-center gap-10 text-base font-medium lowercase">
            <li>
              <a href="/about">ABOUT</a>
            </li>

            <li>
              <a href="/articles">BLOG</a>
            </li>
            <li>
              <a href="/contact">CONTACT</a>
            </li>
          </ul>
        </nav>

        {/* Horizontal Divider */}
        <div className="hidden lg:block border-b border-black w-full ml-auto" />

        {/* Description */}
        <div className="text-center lg:text-left pt-6 px-5 max-w-[600px] lg:max-w-full mx-auto">
          <p className="text-base lg:text-lg leading-relaxed">
            Vostok Trading LLC is a young entrepreneurial company providing ICT
            solutions, headquartered in Dubai. In a few years, we’ve grown to
            10,000 clients in the Middle East, powered by a team of 100
            professionals delivering enterprise technology to businesses of all
            sizes.
          </p>
          <p className="text-base lg:text-lg leading-relaxed">
            Vostok Trading LLC is a young entrepreneurial company providing ICT
            solutions, headquartered in Dubai. In a few years, we’ve grown to
            10,000 clients in the Middle East, powered by a team of 100
            professionals delivering enterprise technology to businesses of all
            sizes.
          </p>
          <p className="text-base lg:text-lg leading-relaxed">
            Vostok Trading LLC is a young entrepreneurial company providing ICT
            solutions, headquartered in Dubai. In a few years, we’ve grown to
            10,000 clients in the Middle East, powered by a team of 100
            professionals delivering enterprise technology to businesses of all
            sizes.
          </p>
        </div>

        {/* Business Since */}
        <div className="mt-10 lg:mt-0 lg:absolute lg:bottom-5 lg:left-5 text-center lg:text-left">
          <div className="inline-flex border border-black rounded-md p-2 lg:p-2 items-center">
            <div className="text-xs lg:text-sm uppercase font-medium text-right">
              in business <br /> since
            </div>
            <div className="ml-4 text-2xl lg:text-[1.8vw] font-serif leading-none">
              ©2016
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHeader;
