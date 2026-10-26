"use client";

import { useState } from "react";
import Image from "next/image";
import { Send, CheckCircle2, MessageSquare, Phone } from "lucide-react";

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
    window.open(`https://wa.me/6583145705?text=${text}`, "_blank");
  };

  return (
    <section id="contact" className="bg-[#08090C] text-white py-20 sm:py-28 relative">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Image */}
          <div className="lg:col-span-5 relative h-[380px] sm:h-[500px] lg:h-[580px] rounded-3xl overflow-hidden border border-white/10 shadow-xl bg-neutral-900">
            <Image
              src="/home/bTKcWRZFnXXRl0SfE0GiqJWx90Q.png"
              alt="Engineers reviewing project drawings"
              fill
              className="object-cover"
            />
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FA551E]" />
              <span>Contact</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              Ready to Start Your Project?
            </h2>

            <p className="mt-3 text-sm sm:text-base text-neutral-400 leading-relaxed max-w-lg">
              Tell us about your build and receive a free consultation, site assessment, and transparent estimate.
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
                  Your enquiry has been prepared. You can connect with our Singapore engineering desk immediately via WhatsApp or phone.
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
                    href="tel:+6583145705"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#FA551E]" />
                    <span>Call +65 8314 5705</span>
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
                      <option value="Metal Structure & I-Beams" className="bg-[#12141A]">
                        Metal Structure & I-Beam Fabrication
                      </option>
                      <option value="Roofing & Shelter Works" className="bg-[#12141A]">
                        Roofing & Shelter Works
                      </option>
                      <option value="Stainless Steel Railings & Gates" className="bg-[#12141A]">
                        Stainless Steel Railings & Gates
                      </option>
                      <option value="Glass Installation" className="bg-[#12141A]">
                        Architectural Glass Installation
                      </option>
                      <option value="Renovation & Painting" className="bg-[#12141A]">
                        House / Commercial Renovation & Painting
                      </option>
                      <option value="Skilled Manpower Supply" className="bg-[#12141A]">
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
                      <option value="$15,000 - $50,000" className="bg-[#12141A]">
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
