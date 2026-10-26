import { ArrowUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#F4F2EB] text-neutral-800 pt-16 sm:pt-20 pb-12 overflow-hidden relative border-t border-neutral-300">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 relative z-10">
        {/* Top Info Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8 pb-8 sm:pb-12 border-b border-neutral-300/80">
          <div>
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-neutral-500 block mb-1 sm:mb-2">
              Email
            </span>
            <a
              href="mailto:sultamahmud2144@gmail.com"
              className="text-xs sm:text-sm font-bold text-neutral-900 hover:text-[#FA551E] transition-colors break-all"
            >
              sultamahmud2144@gmail.com
            </a>
          </div>

          <div>
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-neutral-500 block mb-1 sm:mb-2">
              Contact
            </span>
            <a
              href="tel:+6583145705"
              className="text-xs sm:text-sm font-bold text-neutral-900 hover:text-[#FA551E] transition-colors whitespace-nowrap"
            >
              +65 8314 5705
            </a>
          </div>

          <div className="sm:col-span-2">
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-neutral-500 block mb-1 sm:mb-2">
              Registered Office
            </span>
            <p className="text-xs sm:text-sm font-bold text-neutral-900 leading-snug">
              217 Bukit Batok Street 21, #04-371, Singapore 650217
            </p>
          </div>
        </div>

        {/* Middle Navigation & Brand Row */}
        <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <Link
            href="/#top"
            className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left group cursor-pointer"
            title="Hong Tet Engineering - Home"
          >
            <div className="relative h-11 w-36 shrink-0 overflow-hidden group-hover:scale-102 transition-transform">
              <Image
                src="/logo/full-logo-transparent.webp"
                alt="Hong Tet Engineering Logo"
                fill
                className="object-contain object-center sm:object-left"
              />
            </div>
            <div>
              <span className="text-xs sm:text-sm font-black tracking-tight text-neutral-900 group-hover:text-[#FA551E] transition-colors block">
                HONG TET ENGINEERING (S) PTE. LTD.
              </span>
              <p className="text-[10px] sm:text-[11px] text-neutral-500 mt-0.5">
                Singapore Structural & Fabrication Specialists
              </p>
            </div>
          </Link>

          <div className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-6 text-xs font-semibold text-neutral-600">
            <Link href="/#top" className="hover:text-[#FA551E] transition-colors py-1">
              Home
            </Link>
            <Link
              href="/about"
              className="hover:text-[#FA551E] transition-colors py-1"
            >
              About Us
            </Link>
            <Link
              href="/services"
              className="hover:text-[#FA551E] transition-colors py-1"
            >
              Services
            </Link>
            <Link
              href="/projects"
              className="hover:text-[#FA551E] transition-colors py-1"
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="hover:text-[#FA551E] transition-colors py-1"
            >
              Contact Us
            </Link>
            <a
              href="#top"
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-neutral-200/80 hover:bg-[#FA551E] hover:text-white flex items-center justify-center text-neutral-700 transition-colors shrink-0 inline-flex"
              title="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-neutral-300/60 flex flex-col sm:flex-row items-center justify-between text-[10px] sm:text-xs text-neutral-500 gap-2 text-center sm:text-left">
          <p>© 2026 HONG TET ENGINEERING (S) PTE. LTD. All Rights Reserved.</p>
          <p>
            Fabrication • Roofing • Railings • Glass • Renovation • Manpower
          </p>
        </div>
      </div>

      {/* Giant Full-Width Watermark Typography (Spans full content width edge-to-edge) */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 mt-8 sm:mt-12 select-none pointer-events-none overflow-hidden">
        <svg
          viewBox="0 0 1000 170"
          className="w-full h-auto text-neutral-900/[0.065] fill-current"
          aria-hidden="true"
        >
          <text
            x="50%"
            y="52%"
            dominantBaseline="central"
            textAnchor="middle"
            fontWeight="900"
            fontSize="175"
            letterSpacing="0.04em"
          >
            HONG TET
          </text>
        </svg>
      </div>
    </footer>
  );
}
