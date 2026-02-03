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
  
  // Validar formato de la clave de Stripe
  if (!secretKey.startsWith('sk_test_') && !secretKey.startsWith('sk_live_')) {
    throw new Error(`Invalid Stripe API Key format. Expected key starting with 'sk_test_' or 'sk_live_', but got key starting with '${secretKey.substring(0, 7)}...'. Please check your STRIPE_SECRET_KEY in Vercel environment variables.`);
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
    const MINIMUM_AMOUNT_COP = 2000; // Mínimo de Stripe: equivalente a $0.50 USD
    
    for (const item of items) {
      if (!item.name || !item.amount || !item.quantity) {
        return NextResponse.json({ error: 'Faltan datos en los productos' }, { status: 400 });
      }
      if (item.amount <= 0 || item.quantity <= 0) {
        return NextResponse.json({ error: 'Los precios y cantidades deben ser mayores a cero' }, { status: 400 });
      }
      // Validar monto mínimo por item
      if (item.amount < MINIMUM_AMOUNT_COP) {
        return NextResponse.json({ 
          error: `El monto mínimo por producto es $${MINIMUM_AMOUNT_COP.toLocaleString('es-CO')} COP (equivalente a $0.50 USD). El producto "${item.name}" tiene un valor de $${item.amount.toLocaleString('es-CO')} COP.` 
        }, { status: 400 });
      }
    }

    // Calcular el total para validar el monto mínimo total
    const totalAmount = items.reduce((sum, item) => sum + (item.amount * item.quantity), 0);
    if (totalAmount < MINIMUM_AMOUNT_COP) {
      return NextResponse.json({ 
        error: `El monto total mínimo es $${MINIMUM_AMOUNT_COP.toLocaleString('es-CO')} COP (equivalente a $0.50 USD). Tu carrito tiene un total de $${totalAmount.toLocaleString('es-CO')} COP.` 
      }, { status: 400 });
    }

    const stripe = getStripe();
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      line_items: items.map((i: CheckoutItem) => ({
        price_data: {
          currency: 'cop', // Pesos colombianos
          product_data: { name: i.name },
          // Stripe espera el monto en centavos (similar a USD)
          // $30,000 COP = 3,000,000 centavos
          unit_amount: Math.round(i.amount * 100),
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
