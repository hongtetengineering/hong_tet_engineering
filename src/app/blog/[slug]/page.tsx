import { Suspense } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  Calendar,
  Clock,
  ArrowLeft,
  Phone,
  MessageSquare,
  MapPin,
} from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { siteConfig } from "@/lib/site-config";
import { getArticleSchema, getBreadcrumbSchema } from "@/lib/schema";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MarqueeStrip } from "@/components/MarqueeStrip";

interface PostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Article Not Found | HONG TET ENGINEERING (S) PTE. LTD.",
    };
  }

  const postUrl = `${siteConfig.url}/blog/${slug}`;
  const postImage = post.image.startsWith("http")
    ? post.image
    : `${siteConfig.url}${post.image}`;

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: postUrl,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: postUrl,
      images: [
        {
          url: postImage,
          alt: post.title,
        },
      ],
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [postImage],
    },
  };
}

import type { ComponentPropsWithoutRef } from "react";

// Custom styled MDX components adhering strictly to design system tokens
// Notice: MDX top header is rendered as H2 to guarantee a single semantic H1 on the page (matching the hero post title)
const mdxComponents = {
  h1: (props: ComponentPropsWithoutRef<"h1">) => (
    <h2
      className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-neutral-900 tracking-tight leading-tight mt-10 mb-5 border-b border-neutral-200/80 pb-3"
      {...props}
    />
  ),
  h2: (props: ComponentPropsWithoutRef<"h2">) => (
    <h2
      className="text-xl sm:text-2xl font-bold text-neutral-900 tracking-tight leading-snug border-b border-neutral-200/80 pb-2 mt-9 mb-4 flex items-center gap-2"
      {...props}
    />
  ),
  h3: (props: ComponentPropsWithoutRef<"h3">) => (
    <h3
      className="text-lg sm:text-xl font-bold text-neutral-900 tracking-tight mt-7 mb-3"
      {...props}
    />
  ),
  p: (props: ComponentPropsWithoutRef<"p">) => (
    <p
      className="text-sm sm:text-base text-neutral-700 leading-relaxed my-4"
      {...props}
    />
  ),
  ul: (props: ComponentPropsWithoutRef<"ul">) => (
    <ul
      className="list-disc pl-6 my-4 space-y-2 text-sm sm:text-base text-neutral-700"
      {...props}
    />
  ),
  ol: (props: ComponentPropsWithoutRef<"ol">) => (
    <ol
      className="list-decimal pl-6 my-4 space-y-2 text-sm sm:text-base text-neutral-700"
      {...props}
    />
  ),
  li: (props: ComponentPropsWithoutRef<"li">) => (
    <li className="leading-relaxed" {...props} />
  ),
  blockquote: (props: ComponentPropsWithoutRef<"blockquote">) => (
    <blockquote
      className="p-4 sm:p-5 my-6 rounded-2xl bg-neutral-50 border-l-4 border-[#FA551E] text-neutral-800 italic text-sm sm:text-base shadow-2xs"
      {...props}
    />
  ),
  hr: () => <hr className="my-8 border-neutral-200" />,
  a: (props: ComponentPropsWithoutRef<"a">) => (
    <a
      className="text-[#FA551E] font-semibold underline underline-offset-4 hover:text-[#e0430f] transition-colors"
      {...props}
    />
  ),
  strong: (props: ComponentPropsWithoutRef<"strong">) => (
    <strong className="font-bold text-neutral-900" {...props} />
  ),
  code: (props: ComponentPropsWithoutRef<"code">) => (
    <code
      className="px-1.5 py-0.5 rounded-md bg-neutral-100 text-neutral-800 text-xs sm:text-sm font-mono border border-neutral-200"
      {...props}
    />
  ),
};

function BlogPostSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="relative w-full bg-[#FAF9F6] border-b border-black/[0.06] rounded-b-[40px] md:rounded-b-[56px] pt-8 sm:pt-14 pb-12 sm:pb-16">
        <div className="max-w-[960px] mx-auto px-4 sm:px-6">
          <div className="h-4 w-32 bg-neutral-200 rounded-full mb-6" />
          <div className="flex gap-3 mb-4">
            <div className="h-6 w-24 bg-neutral-200 rounded-full" />
            <div className="h-6 w-28 bg-neutral-200 rounded-full" />
          </div>
          <div className="h-10 sm:h-12 w-3/4 bg-neutral-300 rounded-2xl mb-4" />
          <div className="h-5 w-1/2 bg-neutral-200 rounded-lg" />
        </div>
      </div>
      <div className="max-w-[960px] mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <div className="h-[280px] sm:h-[440px] w-full bg-neutral-200/80 rounded-3xl mb-10" />
        <div className="space-y-4">
          <div className="h-7 w-2/5 bg-neutral-200 rounded-md mb-6" />
          <div className="h-4 w-full bg-neutral-200 rounded-md" />
          <div className="h-4 w-full bg-neutral-200 rounded-md" />
          <div className="h-4 w-4/5 bg-neutral-200 rounded-md" />
          <div className="h-4 w-3/5 bg-neutral-200 rounded-md" />
          <div className="h-7 w-1/3 bg-neutral-200 rounded-md mt-8 mb-4" />
          <div className="h-4 w-full bg-neutral-200 rounded-md" />
          <div className="h-4 w-5/6 bg-neutral-200 rounded-md" />
        </div>
      </div>
    </div>
  );
}

