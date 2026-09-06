"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "motion/react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export default function UsaCheckoutClient({ type }: { type: "usa-basic" | "usa-advanced" }) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const planDetails: Record<string, { amount: number, title: string }> = {
    "usa-basic": { amount: 39, title: "Basic Cultivation Mushroom Training" },
    "usa-advanced": { amount: 97, title: "Advanced Commercial Mushroom Training" },
  };

  const currentPlan = planDetails[type] || planDetails["usa-basic"];
  const amount = currentPlan.amount;
  const title = currentPlan.title;
  
  const isAdvanced = type === "usa-advanced";
  const themeColor = isAdvanced ? "cyan" : "blue";
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const isFormValid = formData.name && formData.email && formData.phone;

  const handleApprove = (data: any, actions: any) => {
    return actions.order.capture().then((details: any) => {
      const query = new URLSearchParams({
        name: formData.name || details.payer.name.given_name,
        email: formData.email || details.payer.email_address,
        phone: formData.phone,
        payment_id: details.id,
        order_id: data.orderID,
        amount: amount.toString(),
      }).toString();
      
      router.push(`/training/${type}/register?${query}`);
    });
  };

  return (
    <main className="relative flex flex-col items-center justify-center min-h-[100dvh] overflow-hidden bg-transparent">
      <div className="z-10 w-full max-w-sm mx-auto px-4 py-8 flex flex-col h-[100dvh]">
        <div className="flex justify-between items-center mb-6">
          <Link href="/training" className="text-gray-300 hover:text-white transition-colors flex items-center gap-1 text-sm font-medium drop-shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back
          </Link>
        </div>

        <div className="flex-grow flex flex-col justify-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-sm mx-auto backdrop-blur-xl bg-black/40 border border-white/20 p-6 rounded-2xl shadow-2xl relative z-10">
            <h2 className="text-xl font-bold text-center mb-1 text-white drop-shadow-md">
              Enroll in Training
            </h2>
            <p className={`text-xs text-center text-${themeColor}-300 mb-6 font-semibold drop-shadow-md`}>
              {title} - ${amount}
            </p>

            <form className="space-y-4 mb-6">
              <div>
                <label className="block text-xs font-medium text-gray-200 mb-1 drop-shadow-sm">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className={`w-full px-3 py-2 text-sm bg-white/10 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-${themeColor}-400 transition-all text-white placeholder-gray-400 backdrop-blur-sm`}
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-200 mb-1 drop-shadow-sm">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  className={`w-full px-3 py-2 text-sm bg-white/10 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-${themeColor}-400 transition-all text-white placeholder-gray-400 backdrop-blur-sm`}
                  placeholder="Enter mobile number"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-200 mb-1 drop-shadow-sm">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className={`w-full px-3 py-2 text-sm bg-white/10 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-${themeColor}-400 transition-all text-white placeholder-gray-400 backdrop-blur-sm`}
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </form>

            <div className={`transition-all duration-300 ${!isFormValid ? 'opacity-50 pointer-events-none' : 'opacity-100'}`}>
              {!isFormValid && (
                <p className="text-[10px] text-gray-300 text-center mb-2 font-medium">Please fill all details to enable payment.</p>
              )}
              
              <PayPalScriptProvider options={{ 
                clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || "test",
                currency: "USD",
                intent: "capture"
              }}>
                <PayPalButtons
                  style={{ layout: "vertical", shape: "rect", color: "blue", label: "pay" }}
                  createOrder={(data, actions) => {
                    return actions.order.create({
                      purchase_units: [
                        {
                          amount: {
                            value: amount.toString(),
                            currency_code: "USD"
                          },
                          description: title
                        }
                      ],
                      intent: "CAPTURE"
                    });
                  }}
                  onApprove={handleApprove}
                  onCancel={() => {
                    router.push(`/training/${type}/cancel`);
                  }}
                  onError={(err) => {
                    console.error("PayPal Error:", err);
                    alert("Payment failed or was cancelled. Please try again.");
                  }}
                />
              </PayPalScriptProvider>
            </div>
          </motion.div>
        </div>

        <div className="text-center mt-6 flex flex-col items-center justify-center gap-2">
          <p className="text-[10px] text-gray-300 flex items-center justify-center gap-1 font-medium tracking-wide uppercase drop-shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-gray-300" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
            SECURE PAYMENTS BY PAYPAL
          </p>
        </div>
      </div>
    </main>
  );
}
