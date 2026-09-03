"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  ShieldCheck, 
  MapPin, 
  Youtube, 
  Facebook, 
  Instagram, 
  Twitter, 
  Linkedin,
  Map,
  CheckCircle2
} from "lucide-react";

const PinterestIcon = ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 2C6.5 2 2 6.5 2 12c0 4.3 2.7 8 6.5 9.5-.1-1.3-.1-3.3.1-4.7l1.7-7.2s-.4-1-.4-2.4c0-2.3 1.3-4 3-4 1.4 0 2.1 1.1 2.1 2.4 0 1.4-.9 3.6-1.4 5.6-.4 1.7.8 3.1 2.4 3.1 2.9 0 5-3.5 5-7.9 0-3.5-2.4-6-6.4-6-4.5 0-7.3 3.3-7.3 7 0 1.3.4 2.3 1 3 .1.1.1.3 0 .5l-.3 1.3c-.1.2-.2.3-.5.1-1.4-.7-2-2.3-2-3.8 0-3.3 2.6-7.4 8.4-7.4 4.7 0 7.9 3.4 7.9 7.4 0 4.9-2.8 8.6-6.9 8.6-1.3 0-2.6-.7-3-1.6l-.8 3.3c-.3 1.1-.9 2.2-1.4 3C10.5 21.9 11.2 22 12 22c5.5 0 10-4.5 10-10S17.5 2 12 2z"/>
  </svg>
);

const TelegramIcon = ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M21.198 2.433a2.242 2.242 0 0 0-1.022.215l-17 7.5a2.25 2.25 0 0 0-.126 4.095l4.762 1.49 11.082-9.66-8.995 10.155v4.542c0 .88.583 1.135 1.053 1.25.467.114 1.178-.052 1.545-.417l3.29-3.213 5.424 4.004a2.25 2.25 0 0 0 3.524-1.282l3.414-16.5a2.25 2.25 0 0 0-2.951-2.18z" />
  </svg>
);

const QuoraIcon = ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM14.9 14.2c.4 1 1.7 3.3 3.1 3.3M9.7 13.9C8 12.8 7 11 7 9.1c0-3.3 2.2-5.1 5-5.1s5 1.8 5 5.1c0 2-1 3.9-2.8 5l-4.5 3.1" />
  </svg>
);

