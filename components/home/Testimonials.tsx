"use client";

import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

export function Testimonials() {
  const reviews = [
    {
      name: "Rajesh Kumar",
      location: "Maharashtra",
      text: "The turnkey setup from Organic Mushrooms Farm changed my life. Their F1 spawn yields are consistently 15-20% higher than local varieties.",
      rating: 5
    },
    {
      name: "Amit Singh",
      location: "Madhya Pradesh",
      text: "Tanish and his team provided excellent training. The ROI calculator they shared was accurate, and the buyback support is genuine.",
      rating: 5
    },
    {
      name: "Sarah Jenkins",
      location: "Australia",
      text: "Sourced their commercial equipment and consulting for our facility in NSW. Top-tier professional advice and reliable infrastructure.",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute right-0 top-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-slate-900 mb-4">Farmer Success Stories</h2>
          <p className="text-slate-600 text-lg">Hear from entrepreneurs who have successfully scaled their commercial farms with our support.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative"
            >
              <Quote className="absolute top-6 right-6 text-slate-100" size={48} />
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-slate-600 mb-8 relative z-10">"{review.text}"</p>
              <div>
                <h4 className="font-poppins font-bold text-slate-900">{review.name}</h4>
                <p className="text-sm text-slate-500">{review.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
