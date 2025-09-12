"use client";

import { mockProducts } from '@/data/products';
import { useCart } from '@/context/CartContext';
import Image from 'next/image';

export default function StorePage() {
  const { add } = useCart();

  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <h1 className="text-3xl font-bold">Tienda</h1>
      <p className="mt-2 text-[--secondary]">Explora nuestra selecci n de bebidas.</p>

      <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {mockProducts.map((p) => (
          <div key={p.id} className="rounded-lg border border-black/10 p-3">
            <div className="overflow-hidden rounded-md">
              <Image
                src={p.imageUrl}
                alt={p.name}
                width={600}
                height={400}
                className="h-48 w-full object-cover"
              />
            </div>
            <div className="mt-3 flex items-start justify-between">
              <div>
                <h3 className="font-medium">{p.name}</h3>
                <p className="text-sm text-[--secondary]">{p.region}</p>
              </div>
              <span className="font-semibold">${p.price.toFixed(2)}</span>
            </div>
            <button
              onClick={() => add(p)}
              className="mt-3 w-full rounded-md bg-[--primary] px-4 py-2 font-semibold text-background hover:bg-[--primary]/90"
            >
              Agregar al carrito
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
