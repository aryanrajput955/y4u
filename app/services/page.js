import ServicesHero from '../components/services/services-hero'
import ServicesList from '../components/services/services-list'
import ProcessSection from '../components/services/process-section'
import FAQSection from '../components/services/faq-section'

export const metadata = {
	title: 'Our Services | Y4U Ultimate Industrial Training',
	description:
		'Explore our comprehensive industrial training programs including CNC operations, welding, PLC programming, and more.',
}

export default function ServicesPage() {
	return (
		<>
			<main>
				<ServicesHero />
				<ServicesList />
				<ProcessSection />
				<FAQSection />
			</main>
		</>
	)
}
