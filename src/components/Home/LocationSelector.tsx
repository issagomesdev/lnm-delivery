'use client'
import { LocationContainer, LocationSelectorContainer, Select, LocationIcon, SearchDeliveryButton } from './styles'
import AppLinks from './AppLinks'
import { useState } from 'react'

export default function LocationSelector() {
  const [neighborhoods, setNeighborhoods] = useState<string[]>([])
  const [selectedCity, setSelectedCity] = useState<string>('')
  const [selectedNeighborhood, setSelectedNeighborhood] = useState<string>('')

  const cities = [
    { name: 'São Sebastião', neighborhoods: ['Centro', 'Juquehy', 'Maresias'] },
    { name: 'Ilhabela', neighborhoods: ['Praia do Curral', 'Praia do Julião'] },
    { name: 'Caraguatatuba', neighborhoods: ['Centro', 'Martim de Sá', 'Praia das Palmeiras'] },
    { name: 'Ubatuba', neighborhoods: ['Praia Grande', 'Praia do Tenório',] }
  ]

  const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const cityName = event.target.value;
    setNeighborhoods([]);
    setSelectedNeighborhood('');
    setSelectedCity(cityName);

    const city = cities.find(c => c.name === cityName);
    if (city) {
      setNeighborhoods(city.neighborhoods);
    }
  };

  const handleNeighborhoodChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedNeighborhood(event.target.value);
  }

  return (
    <LocationContainer>
      <LocationSelectorContainer>
        <h2>Informe sua localização</h2>
        <Select>
          <select onChange={handleCityChange} value={selectedCity}>
            <option value="">Selecione sua cidade</option>
            {cities.map((city, index) => (
              <option key={index} value={city.name}>{city.name}</option>
            ))}
          </select>
        </Select>

        {neighborhoods.length > 0 && <Select>
          <select onChange={handleNeighborhoodChange} value={selectedNeighborhood}>
            <option value="">Selecione seu bairro</option>
            {neighborhoods.map((neighborhood, index) => (
              <option key={index} value={neighborhood}>{neighborhood}</option>
            ))}
          </select>
        </Select>}

        {selectedCity.length > 0 && selectedNeighborhood.length > 0 && <SearchDeliveryButton>
          <img src="/images/search.png" alt="Buscar Delivery" width={'20rem'} />
          Buscar Delivery
        </SearchDeliveryButton>}

        <LocationIcon>
          <img src="/images/btn_my_location.png" />
          Usar minha localização
        </LocationIcon>
        <AppLinks />
      </LocationSelectorContainer>
    </LocationContainer>
  )
}
