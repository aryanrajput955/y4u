import TermsClient from './terms-client'

export const metadata = {
	title: 'Terms and Conditions | Y4U Ultimate Industrial Training',
	description:
		'Terms and conditions for Y4U Ultimate Industrial Training services. Please read these terms carefully before using our services.',
	robots: 'noindex, nofollow',
	openGraph: {
		title: 'Terms and Conditions | Y4U Ultimate Industrial Training',
		description:
			'Terms and conditions for Y4U Ultimate Industrial Training services.',
		url: 'https://www.y4uultimate.com/terms-and-conditions',
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
	alternates: {
		canonical: 'https://www.y4uultimate.com/terms-and-conditions',
	},
}

export default function TermsAndConditionsPage() {
	return <TermsClient />
}
