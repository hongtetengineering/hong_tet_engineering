import Link from "next/link";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Construction, Phone, ArrowLeft, MessageSquare, Mail, MapPin } from "lucide-react";

interface UnderDevelopmentProps {
  title: string;
  subtitle?: string;
}

export function UnderDevelopment({
  title,
  subtitle = "This page is currently under development. Our team is actively crafting the full specifications, case studies, and engineering details for this section.",
}: UnderDevelopmentProps) {
  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-[#FBF9F5] text-neutral-900 flex flex-col justify-between selection:bg-[#FA551E] selection:text-white">
      {/* Top Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 py-16 sm:py-24 max-w-4xl mx-auto text-center">
        {/* Animated Status Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FA551E]/10 border border-[#FA551E]/20 text-[#FA551E] text-xs sm:text-sm font-bold tracking-wide uppercase mb-6">
          <Construction className="w-4 h-4 animate-bounce" />
          <span>Under Development</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-neutral-950 leading-tight">
          {title}
        </h1>

        {/* Subtitle */}
        <p className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-lg text-neutral-600 leading-relaxed max-w-2xl">
          {subtitle}
        </p>

        {/* Action Buttons */}
        <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <Link
            href="/#top"
            className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-[#FA551E] hover:bg-[#e0430f] text-white text-xs sm:text-sm font-bold tracking-wide shadow-md transition-all active:scale-[0.98]"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>

          <a
            href="tel:+6598989760"
            className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-white hover:bg-neutral-50 text-neutral-900 border border-neutral-300 text-xs sm:text-sm font-bold tracking-wide shadow-xs transition-colors"
          >
            <Phone className="w-4 h-4 text-[#FA551E]" />
            <span>Call +65 9898 9760</span>
          </a>

          <a
            href="https://wa.me/6598989760?text=Hello%20Hong%20Tet%20Engineering,%20I%20am%20enquiring%20about%20your%20services"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold tracking-wide shadow-xs transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            <span>WhatsApp Enquiry</span>
          </a>
        </div>

        {/* Quick Contact Information Box */}
        <div className="mt-12 sm:mt-16 w-full grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
          <div className="rounded-2xl bg-white border border-neutral-200/90 p-5 shadow-xs flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-[#FA551E]/10 flex items-center justify-center text-[#FA551E] shrink-0">
              <Phone className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 block">
                Direct Line
              </span>
              <a
                href="tel:+6598989760"
                className="text-xs sm:text-sm font-bold text-neutral-900 hover:text-[#FA551E] transition-colors"
              >
                +65 9898 9760
              </a>
            </div>
          </div>

          <div className="rounded-2xl bg-white border border-neutral-200/90 p-5 shadow-xs flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-[#FA551E]/10 flex items-center justify-center text-[#FA551E] shrink-0">
              <Mail className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 block">
                Email
              </span>
              <a
                href="mailto:renumohal1995@gmail.com"
                className="text-xs sm:text-sm font-bold text-neutral-900 hover:text-[#FA551E] transition-colors truncate block"
              >
                renumohal1995@gmail.com
              </a>
            </div>
          </div>

          <div className="rounded-2xl bg-white border border-neutral-200/90 p-5 shadow-xs flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-[#FA551E]/10 flex items-center justify-center text-[#FA551E] shrink-0">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 block">
                Registered Office
              </span>
              <p className="text-xs sm:text-sm font-bold text-neutral-900 leading-snug">
                Bukit Batok, Singapore
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
