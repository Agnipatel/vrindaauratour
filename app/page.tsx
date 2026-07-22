import { Navbar } from "@/components/landing/Navbar";
import { HeroSection } from "@/components/landing/HeroSection";
import { WhyChooseUs } from "@/components/landing/WhyChooseUs";
import { Destinations } from "@/components/landing/Destinations";
import { WhatsIncludedAndWho } from "@/components/landing/WhatsIncludedAndWho";
import { FaqSection } from "@/components/landing/FaqSection";
import { FooterCta } from "@/components/landing/FooterCta";
import { Gallery } from "@/components/landing/Gallery";
import TestimonialsSection from "@/components/Testimonials Section";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-stone-50 text-stone-900">
      <Navbar />
      <HeroSection />

      <TestimonialsSection />


      <div id="destinations">
        <Destinations />
      </div>
      <div id="packages">
        <WhatsIncludedAndWho />
      </div>
      <div id="gallery">
        <Gallery />
      </div>
      <div id="why-us">
        <WhyChooseUs />
      </div>
      <div id="faqs">
        <FaqSection />
      </div>

      <FooterCta />
    </div>
  );
}
