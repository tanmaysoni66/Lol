"use client";

import { motion } from 'motion/react';

export function FarmingModels() {
  const models = [
    {
      title: "Micro Setup",
      capacity: "100-200 kg/month",
      area: "200-500 sq ft",
      ideal: "Hobbyists & Beginners",
      features: ["Low initial investment", "Basic climate control", "Local market focus"]
    },
    {
      title: "Commercial Setup",
      capacity: "500-2000 kg/month",
      area: "1000-3000 sq ft",
      ideal: "Entrepreneurs",
      features: ["Automated climate control", "Structured workflow", "B2B supply chain"]
    },
    {
      title: "Industrial Turnkey",
      capacity: "5000+ kg/month",
      area: "5000+ sq ft",
      ideal: "Large scale investors",
      features: ["Fully automated IoT systems", "In-house spawn & compost", "Export quality production"]
    }
  ];

  return (
    <section className="py-24 bg-slate-900 text-white relative" id="setup">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">Scalable Farming Models</h2>
          <p className="text-slate-400 text-lg">Choose a setup that aligns with your investment capacity and business goals.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {models.map((model, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-panel rounded-2xl p-8 border border-slate-700 hover:border-emerald-500/50 transition-colors"
            >
              <h3 className="text-2xl font-poppins font-bold text-white mb-2">{model.title}</h3>
              <p className="text-emerald-400 font-medium mb-6">Ideal for: {model.ideal}</p>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between border-b border-slate-700/50 pb-2">
                  <span className="text-slate-400">Capacity</span>
                  <span className="font-semibold">{model.capacity}</span>
                </div>
                <div className="flex justify-between border-b border-slate-700/50 pb-2">
                  <span className="text-slate-400">Area Req.</span>
                  <span className="font-semibold">{model.area}</span>
                </div>
              </div>
              
              <ul className="space-y-3 mb-8">
                {model.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-2 text-sm text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <a href="https://wa.me/919203544140" className="block w-full py-3 text-center rounded-xl bg-slate-800 hover:bg-emerald-600 text-white font-medium transition-colors">
                Request Quote
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
