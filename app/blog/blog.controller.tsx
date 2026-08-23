"use client";

import { BLOG_POSTS } from "@/config/constants";
import {
  ArrowRight,
  BookOpen,
  Calendar,
  ChevronRight,
  Clock,
  Search,
  User,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function BlogController() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Guides", "Strategy", "Finance", "VIP Rewards"];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCat =
      selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-[#070707] text-[#f6f1e9] selection:bg-[#f20d4d] selection:text-white">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 py-12 lg:py-16 space-y-12">
        {/* Background Ambient Glow */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[600px] -translate-x-1/2 rounded-full bg-[#f20d4d]/10 blur-[140px]" />

        {/* Header & Breadcrumb */}
        <section className="relative text-center space-y-4">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-[#8f8588]">
            <Link href="/" className="hover:text-[#ffc629] transition-colors">
              Home
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-[#ffc629]">Blog</span>
          </div>

          <div className="inline-flex items-center gap-1.5 rounded-full border border-[#6c1731] bg-[#2b0b17] px-4 py-1.5 text-xs font-bold text-[#ffc629]">
            <BookOpen className="h-3.5 w-3.5" /> OFFICIAL NEWS, GUIDES &
            STRATEGIES
          </div>

          <h1 className="font-['Impact',sans-serif] text-4xl sm:text-6xl font-black uppercase tracking-tight text-white leading-tight">
            IV7 GAME <span className="text-[#ffc629]">BLOG & INSIGHTS</span>
          </h1>

          <p className="text-[#a59ca0] text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Stay updated with APK release notes, Win Go color prediction
            formulas, VIP bonus announcements, and instant UPI withdrawal
            tutorials.
          </p>
        </section>

        {/* Search & Category Filter Section */}
        <div className="space-y-6 max-w-3xl mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search articles (e.g., UPI withdrawal, APK download, strategy)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-2xl border border-[#50152c] bg-[#12070b] pl-12 pr-4 py-3.5 text-sm text-white placeholder-[#786e73] focus:border-[#f20d4d] focus:outline-none focus:ring-1 focus:ring-[#f20d4d] transition-all shadow-inner"
            />
            <Search className="absolute left-4 top-3.5 h-5 w-5 text-[#786e73]" />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-5 py-2 text-xs font-bold transition-all duration-200 ${
                  selectedCategory === cat
                    ? "bg-[#f20d4d] text-white shadow-[0_0_20px_#f20d4d50]"
                    : "border border-[#383334] bg-[#141213] text-[#a59ca0] hover:border-[#50152c] hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Cards Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post, idx) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-[#4a1328] bg-[#12070b] transition-all duration-300 hover:border-[#f20d4d]/80 hover:-translate-y-1.5 hover:shadow-[0_15px_35px_#f20d4d20]"
              >
                {/* Visual Header Banner */}
                <div
                  className={`relative flex min-h-[170px] flex-col justify-between p-6 sm:p-7 text-white overflow-hidden ${
                    idx % 3 === 0
                      ? "bg-gradient-to-br from-[#1a083d] via-[#450d2c] to-[#970c36]"
                      : idx % 3 === 1
                        ? "bg-gradient-to-br from-[#0b1b4f] via-[#240c4a] to-[#a30b35]"
                        : "bg-gradient-to-br from-[#2b082d] via-[#5c0d29] to-[#b80e3c]"
                  }`}
                >
                  {/* Subtle Light Flare on Hover */}
                  <span className="pointer-events-none absolute -inset-full top-0 block h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-all duration-700 group-hover:left-[150%] group-hover:opacity-100" />

                  <div className="flex items-center justify-between">
                    <span className="rounded-full border border-[#ffdb47]/30 bg-black/40 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-[#ffdb47] backdrop-blur-md">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] font-medium text-white/75 bg-black/30 rounded-full px-2.5 py-0.5 backdrop-blur-sm">
                      <User className="h-3 w-3" /> {post.author}
                    </span>
                  </div>

                  <h2 className="mt-4 font-bold text-lg sm:text-xl leading-snug group-hover:text-[#ffc629] transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                </div>

                {/* Body Content */}
                <div className="p-6 sm:p-7 space-y-4 flex-1 flex flex-col justify-between">
                  <p className="text-xs sm:text-sm text-[#9e9497] leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between border-t border-[#29141c] pt-4 text-xs text-[#8f8588]">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5 text-[#ffc629]" />{" "}
                        {post.date}
                      </span>
                      <span>•</span>
                      <span className="inline-flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" /> {post.readTime}
                      </span>
                    </div>
                    <span className="inline-flex items-center gap-1 font-bold text-[#ff2159] transition-transform duration-200 group-hover:translate-x-1">
                      Read Guide <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-full rounded-3xl border border-[#50152c] bg-[#12070b] py-16 text-center text-sm text-[#8f8588] space-y-2">
              <p className="text-base text-[#eee] font-bold">
                No articles found
              </p>
              <p>
                No posts match &quot;{searchQuery}&quot;. Try a different search
                term or category.
              </p>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
