'use client'

import {useState} from 'react'
import {Award, ShieldCheck, X} from 'lucide-react'
import Image from 'next/image'

const trustDocs = [
	{
		title: 'ISO Certified Quality Management',
		image: '/certificates/Certificate-of-Registration.jpg', // your ISO certificate image
		badge: Award,
		description:
			'Our institute operates under ISO 9001:2015, ISO 29990:2010 & ISO 21001:2018 certified quality and education management systems through private accreditation.',
	},
	{
		title: 'Authorized Study Center – E-MAX India',
		image: '/certificates/Certificate-of-Authorisation.jpg', // your welcome letter image
		badge: ShieldCheck,
		description:
			'Y4U Ultimate (V4U Group UK India) is an officially authorized study and training center of Education Maximum Pvt. Ltd. (E-MAX India).',
	},
]

export default function LandingTrustCertificates() {
	const [activeDoc, setActiveDoc] = useState(null)

	return (
		<section className='py-24 bg-blue-50/30'>
			<div className='max-w-7xl mx-auto px-6'>
				{/* Heading */}
				<div className='text-center mb-16'>
					<span className='text-blue-600 text-sm font-semibold uppercase'>
						Trust & Recognition
					</span>

					<h2 className='text-3xl md:text-4xl font-bold text-gray-900 mt-3'>
						Our Certifications & Authorizations
					</h2>

					<p className='text-gray-600 max-w-2xl mx-auto mt-4'>
						We operate under private ISO-certified quality standards and
						official authorization as a vocational & I.T. training center.
					</p>
				</div>

				{/* Two Cards */}
				<div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
					{trustDocs.map((doc, index) => {
						const Icon = doc.badge
						return (
							<div
								key={index}
								className={`group p-8 rounded-2xl bg-white border ${
									index === 0
										? 'border-blue-200 hover:border-blue-500'
										: 'border-green-200 hover:border-green-500'
								} transition shadow-sm hover:shadow-lg`}>
								<div
									className={`w-14 h-14 rounded-xl ${
										index === 0 ? 'bg-blue-100' : 'bg-green-100'
									} flex items-center justify-center mb-6`}>
									<Icon
										className={`w-7 h-7 ${
											index === 0 ? 'text-blue-600' : 'text-green-600'
										}`}
									/>
								</div>
								<h3 className='text-xl font-semibold text-gray-900 mb-6'>
									{doc.title}
								</h3>

								<p className='text-gray-600 text-sm leading-relaxed mb-6'>
									{doc.description}
								</p>

								{/* Image Preview */}
								<div
									onClick={() => setActiveDoc(doc)}
									className={`relative w-full h-[260px] rounded-2xl overflow-hidden bg-gray-50 border ${
										index === 0 ? 'border-blue-200' : 'border-green-200'
									} cursor-pointer group`}>
									<Image
										src={doc.image}
										alt={doc.title}
										fill
										className='object-contain group-hover:scale-105 transition'
									/>
									<div className='absolute inset-0 bg-black/0 group-hover:bg-black/20 transition flex items-center justify-center'>
										<span className='opacity-0 group-hover:opacity-100 text-white text-sm font-medium'>
											Click to View Full Document
										</span>
									</div>
								</div>
							</div>
						)
					})}
				</div>

				{/* Small Legal Note */}
				<div className='mt-10 text-center text-xs text-gray-600 max-w-3xl mx-auto'>
					Both documents shown are issued by private organizations and do not
					constitute recognition by the Government of India or statutory
					education authorities.
				</div>
			</div>

			{/* FULL SCREEN PREVIEW MODAL */}
			{activeDoc && (
				<div className='fixed inset-0 z-999 bg-black/80 backdrop-blur-sm flex items-center justify-center px-4'>
					<button
						onClick={() => setActiveDoc(null)}
						className='absolute top-6 right-6 bg-white border border-gray-300 rounded-full p-2 hover:bg-blue-600 hover:text-white transition'>
						<X size={20} />
					</button>

					<div className='bg-white rounded-2xl p-6 max-w-5xl w-full shadow-2xl'>
						<h3 className='text-xl font-semibold text-gray-900 mb-4 text-center'>
							{activeDoc.title}
						</h3>

						<div className='relative w-full h-[75vh] rounded-xl overflow-hidden bg-gray-50'>
							<Image
								src={activeDoc.image}
								alt={activeDoc.title}
								fill
								className='object-contain'
							/>
						</div>
					</div>
				</div>
			)}
		</section>
	)
}
