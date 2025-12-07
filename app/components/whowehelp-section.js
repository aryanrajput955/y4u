'use client'

import {
	Users,
	GraduationCap,
	BadgeCheck,
	Briefcase,
	Handshake,
} from 'lucide-react'

export default function WhoWeHelpSection() {
	return (
		<section className='py-28 bg-background'>
			<div className='max-w-7xl mx-auto px-6 text-center space-y-8'>
				<span className='text-primary text-sm font-semibold uppercase tracking-wider'>
					Who We Help
				</span>

				<h2 className='text-4xl md:text-5xl font-bold text-foreground leading-tight max-w-4xl mx-auto'>
					Empowering Students, Professionals & Industries to Grow With Real
					Skills
				</h2>

				<p className='text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto'>
					We support individuals at every stage of their education and
					career—helping them gain real industry experience, improve
					employability, and build successful futures. Whether you’re starting
					your journey, advancing your skills, or looking for industry
					collaboration, we are here to help you grow.
				</p>

				{/* Cards */}
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 pt-6'>
					{[
						{
							icon: <GraduationCap className='h-8 w-8 text-primary' />,
							title: 'ITI Students',
						},
						{
							icon: <Users className='h-8 w-8 text-primary' />,
							title: 'Diploma & Bachelor Students',
						},
						{
							icon: <BadgeCheck className='h-8 w-8 text-primary' />,
							title: 'Freshers & Job Seekers',
						},
						{
							icon: <Briefcase className='h-8 w-8 text-primary' />,
							title: 'Upskilling Professionals',
						},
						{
							icon: <Handshake className='h-8 w-8 text-primary' />,
							title: 'Industry Collaborators',
						},
					].map((item, i) => (
						<div
							key={i}
							className='bg-card border border-border rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 text-center flex flex-col items-center gap-4'>
							<div className='bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center'>
								{item.icon}
							</div>
							<h3 className='text-lg font-semibold text-foreground'>
								{item.title}
							</h3>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
