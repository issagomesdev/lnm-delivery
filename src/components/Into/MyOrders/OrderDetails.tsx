'use client';

import { OrderContainer, Info, Note, StoreInfo, Table } from './styles';
import { Title, Overlay, ModalBox, CloseXButton } from '@/components/shared/Modal/styles';
import { Icon } from '@iconify/react';

export default function OrderDetails({isOpen, onClose, id} : {isOpen: boolean; onClose: () => void, id: string}) {

  if (!isOpen) return null;

  const order = {
    id: id,
    date: '24/05/2025',
    store: {
      name: 'Loja de testes',
      phone: '(12) 99585-2020',
    },
    items: [
      {
        name: '1 Caldos',
        description: 'Caldo verde (Padrão)',
        unit: 20,
        qty: 1,
        total: 20,
        note: 'Observação do item',
      },
    ],
    status: 'Entregue',
    delivery: 10.5,
    total: 30.5,
    payment: 'Visa Crédito',
    address: 'Rua de teste, 557, Teste - Calhetas',
  };

  return (
    <Overlay>
      <ModalBox style={{ height: '90%', overflow: 'auto hidden', padding: 0 }}>
        <CloseXButton>
          <Icon icon="material-symbols:close" color="#fff" width="24" onClick={onClose} />
        </CloseXButton>

        <Title>{`Pedido #${order.id}`}</Title>

        <OrderContainer>

          <StoreInfo>
            <strong>{order.store.name}</strong>
            <strong>Telefone: {order.store.phone}</strong>
            <strong>{order.date}</strong>
          </StoreInfo>

          <Table>
            <thead>
              <tr>
                <th>Item</th>
                <th>Unit.</th>
                <th>QTD.</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {order.items.map((item, index) => (
                <tr key={index}>
                  <td>
                    <strong>{item.name}</strong>
                    <br />
                    <span>{item.description}</span>
                  </td>
                  <td>R$ {item.unit.toFixed(2)}</td>
                  <td>{item.qty}</td>
                  <td>R$ {item.total.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </Table>

          <Note>Observação do item</Note>

          <Info>
            <p><strong>Situação:</strong> {order.status}</p>
            <p><strong>Delivery:</strong> R$ {order.delivery.toFixed(2)}</p>
            <p><strong>Total:</strong> R$ {order.total.toFixed(2)}</p>
            <p><strong>Forma de pagamento:</strong> {order.payment}</p>
            <p><strong>Endereço:</strong> {order.address}</p>
          </Info>
        </OrderContainer>

      </ModalBox>
    </Overlay>

  );
}