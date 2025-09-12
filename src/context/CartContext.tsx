"use client";

import { createContext, useContext, useMemo, useState, ReactNode } from 'react';
import { Product } from '@/types/product';

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartContextValue {
  items: CartItem[];
  total: number;
  add: (product: Product) => void;
  removeOne: (productId: string) => void;
  clear: () => void;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const add = (product: Product) => {
    setItems((prev) => {
      const idx = prev.findIndex((i) => i.product.id === product.id);
      if (idx === -1) return [...prev, { product, quantity: 1 }];
      const next = [...prev];
      next[idx] = { ...next[idx], quantity: next[idx].quantity + 1 };
      return next;
    });
  };

  const removeOne = (productId: string) => {
    setItems((prev) => {
      const idx = prev.findIndex((i) => i.product.id === productId);
      if (idx === -1) return prev;
      const item = prev[idx];
      if (item.quantity <= 1) return prev.filter((i) => i.product.id !== productId);
      const next = [...prev];
      next[idx] = { ...item, quantity: item.quantity - 1 };
      return next;
    });
  };

  const clear = () => setItems([]);

  const total = useMemo(
    () => items.reduce((sum, i) => sum + i.product.price * i.quantity, 0),
    [items]
  );

  const value = useMemo(
    () => ({ items, total, add, removeOne, clear }),
    [items, total]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
