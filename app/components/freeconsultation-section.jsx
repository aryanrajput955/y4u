'use client'

import {useState} from 'react'
import {Send, CheckCircle} from 'lucide-react'

export default function FreeConsultationSection() {
	const [formData, setFormData] = useState({
		fullName: '',
		phoneNumber: '',
		email: '',
		content: '',
	})
	const [isSubmitted, setIsSubmitted] = useState(false)
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState('')

	const handleSubmit = async (e) => {
		e.preventDefault()
		setIsLoading(true)
		setError('')

		try {
			const response = await fetch('/api/consultation', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			})

			const data = await response.json()

			if (!response.ok) {
				throw new Error(data.error || 'Failed to submit consultation request')
			}

			setIsSubmitted(true)
			setTimeout(() => {
				setIsSubmitted(false)
				setFormData({fullName: '', phoneNumber: '', email: '', content: ''})
			}, 3000)
		} catch (err) {
			setError(err.message || 'Something went wrong. Please try again.')
		} finally {
			setIsLoading(false)
		}
	}

	const handleChange = (e) => {
		setFormData({...formData, [e.target.name]: e.target.value})
	}

	return (
		<section className='py-12 md:py-16 bg-background'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6'>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center'>
					{/* Left Side - Content */}
					<div className='space-y-4 md:space-y-6'>
						<div>
							<span className='text-primary text-sm font-medium uppercase tracking-wider'>
								Free Consultation
							</span>
							<h2 className='text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mt-2 md:mt-4 mb-4 md:mb-6 leading-tight'>
								Get Expert Advice <span className='text-primary'>Today</span>
							</h2>
							<p className='text-muted-foreground text-base md:text-lg leading-relaxed'>
								Ready to take the next step in your career? Our experts are here
								to guide you through our training programs and help you choose
								the right path for your future in industrial technology.
							</p>
						</div>
						<div className='space-y-4'>
							<p className='text-muted-foreground'>
								Whether you're looking to upskill, switch careers, or explore
								new opportunities in manufacturing and automation, we provide
								personalized consultations at no cost.
							</p>
							<p className='text-muted-foreground'>
								Fill out the form and we'll connect you with our team within 24
								hours to discuss your goals and how we can help you achieve
								them.
							</p>
						</div>
					</div>

					{/* Right Side - Form */}
					<div className='bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm'>
						{isSubmitted ? (
							<div className='text-center'>
								<CheckCircle className='w-16 h-16 text-primary mx-auto mb-4' />
								<h3 className='text-xl font-semibold text-foreground mb-2'>
									Request Submitted!
								</h3>
								<p className='text-muted-foreground'>
									We'll get back to you within 24 hours.
								</p>
							</div>
						) : (
							<form
								onSubmit={handleSubmit}
								className='space-y-4 md:space-y-6'>
								{error && (
									<div className='bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm'>
										{error}
									</div>
								)}

								<div>
									<label
										htmlFor='fullName'
										className='block text-sm font-medium text-foreground mb-2'>
										Full Name
									</label>
									<input
										type='text'
										id='fullName'
										name='fullName'
										value={formData.fullName}
										onChange={handleChange}
										required
										className='w-full px-4 py-3 md:py-3 bg-background border border-border rounded-xl text-sm text-foreground placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all'
										placeholder='Your full name'
									/>
								</div>

								<div>
									<label
										htmlFor='phoneNumber'
										className='block text-sm font-medium text-foreground mb-2'>
										Phone Number
									</label>
									<input
										type='tel'
										id='phoneNumber'
										name='phoneNumber'
										value={formData.phoneNumber}
										onChange={handleChange}
										required
										className='w-full px-4 py-3 bg-background border border-border rounded-xl text-sm text-foreground placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all'
										placeholder='+91 98765 43210'
									/>
								</div>

								<div>
									<label
										htmlFor='email'
										className='block text-sm font-medium text-foreground mb-2'>
										Email Address
									</label>
									<input
										type='email'
										id='email'
										name='email'
										value={formData.email}
										onChange={handleChange}
										required
										className='w-full px-4 py-3 bg-background border border-border rounded-xl text-sm text-foreground placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all'
										placeholder='you@example.com'
									/>
								</div>

								<div>
									<label
										htmlFor='content'
										className='block text-sm font-medium text-foreground mb-2'>
										Tell us about your goals
									</label>
									<textarea
										id='content'
										name='content'
										value={formData.content}
										onChange={handleChange}
										rows={4}
										className='w-full px-4 py-3 bg-background border border-border rounded-xl text-sm text-foreground placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none'
										placeholder="Describe your background, interests, and what you'd like to achieve..."
									/>
								</div>

								<button
									type='submit'
									disabled={isLoading}
									className='group inline-flex items-center justify-center gap-2 w-full bg-primary text-primary-foreground px-6 md:px-8 py-3 md:py-4 rounded-xl font-medium hover:bg-primary/90 transition-all text-sm md:text-base disabled:opacity-50 disabled:cursor-not-allowed'>
									{isLoading ? 'Submitting...' : 'Request Free Consultation'}
									<Send
										size={18}
										className='group-hover:translate-x-1 transition-transform'
									/>
								</button>
							</form>
						)}
					</div>
				</div>
			</div>
		</section>
	)
}
