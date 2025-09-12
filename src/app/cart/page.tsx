"use client";

import { useCart } from '@/context/CartContext';
import { formatCurrency } from '@/lib/format';

export default function CartPage() {
  const { items, total, add, removeOne, clear } = useCart();

  async function checkout() {
    try {
      const res = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: items.map((i) => ({
            name: i.product.name,
            amount: i.product.price,
            quantity: i.quantity,
          })),
        }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert('No se pudo iniciar el pago.');
      }
    } catch (e) {
      alert('Error iniciando pago');
    }
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold">Tu Carrito</h1>

      {items.length === 0 ? (
        <p className="mt-4 text-[--secondary]">Tu carrito está vacío.</p>
      ) : (
        <div className="mt-6 space-y-4">
          {items.map((item) => (
            <div key={item.product.id} className="flex items-center justify-between rounded-md border p-4">
              <div>
                <p className="font-medium">{item.product.name}</p>
                <p className="text-sm text-[--secondary]">{item.product.region}</p>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => removeOne(item.product.id)}
                  className="rounded-md border px-3 py-1"
                  aria-label="Restar uno"
                >
                  −
                </button>
                <span className="w-6 text-center">{item.quantity}</span>
                <button
                  onClick={() => add(item.product)}
                  className="rounded-md border px-3 py-1"
                  aria-label="Sumar uno"
                >
                  +
                </button>
              </div>
              <span className="font-semibold">
                {formatCurrency(item.product.price * item.quantity)}
              </span>
            </div>
          ))}

          <div className="mt-6 flex items-center justify-between border-t pt-4">
            <span className="text-lg font-semibold">Total</span>
            <span className="text-lg font-semibold">{formatCurrency(total)}</span>
          </div>

          <div className="mt-6 flex gap-3">
            <button onClick={clear} className="rounded-md border px-4 py-2">Vaciar</button>
            <button onClick={checkout} className="rounded-md bg-[--primary] px-6 py-2 font-semibold text-background hover:bg-[--primary]/90">
              Pagar con Stripe
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
