import AboutUsSection from "@/components/About/AboutUsSection";
import Image from "next/image";
// import Banner, { OPTIONS, slidesData } from "@/components/HeaderFooter/Banner";
import EmblaCarousel from "@/components/HeaderFooter/EmbalBannerCarousel/EmblaCarousel";
import ServiceSection from "@/components/HeaderFooter/ServiceSection";
import WhyChooseUs from "@/components/HeaderFooter/WhyChooseUs";
import TestimonialSection from "@/components/TestimonialPage/TestimonialSection";
import { EmblaOptionsType } from "embla-carousel";
import "../components/HeaderFooter/EmbalBannerCarousel/embla.css";
import Link from "next/link";
import Wrapper from "@/components/Others/Wrapper";
import { OPTIONS, slidesData } from "../../lib/emblaData";

export default function Home() {
  return (
    <div className="">
      <EmblaCarousel slides={slidesData} options={OPTIONS} />
      {/* <Banner /> */}
      <ServiceSection isPage={true} />
      <WhyChooseUs />
      <AboutUsSection heading={true} />
      <TestimonialSection />
      <Wrapper className="md:py-16 max-sm:pb-0 py-10">
        <div className="">
          <div className="bg-[#f3f4f6] p-10 rounded-xl" data-aos="fade-up">
            <div className="flex md:flex-row flex-col justify-between items-center">
              <div className="">
                <h3
                  className="md:text-4xl mb-2 max-sm:text-center  text-gray-900 text-3xl font-semibold uppercase heading-all"
                  data-aos="fade-up"
                >
                  Contact Us
                </h3>
                <h3
                  className="text-gray-700 text-2xl max-sm:text-center "
                  data-aos="fade-up"
                >
                  We build greater futures through innovation <br /> and
                  collective knowledge.
                </h3>
                <p
                  className="text-gray-500 mt-3 max-sm:text-center max-sm:mb-5"
                  data-aos="fade-up"
                >
                  Connect with us to explore transformative solutions tailored
                  to your needs.
                </p>
              </div>
              <Link href={"/contact"}>
                <div
                  className="border border-gray-400  px-5 h-fit py-1.5 text-gray-600 rounded-md text-sm"
                  data-aos="fade-up"
                >
                  Get in touch
                </div>
              </Link>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
