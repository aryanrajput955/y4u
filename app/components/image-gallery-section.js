'use client'

import React, {useState} from 'react'

export default function ImageGallerySection() {
	const [selectedImage, setSelectedImage] = useState(null)

	const galleryImages = [
		// STUDENTS (3)
		{
			id: 1,
			url: '/t1.jpg',
			title: 'Practical Training',
			category: 'Student Training',
		},
		{
			id: 2,
			url: '/t3.jpg',
			title: 'Hands-on Workshop Session',
			category: 'Student Training',
		},
		{
			id: 3,
			url: '/t2.jpg',
			title: 'Classroom + Lab Learning',
			category: 'Student Training',
		},

		// PARTNER COMPANIES (2)
		{
			id: 4,
			url: '/c1.jpg',
			title: 'pharmaceutical Company ',
			category: 'Partner Company',
		},
		{
			id: 5,
			url: '/c2.jpg',
			title: 'Manufacturing Partner Unit',
			category: 'Partner Company',
		},

		// INDUSTRY / MACHINERY (1)
		{
			id: 6,
			url: '/c3.jpg',
			title: 'Steel Company',
			category: 'partner company',
		},
	]

	return (
		<div className='bg-gray-50 py-16 px-4'>
			<div className='max-w-7xl mx-auto'>
				{/* Header */}
				<div className='text-center mb-12'>
					<p className='text-blue-500 font-semibold text-sm uppercase tracking-wide mb-2'>
						OUR GALLERY
					</p>
					<h2 className='text-4xl font-bold text-gray-900 mb-4'>
						Training In Action
					</h2>
					<p className='text-gray-600 max-w-2xl mx-auto'>
						Take a look at our state-of-the-art facilities, training sessions,
						and success stories from our programs.
					</p>
				</div>

				{/* Gallery Grid */}
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
					{galleryImages.map((image) => (
						<div
							key={image.id}
							className='group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer bg-white'
							onClick={() => setSelectedImage(image)}>
							<div className='aspect-4/3 overflow-hidden'>
								<img
									src={image.url}
									alt={image.title}
									className='w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300'
								/>
							</div>

							{/* Overlay */}
							<div className='absolute inset-0 bg-linear-to-t from-gray-900 via-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
								<div className='absolute bottom-0 left-0 right-0 p-6'>
									<span
										className={`inline-block px-3 py-1 ${
											image.id % 2 === 0 ? 'bg-green-500' : 'bg-blue-500'
										} text-white text-xs font-semibold rounded-full mb-2`}>
										{image.category}
									</span>
									<h3 className='text-white font-bold text-xl'>
										{image.title}
									</h3>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* View All Button */}
				<div className='text-center mt-12'>
					<button className='inline-flex items-center px-8 py-3 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 cursor-pointer transition-colors duration-300 shadow-md hover:shadow-lg'>
						View All Photos
						<svg
							className='w-5 h-5 ml-2'
							fill='none'
							stroke='currentColor'
							viewBox='0 0 24 24'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M17 8l4 4m0 0l-4 4m4-4H3'
							/>
						</svg>
					</button>
				</div>
			</div>

			{/* Lightbox Modal */}
			{selectedImage && (
				<div
					className='fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4'
					onClick={() => setSelectedImage(null)}>
					<button
						className='absolute top-4 right-4 text-white hover:text-gray-300 transition-colors'
						onClick={() => setSelectedImage(null)}>
						<svg
							className='w-8 h-8'
							fill='none'
							stroke='currentColor'
							viewBox='0 0 24 24'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M6 18L18 6M6 6l12 12'
							/>
						</svg>
					</button>

					<div
						className='max-w-4xl w-full'
						onClick={(e) => e.stopPropagation()}>
						<img
							src={selectedImage.url}
							alt={selectedImage.title}
							className='w-full h-auto rounded-lg shadow-2xl'
						/>
						<div className='mt-4 text-center'>
							<span
								className={`inline-block px-3 py-1 ${
									selectedImage.id % 2 === 0 ? 'bg-green-500' : 'bg-blue-500'
								} text-white text-xs font-semibold rounded-full mb-2`}>
								{selectedImage.category}
							</span>
							<h3 className='text-white font-bold text-2xl'>
								{selectedImage.title}
							</h3>
						</div>
					</div>
				</div>
			)}
		</div>
	)
}
