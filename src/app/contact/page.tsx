import { UnderDevelopment } from "@/components/UnderDevelopment";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | HONG TET ENGINEERING (S) PTE. LTD.",
  description:
    "Get in touch with Hong Tet Engineering Singapore. Phone: +65 8314 5705, Email: sultamahmud2144@gmail.com, Office: 217 Bukit Batok Street 21.",
};

export default function ContactPage() {
  return (
    <UnderDevelopment
      title="Contact Us"
      subtitle="A dedicated interactive consultation portal is currently in development. You can reach our Singapore desk directly via phone at +65 8314 5705 or WhatsApp."
    />
  );
}
