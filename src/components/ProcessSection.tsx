"use client";

import Image from "next/image";
import { Star, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export function ProcessSection() {
  const steps = [
    {
      num: "01",
      title: "Consultation",
      desc: "We listen, understand your goals, and assess your project needs.",
      img: "/home/7H4waNan9MZkDfcZqSBXMqTCTY.webp",
      alt: "Consultation",
    },
    {
      num: "02",
      title: "Planning & Estimate",
      desc: "We create a detailed plan and transparent estimate with no surprises.",
      img: "/home/GKLn3u4gkhyDTonuQzGpMP0QAY.webp",
      alt: "Planning & Estimate",
    },
    {
      num: "03",
      title: "Build & Manage",
      desc: "Our team builds with care while we manage every detail, safety standard, and keep you updated regularly.",
      img: "/home/qTMfqkRthxWjRBqqP0A3mC1IXg.webp",
      alt: "Build & Manage",
    },
    {
      num: "04",
      title: "Final Walkthrough",
      desc: "We review every joint, fitting, and handover item together to ensure your complete satisfaction.",
      img: "/home/2A7SI6YLmu8H4KjoW07R9xn1FH8.webp",
      alt: "Final Walkthrough",
    },
  ];

  const avatars = [
    "/home/jz0nn6blo9C1kYs0h5uBwk5w2o.webp",
    "/home/3132u5ED3B8BTeHA7jhd3hof50.webp",
    "/home/OvpeqVpfNycOZM27sbpVcHPQB40.webp",
  ];

  return (
    <section id="process" className="bg-white py-20 sm:py-28 lg:py-32 relative">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-start">
          {/* Left Column (Sticky on Desktop) */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-5 lg:sticky lg:top-24 xl:top-28"
          >
            {/* Main Heading - Strictly 1 line */}
            <h2 className="text-xl min-[390px]:text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-950 leading-tight whitespace-nowrap mb-2.5 sm:mb-4">
              Our Work Process
            </h2>

            {/* Subtitle Description - Strictly 2 lines */}
            <p className="text-xs sm:text-base text-neutral-600 leading-relaxed max-w-md mb-6 sm:mb-8">
              We streamline every project through a transparent, structured workflow — ensuring complete alignment, safety, and timely completion.
            </p>

            {/* Orange Licensed Card */}
            <motion.div
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className="rounded-3xl bg-[#FA551E] text-white p-5 sm:p-7 shadow-xl shadow-orange-500/15 cursor-default"
            >
              {/* Inner Top Pill */}
              <div className="rounded-2xl bg-black/12 p-3 sm:p-3.5 flex items-center gap-3 sm:gap-3.5">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl border border-white/40 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-white stroke-[2.2]" />
                </div>
                <div className="flex flex-col gap-0.5 sm:gap-1">
                  <span className="text-[10px] sm:text-[11px] font-bold tracking-wider text-white uppercase leading-none">
                    LICENSED
                  </span>
                  <div className="flex items-center gap-1 text-white">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-white text-white" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Headline & Subtitle */}
              <h3 className="mt-4 sm:mt-5 text-lg sm:text-2xl font-bold tracking-tight text-white leading-tight">
                5-Star Licensed Service
              </h3>
              <p className="mt-1 sm:mt-1.5 text-xs sm:text-sm text-white/90 font-normal leading-relaxed">
                Proven quality. Trusted by thousands.
              </p>

              {/* Avatar Cluster & Happy Customers */}
              <div className="mt-5 sm:mt-6 flex items-center gap-3 sm:gap-3.5">
                <div className="flex -space-x-2.5 items-center">
                  {avatars.map((av, i) => (
                    <div
                      key={i}
                      className="relative h-8 w-8 sm:h-10 sm:w-10 rounded-full border-2 border-white overflow-hidden shrink-0 shadow-sm"
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
                        loading="lazy"
                        sizes="40px"
                        className="object-cover"
                        style={{ borderRadius: "9999px" }}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2 sm:px-2.5 py-0.5 rounded-full bg-black/15 text-white font-bold text-[11px] sm:text-xs">
                    2K+
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-white">
                    Happy Customers
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column (Steps with Vertical Line & Scroll Reveal) */}
          <div className="lg:col-span-7">
            <div className="space-y-2 sm:space-y-4">
              {steps.map((st, i) => (
                <motion.div
                  key={st.num}
                  initial={{ opacity: 0, y: 36 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.55, delay: i * 0.08, ease: "easeOut" }}
                  className="flex items-start gap-4 sm:gap-7 lg:gap-9 group"
                >
                  {/* Left: Number + Vertical Line directly underneath */}
                  <div className="flex flex-col items-center shrink-0 w-9 sm:w-14 lg:w-16 self-stretch">
                    <span className="text-2xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 group-hover:text-[#FA551E] transition-colors tracking-tight leading-none block select-none">
                      {st.num}
                    </span>
                    <div className="w-[1px] bg-neutral-200 group-hover:bg-[#FA551E]/40 transition-colors flex-1 my-2.5 sm:my-4" />
                  </div>

                  {/* Right: Step Content */}
                  <div className="flex-1 min-w-0 pb-8 sm:pb-14 lg:pb-18">
                    <h3 className="text-lg sm:text-2xl lg:text-3xl font-bold text-neutral-900 tracking-tight group-hover:text-[#FA551E] transition-colors">
                      {st.title}
                    </h3>

                    <p className="mt-1.5 sm:mt-2 text-xs sm:text-base text-neutral-600 leading-relaxed max-w-lg">
                      {st.desc}
                    </p>

                    <div className="mt-4 sm:mt-6 relative w-full h-[200px] sm:h-[300px] md:h-[380px] rounded-2xl sm:rounded-3xl overflow-hidden bg-neutral-100 shadow-sm border border-black/5">
                      <Image
                        src={st.img}
                        alt={st.alt}
                        fill
                        loading="lazy"
                        className="object-cover group-hover:scale-104 transition-transform duration-700 ease-out"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
