'use client'

import {useState, useEffect, FormEvent, ChangeEvent} from 'react'
import {useRouter} from 'next/navigation'
import toast, {Toaster} from 'react-hot-toast'

interface Blog {
	_id: string
	metaTitle: string
	metaDescription: string
	image: string
	content: string
	date: string
	slug: string
}

export default function AdminDashboard() {
	const [activeTab, setActiveTab] = useState<'add' | 'manage'>('add')
	const [isLoading, setIsLoading] = useState(false)
	const [blogs, setBlogs] = useState<Blog[]>([])
	const [loadingBlogs, setLoadingBlogs] = useState(false)
	const router = useRouter()

	// Form state
	const [formData, setFormData] = useState({
		metaTitle: '',
		metaDescription: '',
		image: '',
		content: '',
		date: new Date().toISOString().split('T')[0],
	})

	// File upload state
	const [selectedFile, setSelectedFile] = useState<File | null>(null)
	const [imagePreview, setImagePreview] = useState<string>('')
	const [isUploading, setIsUploading] = useState(false)
	const [dragActive, setDragActive] = useState(false)

	// Edit modal state
	const [isEditModalOpen, setIsEditModalOpen] = useState(false)
	const [editingBlog, setEditingBlog] = useState<Blog | null>(null)
	const [editFormData, setEditFormData] = useState({
		metaTitle: '',
		metaDescription: '',
		image: '',
		content: '',
		date: '',
	})
	const [editSelectedFile, setEditSelectedFile] = useState<File | null>(null)
	const [editImagePreview, setEditImagePreview] = useState<string>('')
	const [editIsUploading, setEditIsUploading] = useState(false)
	const [editDragActive, setEditDragActive] = useState(false)

	// Check authentication
	useEffect(() => {
		const isAuthenticated = sessionStorage.getItem('adminAuthenticated')
		if (!isAuthenticated) {
			router.push('/adminuser')
		}
	}, [router])

	// Fetch blogs when switching to manage tab
	useEffect(() => {
		if (activeTab === 'manage') {
			fetchBlogs()
		}
	}, [activeTab])

	const fetchBlogs = async () => {
		setLoadingBlogs(true)
		try {
			const response = await fetch('/api/blogs')
			const data = await response.json()

			if (data.success) {
				setBlogs(data.data)
			} else {
				toast.error('Failed to fetch blogs')
			}
		} catch (error) {
			toast.error('Error fetching blogs')
		} finally {
			setLoadingBlogs(false)
		}
	}

	const handleInputChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const {name, value} = e.target
		setFormData((prev) => ({...prev, [name]: value}))
	}

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault()
		setIsLoading(true)

		try {
			const response = await fetch('/api/blogs', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			})

			const data = await response.json()

			if (data.success) {
				toast.success('Blog created successfully!')
				// Reset form
				setFormData({
					metaTitle: '',
					metaDescription: '',
					image: '',
					content: '',
					date: new Date().toISOString().split('T')[0],
				})
				// Reset file state
				setSelectedFile(null)
				setImagePreview('')
			} else {
				toast.error(data.error || 'Failed to create blog')
			}
		} catch (error) {
			toast.error('Error creating blog')
		} finally {
			setIsLoading(false)
		}
	}

	const handleDelete = async (id: string) => {
		if (!confirm('Are you sure you want to delete this blog?')) return

		try {
			const response = await fetch(`/api/blogs/${id}`, {
				method: 'DELETE',
			})

			const data = await response.json()

			if (data.success) {
				toast.success('Blog deleted successfully!')
				fetchBlogs()
			} else {
				toast.error(data.error || 'Failed to delete blog')
			}
		} catch (error) {
			toast.error('Error deleting blog')
		}
	}

	// File handling functions
	const handleFileSelect = async (file: File) => {
		if (!file) return

		// Validate file type
		const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp']
		if (!allowedTypes.includes(file.type)) {
			toast.error('Please select a valid image file (JPEG, PNG, or WebP)')
			return
		}

		// Validate file size (max 5MB)
		const maxSize = 5 * 1024 * 1024 // 5MB
		if (file.size > maxSize) {
			toast.error('File size must be less than 5MB')
			return
		}

		setSelectedFile(file)
		setImagePreview(URL.createObjectURL(file))

		// Upload to Cloudinary
		await uploadToCloudinary(file)
	}

	const uploadToCloudinary = async (file: File) => {
		setIsUploading(true)
		try {
			const formData = new FormData()
			formData.append('file', file)

			const response = await fetch('/api/upload', {
				method: 'POST',
				body: formData,
			})

			const data = await response.json()

			if (data.success) {
				setFormData(prev => ({ ...prev, image: data.url }))
				toast.success('Image uploaded successfully!')
			} else {
				toast.error(data.error || 'Failed to upload image')
				setSelectedFile(null)
				setImagePreview('')
			}
		} catch (error) {
			toast.error('Error uploading image')
			setSelectedFile(null)
			setImagePreview('')
		} finally {
			setIsUploading(false)
		}
	}

	const handleDrag = (e: React.DragEvent) => {
		e.preventDefault()
		e.stopPropagation()
		if (e.type === 'dragenter' || e.type === 'dragover') {
			setDragActive(true)
		} else if (e.type === 'dragleave') {
			setDragActive(false)
		}
	}

	const handleDrop = (e: React.DragEvent) => {
		e.preventDefault()
		e.stopPropagation()
		setDragActive(false)

		if (e.dataTransfer.files && e.dataTransfer.files[0]) {
			handleFileSelect(e.dataTransfer.files[0])
		}
	}

	const handleFileInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		e.preventDefault()
		if (e.target.files && e.target.files[0]) {
			handleFileSelect(e.target.files[0])
		}
	}

	const removeImage = () => {
		setSelectedFile(null)
		setImagePreview('')
		setFormData(prev => ({ ...prev, image: '' }))
	}

	// Edit modal functions
	const openEditModal = (blog: Blog) => {
		setEditingBlog(blog)
		setEditFormData({
			metaTitle: blog.metaTitle,
			metaDescription: blog.metaDescription,
			image: blog.image,
			content: blog.content,
			date: new Date(blog.date).toISOString().split('T')[0],
		})
		setEditImagePreview(blog.image)
		setIsEditModalOpen(true)
	}

	const closeEditModal = () => {
		setIsEditModalOpen(false)
		setEditingBlog(null)
		setEditFormData({
			metaTitle: '',
			metaDescription: '',
			image: '',
			content: '',
			date: '',
		})
		setEditSelectedFile(null)
		setEditImagePreview('')
		setEditIsUploading(false)
		setEditDragActive(false)
	}

	const handleEditInputChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target
		setEditFormData((prev) => ({ ...prev, [name]: value }))
	}

	const handleEditFileSelect = async (file: File) => {
		if (!file) return

		const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp']
		if (!allowedTypes.includes(file.type)) {
			toast.error('Please select a valid image file (JPEG, PNG, or WebP)')
			return
		}

		const maxSize = 5 * 1024 * 1024
		if (file.size > maxSize) {
			toast.error('File size must be less than 5MB')
			return
		}

		setEditSelectedFile(file)
		setEditImagePreview(URL.createObjectURL(file))
		await editUploadToCloudinary(file)
	}

	const editUploadToCloudinary = async (file: File) => {
		setEditIsUploading(true)
		try {
			const formData = new FormData()
			formData.append('file', file)

			const response = await fetch('/api/upload', {
				method: 'POST',
				body: formData,
			})

			const data = await response.json()

			if (data.success) {
				setEditFormData(prev => ({ ...prev, image: data.url }))
				toast.success('Image uploaded successfully!')
			} else {
				toast.error(data.error || 'Failed to upload image')
				setEditSelectedFile(null)
				setEditImagePreview('')
			}
		} catch (error) {
			toast.error('Error uploading image')
			setEditSelectedFile(null)
			setEditImagePreview('')
		} finally {
			setEditIsUploading(false)
		}
	}

	const handleEditDrag = (e: React.DragEvent) => {
		e.preventDefault()
		e.stopPropagation()
		if (e.type === 'dragenter' || e.type === 'dragover') {
			setEditDragActive(true)
		} else if (e.type === 'dragleave') {
			setEditDragActive(false)
		}
	}

	const handleEditDrop = (e: React.DragEvent) => {
		e.preventDefault()
		e.stopPropagation()
		setEditDragActive(false)

		if (e.dataTransfer.files && e.dataTransfer.files[0]) {
			handleEditFileSelect(e.dataTransfer.files[0])
		}
	}

	const handleEditFileInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		e.preventDefault()
		if (e.target.files && e.target.files[0]) {
			handleEditFileSelect(e.target.files[0])
		}
	}

	const removeEditImage = () => {
		setEditSelectedFile(null)
		setEditImagePreview('')
		setEditFormData(prev => ({ ...prev, image: '' }))
	}

	const handleEditSubmit = async (e: FormEvent) => {
		e.preventDefault()
		if (!editingBlog) return

		setIsLoading(true)

		try {
			const response = await fetch(`/api/blogs?id=${editingBlog._id}`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(editFormData),
			})

			const data = await response.json()

			if (data.success) {
				toast.success('Blog updated successfully!')
				closeEditModal()
				fetchBlogs()
			} else {
				toast.error(data.error || 'Failed to update blog')
			}
		} catch (error) {
			toast.error('Error updating blog')
		} finally {
			setIsLoading(false)
		}
	}

	const handleLogout = () => {
		sessionStorage.removeItem('adminAuthenticated')
		router.push('/adminuser')
	}

	return (
		<div className='min-h-screen bg-gray-50'>
			<Toaster position='top-right' />

			{/* Header */}
			<header className='bg-white shadow-sm border-b'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4'>
					<div className='flex justify-between items-center'>
						<h1 className='text-2xl font-bold text-gray-900'>
							Admin Dashboard
						</h1>
						<button
							onClick={handleLogout}
							className='px-4 py-2 text-sm font-medium text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition duration-200'>
							Logout
						</button>
					</div>
				</div>
			</header>

			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
				{/* Tabs */}
				<div className='bg-white rounded-lg shadow-sm mb-6'>
					<div className='border-b border-gray-200'>
						<nav className='flex -mb-px'>
							<button
								onClick={() => setActiveTab('add')}
								className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
									activeTab === 'add'
										? 'border-blue-500 text-blue-600'
										: 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
								}`}>
								Add Blog
							</button>
							<button
								onClick={() => setActiveTab('manage')}
								className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
									activeTab === 'manage'
										? 'border-blue-500 text-blue-600'
										: 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
								}`}>
								Manage Blogs
							</button>
						</nav>
					</div>

					{/* Tab Content */}
					<div className='p-6'>
						{activeTab === 'add' && (
							<div>
								<h2 className='text-xl font-semibold text-gray-900 mb-6'>
									Create New Blog
								</h2>
								<form
									onSubmit={handleSubmit}
									className='space-y-6'>
									{/* Meta Title */}
									<div>
										<label
											htmlFor='metaTitle'
											className='block text-sm font-medium text-gray-700 mb-2'>
											Meta Title *
										</label>
										<input
											type='text'
											id='metaTitle'
											name='metaTitle'
											value={formData.metaTitle}
											onChange={handleInputChange}
											className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900'
											placeholder='Enter meta title'
											required
										/>
									</div>

									{/* Meta Description */}
									<div>
										<label
											htmlFor='metaDescription'
											className='block text-sm font-medium text-gray-700 mb-2'>
											Meta Description *
										</label>
										<textarea
											id='metaDescription'
											name='metaDescription'
											value={formData.metaDescription}
											onChange={handleInputChange}
											rows={3}
											className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900'
											placeholder='Enter meta description'
											required
										/>
									</div>

									{/* Image Upload */}
									<div>
										<label className='block text-sm font-medium text-gray-700 mb-2'>
											Blog Image *
										</label>
										<div
											className={`relative border-2 border-dashed rounded-lg p-6 transition-colors ${
												dragActive
													? 'border-blue-400 bg-blue-50'
													: 'border-gray-300 hover:border-gray-400'
											} ${imagePreview ? 'bg-gray-50' : ''}`}
											onDragEnter={handleDrag}
											onDragLeave={handleDrag}
											onDragOver={handleDrag}
											onDrop={handleDrop}>
											{imagePreview ? (
												<div className='space-y-4'>
													<div className='relative'>
														<img
															src={imagePreview}
															alt='Preview'
															className='w-full max-w-md h-48 object-cover rounded-lg mx-auto'
														/>
														{isUploading && (
															<div className='absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-center'>
																<div className='text-white text-center'>
																	<svg
																		className='animate-spin h-8 w-8 mx-auto mb-2'
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
																	<p className='text-sm'>Uploading...</p>
																</div>
															</div>
														)}
														{!isUploading && (
															<button
																type='button'
																onClick={removeImage}
																className='absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors'>
																<svg
																	className='w-4 h-4'
																	fill='none'
																	stroke='currentColor'
																	viewBox='0 0 24 24'>
																	<path
																		strokeLinecap='round'
																		strokeLinejoin='round'
																		strokeWidth={2}
																		d='M6 18L18 6M6 6l12 12'
																	/>
																</svg>
															</button>
														)}
													</div>
													<div className='text-center'>
														<p className='text-sm text-gray-600'>
															Image uploaded successfully! Drag a new image or click to replace.
														</p>
													</div>
												</div>
											) : (
												<div className='text-center'>
													<svg
														className='mx-auto h-12 w-12 text-gray-400'
														stroke='currentColor'
														fill='none'
														viewBox='0 0 48 48'>
														<path
															d='M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02'
															strokeWidth={2}
															strokeLinecap='round'
															strokeLinejoin='round'
														/>
													</svg>
													<div className='mt-4'>
														<label htmlFor='file-upload' className='cursor-pointer'>
															<span className='mt-2 block text-sm font-medium text-gray-900'>
																Click to upload or drag and drop
															</span>
															<span className='mt-1 block text-sm text-gray-500'>
																JPEG, PNG, WebP up to 5MB
															</span>
														</label>
														<input
															id='file-upload'
															name='file-upload'
															type='file'
															className='sr-only'
															accept='image/*'
															onChange={handleFileInputChange}
														/>
													</div>
												</div>
											)}
										</div>
									</div>

									{/* Content */}
									<div>
										<label
											htmlFor='content'
											className='block text-sm font-medium text-gray-700 mb-2'>
											Content *
										</label>
										<textarea
											id='content'
											name='content'
											value={formData.content}
											onChange={handleInputChange}
											rows={10}
											className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 font-mono text-sm'
											placeholder='Enter blog content (supports HTML)'
											required
										/>
									</div>

									{/* Date */}
									<div>
										<label
											htmlFor='date'
											className='block text-sm font-medium text-gray-700 mb-2'>
											Date
										</label>
										<input
											type='date'
											id='date'
											name='date'
											value={formData.date}
											onChange={handleInputChange}
											className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900'
										/>
									</div>

									{/* Submit Button */}
									<div className='flex justify-end'>
										<button
											type='submit'
											disabled={isLoading}
											className='px-6 py-3 bg-linear-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed'>
											{isLoading ? (
												<span className='flex items-center'>
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
													Submitting...
												</span>
											) : (
												'Submit Blog'
											)}
										</button>
									</div>
								</form>
							</div>
						)}

						{activeTab === 'manage' && (
							<div>
								<h2 className='text-xl font-semibold text-gray-900 mb-6'>
									Manage Blogs
								</h2>

								{loadingBlogs ? (
									<div className='flex justify-center items-center py-12'>
										<svg
											className='animate-spin h-8 w-8 text-blue-600'
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
									</div>
								) : blogs.length === 0 ? (
									<div className='text-center py-12'>
										<svg
											className='mx-auto h-12 w-12 text-gray-400'
											fill='none'
											viewBox='0 0 24 24'
											stroke='currentColor'>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth={2}
												d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
											/>
										</svg>
										<h3 className='mt-2 text-sm font-medium text-gray-900'>
											No blogs
										</h3>
										<p className='mt-1 text-sm text-gray-500'>
											Get started by creating a new blog.
										</p>
									</div>
								) : (
									<div className='overflow-x-auto'>
										<table className='min-w-full divide-y divide-gray-200'>
											<thead className='bg-gray-50'>
												<tr>
													<th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
														S.No
													</th>
													<th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
														Title
													</th>
													<th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
														Description
													</th>
													<th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
														Date
													</th>
													<th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
														Actions
													</th>
												</tr>
											</thead>
											<tbody className='bg-white divide-y divide-gray-200'>
												{blogs.map((blog, index) => (
													<tr key={blog._id} className='hover:bg-gray-50'>
														<td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
															{index + 1}
														</td>
														<td className='px-6 py-4 whitespace-nowrap'>
															<div className='flex items-center'>
																{blog.image && (
																	<img
																		src={blog.image}
																		alt={blog.metaTitle}
																		className='w-10 h-10 object-cover rounded-lg mr-3'
																	/>
																)}
																<div>
																	<div className='text-sm font-medium text-gray-900 max-w-xs truncate'>
																		{blog.metaTitle}
																	</div>
																	<div className='text-sm text-gray-500'>
																		{blog.slug}
																	</div>
																</div>
															</div>
														</td>
														<td className='px-6 py-4'>
															<div className='text-sm text-gray-900 max-w-xs truncate'>
																{blog.metaDescription}
															</div>
														</td>
														<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
															{new Date(blog.date).toLocaleDateString('en-US', {
																year: 'numeric',
																month: 'short',
																day: 'numeric'
															})}
														</td>
														<td className='px-6 py-4 whitespace-nowrap text-sm font-medium'>
															<div className='flex items-center space-x-2'>
																<button
																	onClick={() => openEditModal(blog)}
																	className='text-blue-600 hover:text-blue-900 p-1 rounded-md hover:bg-blue-50 transition-colors'
																	title='Edit blog'>
																	<svg
																		className='w-5 h-5'
																		fill='none'
																		stroke='currentColor'
																		viewBox='0 0 24 24'>
																		<path
																			strokeLinecap='round'
																			strokeLinejoin='round'
																			strokeWidth={2}
																			d='M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z'
																		/>
																	</svg>
																</button>
																<button
																	onClick={() => handleDelete(blog._id)}
																	className='text-red-600 hover:text-red-900 p-1 rounded-md hover:bg-red-50 transition-colors'
																	title='Delete blog'>
																	<svg
																		className='w-5 h-5'
																		fill='none'
																		stroke='currentColor'
																		viewBox='0 0 24 24'>
																		<path
																			strokeLinecap='round'
																			strokeLinejoin='round'
																			strokeWidth={2}
																			d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
																		/>
																	</svg>
																</button>
															</div>
														</td>
													</tr>
												))}
											</tbody>
										</table>
									</div>
								)}
							</div>
						)}
					</div>
				</div>
			</div>

			{/* Edit Modal */}
			{isEditModalOpen && (
				<div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4'>
					<div className='bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto'>
						<div className='p-6'>
							<div className='flex justify-between items-center mb-6'>
								<h3 className='text-xl font-semibold text-gray-900'>Edit Blog</h3>
								<button
									onClick={closeEditModal}
									className='text-gray-400 hover:text-gray-600'>
									<svg
										className='w-6 h-6'
										fill='none'
										stroke='currentColor'
										viewBox='0 0 24 24'>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M6 18L18 6M6 6l12 12'
										/>
									</svg>
								</button>
							</div>

							<form onSubmit={handleEditSubmit} className='space-y-6'>
								{/* Meta Title */}
								<div>
									<label
										htmlFor='editMetaTitle'
										className='block text-sm font-medium text-gray-700 mb-2'>
										Meta Title *
									</label>
									<input
										type='text'
										id='editMetaTitle'
										name='metaTitle'
										value={editFormData.metaTitle}
										onChange={handleEditInputChange}
										className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900'
										placeholder='Enter meta title'
										required
									/>
								</div>

								{/* Meta Description */}
								<div>
									<label
										htmlFor='editMetaDescription'
										className='block text-sm font-medium text-gray-700 mb-2'>
										Meta Description *
									</label>
									<textarea
										id='editMetaDescription'
										name='metaDescription'
										value={editFormData.metaDescription}
										onChange={handleEditInputChange}
										rows={3}
										className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900'
										placeholder='Enter meta description'
										required
									/>
								</div>

								{/* Image Upload */}
								<div>
									<label className='block text-sm font-medium text-gray-700 mb-2'>
										Blog Image *
									</label>
									<div
										className={`relative border-2 border-dashed rounded-lg p-6 transition-colors ${
											editDragActive
												? 'border-blue-400 bg-blue-50'
												: 'border-gray-300 hover:border-gray-400'
										} ${editImagePreview ? 'bg-gray-50' : ''}`}
										onDragEnter={handleEditDrag}
										onDragLeave={handleEditDrag}
										onDragOver={handleEditDrag}
										onDrop={handleEditDrop}>
										{editImagePreview ? (
											<div className='space-y-4'>
												<div className='relative'>
													<img
														src={editImagePreview}
														alt='Preview'
														className='w-full max-w-md h-48 object-cover rounded-lg mx-auto'
													/>
													{editIsUploading && (
														<div className='absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-center'>
															<div className='text-white text-center'>
																<svg
																	className='animate-spin h-8 w-8 mx-auto mb-2'
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
																<p className='text-sm'>Uploading...</p>
															</div>
														</div>
													)}
													{!editIsUploading && (
														<button
															type='button'
															onClick={removeEditImage}
															className='absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors'>
															<svg
																className='w-4 h-4'
																fill='none'
																stroke='currentColor'
																viewBox='0 0 24 24'>
																<path
																	strokeLinecap='round'
																	strokeLinejoin='round'
																	strokeWidth={2}
																	d='M6 18L18 6M6 6l12 12'
																/>
															</svg>
														</button>
													)}
												</div>
												<div className='text-center'>
													<p className='text-sm text-gray-600'>
														Image uploaded successfully! Drag a new image or click to replace.
													</p>
												</div>
											</div>
										) : (
											<div className='text-center'>
												<svg
													className='mx-auto h-12 w-12 text-gray-400'
													stroke='currentColor'
													fill='none'
													viewBox='0 0 48 48'>
													<path
														d='M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02'
														strokeWidth={2}
														strokeLinecap='round'
														strokeLinejoin='round'
													/>
												</svg>
												<div className='mt-4'>
													<label htmlFor='edit-file-upload' className='cursor-pointer'>
														<span className='mt-2 block text-sm font-medium text-gray-900'>
															Click to upload or drag and drop
														</span>
														<span className='mt-1 block text-sm text-gray-500'>
															JPEG, PNG, WebP up to 5MB
														</span>
													</label>
													<input
														id='edit-file-upload'
														name='edit-file-upload'
														type='file'
														className='sr-only'
														accept='image/*'
														onChange={handleEditFileInputChange}
													/>
												</div>
											</div>
										)}
									</div>
								</div>

								{/* Content */}
								<div>
									<label
										htmlFor='editContent'
										className='block text-sm font-medium text-gray-700 mb-2'>
										Content *
									</label>
									<textarea
										id='editContent'
										name='content'
										value={editFormData.content}
										onChange={handleEditInputChange}
										rows={10}
										className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 font-mono text-sm'
										placeholder='Enter blog content (supports HTML)'
										required
									/>
								</div>

								{/* Date */}
								<div>
									<label
										htmlFor='editDate'
										className='block text-sm font-medium text-gray-700 mb-2'>
										Date
									</label>
									<input
										type='date'
										id='editDate'
										name='date'
										value={editFormData.date}
										onChange={handleEditInputChange}
										className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900'
									/>
								</div>

								{/* Modal Actions */}
								<div className='flex justify-end space-x-3 pt-4 border-t'>
									<button
										type='button'
										onClick={closeEditModal}
										className='px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition duration-200'>
										Cancel
									</button>
									<button
										type='submit'
										disabled={isLoading}
										className='px-6 py-2 bg-linear-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed'>
										{isLoading ? (
											<span className='flex items-center'>
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
												Updating...
											</span>
										) : (
											'Update Blog'
										)}
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			)}
		</div>
	)
}
