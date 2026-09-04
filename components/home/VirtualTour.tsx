"use client";

import React from "react";
import { motion } from "motion/react";
import { Play } from "lucide-react";

export const VirtualTour = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-slate-300 mb-5 shadow-sm">
            VIRTUAL TOUR
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black dark:text-white text-slate-900 leading-[1.15] mb-5 tracking-tight uppercase">
            COMMERCIAL MUSHROOM FARM <span className="text-purple-600 dark:text-[#8B5CF6]">360°</span> <span className="text-emerald-500 dark:text-[#10B981]">VIEW</span>
          </h2>
          <p className="text-[11px] md:text-[13px] dark:text-slate-400 text-slate-600 mb-6 leading-relaxed max-w-3xl mx-auto font-medium">
            Explore our state-of-the-art commercial mushroom farm setup. Watch this 360-degree view video to understand the infrastructure and scientific approach we implement for high-yield turnkey projects.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative max-w-5xl mx-auto aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900"
        >
          <img 
            src="https://images.unsplash.com/photo-1605557202138-097823c39fc2?q=80&w=2000&auto=format&fit=crop" 
            alt="Commercial Mushroom Farm 360 View" 
            className="w-full h-full object-cover opacity-80 mix-blend-overlay"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center group hover:bg-white/30 transition-all hover:scale-110">
              <Play className="text-white ml-2" size={32} />
            </button>
          </div>
          {/* Custom Video Player UI overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
            <div className="flex items-center gap-4 text-white text-xs">
              <button><Play size={16} fill="white" /></button>
              <span>0:00</span>
              <div className="flex-1 h-1 bg-white/30 rounded-full overflow-hidden">
                <div className="h-full w-0 bg-purple-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
