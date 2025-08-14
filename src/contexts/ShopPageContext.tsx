'use client';

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type ShopPageContextType = {
  shopId: string | null;
  updateShopId: (value: string | null) => void;
};

const ShopPageContext = createContext<ShopPageContextType | undefined>(undefined);

export const ShopPageProvider = ({ children }: { children: ReactNode }) => {
  const [shopId, setShopId] = useState<string | null>(null);

  const updateShopId = (id: string | null) => {
    setShopId(id)

    
  }
  return (
    <ShopPageContext.Provider value={{ shopId, updateShopId }}>
      {children}
    </ShopPageContext.Provider>
  );
};

export const useShopPage = () => {
  const context = useContext(ShopPageContext);
  if (!context) throw new Error('useShopPage must be used within a ShopPageProvider');
  return context;
};
