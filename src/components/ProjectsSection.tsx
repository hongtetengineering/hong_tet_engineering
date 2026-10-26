"use client";

import { useRef } from "react";
import Image from "next/image";
import { Calendar, Building2, Clock, TrendingUp, CheckCircle } from "lucide-react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

const projects = [
  {
    id: "01",
    title: "Structural Steel Framing & I-Beams",
    location: "Tuas Industrial, Singapore",
    date: "Jul 2024 – Sep 2024",
    category: "Metal Structure Fabrication",
    img: "/home/URVvm2e2n311SLbznqjwOjS6Pns.png",
    alt: "Structural Steel Framing & I-Beams",
  },
  {
    id: "02",
    title: "Industrial Canopy & Zinc Roofing",
    location: "Woodlands Logistics, Singapore",
    date: "May 2024 – Aug 2024",
    category: "Roofing & Shelter Works",
    img: "/home/UEooxcCtAblBuA6tOBf3GhWQqDg.png",
    alt: "Industrial Canopy & Zinc Roofing",
  },
  {
    id: "03",
    title: "Stainless Steel Railings & Heavy Gate",
    location: "Bukit Batok, Singapore",
    date: "Mar 2024 – Jun 2024",
    category: "Metal & Stainless-Steel Works",
    img: "/home/spqZSEbMAjhztlmgUStzq9snwHQ.png",
    alt: "Stainless Steel Railings & Heavy Gate",
  },
  {
    id: "04",
    title: "Architectural Glass Windows & Facade",
    location: "Jurong East, Singapore",
    date: "Jan 2024 – Apr 2024",
    category: "Glass Installation & Renovation",
    img: "/home/i305rk5y1kDk7MK7PHZs9qBDp4.png",
    alt: "Architectural Glass Windows & Facade",
  },
];

interface ProjectCardProps {
  project: (typeof projects)[0];
  index: number;
  total: number;
  progress: MotionValue<number>;
  targetScale: number;
}

