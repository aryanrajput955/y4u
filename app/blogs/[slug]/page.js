import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, ArrowLeft } from 'lucide-react'
import dbConnect from '../../lib/mongodb'
import Blog from '../../lib/models/Blog'

export async function generateMetadata({ params }) {
	const { slug } = await params
	await dbConnect()
	const blog = await Blog.findOne({ slug }).lean()
	if (!blog) return {}
	return {
		title: `${blog.metaTitle} - Y4U Ultimate`,
		description: blog.metaDescription,
		openGraph: {
			title: blog.metaTitle,
			description: blog.metaDescription,
			images: [{ url: blog.image }],
		},
	}
}

export default async function BlogDetailPage({ params }) {
	const { slug } = await params
	await dbConnect()
	const blog = await Blog.findOne({ slug }).lean()

	if (!blog) notFound()

	return (
		<div className='min-h-screen bg-background'>
			<article className='max-w-3xl mx-auto px-6 py-12 md:py-20'>

				{/* Back */}
				<Link
					href='/blogs'
					className='inline-flex mt-10 items-center gap-2 text-muted-foreground hover:text-primary text-sm mb-8 transition-colors group'
				>
					<ArrowLeft size={15} className='group-hover:-translate-x-0.5 transition-transform' />
					Back to Blog
				</Link>

				{/* Date */}
				<div className='flex items-center gap-1.5 text-sm text-muted-foreground mb-4'>
					<Calendar size={14} />
					<time dateTime={blog.date}>
						{new Date(blog.date).toLocaleDateString('en-IN', {
							year: 'numeric',
							month: 'long',
							day: 'numeric',
						})}
					</time>
				</div>

				{/* Title */}
				<h1 className='text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight'>
					{blog.metaTitle}
				</h1>

				{/* Cover Image */}
				<div className='relative h-56 md:h-[420px] w-full rounded-2xl overflow-hidden mb-10 border border-border'>
					<Image
						src={blog.image}
						alt={blog.metaTitle}
						fill
						className='object-cover'
						priority
					/>
				</div>

				{/* Content */}
				<div
					className='blog-content'
					dangerouslySetInnerHTML={{ __html: blog.content }}
				/>

			</article>
		</div>
	)
}