const Footer = () => {
  const pathname = usePathname();

  // Hide footer on specific pages if needed
  if (pathname === "/workshop") return null;

  return (
    <footer className="pt-20 pb-24 md:pb-12 bg-black/50 border-t dark:border-white/5 border-black/5">
      <div className="max-w-7xl mx-auto px-6">
        {/* Global E-E-A-T Profile for SEO Signals */}
        <div className="mb-6 p-3 rounded-2xl dark:bg-white/5 bg-black/5 border dark:border-white/10 border-black/10">
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
            <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary-start/20 flex items-center justify-center text-primary-start">
              <ShieldCheck size={32} />
            </div>
            <div>
              <h3 className="text-xl font-bold dark:text-white text-slate-900 mb-2">
                Certified E-E-A-T Excellence
              </h3>
              <p className="text-sm dark:text-slate-400 text-slate-600 mb-4 max-w-2xl leading-relaxed">
                We are a globally recognized commercial mushroom research and training center. Featured across leading agricultural media and trusted by thousands of successful farm entrepreneurs worldwide.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Experience (10+ Yrs)", "Expertise (Agronomy)", "Authoritativeness", "Trustworthiness"].map((trust) => (
                  <span key={trust} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg dark:bg-white/10 bg-black/10 text-[10px] font-bold uppercase tracking-widest dark:text-slate-300 text-slate-700">
                    <CheckCircle2 size={12} className="text-primary-start" />
                    {trust}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:gap-12 pb-12">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold dark:text-white text-slate-900 tracking-tight mb-4">
              Organic Mushrooms Farm
            </h3>
            <p className="dark:text-slate-400 text-slate-600 text-sm mb-6 leading-relaxed max-w-sm">
              Empowering global agribusiness through scientific commercial mushroom cultivation, robust training, and turnkey infrastructure solutions.
            </p>
            <div className="flex flex-col gap-3">
              {[
                { icon: Map, text: "Jabalpur, Madhya Pradesh, India" },
                { icon: CheckCircle2, text: "ISO 9001:2015 Certified" }
              ].map((item, i) => (
                <span key={i} className="flex items-center gap-3 text-sm dark:text-slate-300 text-slate-700">
                  <div className="w-8 h-8 rounded-full dark:bg-white/5 bg-black/5 flex items-center justify-center border dark:border-white/5 border-black/5">
                    <item.icon size={14} className="text-primary-start" />
                  </div>
                  {item.text}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 mt-8">
              <a href="https://www.youtube.com/@organicmushroomfarm" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 dark:bg-white/5 bg-black/5 hover:bg-red-500/10 border dark:border-white/5 border-black/5 hover:border-red-500/30 rounded-lg text-sm dark:text-slate-300 text-slate-700 hover:text-slate-900 dark:hover:text-white transition-all group">
                <Youtube size={16} className="text-red-500 group-hover:scale-110 transition-transform" />
                <span className="font-medium">YouTube</span>
              </a>
              <a href="https://maps.app.goo.gl/z7oQHSoLbCL9H4ov8?g_st=ic" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 dark:bg-white/5 bg-black/5 hover:bg-blue-500/10 border dark:border-white/5 border-black/5 hover:border-blue-500/30 rounded-lg text-sm dark:text-slate-300 text-slate-700 hover:text-slate-900 dark:hover:text-white transition-all group">
                <MapPin size={16} className="text-blue-500 group-hover:scale-110 transition-transform" />
                <span className="font-medium">Google Profile</span>
              </a>
            </div>
          </div>
          
          <div className="md:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-6">
            <div>
              <h4 className="dark:text-white text-slate-900 font-bold mb-4 uppercase tracking-widest text-[9px] border-l-2 border-primary-start pl-2">
                Explore
              </h4>
              <ul className="space-y-3">
                {[
                  { name: "About Us", href: "/about" },
                  { name: "Services", href: "/services" },
                  { name: "Training", href: "/training" },
                  { name: "Franchise", href: "/mushroom-franchise" },
                  { name: "Mushroom Types", href: "/mushroom-types" },
                  { name: "Careers", href: "/careers" },
                  { name: "Mushroom Prices", href: "/mushroom-price-today" },
                  { name: "Mushroom Farming USA Guide", href: "/mushroom-farming-usa-guide" },
                ].map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors text-xs md:text-sm font-medium">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="dark:text-white text-slate-900 font-bold mb-4 uppercase tracking-widest text-[9px] border-l-2 border-primary-start pl-2">
                Resources
              </h4>
              <ul className="space-y-3">
                {[
                  { name: "Gallery", href: "/gallery" },
                  { name: "Business Plan", href: "/business-plan" },
                  { name: "Government Subsidy", href: "/subsidy" },
                  { name: "Spawn Supply", href: "/spawn-seed" },
                  { name: "Live Weather", href: "/mushroom-farm-climate-tracker" },
                  { name: "Blog", href: "/blog" },
                  { name: "FAQ", href: "/faq" },
                  { name: "Cities Pages", href: "/states" },
                  { name: "USA Training", href: "/usatraining" },
                ].map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors text-xs md:text-sm font-medium">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="dark:text-white text-slate-900 font-bold mb-4 uppercase tracking-widest text-[9px] border-l-2 border-primary-start pl-2">
                Support & Legal
              </h4>
              <ul className="space-y-3">
                {[
                  { name: "Contact", href: "/contact" },
                  { name: "Customer Support", href: "/support" },
                  { name: "Terms of Service", href: "/terms" },
                  { name: "Privacy Policy", href: "/privacy" },
                  { name: "Disclaimer Policy", href: "/disclaimer" },
                  { name: "Refund Policy", href: "/refund-policy" },
                  { name: "Shipping Policy", href: "/shipping-policy" },
                ].map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors text-xs md:text-sm font-medium">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between border-t dark:border-white/5 border-black/5 pt-10 text-[10px] font-bold uppercase tracking-widest text-slate-600">
          <div className="mb-6 md:mb-0">
            © 2026 Organic Mushrooms Farm. All Rights Reserved.
          </div>
          <div className="flex gap-4 flex-wrap justify-center items-center">
            {[
              { label: "Facebook", href: "https://www.facebook.com/organic.mushroom.farm0", icon: Facebook },
              { label: "Instagram", href: "https://www.instagram.com/organic_mushroom_farm_jabalpur", icon: Instagram },
              { label: "Twitter", href: "https://x.com/mushroomfarmjbp", icon: Twitter },
              { label: "YouTube", href: "https://www.youtube.com/@organicmushroomfarm", icon: Youtube },
              { label: "LinkedIn", href: "https://www.linkedin.com/in/organic-mushroom-farm-29b970282", icon: Linkedin },
              { label: "Pinterest", href: "https://www.pinterest.com/organicmushroomfarm", icon: PinterestIcon },
              { label: "Telegram", href: "https://t.me/organicmushroomfarms", icon: TelegramIcon },
              { label: "Quora", href: "https://www.quora.com/profile/Organic-Mushroom-Farm-1", icon: QuoraIcon }
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-slate-300 dark:border-slate-600 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:bg-emerald-500 hover:text-white hover:border-emerald-500 dark:hover:bg-slate-700 transition-all hover:scale-110"
                aria-label={social.label}
              >
                <social.icon size={18} strokeWidth={2} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
