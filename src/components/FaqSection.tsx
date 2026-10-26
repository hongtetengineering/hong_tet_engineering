"use client";

import { useState } from "react";
import { Plus, Minus, ArrowRight, MessageSquare } from "lucide-react";
import Link from "next/link";

export function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "How do I start a project with Hong Tet Engineering?",
      a: "Simply call, email, or send us a WhatsApp message with your project scope, location, and any drawings, measurements, or site photos. We will review your requirements and coordinate an initial consultation.",
    },
    {
      q: "Do you provide on-site inspections and estimates?",
      a: "Yes. We arrange on-site inspections across Singapore to verify measurements and assess site conditions before preparing a transparent, itemized quotation with no hidden costs.",
    },
    {
      q: "What type of engineering and fabrication work do you handle?",
      a: "We specialize in structural metal fabrication, I-beam framing, roofing (zinc sheets, clay tiles, polycarbonate skylights, composite panels), stainless steel railings, gratings, main gates, glass doors, commercial renovation, painting, and skilled manpower supply.",
    },
    {
      q: "How long will my project take?",
      a: "Timelines depend on the scale of fabrication and site preparation. Small repairs and fittings are typically completed within days, while large structural steel frameworks or commercial renovations are executed with structured milestone dates.",
    },
    {
      q: "Can the scope or materials change later?",
      a: "Yes. Engineering projects often require practical site adjustments. We communicate openly with clients and will confirm any revisions to drawings, materials, or schedules before proceeding.",
    },
    {
      q: "Are your fabrication and installation crews licensed?",
      a: "Yes. Our skilled technicians, certified welders, and supervisors adhere strictly to Singapore Workplace Safety and Health (WSH) guidelines and BCA standards.",
    },
  ];

  return (
    <section id="faq" className="bg-[#F6F4F0] py-20 sm:py-28 relative">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Title, Subtitle & Support Card */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <h2 className="text-[17px] min-[390px]:text-xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-neutral-950 leading-tight whitespace-nowrap mb-2 sm:mb-4">
              Frequently Asked Questions
            </h2>

            <p className="text-xs sm:text-base text-neutral-600 leading-relaxed max-w-sm sm:max-w-md">
              Find clear answers regarding our structural steel fabrication, industrial roofing, BCA approvals, and Singapore project workflows.
            </p>

            {/* Support Callout Card */}
            <div className="mt-6 sm:mt-8 rounded-2xl bg-white border border-neutral-200/80 p-5 sm:p-7 shadow-xs">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#FA551E]/10 flex items-center justify-center text-[#FA551E] mb-3 sm:mb-4">
                <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2]" />
              </div>
              <h4 className="text-sm sm:text-base font-bold text-neutral-900">
                Still have questions?
              </h4>
              <p className="mt-1 sm:mt-1.5 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Can&apos;t find what you&apos;re looking for? Reach out to our Singapore engineering desk directly for assistance.
              </p>
              <Link
                href="#contact"
                className="mt-4 sm:mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FA551E] hover:bg-[#e0430f] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-xs"
              >
                <span>Ask An Engineer</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Right Column: Accordions */}
          <div className="lg:col-span-7 space-y-3 sm:space-y-3.5">
            {faqs.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-white border border-neutral-200/90 overflow-hidden shadow-2xs transition-all hover:border-neutral-300"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                    className="w-full px-4 sm:px-6 py-4 sm:py-5.5 flex items-center justify-between text-left gap-3 sm:gap-4"
                  >
                    <span className="text-xs sm:text-base font-bold text-neutral-900 leading-snug">
                      {faq.q}
                    </span>
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-600 shrink-0 transition-colors">
                      {isOpen ? (
                        <Minus className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" />
                      ) : (
                        <Plus className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" />
                      )}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-1 text-xs sm:text-sm text-neutral-600 leading-relaxed border-t border-neutral-100">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
