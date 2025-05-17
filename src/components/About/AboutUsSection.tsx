import Image from "next/image";
import Link from "next/link";
import React from "react";
import Wrapper from "../Others/Wrapper";

const AboutUsSection = ({ heading }: { heading?: boolean }) => {
  return (
    <Wrapper className=" md:py-16 py-10">
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
            className="flex w-full  flex-col gap-3 rounded-xl bg-white p-4  lg:flex-row lg:items-center lg:p-2.5"
            data-aos="fade-up"
          >
            <div
              className="aspect-[536/320] w-full flex items-center justify-center rounded-lg bg-[#dbcfcb] "
              data-aos="fade-up"
            >
              <Link href="/pricing">
                <Image
                  src="/mission.png"
                  alt="Wellness Unveiled: Empowering Your Journey to a Balanced and Vibrant Life"
                  width={270}
                  height={270}
                  className="object-cover"
                  priority
                />
              </Link>
            </div>

            <div className="w-full lg:max-w-[540px] bg-gray-100 h-full rounded-lg md:p-10 p-5">
              <Link
                href="/category/health"
                className="mb-4 inline-flex rounded-full bg-purple-100 px-3 py-1 text-sm font-medium capitalize text-purple-800"
                data-aos="fade-up"
              >
                ✨
              </Link>
              <h1
                className="mb-4 text-2xl font-bold text-gray-900 xl:text-4xl "
                data-aos="fade-up"
              >
                <Link href="/pricing" className="heading-all">
                  Our Mission
                </Link>
              </h1>
              <p
                className="max-w-[524px] text-sm text-gray-600"
                data-aos="fade-up"
              >
                At Mcom, we are driven by a singular mission - to cultivate a
                dynamic and diverse portfolio in the realm of Cybersecurity
                Services, complete IT and Cloud Infrastructure solutions, IT
                product distributions, and managed services. Guided by our
                unwavering commitment to excellence.
              </p>
            </div>
          </div>

          {/* Secondary Post 1 */}
          <div
            className="flex w-full flex-col gap-3 rounded-xl bg-white max-sm:mx-1 p-2.5  sm:flex-row sm:items-center lg:w-1/2"
            data-aos="fade-up"
          >
            <div
              className="relative aspect-[238/180] w-full overflow-hidden"
              data-aos="fade-up"
            >
              <Link href="/posts/culinary-expeditions-tasting-the-worlds-flavors-in-the-heart-of-local-culture">
                <Image
                  src="/vision.jpeg"
                  alt="Culinary Expeditions: Tasting the World's Flavors in the Heart of Local Culture"
                  fill
                  className="rounded-lg object-cover"
                  sizes="100vw"
                />
              </Link>
            </div>
            <div
              className="w-full lg:max-w-[272px] bg-gray-100 md:h-full rounded-lg p-5"
              data-aos="fade-up"
            >
              <Link
                href="/category/health"
                className="mb-4 inline-flex rounded-full bg-blue-100 px-3 py-1 text-sm font-medium capitalize text-blue-800"
              >
                ✨
              </Link>
              <h2
                className="mb-3 text-3xl font-semibold text-gray-900"
                data-aos="fade-up"
              >
                <Link
                  href="/posts/culinary-expeditions-tasting-the-worlds-flavors-in-the-heart-of-local-culture "
                  className="heading-all"
                >
                  Our Vision
                </Link>
              </h2>
              <p
                className="max-w-[524px] text-sm text-gray-600"
                data-aos="fade-up"
              >
                At Mcom, we are driven by a singular.
              </p>
            </div>
          </div>

          {/* Secondary Post 2 */}
          <div
            className="flex w-full flex-col gap-3 rounded-xl bg-white max-sm:mx-1  p-2.5  sm:flex-row sm:items-center lg:w-1/2"
            data-aos="fade-up"
          >
            <div
              className="relative aspect-[238/180] w-full overflow-hidden"
              data-aos="fade-up"
            >
              <Link href="/posts/begin-here-to-obtain-a-brief-summary-encompassing-all-the-essential">
                <Image
                  src="/values.jpeg"
                  alt="Begin here to obtain a brief summary encompassing all the essential"
                  fill
                  className=" w-full h-full rounded-lg object-cover object-center"
                  sizes="100vw"
                />
              </Link>
            </div>
            <div
              className="w-full lg:max-w-[272px] bg-gray-100 md:h-full rounded-lg p-5"
              data-aos="fade-up"
            >
              <Link
                href="/category/lifestyle"
                className="mb-4 inline-flex rounded-full bg-blue-100 px-3 py-1 text-sm font-medium capitalize text-blue-800"
              >
                ✨
              </Link>
              <h2
                className="mb-3 text-3xl font-semibold text-gray-900"
                data-aos="fade-up"
              >
                <Link
                  href="/posts/begin-here-to-obtain-a-brief-summary-encompassing-all-the-essential"
                  className="heading-all"
                >
                  Our Value
                </Link>
              </h2>
              <p className="max-w-[524px] text-gray-600" data-aos="fade-up">
                Empowering Success through Authenticity, Expertise, and Timely
                Solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default AboutUsSection;
