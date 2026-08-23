"use client";

import { corePillars, DOWNLOAD_LINKS, GAMES_LIST } from "@/config/constants";
import {
  ChevronRight,
  Download,
  Flame,
  Rocket,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import Link from "next/link";

export default function AboutUsController() {
  return (
    <main className="min-h-screen bg-[#070707] text-[#f6f1e9] selection:bg-[#f20d4d] selection:text-white">
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 py-12 lg:py-16 space-y-12">
        {/* Ambient Glow */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-[550px] -translate-x-1/2 rounded-full bg-[#f20d4d]/10 blur-[130px]" />

        {/* Breadcrumb & Hero */}
        <section className="relative text-center space-y-4">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-[#8f8588]">
            <Link href="/" className="hover:text-[#ffc629] transition-colors">
              Home
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-[#ffc629]">About Us</span>
          </div>

          <div className="inline-flex items-center gap-1.5 rounded-full border border-[#6c1731] bg-[#2b0b17] px-4 py-1.5 text-xs font-bold text-[#ffc629]">
            <Sparkles className="h-3.5 w-3.5" /> PREMIUM MOBILE ENTERTAINMENT
            PORTAL
          </div>

          <h1 className="font-['Impact',sans-serif] text-4xl sm:text-6xl font-black uppercase tracking-tight text-white leading-tight">
            ABOUT <span className="text-[#ffc629]">IV7 GAME</span>
          </h1>

          <p className="text-[#a59ca0] text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            One comprehensive platform, endless ways to win. Engineered for
            performance, simplicity, and non-stop skill gaming entertainment.
          </p>
        </section>

        {/* Introduction / Vision */}
        <section className="rounded-3xl border border-[#50152c] bg-[#12070b] p-6 sm:p-8 space-y-4 leading-relaxed text-[#a59ca0] shadow-xl">
          <h2 className="font-['Impact',sans-serif] text-2xl uppercase tracking-wide text-white flex items-center gap-2.5">
            <Rocket className="h-6 w-6 text-[#ffc629]" /> The IV7 Vision
          </h2>
          <p>
            <strong className="text-white">IV7 Game</strong> is an online
            real-cash skill and prediction application crafted for players who
            value performance, fast round results, and diverse gaming modes.
            Designed with an intuitive interface, newcomers can jump straight
            into the action while seasoned players navigate features
            effortlessly.
          </p>
          <p>
            By consolidating Win Go, Aviator, casino slots, and classic card
            games under one lightweight APK, IV7 eliminates the need for
            multiple app installations—saving storage while providing instant
            24/7 UPI withdrawals.
          </p>
        </section>

        {/* 4 Core Pillars Grid */}
        <section className="space-y-6">
          <div className="text-center space-y-2">
            <span className="rounded-full border border-[#6c1731] bg-[#2b0b17] px-4 py-1.5 text-xs font-bold text-[#ffc629]">
              CORE VALUES
            </span>
            <h2 className="font-['Impact',sans-serif] text-3xl uppercase tracking-wide text-white">
              Why Players Choose IV7
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {corePillars.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-[#50152c] bg-[#12070b] p-6 space-y-3 transition-all hover:border-[#f20d4d]/60 hover:-translate-y-0.5"
                >
                  <div className="inline-flex rounded-xl bg-[#2b0b17] p-3 text-[#ffc629]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-['Impact',sans-serif] text-xl tracking-wide text-white uppercase">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#a59ca0] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Game Collection Grid */}
        <section className="rounded-3xl border border-[#50152c] bg-[#12070b] p-6 sm:p-8 space-y-6 shadow-xl">
          <div className="space-y-2">
            <h2 className="font-['Impact',sans-serif] text-2xl uppercase tracking-wide text-white flex items-center gap-2.5">
              <Flame className="h-6 w-6 text-[#ffc629]" /> Diverse Game
              Collection
            </h2>
            <p className="text-xs sm:text-sm text-[#a59ca0] leading-relaxed">
              Explore our full suite of prediction modes, multiplier crash
              games, live tables, and skill cards:
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {GAMES_LIST.map((game, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-[#3b1221] bg-[#1a0810] p-4 flex flex-col justify-between transition-colors hover:border-[#f20d4d]/50"
              >
                <span className="text-white font-bold text-sm">
                  {game.name}
                </span>
                <span className="text-[10px] font-semibold text-[#ffc629] uppercase tracking-wider mt-2">
                  {game.category}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Security & Performance Info */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-[#50152c] bg-[#12070b] p-6 space-y-3">
            <h3 className="font-['Impact',sans-serif] text-xl uppercase tracking-wide text-white flex items-center gap-2">
              <Zap className="h-5 w-5 text-[#ffc629]" /> Fast Payouts & Low
              Latency
            </h3>
            <p className="text-xs sm:text-sm text-[#a59ca0] leading-relaxed">
              Engineered with optimized server nodes across India, IV7
              guarantees quick loading times on 4G/5G connections and rapid 5–15
              minute UPI withdrawals.
            </p>
          </div>

          <div className="rounded-2xl border border-[#50152c] bg-[#12070b] p-6 space-y-3">
            <h3 className="font-['Impact',sans-serif] text-xl uppercase tracking-wide text-white flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-[#ffc629]" /> Certified Fair
              Play
            </h3>
            <p className="text-xs sm:text-sm text-[#a59ca0] leading-relaxed">
              Our random number generators (RNG) are built to strict statistical
              standards, ensuring unbiased game outcomes and a level playing
              field for all users.
            </p>
          </div>
        </section>

        {/* Bottom CTA Banner */}
        <section className="relative overflow-hidden rounded-3xl border border-[#54152b] bg-gradient-to-r from-[#25050e] via-[#10090b] to-[#17040b] p-8 text-center space-y-4 shadow-2xl">
          <h2 className="font-['Impact',sans-serif] text-3xl sm:text-4xl uppercase tracking-wide text-white">
            Ready to Experience <span className="text-[#ffc629]">IV7 Game</span>
            ?
          </h2>
          <p className="text-[#c8c0c2] text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
            Download the official APK file now to claim your welcome bonus and
            play online with instant withdrawals.
          </p>
          <div className="pt-2">
            <Link
              href={DOWNLOAD_LINKS.DEFAULT_APK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#fb154c] to-[#e90843] px-8 py-3.5 text-sm font-extrabold text-white shadow-[0_10px_28px_#ee0d4540] transition-transform hover:scale-105 active:scale-95"
            >
              <Download className="h-4 w-4" /> Download IV7 APK (35 MB)
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
