'use client'

import Head from 'next/head'
import {usePathname} from 'next/navigation'
import {siteConfig, organizationSchema, pageMetadata} from '@/lib/seo-config'

export default function SEOHead() {
	const pathname = usePathname()

	// Determine page-specific metadata
	let metadata = pageMetadata.home
	let pageTitle = metadata.title
	let pageDescription = metadata.description
	let pageKeywords = metadata.keywords

	if (pathname === '/about') {
		metadata = pageMetadata.about
	} else if (pathname === '/services') {
		metadata = pageMetadata.services
	} else if (pathname === '/contact') {
		metadata = pageMetadata.contact
	} else if (pathname?.includes('/services/industrial-training')) {
		metadata = pageMetadata.industrialTraining
	} else if (pathname?.includes('/services/it-services')) {
		metadata = pageMetadata.itServices
	} else if (pathname?.includes('/services/labour-contractor')) {
		metadata = pageMetadata.labourContractor
	} else if (pathname?.includes('/services/real-estate')) {
		metadata = pageMetadata.realEstate
	} else if (pathname?.includes('/services/uttarakhand-tourism')) {
		metadata = pageMetadata.tourism
	} else if (pathname === '/blogs') {
		metadata = pageMetadata.blogs
	}

	pageTitle = metadata.title
	pageDescription = metadata.description
	pageKeywords = [
		...new Set([...siteConfig.keywords, ...(metadata.keywords || [])]),
	]

	const currentUrl = `${siteConfig.url}${pathname}`
	const ogImageUrl = `${siteConfig.url}${siteConfig.ogImage}`

	return (
		<Head>
			{/* Basic Meta Tags */}
			<title>{pageTitle}</title>
			<meta
				name='description'
				content={pageDescription}
			/>
			<meta
				name='keywords'
				content={pageKeywords.join(', ')}
			/>
			<meta
				name='author'
				content={siteConfig.author}
			/>
			<meta
				name='creator'
				content={siteConfig.creator}
			/>
			<meta
				name='publisher'
				content={siteConfig.publisher}
			/>
			<meta
				name='robots'
				content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
			/>
			<meta
				name='language'
				content='English'
			/>
			<meta
				name='revisit-after'
				content='7 days'
			/>
			<meta
				name='rating'
				content='General'
			/>

			{/* Canonical URL */}
			<link
				rel='canonical'
				href={currentUrl}
			/>

			{/* Open Graph Meta Tags */}
			<meta
				property='og:type'
				content={siteConfig.type}
			/>
			<meta
				property='og:site_name'
				content={siteConfig.name}
			/>
			<meta
				property='og:title'
				content={pageTitle}
			/>
			<meta
				property='og:description'
				content={pageDescription}
			/>
			<meta
				property='og:url'
				content={currentUrl}
			/>
			<meta
				property='og:image'
				content={ogImageUrl}
			/>
			<meta
				property='og:image:width'
				content='1200'
			/>
			<meta
				property='og:image:height'
				content='630'
			/>
			<meta
				property='og:image:alt'
				content={siteConfig.name}
			/>
			<meta
				property='og:locale'
				content={siteConfig.locale}
			/>

			{/* Twitter Card Meta Tags */}
			<meta
				name='twitter:card'
				content={siteConfig.twitter.card}
			/>
			<meta
				name='twitter:site'
				content={siteConfig.twitter.site}
			/>
			<meta
				name='twitter:creator'
				content={siteConfig.twitter.creator}
			/>
			<meta
				name='twitter:title'
				content={pageTitle}
			/>
			<meta
				name='twitter:description'
				content={pageDescription}
			/>
			<meta
				name='twitter:image'
				content={ogImageUrl}
			/>
			<meta
				name='twitter:image:alt'
				content={siteConfig.name}
			/>

			{/* Additional SEO Tags */}
			<meta
				name='theme-color'
				content='#0066cc'
			/>
			<meta
				name='mobile-web-app-capable'
				content='yes'
			/>
			<meta
				name='apple-mobile-web-app-capable'
				content='yes'
			/>
			<meta
				name='apple-mobile-web-app-status-bar-style'
				content='default'
			/>
			<meta
				name='apple-mobile-web-app-title'
				content={siteConfig.shortName}
			/>
			<meta
				name='application-name'
				content={siteConfig.shortName}
			/>

			{/* Favicon */}
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

			{/* Verification Tags */}
			{siteConfig.verification.google && (
				<meta
					name='google-site-verification'
					content={siteConfig.verification.google}
				/>
			)}
			{siteConfig.verification.bing && (
				<meta
					name='msvalidate.01'
					content={siteConfig.verification.bing}
				/>
			)}

			{/* Google Analytics */}
			{siteConfig.analytics?.googleAnalyticsId && (
				<>
					<script
						async
						src={`https://www.googletagmanager.com/gtag/js?id=${siteConfig.analytics.googleAnalyticsId}`}
					/>
					<script
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

			{/* JSON-LD Schema for Organization */}
			<script
				type='application/ld+json'
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(organizationSchema),
				}}
			/>

			{/* Breadcrumb Schema */}
			{pathname !== '/' && (
				<script
					type='application/ld+json'
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							'@context': 'https://schema.org',
							'@type': 'BreadcrumbList',
							itemListElement: pathname
								.split('/')
								.filter(Boolean)
								.map((segment, index, array) => ({
									'@type': 'ListItem',
									position: index + 1,
									name: segment
										.split('-')
										.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
										.join(' '),
									item: `${siteConfig.url}/${array
										.slice(0, index + 1)
										.join('/')}`,
								})),
						}),
					}}
				/>
			)}

			{/* Website Schema */}
			<script
				type='application/ld+json'
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'WebSite',
						name: siteConfig.name,
						url: siteConfig.url,
						potentialAction: {
							'@type': 'SearchAction',
							target: `${siteConfig.url}/search?q={search_term_string}`,
							'query-input': 'required name=search_term_string',
						},
					}),
				}}
			/>
		</Head>
	)
}
