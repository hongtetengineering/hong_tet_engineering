import Image from "next/image";
import { Check, MapPin } from "lucide-react";

export function ServiceAreaSection() {
  const areas = [
    "San Francisco",
    "Oakland",
    "Berkeley",
    "Alameda",
    "San Leandro",
    "Hayward",
    "Union City",
    "Fremont",
    "Daly City",
    "San Mateo",
    "Palo Alto",
    "Redwood City",
    "Mountain View",
    "& Nearby Areas",
  ];

  const features = [
    "Residential Construction",
    "Renovation & Remodeling",
    "Licensed Local Crew",
  ];

  return (
    <section id="service-area" className="bg-white py-16 sm:py-24 lg:py-28 relative">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          {/* Left: Interactive Map Card */}
          <div className="relative rounded-3xl overflow-hidden border border-neutral-200/80 shadow-sm bg-[#EBE7DF] min-h-[420px] sm:min-h-[480px] lg:min-h-[540px]">
            {/* Map Background Image */}
            <Image
              src="/home/bTKcWRZFnXXRl0SfE0GiqJWx90Q.png"
              alt="Service Area Map"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />

            {/* Pin 1: San Francisco */}
            <div className="absolute top-[16%] left-[35%] flex items-center gap-1.5 bg-white/95 backdrop-blur-xs px-3 py-1.5 rounded-full shadow-md text-xs font-semibold text-neutral-800 border border-black/5 hover:scale-105 transition-transform cursor-default">
              <MapPin className="w-3.5 h-3.5 text-[#FA551E] shrink-0 fill-[#FA551E]/20" />
              <span>San Francisco</span>
            </div>

            {/* Pin 2: Daly City */}
            <div className="absolute top-[38%] left-[12%] flex items-center gap-1.5 bg-white/95 backdrop-blur-xs px-3 py-1.5 rounded-full shadow-md text-xs font-semibold text-neutral-800 border border-black/5 hover:scale-105 transition-transform cursor-default">
              <MapPin className="w-3.5 h-3.5 text-[#FA551E] shrink-0 fill-[#FA551E]/20" />
              <span>Daly City</span>
            </div>

            {/* Pin 3: Mountain View */}
            <div className="absolute top-[58%] left-[68%] flex items-center gap-1.5 bg-white/95 backdrop-blur-xs px-3 py-1.5 rounded-full shadow-md text-xs font-semibold text-neutral-800 border border-black/5 hover:scale-105 transition-transform cursor-default">
              <MapPin className="w-3.5 h-3.5 text-[#FA551E] shrink-0 fill-[#FA551E]/20" />
              <span>Mountain View</span>
            </div>

            {/* Bottom-left Floating Overlay Card */}
            <div className="absolute bottom-5 left-5 sm:bottom-6 sm:left-6 rounded-2xl bg-white shadow-xl p-4 sm:p-5 flex items-center gap-3.5 sm:gap-4 max-w-[280px] sm:max-w-[310px] border border-black/5 z-10">
              <div className="w-12 h-12 rounded-full bg-[#FA551E] flex items-center justify-center text-white shrink-0 shadow-sm">
                <Check className="w-6 h-6 stroke-[3]" />
              </div>
              <div className="min-w-0">
                <h4 className="text-sm font-bold text-neutral-900 leading-snug">
                  Proudly Servicing the Bay Area
                </h4>
                <p className="text-xs text-neutral-500 mt-1 leading-snug">
                  Local crews, Local Knowledge, Faster results
                </p>
              </div>
            </div>
          </div>

          {/* Right: Areas We Build Info Box */}
          <div className="rounded-3xl bg-[#ECEAE4] p-8 sm:p-10 lg:p-12 flex flex-col justify-between border border-neutral-200/50">
            <div>
              {/* Top Tag Indicator */}
              <div className="flex items-center gap-2 text-sm font-medium text-neutral-800 mb-4 sm:mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 inline-block" />
                <span>Service Area</span>
              </div>

              {/* Main Heading */}
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-950 leading-[1.08] mb-6 sm:mb-8">
                Areas We
                <br />
                Build.
              </h2>

              {/* Tag Chips */}
              <div className="flex flex-wrap gap-2 sm:gap-2.5 mb-8">
                {areas.map((area, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl bg-[#E2E0D8]/60 sm:bg-[#E5E3DC]/70 border border-neutral-300/60 text-xs sm:text-[13px] font-medium text-neutral-700 hover:border-[#FA551E] hover:text-[#FA551E] transition-colors"
                  >
                    {area}
                  </span>
                ))}
              </div>

              {/* Checklist */}
              <div className="space-y-3.5 mb-8 sm:mb-10">
                {features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#FA551E] flex items-center justify-center text-white shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-sm sm:text-base font-semibold text-neutral-800">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Row */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 pt-2">
              <a
                href="#contact"
                className="px-7 py-3.5 rounded-full bg-[#FA551E] hover:bg-[#e0430f] text-white text-sm font-bold tracking-wide shadow-sm transition-colors text-center inline-block"
              >
                Check Your Service Area
              </a>
              <span className="text-xs sm:text-sm text-neutral-600">
                Prefer to talk now?{" "}
                <a
                  href="tel:4155550198"
                  className="font-bold text-neutral-900 hover:text-[#FA551E] transition-colors whitespace-nowrap"
                >
                  Call (415) 555-0198
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

