import ContactHero from '../components/contact/contact-hero'
import ContactForm from '../components/contact/contact-form'
import ContactInfo from '../components/contact/contact-info'
import MapSection from '../components/contact/map-section'

export const metadata = {
	title:
		'Contact Y4U Ultimate | Industrial Training Institute Inquiry & Enrollment',
	description:
		"Contact Y4U Ultimate for industrial training course inquiries, enrollment, fees, and partnership opportunities. Get in touch with India's leading industrial training institute for mechanical, electrical, civil, and automation training.",
	keywords: [
		'industrial training contact',
		'industrial training inquiry',
		'industrial training fees',
		'industrial training enrollment',
		'industrial training near me',
		'industrial training india contact',
		'industrial training admission',
		'industrial training consultation',
	].join(', '),
	openGraph: {
		title: 'Contact Y4U Ultimate | Industrial Training Institute Inquiry',
		description:
			'Contact Y4U Ultimate for industrial training course inquiries, enrollment, fees, and partnership opportunities.',
		url: 'https://www.y4uultimate.com/contact',
		siteName: 'Y4U Ultimate Industrial Training',
		images: [
			{
				url: '/og-image.png',
				width: 1200,
				height: 630,
				alt: 'Contact Y4U Ultimate Industrial Training',
			},
		],
		locale: 'en_IN',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Contact Y4U Ultimate | Industrial Training Institute Inquiry',
		description:
			'Contact Y4U Ultimate for industrial training course inquiries, enrollment, and fees.',
		images: ['/og-image.png'],
	},
	alternates: {
		canonical: 'https://www.y4uultimate.com/contact',
	},
}

export default function ContactPage() {
	return (
		<>
			<main>
				<ContactHero />
				<section className='py-20 bg-card'>
					<div className='max-w-7xl mx-auto px-6'>
						<div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
							<ContactForm />
							<ContactInfo />
						</div>
					</div>
				</section>
				<MapSection />
			</main>
		</>
	)
}
