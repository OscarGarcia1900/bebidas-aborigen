import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

interface CheckoutItem {
  name: string;
  amount: number;
  quantity: number;
}

function getStripe() {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  
  if (!secretKey) {
    throw new Error('STRIPE_SECRET_KEY is not set. Please configure it in your environment variables.');
  }
  
  return new Stripe(secretKey, {
    apiVersion: '2025-08-27.basil',
  });
}

export async function POST(req: NextRequest) {
  try {
    const { items } = await req.json() as { items: CheckoutItem[] };
    // items: [{ name, amount, quantity }]

    const stripe = getStripe();
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      line_items: items.map((i: CheckoutItem) => ({
        price_data: {
          currency: 'usd',
          product_data: { name: i.name },
          unit_amount: Math.round(i.amount * 100),
        },
        quantity: i.quantity,
      })),
      success_url: `${req.nextUrl.origin}/cart?success=true`,
      cancel_url: `${req.nextUrl.origin}/cart?canceled=true`,
    });

    return NextResponse.json({ id: session.id, url: session.url });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
