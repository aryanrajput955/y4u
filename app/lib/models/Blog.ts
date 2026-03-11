import mongoose, {Schema, Document, models} from 'mongoose'

export interface IBlog extends Document {
	metaTitle: string
	metaDescription: string
	image: string
	content: string
	date: Date
	slug: string
	createdAt: Date
	updatedAt: Date
}

const BlogSchema = new Schema<IBlog>(
	{
		metaTitle: {
			type: String,
			required: [true, 'Meta title is required'],
			trim: true,
		},
		metaDescription: {
			type: String,
			required: [true, 'Meta description is required'],
			trim: true,
		},
		image: {
			type: String,
			required: [true, 'Image is required'],
		},
		content: {
			type: String,
			required: [true, 'Content is required'],
		},
		date: {
			type: Date,
			default: Date.now,
		},
		slug: {
			type: String,
			required: true,
			unique: true,
		},
	},
	{
		timestamps: true,
	}
)

const Blog = models.Blog || mongoose.model<IBlog>('Blog', BlogSchema)

export default Blog
