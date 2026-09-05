"use client";

import React, { useState, useEffect } from "react";
import { GraduationCap, Sprout, Factory, ShoppingBag, Grid, CheckCircle2, Loader2 } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { motion, AnimatePresence } from "motion/react";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const TABS = [
  { id: "Training", label: "Mushroom Training", icon: GraduationCap },
  { id: "Spawn", label: "Mushroom Spawn", icon: Sprout },
  { id: "Setup", label: "Farm Setup (Turnkey)", icon: Factory },
  { id: "Buy Mushrooms", label: "Buy Mushrooms", icon: ShoppingBag },
  { id: "Other", label: "Other Services", icon: Grid },
];

const VARIETIES = ["Button Mushroom", "Oyster Mushroom", "Milky Mushroom", "Shiitake", "Lion's Mane", "Cordyceps"];
const TRAINING_VARIETIES = [...VARIETIES, "All Varieties Combined / Multiple"];

export default function EnquiryPage() {
  const [serviceType, setServiceType] = useState(TABS[0].id);
  const [loadTime, setLoadTime] = useState<number>(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    message: "",
    securityAnswer: "",
    hp_website: "", // Honeypot
    
    // Specifics
    trainingMode: "",
    mushroomVariety: "",
    quantity: "",
    deliveryLocation: "",
    setupType: "",
    farmSize: "",
    farmLocation: "",
    productForm: "",
    subjectOfEnquiry: "",
  });

  useEffect(() => {
    setLoadTime(Date.now());
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, serviceType, load_time: loadTime }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit enquiry.");
      }

      setIsSuccess(true);
      setFormData({
        fullName: "", phone: "", email: "", message: "", securityAnswer: "", hp_website: "",
        trainingMode: "", mushroomVariety: "", quantity: "", deliveryLocation: "", setupType: "",
        farmSize: "", farmLocation: "", productForm: "", subjectOfEnquiry: ""
      });
    } catch (err: any) {
      setErrorMsg(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Reset specific fields when tab changes so they don't carry over
  useEffect(() => {
    setFormData(prev => ({
        ...prev,
        trainingMode: "", mushroomVariety: "", quantity: "", deliveryLocation: "",
        setupType: "", farmSize: "", farmLocation: "", productForm: "", subjectOfEnquiry: ""
    }));
  }, [serviceType]);

  return (
    <div className="min-h-screen w-full relative overflow-x-hidden bg-transparent text-gray-900 dark:text-gray-100 flex items-center justify-center p-4 py-12">
      {/* Animated Background Theme removed to use global MyceliumBackground */}

      {/* Transparent Liquid Glass Form Container */}
      <div className="relative z-10 w-full max-w-2xl bg-gradient-to-br from-white/60 via-white/40 to-white/20 dark:from-neutral-900/60 dark:via-neutral-900/40 dark:to-neutral-900/20 backdrop-blur-xl rounded-3xl shadow-[0_8px_32px_rgba(31,38,135,0.15)] border border-white/50 dark:border-white/10 overflow-hidden">
        
        {/* Header */}
        <div className="p-6 pb-4 border-b border-gray-100 dark:border-neutral-800 text-center">
           <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-emerald-500">
             How Can We Help You?
           </h1>
           <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 max-w-md mx-auto">
             Select the service you're interested in, fill in your details, and our experts will get back to you with the best solutions.
           </p>
        </div>

        {/* Tabs */}
        <div className="flex overflow-x-auto scrollbar-hide border-b border-white/20 dark:border-white/5 p-2">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setServiceType(tab.id)}
              className={cn(
                "relative flex-1 min-w-[100px] flex flex-col items-center justify-center gap-1.5 p-3 rounded-xl text-xs font-medium transition-colors duration-200",
                serviceType === tab.id
                  ? "text-purple-600 dark:text-purple-400"
                  : "text-gray-500 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-neutral-800"
              )}
            >
              <tab.icon className="w-5 h-5" />
              <span className="text-center">{tab.label}</span>
              {serviceType === tab.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 border-2 border-purple-500/20 dark:border-purple-500/40 rounded-xl bg-purple-50/50 dark:bg-purple-900/10"
                  initial={false}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Form Body */}
        <div className="p-6 bg-gradient-to-b from-transparent to-white/30 dark:to-black/20">
          {isSuccess ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center py-12 text-center"
            >
              <CheckCircle2 className="w-16 h-16 text-emerald-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Message Sent Successfully!</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 max-w-sm">
                Thank you for reaching out. We have received your enquiry and our team will get back to you shortly.
              </p>
              <button 
                onClick={() => setIsSuccess(false)}
                className="mt-6 px-6 py-2 bg-purple-600 text-white rounded-lg text-sm font-medium hover:bg-purple-700 transition"
              >
                Send Another Enquiry
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Honeypot - hidden from users */}
              <div className="hidden" aria-hidden="true">
                <input type="text" name="hp_website" tabIndex={-1} autoComplete="off" value={formData.hp_website} onChange={handleChange} />
              </div>

              {/* Common Fields Row 1 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-700 dark:text-gray-300">Full Name *</label>
                  <input required name="fullName" value={formData.fullName} onChange={handleChange} placeholder="John Doe" className="w-full px-3 py-2 text-sm bg-gray-50 dark:bg-neutral-900/50 border border-gray-200 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-700 dark:text-gray-300">Phone Number *</label>
                  <input required name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="Enter phone number" className="w-full px-3 py-2 text-sm bg-gray-50 dark:bg-neutral-900/50 border border-gray-200 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-700 dark:text-gray-300">Email Address *</label>
                <input required name="email" type="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" className="w-full px-3 py-2 text-sm bg-gray-50 dark:bg-neutral-900/50 border border-gray-200 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" />
              </div>

              {/* Dynamic Service Section */}
              <div className="pt-2">
                <h3 className="text-sm font-bold text-purple-700 dark:text-purple-300 border-b border-white/30 dark:border-white/10 pb-2 mb-4 drop-shadow-sm">
                  {serviceType === "Training" && "Training Preferences"}
                  {serviceType === "Spawn" && "Spawn (Seed) Requirements"}
                  {serviceType === "Setup" && "Turnkey Project Details"}
                  {serviceType === "Buy Mushrooms" && "Purchase Mushrooms"}
                  {serviceType === "Other" && "Other Services / General Enquiry"}
                </h3>
                
                <AnimatePresence mode="popLayout">
                  <motion.div 
                    key={serviceType}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                  >
                    
                    {/* Training specific fields */}
                    {serviceType === "Training" && (
                      <>
                        <div className="space-y-1 sm:col-span-2">
                          <label className="text-xs font-semibold text-gray-700 dark:text-gray-300">Training Mode *</label>
                          <select required name="trainingMode" value={formData.trainingMode} onChange={handleChange} className="w-full px-3 py-2 text-sm bg-gray-50 dark:bg-neutral-900/50 border border-gray-200 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
                            <option value="">Select Mode</option>
                            <option value="Offline (At Farm)">Offline (At Farm)</option>
                            <option value="Online (Live Classes)">Online (Live Classes)</option>
                          </select>
                        </div>
                        <div className="space-y-1 sm:col-span-2">
                          <label className="text-xs font-semibold text-gray-700 dark:text-gray-300">Mushroom Variety *</label>
                          <select required name="mushroomVariety" value={formData.mushroomVariety} onChange={handleChange} className="w-full px-3 py-2 text-sm bg-gray-50 dark:bg-neutral-900/50 border border-gray-200 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
                            <option value="">Select Variety</option>
                            {TRAINING_VARIETIES.map(v => <option key={v} value={v}>{v}</option>)}
                          </select>
                        </div>
                      </>
                    )}

                    {/* Spawn specific fields */}
                    {serviceType === "Spawn" && (
                      <>
                         <div className="space-y-1 sm:col-span-2">
                          <label className="text-xs font-semibold text-gray-700 dark:text-gray-300">Mushroom Variety *</label>
                          <select required name="mushroomVariety" value={formData.mushroomVariety} onChange={handleChange} className="w-full px-3 py-2 text-sm bg-gray-50 dark:bg-neutral-900/50 border border-gray-200 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
                            <option value="">Select Variety</option>
                            {TRAINING_VARIETIES.map(v => <option key={v} value={v}>{v}</option>)}
                          </select>
                        </div>
                        <div className="space-y-1">
                          <label className="text-xs font-semibold text-gray-700 dark:text-gray-300">Quantity Required (kg) *</label>
                          <input required name="quantity" value={formData.quantity} onChange={handleChange} placeholder="e.g., 50 kg" className="w-full px-3 py-2 text-sm bg-gray-50 dark:bg-neutral-900/50 border border-gray-200 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" />
                        </div>
                        <div className="space-y-1">
                          <label className="text-xs font-semibold text-gray-700 dark:text-gray-300">Delivery State/City *</label>
                          <input required name="deliveryLocation" value={formData.deliveryLocation} onChange={handleChange} placeholder="Your delivery location" className="w-full px-3 py-2 text-sm bg-gray-50 dark:bg-neutral-900/50 border border-gray-200 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" />
                        </div>
                      </>
                    )}

                    {/* Setup specific fields */}
                    {serviceType === "Setup" && (
                      <>
                        <div className="space-y-1 sm:col-span-2">
                          <label className="text-xs font-semibold text-gray-700 dark:text-gray-300">Setup Type *</label>
                          <select required name="setupType" value={formData.setupType} onChange={handleChange} className="w-full px-3 py-2 text-sm bg-gray-50 dark:bg-neutral-900/50 border border-gray-200 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
                            <option value="">Select Farm Type</option>
                            <option value="AC Commercial Farm (Button/Oyster)">AC Commercial Farm (Button/Oyster)</option>
                            <option value="Non-AC Seasonal Hut Structure">Non-AC Seasonal Hut Structure</option>
                            <option value="High-Tech PUF Panel Setup">High-Tech PUF Panel Setup</option>
                            <option value="Consultancy Only">Consultancy Only</option>
                          </select>
                        </div>
                        <div className="space-y-1">
                          <label className="text-xs font-semibold text-gray-700 dark:text-gray-300">Estimated Farm Size/Area</label>
                          <input name="farmSize" value={formData.farmSize} onChange={handleChange} placeholder="e.g., 2000 sq ft" className="w-full px-3 py-2 text-sm bg-gray-50 dark:bg-neutral-900/50 border border-gray-200 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" />
                        </div>
                        <div className="space-y-1">
                          <label className="text-xs font-semibold text-gray-700 dark:text-gray-300">Farm Location *</label>
                          <input required name="farmLocation" value={formData.farmLocation} onChange={handleChange} placeholder="City, State" className="w-full px-3 py-2 text-sm bg-gray-50 dark:bg-neutral-900/50 border border-gray-200 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" />
                        </div>
                      </>
                    )}

                    {/* Buy Mushrooms specific fields */}
                    {serviceType === "Buy Mushrooms" && (
                      <>
                         <div className="space-y-1">
                          <label className="text-xs font-semibold text-gray-700 dark:text-gray-300">Product Form *</label>
                          <select required name="productForm" value={formData.productForm} onChange={handleChange} className="w-full px-3 py-2 text-sm bg-gray-50 dark:bg-neutral-900/50 border border-gray-200 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
                            <option value="">Select Form</option>
                            <option value="Fresh Mushroom">Fresh Mushroom</option>
                            <option value="Dry Mushroom">Dry Mushroom</option>
                            <option value="Mushroom Powder">Mushroom Powder</option>
                          </select>
                        </div>
                         <div className="space-y-1">
                          <label className="text-xs font-semibold text-gray-700 dark:text-gray-300">Mushroom Variety *</label>
                          <select required name="mushroomVariety" value={formData.mushroomVariety} onChange={handleChange} className="w-full px-3 py-2 text-sm bg-gray-50 dark:bg-neutral-900/50 border border-gray-200 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
                            <option value="">Select Variety</option>
                            {VARIETIES.map(v => <option key={v} value={v}>{v}</option>)}
                          </select>
                        </div>
                        <div className="space-y-1">
                          <label className="text-xs font-semibold text-gray-700 dark:text-gray-300">Order Quantity (kg) *</label>
                          <input required name="quantity" value={formData.quantity} onChange={handleChange} placeholder="e.g., 100 kg" className="w-full px-3 py-2 text-sm bg-gray-50 dark:bg-neutral-900/50 border border-gray-200 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" />
                        </div>
                        <div className="space-y-1">
                          <label className="text-xs font-semibold text-gray-700 dark:text-gray-300">Delivery City/State *</label>
                          <input required name="deliveryLocation" value={formData.deliveryLocation} onChange={handleChange} placeholder="Your delivery location" className="w-full px-3 py-2 text-sm bg-gray-50 dark:bg-neutral-900/50 border border-gray-200 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" />
                        </div>
                      </>
                    )}

                    {/* Other Services specific fields */}
                    {serviceType === "Other" && (
                      <div className="space-y-1 sm:col-span-2">
                          <label className="text-xs font-semibold text-gray-700 dark:text-gray-300">Subject of Enquiry *</label>
                          <select required name="subjectOfEnquiry" value={formData.subjectOfEnquiry} onChange={handleChange} className="w-full px-3 py-2 text-sm bg-gray-50 dark:bg-neutral-900/50 border border-gray-200 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
                            <option value="">Select Service</option>
                            <option value="Machinery & Equipment">Machinery & Equipment</option>
                            <option value="Site Visit Consultation">Site Visit Consultation</option>
                            <option value="Marketing & Buyback Support">Marketing & Buyback Support</option>
                            <option value="Subsidies & Bank Loans">Subsidies & Bank Loans</option>
                            <option value="Other Query">Other Query</option>
                          </select>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Message */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-700 dark:text-gray-300">Any additional details or questions?</label>
                <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Write your specific requirements here..." rows={3} className="w-full px-3 py-2 text-sm bg-gray-50 dark:bg-neutral-900/50 border border-gray-200 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none" />
              </div>

              {/* Security Question */}
              <div className="space-y-1 max-w-[200px]">
                <label className="text-xs font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2">
                   Security Question: What is 3 + 2? *
                </label>
                <input required type="text" name="securityAnswer" value={formData.securityAnswer} onChange={handleChange} placeholder="Your answer" className="w-full px-3 py-2 text-sm bg-gray-50 dark:bg-neutral-900/50 border border-gray-200 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" />
              </div>

              {/* Error Message */}
              {errorMsg && (
                <div className="text-red-500 text-xs bg-red-50 dark:bg-red-950/30 p-2 rounded border border-red-100 dark:border-red-900">
                  {errorMsg}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-4 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white rounded-xl text-sm font-bold shadow-md shadow-emerald-500/20 transition-all flex justify-center items-center gap-2 disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Submit Enquiry"
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
