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

export default function Home() {
  return (
    <div
      className="min-h-screen bg-[#FBF9F5] text-neutral-900 selection:bg-[#FA551E] selection:text-white"
      id="top"
    >
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
