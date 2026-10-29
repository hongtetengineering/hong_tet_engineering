// Centralized Site & SEO Configuration for HONG TET ENGINEERING (S) PTE. LTD.
// Strictly adheres to official company details and Singapore market requirements.

export const siteConfig = {
  name: "HONG TET ENGINEERING (S) PTE. LTD.",
  shortName: "Hong Tet Engineering",
  legalName: "HONG TET ENGINEERING (S) PTE. LTD.",
  description:
    "Reliable structural steel fabrication, I-beam installation, industrial roofing, stainless-steel railings, architectural glass, commercial renovation, and BCA skilled manpower supply in Singapore.",
  
  // Production origin - configurable via environment variable with verified Vercel production fallback
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://hongtetengineering.vercel.app",

  // Official contact information (STRICT - matching AGENTS.md)
  contact: {
    phone: "+65 9898 9760",
    phoneTel: "tel:+6598989760",
    whatsapp: "https://wa.me/6598989760",
    email: "renumohal1995@gmail.com",
    emailMailto: "mailto:renumohal1995@gmail.com",
    address: {
      streetAddress: "217 Bukit Batok Street 21, #04-371",
      addressLocality: "Singapore",
      postalCode: "650217",
      addressCountry: "SG",
    },
  },

  // Brand assets
  assets: {
    logo: "/logo/full-logo-transparent.webp",
    ogImage: "/home/contact-engineering-team.webp",
    blueprintBg: "/home/105zO15MKPqahxW0hkKzQ2UbeU.webp",
  },

  // Service specialties for structured entities
  services: [
    {
      name: "Metal Structure Fabrication & I-Beams",
      slug: "metal-structures",
      description:
        "Structural steel fabrication, Universal I-beam installation, industrial warehouse framing, and load-bearing columns adhering to Singapore BCA standards.",
    },
    {
      name: "Roofing & Shelter Solutions",
      slug: "roofing-shelters",
      description:
        "Tropical weatherproof industrial roofing, corrugated zinc sheets, multi-wall polycarbonate skylights, and canopy installations in Singapore.",
    },
    {
      name: "Metal & Stainless-Steel Works",
      slug: "metal-stainless",
      description:
        "Grade 304 and 316 marine stainless-steel railings, safety barriers, heavy-duty industrial gates, gratings, and steel staircases.",
    },
    {
      name: "Architectural Glass Installation",
      slug: "architectural-glass",
      description:
        "Tempered frameless glass swing doors, architectural balustrades, acoustic partitions, and commercial glass facades in Singapore.",
    },
    {
      name: "Renovation & Protective Painting",
      slug: "renovation-painting",
      description:
        "Commercial and landed property alterations, spatial fit-outs, fire-rated drywalls, and protective industrial anti-rust epoxy coatings.",
    },
    {
      name: "Skilled Manpower Supply",
      slug: "manpower-supply",
      description:
        "BCA-compliant engineering workforce including certified 3G/4G/6G structural welders, steel fabricators, lifting riggers, and site technicians.",
    },
  ],
};
