'use client';

import { LocationContainer, SelectedLocation, } from "./styles";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useLocation } from '@/contexts/LocationContext';
import { useRouter } from "next/navigation";
import { Loading } from "../Loading";
import { useState } from "react";

export default function ChangeLocation() {

    const { selectedCity, selectedNeighborhood } = useLocation();
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    return (
        <>
            {loading && <Loading />}
            <LocationContainer>
                <SelectedLocation onClick={() => {
                    setLoading(true);
                    router.push("/")
                }}>
                    <h4>
                        <Icon icon="mingcute:location-fill" width="20" color="#fff" />
                        {selectedCity}
                    </h4>
                    <span>{selectedNeighborhood}</span>
                </SelectedLocation>
                <Icon icon="bxs:down-arrow" width="8" color="#fff" style={{ position: 'relative', top: '8px' }} />
            </LocationContainer>
        </>
    )
}