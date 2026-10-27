import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      id: "01",
      anchor: "metal-structures",
      title: "Metal Structure Fabrication & I-Beams",
      desc: "Complete fabrication and erection of structural steel frameworks, industrial I-beam framing, warehouse supports, and custom components tailored to Singapore project specs.",
      image: "/services/stock-image/factory-worker-working-warehouse-handling-metal-material-production.jpg",
      features: ["I-Beam Installation", "Structural Steel Framework"],
    },
    {
      id: "02",
      anchor: "roofing-shelters",
      title: "Roofing & Shelter Solutions",
      desc: "Weatherproof industrial roofing and canopy installations built for tropical durability using zinc sheets, clay roof tiles, polycarbonate skylights, and composite panels.",
      image: "/services/stock-image/medium-shot-men-working-together.jpg",
      features: ["Zinc Sheet Roofing", "Polycarbonate Skylights"],
    },
    {
      id: "03",
      anchor: "metal-stainless",
      title: "Metal & Stainless-Steel Works",
      desc: "Precision fabrication of architectural metal fittings built for safety compliance and refined finish: stainless-steel railings, heavy-duty main gates, and industrial staircases.",
      image: "/services/stock-image/worker-working-with-circular-grinder-metal-with-sparks.jpg",
      features: ["Stainless-Steel Railings", "Main Gates & Staircases"],
    },
    {
      id: "04",
      anchor: "architectural-glass",
      title: "Architectural Glass Installation",
      desc: "Modern architectural glass solutions combining spatial elegance with strict safety standards: frameless glass doors, structural windows, and tempered glass balustrades.",
      image: "/services/stock-image/carpenter-holds-drill-drills-window.jpg",
      features: ["Frameless Glass Doors", "Glass Balustrades"],
    },
    {
      id: "05",
      anchor: "renovation-painting",
      title: "Renovation & Protective Painting",
      desc: "End-to-end spatial alterations, interior and exterior building renovation, and protective industrial-grade painting for homes, commercial offices, and factories.",
      image: "/services/stock-image/sideways-shot-busy-handyman-dressed-safety-uniform-holds-paint-roller-wears-protective-mask-works-hard-isolated-pink-wall-repair-renovation-concept-maintenance-worker.jpg",
      features: ["House & Landed Renovation", "Commercial Office Fit-Outs"],
    },
    {
      id: "06",
      anchor: "manpower-supply",
      title: "Skilled Manpower Supply",
      desc: "Certified, BCA-compliant engineering workforce including structural welders, metal fabricators, riggers, and site technicians deployed to meet site demands.",
      image: "/services/stock-image/confident-architect-smiling.jpg",
      features: ["BCA Compliant Workforce", "Certified Welders & Riggers"],
    },
  ];

  return (
    <section
      id="services"
      className="bg-[#08090C] text-white py-20 sm:py-28 relative overflow-hidden"
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Professional Section Header */}
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-[16px] min-[390px]:text-[18px] sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight whitespace-nowrap">
            Engineering & Construction Services
          </h2>
          <p className="mt-3 sm:mt-4 text-xs sm:text-base text-neutral-400 leading-relaxed max-w-sm sm:max-w-xl mx-auto">
            From structural steel I-beams and industrial roofing to precision metalworks, commercial alterations, and certified BCA site manpower.
          </p>
        </div>

        {/* Sub-bar */}
        <div className="mt-6 sm:mt-10 flex items-center justify-between text-xs sm:text-sm font-medium border-b border-white/[0.08] pb-3 sm:pb-4">
          <div className="flex items-center gap-2 text-neutral-400 shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FA551E]" />
            <span className="whitespace-nowrap font-semibold">What We Build</span>
          </div>
          <div className="text-neutral-500 font-mono tracking-wider text-[11px] sm:text-xs text-right whitespace-nowrap shrink-0">
            <span className="hidden sm:inline">[ Built Right • Delivered On Time ]</span>
            <span className="sm:hidden">[ Built Right ]</span>
          </div>
        </div>

        {/* Services Grid (3 cards per row: 2 rows of 3) */}
        <div className="mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {services.map((s) => (
            <Link
              key={s.id}
              href={`/services#${s.anchor}`}
              className="group relative h-[360px] sm:h-[420px] rounded-[24px] overflow-hidden border border-white/10 shadow-lg bg-neutral-900 flex flex-col justify-between transition-transform duration-300 hover:scale-[1.01]"
              title={`View ${s.title} specifications and scope`}
            >
              {/* Background Local Photo - optimized and direct for 60fps smooth scrolling */}
              <div className="absolute inset-0 w-full h-full z-0">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Hard dark overlay only at the bottom for text legibility; Top is 100% clear and bright */}
              <div className="absolute inset-x-0 bottom-0 h-[52%] sm:h-[50%] bg-gradient-to-t from-black via-black/90 to-transparent z-10 pointer-events-none" />

              {/* Top Category Badges (No dark overlay on image, pill has self-contained glass background) */}
              <div className="relative z-20 p-4 sm:p-5 flex flex-wrap items-center gap-1.5">
                {s.features.map((f, i) => (
                  <span
                    key={i}
                    className="text-[10px] sm:text-[11px] font-medium px-2.5 sm:px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/20 shadow-md"
                  >
                    {f}
                  </span>
                ))}
              </div>

              {/* Bottom Content Area: Header (Strictly 1 line) & Description */}
              <div className="relative z-20 p-5 sm:p-6 flex flex-col justify-end">
                <h3
                  title={s.title}
                  className="text-base sm:text-[17px] lg:text-[16px] xl:text-[18px] font-bold text-white tracking-tight leading-snug truncate group-hover:text-[#FA551E] transition-colors"
                >
                  {s.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-neutral-300 leading-relaxed line-clamp-2 sm:line-clamp-3">
                  {s.desc}
                </p>
                <div className="mt-3 flex items-center gap-1.5 text-xs font-semibold text-[#FA551E] opacity-90 group-hover:opacity-100 transition-opacity">
                  <span>Explore service scope</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Services Action */}
        <div className="mt-10 sm:mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/15 text-white border border-white/20 text-xs sm:text-sm font-bold tracking-wide transition-all shadow-sm"
          >
            <span>View Full Service Scope & Technical Specifications</span>
            <ArrowRight className="w-4 h-4 text-[#FA551E]" />
          </Link>
        </div>

        {/* Bottom Banner Note */}
        <div className="mt-8 sm:mt-10 text-center">
          <p className="text-xs sm:text-sm text-neutral-400 flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-1.5">
            <span>Ready to discuss your project?</span>
            <a
              href="tel:+6598989760"
              className="text-white hover:text-[#FA551E] font-semibold underline underline-offset-4 transition-colors whitespace-nowrap"
            >
              Call us today at +65&nbsp;9898&nbsp;9760
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
