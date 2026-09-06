"use client";
import { useState } from "react";
import Script from "next/script";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "motion/react";

export default function TrainingCheckoutClient({ type }: { type: "basic" | "advanced" | "offline-basic" | "offline-advanced" }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const planDetails: Record<string, { amount: number, title: string }> = {
    "basic": { amount: 299, title: "Basic Mushroom Farming" },
    "advanced": { amount: 699, title: "Advanced Commercial Cultivation" },
    "offline-basic": { amount: 3000, title: "Standard Button Mushroom Workshop" },
    "offline-advanced": { amount: 6000, title: "Master Commercial Workshop" },
  };

  const currentPlan = planDetails[type] || planDetails["basic"];
  const amount = currentPlan.amount;
  const title = currentPlan.title;
  const CURRENCY = "INR";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/razorpay/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: amount,
          currency: CURRENCY,
          name: formData.name,
          email: formData.email,
        }),
      });

      const order = await res.json();
      if (order.error) {
        alert("Failed to initiate payment. Check server logs.");
        setLoading(false);
        return;
      }

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: order.currency,
        name: "Organic Mushroom Farm",
        description: `${title} Training`,
        image: "https://res.cloudinary.com/dnw4fpk2y/image/upload/q_auto,f_auto/v1785226016/IMG-20260728-WA0000-removebg-preview_bztf7y.png",
        order_id: order.id,
        notes: {
          name: formData.name,
          type: type,
        },
        handler: async function (response: any) {
          const query = new URLSearchParams({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            payment_id: response.razorpay_payment_id,
            order_id: response.razorpay_order_id,
            amount: amount.toString(),
          }).toString();
          
          router.push(`/training/${type}/register?${query}`);
        },
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.phone,
        },
        theme: {
          color: "#7e22ce",
        },
        modal: {
          ondismiss: async function () {
            await fetch("/api/razorpay/cancel", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                amount: amount,
                currency: CURRENCY,
                name: formData.name,
                email: formData.email,
              }),
            });
            router.push(`/training/${type}/cancel`);
          },
        },
      };

      const rzp = new (window as any).Razorpay(options);
      rzp.on("payment.failed", function () {
        router.push(`/training/${type}/cancel`);
      });
      rzp.open();
    } catch (error) {
      console.error("Payment failed", error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="relative flex flex-col items-center justify-center min-h-[100dvh] overflow-hidden bg-transparent">
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
      
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
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-sm mx-auto backdrop-blur-xl bg-black/30 border border-white/20 p-6 rounded-2xl shadow-2xl relative z-10">
            <h2 className="text-xl font-bold text-center mb-1 text-white drop-shadow-md">
              Enroll in Training
            </h2>
            <p className="text-xs text-center text-purple-300 mb-6 font-semibold drop-shadow-md">
              {title} - ₹{amount}
            </p>

            <form onSubmit={handlePayment} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-gray-200 mb-1 drop-shadow-sm">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-3 py-2 text-sm bg-white/10 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all text-white placeholder-gray-400 backdrop-blur-sm"
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
                  className="w-full px-3 py-2 text-sm bg-white/10 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all text-white placeholder-gray-400 backdrop-blur-sm"
                  placeholder="10-digit mobile number"
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
                  className="w-full px-3 py-2 text-sm bg-white/10 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all text-white placeholder-gray-400 backdrop-blur-sm"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 px-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-sm font-bold transition-all transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                >
                  {loading ? "Processing..." : "Complete Payment"}
                </button>
              </div>
            </form>
          </motion.div>
        </div>

        <div className="text-center mt-6 flex flex-col items-center justify-center gap-2">
          <p className="text-[10px] text-gray-300 flex items-center justify-center gap-1 font-medium tracking-wide uppercase drop-shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-gray-300" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
            100% SECURED BY RAZORPAY
          </p>
        </div>
      </div>
    </main>
  );
}
