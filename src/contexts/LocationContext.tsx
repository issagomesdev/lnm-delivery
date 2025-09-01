'use client';

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type Address = {
  estado: string;
  cidade: string;
  bairro: string;
  endereco: string;
};

type LocationContextType = {
  selectedCity: string;
  setSelectedCity: (city: string) => void;
  selectedNeighborhood: string;
  setSelectedNeighborhood: (neighborhood: string) => void;
  locationError: string | null;
  useMyLocation: (changeLocation?: boolean) => void;
  address: Address | null;

};

const LocationContext = createContext<LocationContextType | undefined>(undefined);

export const LocationProvider = ({ children }: { children: ReactNode }) => {
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedNeighborhood, setSelectedNeighborhood] = useState('');
  const [locationError, setLocationError] = useState<string | null>(null);
  const [address, setAddress] = useState<Address | null>(null);

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

  const useMyLocation = (changeLocation: boolean = false): Promise<void> => {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        const errorMsg = 'Geolocalização não é suportada neste navegador.';
        setLocationError(errorMsg);
        reject(errorMsg);
        return;
      }

      navigator.geolocation.getCurrentPosition(
        async (pos) => {
          const { latitude, longitude } = pos.coords;

          try {
            const response = await fetch(
              `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
            );
            const data = await response.json();

            const stateCode = (data.address['ISO3166-2-lvl4'] || '').replace('BR-', '');
            const cityName = data.address.city || data.address.town || data.address.village || '';
            const neighborhoodName = data.address.suburb || data.address.neighbourhood || '';
            const streetName = data.address.road || '';

            if (changeLocation) {
              setSelectedCity(cityName);
              setSelectedNeighborhood(neighborhoodName);
            }

            const newAddress: Address = {
              estado: stateCode,
              cidade: cityName,
              bairro: neighborhoodName,
              endereco: streetName,
            };

            setAddress(newAddress);
            setLocationError(null);
            resolve();
          } catch (error) {
            const errMsg = 'Não foi possível identificar sua localização.' + error?.toString();
            setLocationError(errMsg);
            reject(errMsg);
          }
        },
        (err) => {
          const errMsg = 'Erro ao obter localização: ' + err.message;
          setLocationError(errMsg);
          reject(errMsg);
        }
      );
    });
  };

  return (
    <LocationContext.Provider value={{ selectedCity, setSelectedCity, selectedNeighborhood, setSelectedNeighborhood, locationError, useMyLocation, address }}>
      {children}
    </LocationContext.Provider>
  );
};

export const useLocation = () => {
  const context = useContext(LocationContext);
  if (!context) throw new Error('useLocation must be used within a LocationProvider');
  return context;
};