function ProjectCard({
  project,
  index,
  total,
  progress,
  targetScale,
}: ProjectCardProps) {
  // Start scaling and dimming as next cards scroll over
  const rangeStart = index * (0.8 / total);
  const rangeEnd = 1;

  const scale = useTransform(progress, [rangeStart, rangeEnd], [1, targetScale]);
  const brightness = useTransform(
    progress,
    [rangeStart, rangeEnd],
    [1, Math.max(0.68, 0.70 + (index / total) * 0.30)]
  );
  const filter = useTransform(brightness, (b) => `brightness(${b})`);

  // Compact top offset so all stacked headers/badges show
  const topOffset = 64 + index * 14;

  return (
    <div
      className="sticky will-change-transform"
      style={{
        top: `calc(${topOffset}px)`,
        zIndex: index + 1,
        marginBottom:
          index === total - 1
            ? "0px"
            : "clamp(48px, 16vh, 140px)",
      }}
    >
      <motion.div
        style={{
          scale,
          filter,
          transformOrigin: "top center",
        }}
        className="w-full transform-gpu"
      >
        <div className="group relative rounded-2xl sm:rounded-[32px] overflow-hidden bg-[#12141A] border border-white/12 h-[390px] sm:h-[480px] md:h-[540px] lg:h-[600px] max-h-[70vh] shadow-[0_-12px_36px_rgba(0,0,0,0.65),0_25px_60px_rgba(0,0,0,0.9)]">
          {/* Project Image */}
          <Image
            src={project.img}
            alt={project.alt}
            fill
            className="object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
            sizes="(max-width: 1280px) 100vw, 1240px"
            priority={index === 0}
            loading={index === 0 ? "eager" : "lazy"}
          />

          {/* Subtle Top Index Badge */}
          <div className="absolute top-3.5 left-3.5 sm:top-6 sm:left-6 z-20 flex items-center gap-2">
            <span className="px-2.5 py-1 sm:px-3 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-white/90 text-[10px] sm:text-xs font-mono tracking-wider">
              0{index + 1} / 04
            </span>
          </div>

          {/* Gradient Backdrop for contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30 pointer-events-none" />

          {/* Bottom Glass Information Bar */}
          <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6 lg:bottom-8 lg:left-8 lg:right-8 rounded-xl sm:rounded-2xl bg-black/60 backdrop-blur-md sm:backdrop-blur-xl border border-white/20 p-3.5 sm:p-6 lg:p-7 shadow-2xl">
            {/* Top Row: Title & Location */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4">
              <h3 className="text-sm sm:text-xl lg:text-2xl font-bold tracking-tight text-white leading-tight">
                {project.title}
              </h3>
              <span className="text-[11px] sm:text-sm font-medium text-neutral-300 sm:text-white/90 shrink-0">
                {project.location}
              </span>
            </div>

            {/* Bottom Row: Date & Scope Category */}
            <div className="mt-2.5 sm:mt-4 flex flex-wrap items-center gap-y-1 text-[11px] sm:text-sm font-medium text-white/90">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white/90 shrink-0" />
                <span>{project.date}</span>
              </div>
              <span
                className="h-3 sm:h-3.5 w-[1px] bg-white/30 mx-2.5 sm:mx-4"
                aria-hidden="true"
              />
              <div className="flex items-center gap-1.5 sm:gap-2">
                <Building2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white/90 shrink-0" />
                <span className="truncate max-w-[170px] sm:max-w-none">{project.category}</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section id="projects" className="bg-[#08090C] text-white py-16 sm:py-24 relative">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-[15px] min-[390px]:text-[17px] sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight whitespace-nowrap">
            Featured Engineering & Build Projects
          </h2>
          <p className="mt-3 sm:mt-4 text-xs sm:text-base text-neutral-400 leading-relaxed max-w-sm sm:max-w-xl mx-auto">
            Explore our portfolio of completed structural steel frameworks, luxury residential builds, and bespoke architectural installations across Singapore.
          </p>
        </div>

        {/* Subhead Bar */}
        <div className="mt-6 sm:mt-10 flex items-center justify-between text-xs sm:text-sm font-medium border-b border-white/[0.08] pb-3">
          <div className="flex items-center gap-2 text-neutral-400 shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FA551E]" />
            <span className="whitespace-nowrap font-semibold">Selected Case Studies</span>
          </div>
          <div className="text-neutral-500 font-mono tracking-wider text-[11px] sm:text-xs shrink-0 whitespace-nowrap">
            [ 01 — 04 ]
          </div>
        </div>

        {/* Stacking Cards Deck Container */}
        <div ref={containerRef} className="mt-8 sm:mt-12 relative">
          {projects.map((p, index) => {
            const targetScale = Math.max(0.88, 1 - (projects.length - 1 - index) * 0.04);
            return (
              <ProjectCard
                key={p.id}
                project={p}
                index={index}
                total={projects.length}
                progress={scrollYProgress}
                targetScale={targetScale}
              />
            );
          })}
        </div>

        {/* 3 Metric Pills */}
        <div className="mt-14 sm:mt-20 grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="rounded-2xl bg-[#12141A] border border-white/[0.08] p-4 sm:p-6 flex items-center gap-3.5 sm:gap-4 cursor-default"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#FA551E]/15 border border-[#FA551E]/30 flex items-center justify-center text-[#FA551E] shrink-0">
              <Clock className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2]" />
            </div>
            <div>
              <div className="text-lg sm:text-xl font-extrabold text-white">4-6 Weeks</div>
              <div className="text-xs font-medium text-neutral-400">
                Turnaround Average
              </div>
              <div className="text-[11px] text-neutral-500">Fast mobilization</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.12 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="rounded-2xl bg-[#12141A] border border-white/[0.08] p-4 sm:p-6 flex items-center gap-3.5 sm:gap-4 cursor-default"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#FA551E]/15 border border-[#FA551E]/30 flex items-center justify-center text-[#FA551E] shrink-0">
              <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2]" />
            </div>
            <div>
              <div className="text-lg sm:text-xl font-extrabold text-white">100%</div>
              <div className="text-xs font-medium text-neutral-400">
                Quality Compliance
              </div>
              <div className="text-[11px] text-neutral-500">BCA safety standards</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.19 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="rounded-2xl bg-[#12141A] border border-white/[0.08] p-4 sm:p-6 flex items-center gap-3.5 sm:gap-4 cursor-default"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#FA551E]/15 border border-[#FA551E]/30 flex items-center justify-center text-[#FA551E] shrink-0">
              <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2]" />
            </div>
            <div>
              <div className="text-lg sm:text-xl font-extrabold text-white">Delivered</div>
              <div className="text-xs font-medium text-neutral-400">
                On Schedule
              </div>
              <div className="text-[11px] text-neutral-500">98% of projects</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
