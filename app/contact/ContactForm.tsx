"use client";

import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [answer, setAnswer] = useState("");
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  const generateSecurityQuestion = () => {
    setNum1(Math.floor(Math.random() * 10) + 1);
    setNum2(Math.floor(Math.random() * 10) + 1);
  };

  useEffect(() => {
    generateSecurityQuestion();
    setIsMounted(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (parseInt(answer.trim()) !== (num1 + num2)) {
      alert("Incorrect security question answer. Please try again.");
      return;
    }
    
    setStatus("submitting");
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
    }, 1500);
  };

  if (status === "success") {
    return (
      <div className="bg-emerald-50 dark:bg-emerald-500/10 p-8 rounded-3xl border border-emerald-100 dark:border-emerald-500/20 text-center space-y-4">
        <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto text-emerald-600 dark:text-emerald-400">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white">Enquiry Submitted!</h3>
        <p className="text-slate-600 dark:text-slate-400">
          Thank you for reaching out. Our team will get back to you shortly.
        </p>
        <button 
          onClick={() => { setStatus("idle"); setAnswer(""); generateSecurityQuestion(); }}
          className="mt-4 px-5 py-2.5 bg-emerald-600 text-white text-sm font-semibold rounded-full hover:bg-emerald-700 transition-colors"
        >
          Send Another Enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white dark:bg-slate-900 p-6 md:p-8 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800 space-y-5 h-full">
      <div>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Tell Us How We Can Help</h3>
        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
          Fill out the enquiry form with your requirements, and our team will get back to you with the relevant information.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Name <span className="text-red-500">*</span></label>
          <input required type="text" placeholder="Your Full Name" className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 focus:ring-2 focus:ring-emerald-500 outline-none text-slate-900 dark:text-white text-sm transition-all" />
        </div>
        <div className="space-y-1.5">
          <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Phone Number <span className="text-red-500">*</span></label>
          <input required type="tel" placeholder="Ex. 9876543210" className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 focus:ring-2 focus:ring-emerald-500 outline-none text-slate-900 dark:text-white text-sm transition-all" />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Email <span className="text-red-500">*</span></label>
          <input required type="email" placeholder="you@example.com" className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 focus:ring-2 focus:ring-emerald-500 outline-none text-slate-900 dark:text-white text-sm transition-all" />
        </div>
        <div className="space-y-1.5">
          <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Location <span className="text-red-500">*</span></label>
          <input required type="text" placeholder="City, State" className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 focus:ring-2 focus:ring-emerald-500 outline-none text-slate-900 dark:text-white text-sm transition-all" />
        </div>
      </div>

      <div className="space-y-1.5">
        <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">How can we help you? <span className="text-red-500">*</span></label>
        <textarea required rows={4} placeholder="Please describe your requirements..." className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 focus:ring-2 focus:ring-emerald-500 outline-none text-slate-900 dark:text-white text-sm resize-none transition-all"></textarea>
      </div>

      <div className="space-y-1.5">
        <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          Security Question: What is {isMounted ? `${num1} + ${num2}` : '...'}? <span className="text-red-500">*</span>
        </label>
        <input required value={answer} onChange={(e) => setAnswer(e.target.value)} type="text" placeholder="Your answer" className="w-full max-w-[200px] px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 focus:ring-2 focus:ring-emerald-500 outline-none text-slate-900 dark:text-white text-sm transition-all" />
      </div>

      <div className="pt-2">
        <button 
          disabled={status === "submitting"}
          type="submit" 
          className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold rounded-full transition-colors disabled:opacity-50 w-full sm:w-auto shadow-sm"
        >
          {status === "submitting" ? "Submitting..." : "Submit Enquiry"}
          <Send className="w-4 h-4" />
        </button>
      </div>
    </form>
  );
}
