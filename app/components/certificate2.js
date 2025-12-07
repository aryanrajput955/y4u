'use client'

import Image from 'next/image'
import { BadgeCheck } from 'lucide-react'

const certificates = [
	{
		title: 'Government Approved Certificate',
		image: '/certificates/c1.jpg',
	},
	{
		title: 'Industry Training Certificate',
		image: '/certificates/c1.jpg',
	},
	{
		title: 'Skill Development Certificate',
		image: '/certificates/c1.jpg',
	},
]

export default function Certificate2() {
	return (
		<section className='py-28 bg-background'>
			<div className='max-w-7xl mx-auto px-6'>
				{/* Heading */}
				<div className='text-center mb-16'>
					<span className='text-primary text-sm font-semibold uppercase tracking-wider'>
						Our Certifications
					</span>

					<h2 className='text-4xl md:text-5xl font-bold text-foreground mt-3'>
						Certifications That Build Trust & Careers
					</h2>

					<p className='text-muted-foreground max-w-2xl mx-auto mt-4'>
						Every student receives verified certificates that are accepted by
						industry and government-recognized bodies.
					</p>
				</div>

				{/* Certificates Grid */}
				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
					{certificates.map((cert, i) => (
						<div
							key={i}
							className='bg-card border border-border rounded-3xl p-6 shadow-sm hover:shadow-xl transition'>
							<div className='relative w-full h-[220px] mb-6 rounded-xl overflow-hidden bg-background'>
								<Image
									src={cert.image}
									alt={cert.title}
									fill
									className='object-contain'
								/>
							</div>

							<div className='flex items-center gap-3'>
								<BadgeCheck className='text-primary w-6 h-6' />
								<h3 className='text-lg font-semibold text-foreground'>
									{cert.title}
								</h3>
							</div>

							<p className='text-muted-foreground text-sm mt-3'>
								Valid across India with real-world industry acceptance.
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
