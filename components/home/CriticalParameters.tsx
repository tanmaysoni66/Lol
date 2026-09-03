"use client";

import { motion } from 'motion/react';
import { Thermometer, Droplets, Wind, Sun } from 'lucide-react';

export function CriticalParameters() {
  const parameters = [
    { icon: <Thermometer size={24} />, title: "Temperature", desc: "Precise control for mycelium run and fruiting phases." },
    { icon: <Droplets size={24} />, title: "Humidity (RH)", desc: "Maintained at 80-90% for optimal cap development." },
    { icon: <Wind size={24} />, title: "Ventilation", desc: "CO2 flushing and fresh air exchange automation." },
    { icon: <Sun size={24} />, title: "Light", desc: "Specific lux levels to trigger pinhead formation." }
  ];

  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">Critical Farming Parameters</h2>
          <p className="text-slate-400 text-lg">Mushroom farming is the science of controlled environments. We automate these critical factors.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {parameters.map((param, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-panel p-8 text-center rounded-2xl border border-white/10 hover:border-emerald-500/50 transition-colors"
            >
              <div className="w-14 h-14 mx-auto bg-slate-800 rounded-2xl flex items-center justify-center text-emerald-400 mb-6 shadow-lg shadow-black/50">
                {param.icon}
              </div>
              <h3 className="font-poppins font-semibold text-lg mb-3">{param.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{param.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
