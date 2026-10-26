import { UnderDevelopment } from "@/components/UnderDevelopment";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | HONG TET ENGINEERING (S) PTE. LTD.",
  description:
    "Learn about Hong Tet Engineering Singapore - licensed structural steel fabrication, roofing, and skilled BCA engineering solutions.",
};

export default function AboutPage() {
  return (
    <UnderDevelopment
      title="About Us"
      subtitle="We are actively compiling our company history, Singapore engineering credentials, safety certifications, and leadership profile for this page."
    />
  );
}
