import Image from 'next/image'
import Link from 'next/link'
import {ArrowLeft, Clock, Users, Award, CheckCircle2} from 'lucide-react'

export const metadata = {
	title: 'IT & Industrial Automation Training | PLC, SCADA, CNC - Y4U Ultimate',
	description:
		'Advanced IT services and industrial automation training. Learn PLC programming, SCADA systems, CNC operations, robotics, and industrial testing with certification and job placement.',
	keywords: [
		'industrial PLC training',
		'industrial SCADA training',
		'industrial CNC training',
		'industrial robotics training',
		'industrial testing training',
		'industrial automation training',
		'industrial equipment training',
		'industrial machinery training',
		'industrial production training',
		'industrial machine operator training',
	].join(', '),
	openGraph: {
		title:
			'IT & Industrial Automation Training | PLC, SCADA, CNC - Y4U Ultimate',
		description:
			'Advanced IT services and industrial automation training. Learn PLC programming, SCADA systems, CNC operations, robotics with certification.',
		url: 'https://www.y4uultimate.com/services/it-services',
		siteName: 'Y4U Ultimate Industrial Training',
		images: [
			{
				url: '/og-image.png',
				width: 1200,
				height: 630,
				alt: 'Y4U Ultimate IT Services & Automation Training',
			},
		],
		locale: 'en_IN',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title:
			'IT & Industrial Automation Training | PLC, SCADA, CNC - Y4U Ultimate',
		description:
			'Advanced IT services and industrial automation training. Learn PLC programming, SCADA systems, CNC operations.',
		images: ['/og-image.png'],
	},
	alternates: {
		canonical: 'https://www.y4uultimate.com/services/it-services',
	},
}

export default function ITServicesPage() {
	return (
		<main className='min-h-screen bg-background'>
			{/* Hero Section */}
			<section className='relative h-[400px] bg-linear-to-r from-primary to-accent'>
				<div className='absolute inset-0 bg-black/40' />
				<div className='relative max-w-7xl mx-auto px-6 h-full flex flex-col justify-center'>
					<Link
						href='/services'
						className='inline-flex items-center gap-2 text-white mb-6 hover:gap-3 transition-all'>
						<ArrowLeft size={20} />
						Back to Services
					</Link>
					<h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4'>
						IT Services
					</h1>
					<p className='text-xl text-white/90 max-w-2xl'>
						Complete digital solutions to elevate your business online
					</p>
				</div>
			</section>

			{/* Content Section */}
			<section className='py-16 px-6'>
				<div className='max-w-7xl mx-auto'>
					<div className='grid grid-cols-1 lg:grid-cols-3 gap-12'>
						{/* Main Content */}
						<div className='lg:col-span-2'>
							<h2 className='text-3xl font-bold text-foreground mb-6'>
								About This Training Program
							</h2>
							<p className='text-muted-foreground mb-6 leading-relaxed'>
								Master modern web development, mobile app creation, and digital
								technologies through our comprehensive IT training programs.
								Learn from industry experts and work on real-world projects to
								build a portfolio that gets you hired.
							</p>{' '}
							<h3 className='text-2xl font-bold text-foreground mb-4 mt-8'>
								Skills You'll Master
							</h3>
							<div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-8'>
								{[
									'Web Development (HTML, CSS, JavaScript)',
									'UI/UX Design Principles',
									'Mobile App Development',
									'E-commerce Platforms',
									'Cloud Computing Basics',
									'Digital Marketing Strategies',
									'SEO & Analytics',
									'Version Control (Git)',
								].map((feature, idx) => (
									<div
										key={idx}
										className='flex items-start gap-3'>
										<CheckCircle2
											className='text-primary mt-1 shrink-0'
											size={20}
										/>
										<span className='text-foreground'>{feature}</span>
									</div>
								))}
							</div>
							<h3 className='text-2xl font-bold text-foreground mb-4 mt-8'>
								Technologies You'll Learn
							</h3>
							<p className='text-muted-foreground mb-4 leading-relaxed'>
								Get trained in the latest technologies and frameworks used by
								top companies worldwide. Through hands-on projects and
								mentorship, you'll build real applications and gain the
								confidence to start your IT career or freelance business.
							</p>
						</div>

						{/* Sidebar */}
						<div className='lg:col-span-1'>
							<div className='bg-card border border-border rounded-2xl p-6 sticky top-24'>
								<h3 className='text-xl font-bold text-foreground mb-6'>
									Program Details
								</h3>

								<div className='space-y-4 mb-8'>
									<div className='flex items-center gap-3'>
										<Clock
											className='text-primary'
											size={20}
										/>
										<div>
											<p className='text-sm text-muted-foreground'>Duration</p>
											<p className='font-semibold text-foreground'>
												Project-Based
											</p>
										</div>
									</div>

									<div className='flex items-center gap-3'>
										<Users
											className='text-primary'
											size={20}
										/>
										<div>
											<p className='text-sm text-muted-foreground'>
												Projects Delivered
											</p>
											<p className='font-semibold text-foreground'>200+</p>
										</div>
									</div>

									<div className='flex items-center gap-3'>
										<Award
											className='text-primary'
											size={20}
										/>
										<div>
											<p className='text-sm text-muted-foreground'>Quality</p>
											<p className='font-semibold text-foreground'>
												Industry Standard
											</p>
										</div>
									</div>
								</div>

								<Link
									href='/contact'
									className='w-full inline-block text-center bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors'>
									Get Started
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	)
}
