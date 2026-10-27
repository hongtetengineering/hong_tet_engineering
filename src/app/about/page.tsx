import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ShieldCheck,
  CheckCircle2,
  Wrench,
  Building2,
  Home as HomeIcon,
  Factory,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  FileText,
  Users,
  Check,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MarqueeStrip } from "@/components/MarqueeStrip";
import { siteConfig } from "@/lib/site-config";
import { getBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "About Hong Tet Engineering | Singapore Structural & Fabrication Contractors",
  description:
    "Learn about Hong Tet Engineering (S) Pte. Ltd. - Singapore's trusted engineering partner for structural steel fabrication, roofing, metalworks, glass installations, and BCA-compliant manpower. Call +65 9898 9760.",
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
  openGraph: {
    title: "About Hong Tet Engineering | Singapore Engineering Partner",
    description:
      "Reliable engineering, precision metal fabrication, roofing, and BCA-compliant workforce solutions based in Bukit Batok, Singapore.",
    url: `${siteConfig.url}/about`,
    images: [
      {
        url: siteConfig.assets.ogImage,
        width: 1200,
        height: 630,
        alt: "About Hong Tet Engineering Singapore",
      },
    ],
  },
  keywords: [
    "About Hong Tet Engineering",
    "Singapore Engineering Contractor",
    "Metal Fabrication Company Singapore",
    "Roofing Contractor Bukit Batok",
    "BCA Skilled Manpower Supply",
    "Structural Steel Fabrication Singapore",
  ],
};

