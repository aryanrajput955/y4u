import PrivacyClient from './privacy-client'

export const metadata = {
	title: 'Privacy Policy | Y4U Ultimate Industrial Training',
	description:
		'Privacy policy for Y4U Ultimate Industrial Training. Learn how we collect, use, and protect your personal information.',
	robots: 'noindex, nofollow',
	openGraph: {
		title: 'Privacy Policy | Y4U Ultimate Industrial Training',
		description: 'Privacy policy for Y4U Ultimate Industrial Training.',
		url: 'https://www.y4uultimate.com/privacy-policy',
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
		canonical: 'https://www.y4uultimate.com/privacy-policy',
	},
}

export default function PrivacyPolicyPage() {
	return <PrivacyClient />
}
