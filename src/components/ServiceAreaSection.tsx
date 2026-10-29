import Image from "next/image";
import { Check, MapPin } from "lucide-react";

export function ServiceAreaSection() {
  const areas = [
    "Jurong Industrial",
    "Tuas Marine & West",
    "Woodlands & North",
    "Bukit Batok (HQ)",
    "Tampines & East",
    "Changi Aviation",
    "Ang Mo Kio",
    "Clementi & West",
    "Pioneer Industrial",
    "Kranji & Sungei Kadut",
    "Marina Bay & CBD",
    "& Across Singapore",
  ];

  const features = [
    "Commercial & Industrial Steel Builds",
    "Structural Roofing & Precision Metalworks",
    "BCA & WSH Licensed Local Crew",
  ];

  return (
    <section id="service-area" className="bg-white py-14 sm:py-24 lg:py-28 relative">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-stretch">
          {/* Left: Interactive Map Card */}
          <div className="relative rounded-3xl overflow-hidden border border-neutral-200/80 shadow-sm bg-[#EBE7DF] min-h-[340px] sm:min-h-[480px] lg:min-h-[540px]">
            {/* Map Background Image */}
            <Image
              src="/home/bTKcWRZFnXXRl0SfE0GiqJWx90Q.webp"
              alt="Hong Tet Engineering Service Area Map Singapore"
              fill
              loading="lazy"
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />

            {/* Pin 1: Bukit Batok */}
            <div className="absolute top-[20%] left-[28%] sm:left-[32%] flex items-center gap-1.5 bg-white/95 backdrop-blur-xs px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full shadow-md text-[11px] sm:text-xs font-semibold text-neutral-800 border border-black/5 hover:scale-105 transition-transform cursor-default">
              <MapPin className="w-3.5 h-3.5 text-[#FA551E] shrink-0 fill-[#FA551E]/20" />
              <span>Bukit Batok (HQ)</span>
            </div>

            {/* Pin 2: Tuas Industrial */}
            <div className="absolute top-[42%] left-[10%] sm:left-[15%] flex items-center gap-1.5 bg-white/95 backdrop-blur-xs px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full shadow-md text-[11px] sm:text-xs font-semibold text-neutral-800 border border-black/5 hover:scale-105 transition-transform cursor-default">
              <MapPin className="w-3.5 h-3.5 text-[#FA551E] shrink-0 fill-[#FA551E]/20" />
              <span>Tuas Industrial</span>
            </div>

            {/* Pin 3: Jurong Port & Marine */}
            <div className="absolute top-[62%] left-[48%] sm:left-[55%] flex items-center gap-1.5 bg-white/95 backdrop-blur-xs px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full shadow-md text-[11px] sm:text-xs font-semibold text-neutral-800 border border-black/5 hover:scale-105 transition-transform cursor-default">
              <MapPin className="w-3.5 h-3.5 text-[#FA551E] shrink-0 fill-[#FA551E]/20" />
              <span>Jurong Port & Marine</span>
            </div>

            {/* Bottom-left Floating Overlay Card */}
            <div className="absolute bottom-3 left-3 sm:bottom-6 sm:left-6 rounded-2xl bg-white shadow-xl p-3 sm:p-5 flex items-center gap-3 sm:gap-4 max-w-[240px] sm:max-w-[310px] border border-black/5 z-10">
              <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-[#FA551E] flex items-center justify-center text-white shrink-0 shadow-sm">
                <Check className="w-4 h-4 sm:w-6 sm:h-6 stroke-[3]" />
              </div>
              <div className="min-w-0">
                <h4 className="text-xs sm:text-sm font-bold text-neutral-900 leading-snug">
                  Serving All Singapore
                </h4>
                <p className="text-[10px] sm:text-xs text-neutral-500 mt-0.5 sm:mt-1 leading-snug">
                  Island-wide mobilization, local crews
                </p>
              </div>
            </div>
          </div>

          {/* Right: Areas We Build Info Box */}
          <div className="rounded-3xl bg-[#ECEAE4] p-6 sm:p-10 lg:p-12 flex flex-col justify-between border border-neutral-200/50">
            <div>
              {/* Main Heading - Strictly 1 line */}
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-950 leading-tight whitespace-nowrap mb-2.5 sm:mb-4">
                Areas We Build
              </h2>

              {/* Subtitle - Strictly 2 lines */}
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-5 sm:mb-8 max-w-md">
                Delivering certified structural steel fabrication, industrial roofing, and site manpower across all commercial and industrial zones in Singapore.
              </p>

              {/* Tag Chips */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2.5 mb-6 sm:mb-8">
                {areas.map((area, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 sm:px-3.5 sm:py-2 rounded-xl bg-[#E2E0D8]/60 sm:bg-[#E5E3DC]/70 border border-neutral-300/60 text-[11px] sm:text-[13px] font-medium text-neutral-700 hover:border-[#FA551E] hover:text-[#FA551E] transition-colors"
                  >
                    {area}
                  </span>
                ))}
              </div>

              {/* Checklist */}
              <div className="space-y-3 sm:space-y-3.5 mb-6 sm:mb-10">
                {features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 sm:gap-3">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#FA551E] flex items-center justify-center text-white shrink-0">
                      <Check className="w-3 sm:w-3.5 h-3 sm:h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-xs sm:text-base font-semibold text-neutral-800">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Row - Strictly 1-line button with whitespace-nowrap & shrink-0 */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 pt-2">
              <a
                href="#contact"
                className="px-6 py-3 sm:py-3.5 rounded-full bg-[#FA551E] hover:bg-[#e0430f] text-white text-xs sm:text-sm font-bold tracking-wide shadow-sm transition-colors text-center whitespace-nowrap shrink-0 inline-flex items-center justify-center"
              >
                Check Service Area
              </a>
              <span className="text-xs sm:text-sm text-neutral-600 whitespace-nowrap">
                Prefer to talk now?{" "}
                <a
                  href="tel:+6598989760"
                  className="font-bold text-neutral-900 hover:text-[#FA551E] transition-colors whitespace-nowrap"
                >
                  Call +65&nbsp;9898&nbsp;9760
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

