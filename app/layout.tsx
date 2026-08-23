import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import type { ReactNode } from "react";

import { SITE_URL } from "../config/constants";
import Footer from "./components/footer";
import Header from "./components/header";
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
  metadataBase: new URL(SITE_URL),

  title: "IV7 Games – Official IV7 Game App & Download Guide",

  description:
    "Official guide for IV7 Game app. Download the latest IV7 APK, register, login, claim daily bonus rewards, and play color prediction & casino games securely.",

  keywords: [
    "IV7",
    "IV7 Game",
    "IV7 Games",
    "IV7 APK",
    "IV7 APK Download",
    "IV7 App",
    "IV7 Login",
    "IV7 Register",
    "IV7 Download",
    "IV7 Official",
    "IV7 Prediction Game",
  ],

  openGraph: {
    title: "IV7 Games – Official IV7 Game App & Download Guide",
    description:
      "Official guide for IV7 Game app. Download the latest IV7 APK, register, login, claim daily bonus rewards, and play color prediction & casino games securely.",
    url: SITE_URL + "/",
    siteName: "IV7 Games",
    type: "website",
    locale: "en_IN",
  },

  twitter: {
    card: "summary_large_image",
    title: "IV7 Games – Official IV7 Game App & Download Guide",
    description:
      "Official guide for IV7 Game app. Download the latest IV7 APK, register, login, claim daily bonus rewards, and play color prediction & casino games securely.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen bg-[#070707] text-[#f6f1e9] font-sans antialiased">
        <div className="flex min-h-screen flex-col justify-between">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
