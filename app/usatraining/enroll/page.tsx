import USATrainingPayment from "@/components/USATrainingPayment";
import Link from "next/link";
import { trainingContent } from "@/lib/training-content";

export default function USATrainingEnrollPage({ searchParams }: { searchParams: { [key: string]: string | undefined } }) {
  const planId = searchParams.plan || "basic-us";
  const plan = trainingContent.us.online.find((p) => p.id === planId);

  if (!plan) {
    return (
      <div className="min-h-screen flex items-center justify-center dark:bg-gray-900 text-gray-500">
        Invalid Plan Selected. <Link href="/usatraining" className="text-blue-600 ml-2">Go back</Link>
      </div>
    );
  }

  return (
    <main className="relative flex flex-col items-center justify-center min-h-[100dvh] overflow-hidden bg-[#f8f9fc] dark:bg-gray-900">
      
      {/* Soft gradient background matching video */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-blue-100/50 to-transparent dark:from-blue-900/20"></div>
        <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-cyan-200/40 dark:bg-cyan-900/20 rounded-full mix-blend-multiply filter blur-[100px] opacity-60"></div>
      </div>

      <div className="z-10 w-full max-w-sm mx-auto px-4 py-8 flex flex-col h-[100dvh]">
        
        {/* Header matching video */}
        <div className="flex justify-between items-center mb-6">
          <Link href="/usatraining" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors flex items-center gap-1 text-sm font-medium">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back
          </Link>
          
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Organic Mushroom Farm</span>
          </div>
        </div>

        {/* Floating Card Content */}
        <div className="flex-grow flex flex-col justify-center">
           {/* Decorative Top Badge */}
           <div className="flex justify-center mb-[-12px] relative z-20">
             <span className="bg-yellow-100 text-yellow-800 text-[10px] font-bold px-3 py-1 rounded-full border border-yellow-200 shadow-sm uppercase tracking-wider flex items-center gap-1">
               ✨ ACCESS
             </span>
           </div>

           <USATrainingPayment title={plan.title} amount={plan.price} />
        </div>

        {/* Footer */}
        <div className="text-center mt-6 flex flex-col items-center justify-center gap-2">
          <p className="text-[10px] text-gray-500 dark:text-gray-400 flex items-center justify-center gap-1 font-medium tracking-wide uppercase">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
            100% SECURED BY PAYPAL
          </p>
        </div>

      </div>
    </main>
  );
}
