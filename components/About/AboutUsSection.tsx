// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// import Wrapper from "../Others/Wrapper";

// const AboutUsSection = ({ heading }: { heading?: boolean }) => {
//   return (
//     <Wrapper className=" md:py-16 py-10">
//       <div className="">
//         {heading && (
//           <h3
//             className="text-center mb-7 md:text-4xl text-3xl text-gray-800 uppercase font-semibold heading-all"
//             data-aos="fade-up"
//           >
//             About Mcom
//           </h3>
//         )}
//         <div className="flex flex-wrap ">
//           {/* Featured Post */}
//           <div
//             className="flex w-full  flex-col gap-5 rounded-xl bg-white p-4  lg:flex-row lg:items-center lg:p-2.5"
//             data-aos="fade-up"
//           >
//             <div
//               className="aspect-[536/320] w-full flex items-center justify-center rounded-lg bg-[#dbcfcb] "
//               data-aos="fade-up"
//             >
//               <div className="rounded-lg overflow-hidden">
//                 <Image
//                   src="/about_img/1.webp"
//                   alt="Wellness Unveiled: Empowering Your Journey to a Balanced and Vibrant Life"
//                   width={1600}
//                   height={700}
//                   className="object-cover w-full h-full"
//                   priority
//                 />
//               </div>
//             </div>

//             <div className="w-full lg:max-w-[540px] bg-gray-100 h-full rounded-lg md:p-10 p-5">
//               <div
//                 className="mb-4 inline-flex rounded-full bg-purple-100 px-3 py-1 text-sm font-medium capitalize text-purple-800"
//                 data-aos="fade-up"
//               >
//                 ✨
//               </div>
//               <h1
//                 className="mb-4 text-2xl font-bold text-gray-900 xl:text-4xl "
//                 data-aos="fade-up"
//               >
//                 <p className="heading-all">Our Mission</p>
//               </h1>
//               <p
//                 className="max-w-[524px] mb-3 text-sm text-gray-600"
//                 data-aos="fade-up"
//               >
//                 Our mission is to enhancing the business growth of our customers
//                 with new technology and high-quality solutions that create
//                 valuable and reliable competitive advantage for our clients
//                 around the world.
//               </p>
//               <p
//                 className="max-w-[524px] text-sm mb-3 text-gray-600"
//                 data-aos="fade-up"
//               >
//                 To provide tailored reliable advice, outstanding expertise and a
//                 dedicated service that harnesses the potential of security and
//                 proximity technology to meet the complex and diverse
//                 requirements of our customers.
//               </p>
//               <p
//                 className="max-w-[524px] text-sm text-gray-600"
//                 data-aos="fade-up"
//               >
//                 Our mission is to provide protection and security to our clients
//                 through a bespoke service tailored to their specific needs,
//                 ultimately the safety and security of the client’s staff,
//                 premises, assets and the general public is our highest priority.
//               </p>
//             </div>
//           </div>

//           {/* Secondary Post 1 */}
//           <div
//             className="flex w-full flex-col gap-3 rounded-xl bg-white max-sm:mx-1 p-2.5  sm:flex-row sm:items-center lg:w-1/2"
//             data-aos="fade-up"
//           >
//             <div
//               className="relative aspect-[238/180] w-full overflow-hidden"
//               data-aos="fade-up"
//             >
//               <div className="h-full">
//                 <Image
//                   src="/about_img/2.webp"
//                   alt="Culinary Expeditions: Tasting the World's Flavors in the Heart of Local Culture"
//                   fill
//                   className="rounded-lg object-cover !h-full"
//                   sizes="100vw"
//                 />
//               </div>
//             </div>
//             <div
//               className="w-full lg:max-w-[272px] bg-gray-100 md:h-full rounded-lg p-5"
//               data-aos="fade-up"
//             >
//               <div className="mb-4 inline-flex rounded-full bg-blue-100 px-3 py-1 text-sm font-medium capitalize text-blue-800">
//                 ✨
//               </div>
//               <h2
//                 className="mb-3 text-3xl font-semibold text-gray-900"
//                 data-aos="fade-up"
//               >
//                 <div className="heading-all">Our Vision</div>
//               </h2>
//               <p
//                 className="max-w-[524px] text-sm text-gray-600"
//                 data-aos="fade-up"
//               >
//                 vision become recognized as a leading contributor to the Middle
//                 East’s progressive and evolving IT and security solutions
//                 landscape, applying innovation and skill through tailored
//                 solutions that continually boost business efficiencies and
//                 performance.
//               </p>
//             </div>
//           </div>

