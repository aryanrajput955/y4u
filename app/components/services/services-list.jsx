'use client'

import Image from 'next/image'
import {Clock, Users, Award, ArrowRight} from 'lucide-react'
import Link from 'next/link'

const services = [
	{
		id: 1,
		title: 'Uttarakhand Tourism',
		slug: 'uttarakhand-tourism',
		description:
			"Comprehensive hospitality training programs tailored for Uttarakhand's thriving tourism industry. Train your staff in world-class hotel and resort management practices.",
		duration: '8-12 Weeks',
		students: '500+',
		certification: 'NSDC Certified',
		image:
			'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&h=600&fit=crop&auto=format',
		features: [
			'Hotel Management',
			'Front Desk Operations',
			'Housekeeping Standards',
			'Guest Relations',
		],
	},
	{
		id: 2,
		title: 'Labour Contractor & Staff Manpower',
		slug: 'labour-contractor-staff-manpower',
		description:
			'Professional recruitment and manpower solutions for industries across sectors. We provide skilled, semi-skilled, and unskilled workforce tailored to your business needs.',
		duration: 'On-Demand',
		students: '1000+',
		certification: 'Verified & Trained',
		image:
			'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop&auto=format',
		features: [
			'Skilled Labour Supply',
			'Background Verification',
			'Payroll Management',
			'Compliance Support',
		],
	},
	{
		id: 3,
		title: 'IT Services',
		slug: 'it-services',
		description:
			'Complete digital solutions to elevate your business online. From custom websites to mobile apps, we deliver cutting-edge technology solutions that drive growth and engagement.',
		duration: 'Project-Based',
		students: '200+',
		certification: 'Industry Standard',
		image:
			'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&auto=format',
		features: [
			'Web Development',
			'UI/UX Design',
			'Mobile App Dev',
			'E-commerce Development',
		],
	},
	{
		id: 4,
		title: 'Industrial Training',
		slug: 'industrial-training',
		description:
			'Hands-on training with real factory equipment and experienced mentors. Prepare your workforce for modern manufacturing with industry-aligned skill development programs.',
		duration: '6-12 Weeks',
		students: '800+',
		certification: 'NSDC Certified',
		image:
			'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800&h=600&fit=crop&auto=format',
		features: [
			'CNC Machine Operation',
			'Industrial Automation',
			'Quality Control',
			'Safety Protocols',
		],
	},
	{
		id: 5,
		title: 'Real Estate',
		slug: 'real-estate',
		description:
			'Professional real estate services including property consulting, sales training, and market analysis. Connect buyers with their dream properties and grow your real estate business.',
		duration: 'Ongoing',
		students: '300+',
		certification: 'RERA Compliant',
		image:
			'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop&auto=format',
		features: [
			'Property Consulting',
			'Sales Training',
			'Market Analysis',
			'Legal Documentation',
		],
	},
]

export default function ServicesList() {
	return (
		<section className='py-20 bg-card'>
			<div className='max-w-7xl mx-auto px-6'>
				<div className='space-y-16'>
					{services.map((service, index) => (
						<Link
							key={service.id}
							href={`/services/${service.slug}`}
							className='block group cursor-pointer'>
							<div
								className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
									index % 2 === 1 ? 'lg:flex-row-reverse' : ''
								}`}>
								<div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
									<div className='relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden'>
										<Image
											src={service.image || '/placeholder.svg'}
											alt={service.title}
											fill
											className='object-cover'
										/>
										<div className='absolute inset-0 bg-linear-to-t from-background/30 via-transparent to-transparent' />
										<div className='absolute bottom-4 left-4 flex gap-2'>
											<span className='bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full'>
												{service.certification}
											</span>
										</div>
									</div>
								</div>

								<div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
									<h3 className='text-2xl md:text-3xl font-bold text-foreground mb-4'>
										{service.title}
									</h3>
									<p className='text-muted-foreground leading-relaxed mb-6'>
										{service.description}
									</p>

									<div className='flex flex-wrap gap-4 mb-6'>
										<div className='flex items-center gap-2 text-sm text-muted-foreground'>
											<Clock
												size={16}
												className='text-primary'
											/>
											{service.duration}
										</div>
										<div className='flex items-center gap-2 text-sm text-muted-foreground'>
											<Users
												size={16}
												className='text-primary'
											/>
											{service.students} Served
										</div>
										<div className='flex items-center gap-2 text-sm text-muted-foreground'>
											<Award
												size={16}
												className='text-primary'
											/>
											{service.certification}
										</div>
									</div>

									<div className='flex flex-wrap gap-2 mb-8'>
										{service.features.map((feature, idx) => (
											<span
												key={idx}
												className='bg-background border border-border text-muted-foreground text-xs px-3 py-1.5 rounded-full'>
												{feature}
											</span>
										))}
									</div>

									<div className='inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all'>
										Learn more about this service
										<ArrowRight size={18} />
									</div>
								</div>
							</div>
						</Link>
					))}
				</div>
			</div>
		</section>
	)
}
