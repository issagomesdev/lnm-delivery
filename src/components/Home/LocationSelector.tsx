'use client'
import { LocationContainer, LocationSelectorContainer, Select, LocationIcon, SearchDeliveryButton } from './styles'
import AppLinks from './AppLinks'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useLocation } from '@/contexts/LocationContext';
import { Loading } from '../Loading'

export default function LocationSelector() {
  const [neighborhoods, setNeighborhoods] = useState<string[]>([])
  const [selectedCityLocal, setSelectedCityLocal] = useState<string>('')
  const [selectedNeighborhoodLocal, setSelectedNeighborhoodLocal] = useState<string>('')
  const { setSelectedCity, setSelectedNeighborhood } = useLocation();
  const [loading, setLoading ] = useState(false);

  const router = useRouter()

  const cities = [
    { name: 'São Sebastião', neighborhoods: ['Centro', 'Juquehy', 'Maresias'] },
    { name: 'Ilhabela', neighborhoods: ['Praia do Curral', 'Praia do Julião'] },
    { name: 'Caraguatatuba', neighborhoods: ['Centro', 'Martim de Sá', 'Praia das Palmeiras'] },
    { name: 'Ubatuba', neighborhoods: ['Praia Grande', 'Praia do Tenório',] }
  ]

  const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const cityName = event.target.value;
    setNeighborhoods([]);
    setSelectedNeighborhoodLocal('');
    setSelectedCityLocal(cityName);

    const city = cities.find(c => c.name === cityName);
    if (city) {
      setNeighborhoods(city.neighborhoods);
    }
  };

  const searchDelivery = () => {
    setLoading(true)
    setSelectedCity(selectedCityLocal);
    setSelectedNeighborhood(selectedNeighborhoodLocal);
    router.push('shops')
  }

  return (
    <LocationContainer>
      { loading && <Loading/> }
      <LocationSelectorContainer>
        <h2>Informe sua localização</h2>
        <Select>
          <select onChange={handleCityChange} value={selectedCityLocal}>
            <option value="">Selecione sua cidade</option>
            {cities.map((city, index) => (
              <option key={index} value={city.name}>{city.name}</option>
            ))}
          </select>
        </Select>

        {neighborhoods.length > 0 && <Select>
          <select onChange={(event) => setSelectedNeighborhoodLocal(event.target.value)} value={selectedNeighborhoodLocal}>
            <option value="">Selecione seu bairro</option>
            {neighborhoods.map((neighborhood, index) => (
              <option key={index} value={neighborhood}>{neighborhood}</option>
            ))}
          </select>
        </Select>}

        {selectedCityLocal.length > 0 && setSelectedNeighborhoodLocal.length > 0 &&
          <SearchDeliveryButton onClick={searchDelivery}>
            <img src="/images/search.png" alt="Buscar Delivery" width={'20rem'} />
            Buscar Delivery
          </SearchDeliveryButton>}

        {selectedCityLocal.length == 0 && <LocationIcon>
          <img src="/images/btn_my_location.png" />
          Usar minha localização
        </LocationIcon>}
        <AppLinks />
      </LocationSelectorContainer>
    </LocationContainer>
  )
}
