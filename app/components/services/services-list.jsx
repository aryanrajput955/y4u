'use client'

import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { ArrowRight, Monitor, Building, HardHat, Map, Briefcase, GraduationCap, SlidersHorizontal, ChevronDown } from 'lucide-react'
import Link from 'next/link'

const categories = [
	{ id: 'all', name: 'All Services' },
	{ id: 'it', name: 'IT Services' },
	{ id: 'marketing', name: 'Digital Marketing' },
	{ id: 'industrial', name: 'Industrial Training' },
	{ id: 'tourism', name: 'Tourism & Hospitality' },
	{ id: 'manpower', name: 'Labour & Manpower' },
	{ id: 'realestate', name: 'Real Estate' },
]

const servicesData = [
	// IT Services
	{
		id: 1,
		categoryId: 'it',
		title: 'Custom Web Development',
		slug: 'custom-web-development',
		description: 'Bespoke website solutions tailored to your business needs, utilizing cutting-edge web technologies for performance and scale.',
		icon: <Monitor size={24} />,
		features: ['React/Next.js', 'Responsive Design', 'API Integration'],
		image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800&h=500',
	},
	{
		id: 2,
		categoryId: 'it',
		title: 'Mobile App Development',
		slug: 'mobile-app-development',
		description: 'High-quality native and cross-platform mobile applications that provide excellent user experiences on iOS and Android.',
		icon: <Monitor size={24} />,
		features: ['React Native', 'UI/UX Polish', 'App Store Deployment'],
		image: 'https://images.unsplash.com/photo-1601034913836-a1f43e143611?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	},
	{
		id: 3,
		categoryId: 'it',
		title: 'UI/UX Design',
		slug: 'ui-ux-design',
		description: 'User-centric design services to create intuitive, accessible, and beautiful interfaces for your digital products.',
		icon: <Monitor size={24} />,
		features: ['Wireframing', 'Prototyping', 'User Research'],
		image: 'https://images.unsplash.com/photo-1576153192396-180ecef2a715?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	},
	{
		id: 4,
		categoryId: 'it',
		title: 'E-commerce Solutions',
		slug: 'e-commerce-solutions',
		description: 'End-to-end online store development with secure payment gateways, inventory management, and optimized checkout flows.',
		icon: <Monitor size={24} />,
		features: ['Shopify', 'WooCommerce', 'Payment Gateways'],
		image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=800&h=500',
	},
	{
		id: 5,
		categoryId: 'it',
		title: 'Cloud Infrastructure Setup',
		slug: 'cloud-infrastructure-setup',
		description: 'Scalable and secure cloud architecture design and deployment using modern cloud providers like AWS, Azure, or GCP.',
		icon: <Monitor size={24} />,
		features: ['AWS/Azure', 'Docker/Kubernetes', 'CI/CD Pipelines'],
		image: 'https://images.unsplash.com/photo-1690627931320-16ac56eb2588?q=80&w=1193&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	},
	{
		id: 6,
		categoryId: 'it',
		title: 'Managed IT Support',
		slug: 'managed-it-support',
		description: 'Reliable ongoing maintenance, troubleshooting, and IT infrastructure support to keep your operations running smoothly.',
		icon: <Monitor size={24} />,
		features: ['24/7 Monitoring', 'Network Security', 'Helpdesk'],
		image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=800&h=500',
	},

	// Digital Marketing
	{
		id: 7,
		categoryId: 'marketing',
		title: 'Search Engine Optimization (SEO)',
		slug: 'seo-services',
		description: 'Data-driven SEO strategies to improve your website rankings, increase organic traffic, and boost online visibility.',
		icon: <Briefcase size={24} />,
		features: ['On-page SEO', 'Link Building', 'Keyword Research'],
		image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=1251&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	},
	{
		id: 8,
		categoryId: 'marketing',
		title: 'Social Media Management',
		slug: 'social-media-management',
		description: 'Engaging content creation and community management across diverse social platforms to build brand loyalty.',
		icon: <Briefcase size={24} />,
		features: ['Content Calendar', 'Community Engagement', 'Analytics'],
		image: 'https://images.unsplash.com/photo-1683721003111-070bcc053d8b?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	},
	{
		id: 9,
		categoryId: 'marketing',
		title: 'Pay-Per-Click Advertising',
		slug: 'ppc-advertising',
		description: 'Targeted ad campaigns on Google, Facebook, and LinkedIn designed to maximize ROI and generate high-quality leads.',
		icon: <Briefcase size={24} />,
		features: ['Google Ads', 'Meta Ads', 'Conversion Tracking'],
		image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	},
	{
		id: 10,
		categoryId: 'marketing',
		title: 'Content Marketing Strategy',
		slug: 'content-marketing',
		description: 'Strategic planning and creation of valuable content to attract, inform, and convert your target audience.',
		icon: <Briefcase size={24} />,
		features: ['Blog Articles', 'Whitepapers', 'Video Scripts'],
		image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=500',
	},
    {
		id: 11,
		categoryId: 'marketing',
		title: 'Email Marketing Campaigns',
		slug: 'email-marketing',
		description: 'Automated email sequences and newsletters to nurture leads and retain existing customers effectively.',
		icon: <Briefcase size={24} />,
		features: ['Automation', 'A/B Testing', 'List Segmentation'],
		image: 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&q=80&w=800&h=500',
	},

	// Industrial Training
	{
		id: 12,
		categoryId: 'industrial',
		title: 'CNC Machine Operation',
		slug: 'cnc-machine-operation',
		description: 'Comprehensive training on Computer Numerical Control machines covering programming, setup, and safe operation.',
		icon: <GraduationCap size={24} />,
		features: ['G-Code/M-Code', 'Practical Setup', 'Maintenance'],
		image: 'https://images.unsplash.com/photo-1581091212991-8891c7d4bd9b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	},
	{
		id: 13,
		categoryId: 'industrial',
		title: 'PLC & SCADA Automation',
		slug: 'plc-scada-automation',
		description: 'Advanced industrial automation courses focused on Programmable Logic Controllers and SCADA systems design.',
		icon: <GraduationCap size={24} />,
		features: ['Ladder Logic', 'HMI Design', 'System Integration'],
		image: 'https://images.unsplash.com/photo-1600715502630-c9300abe78a3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	},
	{
		id: 14,
		categoryId: 'industrial',
		title: 'Industrial Safety Protocols',
		slug: 'industrial-safety',
		description: 'Essential certification courses on workplace safety, hazard identification, and emergency response procedures.',
		icon: <GraduationCap size={24} />,
		features: ['OSHA Standards', 'First Aid', 'Fire Safety'],
		image: 'https://images.unsplash.com/photo-1759763823587-c8bd07fca246?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	},
	{
		id: 15,
		categoryId: 'industrial',
		title: 'Welding & Fabrication',
		slug: 'welding-fabrication',
		description: 'Hands-on practical training in various welding techniques including MIG, TIG, and Arc welding.',
		icon: <GraduationCap size={24} />,
		features: ['MIG/TIG Welding', 'Blueprint Reading', 'Material Science'],
		image: 'https://images.unsplash.com/photo-1609348632802-b952f368fc3a?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	},
	{
		id: 16,
		categoryId: 'industrial',
		title: 'Quality Control Management',
		slug: 'quality-control',
		description: 'Training on Six Sigma, ISO standards, and quality assurance processes for manufacturing excellence.',
		icon: <GraduationCap size={24} />,
		features: ['Six Sigma', 'ISO 9001', 'Defect Analysis'],
		image: 'https://images.unsplash.com/photo-1748255882537-cbe88b145305?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	},

	// Tourism & Hospitality
	{
		id: 17,
		categoryId: 'tourism',
		title: 'Hotel Staff Training',
		slug: 'hotel-staff-training',
		description: 'Complete hospitality training programs covering front-desk operations, housekeeping, and guest services.',
		icon: <Map size={24} />,
		features: ['Front Office', 'Housekeeping', 'F&B Service'],
		image: 'https://images.unsplash.com/photo-1561489422-45de3d015e3e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	},
	{
		id: 18,
		categoryId: 'tourism',
		title: 'Travel Guide Certification',
		slug: 'travel-guide-certification',
		description: 'Specialized programs for regional tourism guides, focusing on local history, culture, and tour management.',
		icon: <Map size={24} />,
		features: ['Local History', 'Group Management', 'First Aid'],
		image: 'https://images.unsplash.com/photo-1645468085508-11d3ee94fcef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGd1aWRlfGVufDB8fDB8fHwy',
	},
	{
		id: 19,
		categoryId: 'tourism',
		title: 'Resort Management',
		slug: 'resort-management',
		description: 'Advanced administrative training for resort supervisors covering operations, marketing, and customer satisfaction.',
		icon: <Map size={24} />,
		features: ['Operations', 'Revenue Management', 'Event Planning'],
		image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	},
	{
		id: 20,
		categoryId: 'tourism',
		title: 'Regional Tourism Promotion',
		slug: 'tourism-promotion',
		description: 'Marketing strategies and consulting specific to promoting local tourism spots and travel packages.',
		icon: <Map size={24} />,
		features: ['Destination Marketing', 'Eco-tourism', 'Partner Networks'],
		image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=800&h=500',
	},
	{
		id: 21,
		categoryId: 'tourism',
		title: 'Hospitality Customer Service',
		slug: 'hospitality-customer-service',
		description: 'Soft skills & etiquette training designed to elevate the standard of guest interactions in the hospitality sector.',
		icon: <Map size={24} />,
		features: ['Communication', 'Conflict Resolution', 'Etiquette'],
		image: 'https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	},

	// Labour & Manpower
	{
		id: 22,
		categoryId: 'manpower',
		title: 'Skilled Labour Supply',
		slug: 'skilled-labour-supply',
		description: 'Provision of highly trained and verified professionals such as electricians, plumbers, and technicians.',
		icon: <HardHat size={24} />,
		features: ['Verified Skills', 'Background Checks', 'Quick Deployment'],
		image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	},
	{
		id: 23,
		categoryId: 'manpower',
		title: 'Semi-skilled Workforce',
		slug: 'semi-skilled-workforce',
		description: 'Reliable semi-skilled workers for manufacturing, construction, and assembly line operations.',
		icon: <HardHat size={24} />,
		features: ['Factory Workers', 'Assembly Line', 'Logistics Personnel'],
		image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800&h=500',
	},
	{
		id: 24,
		categoryId: 'manpower',
		title: 'Industrial Housekeeping',
		slug: 'industrial-housekeeping',
		description: 'Professional cleaning and maintenance staff specialized in large-scale industrial and corporate environments.',
		icon: <HardHat size={24} />,
		features: ['Deep Cleaning', 'Waste Management', 'Sanitization'],
		image: 'https://images.unsplash.com/photo-1573014196346-87ac0314faf5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	},
	{
		id: 25,
		categoryId: 'manpower',
		title: 'Security Personnel Services',
		slug: 'security-personnel',
		description: 'Trained security guards and surveillance staff ensuring the safety of your commercial and industrial premises.',
		icon: <HardHat size={24} />,
		features: ['Guards', 'Surveillance', 'Access Control'],
		image: 'https://images.unsplash.com/photo-1552622594-9a37efeec618?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	},
    {
		id: 26,
		categoryId: 'manpower',
		title: 'Payroll & Compliance Mgt.',
		slug: 'payroll-compliance',
		description: 'End-to-end management of workforce payroll, PF, ESI, and other statutory labour compliances.',
		icon: <HardHat size={24} />,
		features: ['Salary Processing', 'Statutory Compliance', 'Record Keeping'],
		image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800&h=500',
	},

	// Real Estate
	{
		id: 27,
		categoryId: 'realestate',
		title: 'Commercial Property Consulting',
		slug: 'commercial-property-consulting',
		description: 'Expert advisory services for buying, selling, and leasing commercial spaces and office buildings.',
		icon: <Building size={24} />,
		features: ['Market Analysis', 'Lease Negotiation', 'Valuation'],
		image: 'https://images.unsplash.com/photo-1630060041646-3ba002aa7d37?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	},
	{
		id: 28,
		categoryId: 'realestate',
		title: 'Residential Brokerage',
		slug: 'residential-brokerage',
		description: 'Trusted real estate agents dedicated to helping families find their perfect home or apartment.',
		icon: <Building size={24} />,
		features: ['Property Tours', 'Buyer Representation', 'Home Valuation'],
		image: 'https://images.unsplash.com/photo-1626178793926-22b28830aa30?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	},
	{
		id: 29,
		categoryId: 'realestate',
		title: 'Property Management',
		slug: 'property-management',
		description: 'Comprehensive oversight of real estate assets including tenant relations, maintenance, and rent collection.',
		icon: <Building size={24} />,
		features: ['Tenant Screening', 'Maintenance', 'Rent Collection'],
		image: 'https://images.unsplash.com/photo-1707623988408-ab88c9981730?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	},
	{
		id: 30,
		categoryId: 'realestate',
		title: 'Real Estate Investment Advisory',
		slug: 'real-estate-investment',
		description: 'Strategic guidance on real estate investments to maximize returns and diversify portfolios.',
		icon: <Building size={24} />,
		features: ['ROI Analysis', 'Portfolio Strategy', 'Market Trends'],
		image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800&h=500',
	},
	{
		id: 31,
		categoryId: 'realestate',
		title: 'Legal Documentation',
		slug: 'legal-documentation',
		description: 'Hassle-free preparation and processing of property registration, agreements, and legal documentation.',
		icon: <Building size={24} />,
		features: ['Registration', 'Title Search', 'Agreement Drafting'],
		image: 'https://images.unsplash.com/photo-1603796846097-bee99e4a601f?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	},
]

export default function ServicesList() {
	const [activeCategory, setActiveCategory] = useState('all')
	const [isFilterOpen, setIsFilterOpen] = useState(false)
	const [mobileShowAll, setMobileShowAll] = useState(false)
	const filterRef = useRef(null)

	useEffect(() => {
		function handleClickOutside(event) {
			if (filterRef.current && !filterRef.current.contains(event.target)) {
				setIsFilterOpen(false)
			}
		}
		document.addEventListener('mousedown', handleClickOutside)
		return () => document.removeEventListener('mousedown', handleClickOutside)
	}, [])

	const handleCategoryChange = (categoryId) => {
		setActiveCategory(categoryId)
		setIsFilterOpen(false)
		setMobileShowAll(false)
	}

	const filteredServices = servicesData.filter(
		(service) => activeCategory === 'all' || service.categoryId === activeCategory
	)

	const activeCategoryName = categories.find((c) => c.id === activeCategory)?.name || 'All Services'

	return (
		<section className='py-10 md:py-20 bg-background'>
			<div className='max-w-7xl mx-auto px-6'>

				{/* Mobile Filter - Single button with dropdown */}
				<div className='md:hidden flex justify-start mb-10 relative' ref={filterRef}>
					<button
						onClick={() => setIsFilterOpen(!isFilterOpen)}
						className='flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium bg-primary text-primary-foreground shadow-md'
					>
						<SlidersHorizontal size={16} />
						<span>{activeCategoryName}</span>
						<ChevronDown
							size={16}
							className={`transition-transform duration-200 ${isFilterOpen ? 'rotate-180' : ''}`}
						/>
					</button>

					{isFilterOpen && (
						<div className='absolute top-full mt-2 bg-card border border-border rounded-2xl shadow-xl z-50 min-w-[220px] overflow-hidden'>
							{categories.map((category) => (
								<button
									key={category.id}
									onClick={() => handleCategoryChange(category.id)}
									className={`w-full text-left px-5 py-3 text-sm font-medium transition-colors ${
										activeCategory === category.id
											? 'bg-primary text-primary-foreground'
											: 'text-foreground hover:bg-muted'
									}`}
								>
									{category.name}
								</button>
							))}
						</div>
					)}
				</div>

				{/* Desktop Filter - Original buttons */}
				<div className='hidden md:flex flex-wrap gap-3 justify-center mb-16'>
					{categories.map((category) => (
						<button
							key={category.id}
							onClick={() => handleCategoryChange(category.id)}
							className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
								activeCategory === category.id
									? 'bg-primary text-primary-foreground shadow-md scale-105'
									: 'bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground'
							}`}
						>
							{category.name}
						</button>
					))}
				</div>

				{/* Services Grid */}
				<div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8'>
					{filteredServices.map((service, index) => (
						<Link
							key={service.id}
							href='#'
							className={`group flex-col h-full bg-card rounded-2xl md:rounded-3xl border border-border/50 overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-primary/5 hover:border-primary/30 transition-all duration-500 transform hover:-translate-y-2 ${
								!mobileShowAll && index >= 6 ? 'hidden md:flex' : 'flex'
							}`}
						>
							<div className='relative h-32 md:h-64 w-full overflow-hidden'>
								<Image
									src={service.image || '/placeholder.svg'}
									alt={service.title}
									fill
									className='object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out'
								/>
								<div className='absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent opacity-80 group-hover:opacity-50 transition-opacity duration-500' />

								{/* Floating Icon */}
								<div className='hidden md:block absolute top-6 right-6 bg-background/90 backdrop-blur-md p-3.5 rounded-2xl text-primary shadow-lg group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300'>
									{service.icon}
								</div>
							</div>

							<div className='p-3 md:p-8 flex flex-col grow relative bg-card z-10'>
								<h3 className='text-xs md:text-2xl font-bold text-foreground mb-1 md:mb-4 leading-tight group-hover:text-primary transition-colors duration-300 line-clamp-2'>
									{service.title}
								</h3>

								<p className='hidden md:block text-muted-foreground leading-relaxed mb-8 grow text-sm md:text-base'>
									{service.description}
								</p>

								<div className='hidden md:flex flex-wrap gap-2 mb-8'>
									{service.features.map((feature, idx) => (
										<span
											key={idx}
											className='bg-primary/5 text-primary border border-primary/10 text-xs px-3 py-1.5 rounded-full font-semibold tracking-wide'
										>
											{feature}
										</span>
									))}
								</div>

								<div className='mt-auto flex items-center justify-between font-semibold text-foreground group-hover:text-primary transition-colors'>
									<span className='hidden md:block text-[15px]'>Explore Service</span>
									<span className='bg-muted p-1.5 md:p-2.5 rounded-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 shadow-sm'>
										<ArrowRight size={14} className='md:hidden transform group-hover:translate-x-0.5 transition-transform' />
										<ArrowRight size={18} className='hidden md:block transform group-hover:translate-x-0.5 transition-transform' />
									</span>
								</div>
							</div>
						</Link>
					))}
				</div>

				{/* Mobile View More / Show Less Button */}
				{filteredServices.length > 6 && (
					<div className='md:hidden flex justify-center mt-10'>
						<button
							onClick={() => setMobileShowAll(!mobileShowAll)}
							className='px-8 py-3 rounded-full text-sm font-semibold bg-primary text-primary-foreground shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300'
						>
							{mobileShowAll
								? 'Show Less'
								: `View More (${filteredServices.length - 6} more)`}
						</button>
					</div>
				)}

				{filteredServices.length === 0 && (
					<div className='text-center py-20 text-muted-foreground'>
						No services found for this category.
					</div>
				)}

			</div>
		</section>
	)
}

