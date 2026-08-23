"use client";

import { supportChannels } from "@/config/constants";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Clock,
  Headphones,
  Mail,
  Send,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function ContactUsController() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    category: "General Inquiry",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#070707] text-[#f6f1e9] selection:bg-[#f20d4d] selection:text-white">
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 py-12 lg:py-16 space-y-12">
        {/* Ambient Glow */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-[550px] -translate-x-1/2 rounded-full bg-[#f20d4d]/10 blur-[130px]" />

        {/* Breadcrumb & Header */}
        <section className="relative text-center space-y-4">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-[#8f8588]">
            <Link href="/" className="hover:text-[#ffc629] transition-colors">
              Home
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-[#ffc629]">Contact Us</span>
          </div>

          <div className="inline-flex items-center gap-1.5 rounded-full border border-[#6c1731] bg-[#2b0b17] px-4 py-1.5 text-xs font-bold text-[#ffc629]">
            <Headphones className="h-3.5 w-3.5" /> 24/7 CUSTOMER SUPPORT &
            HELPDESK
          </div>

          <h1 className="font-['Impact',sans-serif] text-4xl sm:text-6xl font-black uppercase tracking-tight text-white leading-tight">
            GET IN TOUCH WITH{" "}
            <span className="text-[#ffc629]">IV7 SUPPORT</span>
          </h1>

          <p className="text-[#a59ca0] text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Have questions regarding APK downloads, bonus claims, or withdrawal
            status? Our support agents are available around the clock.
          </p>
        </section>

        {/* Support Channels Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {supportChannels.map((channel, idx) => {
            const Icon = channel.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-[#50152c] bg-[#12070b] p-6 sm:p-7 flex flex-col justify-between space-y-4 transition-all hover:border-[#f20d4d]/60 hover:-translate-y-0.5"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#2b0b17] text-[#ffc629]">
                      <Icon className="h-6 w-6" />
                    </span>
                    <span className="rounded-full border border-[#6c1731] bg-[#2b0b17] px-3 py-1 text-[10px] font-bold text-[#ffc629] uppercase">
                      {channel.badge}
                    </span>
                  </div>
                  <h2 className="font-['Impact',sans-serif] text-xl tracking-wide text-white uppercase">
                    {channel.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-[#a59ca0] leading-relaxed">
                    {channel.desc}
                  </p>
                </div>

                <div>
                  <Link
                    href={channel.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#f20d4d] transition-colors hover:text-[#ffc629]"
                  >
                    {channel.actionText} <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </section>

        {/* Contact Form Section */}
        <section className="rounded-3xl border border-[#50152c] bg-[#12070b] p-6 sm:p-10 shadow-xl space-y-6">
          <div className="space-y-2">
            <h2 className="font-['Impact',sans-serif] text-2xl uppercase tracking-wide text-white flex items-center gap-2">
              <Mail className="h-6 w-6 text-[#ffc629]" /> Send Us a Direct
              Message
            </h2>
            <p className="text-xs sm:text-sm text-[#a59ca0]">
              Fill out the form below and an IV7 support specialist will review
              your ticket within 2 to 4 hours.
            </p>
          </div>

          {isSubmitted ? (
            <div className="rounded-2xl border border-[#2bf57c]/30 bg-[#06180c] p-8 text-center space-y-3">
              <CheckCircle2 className="mx-auto h-12 w-12 text-[#2bf57c]" />
              <h3 className="font-['Impact',sans-serif] text-2xl text-[#2bf57c] uppercase tracking-wide">
                Ticket Submitted Successfully!
              </h3>
              <p className="text-xs sm:text-sm text-[#a59ca0] max-w-md mx-auto">
                Thank you for contacting IV7 Helpdesk. A support representative
                has received your ticket and will respond shortly.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-3 rounded-full border border-[#2bf57c]/40 bg-[#12070b] px-6 py-2 text-xs font-bold text-white transition-colors hover:bg-[#1a0810]"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#b5a9ad]">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full rounded-xl border border-[#3b1221] bg-[#1a0810] px-4 py-3 text-sm text-white placeholder-[#786e73] focus:border-[#f20d4d] focus:outline-none transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#b5a9ad]">
                    Mobile Number / Registered ID
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 9876543210"
                    value={formData.mobile}
                    onChange={(e) =>
                      setFormData({ ...formData, mobile: e.target.value })
                    }
                    className="w-full rounded-xl border border-[#3b1221] bg-[#1a0810] px-4 py-3 text-sm text-white placeholder-[#786e73] focus:border-[#f20d4d] focus:outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#b5a9ad]">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="yourname@gmail.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full rounded-xl border border-[#3b1221] bg-[#1a0810] px-4 py-3 text-sm text-white placeholder-[#786e73] focus:border-[#f20d4d] focus:outline-none transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#b5a9ad]">
                    Inquiry Category
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) =>
                      setFormData({ ...formData, category: e.target.value })
                    }
                    className="w-full rounded-xl border border-[#3b1221] bg-[#1a0810] px-4 py-3 text-sm text-white focus:border-[#f20d4d] focus:outline-none transition-all"
                  >
                    <option className="bg-[#12070b]">General Inquiry</option>
                    <option className="bg-[#12070b]">
                      APK Download & Install
                    </option>
                    <option className="bg-[#12070b]">
                      Deposit & Welcome Bonus
                    </option>
                    <option className="bg-[#12070b]">
                      Withdrawal & Bank UPI
                    </option>
                    <option className="bg-[#12070b]">
                      VIP Rewards & Agent Rebate
                    </option>
                    <option className="bg-[#12070b]">
                      Security & Account Safety
                    </option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[#b5a9ad]">
                  Message / Query Details
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Describe your query in detail..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full rounded-xl border border-[#3b1221] bg-[#1a0810] px-4 py-3 text-sm text-white placeholder-[#786e73] focus:border-[#f20d4d] focus:outline-none transition-all"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#fb154c] to-[#e90843] px-8 py-3.5 text-sm font-extrabold text-white shadow-[0_10px_28px_#ee0d4540] transition-transform hover:scale-105 active:scale-95"
              >
                <Send className="h-4 w-4" /> Submit Support Ticket
              </button>
            </form>
          )}
        </section>

        {/* Operating Hours Note */}
        <section className="rounded-2xl border border-[#3b1221] bg-[#10090b] p-6 text-center space-y-2">
          <h3 className="text-sm font-bold text-white flex items-center justify-center gap-2">
            <Clock className="h-4 w-4 text-[#ffc629]" /> Support Working Hours
          </h3>
          <p className="text-xs text-[#8f8588] leading-relaxed max-w-lg mx-auto">
            In-app live chat and Telegram/WhatsApp automated bots are active
            24/7. Email ticket reviews and technical account verifications are
            processed daily between 8:00 AM and 11:00 PM IST.
          </p>
        </section>
      </div>
    </main>
  );
}
