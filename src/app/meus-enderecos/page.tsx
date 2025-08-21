'use client'

import Header from '@/components/Into/Header';
import React, { use, useEffect, useState } from 'react';
import { ActionButton, Actions, AddButton, Card, Container, Datas } from './styles';
import { Icon } from '@iconify/react/dist/iconify.js';
import ModalComponent from "@/components/shared/Modal/ModalComponent";
import AddressFormComponent from '@/components/Into/MyAddresses/AddressFormComponent';
import { addressesData } from '@/components/Into/data';

const MyAddresses = () => {

  const [addresses, setAddresses] = useState<any[]>(addressesData);
  const [isModalDelete, setIsModalDelete] = useState(false);
  const [isModalCreate, setIsModalCreate] = useState(false);
  const [isModalEdit, setIsModalEdit] = useState(false);
  const [selected, setSelected] = useState<any>();

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

  return (
    <>
      <Header name={'Meus Endereços'} full={false} />
      <Container>
        <AddButton onClick={() => setIsModalCreate(true)}>
          + Adicionar endereço
        </AddButton>

        {addresses.map((item, index) => (
          <Card key={index}>
            <Datas>
              <strong>{item.apelido}</strong>
              <p><b>Rua</b> {item.endereco}</p>
              <p><b>Número:</b> {item.numero}</p>
              <p><b>Bairro:</b> {item.bairro}</p>
              <p><b>Cidade/UF:</b> {item.cidade}-{item.estado}</p>
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
        onClose={(data: any) => {
          if (data) {
            setAddresses(prev => [...prev, { ...data, id: prev.length + 1 }]);
          }

          setIsModalCreate(false);
        }}
        isOpen={isModalCreate}
      />

      <AddressFormComponent
        isOpen={isModalEdit}
        onClose={(data: any) => {
          if (data) {
            setAddresses(prev => prev.map((i) => i.id === selected?.id ? { ...data, id: i.id } : i));
          }

          setIsModalEdit(false);
        }}
        initialData={{
          estado: selected?.estado,
          cidade: selected?.cidade,
          bairro: selected?.bairro,
          endereco: selected?.endereco,
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
