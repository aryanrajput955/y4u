import ServicesHero from '../components/services/services-hero'
import ServicesList from '../components/services/services-list'
import ProcessSection from '../components/services/process-section'
import FAQSection from '../components/services/faq-section'

export const metadata = {
	title: 'Industrial Training Services | Courses & Programs - Y4U Ultimate',
	description:
		'Comprehensive industrial training services including mechanical, electrical, civil, CNC, PLC, SCADA, welding, robotics, and safety training. Online and offline courses with certification and job placement.',
	keywords: [
		'industrial training services',
		'industrial training course',
		'industrial training program',
		'industrial certification course',
		'industrial multi-skill training',
		'industrial practical training',
		'industrial safety training',
		'industrial hands-on training',
		'industrial job-oriented training',
	].join(', '),
	openGraph: {
		title: 'Industrial Training Services | Courses & Programs - Y4U Ultimate',
		description:
			'Comprehensive industrial training services including mechanical, electrical, civil, CNC, PLC, SCADA, welding, robotics, and safety training. Online and offline courses with certification.',
		url: 'https://www.y4uultimate.com/services',
		siteName: 'Y4U Ultimate Industrial Training',
		images: [
			{
				url: '/og-image.png',
				width: 1200,
				height: 630,
				alt: 'Y4U Ultimate Industrial Training Services',
			},
		],
		locale: 'en_IN',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Industrial Training Services | Courses & Programs - Y4U Ultimate',
		description:
			'Comprehensive industrial training services including mechanical, electrical, civil, CNC, PLC, SCADA, welding, robotics, and safety training.',
		images: ['/og-image.png'],
	},
	alternates: {
		canonical: 'https://www.y4uultimate.com/services',
	},
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
