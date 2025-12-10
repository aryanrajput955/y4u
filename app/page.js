'use client'
import HeroSection from './components/hero-section'
import FeaturesSection from './components/features-section'
import TestimonialsSection from './components/testimonials-section'
import CTASection from './components/cta-section'
import AboutUsSection from './components/about'
import VisionSection from './components/vision'
import ServicesSection from './components/services-section'
import SliderSection from './components/slider-section'
import ImageGallerySection from './components/image-gallery-section'
import CertificationSection from './components/certification-section'
import WhoWeHelpSection from './components/whowehelp-section'
import FreeConsultationSection from './components/freeconsultation-section'
import Certificate2 from './components/certificate2'

export default function Home() {
	return (
		<>
			<main>
				<HeroSection />
				<ServicesSection />
				<FreeConsultationSection />
				<CertificationSection />
				<Certificate2 />
				<WhoWeHelpSection />
				<FeaturesSection />
				<SliderSection />
				<TestimonialsSection />
				<AboutUsSection />
				<VisionSection />
				<ImageGallerySection />
				<CTASection />
			</main>
		</>
	)
}
