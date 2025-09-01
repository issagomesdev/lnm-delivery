'use client';

import styles from './LocationSelector.module.css';
import AppLinks from '../AppLinks';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useLocation } from '@/contexts/LocationContext';
import { Loading } from '@/components/Loading';

export default function LocationSelector() {
  const [neighborhoods, setNeighborhoods] = useState<string[]>([]);
  const [selectedCityLocal, setSelectedCityLocal] = useState<string>('');
  const [selectedNeighborhoodLocal, setSelectedNeighborhoodLocal] = useState<string>('');
  const { setSelectedCity, setSelectedNeighborhood, locationError, useMyLocation } = useLocation();
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const cities = [
    { name: 'São Sebastião', neighborhoods: ['Centro', 'Juquehy', 'Maresias'] },
    { name: 'Ilhabela', neighborhoods: ['Praia do Curral', 'Praia do Julião'] },
    { name: 'Caraguatatuba', neighborhoods: ['Centro', 'Martim de Sá', 'Praia das Palmeiras'] },
    { name: 'Ubatuba', neighborhoods: ['Praia Grande', 'Praia do Tenório'] },
  ];

  const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const cityName = event.target.value;
    setNeighborhoods([]);
    setSelectedNeighborhoodLocal('');
    setSelectedCityLocal(cityName);

    const city = cities.find((c) => c.name === cityName);
    if (city) setNeighborhoods(city.neighborhoods);
  };

  const searchDelivery = () => {
    setLoading(true);
    setSelectedCity(selectedCityLocal);
    setSelectedNeighborhood(selectedNeighborhoodLocal);
    router.push('shops'); 
  };

  const autoLocation = () => {
    setLoading(true);
    useMyLocation(true);
    setLoading(false);

    if(locationError) {
      alert(locationError);
    } else {
      router.push('shops');
    }
  };

  return (
    <div className={styles.locationContainer}>
      {loading && <Loading />}
      <div className={styles.locationSelectorContainer}>
        <h2>Informe sua localização</h2>

        <div className={styles.select}>
          <select onChange={handleCityChange} value={selectedCityLocal}>
            <option value="">Selecione sua cidade</option>
            {cities.map((city, index) => (
              <option key={index} value={city.name}>
                {city.name}
              </option>
            ))}
          </select>
        </div>

        {neighborhoods.length > 0 && (
          <div className={styles.select}>
            <select
              onChange={(event) => setSelectedNeighborhoodLocal(event.target.value)}
              value={selectedNeighborhoodLocal}
            >
              <option value="">Selecione seu bairro</option>
              {neighborhoods.map((neighborhood, index) => (
                <option key={index} value={neighborhood}>
                  {neighborhood}
                </option>
              ))}
            </select>
          </div>
        )}

        {selectedCityLocal.length > 0 && selectedNeighborhoodLocal.length > 0 && (
          <button className={styles.searchDeliveryButton} onClick={searchDelivery}>
            <img src="/images/search.png" alt="Buscar Delivery" width="20" />
            Buscar Delivery
          </button>
        )}

        {selectedCityLocal.length === 0 && (
          <h3 className={styles.locationIcon} onClick={autoLocation}>
            <img src="/images/btn_my_location.png" alt="" />
            Usar minha localização
          </h3>
        )}

        <AppLinks />
      </div>
    </div>
  );
}
