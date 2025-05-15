import Banner from "@/components/HeaderFooter/Banner";
import ServiceSection from "@/components/HeaderFooter/ServiceSection";
import WhyChooseUs from "@/components/HeaderFooter/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Banner />
      <ServiceSection />
      <WhyChooseUs />
    </div>
  );
}
