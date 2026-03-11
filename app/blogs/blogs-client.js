'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Calendar, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'

const POSTS_PER_PAGE = 6

export default function BlogsClient() {
	const [posts, setPosts] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(false)
	const [currentPage, setCurrentPage] = useState(1)

	useEffect(() => {
		fetch('/api/blogs')
			.then((res) => {
				if (!res.ok) throw new Error('Failed')
				return res.json()
			})
			.then((data) => {
				setPosts(data.data || [])
				setLoading(false)
			})
			.catch(() => {
				setError(true)
				setLoading(false)
			})
	}, [])

	const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE)
	const paginatedPosts = posts.slice(
		(currentPage - 1) * POSTS_PER_PAGE,
		currentPage * POSTS_PER_PAGE
	)

	const handlePageChange = (page) => {
		if (page >= 1 && page <= totalPages) {
			setCurrentPage(page)
			window.scrollTo({ top: 0, behavior: 'smooth' })
		}
	}

	return (
		<div className='min-h-screen bg-background'>

			{/* Hero */}
			<section className='pt-20 md:pt-32 pb-8 md:pb-16 bg-background relative overflow-hidden border-b border-border'>
				<div className='absolute inset-0 opacity-5 grid-pattern' />
				<div className='max-w-3xl mx-auto px-6 relative z-10 text-center'>
					<span className='text-primary text-sm font-medium uppercase tracking-wider'>
						Insights & Knowledge
					</span>
					<h1 className='text-4xl md:text-5xl font-bold text-foreground mt-4 mb-4 leading-tight animate-fade-in-up'>
						Our <span className='text-primary'>Blog</span>
					</h1>
					<p className='text-muted-foreground text-lg leading-relaxed animate-fade-in-up animation-delay-200'>
						Stay updated with industry trends, skill-building tips, and success stories from our training programs.
					</p>
				</div>
			</section>

			{/* Posts */}
			<section className='py-12 md:py-20'>
				<div className='max-w-7xl mx-auto px-6'>

					{/* Loading Skeleton */}
					{loading && (
						<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
							{Array.from({ length: 6 }).map((_, i) => (
								<div key={i} className='bg-card rounded-3xl border border-border overflow-hidden animate-pulse'>
									<div className='h-48 bg-muted' />
									<div className='p-6 space-y-3'>
										<div className='h-3 bg-muted rounded w-1/4' />
										<div className='h-5 bg-muted rounded w-full' />
										<div className='h-5 bg-muted rounded w-4/5' />
										<div className='h-4 bg-muted rounded w-full' />
										<div className='h-4 bg-muted rounded w-3/4' />
									</div>
								</div>
							))}
						</div>
					)}

					{/* Error */}
					{error && (
						<div className='text-center py-20 text-muted-foreground'>
							Failed to load posts. Please try again later.
						</div>
					)}

					{/* Empty */}
					{!loading && !error && posts.length === 0 && (
						<div className='text-center py-20 text-muted-foreground'>
							No blog posts yet. Check back soon!
						</div>
					)}

					{/* Posts Grid */}
					{!loading && !error && posts.length > 0 && (
						<>
							<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
								{paginatedPosts.map((post) => (
									<Link
										key={post._id}
										href={`/blogs/${post.slug}`}
										className='group flex flex-col bg-card rounded-3xl border border-border/50 overflow-hidden shadow-sm hover:shadow-xl hover:shadow-primary/5 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1'
									>
										<div className='relative h-48 w-full overflow-hidden'>
											<Image
												src={post.image}
												alt={post.metaTitle}
												fill
												className='object-cover group-hover:scale-105 transition-transform duration-500'
											/>
										</div>

										<div className='p-6 flex flex-col grow'>
											<div className='flex items-center gap-1.5 text-xs text-muted-foreground mb-3'>
												<Calendar size={13} />
												<time dateTime={post.date}>
													{new Date(post.date).toLocaleDateString('en-IN', {
														year: 'numeric',
														month: 'short',
														day: 'numeric',
													})}
												</time>
											</div>

											<h2 className='text-lg font-bold text-foreground mb-2 leading-snug group-hover:text-primary transition-colors duration-300 line-clamp-2'>
												{post.metaTitle}
											</h2>

											<p className='text-muted-foreground text-sm leading-relaxed mb-5 grow line-clamp-3'>
												{post.metaDescription}
											</p>

											<div className='flex items-center gap-1.5 text-primary text-sm font-semibold mt-auto'>
												Read More
												<ArrowRight size={15} className='group-hover:translate-x-1 transition-transform' />
											</div>
										</div>
									</Link>
								))}
							</div>

							{/* Pagination */}
							{totalPages > 1 && (
								<div className='mt-12 flex justify-center items-center gap-2 flex-wrap'>
									<button
										onClick={() => handlePageChange(currentPage - 1)}
										disabled={currentPage === 1}
										className='flex items-center gap-1 px-4 py-2 rounded-full border border-border text-sm font-medium text-foreground hover:bg-muted transition-colors disabled:opacity-40 disabled:cursor-not-allowed'
									>
										<ChevronLeft size={16} /> Prev
									</button>

									{Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
										<button
											key={page}
											onClick={() => handlePageChange(page)}
											className={`w-9 h-9 rounded-full text-sm font-semibold transition-colors ${
												currentPage === page
													? 'bg-primary text-primary-foreground'
													: 'border border-border text-foreground hover:bg-muted'
											}`}
										>
											{page}
										</button>
									))}

									<button
										onClick={() => handlePageChange(currentPage + 1)}
										disabled={currentPage === totalPages}
										className='flex items-center gap-1 px-4 py-2 rounded-full border border-border text-sm font-medium text-foreground hover:bg-muted transition-colors disabled:opacity-40 disabled:cursor-not-allowed'
									>
										Next <ChevronRight size={16} />
									</button>
								</div>
							)}
						</>
					)}

				</div>
			</section>

		</div>
	)
}
