"use client";

import { LEGAL_LINKS, NAV_LINKS } from "@/config/constants";
import { ArrowUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import iv7 from "../../public/iv7.jpeg";

export default function Footer() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden border-t border-[#1b1215] bg-[#070707] text-[#9e9497]">
      {/* Top Accent Gradient Line */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#f20d4d] to-transparent opacity-60" />

      {/* Ambient Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-[600px] -translate-x-1/2 rounded-full bg-[#f20d4d]/10 blur-[120px]" />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center px-6 pt-16 pb-12 text-center">
        {/* Brand App Icon Card */}
        <Link
          href="/"
          className="group relative inline-flex items-center justify-center transition-transform duration-300 hover:scale-105"
        >
          <div className="absolute -inset-1 rounded-[14px] bg-gradient-to-r from-[#f20d4d]/30 to-[#ffc629]/20 blur-md opacity-70 transition-opacity duration-300 group-hover:opacity-100" />

          <div className="relative flex h-20 w-20 items-center justify-center overflow-hidden rounded-[10px] border border-[#50152c] bg-[#12070b] p-2 shadow-[0_0_25px_rgba(242,13,77,0.3)] transition-all duration-300 group-hover:border-[#f20d4d]">
            <Image
              src={iv7}
              alt="IV7 Game"
              width={64}
              height={64}
              className="h-full w-full rounded-[6px] object-cover"
            />
          </div>
        </Link>

        {/* Tagline */}
        <p className="mt-6 max-w-md text-sm font-normal leading-relaxed text-[#a8a0a5] sm:text-base">
          An informational guide to IV7 Games, Android access, registration,
          account safety, and responsible gaming.
        </p>

        {/* Main Navigation Links */}
        <nav className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide text-[#cfc7cb] transition-all duration-200 hover:bg-[#1a080f] hover:text-[#ffc629] hover:shadow-[0_0_15px_#f20d4d20]"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Trust Badges */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#2c131d] bg-[#120509]/80 px-4 py-1.5 text-xs font-medium text-[#b5a9ad] shadow-inner">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#f20d4d]/15 text-[10px] font-bold text-[#f20d4d]">
              18+
            </span>
            <span>Strictly 18+</span>
          </div>
        </div>

        {/* Legal & Policy Links */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[12px] text-[#80777b]">
          {LEGAL_LINKS.map((legal) => (
            <Link
              key={legal.name}
              href={legal.href}
              className="transition-colors duration-200 hover:text-[#d1c7c9]"
            >
              {legal.name}
            </Link>
          ))}
        </div>

        {/* Divider */}
        <div className="my-8 h-[1px] w-full max-w-xl bg-gradient-to-r from-transparent via-[#2a131b] to-transparent" />

        {/* Copyright */}
        <p className="text-xs text-[#6e6569]">
          © {new Date().getFullYear()} IV7 GAME. All Rights Reserved.
        </p>
      </div>

      {/* Floating Scroll-to-Top Button */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className={`fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-tr from-[#d9043d] to-[#ff2b6d] text-white shadow-[0_4px_25px_rgba(242,13,77,0.45)] transition-all duration-300 hover:scale-110 active:scale-95 ${
          showScroll
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-10 opacity-0"
        }`}
      >
        <ArrowUp className="h-5 w-5" strokeWidth={2.5} />
      </button>
    </footer>
  );
}
