import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import type { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/next";

import { SITE_CONFIG } from "../config/constants";
import Footer from "./components/footer";
import Header from "./components/header";
import "./globals.css";

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: SITE_CONFIG.title,
    template: "%s | IV7 Games",
  },
  description: SITE_CONFIG.description,
  keywords: [...SITE_CONFIG.keywords],
  applicationName: SITE_CONFIG.name,
  authors: [{ name: SITE_CONFIG.publisher }],
  creator: SITE_CONFIG.publisher,
  publisher: SITE_CONFIG.publisher,
  category: "gaming",

  openGraph: {
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url + "/",
    siteName: SITE_CONFIG.name,
    type: "website",
    locale: "en_IN",
    images: [{ url: SITE_CONFIG.ogImage, alt: "IV7 Games logo" }],
  },

  alternates: {
    canonical: SITE_CONFIG.url + "/",
  },

  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    images: [SITE_CONFIG.ogImage],
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
        <Analytics />
        {GA_ID ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){window.dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
            </Script>
          </>
        ) : null}
      </body>
    </html>
  );
}
