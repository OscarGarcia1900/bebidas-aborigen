"use client";

import { useCart } from '@/context/CartContext';
import { formatCurrency } from '@/lib/format';
import Image from 'next/image';
import Link from 'next/link';

export default function CartPage() {
  const { items, total, add, removeOne, clear } = useCart();

  const whatsappCheckout = () => {
    const phoneNumber = "573115035991";
    let message = "¡Hola! Quiero hacer un pedido de Aborigen:\n\n";
    
    items.forEach((item) => {
      message += `• ${item.product.name} x${item.quantity} - ${formatCurrency(item.product.price * item.quantity)}\n`;
    });
    
    message += `\n💰 Total: ${formatCurrency(total)}\n\n¿Cuál es el costo de envío a mi dirección?`;
    
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  async function stripeCheckout() {
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
        alert('No se pudo iniciar el pago con Stripe.');
      }
    } catch (e) {
      alert('Error iniciando pago con Stripe');
    }
  }

  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-bold text-[--foreground]">🛒 Tu Carrito</h1>
        <Link href="/store" className="text-[--primary] hover:underline font-medium">
          ← Seguir comprando
        </Link>
      </div>

      {items.length === 0 ? (
        <div className="text-center py-16">
          <div className="text-6xl mb-4">🏺</div>
          <p className="text-xl text-[--secondary] mb-6">Tu carrito está vacío</p>
          <Link 
            href="/store" 
            className="inline-block rounded-lg bg-[--primary] px-8 py-3 font-semibold text-white hover:bg-[--primary]/90 transition-colors"
          >
            Explorar Productos
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Lista de productos */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div key={item.product.id} className="flex gap-4 rounded-xl border-2 border-[--border] bg-white p-4 shadow-sm">
                <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden bg-[--background]">
                  <Image
                    src={item.product.imageUrl}
                    alt={item.product.name}
                    width={96}
                    height={96}
                    className="w-full h-full object-contain"
                  />
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-lg text-[--foreground]">{item.product.name}</h3>
                  <p className="text-sm text-[--accent]">📍 {item.product.region}</p>
                  <p className="text-sm text-[--secondary] mt-1">{formatCurrency(item.product.price)} c/u</p>
                </div>

                <div className="flex flex-col items-end justify-between">
                  <button
                    onClick={() => removeOne(item.product.id)}
                    className="text-red-500 hover:text-red-700 text-sm font-medium"
                    aria-label="Eliminar"
                  >
                    🗑️ Eliminar
                  </button>
                  
                  <div className="flex items-center gap-2 bg-[--background] rounded-lg px-3 py-1">
                    <button
                      onClick={() => removeOne(item.product.id)}
                      className="text-xl font-bold text-[--primary] hover:text-[--foreground]"
                      aria-label="Restar uno"
                    >
                      −
                    </button>
                    <span className="w-8 text-center font-bold">{item.quantity}</span>
                    <button
                      onClick={() => add(item.product)}
                      className="text-xl font-bold text-[--primary] hover:text-[--foreground]"
                      aria-label="Sumar uno"
                    >
                      +
                    </button>
                  </div>

                  <span className="font-bold text-lg text-[--primary]">
                    {formatCurrency(item.product.price * item.quantity)}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Resumen del pedido */}
          <div className="lg:col-span-1">
            <div className="sticky top-20 rounded-xl border-2 border-[--accent] bg-white p-6 shadow-lg">
              <h2 className="text-2xl font-bold text-[--foreground] mb-6">Resumen del Pedido</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-[--secondary]">
                  <span>Subtotal ({items.reduce((sum, i) => sum + i.quantity, 0)} productos)</span>
                  <span>{formatCurrency(total)}</span>
                </div>
                <div className="flex justify-between text-[--secondary]">
                  <span>Envío</span>
                  <span className="text-sm">Se calcula al pagar</span>
                </div>
                <div className="border-t-2 border-[--border] pt-3 flex justify-between text-xl font-bold text-[--foreground]">
                  <span>Total</span>
                  <span>{formatCurrency(total)}</span>
                </div>
              </div>

              {/* Opciones de pago */}
              <div className="space-y-3">
                <button
                  onClick={whatsappCheckout}
                  className="w-full flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-6 py-4 font-bold text-white hover:bg-[#20BA5A] transition-all shadow-md hover:shadow-lg"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  Pedir por WhatsApp
                </button>

                <button
                  onClick={stripeCheckout}
                  className="w-full rounded-lg bg-[--primary] px-6 py-4 font-bold text-white hover:bg-[--primary]/90 transition-all shadow-md hover:shadow-lg"
                >
                  💳 Pagar con Tarjeta (Stripe)
                </button>

                <button
                  onClick={clear}
                  className="w-full rounded-lg border-2 border-[--border] px-6 py-3 font-medium text-[--secondary] hover:bg-[--background] transition-colors"
                >
                  🗑️ Vaciar Carrito
                </button>
              </div>

              <div className="mt-6 p-4 bg-green-50 border-2 border-green-200 rounded-lg">
                <p className="text-sm text-green-800">
                  <strong>✅ Envíos en Bogotá</strong><br />
                  Entregas en 24-48 horas
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
