import Image from "next/image";
import Link from "next/link";
import { Check, CheckCircle2, Phone, Star } from "lucide-react";

// Traffic Cone Component with exact 3D styling, realistic perspective blur, and natural floating animation
function TrafficCone({
  className,
  blur = 2,
  rotate = 0,
  duration = 5,
  delay = 0,
  variant = "a",
}: {
  className?: string;
  blur?: number;
  rotate?: number;
  duration?: number;
  delay?: number;
  variant?: "a" | "b" | "c";
}) {
  const animName =
    variant === "b"
      ? "heroConeFloatB"
      : variant === "c"
      ? "heroConeFloatC"
      : "heroConeFloatA";

  return (
    <div className={`pointer-events-none select-none ${className}`}>
      <div
        className="w-full h-full will-change-transform"
        style={{
          animation: `${animName} ${duration}s ease-in-out ${delay}s infinite alternate`,
        }}
      >
        <div
          className="w-full h-full"
          style={{
            transform: `rotate(${rotate}deg)`,
            filter: blur > 0 ? `blur(${blur}px)` : "none",
          }}
        >
          <svg
            viewBox="0 0 76 96"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full drop-shadow-md"
          >
            {/* 3D Base Plate with Perspective */}
            <path d="M6 78 L38 93 L70 80 L38 68 Z" fill="#C93800" />
            <path d="M8 77 L38 90 L68 79 L38 70 Z" fill="#FF5E14" />
            {/* Main Cone Body (Vibrant Orange) */}
            <path d="M22 72 L38 12 L54 72 Z" fill="#FF5E14" />
            {/* Lower White Reflective Band */}
            <path d="M26 64 L50 64 L47 53 L29 53 Z" fill="#FFFFFF" />
            {/* Upper White Reflective Band */}
            <path d="M30 46 L46 46 L43 36 L33 36 Z" fill="#FFFFFF" />
            {/* Top Tip */}
            <path d="M35 12 L41 12 L42 20 L34 20 Z" fill="#FF5E14" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export function HeroSection() {
  const photoStrip = [
    {
      src: "/services/galary/construction-works-frankfurt-downtown-germany.jpg",
      alt: "Commercial Building & High-Rise Construction",
    },
    {
      src: "/services/galary/full-shot-worker-with-helmet-working-roof.jpg",
      alt: "Industrial Roofing & Canopy Installation",
    },
    {
      src: "/services/galary/low-angle-view-scafolding-building.jpg",
      alt: "Scaffolding & Building Facade Engineering",
    },
    {
      src: "/services/galary/scene-construction-site-with-equipment.jpg",
      alt: "Structural Steel & Site Equipment Operations",
    },
    {
      src: "/services/galary/team-architects-building-site.jpg",
      alt: "BCA Site Supervision & Engineering Inspection",
    },
    {
      src: "/services/galary/two-builders-works-building-site.jpg",
      alt: "Skilled Construction & Metal Framing Team",
    },
    {
      src: "/services/galary/house-with-marble-fence.jpg",
      alt: "Architectural Metal Fencing & Gates",
    },
    {
      src: "/services/galary/businessman-discussing-blueprint-with-architects.jpg",
      alt: "Project Blueprint Planning & Consultation",
    },
    {
      src: "/services/galary/full-shot-man-mixing-construction-composition.jpg",
      alt: "Structural Foundation & Alteration Works",
    },
    {
      src: "/services/galary/young-engineer-work-clothes-yellow-hardhat-dreamily-looking-aside-holding-plan-new-apartments-hands-with-red-ladder-near-repairing-flat.jpg",
      alt: "Commercial & Residential Interior Fit-Out",
    },
  ];

  return (
    <section className="relative w-full max-w-full overflow-x-hidden">
      {/* Dynamic Keyframes for smooth floating traffic cones */}
      <style>{`
        @keyframes heroConeFloatA {
          0% {
            transform: translate3d(0, 0, 0) rotate(0deg);
          }
          50% {
            transform: translate3d(2px, -8px, 0) rotate(2deg);
          }
          100% {
            transform: translate3d(-3px, -16px, 0) rotate(-2.5deg);
          }
        }
        @keyframes heroConeFloatB {
          0% {
            transform: translate3d(0, 0, 0) rotate(0deg);
          }
          50% {
            transform: translate3d(-3px, -11px, 0) rotate(-3deg);
          }
          100% {
            transform: translate3d(2px, -19px, 0) rotate(2.2deg);
          }
        }
        @keyframes heroConeFloatC {
          0% {
            transform: translate3d(0, 0, 0) rotate(0deg);
          }
          50% {
            transform: translate3d(3px, -7px, 0) rotate(2.5deg);
          }
          100% {
            transform: translate3d(-2px, -13px, 0) rotate(-1.5deg);
          }
        }
      `}</style>

      {/* =========================================================================
          MAIN HERO CARD CONTAINER (Full-width blueprint background with rounded bottom)
          ========================================================================= */}
      <div className="relative w-full bg-[#FAF9F6] border-b border-black/[0.06] rounded-b-[40px] md:rounded-b-[56px] overflow-hidden pt-8 sm:pt-14 pb-0">
        {/* FULL SCREEN BACKGROUND IMAGE: Architectural Blueprint Drawing */}
        <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0">
          <Image
            src="/home/105zO15MKPqahxW0hkKzQ2UbeU.png"
            alt="Architectural Blueprint Drawing"
            fill
            priority
            className="object-cover object-center opacity-85"
          />
          {/* Subtle top fade for navbar area */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#FAF9F6]/40 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* WARM PEACH / LIGHT YELLOW-ORANGE GLOW (Rising from bottom edge, exactly matching reference Image 2) */}
        <div
          className="absolute inset-x-0 bottom-0 h-[68%] pointer-events-none z-1"
          style={{
            background:
              "linear-gradient(to top, rgba(255, 178, 115, 0.45) 0%, rgba(255, 208, 155, 0.30) 38%, rgba(255, 235, 205, 0.12) 70%, transparent 100%)",
          }}
        />

        {/* HERO CONTENT: Header, Text, Button */}
        <div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl min-[380px]:text-5xl sm:text-7xl md:text-8xl lg:text-[112px] font-black tracking-tight text-neutral-900 leading-[0.96] select-none">
            Built To Last
          </h1>
          <p className="mt-4 sm:mt-5 text-xs sm:text-base lg:text-xl text-neutral-600 font-normal leading-relaxed max-w-sm sm:max-w-xl mx-auto">
            Reliable structural steel fabrication, industrial roofing, metalworks, architectural glass, and skilled manpower solutions across Singapore.
          </p>
          <div className="mt-6 sm:mt-7 flex items-center justify-center">
            <Link
              href="#contact"
              className="px-7 sm:px-8 py-3 sm:py-3.5 rounded-full bg-[#FA551E] hover:bg-[#e0430f] text-white text-xs sm:text-sm font-bold tracking-wide shadow-md hover:shadow-lg transition-all active:scale-[0.98]"
            >
              Request a Quote
            </Link>
          </div>
        </div>

        {/* =========================================================================
            WORKERS STAGE WITH FLOATING TRAFFIC CONES (Positioned safely to sides and bottom)
            ========================================================================= */}
        <div className="relative z-10 w-full max-w-[1200px] mx-auto h-[290px] sm:h-[440px] lg:h-[550px] mt-6 sm:mt-10 flex items-end justify-center overflow-hidden">
          {/* FLOATING TRAFFIC CONES: Animated with independent floating rhythms */}
          
          {/* Cone 1: Far Left (Mid-height, blurred bokeh) */}
          <TrafficCone
            className="hidden sm:block absolute left-[3%] sm:left-[6%] bottom-[42%] w-10 sm:w-14 z-5"
            blur={2.5}
            rotate={-12}
            duration={5.2}
            delay={0}
            variant="a"
          />

          {/* Cone 2: Mid-Left Floating */}
          <TrafficCone
            className="hidden sm:block absolute left-[18%] sm:left-[21%] bottom-[38%] w-9 sm:w-12 z-5"
            blur={1.8}
            rotate={8}
            duration={6.0}
            delay={0.8}
            variant="b"
          />

          {/* Cone 3: Lower Left */}
          <TrafficCone
            className="absolute left-[4%] sm:left-[12%] bottom-[12%] sm:bottom-[16%] w-7 sm:w-11 z-5"
            blur={2.5}
            rotate={-16}
            duration={4.6}
            delay={1.5}
            variant="c"
          />

          {/* Cone 4: Bottom-Left Edge */}
          <TrafficCone
            className="hidden sm:block absolute left-[20%] sm:left-[23%] bottom-[6%] w-10 sm:w-13 z-25"
            blur={2}
            rotate={-8}
            duration={5.8}
            delay={0.4}
            variant="a"
          />

          {/* Cone 5: Center-Bottom (In front of supervisor waist/belt at very bottom edge) */}
          <TrafficCone
            className="absolute left-[48%] sm:left-[49%] bottom-[1%] sm:bottom-[2%] w-8 sm:w-13 z-30"
            blur={1.4}
            rotate={-4}
            duration={4.8}
            delay={1.1}
            variant="b"
          />

          {/* Cone 6: Right-Center Bottom */}
          <TrafficCone
            className="hidden sm:block absolute right-[31%] sm:right-[33%] bottom-[3%] w-9 sm:w-12 z-30"
            blur={1.6}
            rotate={14}
            duration={5.4}
            delay={0.2}
            variant="c"
          />

          {/* Cone 7: Mid-Right Floating */}
          <TrafficCone
            className="hidden sm:block absolute right-[19%] sm:right-[22%] bottom-[38%] w-9 sm:w-12 z-5"
            blur={1.8}
            rotate={-10}
            duration={6.2}
            delay={1.7}
            variant="a"
          />

          {/* Cone 8: Lower Right */}
          <TrafficCone
            className="absolute right-[4%] sm:right-[12%] bottom-[12%] sm:bottom-[18%] w-7 sm:w-15 z-5"
            blur={2.5}
            rotate={15}
            duration={4.9}
            delay={0.6}
            variant="b"
          />

          {/* Cone 9: Far Right */}
          <TrafficCone
            className="hidden sm:block absolute right-[2%] sm:right-[5%] bottom-[42%] w-10 sm:w-14 z-5"
            blur={2.5}
            rotate={-10}
            duration={5.7}
            delay={1.3}
            variant="c"
          />

          {/* THREE ENGINEERS */}
          <div className="relative w-full h-full flex items-end justify-center select-none pointer-events-none">
            {/* Left Worker: Arms crossed, grayscale */}
            <div className="relative -mr-7 sm:-mr-20 lg:-mr-24 w-[125px] sm:w-[260px] lg:w-[380px] h-[78%] sm:h-[82%] z-10">
              <Image
                src="/home/IZI1AFMAoGRXgu1yYBk8Ipzrg.png"
                alt="Construction Engineer Left"
                fill
                priority
                className="object-contain object-bottom grayscale contrast-105 drop-shadow-xl"
              />
            </div>

            {/* Center Lead Supervisor: Full vibrant color, orange hardhat & vest, blueprint tube */}
            <div className="relative z-20 w-[170px] sm:w-[320px] lg:w-[440px] h-[92%] sm:h-[98%] lg:h-full">
              <Image
                src="/home/US4fi1Xrh46xcHTcHtdAtBJBqUM.png"
                alt="Lead Construction Supervisor Center"
                fill
                priority
                className="object-contain object-bottom drop-shadow-2xl"
              />
            </div>

            {/* Right Worker: Looking at phone, grayscale */}
            <div className="relative -ml-7 sm:-ml-20 lg:-ml-24 w-[120px] sm:w-[250px] lg:w-[370px] h-[78%] sm:h-[82%] z-10">
              <Image
                src="/home/Y1DFRVyNJj1u4gn1PVhbXl8T1hA.png"
                alt="Site Planning Engineer Right"
                fill
                priority
                className="object-contain object-bottom grayscale contrast-105 drop-shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          SECTION BELOW HERO: Brand headline, Photo Strip & Bento
          ========================================================================= */}
      {/* 1. Brand Mark & Headline (Constrained to standard max-w-[1240px]) */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 pt-12 sm:pt-20 text-center">
        {/* Centered Brand Mark / Logo */}
        <div className="text-center">
          <Link
            href="/#top"
            className="inline-flex items-center gap-3 justify-center mb-4 hover:scale-102 transition-transform cursor-pointer"
            title="Hong Tet Engineering - Home"
          >
            <div className="relative h-14 sm:h-16 w-28 sm:w-48">
              <Image
                src="/logo/full-logo-transparent.webp"
                alt="Hong Tet Engineering Logo"
                fill
                className="object-contain"
              />
            </div>
          </Link>

          {/* Headline Statement */}
          <h2 className="text-xl min-[390px]:text-2xl sm:text-4xl lg:text-[54px] font-black tracking-tight leading-[1.15] max-w-4xl mx-auto">
            <span className="text-neutral-900">
              Reliable construction for homes
            </span>{" "}
            <span className="text-neutral-300 font-bold">
              and commercial spaces—delivered on time, on budget, and built to last.
            </span>
          </h2>
        </div>
      </div>

      {/* 2. Full-Width Infinite Scrolling Photo Strip Marquee */}
      <div className="w-full overflow-hidden select-none relative py-6 sm:py-10">
        <style>{`
          @keyframes photoMarqueeKeyframes {
            0% {
              transform: translate3d(0, 0, 0);
            }
            100% {
              transform: translate3d(-50%, 0, 0);
            }
          }
          .animate-photo-marquee {
            display: flex !important;
            width: max-content !important;
            will-change: transform !important;
            animation: photoMarqueeKeyframes 48s linear infinite !important;
          }
          .animate-photo-marquee:hover {
            animation-play-state: paused !important;
          }
        `}</style>

        {/* Soft edge fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-24 bg-gradient-to-r from-[#FBF9F5] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-24 bg-gradient-to-l from-[#FBF9F5] to-transparent z-10 pointer-events-none" />

        <div className="animate-photo-marquee">
          {/* Track 1 */}
          <div className="flex items-center gap-3.5 sm:gap-5 shrink-0 pr-3.5 sm:pr-5">
            {photoStrip.map((item, idx) => (
              <div
                key={`photo-1-${idx}`}
                className="group/photo relative h-44 sm:h-56 lg:h-64 w-60 sm:w-76 lg:w-84 rounded-2xl sm:rounded-3xl overflow-hidden bg-neutral-200 shadow-sm border border-black/5 shrink-0"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 240px, 340px"
                  className="object-cover group-hover/photo:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/photo:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 text-white text-xs sm:text-sm font-bold drop-shadow-md opacity-0 group-hover/photo:opacity-100 transition-opacity duration-300 truncate pointer-events-none">
                  {item.alt}
                </div>
              </div>
            ))}
          </div>

          {/* Track 2 for seamless loop */}
          <div className="flex items-center gap-3.5 sm:gap-5 shrink-0 pr-3.5 sm:pr-5" aria-hidden="true">
            {photoStrip.map((item, idx) => (
              <div
                key={`photo-2-${idx}`}
                className="group/photo relative h-44 sm:h-56 lg:h-64 w-60 sm:w-76 lg:w-84 rounded-2xl sm:rounded-3xl overflow-hidden bg-neutral-200 shadow-sm border border-black/5 shrink-0"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 240px, 340px"
                  className="object-cover group-hover/photo:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/photo:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 text-white text-xs sm:text-sm font-bold drop-shadow-md opacity-0 group-hover/photo:opacity-100 transition-opacity duration-300 truncate pointer-events-none">
                  {item.alt}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Trusted By & Built With Confidence (Standard max-w-[1240px] matching other sections) */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 pb-14 sm:pb-24">
        {/* Trusted by Local Property Owners Card */}
        <div className="max-w-2xl mx-auto bg-white rounded-2xl border border-neutral-200/90 shadow-xs px-5 sm:px-6 py-4 sm:py-5 text-center">
          <p className="text-xs sm:text-[13px] font-bold text-neutral-800 tracking-wide uppercase mb-2.5 sm:mb-3">
            Trusted by Local Property Owners
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-8 text-xs font-semibold text-neutral-600">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#FA551E]" />
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#FA551E]" />
              <span>Quality Work Guaranteed</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#FA551E]" />
              <span>Project Support</span>
            </div>
          </div>
        </div>

        {/* 3-Column Bento Banner ("Built With Confidence") */}
        <div className="mt-8 sm:mt-14 grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 items-stretch">
          {/* Card 1: Orange Feature Card */}
          <div className="md:col-span-5 rounded-3xl bg-[#FA551E] text-white p-6 sm:p-10 flex flex-col justify-between shadow-lg">
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Built With Confidence
              </h3>
              <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm text-white/90 leading-relaxed">
                From planning to final walkthrough, our team keeps your construction project clear, organized, and built to last.
              </p>
              <ul className="mt-5 sm:mt-6 space-y-2 sm:space-y-2.5 text-xs sm:text-sm font-medium">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-white stroke-[2.5]" />
                  <span>Licensed construction crew</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-white stroke-[2.5]" />
                  <span>Clear timelines & estimates</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-white stroke-[2.5]" />
                  <span>Clean site management</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 sm:mt-8 pt-2 sm:pt-4">
              <a
                href="tel:+6598989760"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#FA551E] text-xs sm:text-sm font-bold shadow-sm hover:bg-neutral-50 transition-colors"
              >
                <Phone className="w-4 h-4 fill-[#FA551E]" />
                <span>Call us: +65 9898 9760</span>
              </a>
            </div>
          </div>

          {/* Card 2: Photo Card (5D8SUEMZgCswNmfA3kbAygA8L0.png) */}
          <div className="md:col-span-4 relative rounded-3xl overflow-hidden min-h-[240px] sm:min-h-[320px] shadow-sm border border-black/5">
            <Image
              src="/home/5D8SUEMZgCswNmfA3kbAygA8L0.png"
              alt="Two contractors reviewing blueprints"
              fill
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
            />
          </div>

          {/* Card 3: Two White Stats Cards Stacked */}
          <div className="md:col-span-3 flex flex-col gap-4 sm:gap-6">
            <div className="flex-1 rounded-3xl bg-white border border-neutral-200/90 p-5 sm:p-8 flex flex-col justify-center shadow-xs">
              <span className="text-4xl sm:text-5xl lg:text-6xl font-black text-neutral-900 tracking-tight">
                34+
              </span>
              <p className="mt-1 sm:mt-2 text-xs sm:text-sm font-medium text-neutral-600">
                Projects completed
              </p>
            </div>
            <div className="flex-1 rounded-3xl bg-white border border-neutral-200/90 p-5 sm:p-8 flex flex-col justify-center shadow-xs">
              <span className="text-4xl sm:text-5xl lg:text-6xl font-black text-neutral-900 tracking-tight">
                16+
              </span>
              <p className="mt-1 sm:mt-2 text-xs sm:text-sm font-medium text-neutral-600">
                Years of experience
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
