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
  Send
} from "lucide-react";
import Image from "next/image";

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
    <footer className="pt-20 pb-24 md:pb-12 bg-transparent dark:bg-transparent backdrop-blur-[2px] border-t dark:border-white/5 border-black/5 relative overflow-hidden">
      {/* 3D animated ambient background blobs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500/10 blur-[150px] rounded-full pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-green-500/10 blur-[150px] rounded-full pointer-events-none animate-pulse" style={{ animationDelay: "1s" }}></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 lg:gap-16 pb-16 border-b dark:border-white/5 border-black/5">
          
          {/* Col 1: Brand & Details */}
          <div className="md:col-span-5 lg:col-span-4">
            <div className="flex items-center gap-2 mb-5">
              <img
                src="https://res.cloudinary.com/dtpktdkqw/image/upload/v1782269097/IMG_1329_optimized_30_c6qtnw.png"
                alt="Organic Mushrooms Farm"
                className="w-8 h-8 sm:w-10 sm:h-10 shrink-0 object-contain"
                width="40"
                height="40"
              />
              <div className="text-xl md:text-2xl font-bold tracking-tight leading-none">
                <span className="dark:text-white text-slate-900">Organic </span>
                <span className="bg-clip-text text-transparent bg-[var(--primary-gradient)]">Mushroom Farm</span>
              </div>
            </div>
            
            <p className="dark:text-slate-400 text-slate-600 text-[11px] md:text-xs mb-6 leading-relaxed pr-4">
              Empowering high-yield organic button & oyster mushroom cultivation across India and the globe through standardized SOPs, expert commercial training, and industrial-grade turnkey projects.
            </p>
            
            {/* Cities Line */}
            <div className="text-[8px] font-bold dark:text-slate-500 text-slate-400 tracking-[0.2em] leading-loose uppercase mb-6 flex flex-wrap gap-2">
              JABALPUR <span className="text-purple-500">•</span> SAGAR <span className="text-purple-500">•</span> DAMOH <span className="text-purple-500">•</span> INDORE <span className="text-purple-500">•</span> MUMBAI <span className="text-purple-500">•</span> DELHI <span className="text-purple-500">•</span> GLOBAL
            </div>

            {/* Platform Buttons */}
            <div className="flex flex-wrap gap-2">
              <a href="https://www.youtube.com/@organicmushroomfarm" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-3 py-2 bg-white/20 dark:bg-black/20 backdrop-blur-md border border-black/5 dark:border-white/10 hover:border-red-500/50 hover:bg-red-500/10 rounded-lg text-xs dark:text-slate-300 text-slate-700 hover:text-slate-900 dark:hover:text-white transition-all group shadow-sm">
                <Youtube size={14} className="text-red-500 group-hover:scale-110 transition-transform" />
                <span className="font-medium">YouTube</span>
              </a>
              <a href="https://maps.app.goo.gl/z7oQHSoLbCL9H4ov8?g_st=ic" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-3 py-2 bg-white/20 dark:bg-black/20 backdrop-blur-md border border-black/5 dark:border-white/10 hover:border-blue-500/50 hover:bg-blue-500/10 rounded-lg text-xs dark:text-slate-300 text-slate-700 hover:text-slate-900 dark:hover:text-white transition-all group shadow-sm">
                <MapPin size={14} className="text-blue-500 group-hover:scale-110 transition-transform" />
                <span className="font-medium">Google Profile</span>
              </a>
              <a href="https://www.pinterest.com/organicmushroomfarm" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-3 py-2 bg-white/20 dark:bg-black/20 backdrop-blur-md border border-black/5 dark:border-white/10 hover:border-pink-500/50 hover:bg-pink-500/10 rounded-lg text-xs dark:text-slate-300 text-slate-700 hover:text-slate-900 dark:hover:text-white transition-all group shadow-sm">
                <PinterestIcon size={14} className="text-pink-500 group-hover:scale-110 transition-transform" />
                <span className="font-medium">Pinterest</span>
              </a>
            </div>
          </div>
          
          {/* Cols 2-4: Links */}
          <div className="md:col-span-7 lg:col-span-8 grid grid-cols-3 gap-3 md:gap-8">
            
            {/* Explore */}
            <div>
              <h4 className="dark:text-white text-slate-900 font-bold mb-4 md:mb-6 uppercase tracking-wider text-[9px] md:text-[11px] border-l-2 border-purple-600 pl-2">
                Explore
              </h4>
              <ul className="space-y-4 md:space-y-3">
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
                    <Link href={item.href} className="dark:text-slate-400 text-slate-600 hover:text-purple-600 dark:hover:text-purple-400 transition-colors text-[10px] sm:text-[11px] md:text-xs font-medium block">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Resources */}
            <div>
              <h4 className="dark:text-white text-slate-900 font-bold mb-4 md:mb-6 uppercase tracking-wider text-[9px] md:text-[11px] border-l-2 border-purple-600 pl-2">
                Resources
              </h4>
              <ul className="space-y-4 md:space-y-3">
                {[
                  { name: "Gallery", href: "/gallery" },
                  { name: "Business Plan", href: "/business-plan" },
                  { name: "Government Subsidy", href: "/subsidy" },
                  { name: "Spawn Supply", href: "/spawn-seed" },
                  { name: "Live Weather", href: "/mushroom-farm-climate-tracker" },
                  { name: "Blog", href: "/blog" },
                  { name: "FAQ", href: "/faq" },
                  { name: "Cities Pages", href: "/states" },
                  { name: "Contact Us", href: "/contact" },
                  { name: "USA Training", href: "/usatraining" },
                ].map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="dark:text-slate-400 text-slate-600 hover:text-purple-600 dark:hover:text-purple-400 transition-colors text-[10px] sm:text-[11px] md:text-xs font-medium block">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Support & Legal */}
            <div>
              <h4 className="dark:text-white text-slate-900 font-bold mb-4 md:mb-6 uppercase tracking-wider text-[9px] md:text-[11px] border-l-2 border-purple-600 pl-2">
                Support & Legal
              </h4>
              <ul className="space-y-4 md:space-y-3">
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
                    <Link href={item.href} className="dark:text-slate-400 text-slate-600 hover:text-purple-600 dark:hover:text-purple-400 transition-colors text-[10px] sm:text-[11px] md:text-xs font-medium block">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
        
        {/* Copyright and Socials */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between pt-6 text-[8px] md:text-[9px] font-bold uppercase tracking-[0.15em] dark:text-slate-500 text-slate-400 gap-4">
          <div className="text-center md:text-left">
            © 2026 ORGANIC MUSHROOMS FARM. ALL RIGHTS RESERVED.
          </div>
          <div className="flex gap-2 flex-wrap justify-center items-center">
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
                className="w-8 h-8 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center dark:text-slate-400 text-slate-500 hover:bg-emerald-500 hover:border-emerald-500 hover:text-white transition-all hover:scale-110 shadow-sm"
                aria-label={social.label}
              >
                <social.icon size={14} strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
