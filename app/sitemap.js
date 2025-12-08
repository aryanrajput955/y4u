import {siteConfig} from '@/lib/seo-config'

export default function sitemap() {
	const baseUrl = siteConfig.url || 'https://www.y4uultimate.com'

	// Static pages
	const routes = [
		'',
		'/about',
		'/services',
		'/contact',
		'/blogs',
		'/services/industrial-training',
		'/services/it-services',
		'/services/labour-contractor-staff-manpower',
		'/services/real-estate',
		'/services/uttarakhand-tourism',
		'/privacy-policy',
		'/terms-and-conditions',
	].map((route) => ({
		url: `${baseUrl}${route}`,
		lastModified: new Date(),
		changeFrequency:
			route === '' ? 'daily' : route.includes('/blogs') ? 'weekly' : 'monthly',
		priority:
			route === ''
				? 1.0
				: route.includes('/services')
				? 0.8
				: route.includes('/about') || route.includes('/contact')
				? 0.9
				: 0.5,
	}))

	return routes
}
