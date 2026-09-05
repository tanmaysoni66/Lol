"use client";

import { useState } from "react";
import Script from "next/script";
import { useRouter } from "next/navigation";

export default function TrainingPayment({ title, amount }: { title: string; amount: number }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const CURRENCY = "INR";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 1. Create order on our server
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

      // 2. Open Razorpay Checkout Modal
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, // Use NEXT_PUBLIC for client
        amount: order.amount,
        currency: order.currency,
        name: "Organic Mushroom Farm",
        description: "Mushroom Cultivation Training",
        image: "https://res.cloudinary.com/dnw4fpk2y/image/upload/q_auto,f_auto/v1785226016/IMG-20260728-WA0000-removebg-preview_bztf7y.png",
        order_id: order.id,
        notes: {
          name: formData.name,
        },
        handler: async function (response: any) {
          // Send verification request to our backend (optional, webhook handles emails)
          // Redirect to success page
          router.push("/training/success");
        },
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.phone,
        },
        theme: {
          color: "#7e22ce", // Match our accent
        },
        modal: {
          ondismiss: async function () {
            // Send cancel explicitly since user closed modal
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
            router.push("/training/cancel");
          },
        },
      };

      const rzp = new (window as any).Razorpay(options);
      rzp.on("payment.failed", function (response: any) {
        router.push("/training/cancel");
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
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
      <div className="w-full max-w-sm mx-auto backdrop-blur-xl bg-white/10 dark:bg-black/40 border border-white/20 dark:border-white/10 p-6 rounded-2xl shadow-2xl relative z-10">
        <h2 className="text-xl font-bold text-center mb-1 text-gray-900 dark:text-gray-100">
          Professional Training
        </h2>
        <p className="text-xs text-center text-purple-600 dark:text-purple-400 mb-6 font-semibold">
          • {title}
        </p>

        <form onSubmit={handlePayment} className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-gray-700 dark:text-gray-200 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-3 py-2 text-sm bg-white/50 dark:bg-black/50 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all text-gray-900 dark:text-white placeholder-gray-400"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-700 dark:text-gray-200 mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-3 py-2 text-sm bg-white/50 dark:bg-black/50 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all text-gray-900 dark:text-white placeholder-gray-400"
              placeholder="john@example.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-700 dark:text-gray-200 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              required
              className="w-full px-3 py-2 text-sm bg-white/50 dark:bg-black/50 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all text-gray-900 dark:text-white placeholder-gray-400"
              placeholder="+91 98765 43210"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="pt-2">
            <div className="flex justify-between items-center mb-4 text-sm font-semibold text-gray-900 dark:text-white">
              <span>Total Fees</span>
              <span>₹{amount}</span>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2.5 px-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-lg text-sm font-medium transition-all transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </span>
              ) : (
                "Pay Now"
              )}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
