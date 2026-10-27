import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  Wrench,
  ShieldCheck,
  CheckCircle2,
  HardHat,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Check,
  Layers,
  Sparkles,
  Building,
  Hammer,
  Users,
  Compass,
  FileCheck,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MarqueeStrip } from "@/components/MarqueeStrip";

export const metadata: Metadata = {
  title: "Engineering Services | HONG TET ENGINEERING (S) PTE. LTD.",
  description:
    "Explore professional engineering services in Singapore: structural steel I-beams, roofing & shelters, stainless-steel works, architectural glass, renovation, and BCA skilled manpower. Call +65 9898 9760.",
  keywords: [
    "Singapore Engineering Services",
    "Metal Structure Fabrication Singapore",
    "I-Beam Installation",
    "Industrial Roofing Singapore",
    "Stainless Steel Railing Contractor",
    "Glass Installation Singapore",
    "BCA Skilled Manpower Supply",
  ],
};

export default function ServicesPage() {
  const services = [
    {
      id: "01",
      anchor: "metal-structures",
      title: "Metal Structure Fabrication & I-Beams",
      shortDesc:
        "Complete fabrication and erection of structural steel frameworks, industrial I-beam framing, warehouse supports, and custom components.",
      image:
        "/services/stock-image/factory-worker-working-warehouse-handling-metal-material-production.jpg",
      features: ["I-Beam Installation", "Structural Steel Framework"],
      scope: [
        "Heavy structural steel I-beam cutting, drilling, and welding",
        "Warehouse framing, industrial mezzanines, and load-bearing columns",
        "Custom steel brackets, base plates, and reinforcement brackets",
        "On-site erection and crane rigging in full compliance with BCA codes",
      ],
      materials: [
        "Universal Beams (UB) & Columns (UC)",
        "Structural Hollow Sections (SHS/RHS)",
        "High-tensile Grade 50 steel",
      ],
    },
    {
      id: "02",
      anchor: "roofing-shelters",
      title: "Roofing & Shelter Solutions",
      shortDesc:
        "Weatherproof industrial roofing and canopy installations built for tropical durability using zinc sheets, tiles, and polycarbonate panels.",
      image: "/services/stock-image/medium-shot-men-working-together.jpg",
      features: ["Zinc Sheet Roofing", "Polycarbonate Skylights"],
      scope: [
        "Industrial zinc sheet roofing installation and re-roofing",
        "Multi-wall polycarbonate skylights and natural daylight canopies",
        "Clay roof tile replacement and waterproofing underlayment",
        "Aluminum composite and honeycomb architectural panels",
      ],
      materials: [
        "Corrugated zinc roofing sheets",
        "UV-resistant polycarbonate panels",
        "Galvanized steel purlins & rafters",
      ],
    },
    {
      id: "03",
      anchor: "metal-stainless",
      title: "Metal & Stainless-Steel Works",
      shortDesc:
        "Precision fabrication of architectural metal fittings built for durability and refined finish: railings, main gates, and industrial staircases.",
      image:
        "/services/stock-image/worker-working-with-circular-grinder-metal-with-sparks.jpg",
      features: ["Stainless-Steel Railings", "Main Gates & Staircases"],
      scope: [
        "Grade 304 and marine-grade 316 stainless-steel railings",
        "Heavy-duty industrial safety gratings and trench covers",
        "Automated sliding main gates, pedestrian swing gates, and barriers",
        "Straight and spiral industrial fire escape staircases",
      ],
      materials: [
        "Marine Grade 316 Stainless Steel",
        "Hot-dip galvanized mild steel",
        "Powder-coated architectural finishes",
      ],
    },
    {
      id: "04",
      anchor: "architectural-glass",
      title: "Architectural Glass Installation",
      shortDesc:
        "Modern architectural glass solutions combining spatial elegance with strict safety standards: frameless doors, windows, and balustrades.",
      image: "/services/stock-image/carpenter-holds-drill-drills-window.jpg",
      features: ["Frameless Glass Doors", "Glass Balustrades"],
      scope: [
        "Tempered frameless glass swing doors and sliding entrance portals",
        "Structural glass balustrades with recessed base shoe channels",
        "Acoustic double-glazed windows and curtain wall sections",
        "Commercial glass partitions for corporate meeting rooms",
      ],
      materials: [
        "10mm–19mm Tempered Safety Glass",
        "Laminated acoustic security glass",
        "Stainless-steel spider & patch fittings",
      ],
    },
    {
      id: "05",
      anchor: "renovation-painting",
      title: "Renovation & Protective Painting",
      shortDesc:
        "End-to-end spatial alterations, interior and exterior building renovation, and protective industrial-grade painting for homes and offices.",
      image:
        "/services/stock-image/sideways-shot-busy-handyman-dressed-safety-uniform-holds-paint-roller-wears-protective-mask-works-hard-isolated-pink-wall-repair-renovation-concept-maintenance-worker.jpg",
      features: ["House & Landed Renovation", "Commercial Office Fit-Outs"],
      scope: [
        "Residential alterations, kitchen additions, and car porch revamps",
        "Commercial office reinstatement, drywall partitioning, and fit-outs",
        "Protective anti-corrosion epoxy coatings for metal structures",
        "Exterior weather-resistant facade repainting and waterproofing",
      ],
      materials: [
        "Heavy-duty anti-rust epoxy primers",
        "Weatherproof elastomeric facade paint",
        "BCA-approved fire-rated drywalls",
      ],
    },
    {
      id: "06",
      anchor: "manpower-supply",
      title: "Skilled Manpower Supply",
      shortDesc:
        "Certified, BCA-compliant engineering workforce including structural welders, metal fabricators, riggers, and site technicians deployed on demand.",
      image: "/services/stock-image/confident-architect-smiling.jpg",
      features: ["BCA Compliant Workforce", "Certified Welders & Riggers"],
      scope: [
        "Certified 3G, 4G, and 6G structural welders for site erection",
        "Skilled structural metal fabricators and steel fitters",
        "BCA-certified lifting riggers, signalmen, and crane supervisors",
        "Flexible daily or project-based site deployment across Singapore",
      ],
      materials: [
        "BCA-certified skilled trade workers",
        "MOM workplace safety compliance",
        "Full PPE and certified site gear",
      ],
    },
  ];

  const advantages = [
    {
      title: "Full-Scope In-House Capabilities",
      desc: "From structural steel framing to architectural glass and certified site labor, we handle complete project scopes under one roof.",
      icon: Layers,
    },
    {
      title: "Engineered For Singapore Codes",
      desc: "All fabrications, connections, and installations adhere strictly to Singapore BCA building regulations and MOM safety standards.",
      icon: ShieldCheck,
    },
    {
      title: "Transparent Scope & Pricing",
      desc: "Itemized bills of quantities and clear timelines ensure you know exactly what is delivered with zero surprise surcharges.",
      icon: FileCheck,
    },
    {
      title: "Single Direct Point of Contact",
      desc: "Our Bukit Batok team provides fast site coordination, immediate drawing reviews, and direct WhatsApp or phone communication.",
      icon: Phone,
    },
  ];

  return (
    <div
      className="min-h-screen bg-[#FBF9F5] text-neutral-900 selection:bg-[#FA551E] selection:text-white"
      id="top"
    >
      {/* Navigation */}
      <Navbar />

      <main>
        {/* =========================================================================
            1. PAGE HERO / HEADER (Blueprint style matching Home Page)
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
              {/* Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-xs border border-neutral-200/90 shadow-2xs mb-5">
                <span className="w-2 h-2 rounded-full bg-[#FA551E] animate-pulse" />
                <span className="text-xs font-bold text-neutral-800 tracking-wider uppercase">
                  Comprehensive Engineering Capabilities
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl min-[380px]:text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-black tracking-tight text-neutral-900 leading-[1.05] max-w-5xl mx-auto">
                Engineering & Construction <br className="hidden sm:inline" />
                <span className="text-[#FA551E]">Services Built To Last.</span>
              </h1>

              {/* Subtitle */}
              <p className="mt-4 sm:mt-6 text-xs sm:text-base lg:text-lg text-neutral-600 leading-relaxed max-w-2xl mx-auto">
                From structural steel I-beams and industrial roofing to architectural metal fittings, commercial glass, and certified BCA site manpower across Singapore.
              </p>

              {/* Quick CTAs */}
              <div className="mt-7 sm:mt-9 flex flex-wrap items-center justify-center gap-3.5 sm:gap-4">
                <Link
                  href="/#contact"
                  className="px-7 sm:px-8 py-3 sm:py-3.5 rounded-full bg-[#FA551E] hover:bg-[#e0430f] text-white text-xs sm:text-sm font-bold tracking-wide shadow-md hover:shadow-lg transition-all active:scale-[0.98]"
                >
                  Request a Quote
                </Link>
                <a
                  href="tel:+6598989760"
                  className="px-7 sm:px-8 py-3 sm:py-3.5 rounded-full bg-white hover:bg-neutral-50 text-neutral-900 text-xs sm:text-sm font-bold tracking-wide border border-neutral-300 shadow-2xs hover:shadow-xs transition-all active:scale-[0.98]"
                >
                  Call +65 9898 9760
                </a>
              </div>

              {/* Quick Jump Bar for 6 Services */}
              <div className="mt-10 sm:mt-14 max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
                {services.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.anchor}`}
                    className="px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-xs border border-neutral-200/90 text-[11px] sm:text-xs font-semibold text-neutral-700 hover:text-[#FA551E] hover:border-[#FA551E]/40 transition-colors shadow-2xs"
                  >
                    {s.id}. {s.title.split("&")[0].trim()}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            2. SERVICES OVERVIEW GRID (Clean Light Design)
            ========================================================================= */}
        <section className="bg-white py-16 sm:py-24 relative overflow-hidden border-b border-neutral-200/80">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
              <h2 className="text-xl min-[390px]:text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-950 leading-tight whitespace-nowrap">
                Our 6 Core Disciplines
              </h2>
              <p className="mt-3 sm:mt-4 text-xs sm:text-base text-neutral-600 leading-relaxed max-w-xl mx-auto">
                Engineered with practical workmanship and strict safety compliance for Singapore residential, commercial, and industrial projects.
              </p>
            </div>

            {/* 3 cards per row grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {services.map((s) => (
                <div
                  key={s.id}
                  className="bg-white rounded-3xl overflow-hidden border border-neutral-200/90 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Photo Container */}
                    <div className="relative h-[220px] sm:h-[240px] w-full overflow-hidden bg-neutral-100">
                      <Image
                        src={s.image}
                        alt={s.title}
                        fill
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute top-3.5 left-3.5 z-10">
                        <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-xs text-neutral-800 border border-neutral-200/80 shadow-2xs">
                          Service [{s.id}]
                        </span>
                      </div>
                    </div>

                    {/* Content Details */}
                    <div className="p-5 sm:p-6">
                      <div className="flex flex-wrap gap-1.5 mb-2.5">
                        {s.features.map((f, i) => (
                          <span
                            key={i}
                            className="text-[10px] sm:text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-[#FA551E]/10 text-[#FA551E] border border-[#FA551E]/20"
                          >
                            {f}
                          </span>
                        ))}
                      </div>
                      <h3
                        title={s.title}
                        className="text-base sm:text-lg font-bold text-neutral-900 tracking-tight leading-snug line-clamp-1"
                      >
                        {s.title}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm text-neutral-600 leading-relaxed line-clamp-2">
                        {s.shortDesc}
                      </p>
                    </div>
                  </div>

                  {/* Card Bottom Link */}
                  <div className="px-5 sm:px-6 pb-5 pt-2 border-t border-neutral-100 flex items-center justify-between">
                    <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider">
                      Singapore Scope
                    </span>
                    <a
                      href={`#${s.anchor}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FA551E] hover:underline underline-offset-4"
                    >
                      <span>Technical Specs</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            3. DETAILED TECHNICAL CAPABILITY BREAKDOWNS (Expanded scope per service)
            ========================================================================= */}
        <section className="bg-[#FAF9F6] border-b border-neutral-200/80 py-16 sm:py-24">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
            <h2 className="text-xl min-[390px]:text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-950 leading-tight whitespace-nowrap">
              Detailed Scope & Technical Specifications
            </h2>
            <p className="mt-3 sm:mt-4 text-xs sm:text-base text-neutral-600 leading-relaxed max-w-xl mx-auto">
              In-depth engineering capabilities, tested materials, and installation methods customized to project requirements.
            </p>
          </div>

          <div className="space-y-12 sm:space-y-16">
            {services.map((item, index) => {
              const isEven = index % 2 === 1;
              return (
                <div
                  key={item.id}
                  id={item.anchor}
                  className="bg-white rounded-3xl border border-neutral-200/90 overflow-hidden shadow-xs scroll-mt-24"
                >
                  <div
                    className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[420px] lg:min-h-[460px]"
                  >
                    {/* Visual Photo Card - Full height and width edge-to-edge */}
                    <div
                      className={`lg:col-span-5 relative w-full min-h-[280px] sm:min-h-[340px] lg:min-h-full overflow-hidden ${
                        isEven ? "lg:order-2" : "lg:order-1"
                      }`}
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        loading="lazy"
                        sizes="(max-width: 1024px) 100vw, 42vw"
                        className="object-cover"
                      />
                      <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full text-xs font-mono font-bold text-white border border-white/20">
                        Service {item.id}
                      </div>
                    </div>

                    {/* Content Details with comfortable internal padding */}
                    <div
                      className={`lg:col-span-7 p-6 sm:p-8 lg:p-10 xl:p-12 flex flex-col justify-between ${
                        isEven ? "lg:order-1" : "lg:order-2"
                      }`}
                    >
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <span className="w-2 h-2 rounded-full bg-[#FA551E]" />
                          <span className="text-xs font-bold uppercase tracking-wider text-[#FA551E]">
                            Singapore Engineering Specification
                          </span>
                        </div>

                        <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-900 mb-3">
                          {item.title}
                        </h3>

                        <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-6">
                          {item.shortDesc}
                        </p>

                        {/* Detailed Scope Bullets */}
                        <div className="space-y-2.5 mb-6">
                          <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 block">
                            Key Work Scope:
                          </span>
                          {item.scope.map((point, i) => (
                            <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700">
                              <CheckCircle2 className="w-4 h-4 text-[#FA551E] shrink-0 mt-0.5" />
                              <span>{point}</span>
                            </div>
                          ))}
                        </div>

                        {/* Material Specs Pills */}
                        <div>
                          <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 block mb-2">
                            Standard Materials & Profiles:
                          </span>
                          <div className="flex flex-wrap gap-2">
                            {item.materials.map((mat, i) => (
                              <span
                                key={i}
                                className="px-3 py-1 rounded-lg bg-neutral-100 text-neutral-700 text-xs font-medium border border-neutral-200"
                              >
                                {mat}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Action Row */}
                      <div className="mt-8 pt-6 border-t border-neutral-100 flex flex-wrap items-center justify-between gap-4">
                        <Link
                          href="/#contact"
                          className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#FA551E] hover:underline underline-offset-4"
                        >
                          <span>Enquire about this service</span>
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                        <a
                          href="tel:+6598989760"
                          className="text-xs font-semibold text-neutral-500 hover:text-neutral-800"
                        >
                          Direct Line: +65 9898 9760
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          </div>
        </section>

        {/* =========================================================================
            4. WHY CHOOSE HONG TET ENGINEERING (Advantages from Documentation.docx)
            ========================================================================= */}
        <section className="bg-[#FAF9F6] border-y border-neutral-200/80 py-16 sm:py-24">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <h2 className="text-xl min-[390px]:text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-950 leading-tight whitespace-nowrap">
                Why Choose HONG TET ENGINEERING?
              </h2>
              <p className="mt-3 sm:mt-4 text-xs sm:text-base text-neutral-600 leading-relaxed max-w-xl mx-auto">
                Practical engineering solutions, dedicated project management, and reliable Singapore workmanship.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
              {advantages.map((adv) => {
                const IconComponent = adv.icon;
                return (
                  <div
                    key={adv.title}
                    className="bg-white rounded-3xl border border-neutral-200/90 p-6 sm:p-7 flex flex-col justify-between shadow-xs hover:border-[#FA551E]/40 transition-colors"
                  >
                    <div>
                      <div className="w-11 h-11 rounded-2xl bg-[#FA551E]/10 flex items-center justify-center text-[#FA551E] mb-5">
                        <IconComponent className="w-5 h-5 stroke-[2]" />
                      </div>
                      <h3 className="text-base font-bold text-neutral-900 mb-2">
                        {adv.title}
                      </h3>
                      <p className="text-xs text-neutral-600 leading-relaxed">
                        {adv.desc}
                      </p>
                    </div>
                    <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center gap-1.5 text-[11px] font-semibold text-neutral-500">
                      <Check className="w-3.5 h-3.5 text-[#FA551E]" />
                      <span>Guaranteed Standard</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================================
            5. REQUEST A QUOTE & VERIFIED CONTACT BLOCK (Strict Contact Rules)
            ========================================================================= */}
        <section className="py-16 sm:py-24 max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
            {/* Orange Action Card */}
            <div className="md:col-span-7 rounded-3xl bg-[#FA551E] text-white p-7 sm:p-11 flex flex-col justify-between shadow-lg">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-white/80 block mb-2">
                  Project Quotations & Enquiries
                </span>
                <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                  Have A Fabrication Or Roofing Project?
                </h3>
                <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-white/90 leading-relaxed max-w-lg">
                  Send your drawings, structural dimensions, or material requirements to Hong Tet Engineering. Our team will review the specifications and provide a clear, itemized proposal.
                </p>
                <div className="mt-6 space-y-2.5 text-xs sm:text-sm font-medium">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-white stroke-[2.5]" />
                    <span>Quick review of structural drawings & BOQs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-white stroke-[2.5]" />
                    <span>Free on-site measurements across Singapore</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-white stroke-[2.5]" />
                    <span>Certified BCA manpower deployments</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="tel:+6598989760"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#FA551E] text-xs sm:text-sm font-bold shadow-xs hover:bg-neutral-50 transition-colors"
                >
                  <Phone className="w-4 h-4 fill-[#FA551E]" />
                  <span>Call +65 9898 9760</span>
                </a>
                <a
                  href="https://wa.me/6598989760"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-neutral-900 hover:bg-black text-white text-xs sm:text-sm font-bold shadow-xs transition-colors"
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
                      <span className="font-bold text-neutral-800 block text-xs">Direct Phone</span>
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
                <span>Direct Workshop Fabrication</span>
                <span>Islandwide Installation</span>
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
