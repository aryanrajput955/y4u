export const siteConfig = {
	name: 'Y4U Ultimate Industrial Training',
	shortName: 'Y4U Ultimate',
	description:
		'Leading industrial training institute in India offering hands-on training, apprenticeships, and job-oriented courses in mechanical, electrical, civil, CNC, welding, PLC, SCADA, and more.',
	url: 'https://www.y4uultimate.com', // Update with your actual domain
	ogImage: '/og-image.png',
	keywords: [
		// Core Training Keywords
		'industrial training india',
		'industrial training institute',
		'industrial training course',
		'industrial safety training',
		'industrial internship',
		'industrial apprenticeship',
		'industrial training placement',
		'industrial training jobs',

		// Training Types
		'industrial training online',
		'industrial training mechanical',
		'industrial training electrical',
		'industrial training civil',
		'industrial training ITI',
		'industrial training diploma',
		'industrial hands-on training',
		'industrial practical training',

		// Specialized Training
		'industrial robotics training',
		'industrial PLC training',
		'industrial SCADA training',
		'industrial CNC training',
		'industrial electrical safety training',
		'industrial machine operator training',
		'industrial fabrication training',
		'industrial welding training',
		'industrial fitter training',
		'industrial electrician training',
		'industrial supervisor training',

		// Programs & Courses
		'industrial training program',
		'industrial training certificate',
		'industrial training syllabus',
		'industrial certification course',
		'industrial job-oriented training',
		'industrial multi-skill training',
		'industrial vocational training',
		'industrial workforce training',

		// Facility & Equipment
		'industrial plant training',
		'industrial production training',
		'industrial machinery training',
		'industrial equipment training',
		'industrial testing training',

		// Quality & Compliance
		'industrial compliance training',
		'industrial quality training',

		// Student Categories
		'industrial training fresher',
		'industrial training summer',
		'industrial training winter',
		'industrial training engineering',
		'industrial training manufacturing',

		// Additional
		'industrial training fees',
		'industrial training near me',
		'industrial internship India',
		'industrial training certification online',
	],
	author: 'Y4U Ultimate Industrial Training',
	creator: 'Y4U Ultimate',
	publisher: 'Y4U Ultimate Industrial Training',
	locale: 'en_IN',
	type: 'website',
	twitter: {
		card: 'summary_large_image',
		site: '@v4uyogigangwar',
		creator: '@v4uyogigangwar',
	},
	verification: {
		google: 'ce0405V7yyIx8n2o0HkNPCswOfR2qcPyLWezimDdteA',
	},
	analytics: {
		googleAnalyticsId: 'G-R142F0ESK8',
	},
}

export const organizationSchema = {
	'@context': 'https://schema.org',
	'@type': 'EducationalOrganization',
	name: 'Y4U Ultimate Industrial Training',
	alternateName: 'Y4U Ultimate',
	url: siteConfig.url,
	logo: `${siteConfig.url}/logo.png`,
	description: siteConfig.description,
	foundingDate: '2015',
	address: {
		'@type': 'PostalAddress',
		streetAddress: '184, Subhash Nagar, Shankar Ashram, Alankar complex',
		addressLocality: 'Jwalapur, Haridwar',
		addressRegion: 'Uttarakhand',
		postalCode: '249407',
		addressCountry: 'IN',
	},
	contactPoint: {
		'@type': 'ContactPoint',
		telephone: '+91-82189-11085',
		email: 'yogeshggangwar@gmail.com',
		contactType: 'customer service',
		areaServed: 'IN',
		availableLanguage: ['en', 'hi'],
	},
	sameAs: [
		'https://www.facebook.com/people/V4u-Group-Uk-India-Industrial-Consultant/100070847007129/',
		'https://www.linkedin.com/in/yogesh-gangwar-3010b315/',
		'https://www.instagram.com/y4u_ultimate/',
		'https://x.com/v4uyogigangwar',
		'https://www.youtube.com/@YogeshGangwar',
	],
}

