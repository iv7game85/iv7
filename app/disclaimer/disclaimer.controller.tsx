"use client";

import { points } from "@/config/constants";
import {
  ArrowLeft,
  ChevronRight,
  ShieldAlert,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";

export default function DisclaimerController() {
  return (
    <main className="min-h-screen bg-[#070707] text-[#f6f1e9] selection:bg-[#f20d4d] selection:text-white">
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 py-12 lg:py-16 space-y-10">
        {/* Background Ambient Glow */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-[500px] -translate-x-1/2 rounded-full bg-[#f20d4d]/10 blur-[130px]" />

        {/* Breadcrumb & Header */}
        <section className="relative text-center space-y-4">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-[#8f8588]">
            <Link href="/" className="hover:text-[#ffc629] transition-colors">
              Home
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-[#ffc629]">Disclaimer</span>
          </div>

          <div className="inline-flex items-center gap-1.5 rounded-full border border-[#6c1731] bg-[#2b0b17] px-4 py-1.5 text-xs font-bold text-[#ffc629]">
            <ShieldCheck className="h-3.5 w-3.5" /> IMPORTANT LEGAL NOTICE
          </div>

          <h1 className="font-['Impact',sans-serif] text-4xl sm:text-6xl font-black uppercase tracking-tight text-white leading-tight">
            DISCLAIMER & <span className="text-[#ffc629]">TERMS OF USE</span>
          </h1>

          <p className="text-[#a59ca0] text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Please review these legal disclosures, territorial compliance rules,
            and responsible gaming warnings before downloading or playing on the
            IV7 App.
          </p>
        </section>

        {/* Warning Highlight Box */}
        <section className="relative overflow-hidden rounded-3xl border border-[#ffc629]/40 bg-gradient-to-r from-[#241a07] via-[#151006] to-[#241a07] p-6 sm:p-8 shadow-[0_0_30px_#ffc62915]">
          <div className="flex items-center gap-2.5 text-[#ffc629] font-['Impact',sans-serif] text-xl uppercase tracking-wide">
            <ShieldAlert className="h-6 w-6 text-[#ffc629] shrink-0" />{" "}
            Responsible Gaming Notice
          </div>
          <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[#ddd0d0]">
            IV7 games involve real money and the risk of financial loss. Play
            strictly for entertainment, never chase losses, and adhere to
            self-imposed daily budget caps. Minors under 18 years of age are
            strictly prohibited.
          </p>
        </section>

        {/* Disclaimer Points Stack */}
        <section className="space-y-4">
          {points.map((point, index) => {
            const Icon = point.icon;
            return (
              <div
                key={index}
                className="rounded-2xl border border-[#50152c] bg-[#12070b] p-6 sm:p-7 space-y-3 transition-colors hover:border-[#f20d4d]/60"
              >
                <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2.5">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#2b0b17] text-[#ffc629]">
                    <Icon className="h-4 w-4" />
                  </span>
                  {point.title}
                </h2>
                <p className="text-xs sm:text-sm text-[#a59ca0] leading-relaxed pl-10">
                  {point.content}
                </p>
              </div>
            );
          })}
        </section>

        {/* Legal Contact Card */}
        <section className="rounded-3xl border border-[#3b1221] bg-[#12070c] p-8 text-center space-y-4 shadow-xl">
          <h3 className="font-['Impact',sans-serif] text-2xl uppercase tracking-wide text-white">
            Compliance & Legal Inquiries
          </h3>
          <p className="text-[#8f8588] text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
            For questions regarding our platform disclaimer, privacy
            protections, or state eligibility, contact us directly via official
            customer support.
          </p>
          <div className="pt-2">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-[#50152c] bg-[#1a0810] px-6 py-2.5 text-xs font-bold text-[#f6f1e9] transition-all hover:border-[#f20d4d] hover:text-[#ffc629]"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> Return to Home
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
