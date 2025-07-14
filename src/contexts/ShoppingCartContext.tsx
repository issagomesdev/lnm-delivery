'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type ShoppingCartContextType = {
  cart: any[];
  addItem: (item: Omit<any, 'id'>) => void;
  removeItem: (id: number) => void;
  clearCart: () => void;
  updateItemQuantity: (id: number, quantity: number) => void;
  updateItemObservation: (id: number, observation: string) => void;
};

const ShoppingCartContext = createContext<ShoppingCartContextType | undefined>(undefined);

export const ShoppingCartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<any[]>([]);
  const [address, setAddress] = useState<any>({});

  const addItem = (item: Omit<any, 'id'>) => {
    const newItem: any = {
      ...item,
      id: cart.length + 1,
    };

    setCart((prev) => [...prev, newItem]);
  };

  const removeItem = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const updateItemQuantity = (id: number, quantity: number) => {

    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: quantity < 1 && (item.quantity + quantity) < 1 ? item.quantity : item.quantity + quantity } : item
      )
    );
  };

  const updateItemObservation = (id: number, observation: string) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, observations: observation } : item
      )
    );
  };

  return (
    <ShoppingCartContext.Provider value={{ cart, addItem, removeItem, clearCart, updateItemQuantity, updateItemObservation }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

export const useShoppingCart = (): ShoppingCartContextType => {
  const context = useContext(ShoppingCartContext);
  if (!context) {
    throw new Error('useShoppingCart must be used within a ShoppingCartProvider');
  }
  return context;
};
