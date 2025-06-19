'use client'

import React from 'react';
import styled from 'styled-components';
import Header from "@/components/Authenticated/Header";
import { useSearchParams } from 'next/navigation';

const steps = ['pendent', 'accepted', 'dispatched', 'delivered', 'canceled'] as const;
type Step = typeof steps[number];

const stepOrder: Record<Step, number> = {
  pendent: 0,
  accepted: 1,
  dispatched: 2,
  delivered: 3,
  canceled: 4,
};

const messages: Record<Step, {
  title: string;
  text: string;
  emoji: string;
  note?: string;
}> = {
  pendent: {
    title: 'Aguardando atendimento!',
    text: 'Isso pode levar alguns minutinhos',
    emoji: '/images/my-orders/waiting.png',
  },
  accepted: {
    title: 'Seu pedido foi aceito!',
    text: 'Agora é só relaxar enquanto seu pedido é preparado.',
    emoji: '/images/my-orders/accepted.png',
  },
  dispatched: {
    title: 'Seu pedido está a caminho!',
    text: 'Arrume a mesa pois seu pedido já está chegando!',
    emoji: '/images/my-orders/dispatched.png',
  },
  delivered: {
    title: 'Seu pedido foi entregue!',
    text: 'Não se esqueça de avaliar o pedido',
    emoji: '/images/my-orders/delivered.png',
    note: 'Avalie o pedido clicando acima.'
  },
  canceled: {
    title: 'Seu pedido foi cancelado!',
    text: 'Infelizmente seu pedido não pôde ser concluído.',
    emoji: '/images/my-orders/canceled.png',
    note: 'Se tiver dúvidas, entre em contato com a loja.'
  },
};

export default function TrackOrderPage() {
  const searchParams = useSearchParams();
  const step = (searchParams.get('step') ?? 'pendent') as Step;
  const orderId = searchParams.get('id') ?? '';
  const date = searchParams.get('date') ?? '';

  const times: Record<Step, string> = {
    pendent: step === 'pendent' ? date : '',
    accepted: step === 'accepted' ? date : '',
    dispatched: step === 'dispatched' ? date : '',
    delivered: step === 'delivered' ? date : '',
    canceled: step === 'canceled' ? date : '',
  };

  return (
    <>
      <Header name={'Meus pedidos'} />
      <Container>
        <h2>ACOMPANHE SEU PEDIDO</h2>
        <StepProgress>
          {steps.map((s, i) => (
            <StepItem key={s} active={i <= stepOrder[step]}>
              <Circle>{i <= stepOrder[step] ? '✓' : ''}</Circle>
              <Label>{s}</Label>
              {times[s] && <Time>{times[s]}</Time>}
            </StepItem>
          ))}
        </StepProgress>

        <Emoji src={messages[step].emoji} alt={step} />
        <h3>{messages[step].title}</h3>
        <p>{messages[step].text}</p>

        <OrderButton>Detalhes do pedido #{orderId}</OrderButton>
        <p>Canal de contato com a loja:</p>
        <CallButton>📞 Ligar</CallButton>
      </Container>
    </>
  );
}

const Container = styled.div`
  padding: 1rem;
  text-align: center;
`;

const StepProgress = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 1rem 0;
`;

const StepItem = styled.div<{ active: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ active }) => (active ? 'green' : '#ccc')};
`;

const Circle = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 2px solid currentColor;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
`;

const Label = styled.span`
  margin-top: 0.25rem;
  font-size: 0.8rem;
`;

const Time = styled.span`
  font-size: 0.75rem;
  color: #555;
`;

const Emoji = styled.img`
  width: 20rem;
  margin: 1.5rem auto;
`;

const OrderButton = styled.button`
  background: none;
  border: 1px solid #e96d00;
  color: #e96d00;
  padding: 0.6rem 1rem;
  margin: 1rem 0;
  border-radius: 6px;
`;

const CallButton = styled.button`
  background: #007bff;
  color: white;
  border: none;
  padding: 0.6rem 1rem;
  border-radius: 6px;
  font-size: 1rem;
  margin-top: 0.5rem;
`;
