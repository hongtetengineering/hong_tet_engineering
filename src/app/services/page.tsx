import { UnderDevelopment } from "@/components/UnderDevelopment";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | HONG TET ENGINEERING (S) PTE. LTD.",
  description:
    "Comprehensive engineering and construction services in Singapore: structural steel I-beams, industrial roofing, metalworks, glass, and skilled manpower.",
};

export default function ServicesPage() {
  return (
    <UnderDevelopment
      title="Our Services"
      subtitle="Detailed technical breakdowns, capability specifications, and engineering scope for all 6 core services are currently being prepared for this page."
    />
  );
}
