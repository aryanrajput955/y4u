'use client'
import HeroSection from './components/hero-section'
import FeaturesSection from './components/features-section'
import ProgramsSection from './components/programs-section'
import TestimonialsSection from './components/testimonials-section'
import CTASection from './components/cta-section'
import BentoGallery from './components/bentogrid'
import AboutUsSection from './components/about'
import VisionSection from './components/vision'
import ServicesSection from './components/services-section'
import SliderSection from './components/slider-section'
import ImageGallerySection from './components/image-gallery-section'
export default function Home() {
	return (
		<>
			<main>
				<HeroSection />
				<FeaturesSection />
				{/* <ProgramsSection /> */}
				<ServicesSection />
				<SliderSection />
				<AboutUsSection />
				<VisionSection />
				<ImageGallerySection />
				<BentoGallery />
				<TestimonialsSection />
				<CTASection />
			</main>
		</>
	)
}
