import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { SwiperLoader } from "@/components/ui/swiper-loader";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "XMB Group AG | Ihr Partner für IT-Dienstleistungen",
  description: "XMB Group AG - Schweizer IT Service Provider für IT Contracting, Cyber Security und Software Development. Qualität und Präzision in jedem Projekt.",
  keywords: ["IT Contracting", "Cyber Security", "Software Development", "Schweiz", "IT Dienstleistungen"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <SwiperLoader />
        <Script src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js" strategy="beforeInteractive" />
        <Navbar />
        <div
          className="transition-all duration-300"
          style={{
            marginLeft: "var(--sidebar-width, 90px)",
          }}
        >
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
