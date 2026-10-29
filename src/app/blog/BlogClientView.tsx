"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  Clock,
  ArrowRight,
  BookOpen,
  Search,
  Phone,
  Check,
  Building2,
  Sparkles,
} from "lucide-react";
import { BlogPostMeta } from "@/lib/blog";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MarqueeStrip } from "@/components/MarqueeStrip";

interface BlogClientViewProps {
  initialPosts: BlogPostMeta[];
  categories: string[];
}

export function BlogClientView({
  initialPosts,
  categories,
}: BlogClientViewProps) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = initialPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "all" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = initialPosts.find((p) => p.featured) || initialPosts[0];

  return (
    <div
      className="min-h-screen bg-[#FBF9F5] text-neutral-900 selection:bg-[#FA551E] selection:text-white"
      id="top"
    >
      {/* Navigation */}
      <Navbar />

      <main>
        {/* =========================================================================
            1. HERO SECTION (Blueprint style matching Home Page)
            ========================================================================= */}
        <section className="relative w-full max-w-full overflow-hidden">
          <div className="relative w-full bg-[#FAF9F6] border-b border-black/[0.06] rounded-b-[40px] md:rounded-b-[56px] overflow-hidden pt-10 sm:pt-16 pb-14 sm:pb-20">
            {/* Architectural Blueprint Background Image */}
            <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0">
              <Image
                src="/home/105zO15MKPqahxW0hkKzQ2UbeU.webp"
                alt="Architectural Blueprint Drawing"
                fill
                priority
                className="object-cover object-center opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#FAF9F6]/40 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Warm glow rising from bottom */}
            <div
              className="absolute inset-x-0 bottom-0 h-[65%] pointer-events-none z-1"
              style={{
                background:
                  "linear-gradient(to top, rgba(255, 178, 115, 0.40) 0%, rgba(255, 208, 155, 0.25) 40%, transparent 100%)",
              }}
            />

            <div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-6 text-center">
              {/* Main Heading */}
              <h1 className="text-3xl min-[380px]:text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-black tracking-tight text-neutral-900 leading-[1.05] max-w-5xl mx-auto">
                Engineering Knowledge. <br className="hidden sm:inline" />
                <span className="text-[#FA551E]">Practical Industry Insights.</span>
              </h1>

              {/* Subtitle */}
              <p className="mt-4 sm:mt-6 text-xs sm:text-base lg:text-lg text-neutral-600 leading-relaxed max-w-2xl mx-auto">
                Practical guides, BCA compliance standards, and fabrication insights published by Hong Tet Engineering (S) Pte. Ltd.
              </p>

              {/* Search Bar */}
              <div className="mt-8 max-w-md mx-auto relative">
                <div className="relative flex items-center">
                  <Search className="w-4 h-4 text-neutral-400 absolute left-4 pointer-events-none" />
                  <input
                    type="text"
                    placeholder="Search engineering articles or topics..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-11 pr-4 py-3 rounded-full bg-white/95 backdrop-blur-xs border border-neutral-300 text-xs sm:text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-[#FA551E] shadow-2xs transition-colors"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            2. FEATURED ARTICLE SPOTLIGHT
            ========================================================================= */}
        {featuredPost && selectedCategory === "all" && !searchQuery && (
          <section className="py-12 sm:py-16 max-w-[1240px] mx-auto px-4 sm:px-6">
            <div className="flex items-center gap-2 text-xs font-bold text-[#FA551E] uppercase tracking-wider mb-4">
              <span className="w-2 h-2 rounded-full bg-[#FA551E]" />
              <span>Featured Engineering Guide</span>
            </div>

            <div className="bg-white rounded-3xl border border-neutral-200/90 overflow-hidden shadow-xs hover:shadow-lg transition-all group">
              <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                {/* Photo Left */}
                <div className="lg:col-span-7 relative min-h-[260px] sm:min-h-[360px] lg:min-h-[420px] overflow-hidden bg-neutral-900">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    loading="lazy"
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className="object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-4 left-4 z-10">
                    <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/20 shadow-md">
                      {featuredPost.category}
                    </span>
                  </div>
                </div>

                {/* Details Right */}
                <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 text-xs font-semibold text-neutral-500 mb-3">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-[#FA551E]" />
                        <span>{featuredPost.date}</span>
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-neutral-400" />
                        <span>{featuredPost.readTime}</span>
                      </span>
                    </div>

                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-neutral-900 leading-tight mb-3 group-hover:text-[#FA551E] transition-colors">
                      <Link href={`/blog/${featuredPost.slug}`}>
                        {featuredPost.title}
                      </Link>
                    </h2>

                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-6">
                      {featuredPost.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-neutral-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5">
                    <span className="text-xs font-semibold text-neutral-500">
                      By {featuredPost.author}
                    </span>
                    <Link
                      href={`/blog/${featuredPost.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#FA551E] hover:underline underline-offset-4"
                    >
                      <span>Read Full Article</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* =========================================================================
            3. ALL ARTICLES WITH CATEGORY FILTERS
            ========================================================================= */}
        <section className="py-12 sm:py-16 max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 sm:mb-12">
            <div>
              <h2 className="text-xl sm:text-3xl font-bold tracking-tight text-neutral-900">
                Latest Publications
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-neutral-500">
                Showing {filteredPosts.length} article{filteredPosts.length === 1 ? "" : "s"}
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setSelectedCategory("all")}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === "all"
                    ? "bg-[#FA551E] text-white shadow-xs"
                    : "bg-white text-neutral-700 hover:bg-neutral-50 border border-neutral-200"
                }`}
              >
                All
              </button>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? "bg-[#FA551E] text-white shadow-xs"
                      : "bg-white text-neutral-700 hover:bg-neutral-50 border border-neutral-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredPosts.map((post) => (
              <div
                key={post.slug}
                className="bg-white rounded-3xl overflow-hidden border border-neutral-200/90 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Photo Container */}
                  <div className="relative h-[220px] w-full overflow-hidden bg-neutral-100">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute top-3.5 left-3.5 z-10">
                      <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/20 shadow-md">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 sm:p-6">
                    <div className="flex items-center gap-2.5 text-[11px] font-semibold text-neutral-500 mb-2.5">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-[#FA551E]" />
                        <span>{post.date}</span>
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-neutral-400" />
                        <span>{post.readTime}</span>
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-neutral-900 leading-snug mb-2 group-hover:text-[#FA551E] transition-colors line-clamp-2">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>

                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="px-5 sm:px-6 pb-5 pt-3 border-t border-neutral-100 flex items-center justify-between">
                  <span className="text-[11px] font-medium text-neutral-400">
                    By {post.author}
                  </span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#FA551E] hover:underline underline-offset-4"
                  >
                    <span>Read Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16 bg-white rounded-3xl border border-neutral-200/90 p-8">
              <BookOpen className="w-10 h-10 text-neutral-300 mx-auto mb-3" />
              <h3 className="text-base font-bold text-neutral-900">
                No matching articles found
              </h3>
              <p className="mt-1 text-xs text-neutral-500">
                Try searching with different keywords or clear your category filter.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("all");
                  setSearchQuery("");
                }}
                className="mt-4 px-5 py-2 rounded-full bg-[#FA551E] text-white text-xs font-bold shadow-xs hover:bg-[#e0430f] transition-all cursor-pointer"
              >
                Reset Filter
              </button>
            </div>
          )}
        </section>

        {/* =========================================================================
            4. CONSULTATION CTA BANNER (Strict Contact Rules)
            ========================================================================= */}
        <section className="py-16 sm:py-20 max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="rounded-3xl bg-[#FA551E] text-white p-7 sm:p-11 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-lg">
            <div className="max-w-xl">
              <span className="text-xs font-bold uppercase tracking-widest text-white/80 block mb-2">
                Need Engineering Assistance?
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Discuss Your Specific Technical Specifications
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-white/90 leading-relaxed">
                Connect directly with our Singapore engineering team. Share drawings, site requirements, or structural loads for an immediate consultation.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0 w-full md:w-auto">
              <a
                href="tel:+6598989760"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white text-[#FA551E] text-xs sm:text-sm font-bold shadow-xs hover:bg-neutral-50 transition-colors text-center"
              >
                <Phone className="w-4 h-4 fill-[#FA551E]" />
                <span>+65 9898 9760</span>
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-neutral-900 hover:bg-black text-white text-xs sm:text-sm font-bold shadow-xs transition-colors text-center"
              >
                <span>Request a Quote</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Infinite Marquee Ticker */}
        <MarqueeStrip />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
