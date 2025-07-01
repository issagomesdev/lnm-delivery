'use client'

import Header from "@/components/Into/Header";
import { Datas, Data, Label, Textarea, Notice } from "@/app/minha-conta/styles";
import ModalComponent from "@/components/shared/Modal/ModalComponent";
import { useState } from "react";

export default function MyAccount() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [reason, setReason] = useState('')

  const handleConfirm = () => {
    console.log('Ação confirmada!')
    setIsModalOpen(false)
  }
  
  const data = {
    name: 'João da Silva',
    orders_number: 87,
    adress_number: 12,
    phone: '48 99999-9999',
    email: 'teste@exemple.com',
  }

  return (
    <>
      <Header name={'Minha Conta'} full={false}/>
      <Datas>
        <Data>
          <h3>Dados da conta</h3>
          <div>
            <p>Nome</p>
            <h4>{data.name}</h4>
          </div>
          <div>
            <p>Pedidos realizados</p>
            <h4>{data.orders_number}</h4>
          </div>
          <div>
            <p>Endereços cadastrados</p>
            <h4>{data.adress_number}</h4>
          </div>
        </Data>
        <Data>
          <div>
            <h3>Dados de acesso</h3>
            <p>Esses dados são a sua forma de acesso ao Litoral na Mesa.</p>
          </div>
          <div>
            <p>Celular</p>
            <h4>{data.phone}</h4>
          </div>
          <div>
            <p>E-mail</p>
            <h4>{data.email}</h4>
          </div>
        </Data>
        <Data>
          <h3>Exclusão de conta</h3>

          <a style={{ cursor: 'pointer' }} onClick={() => setIsModalOpen(true)}>Solicitar exclusão de conta</a>
        </Data>
      </Datas>

      <ModalComponent
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleConfirm}
        title="Excluir Conta"
      >
        <Label> Fique ciente que após essa solicitação, os seus dados serão apagados permanentemente e você não terá mais acesso. Esse procedimento é irreversível. </Label>
        <Label>Por favor, informe o motivo abaixo:</Label>
        <Textarea
          placeholder="Digite o motivo..."
          value={reason}
          onChange={(e) => setReason(e.target.value)}
        />
        <Notice>O processo de exclusão de conta pode levar até 72 horas.</Notice>
      </ModalComponent>
    </>
  );
}