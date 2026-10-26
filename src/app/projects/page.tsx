import { UnderDevelopment } from "@/components/UnderDevelopment";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | HONG TET ENGINEERING (S) PTE. LTD.",
  description:
    "Explore our completed engineering case studies across Singapore: Tuas Industrial, Woodlands Logistics, Bukit Batok, and Jurong East.",
};

export default function ProjectsPage() {
  return (
    <UnderDevelopment
      title="Featured Projects"
      subtitle="A complete portfolio of completed structural steel erections, industrial roofing, and architectural installations across Singapore is currently being curated."
    />
  );
}
