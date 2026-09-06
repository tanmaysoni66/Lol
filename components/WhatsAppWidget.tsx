"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle } from "lucide-react";

export const WhatsAppWidget = () => {
  // Replace with your actual WhatsApp number with country code (e.g., 91 for India)
  const whatsappNumber = "919203544140"; 
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleMobileMenuToggle = (e: CustomEvent) => {
      setIsHidden(e.detail);
    };

    window.addEventListener('mobileMenuToggle', handleMobileMenuToggle as EventListener);
    
    // Check initial state
    if (typeof document !== 'undefined') {
      setIsHidden(document.body.classList.contains('mobile-menu-open'));
    }

    return () => {
      window.removeEventListener('mobileMenuToggle', handleMobileMenuToggle as EventListener);
    };
  }, []);

  return (
    <AnimatePresence>
      {!isHidden && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          className="fixed right-3 md:right-[30px] z-[99999] flex flex-col gap-2 md:gap-4 items-end pointer-events-none bottom-[85px] md:bottom-[20px]"
        >
          <div className="flex flex-col items-center gap-1.5 pointer-events-auto">
            <motion.a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact us on WhatsApp"
              initial={{ scale: 0, opacity: 1 }}
              animate={{ scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              className="w-10 h-10 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_0_15px_rgba(37,211,102,0.4)] hover:shadow-[0_0_25px_rgba(37,211,102,0.6)] transition-all z-10 shrink-0 group relative"
            >
              {/* Ping Animation Effect */}
              <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 group-hover:opacity-40" />
              
              <MessageCircle size={20} className="md:w-[28px] md:h-[28px] relative z-10" />
            </motion.a>
            
            {/* Label under the button */}
            <span className="text-[8px] md:text-[9px] font-bold text-slate-800 dark:text-slate-200 shadow-sm leading-tight bg-white/70 dark:bg-slate-900/70 px-2.5 py-1 rounded-full backdrop-blur-md border border-black/10 dark:border-white/10">
              Chat on WhatsApp
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
