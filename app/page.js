'use client'
import HeroSection from "./components/hero-section"
import FeaturesSection from "./components/features-section"
import ProgramsSection from "./components/programs-section"
import TestimonialsSection from "./components/testimonials-section"
import CTASection from "./components/cta-section"
import BentoGallery from "./components/bentogrid"
import AboutUsSection from "./components/about"
import VisionSection from "./components/vision"
export default function Home() {
  return (
    <>
  
      <main>
        <HeroSection />
        <FeaturesSection />
        <ProgramsSection />
        <AboutUsSection />
        <VisionSection />
        <BentoGallery />
        <TestimonialsSection />
        <CTASection />
      </main>
  
    </>
  )
}
