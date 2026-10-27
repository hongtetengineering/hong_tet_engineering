import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { getBreadcrumbSchema } from "@/lib/schema";
import { ProjectsClientView } from "./ProjectsClientView";

export const metadata: Metadata = {
  title: "Engineering Projects & Case Studies Singapore | Steel, Roofing & Railings",
  description:
    "Explore completed structural steel, industrial roofing, stainless-steel railings, architectural glass, and renovation case studies across Singapore. Call +65 9898 9760.",
  alternates: {
    canonical: `${siteConfig.url}/projects`,
  },
  openGraph: {
    title: "Engineering Projects & Case Studies | HONG TET ENGINEERING (S) PTE. LTD.",
    description:
      "Proven workmanship and delivered case studies across industrial warehouses, logistics hubs, and commercial buildings in Singapore.",
    url: `${siteConfig.url}/projects`,
    images: [
      {
        url: siteConfig.assets.ogImage,
        width: 1200,
        height: 630,
        alt: "Hong Tet Engineering Project Portfolio",
      },
    ],
  },
  keywords: [
    "Hong Tet Engineering Projects",
    "Singapore Structural Steel Projects",
    "Tuas Industrial Steel Erection",
    "Roofing Case Studies Singapore",
    "Stainless Steel Railings Singapore",
    "Commercial Renovation Singapore",
  ],
};

export default function ProjectsPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Projects", url: "/projects" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ProjectsClientView />
    </>
  );
}
