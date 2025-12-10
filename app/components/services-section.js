import React from 'react'
import {ArrowRight, Factory, Globe, Briefcase} from 'lucide-react'

export default function ServicesSection() {
	const services = [
		{
			icon: <Factory className='w-8 h-8' />,
			title: 'Industrial Training',
			description:
				'Practical training with real factory equipment and experienced mentors.',
			image:
				'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800&h=600&fit=crop&auto=format',
			subServices: [
				'CNC Machine Operation',
				'Industrial Automation',
				'Quality Control & Testing',
				'Manufacturing Processes',
			],
			color: 'bg-blue-50',
			iconColor: 'text-blue-600',
		},
		{
			icon: <Globe className='w-8 h-8' />,
			title: 'Uttarakhand Tourism',
			description:
				'Hotel, resort & tourism skill programs for Uttarakhand industry.',
			image:
				'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&h=600&fit=crop&auto=format',
			subServices: [
				'Hotel Management',
				'Tour Guide Training',
				'Hospitality Services',
				'Resort Operations',
			],
			color: 'bg-green-50',
			iconColor: 'text-green-600',
		},
		{
			icon: <Briefcase className='w-8 h-8' />,
			title: 'IT Services',
			description:
				'Digital solutions to help your business grow and succeed online.',
			image:
				'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&auto=format',
			subServices: [
				'Web Development',
				'UI/UX Design',
				'Mobile App Dev',
				'E-commerce Development',
			],
			color: 'bg-gradient-to-br from-blue-50 to-green-50',
			iconColor: 'text-blue-600',
		},
	]

	return (
		<section className='py-16 px-4 bg-white'>
			<div className='max-w-7xl mx-auto'>
				<div className='text-center mb-12'>
					<p className='text-blue-600 font-semibold mb-2 uppercase tracking-wide text-sm'>
						Training & Learning Opportunities
					</p>
					<h1 className='text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6 leading-tight text-balance animate-fade-in-up'>
						Comprehensive{' '}
						<span className='text-primary'>Training Programs</span>
					</h1>
					<p className='text-gray-600 max-w-2xl mx-auto'>
						Empower your career with our specialized training programs in CNC
						machining, automation, and industrial skills. Transform your
						potential into expertise through hands-on learning and
						industry-focused education.
					</p>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-10'>
					{services.map((service, index) => (
						<div
							key={index}
							className='border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300'>
							<div className='relative h-48 bg-gray-200'>
								<img
									src={service.image}
									alt={service.title}
									className='w-full h-full object-cover'
								/>
							</div>

							<div className='p-8'>
								<div
									className={`${service.color} w-16 h-16 rounded-xl flex items-center justify-center ${service.iconColor} mb-6`}>
									{service.icon}
								</div>

								<h3 className='text-xl font-bold text-gray-900 mb-3'>
									{service.title}
								</h3>

								<p className='text-gray-600 mb-6'>{service.description}</p>

								<div className='space-y-2 mb-6'>
									{service.subServices.map((subService, idx) => (
										<div
											key={idx}
											className='flex items-start'>
											<div className='w-1.5 h-1.5 rounded-full bg-green-600 mt-2 mr-3 shrink-0'></div>
											<span className='text-sm text-gray-700'>
												{subService}
											</span>
										</div>
									))}
								</div>

								<button className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600 font-semibold text-sm hover:gap-2 transition-all flex items-center gap-1 group'>
									Learn More
									<ArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform text-green-600' />
								</button>
							</div>
						</div>
					))}
				</div>

				<div className='text-center'>
					<a
						href='/services'
						className='inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-green-500 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-600 hover:to-green-600 transition-colors'>
						View All Services
						<ArrowRight className='w-5 h-5' />
					</a>
				</div>
			</div>
		</section>
	)
}
