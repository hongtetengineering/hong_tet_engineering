import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin, MessageSquare, ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#F4F2EB] text-neutral-800 pt-16 sm:pt-20 pb-12 overflow-hidden relative border-t border-neutral-300">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 relative z-10">
        {/* Top Info Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-neutral-300/80">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-500 block mb-2">
              Email
            </span>
            <a
              href="mailto:sultamahmud2144@gmail.com"
              className="text-sm font-bold text-neutral-900 hover:text-[#FA551E] transition-colors"
            >
              sultamahmud2144@gmail.com
            </a>
          </div>

          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-500 block mb-2">
              Contact
            </span>
            <a
              href="tel:+6583145705"
              className="text-sm font-bold text-neutral-900 hover:text-[#FA551E] transition-colors"
            >
              +65 8314 5705
            </a>
          </div>

          <div className="lg:col-span-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-500 block mb-2">
              Registered Office
            </span>
            <p className="text-sm font-bold text-neutral-900">
              217 Bukit Batok Street 21, #04-371, Singapore 650217
            </p>
          </div>
        </div>

        {/* Middle Navigation & Brand Row */}
        <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="relative h-10 w-32 overflow-hidden">
              <Image
                src="/logo/full-logo-transparent.webp"
                alt="Hong Tet Engineering Logo"
                fill
                className="object-contain object-left"
              />
            </div>
            <div>
              <span className="text-sm font-black tracking-tight text-neutral-900">
                HONG TET ENGINEERING (S) PTE. LTD.
              </span>
              <p className="text-[11px] text-neutral-500">
                Singapore Structural & Fabrication Specialists
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6 text-xs font-semibold text-neutral-600">
            <Link href="#top" className="hover:text-black transition-colors">
              Home
            </Link>
            <Link href="#services" className="hover:text-black transition-colors">
              Services
            </Link>
            <Link href="#process" className="hover:text-black transition-colors">
              Process
            </Link>
            <Link href="#projects" className="hover:text-black transition-colors">
              Projects
            </Link>
            <Link href="#contact" className="hover:text-black transition-colors">
              Contact
            </Link>
            <a
              href="#top"
              className="w-8 h-8 rounded-full bg-neutral-200/80 hover:bg-[#FA551E] hover:text-white flex items-center justify-center text-neutral-700 transition-colors"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-neutral-300/60 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-2">
          <p>© 2026 HONG TET ENGINEERING (S) PTE. LTD. All Rights Reserved.</p>
          <p>Fabrication • Roofing • Railings • Glass • Renovation • Manpower</p>
        </div>
      </div>

      {/* Giant Watermark Typography at bottom */}
      <div className="mt-8 select-none pointer-events-none text-center">
        <span className="text-[75px] sm:text-[140px] lg:text-[220px] font-black tracking-tighter text-[#0A1128]/[0.05] leading-none inline-block">
          HONG TET
        </span>
      </div>
    </footer>
  );
}
