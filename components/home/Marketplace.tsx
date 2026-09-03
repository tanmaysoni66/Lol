"use client";

import { motion } from 'motion/react';
import { ShoppingBag, TrendingUp, Handshake } from 'lucide-react';

export function Marketplace() {
  return (
    <section className="py-24 bg-slate-900 text-white relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-800 z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-panel p-8 md:p-16 rounded-3xl border border-white/10 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-20 h-20 mx-auto bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center text-white mb-8 shadow-xl shadow-purple-500/20"
          >
            <Handshake size={32} />
          </motion.div>
          
          <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-6">Global B2B Marketplace</h2>
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            We don't just help you grow; we help you sell. Join our network of bulk buyers, FMCG brands, and exporters.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12 text-left">
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
              <ShoppingBag className="text-purple-400 mb-4" size={24} />
              <h3 className="font-poppins font-semibold text-lg mb-2">Buyback Guarantee</h3>
              <p className="text-slate-400 text-sm">For dry oyster mushrooms and commercial button mushroom yields (subject to quality standards).</p>
            </div>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
              <TrendingUp className="text-blue-400 mb-4" size={24} />
              <h3 className="font-poppins font-semibold text-lg mb-2">Market Linkage</h3>
              <p className="text-slate-400 text-sm">Direct connections to local mandis, retail chains, and international buyers for fresh produce.</p>
            </div>
          </div>
          
          <a href="https://wa.me/919203544140" className="inline-flex items-center justify-center bg-white text-slate-900 hover:bg-slate-100 px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
            Join the Network
          </a>
        </div>
      </div>
    </section>
  );
}
