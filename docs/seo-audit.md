# SEO Audit Report: HONG TET ENGINEERING (S) PTE. LTD.
**Technical, On-Page, Local SEO, and AI Search Optimization Baseline & Implementation Audit**

---

## 1. Executive Summary

- **Company Name:** HONG TET ENGINEERING (S) PTE. LTD.
- **Operating Market:** Singapore (HQ: 217 Bukit Batok Street 21, #04-371, Singapore 650217)
- **Primary Offerings:** Structural steel fabrication, Universal I-beam installation, industrial roofing and shelter solutions, stainless-steel railings and gates, architectural glass installation, commercial and spatial renovation, and BCA-compliant skilled manpower supply.
- **Framework & Architecture:** Next.js 16.4.3 (App Router), React 19.3.0, TypeScript, Tailwind CSS v4 with Turbopack, and Lenis Smooth Scroll.
- **Production Origin:** `https://hongtetengineering.vercel.app` (verified on Vercel deployment infrastructure, dynamically configurable via `NEXT_PUBLIC_SITE_URL`).
- **Audit Date:** October 27, 2026.

This comprehensive audit documents the baseline technical and structural state of the website prior to optimization, the defects identified, the architectural fixes applied directly in code, and the verified outcomes.

---

## 2. Baseline Audit Findings & Defect Matrix

Prior to implementation, the repository was thoroughly audited across all routes, global layouts, metadata exports, and static build outputs.

| Category | Prior Baseline State | Severity | Resolution / Fix Completed |
| :--- | :--- | :--- | :--- |
| **Robots Directives** | Missing `robots.ts` and `robots.txt`. Crawlers had no explicit crawling guide. | **Critical** | Implemented `src/app/robots.ts` allowing root traversal, disallowing `/api/`, and linking to production sitemap. |
| **XML Sitemap** | Missing `sitemap.ts` and `sitemap.xml`. Search engines had no crawl discovery index. | **Critical** | Created dynamic `src/app/sitemap.ts` covering all static marketing routes and dynamic MDX blog posts with genuine lastmod timestamps. |
| **Next.js MetadataBase** | `metadataBase` was missing, producing console warnings during build and falling back to `http://localhost:3000`. | **Critical** | Set `metadataBase: new URL(siteConfig.url)` in `src/app/layout.tsx`. |
| **Canonical URLs** | Canonical declarations (`alternates: { canonical: ... }`) were absent across all pages, risking duplicate indexing. | **Critical** | Implemented explicit absolute canonical URLs across every public route (`/`, `/about`, `/services`, `/projects`, `/blog`, `/blog/[slug]`, `/contact`). |
| **Structured Data (JSON-LD)** | Zero Schema.org structured data was present. | **High** | Injected Schema.org `LocalBusiness` / `GeneralContractor`, `WebSite`, `BreadcrumbList`, `Service`, `FAQPage`, and `BlogPosting` schemas. |
| **Open Graph & Twitter** | Root layout had minimal OG tags with no locale, type, or twitter cards. Interior pages had incomplete social metadata. | **High** | Added complete Open Graph (`en_SG`, type, absolute image URLs, dimensions) and Twitter (`summary_large_image`) across all routes. |
| **Heading Hierarchy** | Dynamic blog post pages had two `<h1>` elements (one in header and one inside rendered MDX). | **High** | Mapped MDX `h1` components to styled `h2` elements, guaranteeing strictly one `<h1>` per page across the entire site. |
| **Internal Linking** | Homepage services section cards were non-clickable `<div>` elements; projects had no direct link to the `/projects` page. | **Medium** | Linked all 6 service cards directly to deep anchor targets (`/services#metal-structures`, etc.) and added `/projects` discovery CTA. |
| **Web App Manifest** | `public/site.webmanifest` had blank `"name": ""` and `"short_name": ""` fields. | **Medium** | Populated verified company name, short name, brand theme colors (`#FA551E`), and standalone display mode. |
| **Image SEO & Alt Text** | Several background and decorative images lacked descriptive alt tags or sizing. | **Low** | Added descriptive, localized alt attributes (e.g., Service Area Map Singapore) and verified LCP image priorities. |

---

## 3. Route Inventory & Indexability Verification

Every intended public route was inspected and confirmed statically rendered:

| Route | Render Type | HTTP Status | Canonical URL | Indexability Directives |
| :--- | :--- | :--- | :--- | :--- |
| `/` | Static (Pre-rendered) | `200 OK` | `https://hongtetengineering.vercel.app` | `index, follow` |
| `/services` | Static (Pre-rendered) | `200 OK` | `https://hongtetengineering.vercel.app/services` | `index, follow` |
| `/about` | Static (Pre-rendered) | `200 OK` | `https://hongtetengineering.vercel.app/about` | `index, follow` |
| `/projects` | Static (Pre-rendered) | `200 OK` | `https://hongtetengineering.vercel.app/projects` | `index, follow` |
| `/blog` | Static (Pre-rendered) | `200 OK` | `https://hongtetengineering.vercel.app/blog` | `index, follow` |
| `/blog/structural-steel-i-beam-installation-singapore` | Static (Pre-rendered) | `200 OK` | `https://hongtetengineering.vercel.app/blog/structural-steel-i-beam-installation-singapore` | `index, follow` |
| `/blog/industrial-zinc-roofing-and-polycarbonate-skylights` | Static (Pre-rendered) | `200 OK` | `https://hongtetengineering.vercel.app/blog/industrial-zinc-roofing-and-polycarbonate-skylights` | `index, follow` |
| `/blog/bca-safety-standards-architectural-glass-and-railings` | Static (Pre-rendered) | `200 OK` | `https://hongtetengineering.vercel.app/blog/bca-safety-standards-architectural-glass-and-railings` | `index, follow` |
| `/contact` | Static (Pre-rendered) | `200 OK` | `https://hongtetengineering.vercel.app/contact` | `index, follow` |
| `/robots.txt` | Static Route | `200 OK` | N/A | Public crawler policy |
| `/sitemap.xml` | Static Route | `200 OK` | N/A | XML Sitemap protocol |

---

## 4. Business Identity & NAP Verification

The business information implemented conforms strictly to the verified records for HONG TET ENGINEERING (S) PTE. LTD.:

- **Legal Entity Name:** HONG TET ENGINEERING (S) PTE. LTD.
- **Registered Address:** 217 Bukit Batok Street 21, #04-371, Singapore 650217
- **Official Telephone:** `+65 9898 9760` (`tel:+6598989760`)
- **Official WhatsApp:** `https://wa.me/6598989760`
- **Official Email:** `renumohal1995@gmail.com` (`mailto:renumohal1995@gmail.com`)
- **Country / Market:** Singapore (`SG`)

*Verification check:* Source code was grepped for previous temporary contact details (`+65 8314 5705` and `sultamahmud2144@gmail.com`). Neither appears anywhere within the production `src/` codebase.

---

## 5. Technical Evidence & Build Verification

The Next.js 16 production build was executed locally with Turbopack and Cache Components enabled:

```bash
> hong_tet_engineering@0.1.0 build
> next build

▲ Next.js 16.4.3 (Turbopack)
- Cache Components enabled
- Partial Prefetching enabled
✓ Compiled successfully in 1704ms
✓ Finished TypeScript in 2.3s
✓ Generating static pages using 7 workers (15/15) in 566ms

Route (app)
┌ ○ /
├ ○ /_not-found
├ ○ /about
├ ○ /blog
├   /blog/[slug] (3 static posts generated)
├ ○ /contact
├ ○ /projects
├ ○ /robots.txt
├ ○ /services
└ ○ /sitemap.xml
```

All 15 routes pre-rendered with zero errors, zero type issues, and zero metadata warnings.

---

## 6. External Actions Required by Client / Property Owner

The following items cannot be completed autonomously via codebase modifications and require the domain owner's account credentials:

1. **Google Search Console Property Setup:**
   - Log into Google Search Console.
   - Add property `https://hongtetengineering.vercel.app` (or custom apex domain when connected).
   - Complete verification via DNS TXT record or HTML verification tag.
   - Submit sitemap URL: `https://hongtetengineering.vercel.app/sitemap.xml`.
2. **Google Business Profile (GBP) Verification:**
   - Claim or update the GBP profile for **HONG TET ENGINEERING (S) PTE. LTD.** at 217 Bukit Batok Street 21, #04-371, Singapore 650217.
   - Set primary category: *Steel Fabricator* or *Structural Engineer* / *General Contractor*.
   - Add official phone `+65 9898 9760` and website link.
3. **Bing Webmaster Tools:**
   - Import the verified Search Console property into Bing Webmaster Tools.
   - Verify that `sitemap.xml` is processed without fetch errors.