export const pageMetadata = {
	home: {
		title:
			'Y4U Ultimate Industrial Training | Best Industrial Training Institute in India',
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
	},
	about: {
		title: 'About Us | Y4U Ultimate Industrial Training Institute India',
		description:
			"Learn about Y4U Ultimate's mission to empower skills and build futures. Premium industrial training institute offering certified courses, practical training, and 100% placement assistance across India.",
		keywords: [
			'about industrial training',
			'industrial training institute india',
			'certified industrial training',
			'industrial training program',
			'industrial vocational training',
			'industrial workforce training',
		],
	},
	services: {
		title: 'Industrial Training Services | Courses & Programs - Y4U Ultimate',
		description:
			'Comprehensive industrial training services including mechanical, electrical, civil, CNC, PLC, SCADA, welding, robotics, and safety training. Online and offline courses with certification.',
		keywords: [
			'industrial training services',
			'industrial training course',
			'industrial training program',
			'industrial certification course',
			'industrial multi-skill training',
			'industrial practical training',
		],
	},
	contact: {
		title: 'Contact Y4U Ultimate | Industrial Training Institute Inquiry',
		description:
			"Contact Y4U Ultimate for industrial training course inquiries, enrollment, fees, and partnership opportunities. Get in touch with India's leading industrial training institute.",
		keywords: [
			'industrial training contact',
			'industrial training inquiry',
			'industrial training fees',
			'industrial training enrollment',
			'industrial training near me',
		],
	},
	industrialTraining: {
		title:
			'Industrial Training Programs | Mechanical, Electrical, Civil - Y4U Ultimate',
		description:
			'Complete industrial training programs with hands-on experience in mechanical, electrical, civil engineering. ITI diploma courses with certification and job placement in India.',
		keywords: [
			'industrial training program',
			'industrial training mechanical',
			'industrial training electrical',
			'industrial training civil',
			'industrial training ITI',
			'industrial training diploma',
			'industrial training syllabus',
			'industrial training certificate',
		],
	},
	itServices: {
		title:
			'IT & Industrial Automation Training | PLC, SCADA, CNC - Y4U Ultimate',
		description:
			'Advanced IT services and industrial automation training. Learn PLC programming, SCADA systems, CNC operations, robotics, and industrial testing with certification.',
		keywords: [
			'industrial PLC training',
			'industrial SCADA training',
			'industrial CNC training',
			'industrial robotics training',
			'industrial testing training',
			'industrial automation training',
		],
	},
	labourContractor: {
		title:
			'Labour Contractor & Manpower Services | Industrial Staffing - Y4U Ultimate',
		description:
			'Professional labour contractor and manpower services for industrial projects. Skilled workforce, machine operators, electricians, fitters, and supervisors with training.',
		keywords: [
			'industrial manpower',
			'labour contractor services',
			'industrial workforce training',
			'industrial machine operator training',
			'industrial electrician training',
			'industrial fitter training',
			'industrial supervisor training',
		],
	},
	realEstate: {
		title: 'Real Estate & Industrial Infrastructure Services - Y4U Ultimate',
		description:
			'Industrial real estate services and infrastructure solutions. Training facilities, industrial plant setups, and equipment management services.',
		keywords: [
			'industrial real estate',
			'industrial plant training',
			'industrial infrastructure',
			'industrial facility management',
		],
	},
	tourism: {
		title:
			'Uttarakhand Industrial Tourism | Plant Visits & Training - Y4U Ultimate',
		description:
			'Industrial tourism in Uttarakhand. Educational plant visits, manufacturing facility tours, and hands-on industrial training experiences.',
		keywords: [
			'industrial tourism',
			'industrial plant visits',
			'industrial manufacturing training',
			'industrial production training',
			'uttarakhand industrial training',
		],
	},
	blogs: {
		title:
			'Industrial Training Blog | Tips, Guides & Industry Insights - Y4U Ultimate',
		description:
			'Expert insights on industrial training, career tips, industry trends, and training guides. Stay updated with the latest in industrial education.',
		keywords: [
			'industrial training blog',
			'industrial training tips',
			'industrial career guide',
			'industrial training insights',
		],
	},
}
