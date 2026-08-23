"use client";

import { DOWNLOAD_LINKS, NAV_LINKS } from "@/config/constants";
import { Download, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import iv7 from "../../public/iv7.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isLinkActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[#3a1820] bg-[#08080a]/95 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo with App Glow Badge */}
        <Link href="/" className="group flex items-center shrink-0">
          <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-[10px] border border-[#50152c] bg-[#12070b] p-1.5 shadow-[0_0_20px_rgba(242,13,77,0.3)] transition-all duration-300 group-hover:scale-105 group-hover:border-[#f20d4d]">
            <Image
              src={iv7}
              alt="IV7 Game"
              width={38}
              height={38}
              priority
              className="h-full w-full rounded-[6px] object-cover"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 lg:gap-8 md:flex">
          {NAV_LINKS.map((link) => {
            const isActive = isLinkActive(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`group relative py-2 text-sm font-semibold transition-colors duration-200 ${
                  isActive
                    ? "text-[#ffc629]"
                    : "text-[#a8a0a5] hover:text-[#ffc629]"
                }`}
              >
                {link.name}
                {/* Active / Hover Underline Border */}
                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-[#f20d4d] transition-all duration-300 ${
                    isActive
                      ? "w-full shadow-[0_0_8px_#f20d4d]"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Desktop Action Button */}
        <div className="hidden md:flex items-center">
          <Link
            href={DOWNLOAD_LINKS.DEFAULT_APK}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#fb154c] to-[#e90843] px-6 py-2.5 text-sm font-extrabold text-white shadow-[0_8px_20px_#ee0d4535] transition-all duration-300 hover:scale-105 hover:opacity-95 active:scale-95"
          >
            <Download className="h-4 w-4 stroke-[2.5]" />
            <span>Download App</span>
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="rounded-xl border border-[#3a1820] bg-[#151013] p-2 text-[#a8a0a5] transition hover:border-[#ff1744] hover:text-[#ffc629] md:hidden"
          aria-label="Toggle Navigation Menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 stroke-[2.5]" />
          ) : (
            <Menu className="h-6 w-6 stroke-[2.5]" />
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="border-t border-[#3a1820] bg-[#0e0a0d]/98 px-4 pb-6 pt-4 backdrop-blur-xl md:hidden">
          <nav className="space-y-1.5">
            {NAV_LINKS.map((link) => {
              const isActive = isLinkActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block rounded-xl px-4 py-3 text-base font-semibold transition-all duration-200 ${
                    isActive
                      ? "border border-[#f20d4d] bg-[#1f0912] text-[#ffc629] shadow-[0_0_12px_#f20d4d30]"
                      : "border border-transparent text-[#a8a0a5] hover:border-[#3a1820] hover:bg-[#151013] hover:text-[#ffc629]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            {/* Mobile Action Button */}
            <div className="pt-3">
              <Link
                href={DOWNLOAD_LINKS.DEFAULT_APK}
                target="_blank"
                rel="noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#fb154c] to-[#e90843] py-3 text-center text-sm font-extrabold text-white shadow-[0_8px_20px_#ee0d4535]"
              >
                <Download className="h-4 w-4 stroke-[2.5]" />
                <span>Download App</span>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
