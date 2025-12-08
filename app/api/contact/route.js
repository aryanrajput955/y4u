import {NextResponse} from 'next/server'
import {Resend} from 'resend'
import dbConnect from '@/lib/mongodb'
import Contact from '@/models/Contact'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request) {
	try {
		await dbConnect()

		const body = await request.json()
		const {name, email, phone, program, message} = body

		if (!name || !email || !phone || !program || !message) {
			return NextResponse.json(
				{success: false, error: 'Please fill in all required fields'},
				{status: 400}
			)
		}

		const contact = await Contact.create({
			name,
			email,
			phone,
			program,
			message,
		})

		try {
			await resend.emails.send({
				from: process.env.RESEND_FROM_EMAIL,
				to: process.env.RESEND_TO_EMAIL,
				subject: `New Contact Form Submission from ${name}`,
				html: `
					<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
						<h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
							New Contact Form Submission
						</h2>
						<div style="margin: 20px 0;">
							<p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
							<p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
							<p style="margin: 10px 0;"><strong>Phone:</strong> ${phone}</p>
							<p style="margin: 10px 0;"><strong>Program of Interest:</strong> ${program}</p>
							<p style="margin: 10px 0;"><strong>Message:</strong></p>
							<p style="background-color: #f3f4f6; padding: 15px; border-radius: 8px; margin: 10px 0;">
								${message}
							</p>
						</div>
						<div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
							<p>This email was sent from your website's contact form.</p>
						</div>
					</div>
				`,
			})
		} catch (emailError) {
			console.error('Error sending email:', emailError)
			// Continue even if email fails - data is already saved to database
		}

		return NextResponse.json(
			{
				success: true,
				message: 'Contact form submitted successfully',
				data: contact,
			},
			{status: 201}
		)
	} catch (error) {
		console.error('Error creating contact:', error)

		if (error.name === 'ValidationError') {
			return NextResponse.json(
				{success: false, error: error.message},
				{status: 400}
			)
		}

		return NextResponse.json(
			{success: false, error: 'Failed to submit contact form'},
			{status: 500}
		)
	}
}
