import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

export async function POST(req: NextRequest) {
	const stripe = new Stripe(process.env.STRIPE_SECRET_API_KEY as string);
	const body = await req.json();
	let priceId = body.priceId;

	const session = await stripe.checkout.sessions.create({
		line_items: [
			{
				price: priceId,
				quantity: 1,
			},
		],
		mode: 'payment',
		success_url: 'http://localhost:3000/success',
		cancel_url: 'http://localhost:3000',
	});

	return NextResponse.json(session.url);
}