export default function AboutPage() {
  const values = [
    {
      num: "01",
      title: "Precision Engineering",
      desc: "Every I-beam, steel frame, and custom fitting is fabricated to tight millimeter tolerances in compliance with Singapore building codes.",
      icon: Wrench,
    },
    {
      num: "02",
      title: "Workplace Safety & WSH",
      desc: "Zero-compromise safety protocols, continuous site hazard assessments, and full BCA & MOM workplace safety compliance on every site.",
      icon: ShieldCheck,
    },
    {
      num: "03",
      title: "Transparent Communication",
      desc: "Clear scope boundaries, honest material estimates, and upfront timelines with absolutely no hidden fees or unexpected surcharges.",
      icon: FileText,
    },
    {
      num: "04",
      title: "Certified Manpower",
      desc: "Skilled structural welders, riggers, and site technicians vetted for quality workmanship and efficient on-schedule project delivery.",
      icon: Users,
    },
  ];

  const workSteps = [
    {
      step: "01",
      title: "Enquiry & Consultation",
      desc: "Clients share drawings, measurements, photos, and project scope via phone, WhatsApp, or email for immediate assessment.",
    },
    {
      step: "02",
      title: "Scope Review & Site Check",
      desc: "Our engineering team reviews site constraints, material grades, and load specifications to recommend practical solutions.",
    },
    {
      step: "03",
      title: "Itemized Quotation",
      desc: "We deliver a comprehensive, transparent quotation detailing fabrication timelines, materials, and handover schedules.",
    },
    {
      step: "04",
      title: "Fabrication & Site Erection",
      desc: "Precision fabrication in our workshop followed by safe, orderly installation and structural assembly on your site.",
    },
    {
      step: "05",
      title: "Quality Review & Handover",
      desc: "A meticulous joint walkthrough ensures every joint, finish, and safety detail meets complete client satisfaction.",
    },
  ];

  const sectors = [
    {
      icon: HomeIcon,
      title: "Residential & Landed Properties",
      desc: "Custom stainless-steel railings, architectural main gates, polycarbonate skylights, car porches, and house renovation alterations.",
      badge: "Landed & Condos",
    },
    {
      icon: Building2,
      title: "Commercial & Corporate Spaces",
      desc: "Office spatial alterations, frameless tempered glass partitions, entrance portals, acoustic ceilings, and fit-out renovation.",
      badge: "Offices & Retail",
    },
    {
      icon: Factory,
      title: "Industrial & Warehouse Facilities",
      desc: "Heavy-duty structural I-beam frameworks, zinc sheet industrial roofing, mezzanine platforms, and protective steel enclosures.",
      badge: "Factories & Logistics",
    },
    {
      icon: Sparkles,
      title: "Property Improvement & Upgrades",
      desc: "Protective industrial anti-rust coatings, structural restoration, metal repainting, and specialized building maintenance.",
      badge: "Restoration & Upgrades",
    },
  ];

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "About Us", url: "/about" },
  ]);

  return (
    <div
      className="min-h-screen bg-[#FBF9F5] text-neutral-900 selection:bg-[#FA551E] selection:text-white"
      id="top"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Navigation */}
      <Navbar />

      <main>
        {/* =========================================================================
            1. PAGE HERO / INTRODUCTION (Matches Home Page aesthetic & blueprint styling)
            ========================================================================= */}
        <section className="relative w-full max-w-full overflow-hidden">
          <div className="relative w-full bg-[#FAF9F6] border-b border-black/[0.06] rounded-b-[40px] md:rounded-b-[56px] overflow-hidden pt-10 sm:pt-16 pb-14 sm:pb-20">
            {/* Architectural Blueprint Background Image */}
            <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0">
              <Image
                src="/home/105zO15MKPqahxW0hkKzQ2UbeU.png"
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
                Practical Solutions. <br className="hidden sm:inline" />
                <span className="text-[#FA551E]">Professional Workmanship.</span>
              </h1>

              {/* Subtitle */}
              <p className="mt-4 sm:mt-6 text-xs sm:text-base lg:text-lg text-neutral-600 leading-relaxed max-w-2xl mx-auto">
                HONG TET ENGINEERING (S) PTE. LTD. is a Singapore engineering and construction partner specializing in structural steel fabrication, industrial roofing, architectural metal fittings, glass installations, and certified site manpower.
              </p>

              {/* Quick Action Buttons */}
              <div className="mt-7 sm:mt-9 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 max-w-xs sm:max-w-none mx-auto">
                <Link
                  href="/#contact"
                  className="w-full sm:w-auto px-7 sm:px-8 py-3 sm:py-3.5 rounded-full bg-[#FA551E] hover:bg-[#e0430f] text-white text-xs sm:text-sm font-bold tracking-wide shadow-md hover:shadow-lg transition-all active:scale-[0.98] text-center"
                >
                  Request a Quote
                </Link>
                <Link
                  href="/services"
                  className="w-full sm:w-auto px-7 sm:px-8 py-3 sm:py-3.5 rounded-full bg-white hover:bg-neutral-50 text-neutral-900 text-xs sm:text-sm font-bold tracking-wide border border-neutral-300 shadow-2xs hover:shadow-xs transition-all active:scale-[0.98] text-center"
                >
                  Explore Services
                </Link>
              </div>

              {/* Stats Bar */}
              <div className="mt-10 sm:mt-14 max-w-3xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                <div className="bg-white/95 backdrop-blur-xs rounded-2xl border border-neutral-200/90 p-4 shadow-2xs">
                  <span className="text-2xl sm:text-3xl font-black text-neutral-900">34+</span>
                  <p className="text-[11px] sm:text-xs font-semibold text-neutral-600 mt-0.5">Projects Delivered</p>
                </div>
                <div className="bg-white/95 backdrop-blur-xs rounded-2xl border border-neutral-200/90 p-4 shadow-2xs">
                  <span className="text-2xl sm:text-3xl font-black text-neutral-900">16+</span>
                  <p className="text-[11px] sm:text-xs font-semibold text-neutral-600 mt-0.5">Years of Experience</p>
                </div>
                <div className="bg-white/95 backdrop-blur-xs rounded-2xl border border-neutral-200/90 p-4 shadow-2xs">
                  <span className="text-2xl sm:text-3xl font-black text-neutral-900">100%</span>
                  <p className="text-[11px] sm:text-xs font-semibold text-neutral-600 mt-0.5">Safety & BCA Compliance</p>
                </div>
                <div className="bg-white/95 backdrop-blur-xs rounded-2xl border border-neutral-200/90 p-4 shadow-2xs">
                  <span className="text-2xl sm:text-3xl font-black text-neutral-900">6</span>
                  <p className="text-[11px] sm:text-xs font-semibold text-neutral-600 mt-0.5">Core Disciplines</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            2. COMPANY INTRODUCTION & BENTO STORY SECTION
            ========================================================================= */}
        <section className="py-16 sm:py-24 max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <h2 className="text-xl min-[390px]:text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-950 leading-tight">
              Engineering Built Around Your Project Needs
            </h2>
            <p className="mt-3 sm:mt-4 text-xs sm:text-base text-neutral-600 leading-relaxed max-w-xl mx-auto">
              From heavy I-beam framing to refined architectural finishes, our team combines technical precision with reliable on-site execution.
            </p>
          </div>

          {/* Bento Storytelling Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 items-stretch">
            {/* Big Left Feature Card */}
            <div className="md:col-span-7 bg-white rounded-3xl border border-neutral-200/90 p-6 sm:p-10 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-[#FA551E] uppercase tracking-wider mb-3">
                  <span className="w-2 h-2 rounded-full bg-[#FA551E]" />
                  <span>Our Heritage & Purpose</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-900">
                  Reliable Singapore Engineering & Steel Fabrication
                </h3>
                <p className="mt-4 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  Headquartered at Bukit Batok, HONG TET ENGINEERING (S) PTE. LTD. was established to provide Singapore developers, building managers, main contractors, and property owners with direct access to practical engineering expertise without bureaucratic delays.
                </p>
                <p className="mt-3 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  Whether installing heavy structural I-beams in Tuas or custom architectural railings for landed residences in Bukit Timah, we manage the entire fabrication and assembly workflow with unwavering dedication to structural integrity and safety.
                </p>
              </div>

              {/* 3 Key Checkmarks */}
              <div className="mt-8 pt-6 border-t border-neutral-200/80 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="flex items-center gap-2 text-xs font-bold text-neutral-800">
                  <CheckCircle2 className="w-4 h-4 text-[#FA551E] shrink-0" />
                  <span>Direct Workshop</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-neutral-800">
                  <CheckCircle2 className="w-4 h-4 text-[#FA551E] shrink-0" />
                  <span>Licensed Riggers</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-neutral-800">
                  <CheckCircle2 className="w-4 h-4 text-[#FA551E] shrink-0" />
                  <span>On-Time Handover</span>
                </div>
              </div>
            </div>

            {/* Right Photo Card */}
            <div className="md:col-span-5 relative rounded-3xl overflow-hidden min-h-[300px] sm:min-h-[380px] shadow-sm border border-black/5">
              <Image
                src="/services/galary/team-architects-building-site.jpg"
                alt="Hong Tet Engineering team reviewing project specifications"
                fill
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 42vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-[11px] font-bold tracking-wider uppercase text-[#FA551E] block mb-1">
                  On-Site Coordination
                </span>
                <p className="text-sm sm:text-base font-bold leading-snug">
                  BCA-compliant site supervision & technical collaboration across Singapore
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            3. CORE ENGINEERING VALUES & STANDARDS (Dark Premium Section matching ServicesSection)
            ========================================================================= */}
        <section className="bg-[#08090C] text-white py-20 sm:py-28 relative overflow-hidden">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <h2 className="text-xl min-[390px]:text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                Our Engineering Core Values
              </h2>
              <p className="mt-3 sm:mt-4 text-xs sm:text-base text-neutral-400 leading-relaxed max-w-xl mx-auto">
                Strict adherence to Singapore standards, disciplined site execution, and transparent partnerships.
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
              {values.map((v) => {
                const IconComponent = v.icon;
                return (
                  <div
                    key={v.num}
                    className="bg-neutral-900/80 rounded-3xl border border-white/[0.08] p-6 sm:p-7 flex flex-col justify-between hover:border-[#FA551E]/50 transition-colors group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-5">
                        <span className="text-xs font-mono font-bold text-neutral-500 group-hover:text-[#FA551E] transition-colors">
                          [{v.num}]
                        </span>
                        <div className="w-10 h-10 rounded-2xl bg-white/[0.06] flex items-center justify-center text-[#FA551E]">
                          <IconComponent className="w-5 h-5 stroke-[2]" />
                        </div>
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                        {v.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                        {v.desc}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center gap-1.5 text-[11px] font-semibold text-neutral-400">
                      <Check className="w-3.5 h-3.5 text-[#FA551E]" />
                      <span>Verified Standard</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================================
            4. HOW WE WORK (5-Step Project Methodology from Documentation.docx)
            ========================================================================= */}
        <section className="py-16 sm:py-24 max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-xl min-[390px]:text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-950 leading-tight">
              Our 5-Step Project Methodology
            </h2>
            <p className="mt-3 sm:mt-4 text-xs sm:text-base text-neutral-600 leading-relaxed max-w-xl mx-auto">
              A structured workflow ensuring clear scope alignment, safety compliance, and seamless project handover.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 sm:gap-5">
            {workSteps.map((step, idx) => (
              <div
                key={step.step}
                className="bg-white rounded-3xl border border-neutral-200/90 p-5 sm:p-6 shadow-2xs flex flex-col justify-between hover:shadow-md transition-shadow relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-[#FA551E] font-mono">
                      {step.step}
                    </span>
                    {idx < 4 && (
                      <ArrowRight className="hidden md:block w-4 h-4 text-neutral-300" />
                    )}
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-neutral-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-neutral-100 text-[11px] font-bold text-neutral-500 uppercase tracking-wider">
                  Phase {step.step}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            5. WHO WE SERVE (Engineering Support for Different Project Types)
            ========================================================================= */}
        <section className="bg-[#FAF9F6] border-y border-neutral-200/80 py-16 sm:py-24">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <h2 className="text-xl min-[390px]:text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-950 leading-tight">
                Who We Serve Across Singapore
              </h2>
              <p className="mt-3 sm:mt-4 text-xs sm:text-base text-neutral-600 leading-relaxed max-w-xl mx-auto">
                Specialized engineering solutions tailored to residential properties, commercial towers, and industrial plants.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
              {sectors.map((sec) => {
                const IconComp = sec.icon;
                return (
                  <div
                    key={sec.title}
                    className="bg-white rounded-3xl border border-neutral-200/90 p-6 flex flex-col justify-between shadow-xs hover:border-[#FA551E]/40 transition-colors"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 rounded-2xl bg-[#FA551E]/10 flex items-center justify-center text-[#FA551E]">
                          <IconComp className="w-5 h-5 stroke-[2]" />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-600 bg-neutral-100 px-2.5 py-1 rounded-full">
                          {sec.badge}
                        </span>
                      </div>
                      <h3 className="text-sm sm:text-base font-bold text-neutral-900 mb-2">
                        {sec.title}
                      </h3>
                      <p className="text-xs text-neutral-600 leading-relaxed">
                        {sec.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================================
            6. BUILT WITH CONFIDENCE & VERIFIED CONTACT BLOCK (Strict Contact Rules)
            ========================================================================= */}
        <section className="py-16 sm:py-24 max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
            {/* Orange Action Card */}
            <div className="md:col-span-7 rounded-3xl bg-[#FA551E] text-white p-7 sm:p-11 flex flex-col justify-between shadow-lg">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-white/80 block mb-2">
                  Direct Engineering Desk
                </span>
                <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                  Ready To Discuss Your Singapore Project?
                </h3>
                <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-white/90 leading-relaxed max-w-lg">
                  Reach out directly to Hong Tet Engineering. Share your drawings, site photos, or structural specifications for a fast, transparent consultation and itemized quote.
                </p>
                <div className="mt-6 space-y-2.5 text-xs sm:text-sm font-medium">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-white stroke-[2.5]" />
                    <span>Free scope review & measurement check</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-white stroke-[2.5]" />
                    <span>Itemized pricing with zero hidden surcharges</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-white stroke-[2.5]" />
                    <span>BCA-compliant workforce & site supervision</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href="tel:+6598989760"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white text-[#FA551E] text-xs sm:text-sm font-bold shadow-xs hover:bg-neutral-50 transition-colors text-center"
                >
                  <Phone className="w-4 h-4 fill-[#FA551E]" />
                  <span>Call +65 9898 9760</span>
                </a>
                <a
                  href="https://wa.me/6598989760"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-neutral-900 hover:bg-black text-white text-xs sm:text-sm font-bold shadow-xs transition-colors text-center"
                >
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Verified Company Information Card */}
            <div className="md:col-span-5 bg-white rounded-3xl border border-neutral-200/90 p-7 sm:p-9 flex flex-col justify-between shadow-xs">
              <div>
                <div className="relative h-12 w-36 mb-6">
                  <Image
                    src="/logo/full-logo-transparent.webp"
                    alt="Hong Tet Engineering Logo"
                    fill
                    className="object-contain object-left"
                  />
                </div>
                <h4 className="text-base sm:text-lg font-bold text-neutral-900 mb-1">
                  HONG TET ENGINEERING (S) PTE. LTD.
                </h4>
                <p className="text-xs text-neutral-500 font-medium mb-6">
                  Registered Engineering & Construction Company in Singapore
                </p>

                <div className="space-y-4 text-xs sm:text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#FA551E] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-neutral-800 block text-xs">Registered Address</span>
                      <p className="text-neutral-600 font-medium leading-snug">
                        217 Bukit Batok Street 21, #04-371, Singapore 650217
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-[#FA551E] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-neutral-800 block text-xs">Phone Support</span>
                      <a
                        href="tel:+6598989760"
                        className="text-neutral-900 font-bold hover:text-[#FA551E] transition-colors"
                      >
                        +65 9898 9760
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-[#FA551E] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-neutral-800 block text-xs">Direct Email</span>
                      <a
                        href="mailto:renumohal1995@gmail.com"
                        className="text-neutral-900 font-bold hover:text-[#FA551E] transition-colors break-all"
                      >
                        renumohal1995@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-neutral-100 flex items-center justify-between text-[11px] font-semibold text-neutral-500">
                <span>Singapore Operations</span>
                <span>Islandwide Deployment</span>
              </div>
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
