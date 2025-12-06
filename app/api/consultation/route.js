import {NextResponse} from 'next/server'
import dbConnect from '@/lib/mongodb'
import Consultation from '@/models/Consultation'

export async function POST(request) {
	try {
		await dbConnect()

		const body = await request.json()
		const {fullName, phoneNumber, email, content} = body

		if (!fullName || !phoneNumber || !email) {
			return NextResponse.json(
				{success: false, error: 'Please fill in all required fields'},
				{status: 400}
			)
		}

		const consultation = await Consultation.create({
			fullName,
			phoneNumber,
			email,
			content: content || '',
		})

		return NextResponse.json(
			{
				success: true,
				message: 'Consultation request submitted successfully',
				data: consultation,
			},
			{status: 201}
		)
	} catch (error) {
		console.error('Error creating consultation:', error)

		if (error.name === 'ValidationError') {
			return NextResponse.json(
				{success: false, error: error.message},
				{status: 400}
			)
		}

		return NextResponse.json(
			{success: false, error: 'Failed to submit consultation request'},
			{status: 500}
		)
	}
}
