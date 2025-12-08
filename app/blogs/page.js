import BlogsClient from './blogs-client'

export const metadata = {
	title:
		'Industrial Training Blog | Tips, Guides & Industry Insights - Y4U Ultimate',
	description:
		'Expert insights on industrial training, career tips, industry trends, and training guides. Stay updated with the latest in industrial education and skill development.',
	keywords: [
		'industrial training blog',
		'industrial training tips',
		'industrial career guide',
		'industrial training insights',
		'industrial skills development',
		'industrial training news',
	].join(', '),
	openGraph: {
		title:
			'Industrial Training Blog | Tips, Guides & Industry Insights - Y4U Ultimate',
		description:
			'Expert insights on industrial training, career tips, industry trends, and training guides.',
		url: 'https://www.y4uultimate.com/blogs',
		siteName: 'Y4U Ultimate Industrial Training',
		images: [
			{
				url: '/og-image.png',
				width: 1200,
				height: 630,
				alt: 'Y4U Ultimate Industrial Training Blog',
			},
		],
		locale: 'en_IN',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title:
			'Industrial Training Blog | Tips, Guides & Industry Insights - Y4U Ultimate',
		description:
			'Expert insights on industrial training, career tips, and industry trends.',
		images: ['/og-image.png'],
	},
	alternates: {
		canonical: 'https://www.y4uultimate.com/blogs',
	},
}

export default function BlogsPage() {
	return <BlogsClient />
}
