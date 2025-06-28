'use client';

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type LocationContextType = {
  selectedCity: string;
  setSelectedCity: (city: string) => void;
  selectedNeighborhood: string;
  setSelectedNeighborhood: (neighborhood: string) => void;
};

const LocationContext = createContext<LocationContextType | undefined>(undefined);

export const LocationProvider = ({ children }: { children: ReactNode }) => {
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedNeighborhood, setSelectedNeighborhood] = useState('');

  useEffect(() => {
    const savedCity = localStorage.getItem('selectedCity');
    const savedNeighborhood = localStorage.getItem('selectedNeighborhood');

    if (savedCity) setSelectedCity(savedCity);
    if (savedNeighborhood) setSelectedNeighborhood(savedNeighborhood);
  }, []);

  useEffect(() => {
    localStorage.setItem('selectedCity', selectedCity);
  }, [selectedCity]);

  useEffect(() => {
    localStorage.setItem('selectedNeighborhood', selectedNeighborhood);
  }, [selectedNeighborhood]);

  return (
    <LocationContext.Provider value={{ selectedCity, setSelectedCity, selectedNeighborhood, setSelectedNeighborhood }}>
      {children}
    </LocationContext.Provider>
  );
};

export const useLocation = () => {
  const context = useContext(LocationContext);
  if (!context) throw new Error('useLocation must be used within a LocationProvider');
  return context;
};
