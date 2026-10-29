"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  CheckCircle2,
  Check,
  ShieldCheck,
  Send,
  Building2,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MarqueeStrip } from "@/components/MarqueeStrip";

export function ContactClientView() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    budget: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const openWhatsApp = () => {
    const text = `*New Project Consultation - Hong Tet Engineering*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Email:* ${formData.email}%0A*Service:* ${formData.service || "General"}%0A*Budget:* ${formData.budget || "TBD"}%0A*Details:* ${encodeURIComponent(formData.message || "Consultation requested")}`;
    window.open(`https://wa.me/6598989760?text=${text}`, "_blank");
  };

  return (
    <div
      className="min-h-screen bg-[#FBF9F5] text-neutral-900 selection:bg-[#FA551E] selection:text-white"
      id="top"
    >
      {/* Navigation */}
      <Navbar />

      <main>
        {/* =========================================================================
            1. HERO SECTION (Blueprint style matching Home Page)
            ========================================================================= */}
        <section className="relative w-full max-w-full overflow-hidden">
          <div className="relative w-full bg-[#FAF9F6] border-b border-black/[0.06] rounded-b-[40px] md:rounded-b-[56px] overflow-hidden pt-10 sm:pt-16 pb-14 sm:pb-20">
            {/* Architectural Blueprint Background Image */}
            <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0">
              <Image
                src="/home/105zO15MKPqahxW0hkKzQ2UbeU.webp"
                alt="Architectural Blueprint Drawing"
                fill
                priority
                className="object-cover object-center opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#FAF9F6]/40 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Warm glow rising from bottom */}
            <div
              className="absolute inset-x-0 bottom-0 h-[65%] pointer-events-none z-1"
              style={{
                background:
                  "linear-gradient(to top, rgba(255, 178, 115, 0.40) 0%, rgba(255, 208, 155, 0.25) 40%, transparent 100%)",
              }}
            />

            <div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-6 text-center">
              {/* Main Heading */}
              <h1 className="text-3xl min-[380px]:text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-black tracking-tight text-neutral-900 leading-[1.05] max-w-5xl mx-auto">
                Ready To Start Your Project? <br className="hidden sm:inline" />
                <span className="text-[#FA551E]">Contact Our Engineering Team.</span>
              </h1>

              {/* Subtitle */}
              <p className="mt-4 sm:mt-6 text-xs sm:text-base lg:text-lg text-neutral-600 leading-relaxed max-w-2xl mx-auto">
                Connect directly with Hong Tet Engineering (S) Pte. Ltd. for structural steel fabrication, roofing, architectural glass, and BCA manpower consultations across Singapore.
              </p>

              {/* Direct Communication Quick Badges */}
              <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2.5 sm:gap-4 text-xs font-semibold max-w-sm sm:max-w-none mx-auto">
                <a
                  href="tel:+6598989760"
                  className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-white text-neutral-800 border border-neutral-200/80 shadow-2xs hover:border-[#FA551E]/40 hover:text-[#FA551E] transition-all text-center"
                >
                  <Phone className="w-3.5 h-3.5 text-[#FA551E]" />
                  <span>Call: +65 9898 9760</span>
                </a>
                <a
                  href="https://wa.me/6598989760"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-white text-neutral-800 border border-neutral-200/80 shadow-2xs hover:border-[#FA551E]/40 hover:text-[#FA551E] transition-all text-center"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                  <span>WhatsApp: +65 9898 9760</span>
                </a>
                <a
                  href="mailto:renumohal1995@gmail.com"
                  className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-white text-neutral-800 border border-neutral-200/80 shadow-2xs hover:border-[#FA551E]/40 hover:text-[#FA551E] transition-all break-all text-center"
                >
                  <Mail className="w-3.5 h-3.5 text-[#FA551E]" />
                  <span>renumohal1995@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            2. CONTACT SECTION (Clean Light Theme: Company Info & Consultation Form)
            ========================================================================= */}
        <section className="py-16 sm:py-24 max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Left Column: Official Company Details & Credentials */}
            <div className="lg:col-span-5 space-y-6">
              {/* Main Information Card */}
              <div className="bg-white rounded-3xl border border-neutral-200/90 p-6 sm:p-9 shadow-xs">
                <div className="relative h-12 w-36 mb-6">
                  <Image
                    src="/logo/full-logo-transparent.webp"
                    alt="Hong Tet Engineering Logo"
                    fill
                    className="object-contain object-left"
                  />
                </div>

                <h2 className="text-xl sm:text-2xl font-black text-neutral-900 tracking-tight mb-2">
                  HONG TET ENGINEERING (S) PTE. LTD.
                </h2>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-6">
                  Providing reliable engineering, structural fabrication, roofing, metalworks, and certified manpower solutions across Singapore.
                </p>

                <div className="space-y-4 pt-4 border-t border-neutral-100 text-xs sm:text-sm">
                  {/* Address */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-[#FA551E]/10 flex items-center justify-center text-[#FA551E] shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-bold text-neutral-900 block text-xs uppercase tracking-wider">
                        Registered Office
                      </span>
                      <p className="text-neutral-600 font-medium leading-snug mt-0.5">
                        217 Bukit Batok Street 21, #04-371, Singapore 650217
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-[#FA551E]/10 flex items-center justify-center text-[#FA551E] shrink-0 mt-0.5">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-bold text-neutral-900 block text-xs uppercase tracking-wider">
                        Phone Call
                      </span>
                      <a
                        href="tel:+6598989760"
                        className="text-neutral-900 font-bold hover:text-[#FA551E] transition-colors mt-0.5 block"
                      >
                        +65 9898 9760
                      </a>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 shrink-0 mt-0.5">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-bold text-neutral-900 block text-xs uppercase tracking-wider">
                        WhatsApp Click-to-Chat
                      </span>
                      <a
                        href="https://wa.me/6598989760"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-700 font-bold hover:text-emerald-600 transition-colors mt-0.5 block"
                      >
                        +65 9898 9760
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-[#FA551E]/10 flex items-center justify-center text-[#FA551E] shrink-0 mt-0.5">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-bold text-neutral-900 block text-xs uppercase tracking-wider">
                        Email Address
                      </span>
                      <a
                        href="mailto:renumohal1995@gmail.com"
                        className="text-neutral-900 font-bold hover:text-[#FA551E] transition-colors break-all mt-0.5 block"
                      >
                        renumohal1995@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Operating Hours */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-neutral-100 flex items-center justify-center text-neutral-700 shrink-0 mt-0.5">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-bold text-neutral-900 block text-xs uppercase tracking-wider">
                        Working Hours
                      </span>
                      <p className="text-neutral-600 font-medium leading-snug mt-0.5">
                        Monday – Saturday: 8:00 AM – 7:00 PM <br />
                        <span className="text-neutral-500 text-xs">Sunday / Public Holidays: By appointment</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* 3 Trust Signals */}
                <div className="mt-8 pt-6 border-t border-neutral-100 space-y-2 text-xs font-semibold text-neutral-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#FA551E] shrink-0" />
                    <span>Free on-site measurement & scope assessment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#FA551E] shrink-0" />
                    <span>Transparent itemized quotation with zero hidden fees</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#FA551E] shrink-0" />
                    <span>BCA & WSH compliant workforce & supervision</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Consultation & Quote Form */}
            <div className="lg:col-span-7 bg-white rounded-3xl border border-neutral-200/90 p-6 sm:p-10 shadow-xs">
              <div className="mb-8">
                <span className="text-xs font-bold text-[#FA551E] uppercase tracking-wider block mb-1">
                  Enquiry Form
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-900">
                  Request an Engineering Quote
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  Fill in your project details below. Our technical team will review your specifications and contact you shortly.
                </p>
              </div>

              {submitted ? (
                <div className="rounded-2xl bg-neutral-50 border border-emerald-500/30 p-8 text-center animate-in fade-in">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="text-xl font-bold text-neutral-900">
                    Thank You, {formData.name || "Client"}!
                  </h4>
                  <p className="mt-2 text-xs sm:text-sm text-neutral-600 max-w-md mx-auto leading-relaxed">
                    Your project details have been successfully prepared. You can connect with our Singapore engineering desk immediately via WhatsApp or phone.
                  </p>

                  <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
                    <button
                      onClick={openWhatsApp}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-xs transition-colors cursor-pointer text-center"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Send via WhatsApp</span>
                    </button>
                    <a
                      href="tel:+6598989760"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#FA551E] hover:bg-[#e0430f] text-white text-xs font-bold shadow-xs transition-colors text-center"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Call +65 9898 9760</span>
                    </a>
                  </div>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-xs text-neutral-500 hover:text-neutral-800 underline underline-offset-4 cursor-pointer block mx-auto"
                  >
                    Submit another enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. David Tan"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-300 text-neutral-900 placeholder-neutral-400 text-base sm:text-sm focus:outline-none focus:border-[#FA551E] focus:bg-white transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. +65 9123 4567"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-300 text-neutral-900 placeholder-neutral-400 text-base sm:text-sm focus:outline-none focus:border-[#FA551E] focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. david@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-300 text-neutral-900 placeholder-neutral-400 text-sm focus:outline-none focus:border-[#FA551E] focus:bg-white transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                        Service Required *
                      </label>
                      <select
                        required
                        value={formData.service}
                        onChange={(e) =>
                          setFormData({ ...formData, service: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm focus:outline-none focus:border-[#FA551E] focus:bg-white transition-colors"
                      >
                        <option value="" disabled>
                          Select a Service...
                        </option>
                        <option value="Metal Structure Fabrication & I-Beams">
                          01. Metal Structure & I-Beam Fabrication
                        </option>
                        <option value="Roofing & Shelter Solutions">
                          02. Roofing & Shelter Solutions
                        </option>
                        <option value="Metal & Stainless-Steel Works">
                          03. Metal & Stainless-Steel Railings/Gates
                        </option>
                        <option value="Architectural Glass Installation">
                          04. Architectural Glass Installation
                        </option>
                        <option value="Renovation & Protective Painting">
                          05. Renovation & Protective Painting
                        </option>
                        <option value="Skilled Manpower Supply">
                          06. Skilled Manpower Supply
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                        Estimated Budget
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) =>
                          setFormData({ ...formData, budget: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm focus:outline-none focus:border-[#FA551E] focus:bg-white transition-colors"
                      >
                        <option value="" disabled>
                          Select estimated budget...
                        </option>
                        <option value="Under S$5,000">Under S$5,000</option>
                        <option value="S$5,000 - S$15,000">S$5,000 - S$15,000</option>
                        <option value="S$15,000 - S$50,000">S$15,000 - S$50,000</option>
                        <option value="S$50,000+">S$50,000+</option>
                        <option value="To be discussed">To be discussed</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                      Project Scope & Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Please share project location, approximate measurements, drawings or specific requirements..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-300 text-neutral-900 placeholder-neutral-400 text-sm focus:outline-none focus:border-[#FA551E] focus:bg-white transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#FA551E] hover:bg-[#e0430f] text-white text-xs sm:text-sm font-bold tracking-wide shadow-md hover:shadow-lg transition-all active:scale-[0.98] cursor-pointer inline-flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Request Free Consultation</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* Infinite Marquee Ticker */}
        <MarqueeStrip />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
