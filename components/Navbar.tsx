"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { Home, Info, Award, Settings, MessageSquare, ChevronDown, Menu, X, Facebook, Instagram, Twitter, Youtube, Linkedin, Send, User, BookOpen, Layers, Briefcase, Calendar, Image as ImageIcon, Cloud, FileText, HelpCircle, PhoneCall, Zap } from "lucide-react";
import DynamicGreeting from "./DynamicGreeting";

const NAV_ITEMS = [
  { name: "Home", href: "/", icon: Home },
  {
    name: "About",
    href: "/about",
    icon: Info,
    subMenu: [
      { name: "Our Story", href: "/about" },
      { name: "Success Stories", href: "/success-stories" },
    ],
  },
  { name: "Training", href: "/training", icon: Award },
  { name: "Equipment", href: "/equipment", icon: Zap },
  {
    name: "Learning",
    href: "/learning",
    icon: BookOpen,
    subMenu: [
      { name: "Mushroom Types", href: "/mushroom-types" },
      { name: "Business Plan", href: "/business-plan" },
      { name: "ROI Calculator", href: "/roi-calculator" },
      { name: "Daily Prices", href: "/daily-prices" },
      { name: "Careers", href: "/careers" },
    ],
  },
  {
    name: "Services",
    href: "/services",
    icon: Layers,
    subMenu: [
      { name: "Spawn Supply", href: "/spawn-supply" },
      { name: "Compost Production", href: "/compost-production" },
      { name: "Consultancy", href: "/consultancy" },
      { name: "Marketing Support", href: "/marketing-support" },
      { name: "Cold Chain", href: "/cold-chain" },
      { name: "Government Subsidy", href: "/government-subsidy" },
      { name: "Franchise", href: "/franchise" },
    ],
  },
  { name: "Turnkey Projects", href: "/turnkey-projects", icon: Briefcase },
  { name: "Workshop", href: "/workshop", icon: Calendar },
  { name: "Gallery", href: "/gallery", icon: ImageIcon },
  { name: "Live Weather", href: "/live-weather", icon: Cloud },
  { name: "Blog", href: "/blog", icon: FileText },
  { name: "FAQ", href: "/faq", icon: HelpCircle },
  {
    name: "Contact",
    href: "/contact",
    icon: PhoneCall,
    subMenu: [
      { name: "Contact Us", href: "/contact-us" },
      { name: "On Site Visit", href: "/on-site-visit" },
      { name: "Call Now", href: "tel:+919203544140" },
    ],
  },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [expandedMobileMenu, setExpandedMobileMenu] = useState<string | null>(null);
  
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);

    const handleScrollSpy = () => {
      setActiveSection(null);
    };

    window.addEventListener("scroll", handleScrollSpy);
    handleScrollSpy();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleScrollSpy);
    };
  }, [pathname]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.classList.add("mobile-menu-open");
    } else {
      document.body.style.overflow = "unset";
      document.body.classList.remove("mobile-menu-open");
    }
    
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent('mobileMenuToggle', { detail: mobileMenuOpen }));
    }
    
    return () => {
      document.body.style.overflow = "unset";
      document.body.classList.remove("mobile-menu-open");
    };
  }, [mobileMenuOpen]);

  if (pathname === "/workshop") return null;

  return (
    <>
      <nav
        className={`fixed left-1/2 -translate-x-1/2 z-50 backdrop-blur-2xl bg-transparent border py-2.5 md:py-2 px-3 sm:px-5 md:px-6 lg:px-4 xl:px-5 transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.12)] border-white/20 dark:border-white/10 ${isScrolled ? "top-0 w-full max-w-full rounded-none border-t-0 border-l-0 border-r-0 shadow-[0_16px_40px_-10px_rgba(0,0,0,0.2)]" : "top-3 md:top-6 w-[calc(100%-16px)] sm:w-[calc(100%-32px)] md:w-[calc(100%-48px)] max-w-7xl rounded-[2rem]"}`}
      >
        <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
          <Link href="/" className="flex items-center gap-1.5 sm:gap-3 group shrink-0">
            <img
              src="https://res.cloudinary.com/dtpktdkqw/image/upload/v1782269097/IMG_1329_optimized_30_c6qtnw.png"
              alt="Organic Mushrooms Farm"
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-10 lg:h-10 xl:w-12 xl:h-12 shrink-0 object-contain group-hover:scale-110 transition-transform" 
              width="120" height="120" 
            />
            <div className="flex flex-col">
              <span className="text-[14px] xs:text-[16px] sm:text-sm md:text-xl lg:text-[12px] xl:text-[15px] 2xl:text-sm font-bold tracking-tight dark:text-white text-slate-900 leading-tight">
                Organic <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'var(--primary-gradient)' }}>Mushroom Farm</span>
              </span>
              <DynamicGreeting />
            </div>
          </Link>
          
          <div className="flex items-center gap-2 xl:gap-4 ml-auto">
            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-0.5 xl:gap-1.5 overflow-x-auto no-scrollbar">
            {NAV_ITEMS.map((item) => {
              const isHashLink = item.href.includes("#");
              const hash = isHashLink ? item.href.split("#")[1] : null;
              
              const isActive = isHashLink
                ? pathname === "/" && activeSection === hash
                : pathname === item.href && activeSection === null;

              const handleHashClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
                if (pathname === "/") {
                  e.preventDefault();
                  const element = document.getElementById(hash!);
                  if (element) {
                    const offset = 100;
                    const bodyRect = document.body.getBoundingClientRect().top;
                    const elementRect = element.getBoundingClientRect().top;
                    const offsetPosition = (elementRect - bodyRect) - offset;
                    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                    window.history.pushState(null, "", `/#${hash}`);
                  }
                }
              };

              if (isHashLink) {
                return (
                  <div key={item.name} className="relative">
                    <Link
                      href={item.href}
                      onClick={isHashLink ? handleHashClick : undefined}
                      className={`text-[9px] lg:text-[10px] xl:text-[12px] font-bold transition-all flex items-center gap-1 xl:gap-1.5 px-1.5 xl:px-2 py-1.5 rounded-lg leading-tight ${isActive ? "dark:text-white text-slate-900 dark:bg-white/5 bg-black/5" : "dark:text-slate-400 text-slate-600 hover:dark:text-white hover:text-slate-900"}`}
                    >
                      {item.name}
                    </Link>
                    {isActive && (
                      <motion.div layoutId="nav-active" className="absolute -bottom-1 left-2 right-2 xl:left-3 xl:right-3 h-0.5 rounded-full" style={{ background: 'var(--primary-gradient)' }} />
                    )}
                  </div>
                );
              }

              const hasSubMenu = item.subMenu && item.subMenu.length > 0;
              return (
                <div key={item.name} className="relative group">
                  <Link
                    href={item.href}
                    className={`text-[9px] lg:text-[10px] xl:text-[12px] font-bold transition-all flex items-center gap-1 xl:gap-1.5 px-1.5 xl:px-2 py-1.5 rounded-lg leading-tight ${isActive ? "dark:text-white text-slate-900 dark:bg-white/5 bg-black/5" : "dark:text-slate-400 text-slate-600 hover:dark:text-white hover:text-slate-900"}`}
                  >
                    {item.name}
                    {hasSubMenu && <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />}
                  </Link>
                  {hasSubMenu && (
                    <div className="absolute top-full left-0 pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all z-[100]">
                      <div className="backdrop-blur-md bg-transparent p-2 min-w-[200px] rounded-xl border dark:border-white/10 border-black/10 shadow-[0_10px_40px_-10px_rgba(124,58,237,0.15)]">
                        {item.subMenu!.map((sub: any) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            className="block px-4 py-2.5 text-[12px] font-bold dark:text-slate-400 text-slate-600 hover:text-slate-900 dark:hover:text-white hover:dark:bg-white/10 hover:bg-black/10 rounded-lg transition-all"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                  {isActive && (
                    <motion.div layoutId="nav-active" className="absolute -bottom-1 left-3 right-3 h-0.5 rounded-full" style={{ background: 'var(--primary-gradient)' }} />
                  )}
                </div>
              );
            })}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden dark:text-white text-slate-900 p-2 focus:outline-none"
            aria-label="Open Menu"
          >
            <Menu size={24} />
          </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-[9998] lg:hidden flex flex-col justify-end">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />
            
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-full max-h-[85vh] bg-transparent backdrop-blur-md rounded-t-3xl overflow-hidden shadow-[0_-10px_40px_rgba(0,0,0,0.2)] border-t border-white/20 dark:border-white/10 flex flex-col"
            >
              <div className="flex items-center gap-2 p-3 border-b border-white/20 dark:border-white/10 shrink-0 bg-transparent">
                <div className="shrink-0">
                  <img src="https://res.cloudinary.com/dtpktdkqw/image/upload/v1782269097/IMG_1329_optimized_30_c6qtnw.png" alt="Logo" className="w-8 h-8 object-contain" />
                </div>
                <div className="flex-1 overflow-hidden relative h-8 bg-black/20 dark:bg-white/10 rounded-full border border-white/10 flex items-center shadow-inner">
                  <div className="animate-marquee whitespace-nowrap inline-block text-[10px] font-bold text-slate-800 dark:text-slate-200">
                    <span className="mx-4">NEW BATCH OPENS SOON 🍄</span> • 
                    <span className="mx-4">TURNKEY SETUP CONSULTATION 📞</span> • 
                    <span className="mx-4">INDIA 24.4°C 🌡️</span>
                  </div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="shrink-0 p-1.5 bg-black/10 dark:bg-white/10 backdrop-blur-md rounded-full text-slate-800 dark:text-slate-200 hover:bg-black/20 dark:hover:bg-white/20 transition-colors border border-white/10"
                >
                  <X size={18} />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
                <div className="grid grid-cols-2 gap-2">
                  {NAV_ITEMS.map((item, i) => {
                    const isHashLink = item.href.includes("#");
                    const hash = isHashLink ? item.href.split("#")[1] : null;
                    const isActive = isHashLink ? pathname === "/" && activeSection === hash : pathname === item.href && activeSection === null;
                    const hasSubMenu = item.subMenu && item.subMenu.length > 0;
                    const isExpanded = expandedMobileMenu === item.name;
                    
                    const baseCardClass = `relative w-full overflow-hidden rounded-2xl border transition-colors duration-150 ${isActive ? "border-emerald-500/50 bg-emerald-500/10 dark:bg-emerald-500/20" : "border-slate-200/20 dark:border-white/10 bg-transparent backdrop-blur-md"}`;
                    
                    return (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.02, duration: 0.15, ease: "easeOut" }}
                        className={hasSubMenu ? "col-span-2 sm:col-span-1" : "col-span-1"}
                      >
                        {hasSubMenu ? (
                          <div className={baseCardClass}>
                            <button
                              onClick={() => setExpandedMobileMenu((prev) => prev === item.name ? null : item.name)}
                              className="w-full flex items-center justify-between p-2"
                            >
                              <div className="flex items-center gap-2">
                                <div className={`w-5 h-5 rounded-full flex items-center justify-center ${isActive ? "bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400" : "bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-slate-300"}`}>
                                  {item.icon && <item.icon size={10} />}
                                </div>
                                <span className={`text-[10px] font-bold ${isActive ? "text-emerald-600 dark:text-emerald-400" : "text-slate-800 dark:text-slate-200"}`}>
                                  {item.name}
                                </span>
                              </div>
                              <ChevronDown size={12} className={`transition-transform duration-200 ${isExpanded ? "rotate-180" : ""} ${isActive ? "text-emerald-600 dark:text-emerald-400" : "text-slate-400"}`} />
                            </button>
                            
                            <AnimatePresence>
                              {isExpanded && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.15 }}
                                  className="overflow-hidden bg-transparent"
                                >
                                  <div className="px-3 py-1 flex flex-col gap-0.5 border-t border-slate-100 dark:border-slate-700">
                                    {item.subMenu!.map((sub: any) => (
                                      <Link
                                        key={sub.name}
                                        href={sub.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="block py-1.5 text-[10px] font-semibold text-slate-600 dark:text-slate-400 pl-6 relative"
                                      >
                                        <div className="absolute left-2.5 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600" />
                                        {sub.name}
                                      </Link>
                                    ))}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ) : (
                          <Link
                            href={item.href}
                            onClick={(e) => {
                              if (isHashLink && pathname === "/") {
                                e.preventDefault();
                                setMobileMenuOpen(false);
                                const element = document.getElementById(hash!);
                                if (element) {
                                  const offset = 80;
                                  const bodyRect = document.body.getBoundingClientRect().top;
                                  const elementRect = element.getBoundingClientRect().top;
                                  const offsetPosition = (elementRect - bodyRect) - offset;
                                  window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                                  window.history.pushState(null, "", `/#${hash}`);
                                }
                              } else {
                                setMobileMenuOpen(false);
                              }
                            }}
                            className={`${baseCardClass} flex flex-col items-start justify-center p-2 min-h-[50px]`}
                          >
                            <div className={`w-5 h-5 rounded-full flex items-center justify-center mb-1 ${isActive ? "bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400" : "bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-slate-300"}`}>
                              {item.icon && <item.icon size={10} />}
                            </div>
                            <span className={`text-[10px] font-bold ${isActive ? "text-emerald-600 dark:text-emerald-400" : "text-slate-800 dark:text-slate-200"}`}>
                              {item.name}
                            </span>
                          </Link>
                        )}
                      </motion.div>
                    );
                  })}
                </div>

                {/* Mobile Social Links */}
                <div className="mt-6 mb-2 flex flex-wrap justify-center gap-3 border-t border-slate-200 dark:border-slate-800 pt-6">
                  {[
                    { label: "Facebook", href: "https://www.facebook.com/organic.mushroom.farm0", icon: Facebook },
                    { label: "Instagram", href: "https://www.instagram.com/organic_mushroom_farm_jabalpur", icon: Instagram },
                    { label: "Twitter", href: "https://x.com/mushroomfarmjbp", icon: Twitter },
                    { label: "YouTube", href: "https://www.youtube.com/@organicmushroomfarm", icon: Youtube },
                    { label: "LinkedIn", href: "https://www.linkedin.com/in/organic-mushroom-farm-29b970282?utm_source=share_via&utm_content=profile&utm_medium=member_android", icon: Linkedin },
                    { label: "Telegram", href: "https://t.me/organicmushroomfarm", icon: Send },
                    { label: "Profile", href: "/profile", icon: User }
                  ].map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full border border-slate-300 dark:border-slate-700 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:bg-emerald-500 hover:text-white hover:border-emerald-500 transition-all active:scale-95"
                      aria-label={social.label}
                    >
                      <social.icon size={18} strokeWidth={2} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
