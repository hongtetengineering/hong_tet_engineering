import Image from "next/image";
import { Star, ShieldCheck } from "lucide-react";

export function ProcessSection() {
  const steps = [
    {
      num: "01",
      title: "Consultation",
      desc: "We listen, understand your goals, and assess your project needs.",
      img: "/home/7H4waNan9MZkDfcZqSBXMqTCTY.png",
      alt: "Consultation",
    },
    {
      num: "02",
      title: "Planning & Estimate",
      desc: "We create a detailed plan and transparent estimate with no surprises.",
      img: "/home/GKLn3u4gkhyDTonuQzGpMP0QAY.png",
      alt: "Planning & Estimate",
    },
    {
      num: "03",
      title: "Build & Manage",
      desc: "Our team builds with care while we manage every detail, safety standard, and keep you updated regularly.",
      img: "/home/qTMfqkRthxWjRBqqP0A3mC1IXg.png",
      alt: "Build & Manage",
    },
    {
      num: "04",
      title: "Final Walkthrough",
      desc: "We review every joint, fitting, and handover item together to ensure your complete satisfaction.",
      img: "/home/2A7SI6YLmu8H4KjoW07R9xn1FH8.png",
      alt: "Final Walkthrough",
    },
  ];

  const avatars = [
    "/home/jz0nn6blo9C1kYs0h5uBwk5w2o.png",
    "/home/3132u5ED3B8BTeHA7jhd3hof50.png",
    "/home/OvpeqVpfNycOZM27sbpVcHPQB40.png",
  ];

  return (
    <section id="process" className="bg-white py-20 sm:py-28 lg:py-32 relative">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-start">
          {/* Left Column (Sticky) */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 xl:top-28">
            {/* Top Indicator */}
            <div className="flex items-center gap-2 text-sm font-medium text-neutral-800 mb-4 sm:mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 inline-block" />
              <span>How we Works</span>
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-950 leading-[1.08] mb-4 sm:mb-5">
              Our Process
            </h2>

            {/* Subtitle Description */}
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed max-w-md mb-8 sm:mb-10">
              We streamline the engineering and construction journey with a clear, proven process — designed to ensure alignment, speed, and measurable outcomes.
            </p>

            {/* Orange Licensed Card */}
            <div className="rounded-3xl bg-[#FA551E] text-white p-6 sm:p-7 shadow-xl shadow-orange-500/10">
              {/* Inner Top Pill */}
              <div className="rounded-2xl bg-black/12 p-3 sm:p-3.5 flex items-center gap-3.5">
                <div className="w-9 h-9 rounded-xl border border-white/40 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5 text-white stroke-[2.2]" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[11px] font-bold tracking-wider text-white uppercase leading-none">
                    LICENSED
                  </span>
                  <div className="flex items-center gap-1 text-white">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-white text-white" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Headline & Subtitle */}
              <h3 className="mt-5 text-xl sm:text-2xl font-bold tracking-tight text-white leading-tight">
                5-Star Licensed Service
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm text-white/90 font-normal leading-relaxed">
                Proven quality. Trusted by thousands.
              </p>

              {/* Avatar Cluster & Happy Customers */}
              <div className="mt-6 flex items-center gap-3.5">
                <div className="flex -space-x-2.5 items-center">
                  {avatars.map((av, i) => (
                    <div
                      key={i}
                      className="relative h-9 w-9 sm:h-10 sm:w-10 rounded-full border-2 border-white overflow-hidden shrink-0 shadow-sm"
                      style={{
                        borderRadius: "9999px",
                        clipPath: "circle(50% at 50% 50%)",
                        WebkitClipPath: "circle(50% at 50% 50%)",
                      }}
                    >
                      <Image
                        src={av}
                        alt="Client avatar"
                        fill
                        className="object-cover"
                        style={{ borderRadius: "9999px" }}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-black/15 text-white font-bold text-xs">
                    2K+
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-white">
                    Happy Customers
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (Steps with Vertical Line Directly Underneath Numbers) */}
          <div className="lg:col-span-7">
            <div>
              {steps.map((st) => (
                <div
                  key={st.num}
                  className="flex items-start gap-5 sm:gap-7 lg:gap-9"
                >
                  {/* Left: Number + Vertical Line directly underneath extending down */}
                  <div className="flex flex-col items-center shrink-0 w-11 sm:w-14 lg:w-16 self-stretch">
                    <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 tracking-tight leading-none block select-none">
                      {st.num}
                    </span>
                    <div className="w-[1px] bg-neutral-200 flex-1 my-3 sm:my-4" />
                  </div>

                  {/* Right: Step Content */}
                  <div className="flex-1 min-w-0 pb-14 sm:pb-18 lg:pb-22">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-neutral-900 tracking-tight">
                      {st.title}
                    </h3>

                    <p className="mt-2 text-sm sm:text-base text-neutral-600 leading-relaxed max-w-lg">
                      {st.desc}
                    </p>

                    <div className="mt-5 sm:mt-6 relative w-full h-[240px] sm:h-[320px] md:h-[380px] rounded-2xl sm:rounded-3xl overflow-hidden bg-neutral-100 shadow-sm border border-black/5">
                      <Image
                        src={st.img}
                        alt={st.alt}
                        fill
                        className="object-cover hover:scale-102 transition-transform duration-500"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

