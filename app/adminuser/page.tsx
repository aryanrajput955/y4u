'use client'

import { useState, FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import toast, { Toaster } from 'react-hot-toast'
import { verifyPassword } from './actions'

export default function AdminLogin() {
	const [password, setPassword] = useState('')
	const [isLoading, setIsLoading] = useState(false)
	const router = useRouter()

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault()
		setIsLoading(true)

		const isValid = await verifyPassword(password)

		if (isValid) {
			// Store authentication in session storage
			sessionStorage.setItem('adminAuthenticated', 'true')
			toast.success('Login successful!')
			setTimeout(() => {
				router.push('/adminuser/dashboard')
			}, 500)
		} else {
			toast.error('Invalid password')
			setIsLoading(false)
		}
	}

	return (
		<div className='min-h-screen flex items-center justify-center bg-linear-to-br from-gray-900 via-gray-800 to-gray-900'>
			<Toaster position='top-right' />

			<div className='w-full max-w-md'>
				<div className='bg-white rounded-2xl shadow-2xl p-8'>
					{/* Header */}
					<div className='text-center mb-8'>
						<div className='w-16 h-16 bg-linear-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center'>
							<svg
								className='w-8 h-8 text-white'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
								/>
							</svg>
						</div>
						<h1 className='text-3xl font-bold text-gray-900'>Admin Panel</h1>
						<p className='text-gray-600 mt-2'>
							Enter your password to continue
						</p>
					</div>

					{/* Form */}
					<form
						onSubmit={handleSubmit}
						className='space-y-6'>
						<div>
							<label
								htmlFor='password'
								className='block text-sm font-medium text-gray-700 mb-2'>
								Password
							</label>
							<input
								type='password'
								id='password'
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 text-gray-900'
								placeholder='Enter admin password'
								required
								autoFocus
							/>
						</div>

						<button
							type='submit'
							disabled={isLoading}
							className='w-full bg-linear-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed'>
							{isLoading ? (
								<span className='flex items-center justify-center'>
									<svg
										className='animate-spin -ml-1 mr-3 h-5 w-5 text-white'
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 24 24'>
										<circle
											className='opacity-25'
											cx='12'
											cy='12'
											r='10'
											stroke='currentColor'
											strokeWidth='4'></circle>
										<path
											className='opacity-75'
											fill='currentColor'
											d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'></path>
									</svg>
									Authenticating...
								</span>
							) : (
								'Login'
							)}
						</button>
					</form>

					{/* Footer */}
					<div className='mt-6 text-center text-sm text-gray-500'>
						<p>Digital Haridwar Admin Portal</p>
					</div>
				</div>
			</div>
		</div>
	)
}
