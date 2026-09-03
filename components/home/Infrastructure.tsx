"use client";

import { motion } from 'motion/react';
import { Settings } from 'lucide-react';

export function Infrastructure() {
  const items = [
    { title: "Insulated Growing Rooms", desc: "PUF panel setups for maximum thermal efficiency." },
    { title: "Fogging Systems", desc: "High-pressure humidification without wetting the crop." },
    { title: "HVAC & Chillers", desc: "Commercial cooling for year-round production." },
    { title: "Compost Tunnels", desc: "Aerated bunkers for bulk button mushroom compost." }
  ];

  return (
    <section className="py-24 bg-white" id="infrastructure">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-slate-900 mb-6">Commercial Infrastructure</h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              We design and supply robust infrastructure required for high-yield, uninterrupted mushroom production, mitigating seasonal risks.
            </p>
            
            <div className="space-y-6">
              {items.map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 shrink-0">
                    <Settings size={20} />
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-slate-800 mb-1">{item.title}</h3>
                    <p className="text-slate-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="aspect-[4/3] rounded-3xl bg-slate-900 relative overflow-hidden shadow-2xl">
               <div className="absolute inset-0 bg-gradient-to-tr from-blue-900 to-slate-800 flex items-center justify-center text-blue-300/30 font-bold text-3xl">
                  Infrastructure Image
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
