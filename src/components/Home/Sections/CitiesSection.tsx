import { Section, Row, H2, ImageGrid, ImageContainer, ImageWrapper, StyledImg, ImageCaption } from './styles';
import React from 'react';



export const CitiesSection: React.FC = () => (
  <Section id="cities">
    <Row>
      <H2>Estamos presentes em todo Litoral Norte Paulista</H2>
    </Row>
    <Row>
      <ImageGrid>
        {[
          { name: 'São Sebastião', src: 'sao-sebastiao.jpg' },
          { name: 'Ilhabela', src: 'ilha-bela.jpg' },
          { name: 'Caraguatatuba', src: 'caraguatatuba.jpg' },
          { name: 'Ubatuba', src: 'ubatuba.jpg' }
        ].map((city, i) => (
          <ImageContainer key={city.name}>
              <ImageWrapper>
                <StyledImg src={`/images/cities-photos/${city.src}`} alt={city.name} />
              </ImageWrapper>
              <ImageCaption>{city.name}</ImageCaption>
            </ImageContainer>
        ))}
      </ImageGrid>
        
    </Row>
  </Section>
);
