'use client';
import styled, { keyframes } from 'styled-components';

const bounce = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0);
    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  }

  40%, 43% {
    transform: translate3d(0, -30px, 0);
    animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
  }

  70% {
    transform: translate3d(0, -15px, 0);
    animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
  }

  90% {
    transform: translate3d(0, -4px, 0);
  }
`;

const Overlay = styled.div`
  background-color: #000000e8;
  position: fixed;
  inset: 0;
  z-index: 1000000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const BouncingImage = styled.img`
  width: 60px;
  animation: ${bounce} 1s infinite;
  transform-origin: center bottom;
`;

const LoadingText = styled.div`
  color: white;
  font-size: 16px;
  margin-top: 12px;
`;

export const Loading = () => {
  return (
    <Overlay>
      <BouncingImage src="/images/logo_without_text.png" alt="Loading..." />
      <LoadingText>Carregando...</LoadingText>
    </Overlay>
  );
};
