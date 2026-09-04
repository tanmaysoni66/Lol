"use client";

import React from "react";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export const DirectInquiry = () => {
  const checklist = [
    "Free pre-feasibility site evaluation guidance",
    "Direct commercial G1 spawn delivery options",
    "Subsidy assistance (NHB, NABARD & State-wise)",
    "Complete HVAC, compost unit & lab setups"
  ];

  return (
    <section className="py-24 px-6 lg:px-8 relative z-10 w-full overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Main Glass Card */}
        <div className="relative rounded-[2.5rem] bg-white/5 dark:bg-[#11121E]/60 backdrop-blur-3xl border border-black/5 dark:border-white/10 shadow-2xl p-8 md:p-12 lg:p-16">
          {/* Animated Background blobs inside the card to give it that "Liquid 3D" feel */}
          <div className="absolute top-0 right-1/4 w-64 h-64 bg-purple-500/20 blur-[100px] rounded-full pointer-events-none animate-pulse"></div>
          <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-emerald-500/20 blur-[100px] rounded-full pointer-events-none animate-pulse" style={{ animationDelay: "1s" }}></div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 relative z-10 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-slate-300 dark:border-white/10 bg-white/50 dark:bg-white/5 text-[10px] font-bold uppercase tracking-widest text-slate-800 dark:text-slate-300 mb-6 backdrop-blur-md">
                Direct Inquiry
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold dark:text-white text-slate-900 leading-[1.15] mb-6 tracking-tight">
                Start Your Commercial <span className="text-purple-600 dark:text-purple-400">Mushroom</span>{" "}
                <span className="text-emerald-600 dark:text-emerald-400">Project</span> Today
              </h2>
              
              <p className="text-sm md:text-base dark:text-slate-400 text-slate-600 mb-8 leading-relaxed max-w-lg">
                Connect directly with India's most trusted commercial mushroom agriculture consultants. Submit your details to get a customized site feasibility evaluation & project setup design model layout matching your resource availability.
              </p>

              <ul className="space-y-4 mb-10 max-w-lg">
                {checklist.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-purple-600 dark:text-purple-400 shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold dark:text-slate-300 text-slate-700 leading-tight">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://wa.me/919203544140" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-6 py-4 rounded-xl text-xs font-black text-white text-center uppercase tracking-widest bg-gradient-to-r from-[#7b51f8] to-[#2fd17b] hover:opacity-90 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all w-full sm:w-auto"
                >
                  Chat on<br/>WhatsApp
                </a>
                <a 
                  href="tel:9203544140" 
                  className="px-6 py-4 rounded-xl text-xs font-black dark:text-white text-slate-900 text-center uppercase tracking-widest bg-white/50 dark:bg-[#1A1C29]/80 border border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/10 shadow-sm hover:shadow-md transition-all w-full sm:w-auto backdrop-blur-md"
                >
                  Call +91<br/>9203544140
                </a>
              </div>
            </div>

            {/* Right Card (Send Instant Inquiry) */}
            <div className="relative lg:ml-8 mt-4 lg:mt-0">
              <div className="rounded-[2.5rem] bg-white/80 dark:bg-[#161726]/90 backdrop-blur-2xl border border-slate-200 dark:border-white/5 shadow-2xl p-8 md:p-12 text-center relative z-10 flex flex-col items-center justify-center min-h-[300px]">
                <h3 className="text-lg md:text-xl font-bold dark:text-white text-slate-900 mb-4">
                  Send Instant Inquiry
                </h3>
                <p className="text-[13px] md:text-sm dark:text-slate-400 text-slate-600 mb-8 leading-relaxed max-w-sm">
                  Have questions about Mushroom Farming, Spawn, or Turnkey Projects? Submit your detailed requirements via our dedicated enquiry form and our experts will get back to you!
                </p>
                <Link 
                  href="/enquiry" 
                  className="inline-block px-10 py-4 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#7b51f8] to-[#2fd17b] hover:opacity-90 shadow-[0_0_20px_rgba(47,209,123,0.3)] hover:shadow-[0_0_30px_rgba(123,81,248,0.5)] transition-all hover:scale-105"
                >
                  Enquiry Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
