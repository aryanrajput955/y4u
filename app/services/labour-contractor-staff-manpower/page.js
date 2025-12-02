import Image from 'next/image'
import Link from 'next/link'
import {ArrowLeft, Clock, Users, Award, CheckCircle2} from 'lucide-react'

export default function LabourContractorPage() {
	return (
		<main className='min-h-screen bg-background'>
			{/* Hero Section */}
			<section className='relative h-[400px] bg-gradient-to-r from-primary to-accent'>
				<div className='absolute inset-0 bg-black/40' />
				<div className='relative max-w-7xl mx-auto px-6 h-full flex flex-col justify-center'>
					<Link
						href='/services'
						className='inline-flex items-center gap-2 text-white mb-6 hover:gap-3 transition-all'>
						<ArrowLeft size={20} />
						Back to Services
					</Link>
					<h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4'>
						Labour Contractor & Staff Manpower
					</h1>
					<p className='text-xl text-white/90 max-w-2xl'>
						Professional recruitment and manpower solutions for industries
						across sectors
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
								We provide skilled, semi-skilled, and unskilled workforce
								tailored to your business needs. Our comprehensive manpower
								solutions ensure you have the right talent at the right time.
							</p>

							<h3 className='text-2xl font-bold text-foreground mb-4 mt-8'>
								Key Features
							</h3>
							<div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-8'>
								{[
									'Skilled Labour Supply',
									'Background Verification',
									'Payroll Management',
									'Compliance Support',
									'On-site Training',
									'Performance Monitoring',
									'Contract Management',
									'24/7 Support',
								].map((feature, idx) => (
									<div
										key={idx}
										className='flex items-start gap-3'>
										<CheckCircle2
											className='text-primary mt-1 flex-shrink-0'
											size={20}
										/>
										<span className='text-foreground'>{feature}</span>
									</div>
								))}
							</div>

							<h3 className='text-2xl font-bold text-foreground mb-4 mt-8'>
								Our Approach
							</h3>
							<p className='text-muted-foreground mb-4 leading-relaxed'>
								We maintain a vast database of pre-screened, trained
								professionals ready to meet your staffing requirements. Our
								streamlined processes ensure quick deployment without
								compromising on quality.
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
											<p className='font-semibold text-foreground'>On-Demand</p>
										</div>
									</div>

									<div className='flex items-center gap-3'>
										<Users
											className='text-primary'
											size={20}
										/>
										<div>
											<p className='text-sm text-muted-foreground'>
												Workers Placed
											</p>
											<p className='font-semibold text-foreground'>1000+</p>
										</div>
									</div>

									<div className='flex items-center gap-3'>
										<Award
											className='text-primary'
											size={20}
										/>
										<div>
											<p className='text-sm text-muted-foreground'>Status</p>
											<p className='font-semibold text-foreground'>
												Verified & Trained
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
