'use client'

import {useState, useEffect} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {Menu, X} from 'lucide-react'

export default function Header() {
	const [isScrolled, setIsScrolled] = useState(false)
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50)
		}
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	const navLinks = [
		{href: '/', label: 'Home'},
		{href: '/about', label: 'About'},
		{href: '/services', label: 'Services'},
		{href: '/blogs', label: 'Blog'},
		{href: '/contact', label: 'Contact'},
	]

	return (
		<header
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				isScrolled
					? 'bg-white/95 backdrop-blur-md border-b border-gray-200'
					: 'bg-transparent'
			}`}>
			<div className='max-w-7xl mx-auto px-6 py-4'>
				<nav className='flex items-center justify-between'>
					<Link
						href='/'
						className='flex items-center gap-3'>
						<Image
							src='/logo-nobg.png'
							alt='Y4U Ultimate Logo'
							width={60}
							height={200}
							className='rounded-lg'
						/>
					</Link>

					{/* Desktop Navigation */}
					<div className='hidden md:flex items-center gap-8'>
						{navLinks.map((link) => (
							<Link
								key={link.href}
								href={link.href}
								className={`${
									isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-blue-600 hover:text-blue-200'
								} transition-colors duration-200 text-sm font-medium tracking-wide uppercase`}>
								{link.label}
							</Link>
						))}
						<Link
							href='/contact'
							className='bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors'>
							Get Started
						</Link>
					</div>

					{/* Mobile Menu Button */}
					<button
						className={`md:hidden ${isScrolled ? 'text-gray-900' : 'text-blue-600'} transition-colors`}
						onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
						aria-label='Toggle menu'>
						{isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
					</button>
				</nav>

				{/* Mobile Navigation */}
				{isMobileMenuOpen && (
					<div className={`md:hidden mt-4 pb-4 border-t ${isScrolled ? 'border-gray-200' : 'border-white/20'} pt-4`}>
						<div className='flex flex-col gap-4'>
							{navLinks.map((link) => (
								<Link
									key={link.href}
									href={link.href}
									className={`${isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'} transition-colors text-sm font-medium`}
									onClick={() => setIsMobileMenuOpen(false)}>
									{link.label}
								</Link>
							))}
							<Link
								href='/contact'
								className='bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-medium text-center hover:bg-blue-700 transition-colors'
								onClick={() => setIsMobileMenuOpen(false)}>
								Get Started
							</Link>
						</div>
					</div>
				)}
			</div>
		</header>
	)
}