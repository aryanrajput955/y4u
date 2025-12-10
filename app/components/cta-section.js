'use client'

import Link from 'next/link'
import {ArrowRight} from 'lucide-react'

export default function CTASection() {
	return (
		<section className='py-24 bg-white'>
			<div className='max-w-7xl mx-auto px-6'>
				<div className='relative rounded-3xl bg-linear-to-br from-blue-50 via-white to-blue-100 border border-blue-200 p-12 md:p-16 text-center shadow-sm'>
					<div className='absolute inset-0 opacity-15 dot-pattern' />{' '}
					<h2 className='text-4xl font-bold text-gray-900 mb-6'>
						Ready To Upgrade Your Future?
					</h2>
					<p className='text-gray-600 text-lg max-w-2xl mx-auto mb-10'>
						Join thousands of students who started their careers through Y4U’s
						industry-backed training programs—100% practical & affordable.
					</p>
					<div className='flex flex-col sm:flex-row gap-4 justify-center'>
						<Link
							href='/contact'
							className='inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full font-medium hover:bg-blue-700 transition'>
							Enroll Now
							<ArrowRight size={18} />
						</Link>

						<Link
							href='/services'
							className='inline-flex items-center gap-2 border border-green-500 text-green-700 px-8 py-4 rounded-full hover:bg-green-50 transition'>
							Explore Programs
						</Link>
					</div>
				</div>
			</div>
		</section>
	)
}