async function BlogPostDetail({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: post.title, url: `/blog/${slug}` },
  ]);

  const articleSchema = getArticleSchema({
    title: post.title,
    description: post.excerpt,
    slug,
    datePublished: post.date,
    image: post.image,
    author: post.author,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* =========================================================================
          1. POST HEADER (Clean & elegant blueprint style)
          ========================================================================= */}
      <section className="relative w-full max-w-full overflow-hidden">
        <div className="relative w-full bg-[#FAF9F6] border-b border-black/[0.06] rounded-b-[40px] md:rounded-b-[56px] overflow-hidden pt-8 sm:pt-14 pb-12 sm:pb-16">
          {/* Blueprint Background */}
          <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0">
            <Image
              src="/home/105zO15MKPqahxW0hkKzQ2UbeU.png"
              alt="Architectural Blueprint Drawing"
              fill
              priority
              className="object-cover object-center opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#FAF9F6]/40 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Warm glow */}
          <div
            className="absolute inset-x-0 bottom-0 h-[65%] pointer-events-none z-1"
            style={{
              background:
                "linear-gradient(to top, rgba(255, 178, 115, 0.35) 0%, rgba(255, 208, 155, 0.20) 40%, transparent 100%)",
            }}
          />

          <div className="relative z-10 max-w-[960px] mx-auto px-4 sm:px-6">
            {/* Back to Blog Button */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-xs font-bold text-neutral-600 hover:text-[#FA551E] transition-colors mb-6 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Back to All Articles</span>
            </Link>

            {/* Article Metadata */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="flex items-center gap-1.5 text-xs font-semibold text-neutral-600">
                <Calendar className="w-3.5 h-3.5 text-[#FA551E]" />
                <span>{post.date}</span>
              </span>
              <span className="text-neutral-400">•</span>
              <span className="flex items-center gap-1.5 text-xs font-semibold text-neutral-600">
                <Clock className="w-3.5 h-3.5 text-neutral-400" />
                <span>{post.readTime}</span>
              </span>
            </div>

            {/* Title */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-neutral-900 leading-[1.12]">
              {post.title}
            </h1>

            {/* Excerpt */}
            <p className="mt-4 text-xs sm:text-base text-neutral-600 leading-relaxed">
              {post.excerpt}
            </p>

            {/* Author Row */}
            <div className="mt-6 pt-5 border-t border-neutral-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-semibold text-neutral-700">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FA551E]" />
                <span>By {post.author}</span>
              </div>
              <span className="text-neutral-500">Singapore Engineering Desk</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. COVER IMAGE & MDX ARTICLE BODY
          ========================================================================= */}
      <article className="py-10 sm:py-16 max-w-[960px] mx-auto px-4 sm:px-6">
        {/* Main Cover Image */}
        <div className="relative h-[200px] min-[390px]:h-[240px] sm:h-[400px] md:h-[480px] w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-neutral-200/90 shadow-sm bg-neutral-900 mb-8 sm:mb-14">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            sizes="(max-width: 960px) 100vw, 960px"
            className="object-cover"
          />
        </div>

        {/* Rendered MDX Content (Direct rendering without card box) */}
        <div className="text-neutral-800 leading-relaxed">
          <MDXRemote source={post.content} components={mdxComponents} />
        </div>

        {/* Author & Verification Section */}
        <div className="mt-14 pt-8 border-t border-neutral-200 flex flex-col sm:flex-row items-center gap-6">
          <div className="relative h-14 w-36 shrink-0">
            <Image
              src="/logo/full-logo-transparent.webp"
              alt="Hong Tet Engineering Logo"
              fill
              className="object-contain object-left"
            />
          </div>
          <div className="text-center sm:text-left">
            <h3 className="text-sm sm:text-base font-bold text-neutral-900">
              Published by HONG TET ENGINEERING (S) PTE. LTD.
            </h3>
            <p className="mt-1 text-xs text-neutral-600 leading-relaxed">
              Registered Singapore engineering company specializing in structural steel, industrial roofing, metal fittings, architectural glass, and BCA manpower solutions.
            </p>
            <div className="mt-3 flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs font-semibold text-neutral-700">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#FA551E]" />
                <span>217 Bukit Batok Street 21, Singapore</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#FA551E]" />
                <span>+65 9898 9760</span>
              </span>
            </div>
          </div>
        </div>
      </article>

      {/* =========================================================================
          3. DIRECT CONSULTATION CTA BANNER
          ========================================================================= */}
      <section className="pb-16 sm:pb-24 max-w-[960px] mx-auto px-4 sm:px-6">
        <div className="rounded-3xl bg-[#FA551E] text-white p-7 sm:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-lg">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-white/80 block mb-1">
              Have a Technical Project Question?
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Consult Our Engineering Specialists
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-white/90 leading-relaxed max-w-lg">
              Share your site drawings, load requirements, or fabrication specifications for an upfront, itemized proposal.
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
            <a
              href="https://wa.me/6598989760"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-neutral-900 hover:bg-black text-white text-xs sm:text-sm font-bold shadow-xs transition-colors text-center"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default function BlogPostPage({ params }: PostPageProps) {
  return (
    <div
      className="min-h-screen bg-[#FBF9F5] text-neutral-900 selection:bg-[#FA551E] selection:text-white"
      id="top"
    >
      {/* Navigation */}
      <Navbar />

      <main>
        <Suspense fallback={<BlogPostSkeleton />}>
          <BlogPostDetail params={params} />
        </Suspense>

        {/* Infinite Marquee Ticker */}
        <MarqueeStrip />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
