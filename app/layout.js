import {Inter, JetBrains_Mono} from 'next/font/google'
import './globals.css'
import {siteConfig} from '@/lib/seo-config'
import Script from 'next/script'

import ClientLayout from './client-layout'

const inter = Inter({subsets: ['latin']})
const jetbrainsMono = JetBrains_Mono({
	subsets: ['latin'],
	variable: '--font-mono',
})

export const metadata = {
	metadataBase: new URL('https://www.y4uultimate.com'),
	title: {
		default:
			'Y4U Ultimate Industrial Training | Best Industrial Training Institute in India',
		template: '%s | Y4U Ultimate',
	},
	description:
		"Join India's premium industrial training institute offering hands-on training in mechanical, electrical, civil, CNC, PLC, SCADA, welding, and more. Get certified with job placement assistance.",
	keywords: [
		'industrial training india',
		'industrial training institute',
		'best industrial training',
		'industrial internship india',
		'industrial apprenticeship',
		'industrial training placement',
		'industrial hands-on training',
		'industrial job-oriented training',
	],
	authors: [{name: 'Y4U Ultimate Industrial Training'}],
	creator: 'Y4U Ultimate',
	publisher: 'Y4U Ultimate Industrial Training',
	openGraph: {
		type: 'website',
		locale: 'en_IN',
		url: 'https://www.y4uultimate.com',
		siteName: 'Y4U Ultimate Industrial Training',
		title:
			'Y4U Ultimate Industrial Training | Best Industrial Training Institute in India',
		description:
			"Join India's premium industrial training institute offering hands-on training in mechanical, electrical, civil, CNC, PLC, SCADA, welding, and more.",
		images: [
			{
				url: '/og-image.png',
				width: 1200,
				height: 630,
				alt: 'Y4U Ultimate Industrial Training',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		site: '@v4uyogigangwar',
		creator: '@v4uyogigangwar',
		title:
			'Y4U Ultimate Industrial Training | Best Industrial Training Institute in India',
		description:
			"Join India's premium industrial training institute offering hands-on training in mechanical, electrical, civil, CNC, PLC, SCADA, welding, and more.",
		images: ['/og-image.png'],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	verification: {
		google: 'ce0405V7yyIx8n2o0HkNPCswOfR2qcPyLWezimDdteA',
	},
	alternates: {
		canonical: 'https://www.y4uultimate.com',
	},
}

export default function RootLayout({children}) {
	return (
		<html
			lang='en'
			className='scroll-smooth'>
			<head>
				<link
					rel='icon'
					href='/favicon.ico'
				/>
				<link
					rel='apple-touch-icon'
					href='/logo.png'
				/>
				<link
					rel='manifest'
					href='/manifest.json'
				/>
			</head>
			<body
				className={`${inter.className} ${jetbrainsMono.variable} font-sans antialiased`}>
				{siteConfig.analytics?.googleAnalyticsId && (
					<>
						<Script
							strategy='afterInteractive'
							src={`https://www.googletagmanager.com/gtag/js?id=${siteConfig.analytics.googleAnalyticsId}`}
						/>
						<Script
							id='google-analytics'
							strategy='afterInteractive'
							dangerouslySetInnerHTML={{
								__html: `
									window.dataLayer = window.dataLayer || [];
									function gtag(){dataLayer.push(arguments);}
									gtag('js', new Date());
									gtag('config', '${siteConfig.analytics.googleAnalyticsId}');
								`,
							}}
						/>
					</>
				)}
				<ClientLayout>{children}</ClientLayout>
			</body>
		</html>
	)
}
