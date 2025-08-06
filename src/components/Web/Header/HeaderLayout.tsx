// components/Web/HeaderLayout.tsx
import styled from 'styled-components';
import { ReactNode } from 'react';

const Container = styled.header`
  background: ${({ theme }) => theme.colors.background};
  height: 4.5rem;
  font-weight: regular;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 2rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.separators};
  margin-bottom: 2em;
`;

const Nav = styled.nav`
  display: flex;
  gap: 3rem;
  align-items: center;
  width: 85%;
  justify-content: flex-end;
`;

const NavItem = styled.a.withConfig({
  shouldForwardProp: (prop) => prop !== 'active',
})<{ active?: boolean }>`
  color: ${({ theme, active }) => active ? theme.colors.primary : theme.colors.text_secondary};
  text-decoration: ${({ active }) => active ? 'underline' : 'none'};
  cursor: pointer;
  font-weight: 500;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  &:active {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: underline;
  }

  @media (max-width: 1050px) {
    font-size: 12px;
  }
`;

type Props = {
  children: ReactNode;
};

export { Container, Nav, NavItem };
export default function HeaderLayout({ children }: Props) {
  return <Container>{children}</Container>;
}
