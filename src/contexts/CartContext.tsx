
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Product } from '@/types/product';

interface CartItem {
  product: Product;
  quantity: number;
  variant?: string;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product, variant?: string) => void;
  removeFromCart: (productId: string, variant?: string) => void;
  getCartTotal: () => number;
  getCartCount: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = (product: Product, variant?: string) => {
    setItems(prev => {
      const existingItem = prev.find(item => 
        item.product.id === product.id && item.variant === variant
      );
      
      if (existingItem) {
        return prev.map(item =>
          item.product.id === product.id && item.variant === variant
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      
      return [...prev, { product, quantity: 1, variant }];
    });
  };

  const removeFromCart = (productId: string, variant?: string) => {
    setItems(prev => prev.filter(item => 
      !(item.product.id === productId && item.variant === variant)
    ));
  };

  const getCartTotal = () => {
    return items.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  };

  const getCartCount = () => {
    return items.reduce((count, item) => count + item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{
      items,
      addToCart,
      removeFromCart,
      getCartTotal,
      getCartCount
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
