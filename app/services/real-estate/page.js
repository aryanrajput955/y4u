import Image from 'next/image'
import Link from 'next/link'
import {ArrowLeft, Clock, Users, Award, CheckCircle2} from 'lucide-react'

export const metadata = {
	title: 'Real Estate & Industrial Infrastructure Services - Y4U Ultimate',
	description:
		'Industrial real estate services and infrastructure solutions. Training facilities, industrial plant setups, equipment management, and facility development for industrial training centers.',
	keywords: [
		'industrial real estate',
		'industrial plant training',
		'industrial infrastructure',
		'industrial facility management',
		'training facility development',
		'industrial property services',
	].join(', '),
	openGraph: {
		title: 'Real Estate & Industrial Infrastructure Services - Y4U Ultimate',
		description:
			'Industrial real estate services and infrastructure solutions. Training facilities, industrial plant setups, and equipment management.',
		url: 'https://www.y4uultimate.com/services/real-estate',
		siteName: 'Y4U Ultimate Industrial Training',
		images: [
			{
				url: '/og-image.png',
				width: 1200,
				height: 630,
				alt: 'Y4U Ultimate Real Estate Services',
			},
		],
		locale: 'en_IN',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Real Estate & Industrial Infrastructure Services - Y4U Ultimate',
		description:
			'Industrial real estate services and infrastructure solutions.',
		images: ['/og-image.png'],
	},
	alternates: {
		canonical: 'https://www.y4uultimate.com/services/real-estate',
	},
}

export default function RealEstatePage() {
	return (
		<main className='min-h-screen bg-background'>
			{/* Hero Section */}
			<section className='relative h-[400px] bg-linear-to-r from-primary to-accent'>
				<div className='absolute inset-0 bg-black/40' />
				<div className='relative max-w-7xl mx-auto px-6 h-full flex flex-col justify-center'>
					<Link
						href='/services'
						className='inline-flex items-center gap-2 text-white mb-6 hover:gap-3 transition-all'>
						<ArrowLeft size={20} />
						Back to Services
					</Link>
					<h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4'>
						Real Estate
					</h1>
					<p className='text-xl text-white/90 max-w-2xl'>
						Professional real estate services including property consulting and
						sales training
					</p>
				</div>
			</section>

			{/* Content Section */}
			<section className='py-16 px-6'>
				<div className='max-w-7xl mx-auto'>
					<div className='grid grid-cols-1 lg:grid-cols-3 gap-12'>
						{/* Main Content */}
						<div className='lg:col-span-2'>
							<h2 className='text-3xl font-bold text-foreground mb-6'>
								About This Training Program
							</h2>
							<p className='text-muted-foreground mb-6 leading-relaxed'>
								Learn how to succeed in the real estate industry with our
								comprehensive training program. Master property valuation, sales
								techniques, legal documentation, and client relationship
								management to build a thriving career as a real estate
								professional.
							</p>{' '}
							<h3 className='text-2xl font-bold text-foreground mb-4 mt-8'>
								What You'll Learn
							</h3>
							<div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-8'>
								{[
									'Property Consulting Skills',
									'Sales & Negotiation Techniques',
									'Market Analysis & Research',
									'Legal Documentation Process',
									'Investment Advisory Basics',
									'Property Valuation Methods',
									'Client Relationship Management',
									'Digital Marketing for Real Estate',
								].map((feature, idx) => (
									<div
										key={idx}
										className='flex items-start gap-3'>
										<CheckCircle2
											className='text-primary mt-1 shrink-0'
											size={20}
										/>
										<span className='text-foreground'>{feature}</span>
									</div>
								))}
							</div>
							<h3 className='text-2xl font-bold text-foreground mb-4 mt-8'>
								Career Opportunities
							</h3>
							<p className='text-muted-foreground mb-4 leading-relaxed'>
								After completing this program, you'll be ready to work as a real
								estate agent, property consultant, or start your own real estate
								business. Our training covers RERA-compliant processes, ensuring
								you understand professional standards and ethical practices in
								the industry.
							</p>
						</div>

						{/* Sidebar */}
						<div className='lg:col-span-1'>
							<div className='bg-card border border-border rounded-2xl p-6 sticky top-24'>
								<h3 className='text-xl font-bold text-foreground mb-6'>
									Program Details
								</h3>

								<div className='space-y-4 mb-8'>
									<div className='flex items-center gap-3'>
										<Clock
											className='text-primary'
											size={20}
										/>
										<div>
											<p className='text-sm text-muted-foreground'>
												Availability
											</p>
											<p className='font-semibold text-foreground'>Ongoing</p>
										</div>
									</div>

									<div className='flex items-center gap-3'>
										<Users
											className='text-primary'
											size={20}
										/>
										<div>
											<p className='text-sm text-muted-foreground'>
												Clients Served
											</p>
											<p className='font-semibold text-foreground'>300+</p>
										</div>
									</div>

									<div className='flex items-center gap-3'>
										<Award
											className='text-primary'
											size={20}
										/>
										<div>
											<p className='text-sm text-muted-foreground'>
												Compliance
											</p>
											<p className='font-semibold text-foreground'>
												RERA Compliant
											</p>
										</div>
									</div>
								</div>

								<Link
									href='/contact'
									className='w-full inline-block text-center bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors'>
									Get Started
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	)
}
