import TrainingPayment from "@/components/TrainingPayment";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional Mushroom Cultivation Training | Organic Mushroom Farm",
  description: "Enroll in our comprehensive mushroom cultivation masterclass. Learn professional techniques, setup strategies, and maximize your ROI with our training program in India.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/training",
  },
};

export default function TrainingPage() {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-[100dvh] overflow-hidden bg-gray-50 dark:bg-gray-900">
      {/* Background Blurs and Shapes */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-300 dark:bg-purple-900/30 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-indigo-300 dark:bg-indigo-900/30 rounded-full mix-blend-multiply filter blur-[120px] opacity-60 animate-pulse" style={{ animationDelay: "2s" }}></div>
      </div>

      {/* Main Content Area */}
      <div className="z-10 w-full px-4 pt-4 pb-8 flex flex-col items-center max-h-[100dvh] justify-center space-y-4">
        
        {/* Logo and Back Button Container */}
        <div className="w-full max-w-sm flex justify-between items-center px-2">
          <Link href="/" className="text-gray-500 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </Link>
          
          <div className="relative w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-md p-1 border border-purple-100 dark:border-purple-900/50">
            <Image
              src="https://res.cloudinary.com/dnw4fpk2y/image/upload/q_auto,f_auto/v1785226016/IMG-20260728-WA0000-removebg-preview_bztf7y.png"
              alt="Brand Logo"
              fill
              className="object-contain p-1"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <div className="w-5" /> {/* Empty div for centering logo */}
        </div>

        {/* Payment Component */}
        <TrainingPayment />

        {/* Trust Badges */}
        <div className="text-center">
          <p className="text-[10px] text-gray-500 dark:text-gray-400 flex items-center justify-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-green-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
            Secured by Razorpay. 100% Safe Payments.
          </p>
        </div>

      </div>
    </main>
  );
}
