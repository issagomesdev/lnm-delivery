'use client'

import React, { useCallback, useEffect, useState } from 'react';
import { Container, StepProgress, StepItem, StepCircle, Circle, Label, Emoji, OrderInfo, DeliveryTime, OrderButton, ContactChannel, CallButton } from './styles';
import Header from "@/components/Into/Header";
import { useSearchParams, useParams, useRouter } from 'next/navigation';
import { Icon } from '@iconify/react/dist/iconify.js';
import RatingComponent from "@/components/Into/MyOrders/RatingComponent";
import OrderDetails from '@/components/Into/MyOrders/OrderDetails';
import { useCustomBackAction } from '@/hooks/useCustomBackAction';

const steps = ['pendent', 'accepted', 'dispatched', 'delivered'] as const;
type Step = typeof steps[number];

const stepOrder: Record<Step, number> = {
  pendent: 0,
  accepted: 1,
  dispatched: 2,
  delivered: 3,
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
  }
};

export default function TrackOrderPage() {
  const params = useParams();
  const orderId = params?.id as string;
  const searchParams = useSearchParams();
  const returnShops = searchParams.get('return');
  const step = (searchParams.get('step') ?? 'pendent') as Step;
  const [orderIsOpen, setOrderIsOpen] = useState(false);
  const statusLabels: Record<Step, string> = {
    pendent: 'Realizado',
    accepted: 'Aceito',
    dispatched: 'A Caminho',
    delivered: 'Entregue',
  };

  const [ratingIsOpen, setRatingIsOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (returnShops && returnShops === 'shops') {
      window.history.pushState(null, '', window.location.pathname + window.location.search);
      window.history.replaceState(null, '', '/shops');
    }
  }, [returnShops])

  useCustomBackAction(
    useCallback(() => {
      if (returnShops && returnShops === 'shops') {
        return "/shops";
      }

      return "/meus-pedidos";
    }, [])
  );

  return (
    <>
      <Header name={'Acompanhe seu pedido'} full={false} />
      <Container>
        <StepProgress>
          {steps.map((s, i) => (
            <StepItem key={s}>
              <StepCircle className={i <= stepOrder[step] ? 'active' : ''}>
                <Circle
                  className={[
                    i === steps.length - 1 ? 'last' : '',
                    i === 0 ? 'first' : '',
                    i - 1 < stepOrder[step] ? 'previous' : '',
                    i + 1 <= stepOrder[step] ? 'next' : '',
                  ].filter(Boolean).join(' ')}
                >
                  <Icon icon="material-symbols:check" width="30" color="#fff" />
                </Circle>
                <Label>{statusLabels[s]}</Label>
              </StepCircle>

              {i <= stepOrder[step] && <span>17:28</span>}
            </StepItem>
          ))}
        </StepProgress>

        <Emoji src={messages[step].emoji} alt={step} />

        <OrderInfo>
          <h3>{messages[step].title}</h3>
          <p className={step === 'delivered' ? 'active' : ''} onClick={() => {
            if (step === 'delivered') {
              setRatingIsOpen(true)
            }
          }}>{messages[step].text}</p>
        </OrderInfo>

        {stepOrder[step] > 0 &&
          <DeliveryTime>
            <h4>Previsão de entrega: a partir de 00:49</h4>
            <a>Entenda o prazo de entrega</a>
          </DeliveryTime>
        }

        <OrderButton onClick={() => setOrderIsOpen(true)}>Detalhes do pedido #{orderId}</OrderButton>

        {stepOrder[step] > 0 &&
          <ContactChannel>
            <p>Canal de contato com a loja:</p>
            <CallButton>
              <Icon icon="ic:baseline-phone" width="25" />
              Ligar
            </CallButton>
          </ContactChannel>
        }

        <RatingComponent
          isOpen={ratingIsOpen}
          onClose={() => setRatingIsOpen(false)}
        />

        <OrderDetails
          isOpen={orderIsOpen}
          onClose={() => setOrderIsOpen(false)}
          id={orderId}
        />

      </Container>
    </>
  );
}

