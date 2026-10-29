import { siteConfig } from "@/lib/site-config";
import { getAllPosts } from "@/lib/blog";

export const dynamic = "force-static";

export async function GET() {
  const baseUrl = siteConfig.url;
  const posts = getAllPosts();

  const blogLinks = posts
    .map(
      (p) =>
        `- [${p.title}](${baseUrl}/blog/${p.slug}): ${p.excerpt}`
    )
    .join("\n");

  const content = `# HONG TET ENGINEERING (S) PTE. LTD.

> HONG TET ENGINEERING (S) PTE. LTD. is a Singapore-registered engineering and construction company specializing in structural steel fabrication, Universal I-beam installation, industrial roofing, architectural stainless-steel works, commercial glass installations, spatial renovation, and BCA-compliant skilled manpower supply.

## Business Entity & Official Information
- Legal Name: ${siteConfig.legalName}
- Operating Market: Singapore
- Registered Office: ${siteConfig.contact.address.streetAddress}, Singapore ${siteConfig.contact.address.postalCode}
- Telephone: ${siteConfig.contact.phone} (${siteConfig.contact.phoneTel})
- WhatsApp: ${siteConfig.contact.whatsapp}
- Email: ${siteConfig.contact.email} (${siteConfig.contact.emailMailto})
- Official Website: ${baseUrl}

## Core Capabilities & Services
- [Metal Structure Fabrication & I-Beams](${baseUrl}/services#metal-structures): Complete fabrication and erection of structural steel frameworks, Universal I-beam (UB/UC) framing, warehouse supports, industrial mezzanines, and crane rigging adhering to Singapore BCA codes.
- [Roofing & Shelter Solutions](${baseUrl}/services#roofing-shelters): Weatherproof industrial roofing and canopy installations built for tropical durability using corrugated zinc sheets, UV-protected polycarbonate skylights, and clay roof tiles.
- [Metal & Stainless-Steel Works](${baseUrl}/services#metal-stainless): Precision fabrication of Grade 304 and marine-grade 316 stainless-steel railings, automated sliding main gates, safety gratings, trench covers, and straight/spiral industrial staircases.
- [Architectural Glass Installation](${baseUrl}/services#architectural-glass): Modern architectural glass solutions including tempered frameless glass swing/sliding doors, structural balustrades with recessed base shoe channels, and acoustic office partitions.
- [Renovation & Protective Painting](${baseUrl}/services#renovation-painting): End-to-end commercial fit-outs, factory alteration works, fire-rated drywalls, exterior weather-resistant facade repainting, and protective anti-corrosion epoxy coatings.
- [Skilled Manpower Supply](${baseUrl}/services#manpower-supply): Certified, BCA-compliant engineering workforce including structural welders (3G/4G/6G), steel fitters, lifting riggers, and site technicians deployed on demand.

## Primary Website Pages
- [Homepage](${baseUrl}/): Company introduction, engineering service cards, 4-step delivery process, project portfolio, client reviews, Singapore service area map, FAQs, and quote request form.
- [About Us](${baseUrl}/about): Heritage, precision engineering principles, safety compliance record, Singapore building code adherence, and Bukit Batok operations.
- [Services Overview](${baseUrl}/services): Comprehensive specifications for all 6 disciplines, materials used (Universal Beams, Grade 316 SS, Zinc, Tempered Glass), and project scope checklists.
- [Projects & Case Studies](${baseUrl}/projects): Completed case studies across Tuas Industrial, Woodlands Logistics, Bukit Batok, and Jurong East with schedules and deliverables.
- [Engineering Blog](${baseUrl}/blog): Technical guides on structural steel framing, tropical roofing weatherproofing, and BCA safety standards.
- [Contact Us](${baseUrl}/contact): Quotation request form, drawing upload review process, direct WhatsApp access, and office map.

## Technical Guides & BCA Standards
${blogLinks}

## Full Machine-Readable Documentation
- [Complete Context & Full Text](${baseUrl}/llms-full.txt): Comprehensive plain-text documentation of the entire website, including detailed service scopes, materials, project case studies, and complete technical articles for LLMs.
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400, stale-while-revalidate=86400",
    },
  });
}
