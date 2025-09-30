"use client";

import { mockProducts } from '@/data/products';
import { useCart } from '@/context/CartContext';
import Image from 'next/image';

export default function StorePage() {
  const { add } = useCart();

  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-[--foreground]">Nuestra Tienda</h1>
        <p className="mt-4 text-lg text-[--secondary] max-w-2xl mx-auto">
          Descubre bebidas ancestrales que conectan con nuestras raíces culturales. 
          Cada botella cuenta una historia milenaria.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-2">
        {mockProducts.map((p) => (
          <div 
            key={p.id} 
            className="group rounded-xl border-2 border-[--border] bg-white shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
          >
            <div className="overflow-hidden">
              <Image
                src={p.imageUrl}
                alt={p.name}
                width={800}
                height={500}
                className="h-64 w-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-2xl font-bold text-[--foreground]">{p.name}</h3>
                  <p className="text-sm text-[--accent] font-medium mt-1">📍 {p.region}</p>
                </div>
                <span className="text-2xl font-bold text-[--primary]">${p.price.toFixed(2)}</span>
              </div>

              <p className="text-[--secondary] leading-relaxed mb-6">
                {p.description}
              </p>

              <button
                onClick={() => add(p)}
                className="w-full rounded-lg bg-[--primary] px-6 py-3 font-semibold text-white hover:bg-[--primary]/90 transition-colors shadow-md hover:shadow-lg"
              >
                🛒 Agregar al carrito
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}