"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Calendar, Building2, Clock, TrendingUp, CheckCircle } from "lucide-react";

export function ProjectsSection() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const projects = [
    {
      id: "01",
      title: "Modern Home in Orinda",
      location: "Orinda, CA",
      date: "Jul 2024 – Sep 2024",
      category: "Full Architecture & Build",
      img: "/home/URVvm2e2n311SLbznqjwOjS6Pns.png",
      alt: "Modern Home in Orinda",
    },
    {
      id: "02",
      title: "Contemporary Residence & Facade",
      location: "Palo Alto, CA",
      date: "May 2024 – Aug 2024",
      category: "Commercial Facade & Structure",
      img: "/home/UEooxcCtAblBuA6tOBf3GhWQqDg.png",
      alt: "Contemporary Residence & Facade",
    },
    {
      id: "03",
      title: "Luxury Poolside Villa & Pavilion",
      location: "San Mateo, CA",
      date: "Mar 2024 – Jun 2024",
      category: "Custom Villa & Pool Pavilion",
      img: "/home/spqZSEbMAjhztlmgUStzq9snwHQ.png",
      alt: "Luxury Poolside Villa & Pavilion",
    },
    {
      id: "04",
      title: "Covered Outdoor Patio & Hearth",
      location: "Berkeley, CA",
      date: "Jan 2024 – Apr 2024",
      category: "Outdoor Living & Timber Pergola",
      img: "/home/i305rk5y1kDk7MK7PHZs9qBDp4.png",
      alt: "Covered Outdoor Patio & Hearth",
    },
  ];

  const BASE_TOP = 56;
  const TOP_OFFSET = 12;

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const total = projects.length;

          cardRefs.current.forEach((card, i) => {
            if (!card) return;

            let scaleReduction = 0;
            let brightnessReduction = 0;

            for (let k = i + 1; k < total; k++) {
              const nextCard = cardRefs.current[k];
              if (!nextCard) continue;

              const nextRect = nextCard.getBoundingClientRect();
              const targetTop = BASE_TOP + k * TOP_OFFSET;

              const travelRange = window.innerHeight - targetTop;
              const currentPos = window.innerHeight - nextRect.top;

              if (travelRange > 0 && currentPos > 0) {
                const progress = Math.max(0, Math.min(1, currentPos / travelRange));
                scaleReduction += progress * 0.045;
                brightnessReduction += progress * 0.12;
              }
            }

            const finalScale = Math.max(0.86, 1 - scaleReduction);
            const finalBrightness = Math.max(0.68, 1 - brightnessReduction);

            card.style.transform = `scale(${finalScale})`;
            card.style.filter = `brightness(${finalBrightness})`;
          });

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <section id="projects" className="bg-[#08090C] text-white py-14 sm:py-18 relative">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Professional Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#FA551E] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FA551E]" />
            <span>Proven Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Featured Engineering & Build Projects
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-neutral-400 leading-relaxed max-w-2xl mx-auto">
            Explore our portfolio of structural steel frameworks, luxury residential builds, and bespoke architectural installations.
          </p>
        </div>

        {/* Subhead Bar */}
        <div className="mt-8 sm:mt-10 flex items-center justify-between text-xs sm:text-sm font-medium border-b border-white/[0.08] pb-3">
          <div className="flex items-center gap-2 text-neutral-400">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FA551E]" />
            <span>Selected Case Studies</span>
          </div>
          <div className="text-neutral-500 font-mono tracking-wider">
            [ 01 — 04 ]
          </div>
        </div>

        {/* Natural Document Flow Stacking Cards Deck */}
        <div className="mt-6 sm:mt-8 relative">
          {projects.map((p, index) => (
            <div
              key={p.id}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              className="sticky will-change-transform"
              style={{
                top: `calc(${BASE_TOP}px + ${index * TOP_OFFSET}px)`,
                zIndex: index + 1,
                transformOrigin: "top center",
                marginBottom:
                  index === projects.length - 1
                    ? "0px"
                    : "clamp(24px, 4vh, 36px)",
              }}
            >
              <div className="group relative rounded-2xl sm:rounded-[32px] overflow-hidden bg-[#12141A] border border-white/12 h-[460px] sm:h-[520px] md:h-[580px] lg:h-[620px] max-h-[72vh] shadow-[0_-12px_36px_rgba(0,0,0,0.65),0_25px_60px_rgba(0,0,0,0.9)]">
                {/* Project Image */}
                <Image
                  src={p.img}
                  alt={p.alt}
                  fill
                  className="object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
                  sizes="(max-width: 1280px) 100vw, 1240px"
                  priority={index === 0}
                />

                {/* Subtle Top Index Badge */}
                <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-black/55 backdrop-blur-md border border-white/15 text-white/90 text-[11px] sm:text-xs font-mono tracking-wider">
                    0{index + 1} / 04
                  </span>
                </div>

                {/* Gradient Backdrop for contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30 pointer-events-none" />

                {/* Bottom Glass Information Bar - original rich design restored */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 lg:bottom-8 lg:left-8 lg:right-8 rounded-xl sm:rounded-2xl bg-black/50 backdrop-blur-md sm:backdrop-blur-xl border border-white/20 p-4 sm:p-6 lg:p-7 shadow-2xl">
                  {/* Top Row: Title & Location */}
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-base sm:text-xl lg:text-2xl font-bold tracking-tight text-white leading-tight">
                      {p.title}
                    </h3>
                    <span className="text-xs sm:text-sm font-medium text-white/90 shrink-0">
                      {p.location}
                    </span>
                  </div>

                  {/* Bottom Row: Date & Scope Category separated by vertical divider */}
                  <div className="mt-3 sm:mt-4 flex items-center text-xs sm:text-sm font-medium text-white/90">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <Calendar className="w-4 h-4 text-white/90 shrink-0" />
                      <span>{p.date}</span>
                    </div>
                    <span
                      className="h-3.5 w-[1px] bg-white/30 mx-3 sm:mx-4"
                      aria-hidden="true"
                    />
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <Building2 className="w-4 h-4 text-white/90 shrink-0" />
                      <span>{p.category}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 3 Metric Pills with clean normal spacing below the stacked cards */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          <div className="rounded-2xl bg-[#12141A] border border-white/[0.08] p-5 sm:p-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#FA551E]/15 border border-[#FA551E]/30 flex items-center justify-center text-[#FA551E]">
              <Clock className="w-6 h-6 stroke-[2]" />
            </div>
            <div>
              <div className="text-xl font-extrabold text-white">4-6 Weeks</div>
              <div className="text-xs font-medium text-neutral-400">
                Turnaround Average
              </div>
              <div className="text-[11px] text-neutral-500">Fast mobilization</div>
            </div>
          </div>

          <div className="rounded-2xl bg-[#12141A] border border-white/[0.08] p-5 sm:p-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#FA551E]/15 border border-[#FA551E]/30 flex items-center justify-center text-[#FA551E]">
              <TrendingUp className="w-6 h-6 stroke-[2]" />
            </div>
            <div>
              <div className="text-xl font-extrabold text-white">100%</div>
              <div className="text-xs font-medium text-neutral-400">
                Quality Compliance
              </div>
              <div className="text-[11px] text-neutral-500">BCA safety standards</div>
            </div>
          </div>

          <div className="rounded-2xl bg-[#12141A] border border-white/[0.08] p-5 sm:p-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#FA551E]/15 border border-[#FA551E]/30 flex items-center justify-center text-[#FA551E]">
              <CheckCircle className="w-6 h-6 stroke-[2]" />
            </div>
            <div>
              <div className="text-xl font-extrabold text-white">Delivered</div>
              <div className="text-xs font-medium text-neutral-400">
                On Schedule
              </div>
              <div className="text-[11px] text-neutral-500">98% of projects</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
