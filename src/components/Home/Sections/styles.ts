import styled,  { keyframes, css } from 'styled-components';

export const Row = styled.div`
  max-width: 1140px;
  margin: 0 auto;

  p {
    font-weight: 400;
  }

  h2 {
    font-size: 1.8em;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 1.5em;
    }

    >p {
      width: 100%;
      margin-left: 0%;
    }

    .steps & {
      flex-direction: column;
    }
  }
`;

export const Section = styled.section`
  padding: 40px 20px;

  &.meals {
    padding: 40px 0;
  }
`;

export const H2 = styled.h2`
  font-size: 1.8em;
  word-spacing: 2px;
  text-align: center;
  margin-bottom: 30px;
  letter-spacing: 1px;
  font-weight: 500;
  position: relative;

  &::after {
    display: block;
    height: 2px;
    background-color: #e67e22;
    content: "";
    width: 100px;
    margin: 30px auto 0;
  }
`;

export const H3 = styled.h3`
  font-size: 1.125em;
  margin-bottom: 15px;
  font-weight: 800;
`;

export const Paragraph = styled.p`
  font-size: 0.9em;
  line-height: 1.45;
`;

export const Box = styled.div`
  width: 23.8%;
  padding: 1%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    text-align: justify;
  }

  @media (max-width: 768px) {
    width: 100%;

    p {
      text-align: center;
    }
  }
`;

export const IconBox = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  width: 5.5em;
  padding: 1rem;
  margin-bottom: 1rem
`;

export const LongCopy = styled.p`
  line-height: 1.5;
  width: 70%;
  margin: 0 auto 30px;
  text-align: center;
  font-size: 1em;
`;

export const FadeIn = styled.div`
  animation: fadeIn 1.5s ease-in-out;
`;

export const MealsGrid = styled.ul`
  list-style: none;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
`;

export const MealItem = styled.li`
  width: 25%;
  overflow: hidden;
`;

export const MealPhoto = styled.figure`
  background-color: #000;
  overflow: hidden;
  margin: 0;

  img {
    width: 100%;
    height: auto;
    opacity: 0.7;
    transform: scale(1.16);
    transition: transform 0.5s, opacity 0.5s;

    &:hover {
      transform: scale(1.1);
      opacity: 1;
    }
  }
`;

export const Step = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  &:last-of-type {
    margin-bottom: 80px;
  }

  div {
    color: #e67e22;
    border: 2px solid #e67e22;
    border-radius: 50%;
    height: 55px;
    width: 55px;
    text-align: center;
    line-height: 50px;
    font-size: 1.5em;
  }

  p {
    width: 85%;
  }
`;

export const StepsItens = styled.div<{ align?: 'left' | 'right' }>`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const StepsBox = styled.div<{ align?: 'left' | 'right' }>`
  text-align: ${props => (props.align === 'right' ? 'right' : 'left')};
  padding: 3%;
  margin-top: ${props => (props.align === 'right' ? '30px' : '70px')};

  @media (max-width: 768px) {
    margin: 0;
    &#image {
      padding: 0;
      display: flex;
      justify-content: center;
    }
  }
`;

interface AnimatedDivProps {
  $visible: boolean;
}

export const AnimatedDiv = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== '$visible',
})<AnimatedDivProps>`
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.5s ease-out;
  display: flex;
  justify-content: center;

  ${({ $visible }) =>
    $visible &&
    css`
      animation: ${fadeInUp} 0.6s ease forwards;
    `}
`;

const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
  100% {
    opacity: 1;
    transform: none;
  }
`;

export const AppImage = styled.img`
  width: 60%;

  @media (max-width: 1024px) {
    width: 80%;
  }

  @media (max-width: 900px) {
    width: 100%;
  }

  @media (max-width: 769px) {
    width: 40%;
  }

`;

export const AppLinks = styled.div`
  display: flex;
  align-items: center;
  
  a img {
    height: 65px;
    width: auto;
    margin-right: 15px;
  }

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

export const ImageGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
`;

export const ImageContainer = styled.div`
  flex: 0 0 calc(25% - 15px);
  position: relative;
  overflow: hidden;
  margin-bottom: 20px;

  @media (max-width: 992px) {
    flex: 0 0 calc(50% - 10px);
  }

  @media (max-width: 576px) {
     flex: 0 0 100%;
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 0;
  padding-bottom: 66.5%;
  position: relative;
  overflow: hidden;
`;

export const StyledImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const ImageCaption = styled.div`
  text-align: center;
  margin-top: 10px;
  font-size: 18px;
  color: #4a4a4a;
`;

