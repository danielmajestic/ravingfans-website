import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "RavingFans.ai — AI-Powered Customer Acquisition for CPG Brands",
    template: "%s | RavingFans.ai",
  },
  description:
    "We turn your customers into raving fans. AI-powered customer acquisition engines for CPG brands that want exponential growth.",
  openGraph: {
    title: "RavingFans.ai — We Turn Your Customers Into Raving Fans",
    description:
      "AI-powered customer acquisition engines for CPG brands that want exponential growth — not incremental.",
    url: "https://ravingfans.ai",
    siteName: "RavingFans.ai",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
