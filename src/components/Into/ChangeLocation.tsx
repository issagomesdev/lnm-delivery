'use client';

import { LocationContainer, SelectedLocation, } from "./styles";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useLocation } from '@/contexts/LocationContext';

export default function ChangeLocation() {

    const { selectedCity, selectedNeighborhood } = useLocation();

    return (
        <LocationContainer>
            <SelectedLocation>
                <h4>
                    <Icon icon="mingcute:location-fill" width="20" color="#fff" />
                    {selectedCity}
                </h4>
                <span>{selectedNeighborhood}</span>
            </SelectedLocation>
            <Icon icon="bxs:down-arrow" width="8" color="#fff" style={{ position: 'relative', top: '8px' }} />
        </LocationContainer>
    )
}