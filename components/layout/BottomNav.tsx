"use client";

import { Calendar, Sprout, BookOpen, Home, Layers, ShoppingCart, Phone, MessageCircle } from 'lucide-react';
import Link from 'next/link';

export function BottomNav() {
  const navItems = [
    { name: 'Book Consultant', icon: <Calendar size={18} />, color: 'text-purple-400', active: false },
    { name: 'Spawn (Seed)', icon: <Sprout size={18} />, color: 'text-purple-400', active: false },
    { name: 'Training', icon: <BookOpen size={18} />, color: 'text-cyan-400', active: false },
    { name: 'Setup (Turnkey)', icon: <Home size={18} />, color: 'text-purple-400', active: true },
    { name: 'Bags', icon: <Layers size={18} />, color: 'text-purple-400', active: false },
    { name: 'Fresh Mushroom', icon: <ShoppingCart size={18} />, color: 'text-cyan-400', active: false },
    { name: 'Call Us', icon: <Phone size={18} />, color: 'text-emerald-400', active: false },
  ];

  return (
    <>
      {/* Sticky Bottom Nav */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#111827]/80 backdrop-blur-2xl border-t border-white/5 pb-safe">
        {/* Colorful blur behind the nav */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-emerald-500/10 blur-xl pointer-events-none"></div>

        <div className="relative flex overflow-x-auto gap-3 px-4 py-3 no-scrollbar items-center">
          {navItems.map((item, idx) => (
            <Link
              key={idx}
              href="#"
              className={`flex items-center gap-2 border rounded-full px-5 py-2.5 whitespace-nowrap transition-colors shrink-0 ${
                item.active 
                  ? 'bg-white/10 border-white/20 shadow-sm' 
                  : 'bg-[#1e293b]/60 border-white/5 hover:bg-[#2e3d54]'
              }`}
            >
              <span className={item.color}>{item.icon}</span>
              <span className="text-[13px] font-semibold text-slate-200">{item.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
