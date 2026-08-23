"use client";

import { DOWNLOAD_LINKS, FAQ_CATEGORIES, FAQ_DATA } from "@/config/constants";
import {
  ChevronRight,
  Download,
  HelpCircle,
  Minus,
  Plus,
  Search,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function FAQController() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredFaqs = FAQ_DATA.filter((faq) => {
    const matchesCategory =
      activeCategory === "All" || faq.category === activeCategory;
    const matchesSearch =
      faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.a.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-[#070707] text-[#f6f1e9] selection:bg-[#f20d4d] selection:text-white">
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 py-12 lg:py-16 space-y-10">
        {/* Background Ambient Glow */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-[500px] -translate-x-1/2 rounded-full bg-[#f20d4d]/10 blur-[130px]" />

        {/* Breadcrumbs & Header */}
        <section className="relative text-center space-y-4">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-[#8f8588]">
            <Link href="/" className="hover:text-[#ffc629] transition-colors">
              Home
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-[#ffc629]">FAQ</span>
          </div>

          <div className="inline-flex items-center gap-1.5 rounded-full border border-[#6c1731] bg-[#2b0b17] px-4 py-1.5 text-xs font-bold text-[#ffc629]">
            <HelpCircle className="h-3.5 w-3.5" /> HELP CENTER & KNOWLEDGE BASE
          </div>

          <h1 className="font-['Impact',sans-serif] text-4xl sm:text-6xl font-black uppercase tracking-tight text-white leading-tight">
            FREQUENTLY ASKED <span className="text-[#ffc629]">QUESTIONS</span>
          </h1>

          <p className="text-[#a59ca0] text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Find instant answers to questions about downloading the official IV7
            APK, registration, UPI withdrawals, and bonus promotions.
          </p>
        </section>

        {/* Search Bar */}
        <div className="relative max-w-xl mx-auto">
          <input
            type="text"
            placeholder="Search questions (e.g., withdrawal, APK, bonus)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-[#12070b] border border-[#50152c] text-white placeholder-[#786e73] focus:outline-none focus:border-[#f20d4d] transition-all text-sm shadow-inner"
          />
          <Search className="absolute left-4 top-3.5 h-5 w-5 text-[#786e73]" />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {FAQ_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setOpenIndex(null);
              }}
              className={`rounded-full px-4 py-2 text-xs font-bold transition-all ${
                activeCategory === cat
                  ? "bg-[#f20d4d] text-white shadow-[0_0_15px_#f20d4d40]"
                  : "border border-[#383334] bg-[#141213] text-[#a59ca0] hover:text-white hover:border-[#50152c]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ Accordion List */}
        <section className="space-y-3 pt-2">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => (
              <div
                key={index}
                className="bg-[#12070b] border border-[#50152c] rounded-2xl overflow-hidden transition-all hover:border-[#f20d4d]/60"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-5 font-semibold text-white flex justify-between items-center gap-3 hover:bg-[#19040c]/50 transition-colors"
                >
                  <span className="text-sm sm:text-base font-bold text-[#eee] flex items-center gap-2">
                    <span className="text-[#f20d4d]">Q:</span> {faq.q}
                  </span>
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#292226] text-sm font-bold text-white">
                    {openIndex === index ? (
                      <Minus className="h-3.5 w-3.5" />
                    ) : (
                      <Plus className="h-3.5 w-3.5" />
                    )}
                  </span>
                </button>

                {openIndex === index && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-[#a59ca0] border-t border-[#29141c] pt-4 leading-relaxed animate-fadeIn">
                    {faq.a}
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="text-center py-12 bg-[#12070b] border border-[#50152c] rounded-2xl text-[#8f8588] text-sm">
              No matching questions found for &quot;{searchQuery}&quot;. Try
              another search term or select a different category.
            </div>
          )}
        </section>

        {/* Direct Help CTA Card */}
        <section className="relative overflow-hidden rounded-3xl border border-[#54152b] bg-gradient-to-r from-[#25050e] via-[#10090b] to-[#17040b] p-8 text-center space-y-4 shadow-xl">
          <h2 className="font-['Impact',sans-serif] text-2xl sm:text-3xl uppercase tracking-wide text-white">
            Still Have Questions?
          </h2>
          <p className="text-[#c8c0c2] text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
            Download the official IV7 APK to connect with our 24/7 in-app live
            chat support and receive direct agent assistance.
          </p>
          <div className="pt-2">
            <Link
              href={DOWNLOAD_LINKS.DEFAULT_APK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#fb154c] to-[#e90843] px-8 py-3.5 text-sm font-extrabold text-white shadow-[0_10px_28px_#ee0d4540] transition-transform hover:scale-105 active:scale-95"
            >
              <Download className="h-4 w-4" /> Download Official APK
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
