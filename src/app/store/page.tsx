"use client";

import { mockProducts } from '@/data/products';
import { useCart } from '@/context/CartContext';
import Image from 'next/image';
import { ShareButtons } from '@/components/ShareButtons';
import { formatCurrency } from '@/lib/format';

export default function StorePage() {
  const { add } = useCart();

  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-[#2c1810]">Nuestra Tienda</h1>
        <p className="mt-4 text-lg text-[#5c4033] max-w-2xl mx-auto">
          Descubre bebidas ancestrales que conectan con nuestras raíces culturales. 
          Cada botella cuenta una historia milenaria.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-2">
        {mockProducts.map((p) => {
          // Detectar tamaño de botella desde la descripción
          const getBottleSize = (desc: string) => {
            if (desc.includes('litro') || desc.includes('1L')) return '1 Litro';
            if (desc.includes('media')) return 'Media (375ml)';
            if (desc.includes('pequeña')) return 'Pequeña (250ml)';
            return '';
          };
          
          const bottleSize = getBottleSize(p.description);
          
          return (
            <div 
              key={p.id} 
              className="group rounded-xl border-2 border-[#d4c5b0] bg-white shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden relative"
            >
              {/* Badges en la esquina superior */}
              <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                {/* Badge de Campeón para Guarapo */}
                {p.id === 'guarapo-aborigen' && (
                  <div className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-white px-3 py-1.5 rounded-full font-bold text-sm shadow-lg flex items-center gap-1 animate-pulse">
                    🏆 Campeón 2024
                  </div>
                )}
                
                {/* Badge de Nuevo para Chapil */}
                {(p.id === 'chapil-375ml' || p.id === 'chapil-175ml') && (
                  <div className="bg-gradient-to-r from-green-400 to-emerald-500 text-white px-3 py-1.5 rounded-full font-bold text-sm shadow-lg flex items-center gap-1">
                    ✨ Nuevo
                  </div>
                )}
              </div>
              
              {/* Badge de tamaño en esquina superior derecha */}
              {bottleSize && (
                <div className="absolute top-4 right-4 z-10 bg-[#8b4513] text-white px-3 py-1.5 rounded-full font-semibold text-xs shadow-lg">
                  {bottleSize}
                </div>
              )}
              
              <div className="overflow-hidden bg-[#f8f5f0] flex items-center justify-center">
                <Image
                  src={p.imageUrl}
                  alt={p.name}
                  width={800}
                  height={500}
                  className="h-80 w-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-[#2c1810]">{p.name}</h3>
                    <p className="text-sm text-[#d4a574] font-medium mt-1">📍 {p.region}</p>
                  </div>
                  <div className="text-right ml-4">
                    <span className="text-3xl font-bold text-[#8b4513] block">{formatCurrency(p.price)}</span>
                    {bottleSize && (
                      <span className="text-xs text-[#5c4033] font-medium">{bottleSize}</span>
                    )}
                  </div>
                </div>

                <p className="text-[#5c4033] leading-relaxed mb-6 line-clamp-4">
                  {p.description}
                </p>

                <button
                  onClick={() => add(p)}
                  className="w-full rounded-lg bg-[#8b4513] px-6 py-3 font-semibold text-white hover:bg-[#5c4033] transition-colors shadow-md hover:shadow-lg active:scale-95 transform"
                >
                  🛒 Agregar al carrito
                </button>

                <ShareButtons 
                  productName={p.name}
                  productDescription={p.description}
                  productUrl={`https://aborigen.com/store#${p.id}`}
                />
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}