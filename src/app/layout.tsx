import type { Metadata } from "next";
import { Inter, Poppins, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const montserrat = Montserrat({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MRM - Premium Roofing & Steel Solutions in Kenya",
  description: "Kenya's trusted roofing and steel solutions partner. Premium mabati, roofing systems, steel products, and water solutions engineered for durability and performance.",
  keywords: ["mabati kenya", "roofing sheets kenya", "best roofing company", "steel products kenya", "roofing materials", "water tanks kenya"],
  openGraph: {
    title: "MRM - Premium Roofing & Steel Solutions",
    description: "Kenya's trusted roofing and steel solutions partner",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} ${montserrat.variable} font-sans`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
