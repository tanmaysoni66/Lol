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
    default: "Organic Mushroom Farm | Mushroom Farming, Training & Spawn",
    template: "%s | Organic Mushroom Farm",
  },
  description: "Organic Mushroom Farm provides mushroom farming training, commercial farm setup guidance and quality mushroom spawn for Button, Oyster and Milky mushroom cultivation.",
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
    url: "https://organicmushroomsfarm.com/",
    title: "Organic Mushroom Farm | Mushroom Farming, Training & Spawn",
    description: "Organic Mushroom Farm provides mushroom farming training, commercial farm setup guidance and quality mushroom spawn for Button, Oyster and Milky mushroom cultivation.",
    siteName: "Organic Mushroom Farm",
    images: [
      {
        url: "https://res.cloudinary.com/dnw4fpk2y/image/upload/c_fill,g_auto,w_1200,h_630,f_auto,q_auto/v1788255569/organic-button-mushroom-farm-setup_kwlyo0.png",
        width: 1200,
        height: 630,
        alt: "Organic Button Mushroom Farm Setup - Organic Mushroom Farm",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Organic Mushroom Farm | Mushroom Farming, Training & Spawn",
    description: "Organic Mushroom Farm provides mushroom farming training, commercial farm setup guidance and quality mushroom spawn for Button, Oyster and Milky mushroom cultivation.",
    images: ["https://res.cloudinary.com/dnw4fpk2y/image/upload/c_fill,g_auto,w_1200,h_630,f_auto,q_auto/v1788255569/organic-button-mushroom-farm-setup_kwlyo0.png"],
  },
  alternates: {
    canonical: "https://organicmushroomsfarm.com/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  }
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
        <div className="fixed left-3 md:left-[30px] flex flex-col gap-2 md:gap-4 items-start pointer-events-none transition-all duration-300 ease-out bottom-[85px] md:bottom-[20px] z-[99999]">
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
