"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="w-full pt-4 sm:pt-6 px-4 sm:px-6 relative z-50">
      <header className="max-w-[1120px] mx-auto bg-white/95 backdrop-blur-md rounded-full shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-neutral-200/80 px-5 sm:px-7 h-16 sm:h-[68px] flex items-center justify-between transition-all">
        {/* Brand / Logo */}
        <Link href="#top" className="flex items-center gap-3 group">
          <div className="relative h-10 sm:h-11 w-32 sm:w-36">
            <Image
              src="/logo/full-logo-transparent.webp"
              alt="Hong Tet Engineering Logo"
              fill
              className="object-contain object-left group-hover:scale-102 transition-transform"
              priority
            />
          </div>
        </Link>

        {/* Center Nav Links */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-8 text-[14px] font-medium text-neutral-700">
          <Link
            href="#about"
            className="hover:text-black transition-colors"
          >
            About us
          </Link>
          <Link
            href="#services"
            className="hover:text-black transition-colors"
          >
            Services
          </Link>
          <Link
            href="#process"
            className="hover:text-black transition-colors"
          >
            Process
          </Link>
          <Link
            href="#projects"
            className="hover:text-black transition-colors"
          >
            Work
          </Link>
          <Link
            href="#testimonials"
            className="hover:text-black transition-colors"
          >
            Testimonial
          </Link>
        </nav>

        {/* CTA Button */}
        <div className="flex items-center gap-3">
          <a
            href="tel:+6583145705"
            className="hidden lg:inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-600 hover:text-black px-2 py-1 rounded-full transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#FA551E]" />
            +65 8314 5705
          </a>
          <Link
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-2.5 sm:py-3 rounded-full bg-[#FA551E] hover:bg-[#e0430f] text-white text-xs sm:text-[13px] font-bold tracking-wide shadow-xs hover:shadow-md transition-all active:scale-[0.98]"
          >
            Get a Free Estimate
          </Link>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 text-neutral-700 hover:text-black focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden max-w-[1120px] mx-auto mt-2 bg-white rounded-3xl shadow-xl border border-neutral-200 p-6 space-y-4 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-3 font-semibold text-sm text-neutral-800">
            <Link
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#FA551E]"
            >
              About us
            </Link>
            <Link
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#FA551E]"
            >
              Services
            </Link>
            <Link
              href="#process"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#FA551E]"
            >
              Process
            </Link>
            <Link
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#FA551E]"
            >
              Work
            </Link>
            <Link
              href="#testimonials"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#FA551E]"
            >
              Testimonial
            </Link>
          </div>
          <div className="pt-3 border-t border-neutral-200 flex flex-col gap-2.5">
            <a
              href="tel:+6583145705"
              className="flex items-center justify-center gap-2 text-xs font-semibold py-2.5 rounded-full border border-neutral-300 text-neutral-800"
            >
              <Phone className="w-3.5 h-3.5 text-[#FA551E]" />
              Call +65 8314 5705
            </a>
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center py-2.5 rounded-full bg-[#FA551E] text-white text-xs font-bold"
            >
              Get a Free Estimate
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
