"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export default function USATrainingPayment({ title, amount }: { title: string; amount: number }) {
  const router = useRouter();
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [errorMsg, setErrorMsg] = useState("");

  const CURRENCY = "USD";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrorMsg("");
  };

  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.phone) {
      setErrorMsg("Please fill all details before proceeding.");
      return false;
    }
    return true;
  };

  return (
    <div className="w-full max-w-sm mx-auto backdrop-blur-xl bg-white/10 dark:bg-black/40 border border-white/20 dark:border-white/10 p-6 rounded-2xl shadow-2xl relative z-10">
      <h2 className="text-xl font-bold text-center mb-1 text-gray-900 dark:text-gray-100">
        USA Professional Training
      </h2>
      <p className="text-xs text-center text-blue-600 dark:text-blue-400 mb-4 font-semibold">
        • {title}
      </p>

      <div className="space-y-4 mb-4">
        <div>
          <label className="block text-xs font-medium text-gray-700 dark:text-gray-200 mb-1">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            required
            className="w-full px-3 py-2 text-sm bg-white/50 dark:bg-black/50 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-gray-900 dark:text-white placeholder-gray-400"
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
            className="w-full px-3 py-2 text-sm bg-white/50 dark:bg-black/50 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-gray-900 dark:text-white placeholder-gray-400"
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
            className="w-full px-3 py-2 text-sm bg-white/50 dark:bg-black/50 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-gray-900 dark:text-white placeholder-gray-400"
            placeholder="+1 234 567 8900"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        {errorMsg && <p className="text-xs text-red-500 text-center">{errorMsg}</p>}

        <div className="flex justify-between items-center text-sm font-semibold text-gray-900 dark:text-white pb-2">
          <span>Total Fees</span>
          <span>${amount}</span>
        </div>
      </div>

      <PayPalScriptProvider
        options={{
          clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || "sb",
          currency: CURRENCY,
          intent: "capture",
        }}
      >
        <PayPalButtons
          style={{ layout: "vertical", shape: "rect", color: "blue", label: "pay", height: 40 }}
          onClick={(data, actions) => {
            if (!validateForm()) {
              return actions.reject();
            }
            return actions.resolve();
          }}
          createOrder={async () => {
            const res = await fetch("/api/paypal/create-order", {
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
            return order.id;
          }}
          onApprove={async (data, actions) => {
            const res = await fetch("/api/paypal/capture-order", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                orderID: data.orderID,
                amount: amount,
                currency: CURRENCY,
                name: formData.name,
                email: formData.email,
              }),
            });
            const details = await res.json();
            if (details.success) {
              router.push("/usatraining/success");
            } else {
              alert("Payment capture failed. Please try again or contact support.");
              router.push("/usatraining/cancel");
            }
          }}
          onCancel={async (data) => {
            await fetch("/api/paypal/cancel", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                amount: amount,
                currency: CURRENCY,
                name: formData.name,
                email: formData.email,
              }),
            });
            router.push("/usatraining/cancel");
          }}
          onError={(err) => {
            console.error("PayPal Error:", err);
            router.push("/usatraining/cancel");
          }}
        />
      </PayPalScriptProvider>
    </div>
  );
}
