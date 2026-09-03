import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { BottomNav } from '@/components/layout/BottomNav';

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
      <body className={`${inter.variable} ${poppins.variable} font-sans min-h-screen flex flex-col pb-24`}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <BottomNav />
      </body>
    </html>
  );
}
