'use client'

import Link from 'next/link'
import {ArrowRight} from 'lucide-react'

export default function CTASection() {
	return (
		<section className='py-12 bg-gradient-to-b from-blue-50 to-cyan-50'>
			<div className='max-w-7xl mx-auto px-6'>
				<div className='relative rounded-2xl bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-600 p-8 md:p-12 lg:p-16 text-center shadow-lg overflow-hidden'>
					<div className='relative z-10'>
						<div className='inline-block mb-4'>
							<span className='inline-flex items-center gap-2 px-3 py-1.5 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white text-sm font-medium'>
								Limited Seats Available
							</span>
						</div>
						
						<h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight'>
							Transform Your Career Today
						</h2>
						
						<p className='text-white/90 text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed font-medium'>
							Join thousands of professionals advancing their skills with industry-leading training programs designed for real-world success.
						</p>
						
						<div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
							<Link
								href='/contact'
								className='group inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-full font-semibold text-base hover:bg-cyan-50 transition-colors duration-300 shadow-md hover:shadow-lg'>
								Get Started Now
								<ArrowRight size={18} className='group-hover:translate-x-1 transition-transform' />
							</Link>

							<Link
								href='/services'
								className='group inline-flex items-center gap-2 border-2 border-white/80 text-white px-8 py-3 rounded-full font-semibold text-base hover:bg-white/10 transition-colors duration-300 shadow-md hover:shadow-lg'>
								Explore Programs
								<ArrowRight size={18} className='group-hover:translate-x-1 transition-transform' />
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}