"use client";
import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "motion/react";

export default function RegistrationFormClient({ type }: { type: "basic" | "advanced" | "offline-basic" | "offline-advanced" | "usa-basic" | "usa-advanced" }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const isAdvanced = type === "advanced" || type === "usa-advanced";
  const isUsa = type === "usa-basic" || type === "usa-advanced";
  
  const defaultAmount = isUsa ? (isAdvanced ? "97" : "39") : (isAdvanced ? "699" : "299");
  const currencySymbol = isUsa ? "$" : "₹";

  const amountParam = searchParams.get("amount") || defaultAmount;
  
  const paymentData = {
    name: searchParams.get("name") || "",
    email: searchParams.get("email") || "",
    phone: searchParams.get("phone") || "",
    payment_id: searchParams.get("payment_id") || "",
    order_id: searchParams.get("order_id") || "",
    amount: amountParam,
    payment_date: new Date().toLocaleDateString(),
  };

  const [formData, setFormData] = useState({
    whatsapp: paymentData.phone,
    altPhone: "",
    country: isUsa ? "United States" : "India",
    state: "",
    slot: "Morning (10 AM - 12 PM)",
    startDate: "",
    mushroom: "Oyster",
    experience: "Beginner",
    haveFarm: "No",
    farmSize: "",
    purpose: isAdvanced ? "Commercial Business / Startup" : "Hobby / Home Consumption",
    requirement: "",
    hearAbout: "Social Media",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    // Security Check: If no payment ID is present, redirect to training page
    if (!paymentData.payment_id || paymentData.payment_id === "NOT_PROVIDED") {
      router.push("/training");
    }
  }, [paymentData.payment_id, router]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/registration/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: type,
          payment: paymentData,
          form: formData
        }),
      });
      if (res.ok) {
        setSuccess(true);
      } else {
        alert("Failed to submit registration. Please contact support.");
      }
    } catch (err) {
      alert("Error submitting form.");
    } finally {
      setLoading(false);
    }
  };

  const handleWhatsAppShare = () => {
    const text = `*New Training Registration*\n\n*Course:* ${isAdvanced ? 'Advanced' : 'Basic'} Mushroom Farming\n*Name:* ${paymentData.name}\n*Email:* ${paymentData.email}\n*WhatsApp:* ${formData.whatsapp}\n*Amount:* ${currencySymbol}${paymentData.amount}\n*Payment ID:* ${paymentData.payment_id}\n*Time Slot:* ${formData.slot}\n*Experience:* ${formData.experience}\n*Mushroom:* ${formData.mushroom}`;
    window.open(`https://wa.me/919203544140?text=${encodeURIComponent(text)}`, "_blank");
  };

  if (!paymentData.payment_id) {
    return null; // Will redirect via useEffect
  }

  if (success) {
    return (
      <main className="relative flex flex-col items-center justify-center min-h-[100dvh] overflow-hidden bg-transparent p-4">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="backdrop-blur-xl bg-black/40 border border-white/20 p-8 rounded-3xl shadow-2xl max-w-md w-full text-center relative z-10">
          <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-white mb-2 drop-shadow-md">Registration Completed!</h2>
          <p className="text-gray-300 text-sm mb-6 drop-shadow-sm">
            Thank you for enrolling in the {isAdvanced ? "Advanced Commercial" : "Basic"} Mushroom Farming Training. We have sent a confirmation email to {paymentData.email}.
          </p>
          
          <button 
            onClick={handleWhatsAppShare}
            className="mb-6 px-4 py-2 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full text-xs font-bold transition-all shadow-lg flex items-center gap-2 mx-auto"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
               <path d="M12.031 0C5.385 0 0 5.385 0 12.031c0 2.128.553 4.195 1.603 6.012L.48 22.09l4.15-1.112c1.761.946 3.738 1.444 5.762 1.444h.001c6.643 0 12.029-5.384 12.029-12.029C22.42 5.56 17.034 0 12.031 0zm.001 20.404h-.001c-1.802 0-3.567-.485-5.114-1.403l-.367-.217-3.085.808.823-3.007-.238-.378a9.98 9.98 0 0 1-1.528-5.352c0-5.525 4.496-10.02 10.02-10.02 5.523 0 10.016 4.495 10.016 10.02 0 5.525-4.493 10.02-10.016 10.02zM17.53 14.4c-.302-.152-1.789-.884-2.066-.985-.276-.101-.478-.152-.679.152-.202.302-.781.985-.956 1.186-.176.202-.352.227-.654.076-.302-.152-1.277-.471-2.433-1.503-.898-.803-1.503-1.796-1.68-2.098-.176-.303-.019-.467.132-.618.136-.137.302-.352.453-.529.151-.176.202-.302.302-.503.101-.202.05-.378-.025-.529-.076-.152-.679-1.637-.931-2.242-.244-.593-.491-.513-.679-.523-.176-.008-.378-.008-.579-.008-.202 0-.529.076-.806.378-.276.302-1.056 1.033-1.056 2.518 0 1.485 1.082 2.919 1.233 3.12.152.202 2.128 3.245 5.156 4.546.72.311 1.282.496 1.721.635.723.23 1.381.197 1.902.12.585-.087 1.789-.731 2.041-1.439.252-.707.252-1.312.176-1.439-.076-.126-.277-.202-.579-.352z"/>
            </svg>
            Send Details to Owner (WhatsApp)
          </button>

          <Link href="/dashboard" className="inline-block py-2 px-6 bg-white/10 hover:bg-white/20 text-white rounded-lg text-sm font-semibold transition-all border border-white/20">
            Go to Home
          </Link>
        </motion.div>
      </main>
    );
  }

  return (
    <main className="relative flex flex-col items-center justify-center min-h-[100dvh] overflow-hidden bg-transparent py-10 px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="z-10 w-full max-w-2xl mx-auto backdrop-blur-xl bg-black/40 border border-white/20 p-6 sm:p-8 rounded-3xl shadow-2xl relative">
        
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center p-2 bg-green-500/20 rounded-full mb-3">
            <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-white drop-shadow-md">Payment Successful!</h2>
          <p className="text-sm text-gray-300 mt-1">Please complete your registration to secure your spot.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="bg-white/5 border border-white/10 rounded-xl p-4">
            <h3 className="text-sm font-semibold text-purple-300 mb-3 border-b border-white/10 pb-2">Payment Details (Auto-filled)</h3>
            <div className="grid grid-cols-2 gap-4 text-xs text-gray-300">
              <div><span className="text-gray-400 block mb-1">Name</span><p className="text-white font-medium bg-black/20 px-2 py-1 rounded">{paymentData.name}</p></div>
              <div><span className="text-gray-400 block mb-1">Email</span><p className="text-white font-medium bg-black/20 px-2 py-1 rounded truncate">{paymentData.email}</p></div>
              <div><span className="text-gray-400 block mb-1">Amount Paid</span><p className="text-green-400 font-bold bg-black/20 px-2 py-1 rounded">{currencySymbol}{paymentData.amount}</p></div>
              <div><span className="text-gray-400 block mb-1">Payment ID</span><p className="text-white font-mono bg-black/20 px-2 py-1 rounded truncate">{paymentData.payment_id}</p></div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-purple-300 mb-3 border-b border-white/10 pb-2">Personal Details</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">WhatsApp Number *</label>
                <input type="tel" name="whatsapp" required value={formData.whatsapp} onChange={handleChange} className="w-full px-3 py-2 text-sm bg-white/10 border border-white/20 rounded-lg text-white focus:ring-2 focus:ring-purple-400 focus:outline-none" />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">Alternate Phone (Optional)</label>
                <input type="tel" name="altPhone" value={formData.altPhone} onChange={handleChange} className="w-full px-3 py-2 text-sm bg-white/10 border border-white/20 rounded-lg text-white focus:ring-2 focus:ring-purple-400 focus:outline-none" />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">State / City *</label>
                <input type="text" name="state" required value={formData.state} onChange={handleChange} className="w-full px-3 py-2 text-sm bg-white/10 border border-white/20 rounded-lg text-white focus:ring-2 focus:ring-purple-400 focus:outline-none" />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">Country</label>
                <input type="text" name="country" required value={formData.country} onChange={handleChange} className="w-full px-3 py-2 text-sm bg-white/10 border border-white/20 rounded-lg text-white focus:ring-2 focus:ring-purple-400 focus:outline-none" />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-purple-300 mb-3 border-b border-white/10 pb-2">Training Preferences</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">Preferred Time Slot *</label>
                <select name="slot" required value={formData.slot} onChange={handleChange} className="w-full px-3 py-2 text-sm bg-white/10 border border-white/20 rounded-lg text-white [&>option]:bg-gray-900 focus:ring-2 focus:ring-purple-400 focus:outline-none">
                  <option>Morning (10 AM - 12 PM)</option>
                  <option>Afternoon (2 PM - 4 PM)</option>
                  <option>Evening (6 PM - 8 PM)</option>
                  <option>Flexible / Any</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">Preferred Start Date (Approx)</label>
                <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} className="w-full px-3 py-2 text-sm bg-white/10 border border-white/20 rounded-lg text-white focus:ring-2 focus:ring-purple-400 focus:outline-none [color-scheme:dark]" />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-purple-300 mb-3 border-b border-white/10 pb-2">Farming Information</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">Which mushroom do you want to learn? *</label>
                <select name="mushroom" required value={formData.mushroom} onChange={handleChange} className="w-full px-3 py-2 text-sm bg-white/10 border border-white/20 rounded-lg text-white [&>option]:bg-gray-900 focus:ring-2 focus:ring-purple-400 focus:outline-none">
                  <option>Oyster Mushroom</option>
                  <option>Button Mushroom</option>
                  {isAdvanced && <option>Milky Mushroom</option>}
                  <option>Multiple / All</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">Current Experience *</label>
                <select name="experience" required value={formData.experience} onChange={handleChange} className="w-full px-3 py-2 text-sm bg-white/10 border border-white/20 rounded-lg text-white [&>option]:bg-gray-900 focus:ring-2 focus:ring-purple-400 focus:outline-none">
                  <option>Complete Beginner</option>
                  <option>Hobbyist / Tried at home</option>
                  <option>Experienced Farmer</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">Do you already have a farm space? *</label>
                <select name="haveFarm" required value={formData.haveFarm} onChange={handleChange} className="w-full px-3 py-2 text-sm bg-white/10 border border-white/20 rounded-lg text-white [&>option]:bg-gray-900 focus:ring-2 focus:ring-purple-400 focus:outline-none">
                  <option>No, I am just exploring</option>
                  <option>Yes, small room/backyard</option>
                  <option>Yes, large land/shed</option>
                </select>
              </div>
              {isAdvanced && (
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">Main Purpose *</label>
                  <select name="purpose" required value={formData.purpose} onChange={handleChange} className="w-full px-3 py-2 text-sm bg-white/10 border border-white/20 rounded-lg text-white [&>option]:bg-gray-900 focus:ring-2 focus:ring-purple-400 focus:outline-none">
                    <option>Commercial Business / Startup</option>
                    <option>Adding to existing farm income</option>
                    <option>Export / Large Scale</option>
                    <option>Hobby / Self Consumption</option>
                  </select>
                </div>
              )}
            </div>
          </div>

          <div className="pt-4 mt-6 border-t border-white/10">
            <button type="submit" disabled={loading} className="w-full py-4 px-4 bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-sm font-bold transition-all shadow-lg hover:shadow-purple-500/25 disabled:opacity-50">
              {loading ? "Submitting..." : "Submit Registration Details"}
            </button>
            <p className="text-[10px] text-gray-400 text-center mt-3 flex items-center justify-center gap-1">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" /></svg>
              Your data is encrypted and secure.
            </p>
          </div>
        </form>
      </motion.div>
    </main>
  );
}
