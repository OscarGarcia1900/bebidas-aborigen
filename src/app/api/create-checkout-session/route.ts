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
    
    // Validar que hay items
    if (!items || items.length === 0) {
      return NextResponse.json({ error: 'No hay productos en el carrito' }, { status: 400 });
    }

    // Validar que cada item tenga los campos requeridos
    for (const item of items) {
      if (!item.name || !item.amount || !item.quantity) {
        return NextResponse.json({ error: 'Faltan datos en los productos' }, { status: 400 });
      }
      if (item.amount <= 0 || item.quantity <= 0) {
        return NextResponse.json({ error: 'Los precios y cantidades deben ser mayores a cero' }, { status: 400 });
      }
    }

    const stripe = getStripe();
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      line_items: items.map((i: CheckoutItem) => ({
        price_data: {
          currency: 'cop', // Pesos colombianos
          product_data: { name: i.name },
          unit_amount: Math.round(i.amount), // Los precios ya están en pesos colombianos
        },
        quantity: i.quantity,
      })),
      success_url: `${req.nextUrl.origin}/cart?success=true`,
      cancel_url: `${req.nextUrl.origin}/cart?canceled=true`,
    });

    if (!session.url) {
      return NextResponse.json({ error: 'No se pudo crear la sesión de pago' }, { status: 500 });
    }

    return NextResponse.json({ id: session.id, url: session.url });
  } catch (error) {
    console.error('Error en create-checkout-session:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    
    // Mensajes de error más específicos
    if (errorMessage.includes('STRIPE_SECRET_KEY')) {
      return NextResponse.json({ 
        error: 'Stripe no está configurado. Por favor contacta al administrador.' 
      }, { status: 500 });
    }
    
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
