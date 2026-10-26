export function MarqueeStrip() {
  const items = [
    "Metal Structure Fabrication",
    "Roofing & Shelter Works",
    "I-Beam Installation",
    "Stainless Steel Railings",
    "Industrial Main Gates",
    "Architectural Glass",
    "Commercial Renovation",
    "Skilled Manpower Supply",
    "BCA Compliant Engineering",
  ];

  return (
    <div className="bg-[#FA551E] text-white py-4 overflow-hidden select-none border-y border-white/20">
      <div className="flex whitespace-nowrap animate-marquee">
        <div className="flex items-center gap-8 shrink-0 text-sm sm:text-base font-extrabold tracking-wide uppercase">
          {items.map((item, idx) => (
            <div key={idx} className="flex items-center gap-8">
              <span>{item}</span>
              <span className="w-2 h-2 rounded-full bg-white/70" />
            </div>
          ))}
        </div>
        <div className="flex items-center gap-8 shrink-0 text-sm sm:text-base font-extrabold tracking-wide uppercase pl-8" aria-hidden="true">
          {items.map((item, idx) => (
            <div key={`dup-${idx}`} className="flex items-center gap-8">
              <span>{item}</span>
              <span className="w-2 h-2 rounded-full bg-white/70" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
