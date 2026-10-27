import type { Metadata } from "next";
import { getAllPosts, getAllCategories } from "@/lib/blog";
import { BlogClientView } from "./BlogClientView";

export const metadata: Metadata = {
  title: "Engineering Blog & Insights | HONG TET ENGINEERING (S) PTE. LTD.",
  description:
    "Practical engineering guides, BCA compliance standards, structural steel I-beams, industrial roofing, and fabrication insights from Hong Tet Engineering Singapore. Call +65 9898 9760.",
  keywords: [
    "Hong Tet Engineering Blog",
    "Singapore Structural Steel Guide",
    "BCA Code Compliance Singapore",
    "Industrial Roofing Maintenance",
    "Stainless Steel Fabrication Singapore",
    "Metal Fabrication Insights",
  ],
};

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = getAllCategories();

  return <BlogClientView initialPosts={posts} categories={categories} />;
}
