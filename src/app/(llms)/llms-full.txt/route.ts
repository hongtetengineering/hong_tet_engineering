import { siteConfig } from "@/lib/site-config";
import { getAllPosts, getPostBySlug } from "@/lib/blog";

export const dynamic = "force-static";

export async function GET() {
  const baseUrl = siteConfig.url;
  const postsMeta = getAllPosts();

  // Load complete post bodies
  const fullArticles = postsMeta
    .map((meta) => {
      const full = getPostBySlug(meta.slug);
      return `### Article: ${meta.title}
- **Published Date:** ${meta.date}
- **Category:** ${meta.category}
- **Author:** ${meta.author}
- **Canonical URL:** ${baseUrl}/blog/${meta.slug}
- **Summary:** ${meta.excerpt}

#### Article Content:
${full?.content || meta.excerpt}
`;
    })
    .join("\n---\n\n");

  const fullContent = `# HONG TET ENGINEERING (S) PTE. LTD. — FULL TECHNICAL DOCUMENTATION

> Machine-readable knowledge base for AI models, search agents, and LLMs detailing the services, materials, compliance standards, case studies, and engineering practices of HONG TET ENGINEERING (S) PTE. LTD. in Singapore.

---

## 1. Company Identity & Verified Business Data

- **Official Company Name:** ${siteConfig.legalName}
- **Short Name:** ${siteConfig.shortName}
- **Country & Market:** Singapore
- **Registered Office:** ${siteConfig.contact.address.streetAddress}, Singapore ${siteConfig.contact.address.postalCode}
- **Official Telephone:** ${siteConfig.contact.phone} (${siteConfig.contact.phoneTel})
- **Official WhatsApp:** ${siteConfig.contact.whatsapp}
- **Official Email:** ${siteConfig.contact.email} (${siteConfig.contact.emailMailto})
- **Official Website:** ${baseUrl}
- **Business Category:** Engineering Services, Structural Steel Fabrication, Industrial Roofing, Metalworks, Architectural Glass Installation, Spatial Renovation, and BCA Skilled Manpower Supply.

---

## 2. Core Engineering Disciplines & Technical Specifications

### Discipline 01: Metal Structure Fabrication & I-Beams
- **Anchor URL:** ${baseUrl}/services#metal-structures
- **Overview:** Complete workshop pre-fabrication and on-site erection of heavy structural steel frameworks, industrial Universal I-beam (UB/UC) framing, warehouse mezzanine platforms, dynamic load supports, and structural columns.
- **Key Capabilities:**
  - Heavy structural steel I-beam band-saw cutting within ±1 mm tolerance, computerized drilling, and certified welding.
  - Warehouse framing, industrial mezzanines, and load-bearing column systems.
  - Custom structural steel brackets, base plates, connection gussets, and foundation anchoring brackets.
  - On-site crane lifting, rigging, and erection adhering strictly to Singapore Building and Construction Authority (BCA) codes and Workplace Safety and Health (WSH) guidelines.
- **Materials Deployed:**
  - Universal Beams (UB) and Universal Columns (UC) conforming to EN 10025 Grade S355JR.
  - Structural Hollow Sections: Square Hollow Sections (SHS) and Rectangular Hollow Sections (RHS).
  - High-tensile Grade 50 steel with accredited mill test certification.
  - Anti-corrosion protective finishes: Hot-dip galvanization and high-solids zinc-phosphate epoxy primers.

### Discipline 02: Roofing & Shelter Solutions
- **Anchor URL:** ${baseUrl}/services#roofing-shelters
- **Overview:** Engineered industrial roofing and architectural canopy installations built for long-term weatherproofing against Singapore's equatorial tropical climate, heavy monsoon downpours, intense UV exposure, and thermal expansion cycles.
- **Key Capabilities:**
  - Industrial corrugated zinc sheet roofing installation, re-roofing, and structural retrofitting.
  - UV-resistant multi-wall polycarbonate skylights and natural daylight covered linkways.
  - Clay roof tile replacement, waterproof underlayment membrane installation, and leak repair.
  - Architectural canopy fabrication using aluminum composite and honeycomb panels.
- **Materials Deployed:**
  - High-tensile corrugated zinc and aluminum-zinc coated steel sheets (Zincalume / Colorbond).
  - Multi-wall UV-treated polycarbonate panels (clear, opal, bronze).
  - Heavy-duty galvanized steel purlins, rafters, and stainless-steel fasteners with EPDM sealing washers.

### Discipline 03: Metal & Stainless-Steel Works
- **Anchor URL:** ${baseUrl}/services#metal-stainless
- **Overview:** Precision fabrication of architectural metal fittings and structural safety elements designed for durability, corrosion resistance, and refined finish.
- **Key Capabilities:**
  - Grade 304 and marine-grade 316 stainless-steel railings, balustrades, and handrails.
  - Heavy-duty industrial safety gratings, trench covers, and drain grates.
  - Automated sliding main gates, pedestrian swing gates, and security perimeter fencing.
  - Straight and spiral industrial fire escape staircases with non-slip treads.
- **Materials Deployed:**
  - Marine Grade 316 Stainless Steel (containing 2%–3% molybdenum for resistance against airborne salinity and tropical pitting).
  - Grade 304 Stainless Steel for interior handrails and dry applications.
  - Hot-dip galvanized mild steel and powder-coated architectural finishes.

### Discipline 04: Architectural Glass Installation
- **Anchor URL:** ${baseUrl}/services#architectural-glass
- **Overview:** Modern architectural glass installations combining spatial elegance with strict BCA impact and barrier safety compliance.
- **Key Capabilities:**
  - Tempered frameless glass swing doors and heavy-duty sliding entrance portals.
  - Structural glass balustrades with recessed base shoe aluminum channels.
  - Acoustic double-glazed windows and exterior curtain wall sections.
  - Commercial glass partitions and corporate conference room enclosures.
- **Materials Deployed:**
  - 10mm–19mm Tempered Safety Glass (monolithic and laminated safety glass).
  - Acoustic PVB/SentryGlas laminated glass.
  - Grade 316 stainless-steel spider brackets, patch fittings, and hydraulic floor springs.

### Discipline 05: Renovation & Protective Painting
- **Anchor URL:** ${baseUrl}/services#renovation-painting
- **Overview:** Comprehensive commercial, industrial, and landed property alterations, spatial fit-outs, and heavy-duty protective industrial painting.
- **Key Capabilities:**
  - Commercial office reinstatement, interior spatial alteration, and turnkey fit-outs.
  - BCA-compliant fire-rated drywall partitioning and acoustic ceiling installations.
  - Protective industrial anti-rust epoxy coatings applied to metal structures and machinery.
  - Exterior elastomeric weather-resistant facade repainting and waterproofing.
- **Materials Deployed:**
  - Heavy-duty anti-corrosion zinc-rich epoxy primers.
  - Weatherproof elastomeric exterior facade paints.
  - BCA-approved fire-rated drywall boards and galvanized steel stud framing.

### Discipline 06: Skilled Manpower Supply
- **Anchor URL:** ${baseUrl}/services#manpower-supply
- **Overview:** Certified, BCA-compliant construction and engineering workforce mobilized on-demand across Singapore industrial and construction sites.
- **Key Capabilities:**
  - Certified 3G, 4G, and 6G structural welders for high-precision site erection.
  - Skilled metal fabricators and steel fitters.
  - BCA-certified lifting riggers, signalmen, and lifting supervisors.
  - Flexible project-based or short-term site mobilization with full MOM WSH compliance.

---

## 3. Four-Step Project Delivery Process

1. **Phase 01: Consultation & Drawing Review**
   - The team reviews client drawings, architectural plans, elevation measurements, and loading requirements to understand scope, constraints, and project timelines.
2. **Phase 02: Planning & Transparent BOQ Estimate**
   - A detailed Bill of Quantities (BOQ), material specifications, and transparent quotation are prepared with zero hidden costs.
3. **Phase 03: Precision Build & Site Management**
   - Structural components are pre-fabricated in controlled factory workshops (±1 mm tolerances). On-site erection is coordinated with site safety supervisors under MOM WSH standards.
4. **Phase 04: Final Walkthrough & Handover**
   - Every joint, bolt connection, weld penetration, and fitting is inspected alongside the client to ensure complete satisfaction and BCA regulatory compliance.

---

## 4. Completed Projects & Case Studies

- **Project 01: Structural Steel Framing & I-Beams (Tuas Industrial, Singapore)**
  - Scope: Complete workshop cutting, Universal I-beam erection, and heavy warehouse framing delivered under strict BCA compliance.
  - Highlights: Universal I-Beams (UB/UC), Grade 50 high-tensile steel, full-penetration welding.
- **Project 02: Industrial Canopy & Zinc Roofing (Woodlands Logistics, Singapore)**
  - Scope: Weatherproof industrial roofing and canopy installation using corrugated zinc sheets, purlin framing, and skylights.
  - Highlights: Corrugated zinc roofing, UV polycarbonate skylights, galvanized steel purlins.
- **Project 03: Stainless Steel Railings & Heavy Gate (Bukit Batok, Singapore)**
  - Scope: Precision fabrication and installation of Grade 316 stainless-steel railings, heavy-duty industrial gates, and safety barriers.
  - Highlights: Marine Grade 316 stainless steel, automated sliding main gate, safety barrier railings.
- **Project 04: Architectural Glass Windows & Facade (Jurong East, Singapore)**
  - Scope: Commercial building glass facade, frameless tempered glass entrance portals, and acoustic meeting room partitions.
  - Highlights: Tempered safety glass, frameless glazing, acoustic partition systems.
- **Project 05: High-Rise Scaffolding & Structural Steel Works (Changi Aviation, Singapore)**
  - Scope: Erection of high-level structural framework, building facade supports, and certified scaffolding access systems.
  - Highlights: Structural steel framing, certified rigging crew, heavy site lifting.
- **Project 06: Commercial Spatial Alteration & Protective Coating (Kallang Industrial, Singapore)**
  - Scope: Interior spatial alteration, drywall partitioning, fire-rated ceiling integration, and protective interior painting.
  - Highlights: Commercial fit-out, fire-rated drywalls, anti-rust epoxy painting.

---

## 5. Frequently Asked Questions (FAQ)

### Q: How do I start a project with Hong Tet Engineering?
**A:** Simply call (+65 9898 9760), email (renumohal1995@gmail.com), or send a WhatsApp message (+65 9898 9760) with your project scope, location, and any drawings, measurements, or site photos. The engineering desk will review requirements and schedule an initial consultation.

### Q: Do you provide on-site inspections and estimates?
**A:** Yes. On-site inspections are arranged across Singapore to verify measurements and assess site conditions before preparing a transparent, itemized quotation with no hidden costs.

### Q: What type of engineering and fabrication work do you handle?
**A:** We specialize in structural metal fabrication, I-beam framing, roofing (zinc sheets, clay tiles, polycarbonate skylights, composite panels), stainless steel railings, gratings, main gates, glass doors, commercial renovation, painting, and skilled manpower supply.

### Q: How long will an engineering project take?
**A:** Timelines depend on the scale of fabrication and site preparation. Small repairs and fittings are typically completed within days, while large structural steel frameworks or commercial renovations are executed with structured milestone dates (average 4–6 weeks turnaround).

### Q: Can the scope or materials change later?
**A:** Yes. Practical site adjustments are common in engineering. We communicate openly with clients and confirm any revisions to drawings, materials, or schedules before proceeding.

### Q: Are your fabrication and installation crews licensed?
**A:** Yes. Skilled technicians, certified welders, and supervisors adhere strictly to Singapore Workplace Safety and Health (WSH) guidelines and BCA standards.

---

## 6. Service Mobilization Zones in Singapore

Hong Tet Engineering provides island-wide mobilization across all Singapore commercial and industrial zones:
- Jurong Industrial & Marine
- Tuas West & Port Area
- Woodlands & Senoko Industrial
- Bukit Batok (Headquarters)
- Tampines & Changi Aviation
- Ang Mo Kio & Yishun
- Clementi & West Coast
- Pioneer & Benoi
- Kranji & Sungei Kadut
- Central Business District (CBD) & Marina Bay

---

## 7. Complete Published Technical Articles & Guides

${fullArticles}
`;

  return new Response(fullContent, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400, stale-while-revalidate=86400",
    },
  });
}
