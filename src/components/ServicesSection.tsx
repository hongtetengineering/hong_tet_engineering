import Image from "next/image";

export function ServicesSection() {
  const services = [
    {
      id: "01",
      title: "Metal Structure Fabrication & I-Beams",
      desc: "Complete fabrication and erection of structural steel frameworks, industrial I-beam framing, warehouse supports, and custom components tailored to Singapore project specs.",
      image: "/services/metal-structure.jpg",
      features: ["I-Beam Installation", "Structural Steel Framework"],
    },
    {
      id: "02",
      title: "Roofing & Shelter Solutions",
      desc: "Weatherproof industrial roofing and canopy installations built for tropical durability using zinc sheets, clay roof tiles, polycarbonate skylights, and composite panels.",
      image: "/services/roofing-shelter.jpg",
      features: ["Zinc Sheet Roofing", "Polycarbonate Skylights"],
    },
    {
      id: "03",
      title: "Metal & Stainless-Steel Works",
      desc: "Precision fabrication of architectural metal fittings built for safety compliance and refined finish: stainless-steel railings, heavy-duty main gates, and industrial staircases.",
      image: "/services/stainless-metal.jpg",
      features: ["Stainless-Steel Railings", "Main Gates & Staircases"],
    },
    {
      id: "04",
      title: "Architectural Glass Installation",
      desc: "Modern architectural glass solutions combining spatial elegance with strict safety standards: frameless glass doors, structural windows, and tempered glass balustrades.",
      image: "/services/glass-installation.jpg",
      features: ["Frameless Glass Doors", "Glass Balustrades"],
    },
    {
      id: "05",
      title: "Renovation & Protective Painting",
      desc: "End-to-end spatial alterations, interior and exterior building renovation, and protective industrial-grade painting for homes, commercial offices, and factories.",
      image: "/services/renovation-painting.jpg",
      features: ["House & Landed Renovation", "Commercial Office Fit-Outs"],
    },
    {
      id: "06",
      title: "Skilled Manpower Supply",
      desc: "Certified, BCA-compliant engineering workforce including structural welders, metal fabricators, riggers, and site technicians deployed to meet site demands.",
      image: "/services/manpower-supply.jpg",
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
            <div
              key={s.id}
              className="relative h-[350px] sm:h-[420px] rounded-[24px] overflow-hidden border border-white/10 shadow-lg bg-neutral-900 flex flex-col justify-end"
            >
              {/* Background Local Photo - optimized and direct for 60fps smooth scrolling */}
              <div className="absolute inset-0 w-full h-full z-0">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>

              {/* Dark Gradient Overlay for text clarity */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-10 pointer-events-none" />

              {/* Bottom Content Area (No top elements, no hover animations) */}
              <div className="relative z-20 p-5 sm:p-7 flex flex-col justify-end">
                <h3 className="text-lg sm:text-2xl font-bold text-white leading-tight">
                  {s.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-neutral-300 leading-relaxed line-clamp-3">
                  {s.desc}
                </p>

                {/* Feature Tags */}
                <div className="mt-3.5 sm:mt-4 flex flex-wrap gap-1.5 pt-3 border-t border-white/10">
                  {s.features.map((f, i) => (
                    <span
                      key={i}
                      className="text-[10px] sm:text-[11px] px-2 sm:px-2.5 py-0.5 rounded-full bg-white/10 text-neutral-200 border border-white/10"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner Note */}
        <div className="mt-12 sm:mt-14 text-center">
          <p className="text-xs sm:text-sm text-neutral-400 flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-1.5">
            <span>Ready to discuss your project?</span>
            <a
              href="tel:+6583145705"
              className="text-white hover:text-[#FA551E] font-semibold underline underline-offset-4 transition-colors whitespace-nowrap"
            >
              Call us today at +65&nbsp;8314&nbsp;5705
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
