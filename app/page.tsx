"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, Play, Quote } from "lucide-react";

// Import your page components here:
import { Hero } from "@/components/home/Hero";
import { EcosystemFlow } from "@/components/home/EcosystemFlow";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { FarmingModels } from "@/components/home/FarmingModels";
import { MushroomComparison } from "@/components/home/MushroomComparison";
import { ROICalculator } from "@/components/home/ROICalculator";
import { CriticalParameters } from "@/components/home/CriticalParameters";
import { ProductionSOP } from "@/components/home/ProductionSOP";
import MushroomSEOSections from "@/components/home/MushroomSEOSections";
import ComparisonTable from "@/components/home/ComparisonTable";
import StatesSection from "@/components/home/StatesSection";
import CTASection from "@/components/home/CTASection";

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
      <Hero />
      <EcosystemFlow />
      <WhyChooseUs />
      <FarmingModels />
      <MushroomComparison />
      <ROICalculator />
      <CriticalParameters />
      <ProductionSOP />

      {/* Compost Units Section */}
      <section id="compost-units" className="section-padding relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-5">
            <div className="badge mx-auto mb-4">Commercial Infrastructure</div>
            <h2 className="mb-4 uppercase">
              <Link href="/equipment" className="hover:text-current transition-colors">
                Standard Commercial <span className="gradient-text">Compost Units</span>
              </Link>
            </h2>
            <p className="max-w-xl mx-auto text-xs md:text-sm text-slate-500 dark:text-slate-400">
              Complete Phase-I + Phase-II commercial infrastructure with 15-day cycles.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-6">
            {[
              {
                title: "150-200 Tonnes/Month Unit",
                desc: "Ideal for 3-4 growing rooms (20-30 Tons mushroom/month).",
                area: "3500 Sq Ft",
                rooms: "3 Bunkers + 1 Tunnel",
                cost: "₹18-20 Lakhs",
              },
              {
                title: "300-400 Tonnes/Month Unit",
                desc: "Ideal for 6-8 growing rooms (45-60 Tons mushroom/month).",
                area: "6500 Sq Ft",
                rooms: "4 Bunkers + 2 Tunnels",
                cost: "₹35-40 Lakhs",
              },
            ].map((unit, i) => (
              <div
                key={i}
                className="glass p-5 md:p-6 rounded-3xl border border-black/5 dark:border-white/5 relative group hover:border-primary-start/50 transition-colors"
              >
                <div className="absolute top-4 md:top-6 right-4 md:right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <span className="text-4xl md:text-5xl font-black">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="text-base md:text-lg font-bold mb-1 dark:text-white text-slate-900 pr-12">
                  {unit.title}
                </h3>
                <p className="text-[10px] md:text-[11px] text-slate-500 mb-4 md:mb-6">
                  {unit.desc}
                </p>

                <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                  {[
                    { label: "Required Area", val: unit.area },
                    { label: "Structure", val: unit.rooms },
                    { label: "Est. Civil Cost", val: unit.cost },
                  ].map((stat, j) => (
                    <div
                      key={j}
                      className="flex justify-between items-center py-1.5 md:py-2 border-b border-black/5 dark:border-white/5 last:border-0"
                    >
                      <span className="text-[10px] md:text-[11px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">
                        {stat.label}
                      </span>
                      <span className="text-[11px] md:text-xs font-bold dark:text-white text-slate-900 text-right">
                        {stat.val}
                      </span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/compost-unit-specs"
                  className="w-full py-2.5 md:py-3 rounded-xl md:rounded-2xl bg-black/5 dark:bg-white/5 font-bold text-xs md:text-sm hover:bg-primary-start hover:text-white transition-all flex items-center justify-center gap-2 group-hover:scale-[1.02]"
                >
                  View Specifications <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center max-w-2xl mx-auto p-4 md:p-6 rounded-2xl md:rounded-3xl border border-yellow-500/30 bg-yellow-500/5">
            <h4 className="font-bold text-yellow-600 dark:text-yellow-500 mb-2 text-xs md:text-sm">
              Custom Requirements?
            </h4>
            <p className="text-[10px] md:text-xs text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
              For units above 500+ Tonnes/Month or fully automated Phase-III
              facilities, we provide custom Dutch-standard structural designs
              and machinery lists.
            </p>
            <Link
              href="/book-consultant"
              className="inline-flex items-center gap-2 text-[10px] md:text-xs font-bold text-primary-start hover:text-primary-end transition-colors"
            >
              Consult with Lead Architect <ArrowRight size={12} />
            </Link>
          </div>
        </div>
      </section>

      {/* Accreditations Section */}
      <section className="py-6 border-y dark:border-white/5 border-black/5 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="text-center flex flex-col items-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/ISO_9001-2015.svg/1024px-ISO_9001-2015.svg.png"
                alt="ISO 9001:2015 - Mushroom Farm Setup"
                className="h-10 md:h-12 object-contain mix-blend-multiply dark:mix-blend-screen mb-1"
                loading="lazy"
                width="120"
                height="48"
              />
              <span className="text-[8px] md:text-[9px] font-black tracking-widest uppercase">
                9001:2015 Certified
              </span>
            </div>
            <div className="text-center flex flex-col items-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/FSSAI_logo.svg/1200px-FSSAI_logo.svg.png"
                alt="FSSAI Licensed - Organic Mushroom Spawn"
                className="h-8 md:h-10 object-contain mix-blend-multiply dark:mix-blend-screen mb-1"
                loading="lazy"
                width="120"
                height="40"
              />
              <span className="text-[8px] md:text-[9px] font-black tracking-widest uppercase mt-2">
                Licensed Producer
              </span>
            </div>
            <div className="text-center flex flex-col items-center">
              <img
                src="https://apeda.gov.in/apedawebsite/images/apeda_logo.png"
                alt="APEDA Registered - Exporter of Dried Oyster Mushrooms"
                className="h-10 md:h-12 object-contain mix-blend-multiply dark:mix-blend-screen mb-1"
                loading="lazy"
                width="120"
                height="48"
              />
              <span className="text-[8px] md:text-[9px] font-black tracking-widest uppercase mt-1">
                Registered Exporter
              </span>
            </div>
            <div className="text-center flex flex-col items-center">
              <img
                src="https://startupindia.gov.in/content/dam/invest-india/newhomepage/Logo1.png"
                alt="Startup India Recognized - Mushroom Farming Innovator"
                className="h-8 md:h-10 object-contain mix-blend-multiply dark:mix-blend-screen mb-1"
                loading="lazy"
                width="120"
                height="40"
              />
              <span className="text-[8px] md:text-[9px] font-black tracking-widest uppercase mt-2">
                Recognized Startup
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Farm Design & Setup Support */}
      <section className="section-padding relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="absolute -inset-4 md:-inset-10 bg-gradient-to-br from-primary-start/20 to-primary-end/20 blur-[30px] md:blur-[60px] rounded-full"></div>
              <div className="relative grid grid-cols-2 gap-3 md:gap-4">
                <img
                  loading="lazy"
                  src="https://res.cloudinary.com/dtpktdkqw/image/upload/v1777378070/IMG_6316_bsh803.jpg"
                  alt="Modern mushroom grow room design and setup"
                  className="rounded-2xl md:rounded-3xl shadow-xl hover:scale-105 transition-transform duration-500"
                  width="540"
                  height="540"
                />
                <img
                  loading="lazy"
                  src="https://res.cloudinary.com/dtpktdkqw/image/upload/v1777378072/IMG_6244_gohczo.jpg"
                  alt="Commercial mushroom bunker construction and climate control"
                  className="rounded-2xl md:rounded-3xl shadow-xl mt-6 md:mt-12 hover:scale-105 transition-transform duration-500"
                  width="540"
                  height="540"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="badge mb-4">Turnkey Solutions</div>
              <h2 className="mb-4 md:mb-6 uppercase">
                <Link href="/services" className="hover:text-current transition-colors">
                  Commercial Farm <span className="gradient-text">Design & Setup</span>
                </Link>
              </h2>
              <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 mb-6 md:mb-8 leading-relaxed">
                From drafting the initial 2D blueprints to executing 3D Dutch-style
                automated climate-controlled bunkers, our engineering team ensures
                every square foot is optimized for maximum biological efficiency (BE).
              </p>

              <div className="space-y-4 md:space-y-6">
                {[
                  {
                    title: "2D/3D Architectural Blueprints",
                    desc: "HVAC routing, insulation mapping & structural load analysis.",
                  },
                  {
                    title: "Machinery Supply & Installation",
                    desc: "Boilers, chillers, AHUs, and automated compost turners.",
                  },
                  {
                    title: "Buyback & Marketing Agreements",
                    desc: "Assured buyback contracts for fresh and dried Oyster mushrooms.",
                  },
                ].map((feature, i) => (
                  <div key={i} className="flex gap-3 md:gap-4 items-start">
                    <div className="w-8 h-8 md:w-10 md:h-10 shrink-0 rounded-full bg-primary-start/10 flex items-center justify-center text-primary-start">
                      <span className="font-black text-sm md:text-base">0{i + 1}</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-sm md:text-base dark:text-white text-slate-900 mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-[11px] md:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 md:mt-10">
                <Link
                  href="/book-consultant"
                  className="btn-primary w-full sm:w-auto justify-center"
                >
                  Request Project Estimate <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support & Agreements */}
      <section className="section-padding bg-black/5 dark:bg-white/5 border-y border-black/5 dark:border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="glass p-6 md:p-8 rounded-[2.5rem] md:rounded-[3rem] border border-black/5 dark:border-white/5 hover:border-primary-start/30 transition-all text-center">
              <h3 className="text-4xl md:text-5xl font-black gradient-text mb-3 md:mb-4">
                100%
              </h3>
              <div className="text-sm md:text-base font-bold dark:text-white text-slate-900 mb-2">
                Buyback Guarantee
              </div>
              <p className="text-[11px] md:text-xs text-slate-500 dark:text-slate-400">
                On dry Oyster & Milky mushrooms with formal legal agreements.
              </p>
            </div>
            <div className="glass p-6 md:p-8 rounded-[2.5rem] md:rounded-[3rem] border border-black/5 dark:border-white/5 hover:border-primary-start/30 transition-all text-center">
              <h3 className="text-4xl md:text-5xl font-black gradient-text mb-3 md:mb-4">
                24/7
              </h3>
              <div className="text-sm md:text-base font-bold dark:text-white text-slate-900 mb-2">
                Agronomy Support
              </div>
              <p className="text-[11px] md:text-xs text-slate-500 dark:text-slate-400">
                Dedicated WhatsApp & on-call support for climate & disease management.
              </p>
            </div>
            <div className="glass p-6 md:p-8 rounded-[2.5rem] md:rounded-[3rem] border border-black/5 dark:border-white/5 hover:border-primary-start/30 transition-all text-center">
              <h3 className="text-4xl md:text-5xl font-black gradient-text mb-3 md:mb-4">
                5+
              </h3>
              <div className="text-sm md:text-base font-bold dark:text-white text-slate-900 mb-2">
                Years Experience
              </div>
              <p className="text-[11px] md:text-xs text-slate-500 dark:text-slate-400">
                Setting up successful commercial units across PAN India.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Operations Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" 
          style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)', backgroundSize: '32px 32px' }}
        ></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-12">
            <div className="badge mx-auto mb-4">Global Operations</div>
            <h2 className="mb-4 uppercase text-2xl md:text-4xl">
              <Link href="/services" className="hover:text-current transition-colors">
                Setup & Training <span className="gradient-text">Worldwide</span>
              </Link>
            </h2>
            <p className="max-w-2xl mx-auto text-sm text-slate-500 dark:text-slate-400">
              Delivering high-tech commercial mushroom farm infrastructures and professional agronomy training.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { flag: "🇮🇳", name: "India", desc: "HQ & Turnkey Projects" },
              { flag: "🇺🇸", name: "USA", desc: "Remote Training & Blueprints" },
              { flag: "🇦🇺", name: "Australia", desc: "Farm Design Consulting" },
              { flag: "🇦🇪", name: "UAE", desc: "Climate Control Advisory" },
            ].map((country, i) => (
              <div key={i} className="p-4 md:p-6 glass rounded-3xl border border-black/5 dark:border-white/5 flex flex-col items-center text-center group hover:scale-[1.02] transition-transform">
                <span className="text-4xl md:text-5xl mb-3 md:mb-4 drop-shadow-lg">{country.flag}</span>
                <h3 className="font-bold text-sm md:text-base dark:text-white text-slate-900 mb-1">{country.name}</h3>
                <p className="text-[10px] md:text-[11px] text-slate-500">{country.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <Link href="/usatraining" className="inline-flex items-center gap-2 text-xs md:text-sm font-bold text-primary-start hover:text-primary-end transition-colors bg-primary-start/10 px-4 md:px-6 py-2 md:py-3 rounded-full">
              View USA/International Training Modules <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial / Founder Quote */}
      <section className="py-12 md:py-20 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <Quote className="w-12 h-12 md:w-16 md:h-16 mx-auto text-primary-start/20 mb-6" />
          <h2 className="text-xl md:text-3xl lg:text-4xl font-black tracking-tight dark:text-white text-slate-900 leading-tight mb-8">
            "Mushroom farming isn't just about throwing spawn into compost. It's an exact science of climate automation, sterilization, and precision biology. We built this ecosystem to eliminate the guesswork."
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-r from-purple-500 to-emerald-500 p-0.5">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center font-black text-white text-lg">
                OM
              </div>
            </div>
            <div className="text-left">
              <div className="font-bold text-sm md:text-base dark:text-white text-slate-900">
                Founder & Lead Agronomist
              </div>
              <div className="text-[10px] md:text-xs text-slate-500 font-bold uppercase tracking-widest">
                Organic Mushroom Farm
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Supply Grid */}
      <section className="section-padding border-t border-black/5 dark:border-white/5 bg-black/[0.02] dark:bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <div className="badge mx-auto mb-4">PAN India Supply Network</div>
            <h2 className="mb-4 uppercase text-2xl md:text-3xl">
              <Link href="/cities" className="hover:text-current transition-colors">
                Premium Spawn & <span className="gradient-text">Dry Mushrooms</span>
              </Link>
            </h2>
            <p className="max-w-xl mx-auto text-xs md:text-sm text-slate-500 dark:text-slate-400">
              FSSAI & APEDA registered. We ship Generation-1 organic spawn and export-quality dried mushrooms via verified logistics partners.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {[
              "Delhi NCR", "Mumbai", "Bangalore", "Hyderabad", 
              "Pune", "Ahmedabad", "Chennai", "Kolkata", 
              "Lucknow", "Jaipur", "Surat", "Bhopal"
            ].map((city, i) => (
              <div key={i} className="p-3 glass rounded-xl border border-black/5 dark:border-white/5 hover:bg-primary-start/5 hover:border-primary-start/30 transition-all text-center group cursor-default">
                <span className="text-[10px] md:text-xs font-bold text-slate-600 dark:text-slate-400 group-hover:text-primary-start transition-colors">
                  {city}
                </span>
              </div>
            ))}
          </div>
          
          <div className="mt-8 flex justify-center">
             <Link href="/cities" className="text-xs font-bold text-primary-start hover:underline flex items-center gap-1">
               View All 100+ Serviced Cities <ArrowRight size={12} />
             </Link>
          </div>
        </div>
      </section>

      {/* Resources & SOPs Section */}
      <section id="resources" className="section-padding bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-20 items-start">
            <div>
              <div className="badge mb-6 mx-auto lg:mx-0">Documentation & Resources</div>
              <h2 className="mb-6 uppercase text-center lg:text-left">
                <Link href="/cities" className="hover:text-current transition-colors">
                  Commercial Production <span className="gradient-text">SOPs & Guides</span>
                </Link>
              </h2>
              <p className="mb-6 text-center lg:text-left text-sm text-slate-600 dark:text-slate-400">
                Standard operating procedures used by commercial mushroom specialists nationwide and internationally.
              </p>

              <div className="md:hidden">
                {[
                  {
                    title: "Tunnel Ops",
                    content: "Details for Phase-II Pasteurization Tunnel operations and parameters.",
                    id: "tunnel-ops",
                  },
                  {
                    title: "Spawning",
                    content: "Comprehensive checklist for spawning and incubation stages.",
                    id: "spawning",
                  },
                  {
                    title: "Casing",
                    content: "Material preparation guide for optimal casing layer.",
                    id: "casing",
                  },
                  {
                    title: "Hygiene",
                    content: "Disease control protocols and farm hygiene standards.",
                    id: "hygiene",
                  },
                ].map((sop, i) => (
                  <details className="mb-3 bg-black/5 dark:bg-white/5 rounded-xl p-3 border border-black/5 dark:border-white/5" key={i}>
                    <summary className="font-bold text-xs outline-none cursor-pointer">{sop.title}</summary>
                    <p className="text-[10px] text-slate-500 mt-2">{sop.content}</p>
                    <Link
                      href={`/sops#${sop.id}`}
                      className="flex items-center gap-1 text-primary-start font-bold mt-3 text-[10px]"
                    >
                      Get Details <ArrowRight size={10} />
                    </Link>
                  </details>
                ))}
              </div>

              <div className="hidden md:block space-y-4">
                {[
                  { name: "Phase-II Commercial Pasteurization Tunnel Ops", id: "tunnel-ops" },
                  { name: "Spawning & Incubation Checklist", id: "spawning" },
                  { name: "Casing Material Preparation Guide", id: "casing" },
                  { name: "Disease Control & Commercial Farm Hygiene Protocols", id: "hygiene" },
                ].map((sop) => (
                  <Link
                    href={`/sops#${sop.id}`}
                    key={sop.name}
                    className="flex items-center gap-4 p-3 glass rounded-2xl border dark:border-white/5 border-black/5 group hover:dark:bg-white/5 bg-black/5 transition-all cursor-pointer"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary-start/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <BookOpen size={18} className="text-primary-start" />
                    </div>
                    <span className="text-sm font-bold dark:text-slate-300 text-slate-700">
                      {sop.name}
                    </span>
                    <ArrowRight
                      className="ml-auto text-slate-700 group-hover:translate-x-1 transition-transform"
                      size={16}
                    />
                  </Link>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-primary-start opacity-10 blur-[80px] rounded-full"></div>
              <div className="relative glass p-4 md:p-10 rounded-[2.5rem] border dark:border-white/10 border-black/10">
                <div className="flex items-center gap-4 mb-5 justify-center lg:justify-start">
                  <BookOpen className="text-primary-start" size={24} />
                  <h3 className="dark:text-white text-slate-900 tracking-tight font-bold">
                    Commercial Knowledge Hub
                  </h3>
                </div>

                <div className="space-y-4">
                  <Link
                    href="/articles/mushroom-farming-beginner-guide-india-2026-2027"
                    className="p-4 rounded-3xl bg-primary-start/10 border border-primary-start/20 block group hover:scale-[1.02] transition-transform"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[9px] text-primary-start font-black uppercase tracking-widest">
                        Ultimate Guide 2026-2027
                      </span>
                      <div className="px-2 py-0.5 rounded bg-green-500/20 text-green-500 text-[8px] font-black uppercase">
                        Article
                      </div>
                    </div>
                    <h4 className="dark:text-white text-slate-900 font-bold text-sm mb-2">
                      Mushroom Farming Beginner Guide India 2026-2027
                    </h4>
                    <p className="dark:text-slate-400 text-slate-600 text-xs leading-relaxed">
                      Complete guide on how to start mushroom farming (mushroom ki kheti) from scratch for beginners.
                    </p>
                  </Link>

                  <div className="p-4 rounded-3xl dark:bg-white/5 bg-black/5 border dark:border-white/10 border-black/10">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[9px] text-slate-500 font-black uppercase tracking-widest">
                        Featured
                      </span>
                      <div className="px-2 py-0.5 rounded bg-red-500/20 text-red-500 text-[8px] font-black uppercase">
                        Video
                      </div>
                    </div>
                    <a
                      href="https://youtube.com/shorts/wxLiU3nNZmM?si=6VmH86DPYKoQ72P6"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative aspect-video rounded-2xl overflow-hidden mb-4 group cursor-pointer inline-block w-full bg-slate-200 dark:bg-slate-800"
                    >
                      <img
                        loading="lazy"
                        src="https://res.cloudinary.com/dtpktdkqw/image/upload/v1777378071/IMG_6265_svucsm.jpg"
                        alt="Mushroom Farming Training Video - Commercial Cultivation SOPs India"
                        className="w-full h-full object-cover opacity-60"
                        width="1080"
                        height="1080"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center pl-1 shadow-2xl">
                          <Play size={20} fill="currentColor" />
                        </div>
                      </div>
                    </a>
                    <h4 className="dark:text-white text-slate-900 font-bold text-[13px] tracking-tight">
                      Commercial Composting Flow Explained
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MushroomSEOSections />
      <ComparisonTable />
      <StatesSection />
      <CTASection />
    </>
  );
}
