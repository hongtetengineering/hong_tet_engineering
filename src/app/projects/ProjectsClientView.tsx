"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Calendar,
  CheckCircle2,
  ArrowRight,
  Phone,
  Mail,
  Check,
  ShieldCheck,
  Layers,
  Sparkles,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MarqueeStrip } from "@/components/MarqueeStrip";

interface ProjectItem {
  id: string;
  title: string;
  category: string;
  categoryKey: string;
  location: string;
  date: string;
  image: string;
  desc: string;
  highlights: string[];
}

export function ProjectsClientView() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { key: "all", label: "All Projects" },
    { key: "metal", label: "Metal Structures" },
    { key: "roofing", label: "Roofing & Shelters" },
    { key: "railings", label: "Railings & Gates" },
    { key: "glass", label: "Glass & Facades" },
    { key: "renovation", label: "Renovation & Fit-Out" },
  ];

  const allProjects: ProjectItem[] = [
    {
      id: "01",
      title: "Structural Steel Framing & I-Beams",
      category: "Metal Structure Fabrication",
      categoryKey: "metal",
      location: "Tuas Industrial, Singapore",
      date: "Jul 2024 – Sep 2024",
      image: "/Projects/Structural Steel Framing & I-Beams.jpg",
      desc: "Complete workshop cutting, universal I-beam erection, and heavy warehouse framing delivered under strict BCA compliance.",
      highlights: ["Universal I-Beams", "Grade 50 High-Tensile Steel", "BCA Code Compliant"],
    },
    {
      id: "02",
      title: "Industrial Canopy & Zinc Roofing",
      category: "Roofing & Shelter Works",
      categoryKey: "roofing",
      location: "Woodlands Logistics, Singapore",
      date: "May 2024 – Aug 2024",
      image: "/Projects/Industrial Canopy & Zinc Roofing.jpg",
      desc: "Weatherproof industrial roofing and canopy installation using corrugated zinc sheets, purlin framing, and skylights.",
      highlights: ["Corrugated Zinc Roofing", "UV Polycarbonate Skylights", "Galvanized Purlins"],
    },
    {
      id: "03",
      title: "Stainless Steel Railings & Heavy Gate",
      category: "Metal & Stainless-Steel Works",
      categoryKey: "railings",
      location: "Bukit Batok, Singapore",
      date: "Mar 2024 – Jun 2024",
      image: "/Projects/Stainless Steel Railings & Heavy Gate.jpg",
      desc: "Precision fabrication and installation of Grade 316 stainless-steel railings, heavy-duty industrial gates, and safety barriers.",
      highlights: ["Grade 316 Stainless Steel", "Sliding Main Gate", "Safety Barrier Railings"],
    },
    {
      id: "04",
      title: "Architectural Glass Windows & Facade",
      category: "Glass Installation",
      categoryKey: "glass",
      location: "Jurong East, Singapore",
      date: "Jan 2024 – Apr 2024",
      image: "/Projects/Architectural Glass Windows & Facade.jpg",
      desc: "Commercial building glass facade, frameless tempered glass entrance portals, and acoustic meeting room partitions.",
      highlights: ["Tempered Safety Glass", "Frameless Glazing", "Acoustic Partitioning"],
    },
    {
      id: "05",
      title: "High-Rise Scaffolding & Structural Steel Works",
      category: "Metal Structure Fabrication",
      categoryKey: "metal",
      location: "Changi Aviation, Singapore",
      date: "Nov 2023 – Feb 2024",
      image: "/services/galary/low-angle-view-scafolding-building.jpg",
      desc: "Erection of high-level structural framework, building facade supports, and certified scaffolding access systems.",
      highlights: ["Structural Steel Framing", "Heavy Site Operations", "Certified Rigging Crew"],
    },
    {
      id: "06",
      title: "Industrial Roofing & High-Level Canopy Installation",
      category: "Roofing & Shelter Works",
      categoryKey: "roofing",
      location: "Pioneer Industrial, Singapore",
      date: "Oct 2023 – Dec 2023",
      image: "/services/galary/full-shot-worker-with-helmet-working-roof.jpg",
      desc: "Full roof replacement, leak-proof waterproofing underlayment, and tropical canopy overhangs for logistics facilities.",
      highlights: ["Tropical Weatherproofing", "Safety Harness Protocols", "Purlin Erection"],
    },
    {
      id: "07",
      title: "Architectural Metal Fencing & Custom Gates",
      category: "Metal & Stainless-Steel Works",
      categoryKey: "railings",
      location: "Bukit Timah Landed, Singapore",
      date: "Aug 2023 – Nov 2023",
      image: "/services/galary/house-with-marble-fence.jpg",
      desc: "Custom architectural boundary metal fencing, pedestrian swing gates, and anti-corrosive powder-coated finishes.",
      highlights: ["Architectural Metal Fencing", "Custom Gate Fabrication", "Anti-Corrosion Finish"],
    },
    {
      id: "08",
      title: "Commercial Office Interior Fit-Out & Alteration",
      category: "Renovation & Fit-Out",
      categoryKey: "renovation",
      location: "Ang Mo Kio, Singapore",
      date: "Jun 2023 – Sep 2023",
      image:
        "/services/galary/young-engineer-work-clothes-yellow-hardhat-dreamily-looking-aside-holding-plan-new-apartments-hands-with-red-ladder-near-repairing-flat.jpg",
      desc: "Interior spatial alteration, drywall partitioning, fire-rated ceiling integration, and protective interior painting.",
      highlights: ["Commercial Fit-Out", "Fire-Rated Drywalls", "Protective Painting"],
    },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? allProjects
      : allProjects.filter((p) => p.categoryKey === activeCategory);

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
              {/* Main Heading */}
              <h1 className="text-3xl min-[380px]:text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-black tracking-tight text-neutral-900 leading-[1.05] max-w-5xl mx-auto">
                Proven Workmanship. <br className="hidden sm:inline" />
                <span className="text-[#FA551E]">Completed Across Singapore.</span>
              </h1>

              {/* Subtitle */}
              <p className="mt-4 sm:mt-6 text-xs sm:text-base lg:text-lg text-neutral-600 leading-relaxed max-w-2xl mx-auto">
                Explore our delivered project case studies across structural steel framing, industrial roofing, precision metal fittings, commercial glass, and spatial renovation.
              </p>

              {/* Quick CTAs */}
              <div className="mt-7 sm:mt-9 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 max-w-xs sm:max-w-none mx-auto">
                <Link
                  href="/#contact"
                  className="w-full sm:w-auto px-7 sm:px-8 py-3 sm:py-3.5 rounded-full bg-[#FA551E] hover:bg-[#e0430f] text-white text-xs sm:text-sm font-bold tracking-wide shadow-md hover:shadow-lg transition-all active:scale-[0.98] text-center"
                >
                  Request a Quote
                </Link>
                <a
                  href="tel:+6598989760"
                  className="w-full sm:w-auto px-7 sm:px-8 py-3 sm:py-3.5 rounded-full bg-white hover:bg-neutral-50 text-neutral-900 text-xs sm:text-sm font-bold tracking-wide border border-neutral-300 shadow-2xs hover:shadow-xs transition-all active:scale-[0.98] text-center"
                >
                  Call +65 9898 9760
                </a>
              </div>

              {/* Stats Bar */}
              <div className="mt-10 sm:mt-14 max-w-3xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                <div className="bg-white/95 backdrop-blur-xs rounded-2xl border border-neutral-200/90 p-4 shadow-2xs">
                  <span className="text-2xl sm:text-3xl font-black text-neutral-900">34+</span>
                  <p className="text-[11px] sm:text-xs font-semibold text-neutral-600 mt-0.5">Projects Delivered</p>
                </div>
                <div className="bg-white/95 backdrop-blur-xs rounded-2xl border border-neutral-200/90 p-4 shadow-2xs">
                  <span className="text-2xl sm:text-3xl font-black text-neutral-900">4</span>
                  <p className="text-[11px] sm:text-xs font-semibold text-neutral-600 mt-0.5">Key Project Sectors</p>
                </div>
                <div className="bg-white/95 backdrop-blur-xs rounded-2xl border border-neutral-200/90 p-4 shadow-2xs">
                  <span className="text-2xl sm:text-3xl font-black text-neutral-900">100%</span>
                  <p className="text-[11px] sm:text-xs font-semibold text-neutral-600 mt-0.5">Safety & BCA Compliance</p>
                </div>
                <div className="bg-white/95 backdrop-blur-xs rounded-2xl border border-neutral-200/90 p-4 shadow-2xs">
                  <span className="text-2xl sm:text-3xl font-black text-neutral-900">Islandwide</span>
                  <p className="text-[11px] sm:text-xs font-semibold text-neutral-600 mt-0.5">Singapore Coverage</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            2. INTERACTIVE CATEGORY FILTER & PROJECT GALLERY
            ========================================================================= */}
        <section className="py-16 sm:py-24 max-w-[1240px] mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <h2 className="text-xl min-[390px]:text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-950 leading-tight">
              Featured Case Studies
            </h2>
            <p className="mt-3 sm:mt-4 text-xs sm:text-base text-neutral-600 leading-relaxed max-w-xl mx-auto">
              Filter through our completed Singapore engineering, fabrication, and spatial improvement works.
            </p>
          </div>

          {/* Interactive Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-10 sm:mb-14">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all cursor-pointer ${
                    isActive
                      ? "bg-[#FA551E] text-white shadow-md shadow-orange-500/20"
                      : "bg-white text-neutral-700 hover:text-neutral-950 hover:bg-neutral-50 border border-neutral-200/90 shadow-2xs"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Projects 2-Column Responsive Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-3xl overflow-hidden border border-neutral-200/90 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Photo Container */}
                  <div className="relative h-[250px] sm:h-[320px] w-full overflow-hidden bg-neutral-900">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-104 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />

                    {/* Top Category Badge */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/20 shadow-md">
                        {project.category}
                      </span>
                    </div>

                    {/* Bottom Location & Date Bar */}
                    <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between text-xs font-semibold text-white/90 drop-shadow-md">
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-[#FA551E] shrink-0" />
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center gap-1.5 font-mono text-[11px]">
                        <Calendar className="w-3.5 h-3.5 text-neutral-300 shrink-0" />
                        <span>{project.date}</span>
                      </div>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-7">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-mono font-bold text-[#FA551E]">
                        Case Study [{project.id}]
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-neutral-900 mb-2 leading-snug">
                      {project.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-5">
                      {project.desc}
                    </p>

                    {/* Feature Highlights Pills */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.highlights.map((item, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] font-medium px-2.5 py-0.5 rounded-md bg-neutral-100 text-neutral-700 border border-neutral-200"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="px-5 sm:px-7 pb-5 sm:pb-6 pt-3 border-t border-neutral-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                  <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider">
                    Completed & Handed Over
                  </span>
                  <Link
                    href="/#contact"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#FA551E] hover:underline underline-offset-4"
                  >
                    <span>Request Similar Build</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16 bg-white rounded-3xl border border-neutral-200/90 p-8">
              <p className="text-neutral-500 font-medium">
                No projects found in this category. Select another category above.
              </p>
            </div>
          )}
        </section>

        {/* =========================================================================
            3. HOW WE DELIVER QUALITY & SAFETY STANDARDS (Dark Section)
            ========================================================================= */}
        <section className="bg-[#08090C] text-white py-16 sm:py-24 relative overflow-hidden">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <h2 className="text-xl min-[390px]:text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                How We Deliver Every Build Safely
              </h2>
              <p className="mt-3 sm:mt-4 text-xs sm:text-base text-neutral-400 leading-relaxed max-w-xl mx-auto">
                Adhering to strict Singapore safety, quality testing, and handover standards on every job.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-neutral-900/80 rounded-3xl border border-white/[0.08] p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white/[0.06] flex items-center justify-center text-[#FA551E] mb-5">
                    <ShieldCheck className="w-6 h-6 stroke-[2]" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    1. Rigorous Workshop Fabrication
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                    Components are precision-cut, drilled, and welded in our dedicated workshop before arriving on site to minimize field adjustments and ensure exact tolerances.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/[0.06] text-[11px] font-semibold text-neutral-400 flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#FA551E]" />
                  <span>Millimeter Accuracy</span>
                </div>
              </div>

              <div className="bg-neutral-900/80 rounded-3xl border border-white/[0.08] p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white/[0.06] flex items-center justify-center text-[#FA551E] mb-5">
                    <Layers className="w-6 h-6 stroke-[2]" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    2. BCA & WSH Certified Rigging
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                    Heavy lifting, crane coordination, and site assembly are directed exclusively by certified riggers, signalmen, and structural supervisors with zero safety shortcuts.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/[0.06] text-[11px] font-semibold text-neutral-400 flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#FA551E]" />
                  <span>Zero Accident Culture</span>
                </div>
              </div>

              <div className="bg-neutral-900/80 rounded-3xl border border-white/[0.08] p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white/[0.06] flex items-center justify-center text-[#FA551E] mb-5">
                    <CheckCircle2 className="w-6 h-6 stroke-[2]" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    3. Joint Handover & Signoff
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                    Upon installation completion, our lead engineer conducts a detailed joint walkthrough with the client to verify all weld joints, finishes, and handover items.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/[0.06] text-[11px] font-semibold text-neutral-400 flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#FA551E]" />
                  <span>100% Client Satisfaction</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            4. REQUEST A QUOTE & VERIFIED CONTACT BLOCK (Strict Contact Rules)
            ========================================================================= */}
        <section className="py-16 sm:py-24 max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
            {/* Orange Action Card */}
            <div className="md:col-span-7 rounded-3xl bg-[#FA551E] text-white p-7 sm:p-11 flex flex-col justify-between shadow-lg">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-white/80 block mb-2">
                  Singapore Project Consultations
                </span>
                <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                  Have A Structural Or Fabrication Project?
                </h3>
                <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-white/90 leading-relaxed max-w-lg">
                  Reach out directly to Hong Tet Engineering. Share your drawings, site photos, or structural specifications for an immediate engineering assessment and transparent quote.
                </p>
                <div className="mt-6 space-y-2.5 text-xs sm:text-sm font-medium">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-white stroke-[2.5]" />
                    <span>Complimentary drawing review & site measurement</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-white stroke-[2.5]" />
                    <span>Transparent itemized BOQ with zero hidden fees</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-white stroke-[2.5]" />
                    <span>Islandwide deployment across Singapore</span>
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
                <span>Tuas • Woodlands • Jurong • Bukit Batok</span>
                <span>Islandwide</span>
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
