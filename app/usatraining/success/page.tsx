import Link from "next/link";

export default function USATrainingSuccessPage() {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-[100dvh] overflow-hidden bg-gray-50 dark:bg-gray-900">
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-green-300 dark:bg-green-900/30 rounded-full mix-blend-multiply filter blur-[100px] opacity-50"></div>
      </div>

      <div className="z-10 w-full max-w-sm mx-auto p-6 backdrop-blur-xl bg-white/40 dark:bg-black/40 border border-white/20 dark:border-white/10 rounded-3xl shadow-2xl text-center space-y-6">
        
        <div className="mx-auto w-16 h-16 bg-green-100 dark:bg-green-900/40 rounded-full flex items-center justify-center shadow-inner">
          <svg className="w-8 h-8 text-green-600 dark:text-green-400 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Payment Successful!</h1>
          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
            Thank you for enrolling in the USA Organic Mushroom Training program. A confirmation email has been sent to you.
          </p>
        </div>

        <Link href="/" className="inline-block w-full py-2.5 px-4 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-lg text-sm font-medium transition-transform hover:scale-[1.02] active:scale-[0.98] shadow-lg">
          Return to Home
        </Link>
      </div>
    </main>
  );
}
