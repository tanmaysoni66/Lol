"use client";
import Link from "next/link";
import { motion } from "motion/react";
import { ShoppingCart, ArrowRight } from "lucide-react";

export default function UsaCancelClient({ type }: { type: "usa-basic" | "usa-advanced" }) {
  const isAdvanced = type === "usa-advanced";
  const title = isAdvanced ? "Advanced Registration Incomplete!" : "Registration Incomplete!";
  const amount = isAdvanced ? "$97" : "$39";

  return (
    <main className="relative flex flex-col items-center justify-center min-h-[100dvh] bg-transparent overflow-hidden px-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative z-10 max-w-md w-full backdrop-blur-xl bg-black/40 border border-white/20 p-8 rounded-3xl shadow-2xl text-center"
      >
        <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </div>
        
        <h1 className="text-2xl font-bold text-white mb-2 drop-shadow-md">{title}</h1>
        <p className="text-gray-300 text-sm mb-6 drop-shadow-sm">
          Your payment process was interrupted. Complete your registration to secure your spot for the {isAdvanced ? "Commercial" : "Basic"} Training.
        </p>

        {isAdvanced && (
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 mb-6 text-left">
            <h3 className="text-cyan-300 font-semibold text-sm mb-2 flex items-center gap-2">
              <ShoppingCart className="w-4 h-4" /> Secure your spot ({amount} Only)
            </h3>
            <ul className="text-xs text-gray-300 space-y-2">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-1"></div>
                Farm layout, vertical racks & HVAC setup
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-1"></div>
                High-yield varieties + Pest management
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-1"></div>
                Sales strategies for US Farmer's Markets & local stores
              </li>
            </ul>
          </div>
        )}

        {!isAdvanced && (
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 mb-6 text-left">
            <h3 className="text-blue-300 font-semibold text-sm mb-2 flex items-center gap-2">
              <ShoppingCart className="w-4 h-4" /> Secure your spot ({amount} Only)
            </h3>
            <ul className="text-xs text-gray-300 space-y-2">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-1"></div>
                Oyster & Button mushroom home setup
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-1"></div>
                Substrate boiling & basic sterilization
              </li>
            </ul>
          </div>
        )}

        <div className="flex flex-col gap-3">
          <Link href={`/training/${type}/checkout`} className="w-full py-3 px-4 bg-cyan-600 hover:bg-cyan-700 text-white rounded-xl text-sm font-bold transition-all shadow-lg flex items-center justify-center gap-2">
            Retry Payment <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href="/training" className="w-full py-3 px-4 bg-white/10 hover:bg-white/20 text-white rounded-xl text-sm font-semibold transition-all">
            Return to Plans
          </Link>
        </div>
      </motion.div>
    </main>
  );
}
