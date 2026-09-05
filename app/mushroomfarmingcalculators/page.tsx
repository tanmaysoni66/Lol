import MushroomCalculatorSchema from "./components/MushroomCalculatorSchema";
import MushroomFarmingCalculators from "@/components/MushroomFarmingCalculators";
import CalculatorAmbientBackground from "./components/CalculatorAmbientBackground";
import Link from "next/link";
import { HelpCircle, Calculator, Building, Compass, ArrowRight, CheckCircle2 } from "lucide-react";

const faqs = [
  {
    question: "What is a mushroom farming calculator?",
    answer:
      "It is a commercial planning tool that helps estimate farm space, growing rooms, vertical racks, substrate consumption, production capacity, setup CAPEX, and expected business ROI before investing in physical infrastructure.",
  },
  {
    question: "Can I use it for commercial mushroom farming?",
    answer:
      "Yes. The calculator is specifically engineered for commercial mushroom farm planning and preliminary capacity estimation across Button, Oyster, and Milky mushroom commercial projects.",
  },
  {
    question: "Can I calculate rack requirements and effective growing area?",
    answer:
      "Yes, rack requirements and multi-tier shelving capacity are calculated based on your growing room dimensions, tier levels, corridor clearances, and bag density per square meter.",
  },
  {
    question: "What production metrics can I estimate?",
    answer:
      "You can estimate total pasteurized substrate weight, biological efficiency (B.E. %), crop harvest yield per flush, annual production volume, and number of batch cycles per room per year.",
  },
  {
    question: "How does the setup cost calculator help farmers?",
    answer:
      "It provides a clear financial roadmap of major capital expenditure, including civil structure, PUF panel thermal insulation, aluminum/MS racks, HVAC climate control systems, electricals, and humidity foggers.",
  },
  {
    question: "Are mushroom farming calculator results estimates?",
    answer:
      "Results are mathematical estimates based on validated commercial cultivation standards. Actual farm yields vary according to compost quality, climate management precision, spawn vigor, and hygiene SOP compliance.",
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

      <div className="relative min-h-screen bg-transparent selection:bg-emerald-500/20">
        {/* Dynamic 3D ambient liquid glow and bioluminescent spore animation background */}
        <CalculatorAmbientBackground />

        <main className="relative z-10">
          {/* Interactive Calculators Section with Glassmorphism */}
          <MushroomFarmingCalculators />

          {/* SEO Technical Planning & Architecture Guide */}
          <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 md:py-14 space-y-8 text-slate-800 dark:text-slate-200">
            {/* Commercial Planning Glass Card */}
            <section className="bg-white/30 dark:bg-slate-900/35 rounded-[2.2rem] p-6 md:p-10 border border-white/50 dark:border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.05)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.35)] backdrop-blur-2xl transition-all hover:border-emerald-500/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/20">
                  <Building className="w-5 h-5" />
                </div>
                <h2 className="text-xl md:text-2xl font-black tracking-tight text-slate-900 dark:text-white">
                  Commercial Mushroom Farm Planning
                </h2>
              </div>
              
              <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-6 font-medium">
                A high-performing commercial mushroom facility requires synchronized balance between room volume, rack layout, airflow distribution, cooling capacity, and bag density. Using calibrated mathematical models prevents costly over-engineering and eliminates production bottlenecks.
              </p>

              <div className="pt-4 border-t border-white/40 dark:border-white/10">
                <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-4 flex items-center gap-2">
                  <Compass className="w-4 h-4" />
                  Key Parameters Calculated
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5">
                  {[
                    "Growing-room dimensions & layout",
                    "Vertical rack tiers & canopy area",
                    "Substrate volume & compost weight",
                    "Biological Efficiency (B.E. %)",
                    "CAPEX: Civil, PUF, HVAC & Racks",
                    "Net cycle profit & payback period",
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 p-3 rounded-xl bg-white/40 dark:bg-white/5 border border-white/60 dark:border-white/5 backdrop-blur-md text-xs font-semibold text-slate-700 dark:text-slate-300 shadow-sm"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Visible Glassmorphic FAQ Section */}
            <section className="bg-white/30 dark:bg-slate-900/35 rounded-[2.2rem] p-6 md:p-10 border border-white/50 dark:border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.05)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.35)] backdrop-blur-2xl transition-all hover:border-emerald-500/30">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/20">
                  <HelpCircle className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl font-black tracking-tight text-slate-900 dark:text-white">
                    Frequently Asked Questions
                  </h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">
                    Common questions about mushroom farm capacity estimation and setup calculations
                  </p>
                </div>
              </div>

              <div className="space-y-3.5">
                {faqs.map((faq, index) => (
                  <details
                    key={index}
                    className="group bg-white/40 dark:bg-white/5 rounded-2xl p-4 md:p-5 border border-white/60 dark:border-white/10 backdrop-blur-xl transition-all cursor-pointer hover:border-emerald-500/40"
                  >
                    <summary className="font-bold text-slate-900 dark:text-slate-100 flex items-center justify-between list-none text-sm md:text-base">
                      <span>{faq.question}</span>
                      <span className="w-6 h-6 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-sm font-black group-open:rotate-45 transition-transform duration-200 shrink-0 ml-3">
                        +
                      </span>
                    </summary>
                    <p className="mt-3 text-xs md:text-sm text-slate-600 dark:text-slate-300 leading-relaxed pl-0.5 border-t border-black/5 dark:border-white/5 pt-3">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* Internal Resource Ecosystem Navigation */}
            <nav
              aria-label="Related mushroom farming resources"
              className="bg-white/30 dark:bg-slate-900/35 rounded-[2.2rem] p-6 md:p-8 border border-white/50 dark:border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.05)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.35)] backdrop-blur-2xl"
            >
              <h3 className="text-xs uppercase tracking-wider text-emerald-700 dark:text-emerald-400 font-bold mb-4">
                Explore Commercial Cultivation Ecosystem
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { label: "3D Mushroom Farm Viewer", href: "/3d-mushroom-farm", desc: "Interactive 3D facility tour" },
                  { label: "India Practical Training", href: "/training", desc: "Hands-on commercial workshops" },
                  { label: "USA & Global Training", href: "/usatraining", desc: "International indoor programs" },
                  { label: "Commercial Project Enquiry", href: "/enquiry", desc: "Consultancy & turnkey setup" },
                ].map((link, idx) => (
                  <Link
                    key={idx}
                    href={link.href}
                    className="flex flex-col justify-between p-4 rounded-2xl bg-white/40 dark:bg-white/5 border border-white/60 dark:border-white/10 backdrop-blur-xl text-slate-800 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-500/50 hover:scale-[1.02] transition-all shadow-sm group"
                  >
                    <div>
                      <div className="text-xs font-bold mb-1 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                        {link.label}
                      </div>
                      <div className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">
                        {link.desc}
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-[10px] font-bold text-emerald-600 dark:text-emerald-400 mt-3 pt-2 border-t border-black/5 dark:border-white/5">
                      <span>Open Tool</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </nav>
          </div>
        </main>
      </div>
    </>
  );
}
