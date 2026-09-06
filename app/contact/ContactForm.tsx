"use client";

import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [answer, setAnswer] = useState("");
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    location: "",
    message: ""
  });

  const generateSecurityQuestion = () => {
    setNum1(Math.floor(Math.random() * 10) + 1);
    setNum2(Math.floor(Math.random() * 10) + 1);
  };

  useEffect(() => {
    generateSecurityQuestion();
    setIsMounted(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (parseInt(answer.trim()) !== (num1 + num2)) {
      setErrorMsg("Incorrect security question answer. Please try again.");
      return;
    }
    
    setStatus("submitting");

    try {
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          serviceType: "Contact Page Enquiry", // Map to general enquiry
          hp_website: "", // honeypot
          load_time: Date.now()
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("success");
    } catch (error: any) {
      setStatus("error");
      setErrorMsg(error.message || "Failed to submit enquiry. Please try again.");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  if (status === "success") {
    return (
      <div className="bg-white/40 dark:bg-slate-900/40 backdrop-blur-md p-6 rounded-3xl border border-emerald-100/50 dark:border-emerald-500/20 text-center space-y-3 shadow-lg">
        <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto text-emerald-600 dark:text-emerald-400">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">Enquiry Submitted!</h3>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Thank you for reaching out. Our team will get back to you shortly.
        </p>
        <button 
          onClick={() => { setStatus("idle"); setAnswer(""); generateSecurityQuestion(); setFormData({fullName: "", phone: "", email: "", location: "", message: ""}); }}
          className="mt-3 px-4 py-2 bg-emerald-600 text-white text-xs font-semibold rounded-full hover:bg-emerald-700 transition-colors"
        >
          Send Another Enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md p-5 rounded-3xl shadow-lg border border-slate-200/50 dark:border-slate-800/50 space-y-4 h-full relative z-10">
      <div>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">Tell Us How We Can Help</h3>
        <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">
          Fill out the enquiry form, and our team will get back to you.
        </p>
      </div>

      {errorMsg && (
        <div className="p-3 bg-red-50 dark:bg-red-500/10 text-red-600 dark:text-red-400 text-xs font-semibold rounded-xl">
          {errorMsg}
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-3">
        <div className="space-y-1">
          <label className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Name <span className="text-red-500">*</span></label>
          <input required name="fullName" value={formData.fullName} onChange={handleInputChange} type="text" placeholder="Your Full Name" className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white/50 dark:bg-slate-950/50 focus:ring-2 focus:ring-emerald-500 outline-none text-slate-900 dark:text-white text-xs transition-all" />
        </div>
        <div className="space-y-1">
          <label className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Phone <span className="text-red-500">*</span></label>
          <input required name="phone" value={formData.phone} onChange={handleInputChange} type="tel" placeholder="Ex. 9876543210" className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white/50 dark:bg-slate-950/50 focus:ring-2 focus:ring-emerald-500 outline-none text-slate-900 dark:text-white text-xs transition-all" />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-3">
        <div className="space-y-1">
          <label className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Email <span className="text-red-500">*</span></label>
          <input required name="email" value={formData.email} onChange={handleInputChange} type="email" placeholder="you@example.com" className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white/50 dark:bg-slate-950/50 focus:ring-2 focus:ring-emerald-500 outline-none text-slate-900 dark:text-white text-xs transition-all" />
        </div>
        <div className="space-y-1">
          <label className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Location <span className="text-red-500">*</span></label>
          <input required name="location" value={formData.location} onChange={handleInputChange} type="text" placeholder="City, State" className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white/50 dark:bg-slate-950/50 focus:ring-2 focus:ring-emerald-500 outline-none text-slate-900 dark:text-white text-xs transition-all" />
        </div>
      </div>

      <div className="space-y-1">
        <label className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">How can we help you? <span className="text-red-500">*</span></label>
        <textarea required name="message" value={formData.message} onChange={handleInputChange} rows={3} placeholder="Please describe your requirements..." className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white/50 dark:bg-slate-950/50 focus:ring-2 focus:ring-emerald-500 outline-none text-slate-900 dark:text-white text-xs resize-none transition-all"></textarea>
      </div>

      <div className="space-y-1">
        <label className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          Security Question: What is {isMounted ? `${num1} + ${num2}` : '...'}? <span className="text-red-500">*</span>
        </label>
        <input required value={answer} onChange={(e) => setAnswer(e.target.value)} type="text" placeholder="Your answer" className="w-full max-w-[150px] px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white/50 dark:bg-slate-950/50 focus:ring-2 focus:ring-emerald-500 outline-none text-slate-900 dark:text-white text-xs transition-all" />
      </div>

      <div className="pt-1">
        <button 
          disabled={status === "submitting"}
          type="submit" 
          className="inline-flex items-center justify-center gap-1.5 px-5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-full transition-colors disabled:opacity-50 shadow-sm"
        >
          {status === "submitting" ? "Submitting..." : "Submit Enquiry"}
          <Send className="w-3.5 h-3.5" />
        </button>
      </div>
    </form>
  );
}
