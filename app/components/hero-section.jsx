'use client'

import {useEffect, useState} from 'react'
import Link from 'next/link'
import {motion} from 'framer-motion'
import {ArrowRight, Play} from 'lucide-react'

export default function HeroSection() {
	const [mousePos, setMousePos] = useState({x: 0, y: 0})

	useEffect(() => {
		const move = (e) => setMousePos({x: e.clientX, y: e.clientY})
		window.addEventListener('mousemove', move)
		return () => window.removeEventListener('mousemove', move)
	}, [])

	return (
		<section className='relative min-h-screen flex items-center justify-center bg-white px-4 sm:px-6 pt-[100px] sm:pt-[120px] overflow-hidden'>
			{/* Background Video */}
			<video
				autoPlay
				loop
				muted
				playsInline
				className='absolute inset-0 w-full h-full object-cover'>
				<source
					src='/bgvideo-hero.mp4'
					type='video/mp4'
				/>
			</video>

			{/* Dark overlay for readability */}
			<div className='absolute inset-0 bg-black/60' />

			{/* Spotlight */}
			<div
				className='pointer-events-none absolute inset-0'
				style={{
					background: `radial-gradient(500px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0,130,255,0.10), transparent 70%)`,
				}}
			/>

			<motion.div
				className='relative z-10 max-w-6xl mx-auto text-center'
				initial='hidden'
				animate='visible'
				variants={{hidden: {}, visible: {transition: {staggerChildren: 0.15}}}}>
				{/* Badge */}
				<motion.div
					variants={fadeUp}
					className='inline-flex items-center gap-2 px-4 md:px-5 py-2 mb-4 md:mb-6 bg-blue-50 border border-blue-100 rounded-full'>
					<span className='w-2 h-2 rounded-full bg-blue-600 animate-pulse' />
					<span className='text-blue-700 text-sm font-medium'>
						India's Most Affordable Skill Training
					</span>
				</motion.div>

				{/* Title */}
				<motion.h1
					variants={fadeUp}
					className='text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight'>
					Skill Training That Leads To
					<br />
					<span className='text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-blue-200'>
						Real Employment
					</span>
				</motion.h1>

				{/* Subtext */}
				<motion.p
					variants={fadeUp}
					className='text-base md:text-lg text-gray-200 max-w-2xl mx-auto mt-4 md:mt-6 mb-8 md:mb-10 px-4 md:px-0'>
					Y4U Ultimate trains youth in Industrial Skills, IT, Tourism, Digital
					Marketing, Real Estate, and Manpower development—taught by real
					industry professionals.
				</motion.p>

				{/* Buttons */}
				<motion.div
					variants={fadeUp}
					className='flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center px-4 md:px-0'>
					<Link
						href='/contact'
						className='inline-flex items-center gap-3 bg-blue-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-medium hover:bg-blue-700 transition text-sm md:text-base'>
						Start Training
						<ArrowRight size={18} />
					</Link>

					<button className='inline-flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition text-white text-sm md:text-base'>
						<span className='w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center'>
							<Play
								size={16}
								className='text-blue-600'
							/>
						</span>
						Watch Introduction
					</button>
				</motion.div>

				{/* Stats */}
				<motion.div
					variants={fadeUp}
					className='grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 mt-12 md:mt-20 pt-8 md:pt-10 border-t border-white/20'>
					{[
						{value: '15+', label: 'Years of Experience'},
						{value: '20,000+', label: 'Students Trained'},
						{value: '35+', label: 'Courses Offered'},
						{value: '97%', label: 'Placement Success'},
					].map((s, i) => (
						<div
							key={i}
							className='text-center'>
							<div className='text-2xl md:text-4xl font-bold text-white'>
								{s.value}
							</div>
							<div className='text-gray-200 text-xs md:text-sm mt-1'>
								{s.label}
							</div>
						</div>
					))}
				</motion.div>
			</motion.div>
		</section>
	)
}

const fadeUp = {
	hidden: {opacity: 0, y: 20},
	visible: {opacity: 1, y: 0, transition: {duration: 0.7}},
}
