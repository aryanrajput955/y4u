'use client'

import {useState} from 'react'
import {Send, CheckCircle} from 'lucide-react'

export default function ContactForm() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
		program: '',
		message: '',
	})
	const [isSubmitted, setIsSubmitted] = useState(false)
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState('')

	const handleSubmit = async (e) => {
		e.preventDefault()
		setIsLoading(true)
		setError('')

		try {
			const response = await fetch('/api/contact', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			})

			const data = await response.json()

			if (!response.ok) {
				throw new Error(data.error || 'Failed to submit contact form')
			}

			setIsSubmitted(true)
			setTimeout(() => {
				setIsSubmitted(false)
				setFormData({name: '', email: '', phone: '', program: '', message: ''})
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

	const programs = [
		'CNC Machine Operations',
		'Industrial Welding',
		'PLC Programming & Automation',
		'Quality Control & Inspection',
		'Industrial Maintenance',
		'CAD/CAM Design',
	]

	return (
		<div>
			<h2 className='text-2xl font-bold text-gray-900 mb-2'>
				Send us a Message
			</h2>
			<p className='text-gray-600 mb-8'>
				Fill out the form and we will get back to you within 24 hours.
			</p>

			{isSubmitted ? (
				<div className='bg-blue-50 border border-blue-200 rounded-2xl p-8 text-center'>
					<CheckCircle className='w-16 h-16 text-blue-600 mx-auto mb-4' />
					<h3 className='text-xl font-semibold text-gray-900 mb-2'>
						Message Sent!
					</h3>
					<p className='text-gray-600'>We will get back to you shortly.</p>
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

					<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
						<div>
							<label
								htmlFor='name'
								className='block text-sm font-semibold text-gray-900 mb-2'>
								Full Name
							</label>
							<input
								type='text'
								id='name'
								name='name'
								value={formData.name}
								onChange={handleChange}
								required
								className='w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all'
								placeholder='Your name'
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
								className='w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all'
								placeholder='you@example.com'
							/>
						</div>
					</div>

					<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
						<div>
							<label
								htmlFor='phone'
								className='block text-sm font-semibold text-gray-900 mb-2'>
								Phone Number
							</label>
							<input
								type='tel'
								id='phone'
								name='phone'
								value={formData.phone}
								onChange={handleChange}
								required
								className='w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all'
								placeholder='+91 82189 11085'
							/>
						</div>
						<div>
							<label
								htmlFor='program'
								className='block text-sm font-semibold text-gray-900 mb-2'>
								Program of Interest
							</label>
							<select
								id='program'
								name='program'
								value={formData.program}
								onChange={handleChange}
								required
								className='w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all'>
								<option value=''>Select a program</option>
								{programs.map((program) => (
									<option
										key={program}
										value={program}>
										{program}
									</option>
								))}
							</select>
						</div>
					</div>

					<div>
						<label
							htmlFor='message'
							className='block text-sm font-semibold text-gray-900 mb-2'>
							Your Message
						</label>
						<textarea
							id='message'
							name='message'
							value={formData.message}
							onChange={handleChange}
							required
							rows={5}
							className='w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all resize-none'
							placeholder='Tell us about your goals and any questions you have...'
						/>
					</div>

					<button
						type='submit'
						disabled={isLoading}
						className='group inline-flex items-center justify-center gap-2 w-full bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed'>
						{isLoading ? 'Sending...' : 'Send Message'}
						<Send
							size={18}
							className='group-hover:translate-x-1 transition-transform'
						/>
					</button>
				</form>
			)}
		</div>
	)
}
