import Image from "next/image";
import Link from "next/link";
import { Check, CheckCircle2, Phone, Star } from "lucide-react";

// Traffic Cone Component with exact 3D styling and blur matching the template
function TrafficCone({
  className,
  blur = 2,
  rotate = 0,
}: {
  className?: string;
  blur?: number;
  rotate?: number;
}) {
  return (
    <div
      className={`pointer-events-none select-none ${className}`}
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
  );
}

export function HeroSection() {
  const photoStrip = [
    { src: "/home/URVvm2e2n311SLbznqjwOjS6Pns.png", alt: "Structural Steel & Facade" },
    { src: "/home/spqZSEbMAjhztlmgUStzq9snwHQ.png", alt: "Modern Interior Architecture" },
    { src: "/home/sV0CAZAwKE1RB17JCdRjT8g7vkk.jpg", alt: "Spiral Staircase & Railing" },
    { src: "/home/i305rk5y1kDk7MK7PHZs9qBDp4.png", alt: "Residential Renovation & Canopy" },
    { src: "/home/ltt4YfNYzEEkxPtwrx6JtpgMls.jpg", alt: "Commercial Glass & Metal Pavilion" },
    { src: "/home/HnhIurfILJ3NurhYjLth8tXMvM.png", alt: "Roofing & Patio Structure" },
  ];

  return (
    <section className="relative w-full">
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
          <h1 className="text-6xl sm:text-8xl lg:text-[112px] font-black tracking-tight text-neutral-900 leading-[0.96] select-none">
            Built To Last
          </h1>
          <p className="mt-5 text-base sm:text-lg lg:text-xl text-neutral-600 font-normal leading-relaxed max-w-xl mx-auto">
            Reliable construction services for renovations, remodels, and new builds—planned clearly and built with care.
          </p>
          <div className="mt-7 flex items-center justify-center">
            <Link
              href="#contact"
              className="px-8 py-3.5 rounded-full bg-[#FA551E] hover:bg-[#e0430f] text-white text-sm font-bold tracking-wide shadow-md hover:shadow-lg transition-all active:scale-[0.98]"
            >
              Get a Free Estimate
            </Link>
          </div>
        </div>

        {/* =========================================================================
            WORKERS STAGE WITH FLOATING TRAFFIC CONES (Positioned safely to sides and bottom)
            ========================================================================= */}
        <div className="relative z-10 w-full max-w-[1200px] mx-auto h-[380px] sm:h-[480px] lg:h-[550px] mt-6 sm:mt-10 flex items-end justify-center">
          {/* FLOATING TRAFFIC CONES: Left Side, Right Side, and Bottom Edge (NOT on any faces!) */}
          
          {/* Cone 1: Far Left (Mid-height, blurred bokeh) */}
          <TrafficCone
            className="absolute left-[3%] sm:left-[6%] bottom-[42%] w-10 sm:w-14 z-5"
            blur={2.5}
            rotate={-12}
          />

          {/* Cone 2: Mid-Left Floating (Outside left worker's arm, elbow level) */}
          <TrafficCone
            className="absolute left-[18%] sm:left-[21%] bottom-[38%] w-9 sm:w-12 z-5"
            blur={1.8}
            rotate={8}
          />

          {/* Cone 3: Lower Left (Near bottom-left of stage) */}
          <TrafficCone
            className="absolute left-[9%] sm:left-[12%] bottom-[16%] w-8 sm:w-11 z-5"
            blur={3}
            rotate={-16}
          />

          {/* Cone 4: Bottom-Left Edge */}
          <TrafficCone
            className="absolute left-[20%] sm:left-[23%] bottom-[6%] w-10 sm:w-13 z-25"
            blur={2}
            rotate={-8}
          />

          {/* Cone 5: Center-Bottom (In front of supervisor waist/belt at very bottom edge) */}
          <TrafficCone
            className="absolute left-[47%] sm:left-[49%] bottom-[2%] w-10 sm:w-13 z-30"
            blur={1.6}
            rotate={-4}
          />

          {/* Cone 6: Right-Center Bottom (Near phone/lower hands at bottom edge) */}
          <TrafficCone
            className="absolute right-[31%] sm:right-[33%] bottom-[3%] w-9 sm:w-12 z-30"
            blur={1.6}
            rotate={14}
          />

          {/* Cone 7: Mid-Right Floating (Outside right worker's arm, elbow level) */}
          <TrafficCone
            className="absolute right-[19%] sm:right-[22%] bottom-[38%] w-9 sm:w-12 z-5"
            blur={1.8}
            rotate={-10}
          />

          {/* Cone 8: Lower Right (Near bottom-right of stage) */}
          <TrafficCone
            className="absolute right-[9%] sm:right-[12%] bottom-[18%] w-11 sm:w-15 z-5"
            blur={2.8}
            rotate={15}
          />

          {/* Cone 9: Far Right (Mid-height, blurred bokeh) */}
          <TrafficCone
            className="absolute right-[2%] sm:right-[5%] bottom-[42%] w-10 sm:w-14 z-5"
            blur={2.5}
            rotate={-10}
          />

          {/* THREE ENGINEERS */}
          <div className="relative w-full h-full flex items-end justify-center select-none pointer-events-none">
            {/* Left Worker: Arms crossed, grayscale */}
            <div className="relative -mr-12 sm:-mr-20 lg:-mr-24 w-[200px] sm:w-[320px] lg:w-[380px] h-[78%] sm:h-[82%] z-10">
              <Image
                src="/home/IZI1AFMAoGRXgu1yYBk8Ipzrg.png"
                alt="Construction Engineer Left"
                fill
                priority
                className="object-contain object-bottom grayscale contrast-105 drop-shadow-xl"
              />
            </div>

            {/* Center Lead Supervisor: Full vibrant color, orange hardhat & vest, blueprint tube */}
            <div className="relative z-20 w-[240px] sm:w-[370px] lg:w-[440px] h-[92%] sm:h-[98%] lg:h-full">
              <Image
                src="/home/US4fi1Xrh46xcHTcHtdAtBJBqUM.png"
                alt="Lead Construction Supervisor Center"
                fill
                priority
                className="object-contain object-bottom drop-shadow-2xl"
              />
            </div>

            {/* Right Worker: Looking at phone, grayscale */}
            <div className="relative -ml-12 sm:-ml-20 lg:-ml-24 w-[190px] sm:w-[310px] lg:w-[370px] h-[78%] sm:h-[82%] z-10">
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
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 pt-16 sm:pt-24 pb-16 sm:pb-24">
        {/* Centered Brand Mark / Logo */}
        <div className="text-center">
          <div className="inline-flex items-center gap-3 justify-center mb-4">
            <div className="relative h-9 w-28 sm:w-32">
              <Image
                src="/logo/full-logo-transparent.webp"
                alt="Hong Tet Engineering Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Headline Statement: Dark bold text on left, light grey text on right */}
          <h2 className="text-3xl sm:text-5xl lg:text-[54px] font-black tracking-tight leading-[1.12] max-w-4xl mx-auto">
            <span className="text-neutral-900">
              Reliable construction for homes
            </span>{" "}
            <span className="text-neutral-300 font-bold">
              and commercial spaces—delivered on time, on budget, and built to last.
            </span>
          </h2>
        </div>

        {/* Horizontal Photo Strip (6 images in row) */}
        <div className="mt-14 sm:mt-20 overflow-x-auto pb-4 scrollbar-none">
          <div className="grid grid-cols-6 gap-3 sm:gap-4 min-w-[800px] lg:min-w-0">
            {photoStrip.map((item, idx) => (
              <div
                key={idx}
                className="group relative h-44 sm:h-56 lg:h-64 rounded-2xl overflow-hidden bg-neutral-200 shadow-sm border border-black/5"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>

        {/* Trusted by Local Property Owners Card */}
        <div className="mt-12 sm:mt-16 max-w-2xl mx-auto bg-white rounded-2xl border border-neutral-200/90 shadow-xs px-6 py-5 text-center">
          <p className="text-xs sm:text-[13px] font-bold text-neutral-800 tracking-wide uppercase mb-3">
            Trusted by Local Property Owners
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs font-semibold text-neutral-600">
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
        <div className="mt-10 sm:mt-14 grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 items-stretch">
          {/* Card 1: Orange Feature Card */}
          <div className="md:col-span-5 rounded-3xl bg-[#FA551E] text-white p-8 sm:p-10 flex flex-col justify-between shadow-lg">
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Built With Confidence
              </h3>
              <p className="mt-3 text-sm text-white/90 leading-relaxed">
                From planning to final walkthrough, our team keeps your construction project clear, organized, and built to last.
              </p>
              <ul className="mt-6 space-y-2.5 text-sm font-medium">
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
            <div className="mt-8 pt-4">
              <a
                href="tel:+6583145705"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#FA551E] text-xs sm:text-sm font-bold shadow-sm hover:bg-neutral-50 transition-colors"
              >
                <Phone className="w-4 h-4 fill-[#FA551E]" />
                <span>Call us: +65 8314 5705</span>
              </a>
            </div>
          </div>

          {/* Card 2: Photo Card (5D8SUEMZgCswNmfA3kbAygA8L0.png) */}
          <div className="md:col-span-4 relative rounded-3xl overflow-hidden min-h-[280px] sm:min-h-[320px] shadow-sm border border-black/5">
            <Image
              src="/home/5D8SUEMZgCswNmfA3kbAygA8L0.png"
              alt="Two contractors reviewing blueprints"
              fill
              className="object-cover"
            />
          </div>

          {/* Card 3: Two White Stats Cards Stacked */}
          <div className="md:col-span-3 flex flex-col gap-5 sm:gap-6">
            <div className="flex-1 rounded-3xl bg-white border border-neutral-200/90 p-7 sm:p-8 flex flex-col justify-center shadow-xs">
              <span className="text-5xl lg:text-6xl font-black text-neutral-900 tracking-tight">
                34+
              </span>
              <p className="mt-2 text-sm font-medium text-neutral-600">
                Projects completed
              </p>
            </div>
            <div className="flex-1 rounded-3xl bg-white border border-neutral-200/90 p-7 sm:p-8 flex flex-col justify-center shadow-xs">
              <span className="text-5xl lg:text-6xl font-black text-neutral-900 tracking-tight">
                16+
              </span>
              <p className="mt-2 text-sm font-medium text-neutral-600">
                Years of experience
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
