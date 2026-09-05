import type { Metadata } from "next";
import DynamicFarmViewer from "./components/DynamicFarmViewer";
import StructuredData from "./StructuredData";
import Link from "next/link";
import {
  ArrowRight,
  Layers,
  Thermometer,
  Box,
  ShieldCheck,
  Factory,
  HelpCircle,
  Ruler,
  FileSpreadsheet,
  Split,
  ChevronDown,
} from "lucide-react";

export const metadata: Metadata = {
  title: "3D Commercial Mushroom Farm Planner | Farm Design & Equipment",
  description:
    "Design and visualize a commercial mushroom farm in 3D with growing rooms, racks, HVAC, fogging, airflow, sensors, cold storage and farm equipment planning.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/3d-mushroom-farm",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: "https://organicmushroomsfarm.com/3d-mushroom-farm",
    title: "3D Commercial Mushroom Farm Planner",
    description:
      "Visualize and plan a commercial mushroom farm with interactive 3D rooms, racks, HVAC, fogging, airflow, sensors and cold storage.",
    images: [
      {
        url: "https://res.cloudinary.com/dnw4fpk2y/image/upload/v1788619908/mushroomcalculator_pshrjc.png",
        width: 1200,
        height: 630,
        alt: "3D Commercial Mushroom Farm Planner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "3D Commercial Mushroom Farm Planner",
    description:
      "Interactive 3D mushroom farm planning and equipment visualization.",
    images: [
      "https://res.cloudinary.com/dnw4fpk2y/image/upload/v1788619908/mushroomcalculator_pshrjc.png",
    ],
  },
};

const faqs = [
  {
    question: "What can I plan with the 3D mushroom farm planner?",
    answer:
      "The planner can be used to visualize growing rooms, racks, HVAC, fogging systems, airflow, sensors, cold storage and other farm components.",
  },
  {
    question: "Can I measure distances in the 3D farm?",
    answer:
      "Yes. The 3D planning interface can provide measurement functionality for layout and equipment spacing.",
  },
  {
    question: "Can I export the farm design?",
    answer:
      "The system can capture the 3D view and generate a project report containing configuration and equipment information.",
  },
  {
    question: "Can I compare different farm configurations?",
    answer:
      "Yes. Different farm configurations can be compared based on their selected layout and planning parameters.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function Page() {
  return (
    <>
      <StructuredData />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <main className="min-h-screen pt-24 pb-16 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header and Semantic Intro */}
          <section className="mb-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="text-xs uppercase tracking-widest font-bold text-emerald-600 dark:text-emerald-400">
                  Interactive Engineering Simulation
                </span>
                <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 dark:text-white mt-1">
                  3D Commercial Mushroom Farm Planner
                </h1>
                <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-3xl">
                  Plan and visualize a commercial mushroom farm with interactive 3D design and equipment planning. Explore growing rooms, racks, climate systems, ventilation, fogging, cold storage, and farm infrastructure.
                </p>
              </div>

              <Link
                href="/enquiry"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-lg shadow-emerald-600/25 transition-all active:scale-95"
              >
                <span>Request Turnkey Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </section>

          {/* 3D Canvas Container */}
          <section
            aria-label="3D Interactive Mushroom Farm Viewer"
            className="rounded-3xl overflow-hidden border border-white/20 dark:border-white/10 shadow-2xl bg-white/5 dark:bg-black/20 backdrop-blur-md"
          >
            <DynamicFarmViewer />
          </section>

          {/* Engineering Simulation Disclaimer */}
          <div className="mt-4 p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-800 dark:text-amber-300 flex items-start gap-2.5">
            <span className="text-base leading-none mt-0.5">ℹ️</span>
            <p>
              <strong>Engineering Simulation Disclaimer:</strong> This interactive 3D model represents a standard commercial biosecure facility layout. Actual commercial room dimensions, HVAC cooling tonnage, airflow CFMs, and vertical rack tiers are tailored to specific mushroom species (Button, Oyster, Milky, Shiitake) and site requirements.
            </p>
          </div>

          {/* Planning Features & Capabilities */}
          <section className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 shadow-sm backdrop-blur-md">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-3">
                <Ruler className="w-5 h-5" />
              </div>
              <h2 className="font-bold text-slate-900 dark:text-white text-sm">3D Distance Measurement</h2>
              <p className="mt-1.5 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Click any two structural points in the 3D space to measure aisle clearances, corridor spans, and rack heights.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 shadow-sm backdrop-blur-md">
              <div className="w-9 h-9 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-3">
                <FileSpreadsheet className="w-5 h-5" />
              </div>
              <h2 className="font-bold text-slate-900 dark:text-white text-sm">Automated Bill of Quantities (BOQ)</h2>
              <p className="mt-1.5 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Generates instant itemized equipment counts, total canopy surface area ($m^2$), and exportable material schedules.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 shadow-sm backdrop-blur-md">
              <div className="w-9 h-9 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center mb-3">
                <Thermometer className="w-5 h-5" />
              </div>
              <h2 className="font-bold text-slate-900 dark:text-white text-sm">Climate, Water &amp; Airflow</h2>
              <p className="mt-1.5 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Toggle animated airflow streams, high-pressure fogging lines, water supply circuits, and electrical cable trays.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 shadow-sm backdrop-blur-md">
              <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-3">
                <Split className="w-5 h-5" />
              </div>
              <h2 className="font-bold text-slate-900 dark:text-white text-sm">Commercial Preset Comparison</h2>
              <p className="mt-1.5 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Evaluate your custom dimensions side-by-side against standard 2-room boutique, 4-room commercial, and 8-room facilities.
              </p>
            </div>
          </section>

          {/* Crawlable Semantic SEO & Architectural Content */}
          <article className="mt-12 space-y-10">
            {/* Commercial Farm Layout */}
            <section className="p-8 rounded-3xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 shadow-sm backdrop-blur-md">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
                <Factory className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                <span>Commercial Farm Layout &amp; Bio-Secure Zoning</span>
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                A commercial mushroom production facility follows an unbroken linear bio-secure workflow to ensure maximum yield while preventing cross-contamination between raw composting and fruiting cleanrooms:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80">
                  <h3 className="font-semibold text-slate-900 dark:text-white text-sm">1. Substrate Yard</h3>
                  <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">Raw straw/manure wetting, pre-wetting bunkers, and Phase I/II composting.</p>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80">
                  <h3 className="font-semibold text-slate-900 dark:text-white text-sm">2. Pasteurization Tunnel</h3>
                  <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">High-temperature steam sterilization (60°C) followed by controlled conditioning (48°C).</p>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80">
                  <h3 className="font-semibold text-slate-900 dark:text-white text-sm">3. Spawning &amp; Incubation</h3>
                  <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">Aseptic grain spawn inoculation and dark mycelial colonization at 24°C–26°C.</p>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80">
                  <h3 className="font-semibold text-slate-900 dark:text-white text-sm">4. Cropping &amp; Harvest</h3>
                  <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">Climate-regulated fruiting rooms with automated cooling, fogging, and fresh air cycles.</p>
                </div>
              </div>
            </section>

            {/* Growing Rooms & Vertical Cultivation Racks */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-7 rounded-3xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 shadow-sm backdrop-blur-md">
                <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Layers className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  <span>Mushroom Growing Rooms</span>
                </h2>
                <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  Each growing room is constructed with airtight insulated sandwich panels (PUF/PIR, 80–100mm thickness) to guarantee thermal isolation and vapor tightness. Antimicrobial floor coatings and sanitary coving allow complete chemical washdowns between crop cycles.
                </p>
              </div>

              <div className="p-7 rounded-3xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 shadow-sm backdrop-blur-md">
                <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Box className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  <span>Vertical Cultivation Racks</span>
                </h2>
                <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  Multi-tier heavy-duty hot-dip galvanized steel racks maximize cubic canopy density. Each rack features engineered vertical clearances for optimal laminar air circulation, automated LED picking lights, and ergonomic harvest access.
                </p>
              </div>
            </section>

            {/* Climate Control Systems & Commercial Equipment */}
            <section className="p-8 rounded-3xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 shadow-sm backdrop-blur-md">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
                <Thermometer className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                <span>Climate Control Systems &amp; Commercial Equipment</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white text-sm">HVAC &amp; DX Precision Cooling</h3>
                  <p className="mt-1 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                    Air handling units (AHU) equipped with variable frequency drives (VFD) maintain crop canopy temperature precision within ±0.5°C across extreme seasonal weather.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white text-sm">High-Pressure Fogging</h3>
                  <p className="mt-1 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                    70-bar ceramic nozzles produce ultra-fine aerosol mist (5–10 micron droplets) sustaining 85%–95% RH without wetting cap surfaces or inducing bacterial blotch disease.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white text-sm">CO₂ &amp; Spore Filtration</h3>
                  <p className="mt-1 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                    Infrared NDIR carbon dioxide sensors regulate motorized fresh-air dampers, maintaining 800–1200 ppm CO₂ during pinning while scrubbing spores via G4 + F9 filters.
                  </p>
                </div>
              </div>
            </section>

            {/* Cold Storage & Turnkey Project Support */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-7 rounded-3xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 shadow-sm backdrop-blur-md">
                <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  <span>Cold Storage &amp; Post-Harvest</span>
                </h2>
                <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  Integrated on-site cold storage rooms maintain temperatures between 2°C and 4°C with high humidity to arrest cap veil opening, preserve post-harvest firmness, and ensure standard 7–10 day fresh market shelf life.
                </p>
              </div>

              <div className="p-7 rounded-3xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 shadow-sm backdrop-blur-md">
                <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Factory className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  <span>Turnkey Commercial Farm Consultation</span>
                </h2>
                <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  Ready to construct a high-yield commercial mushroom facility? Export your customized 3D design specifications, BOQ schedules, and building dimensions directly to our agricultural engineering team.
                </p>
                <div className="mt-4">
                  <Link
                    href="/enquiry"
                    className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1"
                  >
                    <span>Submit your project enquiry for consultation</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </section>

            {/* Visible FAQ Section */}
            <section className="p-8 rounded-3xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 shadow-sm backdrop-blur-md">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5 mb-6">
                <HelpCircle className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                <span>3D Mushroom Farm Planner FAQs</span>
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <details
                    key={index}
                    className="group bg-slate-50 dark:bg-slate-950/60 rounded-2xl p-4 border border-slate-200 dark:border-slate-800/80 transition-all cursor-pointer"
                  >
                    <summary className="font-semibold text-slate-900 dark:text-slate-100 flex items-center justify-between list-none text-base">
                      <span>{faq.question}</span>
                      <ChevronDown className="w-4 h-4 text-emerald-500 transition-transform group-open:rotate-180" />
                    </summary>
                    <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* Internal SEO Navigation Links */}
            <nav
              aria-label="Related mushroom farming resources"
              className="pt-6 border-t border-slate-200 dark:border-slate-800"
            >
              <h3 className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-4">
                Related Mushroom Farming Resources
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                <Link
                  href="/training"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-500/50 transition-all shadow-sm"
                >
                  <span>Mushroom Farming Training</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                </Link>
                <Link
                  href="/usatraining"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-500/50 transition-all shadow-sm"
                >
                  <span>USA Mushroom Farming Training</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                </Link>
                <Link
                  href="/mushroomfarmingcalculators"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-500/50 transition-all shadow-sm"
                >
                  <span>Mushroom Farming Calculators</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                </Link>
                <Link
                  href="/enquiry"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-500/50 transition-all shadow-sm"
                >
                  <span>Mushroom Farm Enquiry</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                </Link>
              </div>
            </nav>
          </article>
        </div>
      </main>
    </>
  );
}
