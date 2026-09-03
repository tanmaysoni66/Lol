import { JsonLd } from '@/components/seo/JsonLd';
import { Hero } from '@/components/home/Hero';
import { EcosystemFlow } from '@/components/home/EcosystemFlow';
import { WhyChooseUs } from '@/components/home/WhyChooseUs';
import { FarmingModels } from '@/components/home/FarmingModels';
import { MushroomComparison } from '@/components/home/MushroomComparison';
import { ROICalculator } from '@/components/home/ROICalculator';
import { CriticalParameters } from '@/components/home/CriticalParameters';
import { ProductionSOP } from '@/components/home/ProductionSOP';
import { Infrastructure } from '@/components/home/Infrastructure';
import { Testimonials } from '@/components/home/Testimonials';
import { Marketplace } from '@/components/home/Marketplace';
import { FAQ } from '@/components/home/FAQ';

export default function HomePage() {
  return (
    <>
      <JsonLd />
      <Hero />
      <EcosystemFlow />
      <WhyChooseUs />
      <FarmingModels />
      <MushroomComparison />
      <ROICalculator />
      <CriticalParameters />
      <ProductionSOP />
      <Infrastructure />
      <Testimonials />
      <Marketplace />
      <FAQ />
    </>
  );
}
