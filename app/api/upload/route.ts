import { NextRequest, NextResponse } from 'next/server'
import cloudinary from '../../lib/cloudinary'

interface CloudinaryUploadResult {
	secure_url: string
	public_id: string
	[key: string]: unknown
}

export async function POST(request: NextRequest) {
	try {
		const formData = await request.formData()
		const file = formData.get('file') as File

		if (!file) {
			return NextResponse.json(
				{ success: false, error: 'No file provided' },
				{ status: 400 }
			)
		}

		// Validate file type
		const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp']
		if (!allowedTypes.includes(file.type)) {
			return NextResponse.json(
				{
					success: false,
					error:
						'Invalid file type. Only JPEG, PNG, and WebP images are allowed.',
				},
				{ status: 400 }
			)
		}

		// Validate file size (max 5MB)
		const maxSize = 5 * 1024 * 1024 // 5MB
		if (file.size > maxSize) {
			return NextResponse.json(
				{ success: false, error: 'File size too large. Maximum size is 5MB.' },
				{ status: 400 }
			)
		}

		// Convert file to buffer
		const bytes = await file.arrayBuffer()
		const buffer = Buffer.from(bytes)

		// Upload to Cloudinary
		const result = await new Promise<CloudinaryUploadResult>(
			(resolve, reject) => {
				const uploadStream = cloudinary.uploader.upload_stream(
					{
						folder: 'digitalharidwar/blogs',
						public_id: `blog-${Date.now()}`,
						resource_type: 'auto',
						transformation: [
							{ width: 1200, height: 800, crop: 'limit' },
							{ quality: 'auto' },
						],
					},
					(error, result) => {
						if (error) {
							reject(error)
						} else {
							resolve(result as CloudinaryUploadResult)
						}
					}
				)

				uploadStream.end(buffer)
			}
		)

		return NextResponse.json({
			success: true,
			url: result.secure_url,
			public_id: result.public_id,
		})
	} catch (error: unknown) {
		console.error('Upload error:', error)
		return NextResponse.json(
			{ success: false, error: 'Failed to upload image' },
			{ status: 500 }
		)
	}
}
