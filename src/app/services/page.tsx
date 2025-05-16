"use client";
import BlogSection from "@/components/BlogSection";
import FeaturesWeb from "@/components/FeaturesWeb";
import ServiceFeature from "@/components/ServiceFeature";
import React from "react";

const ServicePage = () => {
  return (
    <div>
      <ServiceFeature />
      <BlogSection />
      <FeaturesWeb />
    </div>
  );
};

export default ServicePage;
