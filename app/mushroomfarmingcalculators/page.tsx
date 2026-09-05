import MushroomCalculatorSchema from "./components/MushroomCalculatorSchema";
import MushroomFarmingCalculators from "@/components/MushroomFarmingCalculators";
import Link from "next/link";
import { HelpCircle, Calculator, Building, Compass, ArrowRight } from "lucide-react";

const faqs = [
  {
    question: "What is a mushroom farming calculator?",
    answer:
      "It is a planning tool that helps estimate space, growing rooms, racks, substrate requirements, production capacity and initial setup costs for a mushroom farming setup.",
  },
  {
    question: "Can I use it for commercial mushroom farming?",
    answer:
      "Yes. The calculator is designed to assist with commercial mushroom farm planning and preliminary capacity estimation for Button, Oyster, and Milky mushroom projects.",
  },
  {
    question: "Can I calculate rack requirements?",
    answer:
      "Yes, rack requirements can be estimated based on the farm configuration, room dimensions, tier levels, and growing-room setup entered into the tool.",
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

export default function MushroomFarmingCalculatorsPage() {
  return (
    <>
      <MushroomCalculatorSchema />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <main>
        {/* Existing Calculator UI */}
        <MushroomFarmingCalculators />

        {/* SEO Technical & Planning Guide */}
        <div className="max-w-5xl mx-auto px-6 py-12 space-y-12 text-slate-800 dark:text-slate-200">
          <section className="bg-white/80 dark:bg-slate-900/80 rounded-3xl p-8 border border-slate-200/80 dark:border-slate-800 shadow-sm backdrop-blur-md">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-4 flex items-center gap-2.5">
              <Calculator className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
              Mushroom Farming Calculator
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Use this mushroom farming calculator to plan your commercial mushroom farm, estimate growing-room requirements, rack capacity, substrate consumption, and available farm space before investing in infrastructure.
            </p>
          </section>

          <section className="bg-white/80 dark:bg-slate-900/80 rounded-3xl p-8 border border-slate-200/80 dark:border-slate-800 shadow-sm backdrop-blur-md">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-4 flex items-center gap-2.5">
              <Building className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
              Commercial Mushroom Farm Planning
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              A well-planned mushroom farm considers growing-room dimensions, rack layout, working space, environmental control, equipment placement, and production capacity to ensure consistent operational yield and rapid return on capital.
            </p>

            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <Compass className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              What Can You Calculate?
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-700 dark:text-slate-300">
              {[
                "Growing-room dimensions and layout requirements",
                "Rack and vertical shelf capacity planning",
                "Effective canopy area & growing bed space",
                "Substrate volume & pasteurized compost weight",
                "Commercial setup CAPEX & operational cost planning",
                "Estimated crop harvest yield & sales projections",
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-2.5 text-sm font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Visible FAQ Section */}
          <section className="bg-white/80 dark:bg-slate-900/80 rounded-3xl p-8 border border-slate-200/80 dark:border-slate-800 shadow-sm backdrop-blur-md">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-6 flex items-center gap-2.5">
              <HelpCircle className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
              Mushroom Farming Calculator FAQs
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details
                  key={index}
                  className="group bg-slate-50 dark:bg-slate-950/60 rounded-2xl p-4 border border-slate-200 dark:border-slate-800/80 transition-all cursor-pointer"
                >
                  <summary className="font-semibold text-slate-900 dark:text-slate-100 flex items-center justify-between list-none text-base">
                    <span>{faq.question}</span>
                    <span className="text-emerald-500 font-bold ml-2 text-lg group-open:rotate-45 transition-transform">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed pl-1">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </section>

          {/* Internal Links Navigation */}
          <nav aria-label="Related mushroom farming resources" className="pt-4 border-t border-slate-200 dark:border-slate-800">
            <h3 className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-4">
              Related Farm Planning Resources
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { label: "3D Mushroom Farm Planner", href: "/3d-mushroom-farm" },
                { label: "Mushroom Farming Training", href: "/training" },
                { label: "USA Mushroom Training", href: "/usatraining" },
                { label: "Farm Setup Enquiry", href: "/enquiry" },
              ].map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  className="flex items-center justify-between p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-500/50 transition-all shadow-sm"
                >
                  <span>{link.label}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </main>
    </>
  );
}
