import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { getFaqSchema } from "@/lib/schema";
import { ContactSection } from "@/components/ContactSection";
import { FaqSection } from "@/components/FaqSection";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { MarqueeStrip } from "@/components/MarqueeStrip";
import { Navbar } from "@/components/Navbar";
import { ProcessSection } from "@/components/ProcessSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ServiceAreaSection } from "@/components/ServiceAreaSection";
import { ServicesSection } from "@/components/ServicesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";

export const metadata: Metadata = {
  title: "HONG TET ENGINEERING (S) PTE. LTD. | Engineering Services Singapore",
  description:
    "Explore HONG TET ENGINEERING (S) PTE. LTD.'s engineering and fabrication services in Singapore, including structural steel, I-beams, roofing, railings, glass installation, and skilled manpower.",
  alternates: {
    canonical: siteConfig.url,
  },
};

const homeFaqs = [
  {
    q: "How do I start a project with Hong Tet Engineering?",
    a: "Simply call, email, or send us a WhatsApp message with your project scope, location, and any drawings, measurements, or site photos. We will review your requirements and coordinate an initial consultation.",
  },
  {
    q: "Do you provide on-site inspections and estimates?",
    a: "Yes. We arrange on-site inspections across Singapore to verify measurements and assess site conditions before preparing a transparent, itemized quotation with no hidden costs.",
  },
  {
    q: "What type of engineering and fabrication work do you handle?",
    a: "We specialize in structural metal fabrication, I-beam framing, roofing (zinc sheets, clay tiles, polycarbonate skylights, composite panels), stainless steel railings, gratings, main gates, glass doors, commercial renovation, painting, and skilled manpower supply.",
  },
  {
    q: "How long will my project take?",
    a: "Timelines depend on the scale of fabrication and site preparation. Small repairs and fittings are typically completed within days, while large structural steel frameworks or commercial renovations are executed with structured milestone dates.",
  },
  {
    q: "Can the scope or materials change later?",
    a: "Yes. Engineering projects often require practical site adjustments. We communicate openly with clients and will confirm any revisions to drawings, materials, or schedules before proceeding.",
  },
  {
    q: "Are your fabrication and installation crews licensed?",
    a: "Yes. Our skilled technicians, certified welders, and supervisors adhere strictly to Singapore Workplace Safety and Health (WSH) guidelines and BCA standards.",
  },
];

export default function Home() {
  const faqSchema = getFaqSchema(homeFaqs);

  return (
    <div
      className="min-h-screen bg-[#FBF9F5] text-neutral-900 selection:bg-[#FA551E] selection:text-white"
      id="top"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Navigation */}
      <Navbar />

      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* Services Section */}
        <ServicesSection />

        {/* Process Section */}
        <ProcessSection />

        {/* Projects Section */}
        <ProjectsSection />

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* Service Area Section */}
        <ServiceAreaSection />

        {/* FAQ Section */}
        <FaqSection />

        {/* Contact Section */}
        <ContactSection />

        {/* Infinite Marquee Ticker */}
        <MarqueeStrip />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
