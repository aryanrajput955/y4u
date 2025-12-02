'use client'

import {Award, BadgeCheck} from 'lucide-react'

export default function CertificationSection() {
	return (
		<section className='py-28 bg-background'>
			<div className='max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
				{/* LEFT CONTENT */}
				<div className='space-y-6'>
					<span className='text-primary text-sm font-semibold uppercase tracking-wider'>
						Government Certified
					</span>

					<h2 className='text-4xl md:text-5xl font-bold text-foreground leading-tight'>
						Trusted & Certified by the Government of Uttarakhand
					</h2>

					<p className='text-muted-foreground text-lg leading-relaxed'>
						All our training programs, certifications and courses are officially
						recognized by the Uttarakhand Government, ensuring credibility,
						authenticity and value in the real industry and recruitment
						ecosystem.
					</p>

					{/* Benefit Points in grid */}
					<div className='grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4'>
						{[
							'Government-approved certificate',
							'Officially recognized curriculum',
							'Verified & transparent documentation',
							'Placement support & eligibility for government-linked jobs',
						].map((item, i) => (
							<div
								key={i}
								className='flex gap-3 items-start'>
								<BadgeCheck className='text-primary h-6 w-6 shrink-0 mt-1' />
								<p className='text-muted-foreground text-base leading-snug'>
									{item}
								</p>
							</div>
						))}
					</div>
				</div>

				{/* RIGHT SIDE LOGO */}
				<div className='flex justify-center'>
					<div className='bg-card border border-border rounded-3xl shadow-lg p-10 w-[350px] h-[350px] flex items-center justify-center'>
						<img
							src='/logo_ukgovt.png'
							alt='Uttarakhand Government Logo'
							className='w-full h-full object-contain'
						/>
					</div>
				</div>
			</div>
		</section>
	)
}
