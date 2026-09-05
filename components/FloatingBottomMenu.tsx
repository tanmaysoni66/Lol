"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { 
  Home, 
  Calendar, 
  Sprout, 
  BookOpen, 
  Wrench, 
  Layers, 
  ShoppingCart, 
  Phone 
} from "lucide-react";

const MENU_ITEMS = [
  { name: "Home", href: "/", icon: Home, isExternal: false },
  { name: "Book Consultant", href: "/consultation", icon: Calendar, isExternal: false },
  { name: "Spawn (Seed)", href: "/spawn-seed", icon: Sprout, isExternal: false },
  { name: "Training", href: "/training", icon: BookOpen, isExternal: false },
  { name: "Setup (Turnkey)", href: "/turnkey-projects", icon: Wrench, isExternal: false },
  { name: "Bags", href: "/equipment", icon: Layers, isExternal: false },
  { 
    name: "Fresh Mushroom", 
    href: "https://wa.me/919203544140?text=I%20am%20interested%20in%20Fresh%20Mushrooms", 
    icon: ShoppingCart, 
    isExternal: true 
  },
  { name: "Call Us", href: "tel:+919203544140", icon: Phone, isExternal: true },
];

export const FloatingBottomMenu = () => {
  const pathname = usePathname();

  return (
    <motion.div 
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="fixed bottom-0 left-0 right-0 z-[99990] md:hidden glass border-t border-white/20 dark:border-white/10 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl pb-safe"
    >
      {/* 
        Horizontal Scroll Container 
        Hide scrollbar using Tailwind arbitrary variants 
      */}
      <div className="flex items-center gap-2.5 overflow-x-auto px-3 py-3 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {MENU_ITEMS.map((item, idx) => {
          const isActive = pathname === item.href;
          
          return (
            <React.Fragment key={idx}>
              {item.isExternal ? (
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-full whitespace-nowrap transition-all border bg-white/40 dark:bg-black/40 border-black/5 dark:border-white/5 text-slate-700 dark:text-slate-300 shadow-sm active:scale-95"
                >
                  <item.icon size={12} className="text-purple-600 dark:text-purple-400" />
                  <span className="text-[10px] font-bold">{item.name}</span>
                </a>
              ) : (
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 px-3 py-1.5 rounded-full whitespace-nowrap transition-all border active:scale-95 ${
                    isActive 
                      ? "bg-purple-600/15 border-purple-600/30 text-purple-800 dark:text-purple-300 shadow-sm" 
                      : "bg-white/40 dark:bg-black/40 border-black/5 dark:border-white/5 text-slate-700 dark:text-slate-300 shadow-sm hover:bg-white/60 dark:hover:bg-white/10"
                  }`}
                >
                  <item.icon size={12} className={isActive ? "text-purple-700 dark:text-purple-400" : "text-purple-600/80 dark:text-purple-400/80"} />
                  <span className="text-[10px] font-bold">{item.name}</span>
                </Link>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </motion.div>
  );
};
