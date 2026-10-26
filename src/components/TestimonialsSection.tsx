import Image from "next/image";
import { Star, ShieldCheck, MessageCircle, ArrowRight } from "lucide-react";

export function TestimonialsSection() {
  const reviews = [
    {
      stars: 5,
      text: "Solid planning, reliable communication, and solid fabrication execution from start to finish. They kept us stay on budget, avoid delays, and feel confident at every phase.",
      name: "Daniel Brooks",
      role: "@danielb • Facility Operations",
      img: "/home/2HldSo2Q3ueIP2cT2Piow24GVU.jpg",
    },
    {
      stars: 5,
      text: "Our industrial warehouse roofing was completed on time with great attention to detail and a clean, watertight result. Singapore site coordination was seamless.",
      name: "Sophia Reed",
      role: "@sophiareed • Project Director",
      img: "/home/LbTExLfAETmGD6yFKnZb9bKJrFU.jpg",
    },
    {
      stars: 5,
      text: "They turned our rough structural I-beam idea into a sturdy, finished space the whole operations team relies on every single day.",
      name: "Jake Mitchell",
      role: "@jakem • Engineering Lead",
      img: "/home/QT6h9g8oeIZVG8UA6TdP0VrfWxQ.jpg",
    },
    {
      stars: 5,
      text: "The crew handled our stainless steel railings and entrance gates with clear timelines, solid workmanship, and zero confusion.",
      name: "Ryan Carter",
      role: "@ryanc_builds • Main Contractor",
      img: "/home/qecwzS8HSAdDifIJYBF7ozvJEw.jpg",
    },
  ];

  return (
    <section id="testimonials" className="bg-[#08090C] text-white py-20 sm:py-28 relative">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Professional Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#FA551E] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FA551E]" />
            <span>Client Feedback</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Trusted by Singapore&apos;s Leading Contractors & Developers
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-neutral-400 leading-relaxed max-w-2xl mx-auto">
            Read verified feedback from site directors, operations leads, and project managers who rely on our engineering execution.
          </p>
        </div>

        {/* Subhead Bar */}
        <div className="mt-8 sm:mt-10 flex items-center justify-between text-xs sm:text-sm font-medium border-b border-white/[0.08] pb-4">
          <div className="flex items-center gap-2 text-neutral-400">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FA551E]" />
            <span>Verified Client Reviews</span>
          </div>

          <div className="flex items-center gap-2 text-neutral-400">
            <div className="relative w-4 h-4">
              <Image
                src="/home/1ZWSzdE6ssdj1Lj7QdMU6YG77ps.png"
                alt="Google Reviews"
                fill
                className="object-contain"
              />
            </div>
            <span className="font-mono text-xs text-neutral-400">
              [ 4.9/5 Based on 2,000+ reviews ]
            </span>
          </div>
        </div>

        {/* 4 Reviews Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {reviews.map((r, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-[#12141A] border border-white/[0.08] p-6 flex flex-col justify-between hover:border-white/20 transition-all"
            >
              <div>
                {/* Stars */}
                <div className="flex items-center gap-1 text-white mb-4">
                  {[...Array(r.stars)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-white text-white" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  &ldquo;{r.text}&rdquo;
                </p>
              </div>

              {/* Author */}
              <div className="mt-8 pt-4 border-t border-white/[0.08] flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden bg-neutral-800 shrink-0">
                  <Image
                    src={r.img}
                    alt={r.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="overflow-hidden">
                  <div className="text-xs font-bold text-white truncate">
                    {r.name}
                  </div>
                  <div className="text-[11px] text-neutral-500 truncate">
                    {r.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Bar: 100% Satisfaction & Clear Communication & Read More Reviews */}
        <div className="mt-10 rounded-2xl bg-[#12141A] border border-white/[0.08] p-4 sm:p-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-6 text-xs sm:text-sm">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#FA551E] flex items-center justify-center text-white shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <span className="font-bold text-white block">100% Satisfaction</span>
                <span className="text-[11px] text-neutral-400">Quality you can count on</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#FA551E] flex items-center justify-center text-white shrink-0">
                <MessageCircle className="w-4 h-4" />
              </div>
              <div>
                <span className="font-bold text-white block">Clear Communication</span>
                <span className="text-[11px] text-neutral-400">Always informed, always heard</span>
              </div>
            </div>
          </div>

          <a
            href="https://wa.me/6583145705?text=Hello%20Hong%20Tet%20Engineering,%20I%20would%20like%20to%20enquire%20about%20a%20project"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors"
          >
            <span>Read More Reviews</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
