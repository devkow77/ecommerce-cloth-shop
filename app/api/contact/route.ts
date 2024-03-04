import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
	const { email, message } = await req.json();

	const user = process.env.user;

	const transporter = nodemailer.createTransport({
		host: 'smtp.gmail.com',
		port: 465,
		secure: true,
		auth: {
			user: user,
			pass: process.env.pass,
		},
	});

	try {
		const mail = await transporter.sendMail({
			from: user,
			to: 'kowalsky429@gmail.com',
			replyTo: email,
			subject: `Contact form submission (fendie shop) from ${email}`,
			html: `
                <p>Email: ${email}</p>
                <p>Message: ${message}</p>
            `,
		});

		console.log('Message sent: ', mail.messageId);
	} catch (error) {
		console.log(`/API/CONTACT: ${error}`);
		return NextResponse.json({ error: 'Failed to send email' });
	}
}
