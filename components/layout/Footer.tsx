"use client";

import Link from 'next/link';
import { Leaf, Mail, MapPin, Phone, Facebook, Instagram, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#0B0F19] pt-16 pb-32 text-slate-300 relative overflow-hidden border-t border-white/5">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-emerald-500/20 border border-emerald-500/30 p-2 rounded-xl text-emerald-400">
                <Leaf size={24} />
              </div>
              <span className="font-poppins font-bold text-xl text-white tracking-tight">Organic Mushrooms</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mt-4">
              Premium organic mushroom spawn, commercial farming training, and turnkey setup solutions across India, USA, and Australia.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-emerald-500 hover:border-emerald-500 hover:text-white transition-colors"><Facebook size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-emerald-500 hover:border-emerald-500 hover:text-white transition-colors"><Instagram size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-emerald-500 hover:border-emerald-500 hover:text-white transition-colors"><Youtube size={18} /></a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-white font-poppins font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="hover:text-emerald-400 transition-colors">Home</Link></li>
              <li><Link href="#about" className="hover:text-emerald-400 transition-colors">About Us</Link></li>
              <li><Link href="#training" className="hover:text-emerald-400 transition-colors">Training Programs</Link></li>
              <li><Link href="#spawn" className="hover:text-emerald-400 transition-colors">Buy Spawn</Link></li>
              <li><Link href="#faq" className="hover:text-emerald-400 transition-colors">FAQ</Link></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-white font-poppins font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li><Link href="#setup" className="hover:text-emerald-400 transition-colors">Turnkey Farm Setup</Link></li>
              <li><Link href="#consulting" className="hover:text-emerald-400 transition-colors">Consulting & Support</Link></li>
              <li><Link href="#infrastructure" className="hover:text-emerald-400 transition-colors">Commercial Infrastructure</Link></li>
              <li><Link href="#compost" className="hover:text-emerald-400 transition-colors">Compost Units</Link></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-white font-poppins font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-emerald-500 shrink-0 mt-0.5" />
                <span className="text-sm">Jabalpur, Madhya Pradesh, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-emerald-500 shrink-0" />
                <a href="tel:+919203544140" className="text-sm hover:text-white transition-colors">+91 9203544140</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-emerald-500 shrink-0" />
                <a href="mailto:support@mushroomtraining.online" className="text-sm hover:text-white transition-colors">support@mushroomtraining.online</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Organic Mushrooms Farm. All rights reserved.
          </p>
          <p className="text-sm text-slate-500">
            Founder: Tanish Soni
          </p>
        </div>
      </div>
    </footer>
  );
}
