'use client';

import { Container, Info, Note, StoreInfo, Table } from './styles';
import { useParams } from 'next/navigation';
import Header from '@/components/Authenticated/Header';

export default function OrderDetails() {
  const params = useParams();
  const id = params?.id as string;

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
    <>
      <Header name={`Pedido #${order.id}`} />
      <Container>

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
      </Container>
    </>
  );
}