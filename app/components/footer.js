import Link from 'next/link'
import Image from 'next/image'
import {
	Mail,
	Phone,
	MapPin,
	Linkedin,
	Facebook,
	Instagram,
	Youtube,
} from 'lucide-react'

export default function Footer() {
	return (
		<footer className='bg-card border-t border-border'>
			<div className='max-w-7xl mx-auto px-6 py-16'>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12'>
					{/* Brand */}
					<div className='space-y-4'>
						<div className='flex items-center gap-3'>
							<Image
								src='/logo-nobg.png'
								alt='Y4U Ultimate Logo'
								width={65}
								height={55}
								className='rounded-lg'
							/>
						</div>
						<p className='text-muted-foreground text-sm leading-relaxed'>
							Empowering Skills, Building Futures. Superior skill-based learning
							for future-ready professionals.
						</p>
					</div>

					{/* Quick Links */}
					<div>
						<h4 className='text-foreground font-semibold mb-4 text-sm uppercase tracking-wider'>
							Quick Links
						</h4>
						<ul className='space-y-3'>
							{['Home', 'About', 'Services', 'Contact'].map((link) => (
								<li key={link}>
									<Link
										href={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
										className='text-muted-foreground hover:text-primary transition-colors text-sm'>
										{link}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Services */}
					<div>
						<h4 className='text-foreground font-semibold mb-4 text-sm uppercase tracking-wider'>
							Our Services
						</h4>
						<ul className='space-y-3'>
							{[
								'Industrial Training',
								'Skill Development',
								'Workshop Programs',
								'Certification Courses',
							].map((service) => (
								<li key={service}>
									<span className='text-muted-foreground text-sm'>
										{service}
									</span>
								</li>
							))}
						</ul>
					</div>

					{/* Contact */}
					<div>
						<h4 className='text-foreground font-semibold mb-4 text-sm uppercase tracking-wider'>
							Contact Us
						</h4>
						<ul className='space-y-3'>
							<li className='flex items-center gap-3 text-muted-foreground text-sm'>
								<Mail
									size={16}
									className='text-primary'
								/>
								yogeshggangwar@gmail.com
							</li>
							<li className='flex items-center gap-3 text-muted-foreground text-sm'>
								<Phone
									size={16}
									className='text-primary'
								/>
								+91 82189 11085
							</li>
							<li className='flex items-start gap-3 text-muted-foreground text-sm'>
								<MapPin
									size={16}
									className='text-primary mt-0.5'
								/>
								184, Subhash Nagar, Jwalapur, Haridwar, Uttarakhand - 249407
							</li>
						</ul>
						<div className='flex gap-4 mt-6'>
							<a
								href='https://www.linkedin.com/in/yogesh-gangwar-3010b315/'
								target='_blank'
								rel='noopener noreferrer'
								aria-label='LinkedIn'
								className='w-9 h-9 rounded-full bg-muted flex items-center justify-center hover:bg-primary transition-colors group'>
								<Linkedin
									size={16}
									className='text-muted-foreground group-hover:text-primary-foreground'
								/>
							</a>
							<a
								href='https://www.facebook.com/people/V4u-Group-Uk-India-Industrial-Consultant/100070847007129/'
								target='_blank'
								rel='noopener noreferrer'
								aria-label='Facebook'
								className='w-9 h-9 rounded-full bg-muted flex items-center justify-center hover:bg-primary transition-colors group'>
								<Facebook
									size={16}
									className='text-muted-foreground group-hover:text-primary-foreground'
								/>
							</a>
							<a
								href='https://www.instagram.com/y4u_ultimate/'
								target='_blank'
								rel='noopener noreferrer'
								aria-label='Instagram'
								className='w-9 h-9 rounded-full bg-muted flex items-center justify-center hover:bg-primary transition-colors group'>
								<Instagram
									size={16}
									className='text-muted-foreground group-hover:text-primary-foreground'
								/>
							</a>
							<a
								href='https://www.youtube.com/@YogeshGangwar'
								target='_blank'
								rel='noopener noreferrer'
								aria-label='YouTube'
								className='w-9 h-9 rounded-full bg-muted flex items-center justify-center hover:bg-primary transition-colors group'>
								<Youtube
									size={16}
									className='text-muted-foreground group-hover:text-primary-foreground'
								/>
							</a>
							<a
								href='https://x.com/v4uyogigangwar'
								target='_blank'
								rel='noopener noreferrer'
								aria-label='X (Twitter)'
								className='w-9 h-9 rounded-full bg-muted flex items-center justify-center hover:bg-primary transition-colors group'>
								<svg
									width='16'
									height='16'
									viewBox='0 0 24 24'
									fill='currentColor'
									className='text-muted-foreground group-hover:text-primary-foreground'>
									<path d='M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' />
								</svg>
							</a>
						</div>
					</div>
				</div>

				<div className='border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4'>
					<p className='text-muted-foreground text-sm'>
						© 2025 Y4U Ultimate Industrial Training Solutions. All rights
						reserved.
					</p>
					<div className='flex gap-6'>
						<Link
							href='/privacy-policy'
							className='text-muted-foreground hover:text-primary text-sm transition-colors'>
							Privacy Policy
						</Link>
						<Link
							href='/terms-and-conditions'
							className='text-muted-foreground hover:text-primary text-sm transition-colors'>
							Terms of Service
						</Link>
					</div>
				</div>
			</div>
		</footer>
	)
}
