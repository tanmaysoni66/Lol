"use client";
import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ShoppingCart, ArrowRight } from "lucide-react";

export default function Marketplace() {
  return (
    <section id="market" className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <div className="badge mx-auto mb-4">Global Market Linkage</div>
        <h2 className="mb-4 uppercase tracking-tight">
          Global <span className="gradient-text">Mushroom B2B Marketplace</span>
        </h2>
        <p className="max-w-xl mx-auto mb-5 font-medium">
          Connect directly with verified commercial buyers and sellers worldwide.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left p-2">
          {[
            {
              type: "Seller",
              title: "Mushroom Spawn (Seed)",
              desc: "Lab-grade organic F1 hybrid spawn.",
              price: "Bulk Order",
              linkType: "page",
              to: "/spawn-seed",
            },
            {
              type: "Seller",
              title: "Fresh Organic Mushrooms",
              desc: "A-grade commercial button mushrooms.",
              price: "Live Market Rate",
              linkType: "external",
              to: "https://wa.me/919203544140?text=I%20am%20interested%20in%20Fresh%20Mushrooms",
            },
            {
              type: "Seller",
              title: "Dry Mushrooms Export",
              desc: "Long shelf life, premium export quality.",
              price: "Wholesale Only",
              linkType: "external",
              to: "https://wa.me/919203544140?text=I%20am%20interested%20in%20Dry%20Mushrooms",
            },
          ].map((ad, i) => {
            const CardWrapper = ad.linkType === "page" ? Link : "a";
            return (
              <CardWrapper
                key={i}
                href={ad.to}
                target={ad.linkType === "external" ? "_blank" : undefined}
                rel={ad.linkType === "external" ? "noopener noreferrer" : undefined}
                className="glass p-3 rounded-2xl border dark:border-white/5 border-black/5 relative group cursor-pointer block"
              >
                <div className="absolute top-4 right-4 px-2 py-0.5 rounded-full text-[8px] font-black uppercase tracking-widest bg-blue-500/20 text-blue-400">
                  {ad.type}
                </div>
                <h3 className="dark:text-white text-slate-900 mb-1 mt-4 tracking-tight">
                  {ad.title}
                </h3>
                <div className="text-[12px] text-slate-500 mb-6">
                  {ad.desc}
                </div>
                <div className="flex items-center justify-between">
                  <span className="dark:text-white text-slate-900 font-bold text-sm dark:bg-white/5 bg-black/5 px-3 py-2 rounded-xl">
                    {ad.price}
                  </span>
                  <span className="w-9 h-9 rounded-lg dark:bg-white/5 bg-black/5 dark:text-slate-400 text-slate-600 flex items-center justify-center group-hover:bg-primary-start group-hover:text-white transition-all">
                    <ArrowRight size={16} />
                  </span>
                </div>
              </CardWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
