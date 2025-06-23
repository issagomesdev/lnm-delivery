'use client'

import Header from '@/components/Into/Header';
import React, { useState } from 'react';
import { ActionButton, Actions, AddButton, Card, Container, Datas } from './styles';
import { Icon } from '@iconify/react/dist/iconify.js';
import ModalComponent from "@/components/shared/Modal/ModalComponent";
import AddressFormComponent from '@/components/Into/MyAddresses/AddressFormComponent';

const MyAddresses = () => {

  type Address = {
    id: number;
    apelido: string;
    rua: string;
    numero: string;
    bairro: string;
    cidade: string;
    referencia: string;
    complemento: string;
    uf: string;
  };

  const [addresses, setAddresses] = useState<Address[]>([
    {
      id: 1,
      apelido: 'Teste são sebastião',
      rua: 'Rua das Flores',
      numero: '707',
      bairro: 'Indaiá',
      cidade: 'São Sebastião',
      referencia: 'efw',
      complemento: 'de',
      uf: 'SP',
    },
    {
      id: 2,
      apelido: 'Teste caraguatatuba',
      rua: 'Av. Central',
      numero: '348',
      bairro: 'Tabatinga',
      cidade: 'Caraguatatuba',
      referencia: 'ewq',
      complemento: 'de',
      uf: 'SP',
    },
    {
      id: 3,
      apelido: 'Teste ilhabela',
      rua: 'Av. Central',
      numero: '966',
      bairro: 'Indaiá',
      cidade: 'Ilhabela',
      complemento: 'de',
      referencia: 'eq',
      uf: 'SP',
    },
    {
      id: 4,
      apelido: 'Teste ilhabela',
      rua: 'Rua das Flores',
      numero: '379',
      bairro: 'Jardim das Palmeiras',
      cidade: 'Ilhabela',
      complemento: 'de',
      referencia: '',
      uf: 'SP',
    },
    {
      id: 5,
      apelido: 'Teste caraguatatuba',
      rua: 'Rua das Flores',
      numero: '821',
      bairro: 'Estufa II',
      cidade: 'Caraguatatuba',
      complemento: 'de',
      referencia: 'fd',
      uf: 'SP',
    },
  ]);
  const [isModalDelete, setIsModalDelete] = useState(false);
  const [isModalCreate, setIsModalCreate] = useState(false);
  const [isModalEdit, setIsModalEdit] = useState(false);
  const [selected, setSelected] = useState<Address>();

  const handleDelete = (id: number) => {
    setAddresses(prev => prev.filter((i) => i.id !== id));
    setIsModalDelete(false)
  };

  const handleEdit = (id: number) => {
    const data = addresses.find((i) => i.id === id)
    if (data) {
      setSelected(data)
      setIsModalEdit(true)
    }
  };

  const handleCreate = () => {

  };

  return (
    <>
      <Header name={'Meus Endereços'} />
      <Container>
        <AddButton onClick={() => setIsModalCreate(true)}>
          + Adicionar endereço
        </AddButton>

        {addresses.map((item, index) => (
          <Card key={index}>
            <Datas>
              <strong>{item.apelido}</strong>
              <p><b>Rua</b> {item.rua}</p>
              <p><b>Número:</b> {item.numero}</p>
              <p><b>Bairro:</b> {item.bairro}</p>
              <p><b>Cidade/UF:</b> {item.cidade}-{item.uf}</p>
            </Datas>

            <Actions>
              <ActionButton className="edit" onClick={() => handleEdit(item.id)}>
                <Icon icon="mdi:pencil" width="15" />
                Editar
              </ActionButton>
              <ActionButton className="delete" onClick={() => { setSelected(item), setIsModalDelete(true) }}>
                <Icon icon="material-symbols:delete" width="15" />
                Deletar
              </ActionButton>
            </Actions>
          </Card>
        ))}
      </Container>

      <ModalComponent
        isOpen={isModalDelete}
        onConfirm={() => selected && handleDelete(selected.id)}
        onClose={() => setIsModalDelete(false)}
        onConfirmText={"Sim, tenho!"}
        title={'Tem certeza que deseja excluir o endereço?'}
      >
      </ModalComponent>

      <AddressFormComponent
        onClose={() => setIsModalCreate(false)}
        isOpen={isModalCreate}
      />

      <AddressFormComponent
        isOpen={isModalEdit}
        onClose={() => setIsModalEdit(false)}
        initialData={{
          estado: selected?.uf,
          cidade: selected?.cidade,
          bairro: selected?.bairro,
          endereco: selected?.rua,
          numero: selected?.numero,
          complemento: selected?.complemento,
          referencia: selected?.referencia,
          apelido: selected?.apelido,
        }}
      />
    </>
  );
};

export default MyAddresses;
