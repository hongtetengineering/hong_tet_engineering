import { siteConfig } from "./site-config";

// Generates the core Organization & LocalBusiness JSON-LD schema
export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "GeneralContractor"],
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    alternateName: siteConfig.shortName,
    url: siteConfig.url,
    logo: `${siteConfig.url}${siteConfig.assets.logo}`,
    image: `${siteConfig.url}${siteConfig.assets.ogImage}`,
    description: siteConfig.description,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.address.streetAddress,
      addressLocality: siteConfig.contact.address.addressLocality,
      postalCode: siteConfig.contact.address.postalCode,
      addressCountry: siteConfig.contact.address.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "1.3483",
      longitude: "103.7496",
    },
    areaServed: {
      "@type": "Country",
      name: "Singapore",
    },
    priceRange: "$$",
    knowsAbout: [
      "Structural Steel Fabrication",
      "I-Beam Installation",
      "Industrial Roofing",
      "Stainless Steel Railings",
      "Architectural Glass Installation",
      "Commercial Renovation",
      "BCA Skilled Manpower Supply",
    ],
  };
}

// Generates WebSite schema with search & primary context
export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    publisher: {
      "@id": `${siteConfig.url}/#organization`,
    },
    inLanguage: "en-SG",
  };
}

// Generates BreadcrumbList schema
export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${siteConfig.url}${item.url}`,
    })),
  };
}

// Generates Service schema for specific service offerings
export function getServiceSchema(service: {
  name: string;
  description: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    provider: {
      "@id": `${siteConfig.url}/#organization`,
    },
    areaServed: {
      "@type": "Country",
      name: "Singapore",
    },
    url: `${siteConfig.url}/services#${service.slug}`,
  };
}

// Generates FAQPage schema from questions and answers
export function getFaqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

// Generates Article / BlogPosting schema
export function getArticleSchema(article: {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  image?: string;
  author?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.description,
    url: `${siteConfig.url}/blog/${article.slug}`,
    datePublished: article.datePublished,
    dateModified: article.datePublished,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/blog/${article.slug}`,
    },
    image: article.image
      ? article.image.startsWith("http")
        ? article.image
        : `${siteConfig.url}${article.image}`
      : `${siteConfig.url}${siteConfig.assets.ogImage}`,
    author: {
      "@type": "Organization",
      name: article.author || siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      "@id": `${siteConfig.url}/#organization`,
    },
    inLanguage: "en-SG",
  };
}
