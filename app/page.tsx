"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, Play, Quote } from "lucide-react";

// Import your page components here:
import { Hero } from "@/components/home/Hero";
import { EcosystemFlow } from "@/components/home/EcosystemFlow";
import { Timeline } from "@/components/home/Timeline";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { FarmingModels } from "@/components/home/FarmingModels";
import { MushroomComparison } from "@/components/home/MushroomComparison";
import { ROICalculator } from "@/components/home/ROICalculator";
import CriticalParameters from "@/components/home/CriticalParameters";
import { ProductionSOP } from "@/components/home/ProductionSOP";
import MushroomSEOSections from "@/components/home/MushroomSEOSections";
import ComparisonTable from "@/components/home/ComparisonTable";
import StatesSection from "@/components/home/StatesSection";
import CTASection from "@/components/home/CTASection";
import CompostUnits from "@/components/home/CompostUnits";
import Testimonials from "@/components/home/Testimonials";
import Marketplace from "@/components/home/Marketplace";
import ResourcesSection from "@/components/home/ResourcesSection";
import { JsonLd } from "@/components/JsonLd";

export default function HomePage() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <>
      <JsonLd />
      <Hero />
      <Timeline />
      <EcosystemFlow />
      <WhyChooseUs />
      <FarmingModels />
      <MushroomComparison />
      <ROICalculator />
      <CriticalParameters />
      <ProductionSOP />
      <CompostUnits />
      <Testimonials />
      <Marketplace />
      <ResourcesSection />
      
      <MushroomSEOSections />
      <ComparisonTable />
      <StatesSection />
      <CTASection />
    </>
  );
}
