import AboutUsSection from "@/components/About/AboutUsSection";
import Banner from "@/components/HeaderFooter/Banner";
import ServiceSection from "@/components/HeaderFooter/ServiceSection";
import WhyChooseUs from "@/components/HeaderFooter/WhyChooseUs";
import TestimonialSection from "@/components/TestimonialPage/TestimonialSection";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <Banner />
      <ServiceSection />
      <WhyChooseUs />
      <AboutUsSection />
      <TestimonialSection />
      <div className="md:py-16 max-sm:pb-0 py-10 md:px-20">
        <div className="bg-[#f3f4f6] p-10 rounded-xl">
          <div className="flex md:flex-row flex-col justify-between items-center">
            <div className="">
              <h3 className="md:text-4xl mb-2 max-sm:text-center  text-gray-900 text-3xl font-semibold uppercase heading-all">
                Contact Us
              </h3>
              <h3 className="text-gray-700 text-2xl max-sm:text-center ">
                We build greater futures through innovation <br /> and
                collective knowledge.
              </h3>
              <p className="text-gray-500 mt-3 max-sm:text-center max-sm:mb-5">
                Connect with us to explore transformative solutions tailored to
                your needs.
              </p>
            </div>
            <Link href={"/contact"}>
              <div className="border border-gray-400  px-5 h-fit py-1.5 text-gray-600 rounded-md text-sm">
                Get in touch
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
