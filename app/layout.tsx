import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { BottomNav } from '@/components/layout/BottomNav';
import { AIChatWidget } from '@/components/AIChatWidget';
import { WhatsAppWidget } from '@/components/WhatsAppWidget';
import { StickyJoinTrainingButton } from '@/components/StickyJoinTrainingButton';
import { MyceliumBackground } from '@/components/MyceliumBackground';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Organic Mushrooms Farm | Setup, Spawn & Training',
  description: 'Buy premium organic mushroom spawn, join commercial mushroom farming training online/offline, get fresh & dry mushrooms.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased min-h-screen relative flex flex-col pb-24`}>
        {/* Render background canvas absolutely behind everything (z-0) */}
        <MyceliumBackground />
        
        {/* Render all page content on top of the background (z-10) */}
        <div className="relative z-10 flex-1 flex flex-col">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
        
        <BottomNav />
        {/* Left Side Floating Group (AI Chat & Training Button) */}
        <div className="fixed left-3 md:left-[30px] flex flex-col gap-2 md:gap-4 items-start pointer-events-none transition-all duration-300 ease-out bottom-[65px] md:bottom-[20px] z-[99999]">
          <div className="pointer-events-auto">
            <AIChatWidget />
          </div>
          
          <div className="flex-col gap-1.5 md:gap-3 items-start pointer-events-auto flex">
            {/* Desktop Stack */}
            <div className="hidden md:flex flex-col gap-3 items-start">
              <div className="w-[140px] md:w-auto">
                <StickyJoinTrainingButton size="normal" />
              </div>
            </div>
            {/* Mobile Stack */}
            <div className="h-[30px] w-auto min-w-[100px] max-w-[130px] md:hidden relative z-[99998]">
              <StickyJoinTrainingButton size="small" />
            </div>
          </div>
        </div>

        {/* Right Side Floating Group (WhatsApp) */}
        <WhatsAppWidget />
      </body>
    </html>
  );
}
