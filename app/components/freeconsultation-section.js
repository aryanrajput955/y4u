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
		<section className='py-24 bg-blue-50/30'>
			<div className='max-w-7xl mx-auto px-6'>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center'>
					{/* Left Side - Content */}
					<div className='space-y-6'>
						<div>
							<span className='text-blue-600 text-sm font-semibold uppercase tracking-wider'>
								Free Consultation
							</span>
							<h2 className='text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-6 leading-tight'>
								Get Expert Advice <span className='text-blue-600'>Today</span>
							</h2>
							<p className='text-gray-600 text-lg leading-relaxed'>
								Ready to take the next step in your career? Our experts are here
								to guide you through our training programs and help you choose
								the right path for your future in industrial technology.
							</p>
						</div>
						<div className='space-y-4'>
							<p className='text-gray-600'>
								Whether you're looking to upskill, switch careers, or explore
								new opportunities in manufacturing and automation, we provide
								personalized consultations at no cost.
							</p>
							<p className='text-gray-600'>
								Fill out the form and we'll connect you with our team within 24
								hours to discuss your goals and how we can help you achieve
								them.
							</p>
						</div>
					</div>

					{/* Right Side - Form */}
					<div className='bg-white border border-blue-200 rounded-2xl p-8 shadow-sm'>
						{isSubmitted ? (
							<div className='text-center'>
								<CheckCircle className='w-16 h-16 text-blue-600 mx-auto mb-4' />
								<h3 className='text-xl font-semibold text-gray-900 mb-2'>
									Request Submitted!
								</h3>
								<p className='text-gray-600'>
									We'll get back to you within 24 hours.
								</p>
							</div>
						) : (
							<form
								onSubmit={handleSubmit}
								className='space-y-6'>
								{error && (
									<div className='bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm'>
										{error}
									</div>
								)}

								<div>
									<label
										htmlFor='fullName'
										className='block text-sm font-semibold text-gray-900 mb-2'>
										Full Name
									</label>
									<input
										type='text'
										id='fullName'
										name='fullName'
										value={formData.fullName}
										onChange={handleChange}
										required
										className='w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all'
										placeholder='Your full name'
									/>
								</div>

								<div>
									<label
										htmlFor='phoneNumber'
										className='block text-sm font-semibold text-gray-900 mb-2'>
										Phone Number
									</label>
									<input
										type='tel'
										id='phoneNumber'
										name='phoneNumber'
										value={formData.phoneNumber}
										onChange={handleChange}
										required
										className='w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all'
										placeholder='+91 82189 11085'
									/>
								</div>

								<div>
									<label
										htmlFor='email'
										className='block text-sm font-semibold text-gray-900 mb-2'>
										Email Address
									</label>
									<input
										type='email'
										id='email'
										name='email'
										value={formData.email}
										onChange={handleChange}
										required
										className='w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all'
										placeholder='you@example.com'
									/>
								</div>

								<div>
									<label
										htmlFor='content'
										className='block text-sm font-semibold text-gray-900 mb-2'>
										Tell us about your goals
									</label>
									<textarea
										id='content'
										name='content'
										value={formData.content}
										onChange={handleChange}
										rows={4}
										className='w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all resize-none'
										placeholder="Describe your background, interests, and what you'd like to achieve..."
									/>
								</div>

								<button
									type='submit'
									disabled={isLoading}
									className='group inline-flex items-center justify-center gap-2 w-full bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all text-base disabled:opacity-50 disabled:cursor-not-allowed'>
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
