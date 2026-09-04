import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MyceliumBackground } from "@/components/MyceliumBackground";
import { AIChatWidget } from "@/components/AIChatWidget";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";
import { StickyJoinTrainingButton } from "@/components/StickyJoinTrainingButton";
import { FloatingBottomMenu } from "@/components/FloatingBottomMenu";
import "@/app/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf5ff" },
    { media: "(prefers-color-scheme: dark)", color: "#1C1936" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://organicmushroomsfarm.com"),
  title: {
    default: "Organic Mushrooms Farm | Setup, Spawn & Commercial Training",
    template: "%s | Organic Mushrooms Farm",
  },
  description: "Buy premium organic mushroom spawn, join commercial mushroom farming training online/offline, get fresh & dry mushrooms. Complete turnkey mushroom setup available Pan India, USA, Australia.",
  keywords: [
    "mushroom farming training",
    "turnkey mushroom setup",
    "mushroom spawn seed",
    "button mushroom project cost",
    "organic mushroom farm jabalpur",
    "commercial mushroom SOP"
  ],
  authors: [{ name: "Organic Mushrooms Farm Agronomy Team" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://organicmushroomsfarm.com",
    title: "Organic Mushrooms Farm | Turnkey Projects & Training",
    description: "Commercial mushroom cultivation methodology, Phase-II compost units, and certified agri-training.",
    siteName: "Organic Mushrooms Farm",
    images: [
      {
        url: "https://res.cloudinary.com/dtpktdkqw/image/upload/v1777378071/IMG_6265_svucsm.jpg",
        width: 1200,
        height: 630,
        alt: "Organic Mushrooms Farm Commercial Facility",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Organic Mushrooms Farm | Commercial Setup & Training",
    description: "Commercial mushroom training and turnkey setup with 120% average verified annual ROI.",
    images: ["https://res.cloudinary.com/dtpktdkqw/image/upload/v1777378071/IMG_6265_svucsm.jpg"],
  },
  alternates: {
    canonical: "https://organicmushroomsfarm.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} scroll-smooth`}>
      <head>
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="preconnect" href="https://api.open-meteo.com" />
      </head>
      <body className="antialiased min-h-screen flex flex-col relative overflow-x-hidden">
        {/* Animated Canvas Background */}
        <MyceliumBackground />

        {/* Global Navigation */}
        <Navbar />

        {/* Main Content Area */}
        <main className="flex-grow relative z-10 pt-[84px] md:pt-[96px]">
          {children}
        </main>

        {/* Global Footer */}
        <Footer />

        {/* ================= FLOATING STACK LAYER ================= */}
        {/* Left Side: AI Chat & Join Training Modal */}
        <div className="fixed left-3 md:left-[30px] flex flex-col gap-2 md:gap-4 items-start pointer-events-none transition-all duration-300 ease-out bottom-[65px] md:bottom-[20px] z-[99999]">
          <div className="pointer-events-auto">
            <AIChatWidget />
          </div>
          <div className="pointer-events-auto">
            <div className="hidden md:block">
              <StickyJoinTrainingButton size="normal" />
            </div>
            <div className="md:hidden">
              <StickyJoinTrainingButton size="small" />
            </div>
          </div>
        </div>

        {/* Right Side: WhatsApp Floating Action */}
        <WhatsAppWidget />

        {/* Bottom Mobile Scrollable Dock (Zero overlap with floating widgets) */}
        <FloatingBottomMenu />
      </body>
    </html>
  );
}
