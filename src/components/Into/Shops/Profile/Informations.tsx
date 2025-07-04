'use client';

import { Icon } from '@iconify/react';
import { Title, Overlay, ModalBox, CloseXButton } from '@/components/shared/Modal/styles';
import { Content, Section, DeliveryHours, MapButton, PaymentsTypes, PaymentsType } from './styles';

const Informations = ({ isOpen, onClose }: {
    isOpen: boolean; onClose: () => void;
}) => {

    if (!isOpen) return null;

    const paymentMethods = [
        { name: "AmericanExpress", image: "/images/flags/AmericanExpress.png" },
        { name: "Banricompras Crédito", image: "/images/flags/Banricompras.png" },
        { name: "Dinheiro", image: "/images/flags/Dinheiro.png" },
        { name: "DinnersClub", image: "/images/flags/DinnersClub.png" },
        { name: "Elo Crédito", image: "/images/flags/Elo.png" },
        { name: "Hipercard Crédito", image: "/images/flags/Hipercard.png" },
        { name: "MasterCard Crédito", image: "/images/flags/Mastercard.png" },
        { name: "Visa Crédito", image: "/images/flags/Visa.png" }
    ];

    const address = "R. Dionísio Réis, 181 - Itatinga - São Sebastião, SP";
    const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;


    return (
        <Overlay>
            <ModalBox style={{ height: '90%', padding: 0, position: 'relative' }}>
                <CloseXButton>
                    <Icon icon="material-symbols:close" color="#fff" width="24" onClick={onClose} />
                </CloseXButton>

                <Title>Informações</Title>
                <Content style={{ height: '88%', overflow: 'hidden auto' }}>
                    <Section>
                        <h3>Horário delivery</h3>
                        <DeliveryHours>
                            {['segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado', 'domingo'].map((day) => (
                                <li key={day}>
                                    <h4>{day}</h4>
                                    <span>05:00–23:59</span>
                                </li>
                            ))}
                        </DeliveryHours>
                    </Section>

                    <Section>
                        <h3>Forma de pagamento</h3>
                        <PaymentsTypes>
                            {paymentMethods.map((icon, i) => (
                                <PaymentsType key={i}>
                                    <img src={icon.image} alt={icon.name} />
                                    <span>{icon.name}</span>
                                </PaymentsType>
                            ))}
                        </PaymentsTypes>
                    </Section>

                    <Section style={{ alignItems: 'center' }}>
                        <h3>Localização</h3>
                        <p>{address}</p>
                        <a href={mapsLink} target="_blank" rel="noopener noreferrer">
                            <MapButton>Ver no mapa</MapButton>
                        </a>
                    </Section>
                </Content>
            </ModalBox>
        </Overlay>
    );
};

export default Informations;
