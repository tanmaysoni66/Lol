"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import {
  Box,
  Home,
  Info,
  Award,
  ChevronDown,
  Menu,
  X,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Linkedin,
  Send,
  User,
  BookOpen,
  Layers,
  Briefcase,
  Calendar,
  Image as ImageIcon,
  Cloud,
  FileText,
  HelpCircle,
  PhoneCall,
  Zap,
} from "lucide-react";
import NavbarTopTicker from "./NavbarTopTicker";

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
  { name: "3D Farm", href: "/3d-mushroom-farm", icon: Box },
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
  const [expandedMobileMenu, setExpandedMobileMenu] = useState<string | null>(null);

  const pathname = usePathname();

  // Optimized passive scroll listener to avoid layout thrashing
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Manage body scroll locking when mobile menu opens
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.classList.add("mobile-menu-open");
    } else {
      document.body.style.overflow = "unset";
      document.body.classList.remove("mobile-menu-open");
    }

    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("mobileMenuToggle", { detail: mobileMenuOpen })
      );
    }

    return () => {
      document.body.style.overflow = "unset";
      document.body.classList.remove("mobile-menu-open");
    };
  }, [mobileMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  if (pathname === "/workshop") return null;

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center pointer-events-none transition-all duration-200">
        {/* Floating Main Navigation Bar */}
        <nav
          className={`pointer-events-auto transition-all duration-200 border ${
            isScrolled
              ? "w-full max-w-full rounded-none border-t-0 border-l-0 border-r-0 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-slate-200/90 dark:border-white/10 shadow-md py-1.5 px-3 sm:px-6"
              : "mt-2 w-[calc(100%-16px)] sm:w-[calc(100%-24px)] md:w-[calc(100%-32px)] max-w-7xl rounded-2xl md:rounded-3xl bg-white/90 dark:bg-slate-950/85 backdrop-blur-md border-slate-200/80 dark:border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.06)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.35)] py-2 px-3 sm:px-5"
          }`}
        >
          <div className="flex items-center justify-between w-full max-w-7xl mx-auto gap-2">
            {/* Stable Branding & Logo (No layout shift next to logo) */}
            <Link
              href="/"
              className="flex items-center gap-2 sm:gap-2.5 group shrink-0"
              aria-label="Organic Mushroom Farm Home"
            >
              <img
                src="https://res.cloudinary.com/dtpktdkqw/image/upload/v1782269097/IMG_1329_optimized_30_c6qtnw.png"
                alt="Organic Mushrooms Farm"
                className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 shrink-0 object-contain group-hover:scale-105 transition-transform"
                width="40"
                height="40"
              />
              <div className="flex flex-col">
                <span className="text-[13px] xs:text-[15px] sm:text-base md:text-lg lg:text-[12px] xl:text-[14px] font-black tracking-tight text-slate-900 dark:text-white leading-tight">
                  Organic{" "}
                  <span className="text-emerald-600 dark:text-emerald-400">
                    Mushroom Farm
                  </span>
                </span>
                <span className="text-[9px] sm:text-[10px] text-slate-500 dark:text-slate-400 font-semibold tracking-normal hidden xs:inline-block leading-none mt-0.5">
                  Commercial &amp; Hi-Tech Cultivation
                </span>
              </div>
            </Link>

            {/* Desktop / Large Screen Live Weather & Batch Ticker inside Navbar */}
            <div className="hidden lg:flex items-center mx-2 shrink-0">
              <NavbarTopTicker />
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-0.5 xl:gap-1 ml-auto">
              {NAV_ITEMS.map((item) => {
                const isActive = pathname === item.href;
                const hasSubMenu = item.subMenu && item.subMenu.length > 0;

                return (
                  <div key={item.name} className="relative group">
                    <Link
                      href={item.href}
                      className={`text-[10px] xl:text-[12px] font-bold transition-all flex items-center gap-1 px-2 py-1.5 rounded-lg leading-tight ${
                        isActive
                          ? "text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10"
                          : "text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-white hover:bg-slate-100/80 dark:hover:bg-white/5"
                      }`}
                    >
                      <span>{item.name}</span>
                      {hasSubMenu && (
                        <ChevronDown
                          size={12}
                          className="group-hover:rotate-180 transition-transform text-slate-400"
                        />
                      )}
                    </Link>

                    {/* Desktop Submenu Dropdown */}
                    {hasSubMenu && (
                      <div className="absolute top-full left-0 pt-2 opacity-0 translate-y-1.5 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all z-[100]">
                        <div className="bg-white dark:bg-slate-900 p-2 min-w-[210px] rounded-xl border border-slate-200 dark:border-slate-800 shadow-xl dark:shadow-2xl">
                          {item.subMenu!.map((sub) => (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              className="block px-3 py-2 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50/70 dark:hover:bg-slate-800/80 rounded-lg transition-all"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex items-center gap-2 lg:hidden ml-auto">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 rounded-xl text-slate-800 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors focus:outline-none"
                aria-label="Open Mobile Menu"
              >
                <Menu size={22} />
              </button>
            </div>
          </div>

          {/* Mobile Live Weather & Batch Ticker (Inside Navbar, Lag-Free) */}
          <div className="lg:hidden w-full mt-1 pt-1 border-t border-slate-200/60 dark:border-white/10 overflow-hidden">
            <NavbarTopTicker />
          </div>
        </nav>
      </header>

      {/* Lag-Free Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-[9998] lg:hidden flex flex-col justify-end">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="absolute inset-0 bg-black/60"
              onClick={closeMobileMenu}
            />

            {/* Bottom Sheet with instant hardware acceleration & no multi-card blur */}
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="relative w-full max-h-[85vh] bg-white dark:bg-slate-950 text-slate-900 dark:text-white rounded-t-3xl overflow-hidden shadow-2xl border-t border-slate-200 dark:border-slate-800 flex flex-col will-change-transform"
            >
              {/* Top Header of Mobile Menu */}
              <div className="flex items-center justify-between p-3.5 border-b border-slate-200 dark:border-slate-800 shrink-0 bg-slate-50 dark:bg-slate-900/50">
                <div className="flex items-center gap-2">
                  <img
                    src="https://res.cloudinary.com/dtpktdkqw/image/upload/v1782269097/IMG_1329_optimized_30_c6qtnw.png"
                    alt="Logo"
                    className="w-7 h-7 object-contain"
                  />
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-slate-900 dark:text-white leading-tight">
                      Organic Mushroom Farm
                    </span>
                    <span className="text-[9px] text-emerald-600 dark:text-emerald-400 font-semibold">
                      New Batch: In 2 Days 🍄
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={closeMobileMenu}
                  className="p-1.5 rounded-full bg-slate-200/80 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
                  aria-label="Close Menu"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Scrollable Items without GPU-thrashing blurs */}
              <div className="flex-1 overflow-y-auto p-3.5 space-y-2">
                <div className="grid grid-cols-2 gap-2">
                  {NAV_ITEMS.map((item) => {
                    const isActive = pathname === item.href;
                    const hasSubMenu = item.subMenu && item.subMenu.length > 0;
                    const isExpanded = expandedMobileMenu === item.name;

                    if (hasSubMenu) {
                      return (
                        <div
                          key={item.name}
                          className="col-span-2 rounded-xl bg-slate-100/90 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 overflow-hidden"
                        >
                          <button
                            type="button"
                            onClick={() =>
                              setExpandedMobileMenu((prev) =>
                                prev === item.name ? null : item.name
                              )
                            }
                            className="w-full flex items-center justify-between p-2.5 text-left"
                          >
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                                <item.icon size={13} />
                              </div>
                              <span className="text-xs font-bold text-slate-900 dark:text-slate-100">
                                {item.name}
                              </span>
                            </div>
                            <ChevronDown
                              size={14}
                              className={`transition-transform duration-150 text-slate-400 ${
                                isExpanded ? "rotate-180" : ""
                              }`}
                            />
                          </button>

                          {isExpanded && (
                            <div className="px-3 pb-2 pt-1 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-1 bg-white/60 dark:bg-slate-950/40">
                              {item.subMenu!.map((sub) => (
                                <Link
                                  key={sub.name}
                                  href={sub.href}
                                  onClick={closeMobileMenu}
                                  className="py-1.5 pl-6 text-[11px] font-semibold text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-300 flex items-center gap-1.5"
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                                  <span>{sub.name}</span>
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    }

                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={closeMobileMenu}
                        className={`flex items-center gap-2 p-2.5 rounded-xl border transition-colors ${
                          isActive
                            ? "bg-emerald-50 dark:bg-emerald-500/20 border-emerald-500/50 text-emerald-700 dark:text-emerald-300 font-bold"
                            : "bg-slate-100/90 dark:bg-slate-900/80 border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:bg-emerald-50/50 dark:hover:bg-slate-800 font-semibold"
                        }`}
                      >
                        <div
                          className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 ${
                            isActive
                              ? "bg-emerald-600 text-white"
                              : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                          }`}
                        >
                          <item.icon size={13} />
                        </div>
                        <span className="text-xs truncate">{item.name}</span>
                      </Link>
                    );
                  })}
                </div>

                {/* Social & Contact Bar in Mobile Menu */}
                <div className="pt-4 mt-2 border-t border-slate-200 dark:border-slate-800 flex flex-wrap justify-center gap-2.5 pb-2">
                  {[
                    {
                      label: "Facebook",
                      href: "https://www.facebook.com/organic.mushroom.farm0",
                      icon: Facebook,
                    },
                    {
                      label: "Instagram",
                      href: "https://www.instagram.com/organic_mushroom_farm_jabalpur",
                      icon: Instagram,
                    },
                    {
                      label: "Twitter",
                      href: "https://x.com/mushroomfarmjbp",
                      icon: Twitter,
                    },
                    {
                      label: "YouTube",
                      href: "https://www.youtube.com/@organicmushroomfarm",
                      icon: Youtube,
                    },
                    {
                      label: "LinkedIn",
                      href: "https://www.linkedin.com/in/organic-mushroom-farm-29b970282",
                      icon: Linkedin,
                    },
                    {
                      label: "Telegram",
                      href: "https://t.me/organicmushroomfarm",
                      icon: Send,
                    },
                    { label: "Profile", href: "/profile", icon: User },
                  ].map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full border border-slate-300 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-emerald-500 hover:text-white hover:border-emerald-500 transition-all active:scale-95"
                      aria-label={social.label}
                    >
                      <social.icon size={14} />
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
export default Navbar;
