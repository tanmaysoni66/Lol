"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUp, Calendar, Box, Leaf } from "lucide-react";

export default function FloatingButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navItems = [
    { name: "Book Consultant", icon: Calendar, href: "/book-consultant", hideOn: ["/book-consultant", "/workshop"] },
    { name: "Spawn", icon: Leaf, href: "/spawn-seed", hideOn: ["/spawn-seed", "/workshop"] },
    { name: "Equipment", icon: Box, href: "/equipment", hideOn: ["/equipment", "/workshop"] },
  ];

  return (
    <>
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-24 md:bottom-28 right-4 md:right-8 z-40 p-3 rounded-full bg-slate-900/80 dark:bg-white/10 text-white backdrop-blur-md shadow-lg hover:scale-110 transition-transform"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>

      <div className="fixed bottom-0 left-0 right-0 z-50 p-3 bg-gradient-to-t from-white via-white/95 to-transparent dark:from-slate-950 dark:via-slate-950/95 lg:hidden">
        <div className="flex items-center justify-between gap-2 max-w-md mx-auto">
          {navItems.map((item, i) => {
            if (item.hideOn.includes(pathname)) return null;
            const className = "flex-1 flex items-center justify-center gap-2 py-3 px-2 rounded-2xl glass border dark:border-white/10 border-black/10 active:scale-95 transition-transform bg-white/50 dark:bg-slate-900/50";
            return (
              <Link key={i} href={item.href} className={className}>
                <item.icon size={16} className="text-primary-start" />
                <span className="text-[11px] font-bold dark:text-white text-slate-900 whitespace-nowrap">
                  {item.name}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
