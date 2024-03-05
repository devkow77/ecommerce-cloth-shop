import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
	const body = await req.json();

	const user = process.env.NEXT_PUBLIC_USER_EMAIL as string;

	const transporter = nodemailer.createTransport({
		host: 'smtp.gmail.com',
		port: 465,
		secure: true,
		auth: {
			user: user,
			pass: process.env.NEXT_PUBLIC_USER_PASSWORD as string,
		},
	});

	try {
		const mail = await transporter.sendMail({
			from: user,
			to: 'kowalsky429@gmail.com',
			replyTo: body.email,
			subject: `Contact form submission (fendie shop) from ${body.email}`,
			html: `
                <p>Email: ${body.email}</p>
                <p>Message: ${body.message}</p>
            `,
		});

		console.log(`Message sent: ${mail.messageId}`);
		return NextResponse.json({ error: 'Successfully sent email' });
	} catch (error) {
		console.log(`/API/CONTACT: ${error}`);
		return NextResponse.json({ error: 'Failed to send email' });
	}
}
