"use client";
import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { TrendingUp, Briefcase, MapPin, ShieldCheck, Award, Users } from "lucide-react";

export default function WhyChooseUs() {
  const chooseItems = [
    {
      title: "Cost Efficiency (15–25% Savings)",
      subtitle: "Direct manufacturing eliminates middlemen, ensuring 15–25% lower setup costs.",
      points: [
        "In-house PUF panel production",
        "Own rack fabrication unit",
        "Direct pricing advantage",
        "Strict quality control",
      ],
      icon: TrendingUp,
      color: "from-blue-500/20 to-purple-500/20",
    },
    {
      title: "Smart B2B Pricing",
      subtitle: "Wholesale pricing model for every mushroom farmer regardless of project size.",
      points: [
        "Wholesale pricing model",
        "Volume discounts",
        "Transparent breakdown",
        "No hidden costs",
      ],
      icon: Briefcase,
      color: "from-purple-500/20 to-pink-500/20",
    },
    {
      title: "Nationwide & Global Execution",
      subtitle: "Delivery and execution across India & worldwide with expert setup teams.",
      points: [
        "Coverage across all states & UTs in India",
        "International project support",
        "Local installation teams",
        "End-to-end logistics",
      ],
      icon: MapPin,
      color: "from-blue-600/20 to-cyan-500/20",
    },
    {
      title: "Price Match Guarantee",
      subtitle: "Lowest cost guarantee without compromising on commercial project quality.",
      points: [
        "Guaranteed lowest pricing",
        "Market comparison support",
        "Extra discount on matching quotes",
        "No quality compromise",
      ],
      icon: ShieldCheck,
      color: "from-indigo-500/20 to-blue-500/20",
    },
    {
      title: "Certified Quality",
      subtitle: "Built on international recognized standards for commercial mushroom cultivation.",
      points: [
        "Premium materials only",
        "Multi-level quality checks",
        "Standardized processes",
        "Long-term durability",
      ],
      icon: Award,
      color: "from-amber-400/20 to-orange-500/20",
    },
    {
      title: "Reliable Partnership",
      subtitle: "We help you build highly profitable commercial mushroom businesses.",
      points: [
        "Lifetime technical support",
        "Expert B2B consultation",
        "Proven project success",
        "Farmer-first approach",
      ],
      icon: Users,
      color: "from-emerald-500/20 to-teal-500/20",
    },
  ];

  return (
    <section id="why-us" className="section-padding relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary-start/10 blur-[120px] rounded-full pointer-events-none animate-pulse"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-6 md:mb-6">
          <div className="badge mb-4">Virtual Tour</div>
          <h2 className="mb-4 uppercase tracking-tight">
            Commercial Mushroom Farm <span className="gradient-text">360° View</span>
          </h2>
          <p className="text-slate-500 text-sm md:text-sm leading-relaxed mb-5">
            Explore our state-of-the-art commercial mushroom farm setup. Watch this 360-degree view video to understand the infrastructure and scientific approach we implement for high-yield turnkey projects.
          </p>
          <div className="rounded-3xl overflow-hidden shadow-2xl border dark:border-white/10 bg-black aspect-video relative">
            <video
              className="w-full h-full object-cover"
              controls
              preload="none"
              poster="/images/mushroom360viewimage.jpeg"
              title="Commercial Mushroom Farm 360 View Setup"
              aria-label="360 Degree Virtual Tour"
            >
              <source src="/video/mushroom360viewfarmsetup.mp4" type="video/mp4" />
              <track kind="captions" srcLang="en" label="English" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className="text-center mb-5 md:mb-20">
          <motion.div initial={{ opacity: 1, y: 20 }} animate={{ opacity: 1, y: 0 }} className="badge mx-auto mb-4">
            Mushroom Infrastructure Leaders
          </motion.div>
          <motion.h2 initial={{ opacity: 1, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-4">
            Why Choose{" "}
            <span className="gradient-text">
              <Link href="/states">Organic Mushrooms Farm for Your Project?</Link>
            </span>
          </motion.h2>
          <motion.p initial={{ opacity: 1, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl mx-auto text-slate-500">
            India’s most trusted commercial mushroom farming infrastructure partner delivering unmatched value, transparency, and high-yield performance globally.
          </motion.p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-5">
          {chooseItems.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 1, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="group relative">
              <div className="glass h-full card-padding rounded-2xl border dark:border-white/5 border-black/5 flex flex-col shadow-2xl relative overflow-hidden">
                <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${item.color} blur-[50px] pointer-events-none opacity-20`}></div>
                <div className="w-8 h-8 rounded-xl dark:bg-white/5 bg-black/5 border dark:border-white/10 border-black/10 flex items-center justify-center mb-6">
                  <item.icon className="text-primary-start" size={24} />
                </div>
                <h3 className="text-sm md:text-xl font-bold dark:text-white text-slate-900 mb-3">{item.title}</h3>
                <p className="mb-6 flex-1 italic text-slate-500">{item.subtitle}</p>
                <ul className="space-y-2">
                  {item.points.map((pt, j) => (
                    <li key={j} className="flex items-center gap-2 text-[12px] md:text-xs font-semibold dark:text-slate-400 text-slate-600">
                      <div className="w-1 h-1 rounded-full bg-primary-start"></div>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
