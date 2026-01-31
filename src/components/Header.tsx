"use client";

import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { useState } from 'react';

export function Header() {
  const { items } = useCart();
  const qty = items.reduce((sum, i) => sum + i.quantity, 0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#d4a574] bg-[#d4a574] backdrop-blur shadow-md">
      <div className="container flex h-14 max-w-screen-2xl items-center px-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center space-x-2 text-lg font-semibold text-white"
        >
          🏺 Aborigen
        </Link>

        {/* Desktop Navigation */}
        <nav className="ml-6 hidden md:flex items-center space-x-6 text-sm font-medium text-white">
          <Link href="/" className="hover:text-white/80 transition-colors">
            Inicio
          </Link>
          <Link href="/store" className="hover:text-white/80 transition-colors">
            Tienda
          </Link>
          <Link href="/stories" className="hover:text-white/80 transition-colors">
            Historias
          </Link>
          <Link href="/distribuidores" className="hover:text-white/80 transition-colors">
            Distribuidores
          </Link>
          <Link href="/about" className="hover:text-white/80 transition-colors">
            Nosotros
          </Link>
          <Link href="/contact" className="hover:text-white/80 transition-colors">
            Contacto
          </Link>
        </nav>

        {/* Right side: Cart + Mobile Menu Button */}
        <div className="flex flex-1 items-center justify-end space-x-2">
          {/* Cart */}
          <Link 
            aria-label="Carrito de compras" 
            className="relative rounded-full p-2 hover:bg-white/20 transition-colors text-white" 
            href="/cart"
          >
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
              <span className="absolute -right-1 -top-1 rounded-full bg-[#8b4513] px-1.5 text-xs font-bold text-white">
                {qty}
              </span>
            )}
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden rounded-full p-2 hover:bg-white/20 transition-colors text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menú"
          >
            {mobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/30 bg-[#d4a574]">
          <nav className="container px-4 py-4 flex flex-col space-y-3">
            <Link 
              href="/" 
              className="text-base font-medium text-white hover:text-white/80 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              🏠 Inicio
            </Link>
            <Link 
              href="/store" 
              className="text-base font-medium text-white hover:text-white/80 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              🛒 Tienda
            </Link>
            <Link 
              href="/stories" 
              className="text-base font-medium text-white hover:text-white/80 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              📖 Historias
            </Link>
            <Link 
              href="/distribuidores" 
              className="text-base font-medium text-white hover:text-white/80 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              🤝 Distribuidores
            </Link>
            <Link 
              href="/about" 
              className="text-base font-medium text-white hover:text-white/80 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              👋 Nosotros
            </Link>
            <Link 
              href="/contact" 
              className="text-base font-medium text-white hover:text-white/80 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              📧 Contacto
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}