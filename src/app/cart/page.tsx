"use client";

import { useCart } from '@/context/CartContext';
import { formatCurrency } from '@/lib/format';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function CartPage() {
  const { items, total, add, removeOne, clear } = useCart();
  const [showPSEForm, setShowPSEForm] = useState(false);
  const [customerEmail, setCustomerEmail] = useState('');

  const createOrderMessage = () => {
    let message = "¡Hola! Quiero hacer un pedido de Aborigen:\n\n";
    items.forEach((item) => {
      message += `• ${item.product.name} x${item.quantity} - ${formatCurrency(item.product.price * item.quantity)}\n`;
    });
    message += `\n💰 Total: ${formatCurrency(total)}`;
    return message;
  };

  const whatsappCheckout = (paymentMethod: string = 'general') => {
    const phoneNumber = "573115035991";
    let message = createOrderMessage();
    
    if (paymentMethod === 'nequi') {
      message += `\n\n💜 Quiero pagar por Nequi\n¿Cuál es el número para transferir?`;
    } else if (paymentMethod === 'daviplata') {
      message += `\n\n🔴 Quiero pagar por Daviplata\n¿Cuál es el número para transferir?`;
    } else if (paymentMethod === 'pse') {
      message += `\n\n🏦 Quiero pagar por PSE\n¿Me envían los datos bancarios?`;
    } else if (paymentMethod === 'transferencia') {
      message += `\n\n💰 Quiero pagar por transferencia bancaria\n¿Me envían los datos de la cuenta?`;
    } else if (paymentMethod === 'efectivo') {
      message += `\n\n💵 Quiero pagar en efectivo contra entrega\n¿Cuál es el costo de envío a mi dirección?`;
    } else {
      message += `\n\n¿Cuál es el costo de envío a mi dirección?`;
    }
    
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  // Pago con PSE (Wompi)
  const handlePSECheckout = () => {
    setShowPSEForm(true);
  };

  const processPSEPayment = () => {
    if (!customerEmail || !customerEmail.includes('@')) {
      alert('Por favor ingresa un email válido');
      return;
    }

    // Por ahora, redirigir a WhatsApp con opción PSE hasta configurar Wompi correctamente
    const phoneNumber = "573115035991";
    let message = createOrderMessage();
    message += `\n\n🏦 Quiero pagar por PSE\n📧 Mi email: ${customerEmail}\n¿Me envían los datos bancarios?`;
    
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    
    // Cerrar el formulario PSE
    setShowPSEForm(false);
    setCustomerEmail('');
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
      
      // Si hay un error en la respuesta
      if (!res.ok || data.error) {
        console.error('Error de Stripe:', data.error);
        alert(`Error: ${data.error || 'No se pudo iniciar el pago con Stripe. Por favor usa otro método de pago.'}`);
        return;
      }
      
      // Si hay una URL, redirigir
      if (data.url) {
        window.location.href = data.url;
      } else {
        console.error('Respuesta de Stripe sin URL:', data);
        alert('No se pudo iniciar el pago con Stripe. Por favor usa otro método de pago.');
      }
    } catch (error) {
      console.error('Error al iniciar pago con Stripe:', error);
      alert('Error iniciando pago con Stripe. Por favor usa WhatsApp o contacta con nosotros.');
    }
  }

  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-bold text-[#2c1810]">🛒 Tu Carrito</h1>
        <Link href="/store" className="text-[#8b4513] hover:underline font-medium">
          ← Seguir comprando
        </Link>
      </div>

      {items.length === 0 ? (
        <div className="text-center py-16">
          <div className="text-6xl mb-4">🏺</div>
          <p className="text-xl text-[#5c4033] mb-6">Tu carrito está vacío</p>
          <Link 
            href="/store" 
            className="inline-block rounded-lg bg-[#8b4513] px-8 py-3 font-semibold text-white hover:bg-[#5c4033] transition-colors"
          >
            Explorar Productos
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Lista de productos */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div key={item.product.id} className="flex gap-4 rounded-xl border-2 border-[#d4c5b0] bg-white p-4 shadow-sm">
                <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden bg-[#f8f5f0]">
                  <Image
                    src={item.product.imageUrl}
                    alt={item.product.name}
                    width={96}
                    height={96}
                    className="w-full h-full object-contain"
                  />
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-lg text-[#2c1810]">{item.product.name}</h3>
                  <p className="text-sm text-[#d4a574]">📍 {item.product.region}</p>
                  <p className="text-sm text-[#5c4033] mt-1">{formatCurrency(item.product.price)} c/u</p>
                </div>

                <div className="flex flex-col items-end justify-between">
                  <button
                    onClick={() => removeOne(item.product.id)}
                    className="text-red-500 hover:text-red-700 text-sm font-medium"
                    aria-label="Eliminar"
                  >
                    🗑️ Eliminar
                  </button>
                  
                  <div className="flex items-center gap-2 bg-[#f8f5f0] rounded-lg px-3 py-1">
                    <button
                      onClick={() => removeOne(item.product.id)}
                      className="text-xl font-bold text-[#8b4513] hover:text-[#2c1810]"
                      aria-label="Restar uno"
                    >
                      −
                    </button>
                    <span className="w-8 text-center font-bold">{item.quantity}</span>
                    <button
                      onClick={() => add(item.product)}
                      className="text-xl font-bold text-[#8b4513] hover:text-[#2c1810]"
                      aria-label="Sumar uno"
                    >
                      +
                    </button>
                  </div>

                  <span className="font-bold text-lg text-[#8b4513]">
                    {formatCurrency(item.product.price * item.quantity)}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Resumen del pedido */}
          <div className="lg:col-span-1">
            <div className="sticky top-20 rounded-xl border-2 border-[#d4a574] bg-white p-6 shadow-lg">
              <h2 className="text-2xl font-bold text-[#2c1810] mb-6">Resumen del Pedido</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-[#5c4033]">
                  <span>Subtotal ({items.reduce((sum, i) => sum + i.quantity, 0)} productos)</span>
                  <span>{formatCurrency(total)}</span>
                </div>
                <div className="flex justify-between text-[#5c4033]">
                  <span>Envío</span>
                  <span className="text-sm">Se calcula al pagar</span>
                </div>
                <div className="border-t-2 border-[#d4c5b0] pt-3 flex justify-between text-xl font-bold text-[#2c1810]">
                  <span>Total</span>
                  <span>{formatCurrency(total)}</span>
                </div>
              </div>

              {/* Opciones de pago */}
              <div className="space-y-4">
                <h3 className="font-bold text-[#2c1810] text-center mb-2">Elige tu método de pago</h3>
                
                {/* Recomendado - WhatsApp General */}
                <div className="relative">
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-xs font-bold px-3 py-1 rounded-full shadow-md">
                    ⭐ Recomendado
                  </div>
                  <button
                    onClick={() => whatsappCheckout('general')}
                    className="w-full flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-6 py-4 font-bold text-white hover:bg-[#20BA5A] transition-all shadow-md hover:shadow-lg active:scale-95 transform mt-2"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    Pedir por WhatsApp
                  </button>
                </div>

                {/* Billeteras Digitales */}
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => whatsappCheckout('nequi')}
                    className="flex flex-col items-center justify-center gap-2 rounded-lg bg-[#FF006E] px-4 py-3 font-bold text-white hover:bg-[#d6005d] transition-all shadow-md hover:shadow-lg active:scale-95 transform"
                  >
                    <span className="text-2xl">💜</span>
                    <span className="text-sm">Nequi</span>
                  </button>
                  
                  <button
                    onClick={() => whatsappCheckout('daviplata')}
                    className="flex flex-col items-center justify-center gap-2 rounded-lg bg-[#ED1C24] px-4 py-3 font-bold text-white hover:bg-[#c71820] transition-all shadow-md hover:shadow-lg active:scale-95 transform"
                  >
                    <span className="text-2xl">🔴</span>
                    <span className="text-sm">Daviplata</span>
                  </button>
                </div>

                {/* PSE - Por WhatsApp (temporal hasta configurar Wompi) */}
                {!showPSEForm ? (
                  <button
                    onClick={handlePSECheckout}
                    className="w-full rounded-lg bg-[#0066CC] px-6 py-3 font-semibold text-white hover:bg-[#0052a3] transition-all shadow-md hover:shadow-lg active:scale-95 transform"
                  >
                    🏦 PSE - Débito a Cuentas
                  </button>
                ) : (
                  <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-[#0066CC]">🏦 Pagar con PSE</h4>
                      <button 
                        onClick={() => {
                          setShowPSEForm(false);
                          setCustomerEmail('');
                        }}
                        className="text-gray-500 hover:text-gray-700"
                      >
                        ✕
                      </button>
                    </div>
                    <p className="text-sm text-gray-700">Te contactaremos por WhatsApp con los datos para pagar por PSE</p>
                    <input
                      type="email"
                      placeholder="tu@email.com"
                      value={customerEmail}
                      onChange={(e) => setCustomerEmail(e.target.value)}
                      className="w-full px-4 py-2 border-2 border-blue-200 rounded-lg focus:border-blue-500 focus:outline-none"
                      required
                    />
                    <button
                      onClick={processPSEPayment}
                      className="w-full rounded-lg bg-[#0066CC] px-6 py-3 font-bold text-white hover:bg-[#0052a3] transition-all"
                    >
                      Solicitar Datos PSE →
                    </button>
                    <p className="text-xs text-gray-600 text-center">
                      Acepta todos los bancos colombianos
                    </p>
                  </div>
                )}

                {/* Transferencias */}
                <div className="space-y-2">
                  
                  <button
                    onClick={() => whatsappCheckout('transferencia')}
                    className="w-full rounded-lg bg-[#2E7D32] px-6 py-3 font-semibold text-white hover:bg-[#1b5e20] transition-all shadow-md hover:shadow-lg active:scale-95 transform"
                  >
                    💰 Transferencia Bancaria
                  </button>
                </div>

                {/* Tarjeta de Crédito */}
                <button
                  onClick={stripeCheckout}
                  className="w-full rounded-lg bg-[#8b4513] px-6 py-3 font-semibold text-white hover:bg-[#5c4033] transition-all shadow-md hover:shadow-lg active:scale-95 transform"
                >
                  💳 Tarjeta Crédito/Débito
                </button>

                {/* Efectivo */}
                <button
                  onClick={() => whatsappCheckout('efectivo')}
                  className="w-full rounded-lg bg-[#5c4033] px-6 py-3 font-semibold text-white hover:bg-[#3d2a1f] transition-all shadow-md hover:shadow-lg active:scale-95 transform"
                >
                  💵 Efectivo Contra Entrega
                </button>

                {/* Vaciar carrito */}
                <button
                  onClick={clear}
                  className="w-full rounded-lg border-2 border-[#d4c5b0] px-6 py-3 font-medium text-[#5c4033] hover:bg-[#f8f5f0] transition-colors mt-4"
                >
                  🗑️ Vaciar Carrito
                </button>
              </div>

              {/* Información de métodos de pago */}
              <div className="mt-6 p-4 bg-blue-50 border-2 border-blue-200 rounded-lg">
                <p className="text-xs text-blue-900 mb-2">
                  <strong>💡 ¿Cómo funciona?</strong>
                </p>
                <ul className="text-xs text-blue-800 space-y-1">
                  <li>• Al seleccionar un método, te conectarás con nosotros por WhatsApp</li>
                  <li>• Te enviaremos los datos de pago correspondientes</li>
                  <li>• Una vez confirmado el pago, procesamos tu pedido</li>
                  <li>• Todos los métodos son 100% seguros</li>
                </ul>
              </div>

              <div className="mt-4 p-4 bg-green-50 border-2 border-green-200 rounded-lg">
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
