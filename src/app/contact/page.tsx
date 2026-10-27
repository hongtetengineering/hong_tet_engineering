import type { Metadata } from "next";
import { ContactClientView } from "./ContactClientView";

export const metadata: Metadata = {
  title: "Contact Us | HONG TET ENGINEERING (S) PTE. LTD.",
  description:
    "Contact Hong Tet Engineering (S) Pte. Ltd. Singapore. Phone: +65 9898 9760, Email: renumohal1995@gmail.com, Office: 217 Bukit Batok Street 21, Singapore 650217.",
  keywords: [
    "Contact Hong Tet Engineering",
    "Engineering Contractor Bukit Batok",
    "Singapore Metal Fabrication Quote",
    "Roofing Contractor Contact Singapore",
    "Structural Steel Consultation",
  ],
};

export default function ContactPage() {
  return <ContactClientView />;
}
