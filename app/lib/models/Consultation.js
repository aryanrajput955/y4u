import mongoose from 'mongoose'

const ConsultationSchema = new mongoose.Schema(
	{
		fullName: {
			type: String,
			required: [true, 'Please provide your full name'],
			trim: true,
			maxlength: [100, 'Name cannot be more than 100 characters'],
		},
		phoneNumber: {
			type: String,
			required: [true, 'Please provide your phone number'],
			trim: true,
		},
		email: {
			type: String,
			required: [true, 'Please provide your email'],
			trim: true,
			lowercase: true,
		},
		content: {
			type: String,
			trim: true,
			maxlength: [1000, 'Content cannot be more than 1000 characters'],
		},
		status: {
			type: String,
			enum: ['pending', 'contacted', 'completed'],
			default: 'pending',
		},
	},
	{
		timestamps: true,
	}
)

export default mongoose.models.Consultation ||
	mongoose.model('Consultation', ConsultationSchema)
