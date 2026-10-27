import type { Metadata } from "next";
import { ProjectsClientView } from "./ProjectsClientView";

export const metadata: Metadata = {
  title: "Projects & Case Studies | HONG TET ENGINEERING (S) PTE. LTD.",
  description:
    "Explore completed structural steel, industrial roofing, stainless-steel railings, architectural glass, and renovation case studies across Singapore. Call +65 9898 9760.",
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
  return <ProjectsClientView />;
}
