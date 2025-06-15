import { Section, Row, H2, StepsBox, AppImage, Step, AppLinks } from './styles';

export const HowItWorksSection: React.FC = () => (
  <Section className="steps" id="works">
    <Row>
      <H2>Simples assim: 1, 2, 3. Chegou! 🚀</H2>
    </Row>
    <Row style={{ display: 'flex' }}>
      <StepsBox align="right">
        <AppImage src="/images/phone.png" alt="Litoral Na Mesa App" />
      </StepsBox>
      <StepsBox>
        {["Escolha a cidade desejada.",
          "Selecione o restaurante, escolha sua comida preferida!",
          "Pronto, em poucos minutos seu pedido estará em casa!"].map((txt, i) => (
          <Step key={i}>
            <div>{i + 1}</div>
            <p>{txt}</p>
          </Step>
        ))}
        <AppLinks>
          <a href="https://apps.apple.com/br/app/litoral-na-mesa/id945813036" target="_blank" rel="noreferrer">
            <img src="/images/btn_app_store.png" alt="App store" />
          </a>
          <a href="https://play.google.com/store/apps/details?id=br.com.litoralnamesa&hl=pt_BR" target="_blank" rel="noreferrer">
            <img src="/images/btn_google_play.png" alt="Google play store" />
          </a>
        </AppLinks>
      </StepsBox>
    </Row>
  </Section>
);