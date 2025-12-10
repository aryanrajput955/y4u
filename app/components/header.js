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
						? 'backdrop-blur-xl bg-[rgba(15,52,67,0.55)] shadow-md border-b border-[rgba(255,255,255,0.15)]'
						: 'backdrop-blur-lg bg-[rgba(15,52,67,0.45)]'
				}
			`}>
			<div className='max-w-7xl mx-auto px-6 py-4'>
				<nav className='flex items-center justify-between'>
					{/* LOGO */}
					<Link
						href='/'
						className='flex items-center gap-3'>
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
										group relative text-sm font-medium transition-all duration-300
										${isActive ? 'text-[#76e0ff]' : 'text-white/90 hover:text-[#76e0ff]'}
									`}>
									{link.label}

									{/* underline */}
									<span
										className={`
											absolute left-0 -bottom-1 h-[2px] bg-[#76e0ff] rounded-full transition-all duration-300
											${isActive ? 'w-full' : 'w-0 group-hover:w-full'}
										`}></span>
								</Link>
							)
						})}

						{/* CTA BUTTON */}
						<Link
							href='/contact'
							className='bg-[#1eaac5] text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#1593a8] transition-all shadow-md'>
							Get Started
						</Link>
					</div>

					{/* MOBILE MENU BUTTON */}
					<button
						className='md:hidden text-white'
						onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
						{isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
					</button>
				</nav>

				{/* MOBILE NAV */}
				{isMobileMenuOpen && (
					<div className='md:hidden mt-4 pb-4 border-t border-white/20 pt-4'>
						<div className='flex flex-col gap-4'>
							{navLinks.map((link) => {
								const isActive = pathname === link.href
								return (
									<Link
										key={link.href}
										href={link.href}
										className={`
											text-sm font-medium transition-all
											${isActive ? 'text-[#76e0ff]' : 'text-white hover:text-[#76e0ff]'}
										`}
										onClick={() => setIsMobileMenuOpen(false)}>
										{link.label}
									</Link>
								)
							})}

							<Link
								href='/contact'
								className='bg-[#1eaac5] text-white px-5 py-2.5 rounded-full text-sm font-medium text-center hover:bg-[#1593a8] transition-all shadow-md'
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
