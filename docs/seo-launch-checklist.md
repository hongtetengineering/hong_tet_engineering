# SEO Launch & Verification Checklist
## HONG TET ENGINEERING (S) PTE. LTD.

Use this operational checklist to verify all technical SEO, on-page optimization, local signals, and tracking configurations before and after launching to production.

---

## 1. Pre-Launch Technical Checklist (Codebase & Build)

- [x] **Next.js Version Compatibility:** Built and validated on Next.js 16.4.3 App Router.
- [x] **MetadataBase Configured:** Absolute base URL set in root layout (`https://hongtetengineering.vercel.app` or custom domain via `NEXT_PUBLIC_SITE_URL`).
- [x] **Robots.txt Output:** Dynamic endpoint `src/app/robots.ts` renders valid directives and points to `/sitemap.xml`.
- [x] **XML Sitemap Output:** Dynamic endpoint `src/app/sitemap.ts` includes all indexable routes (`/`, `/services`, `/projects`, `/about`, `/blog`, `/contact`, and all dynamic MDX blog posts).
- [x] **Canonical Tags:** Absolute self-referential canonical tags declared on every public route.
- [x] **Heading Hierarchy:** Strictly one `<h1>` per page across all routes. Blog MDX `#` mapped to `<h2>` to prevent duplicate `<h1>` errors.
- [x] **Structured Data (JSON-LD):**
  - [x] `Organization` & `LocalBusiness` / `GeneralContractor` schema in root layout.
  - [x] `WebSite` schema in root layout.
  - [x] `BreadcrumbList` schema on all interior pages.
  - [x] `Service` schema (6 distinct entities) on `/services`.
  - [x] `FAQPage` schema on homepage.
  - [x] `BlogPosting` schema on each dynamic blog post.
- [x] **Official NAP Consistency:**
  - [x] Name: `HONG TET ENGINEERING (S) PTE. LTD.`
  - [x] Phone: `+65 9898 9760` (`tel:+6598989760`)
  - [x] WhatsApp: `https://wa.me/6598989760`
  - [x] Email: `renumohal1995@gmail.com` (`mailto:renumohal1995@gmail.com`)
  - [x] Address: `217 Bukit Batok Street 21, #04-371, Singapore 650217`
- [x] **Web App Manifest:** `public/site.webmanifest` contains full entity name, short name, theme color `#FA551E`, and standalone configuration.
- [x] **Internal Linking:** Homepage service cards link directly to deep anchors on `/services`. Homepage project section links to `/projects`.
- [x] **Build Validation:** `next build` passes with zero type errors, zero metadata warnings, and pre-renders all 15 static routes.

---

## 2. Production Deployment Checklist (Vercel)

- [ ] **Custom Domain Binding:**
  - Add production domain (e.g., `hongtet.com` or `www.hongtetengineering.com`) in Vercel project domain settings.
  - Configure DNS A / CNAME records as instructed by Vercel.
  - Ensure SSL certificate is automatically issued and active.
- [ ] **Environment Variables:**
  - Set `NEXT_PUBLIC_SITE_URL` to `https://www.yourdomain.com` (if using custom domain).
  - Trigger a clean production build to ensure sitemaps and canonicals reflect the custom apex domain.
- [ ] **HTTP to HTTPS Redirection:** Verify that requests to `http://` automatically redirect to `https://` with status 308/301.
- [ ] **Apex / Subdomain Canonicalization:** Ensure either `domain.com` redirects to `www.domain.com` or vice versa so only one canonical version responds with HTTP 200.

---

## 3. Post-Launch Search Engine Verification (External Setup)

### Google Search Console (GSC)
- [ ] **Add Property:** Add domain property (DNS method recommended) or URL-prefix property in Google Search Console.
- [ ] **Submit Sitemap:** In GSC left navigation, navigate to **Sitemaps** → enter `sitemap.xml` → click **Submit**.
- [ ] **URL Inspection:** Test the homepage (`/`) and primary service page (`/services`) using the **URL Inspection** tool.
- [ ] **Request Indexing:** Click **Request Indexing** on the inspected URLs to queue immediate crawling.
- [ ] **Rich Results Test:** Run Google's [Rich Results Test](https://search.google.com/test/rich-results) on:
  - Homepage (`/`) → Verify `LocalBusiness`, `FAQPage`, and `WebSite`.
  - Services (`/services`) → Verify `BreadcrumbList` and `Service`.
  - Blog Post (`/blog/[slug]`) → Verify `BlogPosting` and `BreadcrumbList`.

### Bing Webmaster Tools
- [ ] **Add Site:** Import verified Google Search Console account into Bing Webmaster Tools.
- [ ] **Verify Sitemap:** Ensure `sitemap.xml` status shows *Success*.
- [ ] **IndexNow (Optional):** Submit updated URLs via Bing IndexNow API for instant indexing.

### Google Business Profile (GBP)
- [ ] **Claim / Create Profile:** HONG TET ENGINEERING (S) PTE. LTD.
- [ ] **Address:** 217 Bukit Batok Street 21, #04-371, Singapore 650217.
- [ ] **Phone:** +65 9898 9760.
- [ ] **Website URL:** Link directly to the canonical homepage.
- [ ] **Categories:** Primary: *Steel Fabricator* or *Structural Engineer*. Secondary: *Roofing Contractor*, *Renovation Contractor*.

---

## 4. Analytics & Event Measurement Checklist

- [ ] **Google Analytics 4 (GA4):**
  - Add measurement ID (`G-XXXXXXXXXX`) via Next.js Script or Google Tag Manager when client provides the ID.
  - Exclude internal IP addresses from reporting.
- [ ] **Conversion Tracking:**
  - Phone call click event (`tel:+6598989760`).
  - WhatsApp click event (`https://wa.me/6598989760`).
  - Email click event (`mailto:renumohal1995@gmail.com`).
  - Quote consultation form submission event.
- [ ] **Privacy / PDPA Compliance:** Ensure no personally identifiable information (PII) is transmitted in analytics event payloads.