//           {/* Secondary Post 2 */}
//           <div
//             className="flex w-full flex-col gap-3 rounded-xl bg-white max-sm:mx-1  p-2.5  sm:flex-row sm:items-center lg:w-1/2"
//             data-aos="fade-up"
//           >
//             <div
//               className="relative aspect-[238/180] w-full overflow-hidden"
//               data-aos="fade-up"
//             >
//               <div>
//                 <Image
//                   src="/about_img/3.webp"
//                   alt="Begin here to obtain a brief summary encompassing all the essential"
//                   fill
//                   className=" w-full h-full rounded-lg object-cover object-center"
//                   sizes="100vw"
//                 />
//               </div>
//             </div>
//             <div
//               className="w-full lg:max-w-[272px] bg-gray-100 md:h-full rounded-lg p-5"
//               data-aos="fade-up"
//             >
//               <div className="mb-4 inline-flex rounded-full bg-blue-100 px-3 py-1 text-sm font-medium capitalize text-blue-800">
//                 ✨
//               </div>
//               <h2
//                 className="mb-3 text-3xl font-semibold text-gray-900"
//                 data-aos="fade-up"
//               >
//                 <div className="heading-all">Our Value</div>
//               </h2>
//               <p className="max-w-[524px] text-gray-600" data-aos="fade-up">
//                 Empowering Success through Authenticity, Expertise, and Timely
//                 Solutions.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Wrapper>
//   );
// };

// export default AboutUsSection;

// new desing
import Image from "next/image";

import React from "react";
import Wrapper from "../Others/Wrapper";

