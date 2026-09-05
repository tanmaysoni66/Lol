import Link from "next/link";

export default function TrainingCancelPage() {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-[100dvh] overflow-hidden bg-gray-50 dark:bg-gray-900">
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-red-300 dark:bg-red-900/30 rounded-full mix-blend-multiply filter blur-[100px] opacity-50"></div>
      </div>

      <div className="z-10 w-full max-w-sm mx-auto p-6 backdrop-blur-xl bg-white/40 dark:bg-black/40 border border-white/20 dark:border-white/10 rounded-3xl shadow-2xl text-center space-y-6">
        
        <div className="mx-auto w-16 h-16 bg-red-100 dark:bg-red-900/40 rounded-full flex items-center justify-center shadow-inner">
          <svg className="w-8 h-8 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>

        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Payment Cancelled</h1>
          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
            The payment process was not completed. If you faced any issues, our team is here to help.
          </p>
        </div>

        <div className="space-y-3">
          <Link href="/training" className="inline-block w-full py-2.5 px-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg text-sm font-medium transition-transform hover:scale-[1.02] active:scale-[0.98] shadow-lg">
            Try Again
          </Link>
          <Link href="/" className="inline-block w-full py-2.5 px-4 bg-transparent border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200 rounded-lg text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            Return to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
