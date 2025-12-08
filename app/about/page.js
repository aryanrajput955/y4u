import AboutHero from '../components/about/about-hero'
import MissionVision from '../components/about/mission-vision'
import TeamSection from '../components/about/team-section'
import Timeline from '../components/about/timeline'
import AboutCertifications from '../components/about/certifications'

export const metadata = {
	title: 'About Us | Y4U Ultimate Industrial Training Institute India',
	description:
		"Learn about Y4U Ultimate's mission to empower skills and build futures. Premier industrial training institute offering certified courses, practical training, and 100% placement assistance across India.",
	keywords: [
		'about industrial training',
		'industrial training institute india',
		'certified industrial training',
		'industrial training program',
		'industrial vocational training',
		'industrial workforce training',
		'industrial apprenticeship program',
		'industrial training placement',
	].join(', '),
	openGraph: {
		title: 'About Us | Y4U Ultimate Industrial Training Institute India',
		description:
			"Learn about Y4U Ultimate's mission to empower skills and build futures. Premier industrial training institute offering certified courses, practical training, and 100% placement assistance across India.",
		url: 'https://www.y4uultimate.com/about',
		siteName: 'Y4U Ultimate Industrial Training',
		images: [
			{
				url: '/og-image.png',
				width: 1200,
				height: 630,
				alt: 'Y4U Ultimate Industrial Training',
			},
		],
		locale: 'en_IN',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'About Us | Y4U Ultimate Industrial Training Institute India',
		description:
			"Learn about Y4U Ultimate's mission to empower skills and build futures. Premier industrial training institute offering certified courses, practical training, and 100% placement assistance across India.",
		images: ['/og-image.png'],
	},
	alternates: {
		canonical: 'https://www.y4uultimate.com/about',
	},
}

export default function AboutPage() {
	return (
		<>
			<main>
				<AboutHero />
				<MissionVision />
				<AboutCertifications />
				<Timeline />
				<TeamSection />
			</main>
		</>
	)
}
