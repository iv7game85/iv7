"use client";

import {
  APP_DETAILS,
  APP_FEATURES,
  BLOG_POSTS,
  DOWNLOAD_LINKS,
  FAQ_CATEGORIES,
  FAQ_DATA,
  LATEST_WINNERS,
  PLATFORM_STATS,
  REWARDS_DATA,
} from "@/config/constants";
import {
  ArrowRight,
  CheckCircle2,
  Download,
  Minus,
  Plus,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Trophy,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import iv7 from "../public/iv7.png";
import Image from "next/image";

export default function HomeController() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [faqCategory, setFaqCategory] = useState<string>("All");

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const filteredFaqs =
    faqCategory === "All"
      ? FAQ_DATA
      : FAQ_DATA.filter((f) => f.category === faqCategory);

  return (
    <div className="min-h-screen bg-[#070707] text-[#f6f1e9] selection:bg-[#f20d4d] selection:text-white">
      {/* 1. TOP LIVE TICKER */}
      <div className="flex h-10 w-full items-center overflow-hidden whitespace-nowrap bg-[#97092f] text-[12px] text-[#e5cbd0]">
        <div className="z-20 flex h-full shrink-0 items-center gap-1.5 bg-[#ed174c] px-5 text-[11px] font-extrabold tracking-wider text-white uppercase shadow-[4px_0_12px_rgba(0,0,0,0.3)]">
          <span className="inline-block h-2 w-2 animate-ping rounded-full bg-white" />
          <span>LIVE</span>
        </div>

        <div className="flex w-full overflow-hidden select-none">
          <div className="animate-marquee flex items-center gap-6 pl-4">
            {[...LATEST_WINNERS, ...LATEST_WINNERS].map((item, idx) => (
              <div key={idx} className="flex items-center gap-6">
                <span>
                  {item.name} won{" "}
                  <strong className="text-[#ffc629]">{item.amount}</strong> on{" "}
                  {item.game}!
                </span>
                <span>•</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 2. HERO SECTION */}
      <section className="relative mx-auto grid max-w-[1320px] grid-cols-1 items-center gap-6 px-4 pt-12 pb-10 sm:px-6 sm:pt-16 sm:pb-14 lg:grid-cols-[1.1fr_0.9fr] lg:pt-24 lg:pb-20">
        <div className="pointer-events-none absolute right-10 top-1/2 h-[450px] w-[450px] -translate-y-1/2 animate-pulse rounded-full bg-[#f20d4d]/15 blur-[140px]" />

        {/* Left Column (Main Content container) */}
        <div className="z-10 flex flex-col text-center lg:text-left">
          {/* Order 1: Badge & Scaled-Down Title */}
          <div className="order-1">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#6c1731] bg-[#2b0b17] px-3 py-1 text-[11px] font-bold tracking-wide text-[#eee1e4] sm:px-4 sm:py-2 sm:text-xs">
              <Sparkles className="h-3 w-3 text-[#ffc629] sm:h-3.5 sm:w-3.5" />{" "}
              OFFICIAL RELEASE 2026
            </span>

            <h1 className="mt-4 font-['Impact',sans-serif] text-3xl font-black uppercase tracking-tight text-[#ffc629] sm:text-5xl lg:text-7xl leading-[1.1]">
              IV7 GAME
            </h1>
          </div>

          {/* Order 2 on Mobile: Compact Image Mockup Card */}
          <div className="order-2 my-6 flex justify-center items-center lg:hidden">
            <div className="relative flex h-[220px] w-full max-w-[220px] items-center justify-center rounded-[24px] border border-[#50152c] bg-gradient-to-b from-[#19040c] to-[#070707] p-4 shadow-[0_0_35px_#e6004320]">
              <Image
                src="/iv7.png"
                alt="IV7 App Graphic"
                width={140}
                height={140}
                priority
                unoptimized
                className="relative z-10 h-36 w-36 object-contain drop-shadow-[0_15px_25px_#f20d4d40]"
              />
              <div className="absolute top-4 -right-2 animate-bounce rounded-lg border border-[#ffc629]/40 bg-[#1c1305]/95 px-2 py-1 text-[10px] font-bold text-[#ffc629] shadow-md backdrop-blur-md">
                ⚡ ₹500 Bonus
              </div>
              <div className="absolute bottom-4 -left-2 animate-pulse rounded-lg border border-[#2bf57c]/40 bg-[#06180c]/95 px-2 py-1 text-[10px] font-bold text-[#2bf57c] shadow-md backdrop-blur-md">
                ✓ 100% Fair Play
              </div>
            </div>
          </div>

          {/* Order 3 on Mobile: Download CTA Button */}
          <div className="order-3 mt-1 flex flex-col items-center gap-3 sm:flex-row lg:mt-8 lg:justify-start">
            <Link
              href={DOWNLOAD_LINKS.DEFAULT_APK}
              target="_blank"
              rel="noreferrer"
              className="relative group overflow-hidden inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#fb154c] to-[#e90843] px-7 py-3 text-sm font-extrabold text-white shadow-[0_8px_20px_#ee0d4540] transition-all duration-300 hover:scale-105 active:scale-95 sm:px-8 sm:py-4 sm:text-base"
            >
              <span className="pointer-events-none absolute -inset-full top-0 block h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-all duration-700 group-hover:left-[150%] group-hover:opacity-100" />
              <Download className="h-4.5 w-4.5 sm:h-5 sm:w-5" />
              <span>Download Official APK</span>
            </Link>
          </div>

          {/* Order 4 on Mobile: Subtitles & Extra Info */}
          <div className="order-4 mt-6">
            <p className="text-base font-semibold text-[#ddd0d0] sm:text-lg">
              India&apos;s #1 Color Prediction, Casino, and Instant Cash Gaming
              App.
            </p>

            <p className="mt-2.5 max-w-xl text-xs leading-relaxed text-[#a59ca0] sm:mt-3 sm:text-base mx-auto lg:mx-0">
              Join over 5,000,000+ active players on IV7. Play Win Go, Aviator,
              Slots, and Teen Patti with instant 24/7 bank withdrawals and up to
              ₹500 instant welcome registration bonus.
            </p>

            {/* Trust Badges */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:mt-8 sm:gap-2.5 lg:justify-start">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#383334] bg-[#171617] px-3.5 py-1.5 text-[11px] text-[#b6adaf] sm:px-4 sm:py-2 sm:text-xs">
                <ShieldCheck className="h-3 w-3 text-[#ffc629] sm:h-3.5 sm:w-3.5" />{" "}
                SSL Encrypted
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#383334] bg-[#171617] px-3.5 py-1.5 text-[11px] text-[#b6adaf] sm:px-4 sm:py-2 sm:text-xs">
                <Zap className="h-3 w-3 text-[#ffc629] sm:h-3.5 sm:w-3.5" />{" "}
                Instant Payouts
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#383334] bg-[#171617] px-3.5 py-1.5 text-[11px] text-[#b6adaf] sm:px-4 sm:py-2 sm:text-xs">
                <span className="h-1.5 w-1.5 rounded-full bg-[#f20d4d] sm:h-2 sm:w-2" />{" "}
                18+ Only
              </span>
            </div>

            <div className="mt-4 flex items-center justify-center gap-2 text-[11px] text-[#8e8789] sm:mt-5 sm:text-xs lg:justify-start">
              <span className="h-2 w-2 rounded-full bg-[#2bf57c] shadow-[0_0_8px_#2bf57c] animate-ping" />
              <span>25,480+ Players Online Now</span>
            </div>
          </div>
        </div>

        {/* Desktop-only Right Column Card */}
        <div className="relative hidden lg:flex justify-center items-center">
          <div className="relative flex h-[480px] w-full max-w-[420px] items-center justify-center rounded-[32px] border border-[#50152c] bg-gradient-to-b from-[#19040c] to-[#070707] p-6 shadow-[0_0_50px_#e6004325] transition-transform duration-500 hover:scale-105">
            <Image
              src={iv7}
              alt="IV7 App Graphic"
              width={260}
              height={260}
              priority
              className="object-contain drop-shadow-[0_20px_40px_#f20d4d40] transition-transform duration-500 hover:rotate-2"
            />
            <div className="absolute top-8 right-4 animate-bounce rounded-xl border border-[#ffc629]/40 bg-[#1c1305]/90 px-3 py-1.5 text-xs font-bold text-[#ffc629] shadow-lg backdrop-blur-md">
              ⚡ ₹500 Bonus
            </div>
            <div className="absolute bottom-8 left-4 animate-pulse rounded-xl border border-[#2bf57c]/40 bg-[#06180c]/90 px-3 py-1.5 text-xs font-bold text-[#2bf57c] shadow-lg backdrop-blur-md">
              ✓ 100% Fair Play
            </div>
          </div>
        </div>
      </section>

      {/* 3. MOBILE GAME OVERVIEW */}
      <section id="overview" className="border-t border-[#1b1215] px-6 py-20">
        <div className="mx-auto max-w-[1320px]">
          <div className="text-center">
            <span className="rounded-full border border-[#6c1731] bg-[#2b0b17] px-4 py-1.5 text-xs font-bold text-[#ffc629]">
              FEATURES
            </span>
            <h2 className="mt-3 font-['Impact',sans-serif] text-4xl uppercase tracking-wide text-white sm:text-5xl">
              IV7 MOBILE GAME OVERVIEW
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-[#a59ca0]">
              Engineered with modern WebGL and RNG-certified algorithms, IV7
              guarantees ultra-responsive gameplay, lightning-fast round
              results, and complete transaction transparency.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {APP_FEATURES.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="group rounded-3xl border border-[#2c2c2c] bg-[#121212] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#f20d4d]/60 hover:shadow-[0_10px_30px_#f20d4d20]"
                >
                  <div className="inline-flex rounded-2xl bg-[#2b0b17] p-3 text-[#ffc629] transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-4 font-['Impact',sans-serif] text-xl tracking-wider text-white uppercase transition-colors group-hover:text-[#ffc629]">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#a59ca0]">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. APP SPECIFICATIONS TABLE */}
      <section className="border-t border-[#1b1215] px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full border border-[#6c1731] bg-[#2b0b17] px-4 py-1.5 text-xs font-bold text-[#ffc629]">
            DETAILS
          </span>
          <h2 className="mt-3 font-['Impact',sans-serif] text-4xl uppercase tracking-wide text-white sm:text-5xl">
            IV7 APP DETAILS
          </h2>

          <div className="mt-10 overflow-hidden rounded-3xl border border-[#2c2c2c] bg-[#121212] text-left shadow-2xl">
            {APP_DETAILS.map((spec, i) => (
              <div
                key={spec.label}
                className={`flex items-center justify-between px-6 py-4.5 text-sm transition-colors hover:bg-white/5 ${
                  i < APP_DETAILS.length - 1 ? "border-b border-[#222]" : ""
                }`}
              >
                <span className="font-semibold text-[#888]">{spec.label}</span>
                <span className="font-bold text-white text-right">
                  {spec.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. STATS BAR */}
      <section className="px-6 py-8">
        <div className="mx-auto grid max-w-[1260px] grid-cols-2 overflow-hidden rounded-3xl border border-[#5d1b2e] bg-[#10090b] sm:grid-cols-3 lg:grid-cols-5">
          {PLATFORM_STATS.map((stat, idx) => (
            <div
              key={stat.label}
              className={`p-6 text-center transition-colors hover:bg-white/5 ${
                idx !== PLATFORM_STATS.length - 1
                  ? "border-b sm:border-b-0 border-r border-[#3b1824]"
                  : ""
              }`}
            >
              <strong className="block font-['Impact',sans-serif] text-3xl text-[#ffc629] sm:text-4xl">
                {stat.value}
              </strong>
              <small className="text-[10px] tracking-widest text-[#8e8588] uppercase">
                {stat.label}
              </small>
            </div>
          ))}
        </div>
      </section>

      {/* 6. BONUSES & REWARDS */}
      <section
        id="rewards"
        className="relative overflow-hidden border-t border-[#1b1215] px-6 py-20"
      >
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[450px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f20d4d]/10 blur-[150px]" />

        <div className="relative mx-auto max-w-[1320px]">
          <div className="text-center">
            <span className="inline-block animate-pulse rounded-full border border-[#6c1731] bg-[#2b0b17] px-4 py-1.5 text-xs font-bold text-[#ffc629]">
              🔥 EXCLUSIVE OFFERS
            </span>
            <h2 className="mt-3 font-['Impact',sans-serif] text-4xl uppercase tracking-wide text-white sm:text-5xl">
              BONUSES & REWARDS
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-[#a59ca0]">
              Claim maximum value with everyday cashbacks, referral commissions,
              and new-user spin wheels.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {REWARDS_DATA.map((reward) => {
              const Icon = reward.icon;
              return (
                <div
                  key={reward.title}
                  className={`group relative overflow-hidden rounded-3xl p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                    reward.highlight
                      ? "border border-[#ffc629] bg-[#261d0d] shadow-[0_0_25px_#ffc62920] hover:border-[#ffe17d] hover:shadow-[0_0_35px_#ffc62950]"
                      : "border border-[#54152b] bg-[#17070d] hover:border-[#f20d4d] hover:shadow-[0_0_30px_#f20d4d35]"
                  }`}
                >
                  <span className="pointer-events-none absolute -inset-full top-0 block h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-all duration-700 group-hover:left-[150%] group-hover:opacity-100" />
                  <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gradient-to-br from-[#f20d4d]/30 to-[#ffc629]/20 blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative inline-flex items-center justify-center rounded-2xl bg-white/5 p-4 text-[#ffc629] transition-transform duration-300 group-hover:scale-125 group-hover:rotate-6">
                    <Icon className="h-8 w-8" />
                  </div>

                  <strong
                    className={`mt-3 block font-['Impact',sans-serif] text-4xl tracking-tight transition-colors duration-300 ${
                      reward.highlight
                        ? "text-[#ffc629] group-hover:text-yellow-300"
                        : "text-[#ffc629] group-hover:text-white"
                    }`}
                  >
                    {reward.amount}
                  </strong>

                  <h3 className="mt-2 text-base font-bold uppercase tracking-wide text-white transition-colors group-hover:text-[#ffc629]">
                    {reward.title}
                  </h3>

                  <p className="mt-2 text-xs leading-relaxed text-[#a59ca0] transition-colors group-hover:text-[#d5ccd0]">
                    {reward.description}
                  </p>

                  <div className="mt-6 flex justify-center">
                    {reward.highlight ? (
                      <Link
                        href={DOWNLOAD_LINKS.DEFAULT_APK}
                        target="_blank"
                        rel="noreferrer"
                        className="relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-[#fb154c] to-[#e90843] px-7 py-2.5 text-xs font-extrabold text-white shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 group-hover:shadow-[0_0_20px_#f20d4d70]"
                      >
                        <span>{reward.badge}</span>
                        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-[#f20d4d] px-5 py-1.5 text-xs font-bold text-[#ff3b68] transition-all duration-300 group-hover:border-[#ffc629] group-hover:bg-[#ffc629]/10 group-hover:text-[#ffc629]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#ff3b68] transition-colors group-hover:bg-[#ffc629]" />
                        {reward.badge}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. RECENT WINNERS */}
      <section className="border-t border-[#1b1215] px-4 sm:px-6 py-20 overflow-hidden">
        <div className="mx-auto max-w-[1320px] text-center">
          <span className="inline-block animate-pulse rounded-full border border-[#6c1731] bg-[#2b0b17] px-4 py-1.5 text-xs font-bold text-[#ffc629]">
            HALL OF FAME
          </span>
          <h2 className="mt-3 font-['Impact',sans-serif] text-4xl uppercase tracking-wide text-white sm:text-5xl">
            LATEST WINNERS
          </h2>
          <p className="mx-auto mt-2 max-w-md text-xs sm:text-sm text-[#a59ca0]">
            Real-time verified payouts across Win Go, Aviator, and Jackpot
            Slots.
          </p>

          <div className="relative mt-10 w-full overflow-hidden">
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 sm:w-28 bg-gradient-to-r from-[#070707] to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 sm:w-28 bg-gradient-to-l from-[#070707] to-transparent" />

            <div className="flex w-full overflow-hidden select-none py-4">
              <div className="animate-marquee flex items-center gap-4">
                {[...LATEST_WINNERS, ...LATEST_WINNERS].map((winner, idx) => (
                  <div
                    key={idx}
                    className="group inline-flex min-w-[240px] items-center gap-3.5 rounded-2xl border border-[#50142a] bg-[#12070b] p-4 text-left shadow-lg transition-all duration-300 hover:border-[#f20d4d] hover:-translate-y-1 hover:shadow-[0_8px_25px_#f20d4d25]"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#f4144b] to-[#a30b31] text-white shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                      <Trophy className="h-6 w-6 text-[#ffc629]" />
                    </span>
                    <div>
                      <div className="text-xs font-bold text-white transition-colors group-hover:text-[#ffc629]">
                        {winner.name}
                      </div>
                      <div className="text-[11px] text-[#8f8588]">
                        {winner.game}
                      </div>
                      <div className="font-['Impact',sans-serif] text-base tracking-wide text-[#ffc629]">
                        {winner.amount}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. DOWNLOAD CTA BANNER */}
      <section
        id="download"
        className="relative overflow-hidden border-t border-[#3b1221] bg-gradient-to-r from-[#20040c] via-[#0d0709] to-[#1a040b] px-6 py-20 lg:py-24"
        aria-label="Download App"
      >
        <div className="pointer-events-none absolute right-1/4 top-1/2 h-[400px] w-[500px] -translate-y-1/2 rounded-full bg-[#f20d4d]/15 blur-[150px]" />

        <div className="relative mx-auto max-w-[1320px]">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="text-center lg:text-left space-y-6">
              <span className="inline-flex items-center gap-1.5 animate-pulse rounded-full border border-[#6c1731] bg-[#2b0b17] px-4 py-1.5 text-xs font-bold text-[#ffc629]">
                <Smartphone className="h-3.5 w-3.5" /> FREE DOWNLOAD
              </span>

              <h2 className="font-['Impact',sans-serif] text-4xl uppercase tracking-wide text-white sm:text-5xl lg:text-6xl leading-[1.05]">
                DOWNLOAD{" "}
                <span className="text-[#ffc629]">IV7 APK LATEST VERSION</span>{" "}
                FOR ANDROID
              </h2>

              <p className="text-sm sm:text-base leading-relaxed text-[#c8c0c2] max-w-xl mx-auto lg:mx-0">
                Download the latest IV7 APK for Android and access a complete
                mobile gaming experience with instant UPI withdrawals and secure
                login.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm font-semibold text-slate-200 max-w-lg mx-auto lg:mx-0">
                {[
                  "Free to Download",
                  "₹199 - ₹500 Bonus",
                  "Instant UPI Withdrawals",
                  "50+ Premium Games",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2.5 rounded-xl border border-[#381622] bg-[#14080d] p-3 transition-colors hover:border-[#f20d4d]/50"
                  >
                    <CheckCircle2 className="h-4 w-4 text-[#2bf57c] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link
                  href={DOWNLOAD_LINKS.DEFAULT_APK}
                  target="_blank"
                  rel="noreferrer"
                  className="relative group overflow-hidden inline-flex items-center justify-center gap-4 rounded-full bg-gradient-to-r from-[#fb154c] to-[#e90843] px-10 py-4 text-white shadow-[0_10px_28px_#ee0d4540] transition-all duration-300 hover:scale-105 hover:shadow-[0_15px_35px_#ee0d4570] active:scale-95"
                >
                  <Download className="h-6 w-6" />
                  <div className="text-left">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-white/80">
                      Download for
                    </div>
                    <div className="text-base font-extrabold leading-tight">
                      Android APK
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            {/* Mockup Column */}
            <div className="relative flex justify-center items-center">
              <div className="relative flex h-[420px] sm:h-[500px] w-full max-w-[380px] items-center justify-center rounded-[36px] border border-[#50152c] bg-gradient-to-b from-[#19040c] via-[#0e070a] to-[#070707] p-6 shadow-[0_0_60px_#e6004325] transition-transform duration-500 hover:scale-105">
                <Image
                  src={iv7}
                  alt="IV7 App"
                  width={240}
                  height={240}
                  priority
                  className="relative z-10 object-contain drop-shadow-[0_20px_40px_#f20d4d50] transition-transform duration-500 hover:rotate-1"
                />
                <div className="absolute top-8 -left-3 animate-bounce rounded-xl border border-[#ffc629]/40 bg-[#1c1305]/95 px-3 py-1.5 text-xs font-bold text-[#ffc629] shadow-xl backdrop-blur-md">
                  ⚡ ₹199 Instant Credit
                </div>
                <div className="absolute bottom-8 -right-3 animate-pulse rounded-xl border border-[#2bf57c]/40 bg-[#06180c]/95 px-3 py-1.5 text-xs font-bold text-[#2bf57c] shadow-xl backdrop-blur-md">
                  ✓ Instant UPI Payouts
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FAQ ACCORDION */}
      <section id="faq" className="border-t border-[#1b1215] px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <span className="rounded-full border border-[#6c1731] bg-[#2b0b17] px-4 py-1.5 text-xs font-bold text-[#ffc629]">
              HELP CENTER
            </span>
            <h2 className="mt-3 font-['Impact',sans-serif] text-4xl uppercase tracking-wide text-white sm:text-5xl">
              FREQUENTLY ASKED QUESTIONS
            </h2>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {FAQ_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setFaqCategory(cat)}
                className={`rounded-full px-4 py-1.5 text-xs font-bold transition-all duration-200 ${
                  faqCategory === cat
                    ? "bg-[#f20d4d] text-white shadow-[0_0_15px_#f20d4d40]"
                    : "border border-[#383334] bg-[#141213] text-[#a59ca0] hover:border-[#50152c] hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
            {filteredFaqs.map((faq, index) => (
              <div
                key={index}
                onClick={() => toggleFaq(index)}
                className="cursor-pointer rounded-2xl border border-[#50152c] bg-[#12070b] p-5 transition-all duration-200 hover:border-[#f20d4d]/60 hover:-translate-y-0.5"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="text-sm font-bold text-[#eee]">{faq.q}</span>
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#292226] text-xs font-bold text-white">
                    {openFaq === index ? (
                      <Minus className="h-3.5 w-3.5" />
                    ) : (
                      <Plus className="h-3.5 w-3.5" />
                    )}
                  </span>
                </div>
                {openFaq === index && (
                  <p className="mt-3 text-xs leading-relaxed text-[#9e9497] border-t border-[#29141c] pt-3 animate-fadeIn">
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. BLOG & GUIDES */}
      <section id="blog" className="border-t border-[#1b1215] px-6 pt-20 pb-28">
        <div className="mx-auto max-w-[1320px]">
          <div className="text-center">
            <span className="inline-block animate-pulse rounded-full border border-[#6c1731] bg-[#2b0b17] px-4 py-1.5 text-xs font-bold text-[#ffc629]">
              LATEST ARTICLES
            </span>
            <h2 className="mt-3 font-['Impact',sans-serif] text-4xl uppercase tracking-wide text-white sm:text-5xl">
              IV7 GAME BLOG – TIPS, TRICKS & GUIDES
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {BLOG_POSTS.slice(0, 3).map((post, idx) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-[#4a1328] bg-[#14080d] transition-all duration-300 hover:-translate-y-2 hover:border-[#f20d4d]/70 hover:shadow-[0_15px_30px_#f20d4d20]"
              >
                <div
                  className={`flex h-40 flex-col justify-center p-6 text-white transition-transform duration-500 group-hover:scale-105 ${
                    idx === 0
                      ? "bg-gradient-to-br from-[#082a81] to-[#d4157c]"
                      : idx === 1
                        ? "bg-gradient-to-br from-[#171aa0] to-[#ed0c52]"
                        : "bg-gradient-to-br from-[#3111a0] to-[#ef0a62]"
                  }`}
                >
                  <b className="text-lg font-bold leading-tight group-hover:text-[#ffc629] transition-colors">
                    {post.title}
                  </b>
                  <small className="mt-2 text-xs font-extrabold uppercase tracking-widest text-[#ffdb47]">
                    {post.category}
                  </small>
                </div>

                <div className="p-6 space-y-4">
                  <p className="text-xs leading-relaxed text-[#9e9497] line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between border-t border-[#29141c] pt-4 text-[11px] text-[#8f8588]">
                    <span>{post.date}</span>
                    <span className="inline-flex items-center gap-1 font-bold text-[#ff2159] transition-transform duration-300 group-hover:translate-x-1">
                      Read Guide <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
