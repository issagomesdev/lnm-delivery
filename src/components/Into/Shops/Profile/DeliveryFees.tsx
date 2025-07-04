'use client';

import { useState } from 'react';
import { Icon } from '@iconify/react';
import { Title, Overlay, ModalBox, CloseXButton } from '@/components/shared/Modal/styles';
import { Content, SearchInput, FeeRow } from './styles';

const DeliveryFees = ({
  isOpen,
  onClose,
  fees,
}: {
  isOpen: boolean;
  onClose: () => void;
  fees: { name: string; fees: string }[];
}) => {
  const [search, setSearch] = useState('');

  if (!isOpen) return null;

const filteredFees = (fees || []).filter((item) =>
  item.name.toLowerCase().includes(search.toLowerCase())
);

  return (
    <Overlay>
      <ModalBox style={{ height: '90%', overflow: 'auto hidden', padding: 0 }}>
        <CloseXButton>
          <Icon icon="material-symbols:close" color="#fff" width="24" onClick={onClose} />
        </CloseXButton>

        <Title>TAXAS DE ENTREGA</Title>

        <Content>
          <SearchInput
            type="text"
            placeholder="Digite o nome do bairro"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {filteredFees.map((item, index) => (
            <FeeRow key={index}>
              <span>{item.name}</span>
              <span>R$ {parseFloat(item.fees).toFixed(2)}</span>
            </FeeRow>
          ))}
        </Content>
      </ModalBox>
    </Overlay>
  );
};

export default DeliveryFees;
