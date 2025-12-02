import Image from 'next/image'
import Link from 'next/link'
import {ArrowLeft, Clock, Users, Award, CheckCircle2} from 'lucide-react'

export default function RealEstatePage() {
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
						Real Estate
					</h1>
					<p className='text-xl text-white/90 max-w-2xl'>
						Professional real estate services including property consulting and
						sales training
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
								About This Service
							</h2>
							<p className='text-muted-foreground mb-6 leading-relaxed'>
								Connect buyers with their dream properties and grow your real
								estate business with our comprehensive consulting and training
								services. We provide market analysis, sales training, and
								complete legal support.
							</p>

							<h3 className='text-2xl font-bold text-foreground mb-4 mt-8'>
								Key Features
							</h3>
							<div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-8'>
								{[
									'Property Consulting',
									'Sales Training',
									'Market Analysis',
									'Legal Documentation',
									'Investment Advisory',
									'Property Valuation',
									'Client Relationship Management',
									'Digital Marketing for Properties',
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
								Our Expertise
							</h3>
							<p className='text-muted-foreground mb-4 leading-relaxed'>
								With years of experience in the real estate market, we provide
								comprehensive services from property listing to closing deals.
								Our RERA-compliant processes ensure transparency and trust in
								every transaction.
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
											<p className='text-sm text-muted-foreground'>
												Availability
											</p>
											<p className='font-semibold text-foreground'>Ongoing</p>
										</div>
									</div>

									<div className='flex items-center gap-3'>
										<Users
											className='text-primary'
											size={20}
										/>
										<div>
											<p className='text-sm text-muted-foreground'>
												Clients Served
											</p>
											<p className='font-semibold text-foreground'>300+</p>
										</div>
									</div>

									<div className='flex items-center gap-3'>
										<Award
											className='text-primary'
											size={20}
										/>
										<div>
											<p className='text-sm text-muted-foreground'>
												Compliance
											</p>
											<p className='font-semibold text-foreground'>
												RERA Compliant
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
