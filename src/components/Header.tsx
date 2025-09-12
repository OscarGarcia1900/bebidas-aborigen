"use client";

import Link from 'next/link';
import { useCart } from '@/context/CartContext';

export function Header() {
  const { items } = useCart();
  const qty = items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <nav className="flex items-center space-x-6 text-sm font-medium">
          <Link
            href="/"
            className="mr-6 flex items-center space-x-2 text-lg font-semibold"
          >
            Bebidas Ancestrales
          </Link>
          <Link href="/store">Tienda</Link>
          <Link href="/stories">Historias</Link>
          <Link href="/about">Nosotros</Link>
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <Link aria-label="Carrito de compras" className="relative rounded-full p-2" href="/cart">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <circle cx="8" cy="21" r="1" />
              <circle cx="19" cy="21" r="1" />
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.16" />
            </svg>
            {qty > 0 && (
              <span className="absolute -right-1 -top-1 rounded-full bg-[--primary] px-1.5 text-xs font-bold text-background">
                {qty}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}
