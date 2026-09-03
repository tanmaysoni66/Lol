"use client";

import { motion } from 'motion/react';
import { Leaf } from 'lucide-react';

export function MushroomComparison() {
  const mushrooms = [
    {
      name: "Oyster Mushroom",
      temp: "20-30°C",
      cycle: "30-45 Days",
      difficulty: "Beginner",
      market: "High Local Demand"
    },
    {
      name: "Milky Mushroom",
      temp: "25-35°C",
      cycle: "40-50 Days",
      difficulty: "Intermediate",
      market: "High Summer Demand"
    },
    {
      name: "Button Mushroom",
      temp: "15-22°C",
      cycle: "60-70 Days",
      difficulty: "Advanced",
      market: "Highest Commercial Demand"
    }
  ];

  return (
    <section className="py-24 bg-[#0B0F19]" id="spawn">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-medium text-sm mb-4"
          >
            <Leaf size={16} />
            <span>Commercial Genetics</span>
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-4">Premium Mushroom Spawn</h2>
          <p className="text-slate-400 text-lg">We provide high-yielding, first-generation (F1) spawn cultured in our sterile laboratories.</p>
        </div>
        
        <div className="overflow-x-auto pb-8">
          <table className="w-full min-w-[800px] border-collapse bg-[#131b26] rounded-2xl border border-white/10 overflow-hidden">
            <thead>
              <tr className="bg-[#1a2332] border-b border-white/10">
                <th className="py-5 px-6 text-left font-poppins font-semibold text-white">Mushroom Variety</th>
                <th className="py-5 px-6 text-left font-poppins font-semibold text-white">Ideal Temp.</th>
                <th className="py-5 px-6 text-left font-poppins font-semibold text-white">Crop Cycle</th>
                <th className="py-5 px-6 text-left font-poppins font-semibold text-white">Cultivation Difficulty</th>
                <th className="py-5 px-6 text-left font-poppins font-semibold text-white">Market Potential</th>
              </tr>
            </thead>
            <tbody>
              {mushrooms.map((m, idx) => (
                <tr key={idx} className="border-b border-white/5 hover:bg-[#1a2332]/50 transition-colors">
                  <td className="py-5 px-6 font-medium text-white">{m.name}</td>
                  <td className="py-5 px-6 text-slate-300">{m.temp}</td>
                  <td className="py-5 px-6 text-slate-300">{m.cycle}</td>
                  <td className="py-5 px-6">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${
                      m.difficulty === 'Beginner' ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' :
                      m.difficulty === 'Intermediate' ? 'bg-amber-500/10 border-amber-500/20 text-amber-400' :
                      'bg-red-500/10 border-red-500/20 text-red-400'
                    }`}>
                      {m.difficulty}
                    </span>
                  </td>
                  <td className="py-5 px-6 text-slate-300">{m.market}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
