import Image from 'next/image'
import Link from 'next/link'
import {ArrowLeft, Clock, Users, Award, CheckCircle2} from 'lucide-react'

export const metadata = {
	title:
		'Industrial Training Programs | Mechanical, Electrical, Civil - Y4U Ultimate',
	description:
		'Complete industrial training programs with hands-on experience in mechanical, electrical, civil engineering. ITI diploma courses with certification, job placement, and practical training in India.',
	keywords: [
		'industrial training program',
		'industrial training mechanical',
		'industrial training electrical',
		'industrial training civil',
		'industrial training ITI',
		'industrial training diploma',
		'industrial training syllabus',
		'industrial training certificate',
		'industrial hands-on training',
		'industrial practical training',
		'industrial training fresher',
		'industrial apprenticeship',
		'industrial training placement',
	].join(', '),
	openGraph: {
		title:
			'Industrial Training Programs | Mechanical, Electrical, Civil - Y4U Ultimate',
		description:
			'Complete industrial training programs with hands-on experience in mechanical, electrical, civil engineering. ITI diploma courses with certification and job placement.',
		url: 'https://www.y4uultimate.com/services/industrial-training',
		siteName: 'Y4U Ultimate Industrial Training',
		images: [
			{
				url: '/og-image.png',
				width: 1200,
				height: 630,
				alt: 'Y4U Ultimate Industrial Training Programs',
			},
		],
		locale: 'en_IN',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title:
			'Industrial Training Programs | Mechanical, Electrical, Civil - Y4U Ultimate',
		description:
			'Complete industrial training programs with hands-on experience in mechanical, electrical, civil engineering.',
		images: ['/og-image.png'],
	},
	alternates: {
		canonical: 'https://www.y4uultimate.com/services/industrial-training',
	},
}

export default function IndustrialTrainingPage() {
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
						Industrial Training
					</h1>
					<p className='text-xl text-white/90 max-w-2xl'>
						Hands-on training with real factory equipment and experienced
						mentors
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
								Prepare yourself for modern manufacturing careers with our
								industry-aligned skill development programs. Learn from
								experienced professionals and gain both theoretical knowledge
								and practical, hands-on experience on actual industrial
								equipment.
							</p>{' '}
							<h3 className='text-2xl font-bold text-foreground mb-4 mt-8'>
								Key Features
							</h3>
							<div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-8'>
								{[
									'CNC Machine Operation',
									'Industrial Automation',
									'Quality Control',
									'Safety Protocols',
									'Lean Manufacturing',
									'Equipment Maintenance',
									'Production Planning',
									'Industry 4.0 Concepts',
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
								Learning Methodology
							</h3>
							<p className='text-muted-foreground mb-4 leading-relaxed'>
								Learn through a perfect blend of classroom instruction,
								real-world simulations, industrial visits, and extensive
								hands-on practice with state-of-the-art equipment. Upon
								successful completion, you'll receive NSDC certification that's
								recognized across industries nationwide.
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
												6-12 Weeks
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
												Students Trained
											</p>
											<p className='font-semibold text-foreground'>800+</p>
										</div>
									</div>

									<div className='flex items-center gap-3'>
										<Award
											className='text-primary'
											size={20}
										/>
										<div>
											<p className='text-sm text-muted-foreground'>
												Certification
											</p>
											<p className='font-semibold text-foreground'>
												NSDC Certified
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
