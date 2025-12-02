'use client'

import React, {useState, useEffect} from 'react'
import {ChevronLeft, ChevronRight} from 'lucide-react'

export default function SliderSection() {
	const [currentSlide, setCurrentSlide] = useState(0)

	const slides = [
		{
			image:
				'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1920&h=1080&fit=crop&auto=format',
			title: 'Uttarakhand Tourism Training',
			subtitle: 'Building careers in hospitality & tourism',
			cta: 'Explore Programs',
		},
		{
			image:
				'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=1920&h=1080&fit=crop&auto=format',
			title: 'Industrial Training Excellence',
			subtitle: 'Hands-on training for real jobs',
			cta: 'Start Learning',
		},
		{
			image:
				'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&h=1080&fit=crop&auto=format',
			title: 'IT Services & Solutions',
			subtitle: 'Transform your business digitally',
			cta: 'Get Started',
		},
		{
			image:
				'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1920&h=1080&fit=crop&auto=format',
			title: 'Skilled Manpower Solutions',
			subtitle: 'Connecting talent with opportunity',
			cta: 'Find Talent',
		},
	]

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentSlide((prev) => (prev + 1) % slides.length)
		}, 5000)
		return () => clearInterval(timer)
	}, [slides.length])

	const goToSlide = (index) => {
		setCurrentSlide(index)
	}

	const nextSlide = () => {
		setCurrentSlide((prev) => (prev + 1) % slides.length)
	}

	const prevSlide = () => {
		setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
	}

	return (
		<div className='relative w-full h-[600px] overflow-hidden bg-gray-900'>
			{slides.map((slide, index) => (
				<div
					key={index}
					className={`absolute inset-0 transition-opacity duration-1000 ${
						index === currentSlide ? 'opacity-100' : 'opacity-0'
					}`}>
					<img
						src={slide.image}
						alt={slide.title}
						className='w-full h-full object-cover'
					/>
					<div className='absolute inset-0 bg-linear-to-r from-black/70 via-black/50 to-transparent' />

					<div className='absolute inset-0 flex items-center'>
						<div className='max-w-7xl mx-auto px-6 w-full'>
							<div className='max-w-2xl'>
								<h1 className='text-5xl md:text-6xl font-bold text-white mb-4 animate-fade-in'>
									{slide.title}
								</h1>
								<p className='text-xl md:text-2xl text-gray-200 mb-8 animate-fade-in-delay'>
									{slide.subtitle}
								</p>
								<button className='bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-semibold transition-all hover:scale-105 animate-fade-in-delay-2'>
									{slide.cta}
								</button>
							</div>
						</div>
					</div>
				</div>
			))}

			{/* Navigation Arrows */}
			<button
				onClick={prevSlide}
				className='absolute left-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all z-10'>
				<ChevronLeft className='w-6 h-6' />
			</button>
			<button
				onClick={nextSlide}
				className='absolute right-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all z-10'>
				<ChevronRight className='w-6 h-6' />
			</button>

			{/* Dots Navigation */}
			<div className='absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10'>
				{slides.map((_, index) => (
					<button
						key={index}
						onClick={() => goToSlide(index)}
						className={`transition-all ${
							index === currentSlide
								? 'w-12 h-3 bg-white'
								: 'w-3 h-3 bg-white/50 hover:bg-white/70'
						} rounded-full`}
					/>
				))}
			</div>

			<style jsx>{`
				@keyframes fade-in {
					from {
						opacity: 0;
						transform: translateY(20px);
					}
					to {
						opacity: 1;
						transform: translateY(0);
					}
				}

				.animate-fade-in {
					animation: fade-in 0.8s ease-out;
				}

				.animate-fade-in-delay {
					animation: fade-in 0.8s ease-out 0.2s both;
				}

				.animate-fade-in-delay-2 {
					animation: fade-in 0.8s ease-out 0.4s both;
				}
			`}</style>
		</div>
	)
}
