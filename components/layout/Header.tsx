"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, Home, Info, Award, Settings, BookOpen, Layers, Target, Calendar, Image as ImageIcon, Cloud, FileText, HelpCircle, Mail, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Spawn', href: '#spawn' },
    { name: 'Training', href: '#training' },
    { name: 'Setup', href: '#setup' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-4 left-4 right-4 z-50">
      <div className="max-w-7xl mx-auto">
        {/* Floating Pill Navbar */}
        <div className="bg-[#111827]/95 backdrop-blur-xl border border-white/10 rounded-[32px] px-5 py-3 flex justify-between items-center shadow-2xl">
          <Link href="/" className="flex items-center gap-3 group">
            {/* Logo */}
            <div className="w-10 h-10 bg-[#8b4513]/20 rounded-xl flex items-center justify-center shrink-0 border border-[#8b4513]/30">
              <span className="text-xl">🍄</span>
            </div>
            <div className="flex flex-col">
              <span className="font-poppins font-bold text-base tracking-tight flex gap-1">
                <span className="text-white">Organic</span> <span className="text-purple-400">Mushroom Farm</span>
              </span>
              <span className="text-[11px] text-[#10b981] font-medium flex items-center gap-1">
                Patan, MP: 24.2°C, Hum 98% <span className="text-red-400">🌡️</span>
              </span>
            </div>
          </Link>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors">
                {link.name}
              </Link>
            ))}
          </nav>
          
          {/* Mobile Toggle */}
          <button className="md:hidden p-1 text-white focus:outline-none" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Custom Grid Mobile Menu Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="fixed top-0 left-0 right-0 bottom-0 bg-[#0B0F19]/98 backdrop-blur-3xl z-40 pt-24 px-4 overflow-y-auto no-scrollbar pb-32"
            >
              <div className="max-w-md mx-auto">
                
                {/* Status Header */}
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center gap-2 bg-[#1A2234] rounded-full px-4 py-2 border border-white/5 shadow-inner">
                    <div className="w-6 h-6 bg-[#8b4513]/20 rounded-full flex items-center justify-center shrink-0 border border-[#8b4513]/30">
                      <span className="text-xs">🍄</span>
                    </div>
                    <span className="text-xs text-slate-300 font-medium tracking-wide">24.4°C, HUM 88% <span className="text-red-400">🌡️</span></span>
                    <span className="text-xs text-slate-500 mx-1">•</span>
                    <span className="text-[10px] text-blue-400 font-bold tracking-widest uppercase">NEW BATCH OPEN</span>
                  </div>
                  <button onClick={() => setMobileMenuOpen(false)} className="w-10 h-10 flex items-center justify-center bg-[#1A2234] rounded-full text-slate-400 border border-white/5">
                    <X size={20} />
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {/* Home - Active state */}
                  <Link href="/" className="col-span-1 bg-[#10b981]/10 border border-[#10b981]/30 rounded-[24px] p-5 flex flex-col gap-3" onClick={() => setMobileMenuOpen(false)}>
                    <div className="w-10 h-10 rounded-full bg-[#10b981]/20 flex items-center justify-center text-[#10b981]">
                      <Home size={20} />
                    </div>
                    <span className="text-[#10b981] font-bold text-sm">Home</span>
                  </Link>

                  {/* Empty right cell for the home row (matching screenshot) */}
                  <div className="col-span-1"></div>

                  {/* About - Full width accordion style */}
                  <Link href="#about" className="col-span-2 bg-[#1A2234] border border-white/5 rounded-[20px] p-5 flex justify-between items-center" onClick={() => setMobileMenuOpen(false)}>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-400">
                        <Info size={16} />
                      </div>
                      <span className="text-white font-semibold text-sm">About</span>
                    </div>
                    <ChevronDown size={18} className="text-slate-500" />
                  </Link>

                  {/* Training */}
                  <Link href="#training" className="col-span-1 bg-[#1A2234] border border-white/5 rounded-[24px] p-5 flex flex-col gap-3" onClick={() => setMobileMenuOpen(false)}>
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400">
                      <Award size={20} />
                    </div>
                    <span className="text-white font-semibold text-sm">Training</span>
                  </Link>

                  {/* Equipment */}
                  <Link href="#equipment" className="col-span-1 bg-[#1A2234] border border-white/5 rounded-[24px] p-5 flex flex-col gap-3" onClick={() => setMobileMenuOpen(false)}>
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400">
                      <Settings size={20} />
                    </div>
                    <span className="text-white font-semibold text-sm">Equipment</span>
                  </Link>

                  {/* Learning */}
                  <Link href="#learning" className="col-span-2 bg-[#1A2234] border border-white/5 rounded-[20px] p-5 flex justify-between items-center" onClick={() => setMobileMenuOpen(false)}>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-400">
                        <BookOpen size={16} />
                      </div>
                      <span className="text-white font-semibold text-sm">Learning</span>
                    </div>
                    <ChevronDown size={18} className="text-slate-500" />
                  </Link>

                  {/* Services */}
                  <Link href="#services" className="col-span-2 bg-[#1A2234] border border-white/5 rounded-[20px] p-5 flex justify-between items-center" onClick={() => setMobileMenuOpen(false)}>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-400">
                        <Layers size={16} />
                      </div>
                      <span className="text-white font-semibold text-sm">Services</span>
                    </div>
                    <ChevronDown size={18} className="text-slate-500" />
                  </Link>

                  {/* Turnkey Projects */}
                  <Link href="#turnkey" className="col-span-1 bg-[#1A2234] border border-white/5 rounded-[24px] p-5 flex flex-col gap-3" onClick={() => setMobileMenuOpen(false)}>
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400">
                      <Target size={20} />
                    </div>
                    <span className="text-white font-semibold text-sm">Turnkey Projects</span>
                  </Link>

                  {/* Workshop */}
                  <Link href="#workshop" className="col-span-1 bg-[#1A2234] border border-white/5 rounded-[24px] p-5 flex flex-col gap-3" onClick={() => setMobileMenuOpen(false)}>
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400">
                      <Calendar size={20} />
                    </div>
                    <span className="text-white font-semibold text-sm">Workshop</span>
                  </Link>

                  {/* Gallery */}
                  <Link href="#gallery" className="col-span-1 bg-[#1A2234] border border-white/5 rounded-[24px] p-5 flex flex-col gap-3" onClick={() => setMobileMenuOpen(false)}>
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400">
                      <ImageIcon size={20} />
                    </div>
                    <span className="text-white font-semibold text-sm">Gallery</span>
                  </Link>

                  {/* Live Weather */}
                  <Link href="#weather" className="col-span-1 bg-[#1A2234] border border-white/5 rounded-[24px] p-5 flex flex-col gap-3" onClick={() => setMobileMenuOpen(false)}>
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400">
                      <Cloud size={20} />
                    </div>
                    <span className="text-white font-semibold text-sm">Live Weather</span>
                  </Link>

                  {/* Blog */}
                  <Link href="#blog" className="col-span-1 bg-[#1A2234] border border-white/5 rounded-[24px] p-5 flex flex-col gap-3" onClick={() => setMobileMenuOpen(false)}>
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400">
                      <FileText size={20} />
                    </div>
                    <span className="text-white font-semibold text-sm">Blog</span>
                  </Link>

                  {/* FAQ */}
                  <Link href="#faq" className="col-span-1 bg-[#1A2234] border border-white/5 rounded-[24px] p-5 flex flex-col gap-3" onClick={() => setMobileMenuOpen(false)}>
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400">
                      <HelpCircle size={20} />
                    </div>
                    <span className="text-white font-semibold text-sm">FAQ</span>
                  </Link>

                  {/* Contact */}
                  <Link href="#contact" className="col-span-2 bg-[#1A2234] border border-white/5 rounded-[20px] p-5 flex justify-between items-center" onClick={() => setMobileMenuOpen(false)}>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-400">
                        <Mail size={16} />
                      </div>
                      <span className="text-white font-semibold text-sm">Contact</span>
                    </div>
                    <ChevronDown size={18} className="text-slate-500" />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
