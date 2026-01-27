// Configuración de Wompi para PSE y otros métodos de pago

export const WOMPI_PUBLIC_KEY = process.env.NEXT_PUBLIC_WOMPI_PUBLIC_KEY || 'pub_test_default';
export const WOMPI_API_URL = 'https://production.wompi.co/v1';
export const WOMPI_CHECKOUT_URL = 'https://checkout.wompi.co/p/';

// Crear transacción en Wompi
export async function createWompiTransaction(
  amount: number, // Monto en pesos colombianos
  reference: string, // Referencia única del pedido
  customerEmail: string,
  redirectUrl: string
) {
  try {
    const response = await fetch(`${WOMPI_API_URL}/transactions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${WOMPI_PUBLIC_KEY}`,
      },
      body: JSON.stringify({
        amount_in_cents: amount * 100, // Wompi usa centavos
        currency: 'COP',
        customer_email: customerEmail,
        payment_method: {
          type: 'PSE', // PSE, CARD, NEQUI
        },
        reference: reference,
        redirect_url: redirectUrl,
      }),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error creating Wompi transaction:', error);
    throw error;
  }
}

// Generar referencia única para el pedido
export function generateOrderReference(): string {
  const timestamp = Date.now();
  const random = Math.floor(Math.random() * 10000);
  return `ABG-${timestamp}-${random}`;
}

// Formatear monto para Wompi (en centavos)
export function formatAmountForWompi(amount: number): number {
  return Math.round(amount * 100);
}

// Verificar estado de transacción
export async function getTransactionStatus(transactionId: string) {
  try {
    const response = await fetch(`${WOMPI_API_URL}/transactions/${transactionId}`, {
      headers: {
        'Authorization': `Bearer ${WOMPI_PUBLIC_KEY}`,
      },
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error getting transaction status:', error);
    throw error;
  }
}

