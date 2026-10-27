import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { getBreadcrumbSchema } from "@/lib/schema";
import { ContactClientView } from "./ContactClientView";

export const metadata: Metadata = {
  title: "Contact Engineering Team Singapore | Quotation & Consultation",
  description:
    "Contact Hong Tet Engineering (S) Pte. Ltd. Singapore. Phone: +65 9898 9760, Email: renumohal1995@gmail.com, Office: 217 Bukit Batok Street 21, Singapore 650217.",
  alternates: {
    canonical: `${siteConfig.url}/contact`,
  },
  openGraph: {
    title: "Contact Hong Tet Engineering | Singapore Quotation & Consultation",
    description:
      "Connect with our Singapore engineering team for fast project consultations, site drawing reviews, and quotation proposals.",
    url: `${siteConfig.url}/contact`,
    images: [
      {
        url: siteConfig.assets.ogImage,
        width: 1200,
        height: 630,
        alt: "Contact Hong Tet Engineering Singapore",
      },
    ],
  },
  keywords: [
    "Contact Hong Tet Engineering",
    "Engineering Contractor Bukit Batok",
    "Singapore Metal Fabrication Quote",
    "Roofing Contractor Contact Singapore",
    "Structural Steel Consultation Singapore",
  ],
};

export default function ContactPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Contact", url: "/contact" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ContactClientView />
    </>
  );
}
