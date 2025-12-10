'use client'

import {CheckCircle} from 'lucide-react'

export default function AboutUsSection() {
	return (
		<section className='py-24 bg-blue-50/30'>
			<div className='max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
				{/* LEFT SIDE IMAGE + OVERLAY */}
				<div className='relative w-full h-[380px] rounded-3xl overflow-hidden shadow-xl'>
					<img
						src='https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg'
						alt='About Y4U Training'
						className='w-full h-full object-cover'
					/>

					{/* Overlay Card */}
					<div className='absolute bottom-6 left-6 bg-white border border-blue-200 rounded-2xl p-6 shadow-lg'>
						<p className='text-3xl font-bold text-gray-900'>10,000+</p>
						<p className='text-sm text-gray-600'>
							Students Trained Successfully
						</p>
					</div>
				</div>

				{/* RIGHT CONTENT */}
				<div>
					<span className='text-blue-600 text-sm font-semibold uppercase tracking-wider'>
						About Us
					</span>

					<h2 className='text-3xl md:text-4xl font-bold text-gray-900 leading-tight mt-3'>
						Empowering Youth With Real Industry Skills
					</h2>

					<p className='text-gray-600 text-lg leading-relaxed mt-6'>
						We are committed to transforming the way India learns skills. Y4U
						Ultimate Industrial Skill Training Solutions Pvt. Ltd. provides
						practical, affordable, industry-led programs that prepare students
						for real employment — not just theory.
					</p>

					{/* Feature Card */}
					<div className='bg-white border border-blue-200 rounded-2xl p-8 mt-8 shadow-sm'>
						<h3 className='text-xl font-semibold text-gray-900 mb-5'>
							Why Students Choose Us
						</h3>

						<ul className='space-y-4 text-gray-600'>
							{[
								'Placement Support',
								'Affordable training accessible to every Indian youth',
								'Training using real machines, IT labs & hospitality setups',
								'100% practical and job-role focused learning',
								'Programs developed by experienced corporate mentors',
								'Career paths across Industrial, IT, Tourism, Real Estate & more',
							].map((item, index) => (
								<li
									key={index}
									className='flex gap-3 items-start'>
									<CheckCircle
										className={`${
											index % 2 === 0 ? 'text-blue-600' : 'text-green-600'
										} h-5 w-5 shrink-0`}
									/>
									{item}
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</section>
	)
}
