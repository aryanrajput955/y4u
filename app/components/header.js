'use client'

import {useState, useEffect} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {Menu, X} from 'lucide-react'
import {usePathname} from 'next/navigation'

export default function Header() {
	const [isScrolled, setIsScrolled] = useState(false)
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
	const pathname = usePathname()

	useEffect(() => {
		const handleScroll = () => setIsScrolled(window.scrollY > 10)
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
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
				${
					isScrolled
						? 'backdrop-blur-lg bg-[rgba(219,234,254,0.95)] shadow-lg shadow-blue-200/50 border-b border-blue-300/60'
						: 'backdrop-blur-md bg-[rgba(224,242,254,0.90)]'
				}
			`}>
			<div className='max-w-7xl mx-auto px-6 py-4'>
				<nav className='flex items-center justify-between'>
					{/* LOGO */}
					<Link
						href='/'
						className='flex items-center gap-3 transition-transform duration-300 hover:scale-105'>
						<Image
							src='/logo.png'
							alt='Y4U Logo'
							width={110}
							height={200}
						/>
					</Link>

					{/* DESKTOP NAV */}
					<div className='hidden md:flex items-center gap-8'>
						{navLinks.map((link) => {
							const isActive = pathname === link.href
							return (
								<Link
									key={link.href}
									href={link.href}
									className={`
										group relative text-sm font-semibold tracking-wide transition-all duration-300
										${isActive ? 'text-blue-700' : 'text-blue-900 hover:text-blue-600'}
									`}>
									{link.label}

									{/* underline */}
									<span
										className={`
											absolute left-0 -bottom-1 h-[2px] bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full transition-all duration-300
											${isActive ? 'w-full' : 'w-0 group-hover:w-full'}
										`}></span>
								</Link>
							)
						})}

						{/* CTA BUTTON */}
						<Link
							href='/contact'
							className='bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:from-blue-700 hover:to-cyan-700 hover:shadow-lg hover:shadow-blue-400/30 transition-all duration-300 hover:scale-105'>
							Get Started
						</Link>
					</div>

					{/* MOBILE MENU BUTTON */}
					<button
						className='md:hidden text-blue-900 hover:text-blue-700 transition-colors duration-200'
						onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
						{isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
					</button>
				</nav>

				{/* MOBILE NAV */}
				{isMobileMenuOpen && (
					<div className='md:hidden mt-4 pb-4 border-t border-blue-300/60 pt-4'>
						<div className='flex flex-col gap-4'>
							{navLinks.map((link) => {
								const isActive = pathname === link.href
								return (
									<Link
										key={link.href}
										href={link.href}
										className={`
											text-sm font-semibold tracking-wide transition-all duration-300
											${isActive ? 'text-blue-700' : 'text-blue-900 hover:text-blue-600'}
										`}
										onClick={() => setIsMobileMenuOpen(false)}>
										{link.label}
									</Link>
								)
							})}

							<Link
								href='/contact'
								className='bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold text-center hover:from-blue-700 hover:to-cyan-700 hover:shadow-lg hover:shadow-blue-400/30 transition-all duration-300'
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