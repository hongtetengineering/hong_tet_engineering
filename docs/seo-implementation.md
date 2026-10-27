# SEO Architecture & Implementation Documentation
## HONG TET ENGINEERING (S) PTE. LTD.

This technical guide documents the complete SEO architecture implemented across the website, including Next.js 16 App Router metadata conventions, Schema.org structured data, canonical strategies, sitemap and crawler policies, and maintenance guidelines.

---

## 1. Single Source of Truth (`src/lib/site-config.ts`)

To prevent fragmented configuration and outdated company information, all business entity data, URLs, and communication channels are centralized in [site-config.ts](file:///Users/shakilahmedbillal/Desktop/Project/hong_tet_engineering/src/lib/site-config.ts).

### Configuration Options
```typescript
export const siteConfig = {
  name: "HONG TET ENGINEERING (S) PTE. LTD.",
  shortName: "Hong Tet Engineering",
  legalName: "HONG TET ENGINEERING (S) PTE. LTD.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://hongtetengineering.vercel.app",
  contact: {
    phone: "+65 9898 9760",
    phoneTel: "tel:+6598989760",
    whatsapp: "https://wa.me/6598989760",
    email: "renumohal1995@gmail.com",
    address: {
      streetAddress: "217 Bukit Batok Street 21, #04-371",
      addressLocality: "Singapore",
      postalCode: "650217",
      addressCountry: "SG",
    },
  },
  // ...
};
```

When a custom domain (e.g. `https://hongtet.com` or `https://hongtetengineering.com`) is mapped to the Vercel project, set `NEXT_PUBLIC_SITE_URL` in the Vercel dashboard or environment configuration. All canonical URLs, sitemaps, robots rules, Open Graph URLs, and JSON-LD entity IDs will automatically adapt.

---

## 2. Next.js App Router Metadata Conventions

### Root Layout (`src/app/layout.tsx`)
- **`metadataBase`:** Defined as `new URL(siteConfig.url)`. Ensures relative paths in social sharing images and canonical declarations resolve to absolute HTTPS URLs.
- **Title Template:** Configured as `%s | HONG TET ENGINEERING (S) PTE. LTD.`.
- **Default Title:** `HONG TET ENGINEERING (S) PTE. LTD. | Metal Fabrication & Roofing Singapore`.
- **Default Description:** Accurate summary of verified services.
- **Global Robots:** Set to `index: true, follow: true` with Googlebot parameters `max-image-preview: large`, `max-snippet: -1`, `max-video-preview: -1`.
- **OpenGraph & Twitter:** Configured with `en_SG` locale, `summary_large_image`, explicit image widths (1200x630), and company branding.

### Page-Specific Metadata
Every top-level page exports explicit metadata overriding defaults with search-intent-aligned titles, unique descriptions, and self-referencing absolute canonical URLs:
- `/` (Home): Targeted at Singapore engineering, structural steel, and roofing searches.
- `/services`: Targeted at industrial fabrication, Universal I-beam installation, canopy solutions, and BCA manpower.
- `/about`: Targeted at company background, Bukit Batok HQ, and engineering capabilities.
- `/projects`: Targeted at case studies across Tuas, Woodlands, and Jurong.
- `/blog`: Targeted at BCA codes, metal fabrication guides, and engineering standards.
- `/blog/[slug]`: Dynamically populated via `generateMetadata()` using frontmatter `title`, `excerpt`, `image`, and `date`.
- `/contact`: Targeted at quotations, site inspection bookings, and engineering consultations.

---

## 3. Canonical URL Strategy

Search engines penalize or split ranking signals across URL variations (trailing slashes, query parameters, protocol variations, or staging domains).

### Implementation Rules
1. **Absolute URLs:** All canonicals are fully qualified HTTPS strings.
2. **Standard Hostname:** Canonical URLs reference `https://hongtetengineering.vercel.app` (or the configured `NEXT_PUBLIC_SITE_URL`).
3. **No Trailing Slash:** Next.js default routing without trailing slash is mirrored in canonical declarations.
4. **Self-Referential:** Each indexable page declares its own absolute canonical destination:
   - Root: `https://hongtetengineering.vercel.app`
   - Services: `https://hongtetengineering.vercel.app/services`
   - About: `https://hongtetengineering.vercel.app/about`
   - Projects: `https://hongtetengineering.vercel.app/projects`
   - Blog: `https://hongtetengineering.vercel.app/blog`
   - Blog Posts: `https://hongtetengineering.vercel.app/blog/[slug]`
   - Contact: `https://hongtetengineering.vercel.app/contact`

---

## 4. Robots.txt and Crawler Directives (`src/app/robots.ts`)

Generated dynamically at build time via Next.js Metadata Route API.

```typescript
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
```

### Key Highlights
- Allows search and AI crawlers to index all public marketing pages and assets.
- Excludes private API endpoints (`/api/`).
- Directs search spiders directly to the production XML sitemap.

---

## 5. Dynamic XML Sitemap (`src/app/sitemap.ts`)

Generated dynamically at `/sitemap.xml` using the official Next.js App Router sitemap API.

### Inclusions
- Primary static routes (`/`, `/services`, `/projects`, `/about`, `/blog`, `/contact`) with appropriate priority weighting (1.0 to 0.7) and change frequencies.
- Dynamic MDX blog articles retrieved from `content/` with their authentic `date` frontmatter formatted as valid W3C ISO dates.

### Exclusions
- Internal APIs (`/api/`)
- Admin or draft posts
- Duplicate query parameters

---

## 6. Schema.org Structured Data Architecture (`src/lib/schema.ts`)

All structured data is generated in JSON-LD format and injected into page output:

### 1. `Organization` and `LocalBusiness` (GeneralContractor)
- **Render Location:** Injected globally in `src/app/layout.tsx`.
- **Entity ID:** `${siteConfig.url}/#organization`
- **Properties:**
  - `name`: HONG TET ENGINEERING (S) PTE. LTD.
  - `legalName`: HONG TET ENGINEERING (S) PTE. LTD.
  - `url`: `https://hongtetengineering.vercel.app`
  - `logo`: `https://hongtetengineering.vercel.app/logo/full-logo-transparent.webp`
  - `telephone`: `+65 9898 9760`
  - `email`: `renumohal1995@gmail.com`
  - `address`: 217 Bukit Batok Street 21, #04-371, Singapore 650217
  - `geo`: Latitude 1.3483, Longitude 103.7496 (Bukit Batok)
  - `areaServed`: Singapore

### 2. `WebSite` Schema
- **Entity ID:** `${siteConfig.url}/#website`
- **Properties:** Includes name, description, publisher relationship (`#organization`), and language `en-SG`.

### 3. `Service` Schemas
- **Render Location:** Injected on `/services`.
- **Schema Count:** 6 individual service entities:
  1. Metal Structure Fabrication & I-Beams (`/services#metal-structures`)
  2. Roofing & Shelter Solutions (`/services#roofing-shelters`)
  3. Metal & Stainless-Steel Works (`/services#metal-stainless`)
  4. Architectural Glass Installation (`/services#architectural-glass`)
  5. Renovation & Protective Painting (`/services#renovation-painting`)
  6. Skilled Manpower Supply (`/services#manpower-supply`)

### 4. `FAQPage` Schema
- **Render Location:** Injected on `/` (Homepage).
- **Entities:** 6 customer questions regarding consultation procedures, site inspections, fabrication scopes, timelines, variations, and BCA licensing.

### 5. `BreadcrumbList` Schema
- **Render Location:** Injected on all secondary pages (`/about`, `/services`, `/projects`, `/blog`, `/blog/[slug]`, `/contact`).
- **Hierarchy:** Accurately represents site breadcrumb paths (e.g. `Home` → `Blog` → `Article Title`).

### 6. `BlogPosting` / `Article` Schema
- **Render Location:** Injected dynamically on `/blog/[slug]`.
- **Properties:** Includes `headline`, `datePublished`, `dateModified`, `author` (Organization), `publisher`, `image`, and `inLanguage`.

---

## 7. Heading & Semantic Structure

- **Homepage:** Exactly one `<h1>`: `Built To Last <span className="sr-only"> — Structural Steel Fabrication & Engineering Services Singapore</span>` followed by semantic `<h2>` section headers.
- **Services:** Exactly one `<h1>`: `Engineering & Construction Services Built To Last.`
- **About:** Exactly one `<h1>`: `Practical Solutions. Professional Workmanship.`
- **Projects:** Exactly one `<h1>`: `Proven Workmanship. Completed Across Singapore.`
- **Blog:** Exactly one `<h1>`: `Engineering Knowledge. Practical Industry Insights.`
- **Blog Articles:** Exactly one `<h1>` in hero banner; MDX `#` headers map to `<h2>` with prominent styling to prevent duplicate `<h1>` hierarchy warnings.
- **Contact:** Exactly one `<h1>`: `Ready To Start Your Project? Contact Our Engineering Team.`

---

## 8. Ongoing Maintenance Guidelines

1. **Adding New Blog Articles:**
   - Create a `.mdx` file in `content/` with `title`, `date` (YYYY-MM-DD), `excerpt`, `category`, `author`, and `image`.
   - The sitemap (`src/app/sitemap.ts`) automatically discovers the new article and includes its genuine date.
   - The article schema and breadcrumbs are rendered automatically.
2. **Updating Phone or Contact Details:**
   - Update ONLY `src/lib/site-config.ts`. All footer, navbar, metadata, schema, and page contact components reference this single configuration.
3. **Deploying a Custom Apex Domain:**
   - Add the domain in the Vercel dashboard.
   - Update `NEXT_PUBLIC_SITE_URL` to `https://www.yourdomain.com` in environment variables.
   - Re-deploy to generate canonical URLs and sitemaps matching the apex domain.

---

## 9. AI Discovery & Machine-Readable Endpoints (`src/app/(llms)`)

To enable AI models, generative engines (ChatGPT, Gemini, Claude, Perplexity, Copilot, Cursor), and web agents to ingest and understand the site without parsing complex HTML, the standard `llms.txt` specification has been implemented under `src/app/(llms)`:

### 1. Curated Index: `/llms.txt` (`src/app/(llms)/llms.txt/route.ts`)
- Serves `text/plain; charset=utf-8` conforming to the [llmstxt.org](https://llmstxt.org/) specification.
- Details the verified entity, Singapore headquarters, official contact information, 6 core engineering capabilities, primary navigation links, technical blog articles, and a pointer to `/llms-full.txt`.

### 2. Comprehensive Context: `/llms-full.txt` (`src/app/(llms)/llms-full.txt/route.ts`)
- Serves `text/plain; charset=utf-8` containing complete, in-depth text documentation:
  - Full company profile and NAP data.
  - Detailed technical specifications for all 6 disciplines (materials, tolerances, BCA and WSH compliance).
  - 4-step project delivery process.
  - Delivered case study details across Tuas, Woodlands, Bukit Batok, and Jurong.
  - Complete FAQ repository.
  - Unabridged full markdown content of all published articles in `content/`.

### 3. HTML Discovery
- Injected `<link rel="alternate" type="text/markdown" href="/llms.txt" title="LLMs.txt" />` into `<head>` in `src/app/layout.tsx` so autonomous agents crawling HTML immediately discover the structured markdown knowledge base.

