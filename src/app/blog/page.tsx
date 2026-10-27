import type { Metadata } from "next";
import { getAllPosts, getAllCategories } from "@/lib/blog";
import { siteConfig } from "@/lib/site-config";
import { getBreadcrumbSchema } from "@/lib/schema";
import { BlogClientView } from "./BlogClientView";

export const metadata: Metadata = {
  title: "Engineering Blog & Industry Guides Singapore | BCA & Fabrication Insights",
  description:
    "Practical engineering guides, BCA compliance standards, structural steel I-beams, industrial roofing, and fabrication insights from Hong Tet Engineering Singapore. Call +65 9898 9760.",
  alternates: {
    canonical: `${siteConfig.url}/blog`,
  },
  openGraph: {
    title: "Engineering Blog & Guides | HONG TET ENGINEERING (S) PTE. LTD.",
    description:
      "Technical guidance on structural steel I-beams, BCA compliance codes, industrial roofing, and safety standards in Singapore.",
    url: `${siteConfig.url}/blog`,
    images: [
      {
        url: siteConfig.assets.ogImage,
        width: 1200,
        height: 630,
        alt: "Hong Tet Engineering Guides and Articles",
      },
    ],
  },
  keywords: [
    "Hong Tet Engineering Blog",
    "Singapore Structural Steel Guide",
    "BCA Code Compliance Singapore",
    "Industrial Roofing Maintenance",
    "Stainless Steel Fabrication Singapore",
    "Metal Fabrication Insights Singapore",
  ],
};

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = getAllCategories();
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <BlogClientView initialPosts={posts} categories={categories} />
    </>
  );
}
