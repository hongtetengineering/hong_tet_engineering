"use client";

import { CheckCircle2, MessageSquare, Phone } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export function ContactSection() {
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
    const text = `*New Project Enquiry - Hong Tet Engineering*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Email:* ${formData.email}%0A*Service:* ${formData.service || "General"}%0A*Budget:* ${formData.budget || "TBD"}%0A*Details:* ${encodeURIComponent(formData.message || "Consultation requested")}`;
    window.open(`https://wa.me/6598989760?text=${text}`, "_blank");
  };

  return (
    <section
      id="contact"
      className="bg-[#08090C] text-white py-20 sm:py-28 relative"
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Relevant Engineering Photo */}
          <div className="lg:col-span-5 relative h-[300px] sm:h-[480px] lg:h-[560px] rounded-3xl overflow-hidden border border-white/12 shadow-2xl bg-neutral-900 group">
            <Image
              src="/home/contact-engineering-team.jpg"
              alt="Hong Tet Engineering team reviewing site drawings"
              fill
              className="object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
              sizes="(max-width: 1024px) 100vw, 500px"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

            {/* Bottom Floating Glass Badge */}
            <div className="absolute bottom-3 left-3 right-3 sm:bottom-5 sm:left-5 sm:right-5 rounded-2xl bg-black/60 backdrop-blur-md border border-white/15 p-3.5 sm:p-5 flex items-center justify-between gap-2.5 sm:gap-3">
              <div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-white">
                    Direct Consultations
                  </span>
                </div>
                <p className="text-[10px] sm:text-[11px] text-neutral-300 mt-0.5 sm:mt-1">
                  BCA & WSH Compliant Singapore Specialists
                </p>
              </div>
              <div className="text-right shrink-0">
                <span className="text-[11px] sm:text-xs font-mono text-[#FA551E] font-bold">
                  Fast Turnaround
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <h2 className="text-[18px] min-[390px]:text-xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight whitespace-nowrap mb-2 sm:mb-3">
              Ready to Start Your Project?
            </h2>

            <p className="text-xs sm:text-base text-neutral-400 leading-relaxed max-w-sm sm:max-w-lg">
              Tell us about your build to receive an initial engineering consultation, on-site measurement assessment, and a transparent itemized estimate.
            </p>

            {submitted ? (
              <div className="mt-8 rounded-2xl bg-[#12141A] border border-[#FA551E]/40 p-8 text-center animate-in fade-in">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  Thank You, {formData.name || "Client"}!
                </h3>
                <p className="mt-2 text-sm text-neutral-300 max-w-md mx-auto">
                  Your enquiry has been prepared. You can connect with our
                  Singapore engineering desk immediately via WhatsApp or phone.
                </p>

                <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                  <button
                    onClick={openWhatsApp}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send via WhatsApp</span>
                  </button>
                  <a
                    href="tel:+6598989760"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider transition-colors whitespace-nowrap"
                  >
                    <Phone className="w-4 h-4 text-[#FA551E]" />
                    <span>Call +65&nbsp;9898&nbsp;9760</span>
                  </a>
                </div>

                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-xs text-neutral-500 underline hover:text-white"
                >
                  Submit another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3.5 rounded-xl bg-[#12141A] border border-white/10 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-[#FA551E] transition-colors"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      required
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-4 py-3.5 rounded-xl bg-[#12141A] border border-white/10 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-[#FA551E] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <input
                    type="email"
                    required
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3.5 rounded-xl bg-[#12141A] border border-white/10 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-[#FA551E] transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <select
                      value={formData.service}
                      onChange={(e) =>
                        setFormData({ ...formData, service: e.target.value })
                      }
                      className="w-full px-4 py-3.5 rounded-xl bg-[#12141A] border border-white/10 text-white text-sm focus:outline-none focus:border-[#FA551E] transition-colors"
                    >
                      <option value="" disabled className="text-neutral-500">
                        Service...
                      </option>
                      <option
                        value="Metal Structure & I-Beams"
                        className="bg-[#12141A]"
                      >
                        Metal Structure & I-Beam Fabrication
                      </option>
                      <option
                        value="Roofing & Shelter Works"
                        className="bg-[#12141A]"
                      >
                        Roofing & Shelter Works
                      </option>
                      <option
                        value="Stainless Steel Railings & Gates"
                        className="bg-[#12141A]"
                      >
                        Stainless Steel Railings & Gates
                      </option>
                      <option
                        value="Glass Installation"
                        className="bg-[#12141A]"
                      >
                        Architectural Glass Installation
                      </option>
                      <option
                        value="Renovation & Painting"
                        className="bg-[#12141A]"
                      >
                        House / Commercial Renovation & Painting
                      </option>
                      <option
                        value="Skilled Manpower Supply"
                        className="bg-[#12141A]"
                      >
                        Skilled Manpower Supply
                      </option>
                    </select>
                  </div>

                  <div>
                    <select
                      value={formData.budget}
                      onChange={(e) =>
                        setFormData({ ...formData, budget: e.target.value })
                      }
                      className="w-full px-4 py-3.5 rounded-xl bg-[#12141A] border border-white/10 text-white text-sm focus:outline-none focus:border-[#FA551E] transition-colors"
                    >
                      <option value="" disabled className="text-neutral-500">
                        Budget...
                      </option>
                      <option value="Under $5,000" className="bg-[#12141A]">
                        Under S$5,000
                      </option>
                      <option value="$5,000 - $15,000" className="bg-[#12141A]">
                        S$5,000 - S$15,000
                      </option>
                      <option
                        value="$15,000 - $50,000"
                        className="bg-[#12141A]"
                      >
                        S$15,000 - S$50,000
                      </option>
                      <option value="$50,000+" className="bg-[#12141A]">
                        S$50,000+
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <textarea
                    rows={4}
                    placeholder="Type your message or project requirements..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3.5 rounded-xl bg-[#12141A] border border-white/10 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-[#FA551E] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#FA551E] hover:bg-[#e0430f] text-white text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all active:scale-[0.98]"
                >
                  Get Free Estimate
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
