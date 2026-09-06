"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { BookOpen, X, ArrowRight, ArrowLeft, Sparkles, CheckCircle2, TrendingUp, Home } from "lucide-react";

export const StickyJoinTrainingButton = ({
  size = "normal",
}: {
  size?: "normal" | "small";
}) => {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [modalView, setModalView] = useState<"region_select" | "india_plans" | "usa_plans">("region_select");
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleMobileMenuToggle = (e: CustomEvent) => {
      setIsHidden(e.detail);
      if (e.detail) {
        setShowModal(false);
      }
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

  // Next.js Navigation Helper via query params
  const handleNavigate = (path: string, query: Record<string, string>) => {
    setShowModal(false);
    const queryString = new URLSearchParams(query).toString();
    router.push(`${path}?${queryString}`);
  };

  return (
    <>
      <AnimatePresence>
        {!isHidden && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            onClick={() => {
              setModalView("region_select");
              setShowModal(true);
            }}
            type="button"
            className={`relative overflow-hidden flex items-center justify-center rounded-full group transition-all backdrop-blur-xl shadow-[4px_4px_10px_rgba(0,0,0,0.1),-4px_-4px_10px_rgba(255,255,255,0.1)] dark:shadow-[4px_4px_10px_rgba(0,0,0,0.4),-2px_-2px_10px_rgba(255,255,255,0.05)] border-t border-l border-white/40 dark:border-white/10 border-r border-b border-black/10 dark:border-black/50 bg-white/10 dark:bg-black/20 hover:scale-105 hover:bg-white/20 dark:hover:bg-white/5 text-purple-800 dark:text-purple-300 ${size === "small" ? "h-7 px-2.5 min-w-[95px]" : "h-8 w-full md:w-auto md:min-w-[100px] md:px-3"}`}
          >
            <div className={`font-black uppercase tracking-widest z-10 flex items-center justify-center gap-1.5 leading-tight ${size === "small" ? "text-[8px]" : "text-[9px] md:text-[10px]"}`}>
              <BookOpen size={size === "small" ? 10 : 12} className="shrink-0 text-purple-700 dark:text-purple-400" />
              <span>Join Training</span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-[999999] flex items-center justify-center p-3">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              className="relative w-full max-w-4xl dark:bg-slate-950 bg-white border border-purple-500/20 rounded-[2rem] p-3 md:p-3 shadow-2xl max-h-[90vh] overflow-y-auto z-10"
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 md:top-6 md:right-6 p-2 rounded-full dark:bg-white/5 bg-black/5 hover:dark:bg-white/10 hover:bg-black/10 transition-colors dark:text-slate-400 text-slate-500 z-50"
              >
                <X size={18} />
              </button>

              {modalView === "region_select" && (
                <div className="flex flex-col items-center">
                  <div className="text-center mb-5 pr-6 pl-6 pt-6 md:pt-0">
                    <h3 className="text-xl md:text-xl font-black dark:text-white text-slate-900 tracking-tight uppercase">
                      Select <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500 font-black">Your Region</span>
                    </h3>
                    <p className="dark:text-slate-400 text-slate-500 text-[10px] sm:text-xs md:text-sm font-medium leading-tight mt-1">
                      Choose your location to view pricing and proceed to enrollment.
                    </p>
                  </div>
                  
                  <div className="flex flex-col gap-4 w-full max-w-md mx-auto mb-5">
                    <button onClick={() => setModalView("india_plans")} className="flex items-center justify-between w-full p-3 md:p-3 rounded-2xl border-2 border-purple-500/20 bg-purple-500/5 hover:bg-purple-500/10 hover:border-purple-500/40 transition-all text-left group">
                      <div className="flex items-center gap-4">
                        <span className="text-xl">🇮🇳</span>
                        <div>
                          <div className="text-sm md:text-sm font-bold dark:text-white text-slate-900">Join Training from India</div>
                          <div className="text-[10px] md:text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-widest">(PAY IN ₹ INR)</div>
                        </div>
                      </div>
                      <ArrowRight size={18} className="text-purple-500 group-hover:translate-x-1 transition-transform" />
                    </button>
                    
                    <button onClick={() => setModalView("usa_plans")} className="flex items-center justify-between w-full p-3 md:p-3 rounded-2xl border-2 border-blue-500/20 bg-blue-500/5 hover:bg-blue-500/10 hover:border-blue-500/40 transition-all text-left group">
                      <div className="flex items-center gap-4">
                        <span className="text-xl">🇺🇸</span>
                        <div>
                          <div className="text-sm md:text-sm font-bold dark:text-white text-slate-900">Join Training from USA / International</div>
                          <div className="text-[10px] md:text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">(PAY IN $ USD)</div>
                        </div>
                      </div>
                      <ArrowRight size={18} className="text-blue-500 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>

                  <div className=" dark:bg-white/[0.02] rounded-2xl p-3 w-full max-w-lg border border-slate-200 dark:border-white/5 mx-auto">
                    <h5 className="text-[11px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-4 text-center">What You Will Learn:</h5>
                    <ul className="space-y-3 text-sm">
                      {[ "Home & Commercial Farm Setup", "Indoor Climate & Humidity Control", "High-Yield Oyster & Button Cultivation", "Certificate & Community Support"].map((item, i) => (
                        <li key={i} className="flex items-center gap-2.5 dark:text-slate-300 text-slate-600 font-medium">
                          <CheckCircle2 size={18} className="text-green-500 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {modalView === "india_plans" && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
                  <button onClick={() => setModalView("region_select")} className="absolute top-4 left-4 md:top-6 md:left-6 p-2 rounded-full dark:bg-white/5 bg-black/5 hover:dark:bg-white/10 hover:bg-black/10 transition-colors dark:text-slate-400 text-slate-500 z-50 flex items-center justify-center gap-1 text-[10px] uppercase font-bold">
                    <ArrowLeft size={14} /> Back
                  </button>
                  <div className="text-center mb-5 pr-6 pl-6 pt-8 md:pt-0">
                    <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full dark:bg-purple-500/10 bg-purple-500/5 text-purple-600 dark:text-purple-400 border border-purple-500/10 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-3">
                      <Sparkles size={12} /> Live Your Farming Dream
                    </div>
                    <h3 className="text-xl md:text-xl font-black dark:text-white text-slate-900 tracking-tight uppercase">
                      Select <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500 font-black">Your Training Plan</span>
                    </h3>
                  </div>

                  <div className="grid grid-cols-2 gap-2 md:gap-4 max-w-2xl mx-auto mb-6">
                    <button onClick={() => handleNavigate("/training/basic/checkout", { type: "basic", price: "299" })} className="flex items-center justify-between p-2 md:p-3.5 rounded-xl md:rounded-2xl border border-blue-500/25 bg-blue-500/5 hover:bg-blue-500/10 transition-all text-left group/btn">
                      <div className="flex items-center gap-2 md:gap-3 overflow-hidden">
                        <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-blue-500/10 text-blue-500 flex items-center justify-center shrink-0">
                          <BookOpen size={14} />
                        </div>
                        <div className="min-w-0">
                          <div className="text-[9px] md:text-[10px] uppercase font-black text-blue-500">Basic</div>
                          <div className="text-[11px] md:text-sm font-extrabold dark:text-white text-slate-900 leading-tight">Mushroom ₹299</div>
                        </div>
                      </div>
                    </button>
                    <button onClick={() => handleNavigate("/training/advanced/checkout", { type: "advanced", price: "699" })} className="flex items-center justify-between p-2 md:p-3.5 rounded-xl md:rounded-2xl border border-purple-500/30 bg-purple-500/5 hover:bg-purple-500/10 transition-all text-left group/btn ring-1 ring-purple-500/20">
                      <div className="flex items-center gap-2 md:gap-3 overflow-hidden">
                        <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-purple-500/10 text-purple-500 flex items-center justify-center shrink-0">
                          <Sparkles size={14} className="animate-pulse" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-[9px] md:text-[10px] uppercase font-black text-purple-500">Advanced</div>
                          <div className="text-[11px] md:text-sm font-extrabold dark:text-white text-slate-900 leading-tight">Training ₹699</div>
                        </div>
                      </div>
                    </button>
                  </div>

                  {/* Add additional card info for India plans here if needed exactly like original app */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                    {/* Basic Plan Card */}
                    <div className="flex flex-col rounded-2xl border border-white/5 bg-slate-900/50 p-6 relative overflow-hidden">
                      <div className="mb-4">
                        <span className="inline-block px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-3">Beginner</span>
                        <h4 className="text-2xl font-bold text-white mb-2">Basic Cultivation Training</h4>
                        <div className="flex items-baseline gap-2 text-white">
                          <span className="text-3xl font-black text-blue-400">₹299</span>
                          <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">One-Time Fee</span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-400 mb-6 flex-grow">
                        Perfect for students and hobbyists looking to grow mushrooms at a small home scale.
                      </p>
                      <div className="mb-8">
                        <h5 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">What's Included:</h5>
                        <ul className="space-y-3 text-sm text-gray-300">
                          <li className="flex items-start gap-2.5">
                            <CheckCircle2 size={18} className="text-blue-500 shrink-0 mt-0.5" />
                            <span><strong className="text-white">Oyster & Button</strong> cultivation step-by-step tutorial.</span>
                          </li>
                          <li className="flex items-start gap-2.5">
                            <CheckCircle2 size={18} className="text-blue-500 shrink-0 mt-0.5" />
                            <span><strong className="text-white">Home Setup:</strong> Perfect climate parameters for rooms/backyards.</span>
                          </li>
                          <li className="flex items-start gap-2.5">
                            <CheckCircle2 size={18} className="text-blue-500 shrink-0 mt-0.5" />
                            <span><strong className="text-white">Substrate Preparation:</strong> Boiling, sterilization & bag packing.</span>
                          </li>
                          <li className="flex items-start gap-2.5">
                            <CheckCircle2 size={18} className="text-blue-500 shrink-0 mt-0.5" />
                            <span><strong className="text-white">Contamination Prevention:</strong> Simple hygiene controls.</span>
                          </li>
                        </ul>
                      </div>
                      <button onClick={() => handleNavigate("/training/basic/checkout", { type: "basic", price: "299" })} className="w-full py-3 px-4 bg-white hover:bg-gray-100 text-black rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2 mt-auto">
                        Join Mushroom Training <ArrowRight size={16} />
                      </button>
                    </div>

                    {/* Advanced Plan Card */}
                    <div className="flex flex-col rounded-2xl border border-purple-500/30 bg-slate-900/50 p-6 relative overflow-hidden ring-1 ring-purple-500/20">
                      <div className="absolute top-0 right-0 p-4">
                        <span className="inline-flex items-center gap-1 text-[10px] font-bold text-purple-400 uppercase tracking-widest"><Sparkles size={12}/> Recommended</span>
                      </div>
                      <div className="mb-4">
                        <span className="inline-block px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 text-xs font-bold uppercase tracking-wider mb-3">Entrepreneur</span>
                        <h4 className="text-2xl font-bold text-white mb-2">Advanced Commercial Training</h4>
                        <div className="flex items-baseline gap-2 text-white">
                          <span className="text-3xl font-black text-purple-400">₹699</span>
                          <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">One-Time Fee</span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-400 mb-6 flex-grow">
                        Ideal for entrepreneurs and farmers wanting to establish commercial operations and scale.
                      </p>
                      <div className="mb-8">
                        <h5 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">What's Included:</h5>
                        <ul className="space-y-3 text-sm text-gray-300">
                          <li className="flex items-start gap-2.5">
                            <CheckCircle2 size={18} className="text-purple-500 shrink-0 mt-0.5" />
                            <span><strong className="text-white">Everything in Basic</strong> plus additional advanced guides.</span>
                          </li>
                          <li className="flex items-start gap-2.5">
                            <CheckCircle2 size={18} className="text-purple-500 shrink-0 mt-0.5" />
                            <span><strong className="text-white">Advanced Varieties:</strong> Milky (Summer), Oyster & Button Mushrooms.</span>
                          </li>
                          <li className="flex items-start gap-2.5">
                            <CheckCircle2 size={18} className="text-purple-500 shrink-0 mt-0.5" />
                            <span><strong className="text-white">Commercial Shed Setup:</strong> Layout design and low-cost shed options.</span>
                          </li>
                          <li className="flex items-start gap-2.5">
                            <CheckCircle2 size={18} className="text-purple-500 shrink-0 mt-0.5" />
                            <span><strong className="text-white">Automated Climate Systems:</strong> Foggers, AC, & humidity tools.</span>
                          </li>
                          <li className="flex items-start gap-2.5">
                            <CheckCircle2 size={18} className="text-purple-500 shrink-0 mt-0.5" />
                            <span><strong className="text-white">Disease Management:</strong> Treat green mold, flies & bacterial blotch.</span>
                          </li>
                          <li className="flex items-start gap-2.5">
                            <CheckCircle2 size={18} className="text-purple-500 shrink-0 mt-0.5" />
                            <span><strong className="text-white">Marketing & Sales:</strong> Tie-ups, wholesale market selling, ads & social media.</span>
                          </li>
                          <li className="flex items-start gap-2.5">
                            <CheckCircle2 size={18} className="text-purple-500 shrink-0 mt-0.5" />
                            <span><strong className="text-white">Exclusive Perks:</strong> Certified Certificate & active private community support.</span>
                          </li>
                        </ul>
                      </div>
                      <button onClick={() => handleNavigate("/training/advanced/checkout", { type: "advanced", price: "699" })} className="w-full py-3 px-4 bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2 mt-auto">
                        Join Mushroom Training <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {modalView === "usa_plans" && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
                  <button onClick={() => setModalView("region_select")} className="absolute top-4 left-4 md:top-6 md:left-6 p-2 rounded-full dark:bg-white/5 bg-black/5 hover:dark:bg-white/10 hover:bg-black/10 transition-colors dark:text-slate-400 text-slate-500 z-50 flex items-center justify-center gap-1 text-[10px] uppercase font-bold">
                    <ArrowLeft size={14} /> Back
                  </button>
                  <div className="text-center mb-5 pr-6 pl-6 pt-8 md:pt-0">
                    <h3 className="text-xl md:text-xl font-black dark:text-white text-slate-900 tracking-tight">
                      Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">Training Program</span>
                    </h3>
                  </div>

                  <div className="grid grid-cols-2 gap-2 md:gap-4 max-w-2xl mx-auto mb-6">
                    <button onClick={() => handleNavigate("/training/usa-basic/checkout", { plan: "basic", price: "39" })} className="flex items-center justify-between p-2 md:p-3.5 rounded-xl md:rounded-2xl border border-blue-500/25 bg-blue-500/5 hover:bg-blue-500/10 transition-all text-left group/btn">
                      <div className="flex items-center gap-2 md:gap-3 overflow-hidden">
                        <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-blue-500/10 text-blue-500 flex items-center justify-center shrink-0">
                          <Home size={14} />
                        </div>
                        <div className="min-w-0">
                          <div className="text-[9px] md:text-[10px] uppercase font-black text-blue-500">Basic</div>
                          <div className="text-[11px] md:text-sm font-extrabold dark:text-white text-slate-900 leading-tight">Training $39</div>
                        </div>
                      </div>
                    </button>
                    <button onClick={() => handleNavigate("/training/usa-advanced/checkout", { plan: "advanced", price: "97" })} className="flex items-center justify-between p-2 md:p-3.5 rounded-xl md:rounded-2xl border border-cyan-500/30 bg-cyan-500/5 hover:bg-cyan-500/10 transition-all text-left group/btn ring-1 ring-cyan-500/20">
                      <div className="flex items-center gap-2 md:gap-3 overflow-hidden">
                        <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-cyan-500/10 text-cyan-500 flex items-center justify-center shrink-0">
                          <TrendingUp size={14} className="animate-pulse" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-[9px] md:text-[10px] uppercase font-black text-cyan-500">Advanced</div>
                          <div className="text-[11px] md:text-sm font-extrabold dark:text-white text-slate-900 leading-tight">Training $97</div>
                        </div>
                      </div>
                    </button>
                  </div>
                  
                  {/* USA Card UI exactly like original app reference */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                    {/* Basic USA Plan Card */}
                    <div className="flex flex-col rounded-2xl border border-white/5 bg-[#0a0f1c] p-6 relative overflow-hidden">
                      <div className="mb-4">
                        <h4 className="text-2xl font-bold text-white mb-2">Basic Cultivation Mushroom Training</h4>
                        <span className="text-sm text-gray-400 block mb-4">(Home Scale)</span>
                        <div className="flex items-baseline gap-2 text-white">
                          <span className="text-3xl font-black">$39</span>
                          <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">(ONE-TIME)</span>
                        </div>
                      </div>
                      <p className="text-sm text-blue-400 mb-6 flex-grow flex items-center gap-2">
                        <Home size={16} /> Ideal For: Beginners & Hobbyists
                      </p>
                      <div className="mb-8">
                        <h5 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">KEY LEARNINGS:</h5>
                        <ul className="space-y-3 text-sm text-gray-300">
                          <li className="flex items-start gap-2.5">
                            <CheckCircle2 size={18} className="text-green-500 shrink-0 mt-0.5" />
                            <span>Oyster & Button mushroom home setup.</span>
                          </li>
                          <li className="flex items-start gap-2.5">
                            <CheckCircle2 size={18} className="text-green-500 shrink-0 mt-0.5" />
                            <span>Substrate boiling & basic sterilization.</span>
                          </li>
                          <li className="flex items-start gap-2.5">
                            <CheckCircle2 size={18} className="text-green-500 shrink-0 mt-0.5" />
                            <span>Simple temperature/humidity control.</span>
                          </li>
                        </ul>
                      </div>
                      <button onClick={() => handleNavigate("/training/usa-basic/checkout", { plan: "basic", price: "39" })} className="w-full py-3 px-4 bg-white hover:bg-gray-100 text-black rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2 mt-auto">
                        Enroll Now <ArrowRight size={16} className="text-green-500" />
                      </button>
                    </div>

                    {/* Advanced USA Plan Card */}
                    <div className="flex flex-col rounded-2xl border border-cyan-500/30 bg-[#0a0f1c] p-6 relative overflow-hidden ring-1 ring-cyan-500/20">
                      <div className="absolute top-0 right-0 p-4">
                        <span className="inline-flex items-center gap-1 text-[10px] font-bold bg-cyan-500 text-black px-2 py-1 rounded-full uppercase tracking-widest"><Sparkles size={12}/> BEST VALUE</span>
                      </div>
                      <div className="mb-4 mt-2">
                        <h4 className="text-2xl font-bold text-white mb-2 pr-20">Advanced Commercial Mushroom Training</h4>
                        <span className="text-sm text-gray-400 block mb-4">(Business Scale)</span>
                        <div className="flex items-baseline gap-2 text-white">
                          <span className="text-3xl font-black">$97</span>
                          <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">(ONE-TIME)</span>
                        </div>
                      </div>
                      <p className="text-sm text-blue-400 mb-6 flex-grow flex items-center gap-2">
                        <TrendingUp size={16} /> Ideal For: Entrepreneurs & Commercial Growers
                      </p>
                      <div className="mb-8">
                        <h5 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">KEY LEARNINGS:</h5>
                        <ul className="space-y-3 text-sm text-gray-300">
                          <li className="flex items-start gap-2.5">
                            <CheckCircle2 size={18} className="text-blue-500 shrink-0 mt-0.5" />
                            <span>Farm layout, vertical racks & HVAC setup.</span>
                          </li>
                          <li className="flex items-start gap-2.5">
                            <CheckCircle2 size={18} className="text-blue-500 shrink-0 mt-0.5" />
                            <span>High-yield varieties + Pest management.</span>
                          </li>
                          <li className="flex items-start gap-2.5">
                            <CheckCircle2 size={18} className="text-blue-500 shrink-0 mt-0.5" />
                            <span>Sales strategies for US Farmer's Markets & local stores.</span>
                          </li>
                          <li className="flex items-start gap-2.5">
                            <CheckCircle2 size={18} className="text-blue-500 shrink-0 mt-0.5" />
                            <span>Certificate & Private Community Access.</span>
                          </li>
                        </ul>
                      </div>
                      <button onClick={() => handleNavigate("/training/usa-advanced/checkout", { plan: "advanced", price: "97" })} className="w-full py-3 px-4 bg-[#00A3E0] hover:bg-[#0092C9] text-white rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2 mt-auto">
                        Enroll Now <ArrowRight size={16} className="text-green-300" />
                      </button>
                    </div>
                  </div>
                </div>
              )}

            </motion.div>
          </div>

        )}
      </AnimatePresence>
    </>
  );
};