const AboutUsSection = ({ heading }: { heading?: boolean }) => {
  return (
    <Wrapper className=" md:pb- py-10">
      <div className="">
        {heading && (
          <h3
            className="text-center mb-7 md:text-4xl text-3xl text-gray-800 uppercase font-semibold heading-all"
            data-aos="fade-up"
          >
            About Mcom
          </h3>
        )}

        <div className="flex flex-wrap ">
          {/* Featured Post */}
          <div
            className="flex w-full  flex-col gap-5 rounded-xl bg-white p-4  lg:flex-row lg:items-center lg:p-2.5"
            data-aos="fade-up"
          >
            <div
              className="relative aspect-[536/320] w-full rounded-lg bg-[#dbcfcb] overflow-hidden"
              data-aos="fade-up"
            >
              <Image
                src="/about_img/mission1.webp"
                alt="Wellness Unveiled: Empowering Your Journey to a Balanced and Vibrant Life"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="w-full lg:max-w-[540px] bg-gray-100 h-full rounded-lg  p-5">
              <div
                className="mb-4 inline-flex rounded-full bg-purple-100 px-3 py-1 text-sm font-medium capitalize text-purple-800"
                data-aos="fade-up"
              >
                ✨
              </div>
              <h1
                className="mb-4 text-2xl font-bold text-gray-900 xl:text-4xl "
                data-aos="fade-up"
              >
                <p className="heading-all">Our Mission</p>
              </h1>
              <p
                className="max-w-[524px] mb-3 text-sm text-gray-600"
                data-aos="fade-up"
              >
                Our mission is to enhancing the business growth of our customers
                with new technology and high-quality solutions that create
                valuable and reliable competitive advantage for our clients
                around the world.
              </p>
              <p
                className="max-w-[524px] text-sm mb-3 text-gray-600"
                data-aos="fade-up"
              >
                To provide tailored reliable advice, outstanding expertise and a
                dedicated service that harnesses the potential of security and
                proximity technology to meet the complex and diverse
                requirements of our customers.
              </p>
              <p
                className="max-w-[524px] text-sm text-gray-600"
                data-aos="fade-up"
              >
                Our mission is to provide protection and security to our clients
                through a bespoke service tailored to their specific needs,
                ultimately the safety and security of the client’s staff,
                premises, assets and the general public is our highest priority.
              </p>
            </div>
          </div>

          {/* Secondary Post 1 */}
          <div
            className="flex w-full flex-col gap-3 rounded-xl bg-white max-sm:mx-1 p-2.5 lg:w-1/2"
            data-aos="fade-up"
          >
            {/* content - now first */}
            <div
              className="w-full bg-gray-100 rounded-lg p-5"
              data-aos="fade-up"
            >
              <div className="mb-4 inline-flex rounded-full bg-blue-100 px-3 py-1 text-sm font-medium capitalize text-blue-800">
                ✨
              </div>
              <h2
                className="mb-3 text-3xl font-semibold text-gray-900"
                data-aos="fade-up"
              >
                <div className="heading-all">Our Vision</div>
              </h2>
              <p
                className="max-w-[524px] text-sm mb-3 text-gray-600"
                data-aos="fade-up"
              >
                Vision become recognized as a leading contributor to the Middle
                East’s progressive and evolving IT and security solutions
                landscape, applying innovation and skill through tailored
                solutions that continually boost business efficiencies and
                performance.
              </p>
              <p
                className="max-w-[524px] text-sm mb-3 text-gray-600"
                data-aos="fade-up"
              >
                Be a vibrant organization where openness, trust, teamwork,
                simplicity, and innovation are valued and promoted.
              </p>
              <p
                className="max-w-[524px] text-sm mb-3 text-gray-600"
                data-aos="fade-up"
              >
                We values integrity, commitment, excellence, teamwork,
                transparency, and satisfaction for our clients and ourselves.
              </p>
            </div>

            {/* image - now second */}
            <div
              className="relative aspect-[238/180] w-full overflow-hidden"
              data-aos="fade-up"
            >
              <div className="h-full">
                <Image
                  src="/about_img/vision1.webp"
                  alt="Culinary Expeditions: Tasting the World's Flavors in the Heart of Local Culture"
                  fill
                  className="rounded-lg object-cover !h-full"
                  sizes="100vw"
                />
              </div>
            </div>
          </div>

          {/* Secondary Post 2 */}
          <div
            className="flex w-full flex-col gap-3 rounded-xl bg-white max-sm:mx-1 p-2.5 lg:w-1/2"
            data-aos="fade-up"
          >
            {/* image second */}
            <div
              className="relative aspect-[238/180] w-full overflow-hidden"
              data-aos="fade-up"
            >
              <div>
                <Image
                  src="/about_img/value.webp"
                  alt="Begin here to obtain a brief summary encompassing all the essential"
                  fill
                  className="w-full h-full rounded-lg object-cover object-center"
                  sizes="100vw"
                />
              </div>
            </div>

            {/* content first */}
            <div
              className="w-full bg-gray-100 rounded-lg p-5"
              data-aos="fade-up"
            >
              <div className="mb-4 inline-flex rounded-full bg-blue-100 px-3 py-1 text-sm font-medium capitalize text-blue-800">
                ✨
              </div>
              <h2
                className="mb-3 text-3xl font-semibold text-gray-900"
                data-aos="fade-up"
              >
                <div className="heading-all">Our Value</div>
              </h2>
              <p className="max-w-[524px] text-sm mb-3 text-gray-600">
                Empowering Success through Authenticity,
              </p>
              <p
                className="max-w-[524px] text-sm mb-3 text-gray-600"
                data-aos="fade-up"
              >
                Integrity & Transparency
              </p>
              <p
                className="max-w-[524px] text-sm mb-3 text-gray-600"
                data-aos="fade-up"
              >
                Customer-Centric Approach
              </p>
              <p
                className="max-w-[524px] text-sm mb-3 text-gray-600"
                data-aos="fade-up"
              >
                Innovation & Excellence
              </p>
              <p
                className="max-w-[524px] text-sm mb-3 text-gray-600"
                data-aos="fade-up"
              >
                Security & Responsibility
              </p>
              <p
                className="max-w-[524px] text-sm mb-3 text-gray-600"
                data-aos="fade-up"
              >
                Teamwork & Collaboration
              </p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default AboutUsSection;
