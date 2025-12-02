'use client'

import {Target, Rocket} from 'lucide-react'

export default function VisionSection() {
	return (
		<section className='py-28 bg-background'>
			<div className='max-w-7xl mx-auto px-6 text-center'>
				<span className='text-primary text-sm font-semibold uppercase tracking-wider'>
					Our Vision & Mission
				</span>

				<h2 className='text-4xl md:text-5xl font-bold text-foreground mt-3 mb-14'>
					Driving Growth Through Skills, Innovation & Opportunity
				</h2>

				<div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
					{/* Vision Card */}
					<div className='bg-card border border-border rounded-3xl p-10 shadow-md hover:shadow-xl transition-all duration-300 text-left'>
						<div className='w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6'>
							<Target className='w-8 h-8 text-primary' />
						</div>

						<h3 className='text-2xl md:text-3xl font-semibold text-foreground mb-4'>
							Our Vision
						</h3>

						<p className='text-muted-foreground text-lg leading-relaxed'>
							To empower India’s youth with practical skills and industry
							exposure, enabling them to build successful careers and contribute
							to a stronger, skilled and globally competitive nation.
						</p>
					</div>

					{/* Mission Card */}
					<div className='bg-card border border-border rounded-3xl p-10 shadow-md hover:shadow-xl transition-all duration-300 text-left'>
						<div className='w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6'>
							<Rocket className='w-8 h-8 text-primary' />
						</div>

						<h3 className='text-2xl md:text-3xl font-semibold text-foreground mb-4'>
							Our Mission
						</h3>

						<p className='text-muted-foreground text-lg leading-relaxed'>
							To deliver real, hands-on, job-ready training accessible to every
							Indian— backed by industry professionals, modern training
							facilities and strong career placement support across multiple
							sectors.
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}
