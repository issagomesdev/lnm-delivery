
import styled from 'styled-components'

export const Section = styled.section`
  padding: 4rem 0;
  max-width: 80%;
  margin: 0 auto;

  @media (max-width: 980px){
    padding-top: 7rem;
  }
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 2.2rem;
  font-weight: 500;
  margin-bottom: 2rem;
  position: relative;

  &::after {
    content: '';
    display: block;
    width: 60px;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.primary};
    margin: 0.5rem auto 0;
  }
`;

export const Paragraph = styled.p`
  line-height: 1.7;
  margin-bottom: 1.2rem;
`;

export const Strong = styled.strong`
  font-weight: bold;
`;