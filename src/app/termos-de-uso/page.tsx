'use client'

import { Container } from '@/components/Into/styles';
import styled from 'styled-components';
import { useIsMobile } from '@/hooks/useIsMobile';
import Header from '@/components/Web/Header';
import SideMenu from '@/components/Mobile/SideMenu';
import Footer from '@/components/Home/Footer';

const Section = styled.section`
  padding: 4rem 0;
  max-width: 80%;
  margin: 0 auto;
`;

const Title = styled.h2`
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

const Paragraph = styled.p`
  line-height: 1.7;
  margin-bottom: 1.2rem;
`;

const Strong = styled.strong`
  font-weight: bold;
`;

const TermsPage = () => {
  const isMobile = useIsMobile();

  return (
    <>
      {isMobile ? <Container> <SideMenu /> </Container> : <Header />}
      <Section>
        <Title>Termos de Uso</Title>
        <Paragraph>
          <Strong>7. Pedidos e Processamento de Pedidos</Strong>
        </Paragraph>
        <Paragraph>
          Assim que tiver selecionado seu pedido do menu de Estabelecimentos Delivery, você poderá enviar o seu pedido clicando no botão “Enviar [Concluído]”. É importante que se certifique de todas as informações que você inseriu no pedido, pois uma vez concluído, não haverá possibilidade de correção ou alteração.
        </Paragraph>
        <Paragraph>
          A qualquer momento antes de confirmar o pedido através do botão “Enviar pedido”, caso você decida que não deseja proceder com seu pedido, feche a janela do aplicativo.
        </Paragraph>
        <Paragraph>
          Após concluída a compra sua solicitação começará a ser processado e lhe será enviado uma notificação por e-mail de que seu pedido foi aceito.
        </Paragraph>
        <Paragraph>
          Após 10 minutos, seu pedido ainda não foi aceito e seu celular cadastrado no sistema não recebeu nenhuma mensagem, favor entre em contato com o estabelecimento através do telefone apresentado no acompanhamento do pedido para obter informações sobre o ocorrido. Lembrando que este procedimento é só em último caso, pois entra em contradição ao proposto por nossa empresa, que é a utilização do telefone.
        </Paragraph>
        <Paragraph>
          Por favor observe que assim que fizer o pedido, caso deseje cancela-lo, entre em contato o mais rápido possível com o estabelecimento para evitar possíveis prejuízos entre as partes envolvidas.
        </Paragraph>

        <Paragraph>
          <Strong>8. Preço e Pagamento</Strong>
        </Paragraph>
        <Paragraph>
          Os preços dos produtos estarão indicados em nossa plataforma (Site e APPs). Estes preços incluem todos os impostos aplicáveis, porém, podem não incluir custos de entrega os quais serão adicionados ao valor total devido, quando aplicável.
        </Paragraph>
        <Paragraph>
          O <Strong>LITORAL NA MESA</Strong> contém um grande número de cardápios e pode ser que alguns deles apresentem preços incorretos. O <Strong>LITORAL NA MESA</Strong> não controla a cotação de preços, de forma que não será obrigada a garantir que o pedido seja fornecido a você pelo preço incorreto inferior ou ainda não será obrigada a compensar você pelo preço incorreto.
        </Paragraph>
        <Paragraph>
          Caso você tenha uma reclamação a respeito da qualidade dos alimentos ou do serviço prestado pelos Estabelecimentos Delivery associados no <Strong>LITORAL NA MESA</Strong>, você deverá buscar qualquer forma de compensação diretamente com o estabelecimento contratado. O <Strong>LITORAL NA MESA</Strong> não pode fornecer reembolsos em favor dos Estabelecimentos Delivery e não é responsável por quaisquer reembolsos pretendidos. Todas as reclamações devem ser inicialmente inseridas no Estabelecimento.
        </Paragraph>
        <Paragraph>
          O Pagamento por todos os pedidos devem ser feitos ao entregador conforme escolha definida na plataforma (Site e APPs), ou no ponto de retirada do produto.
        </Paragraph>
        <Paragraph>
          Um desconto pode ser aplicado a seu pedido caso você utilize um código promocional reconhecido por esta plataforma e endossado pelo <Strong>LITORAL NA MESA</Strong>.
        </Paragraph>

        <Paragraph>
          <Strong>9. Licença</Strong>
        </Paragraph>
        <Paragraph>
          Você pode imprimir e realizar o download de partes do <Strong>LITORAL NA MESA</Strong> para o seu próprio uso, nas seguintes condições:
        </Paragraph>
        <Paragraph>
          Salvo se de outra forma definido, o direito autoral e outros direitos de propriedade intelectual no <Strong>LITORAL NA MESA</Strong> e no material nele publicado (incluindo, sem limitações, fotografias e imagens gráficas) são de propriedade do <Strong>LITORAL NA MESA</Strong>. Estes trabalhos são protegidos por leis e tratados internacionais de direito autoral e todos os direitos são reservados. Para os fins dos Termos do <Strong>LITORAL NA MESA</Strong>, qualquer uso de partes deste Portal que não seja em conformidade é proibido.
        </Paragraph>
        <Paragraph>
          Você não deve modificar as cópias digitais ou impressas de quaisquer materiais nem deve utilizar quaisquer imagens, fotografias ou quaisquer outras sequências de gráfico, vídeo ou áudio separadamente de qualquer texto relacionado.
        </Paragraph>
        <Paragraph>
          Você deve se certificar que sejam reconhecidos em todos os momentos os créditos de autoria de todos os materiais do <Strong>LITORAL NA MESA</Strong> contidos nesta plataforma.
        </Paragraph>
        <Paragraph>
          Você não pode utilizar quaisquer dos materiais desta plataforma ou a própria plataforma (Site e APPs) para fins comerciais sem obter uma licença do <Strong>LITORAL NA MESA</Strong>.
        </Paragraph>
        <Paragraph>
          Nenhuma parte desta plataforma (Site e APPs) pode ser reproduzida ou armazenada em qualquer outra plataforma ou incluída em qualquer sistema ou serviço de recuperação eletrônico público ou privado, sem nosso prévio consentimento por escrito.
        </Paragraph>
        <Paragraph>
          Quaisquer direitos não expressamente são reservados ao <Strong>LITORAL NA MESA</Strong>.
        </Paragraph>

        <Paragraph>
          <Strong>10. Acesso ao Serviço</Strong>
        </Paragraph>
        <Paragraph>
          Apesar do <Strong>LITORAL NA MESA</Strong> tentar garantir que esta plataforma (Site e APPs) esteja disponível 24 (vinte e quatro) horas por dia, o <Strong>LITORAL NA MESA</Strong> não poderá ser responsabilizada caso a plataforma não esteja disponível em algum momento ou por algum período.
        </Paragraph>
        <Paragraph>
          O acesso a plataforma poderá ser suspensa temporariamente e sem notificação prévia.
        </Paragraph>
        <Paragraph>
          A transmissão de informações pela internet não é completamente segura. Apesar de tomarmos todas medidas para proteger suas informações, através de servidores certificados e diversas validações de segurança, assim como em outros sites não podemos garantir a total integridade de seus dados transmitidos a plataforma; qualquer transmissão é de seu próprio risco.
        </Paragraph>

        <Paragraph>
          <Strong>11. Serviços e Falhas de Sistema</Strong>
        </Paragraph>
        <Paragraph>
          O <Strong>LITORAL NA MESA</Strong> é possuidora de um sistema de pedidos, que é oferecido de forma exclusiva, a um número ilimitado de USUÁRIOS e anunciantes. Por ser um sistema que depende de diversas outras variantes, e devido ao fato de nenhum sistema funcionar integralmente durante 24 horas, 7 dias por semana, o <Strong>LITORAL NA MESA</Strong> não garante uma disponibilidade de seu sistema de forma constante e absoluta.
        </Paragraph>
        <Paragraph>
          No mesmo sentido, o <Strong>LITORAL NA MESA</Strong> não se responsabiliza por qualquer dano, prejuízo ou perdas no equipamento do USUÁRIO causadas por falhas no sistema, no servidor ou na internet decorrentes de condutas de terceiros.
        </Paragraph>
        <Paragraph>
          O <Strong>LITORAL NA MESA</Strong> também não será responsável por qualquer vírus que possa atacar o equipamento do USUÁRIO em decorrência do acesso, utilização ou navegação por sites ou APPs na internet, ou como consequência da transferência de dados, arquivos, imagens, textos ou áudio contidos no mesmo.
        </Paragraph>
        <Paragraph>
          Os USUÁRIOS não poderão atribuir ao <Strong>LITORAL NA MESA</Strong> nenhuma responsabilidade nem exigir o pagamento por lucro cessante em virtude de prejuízos resultantes de dificuldades técnicas ou falhas nos sistemas ou na internet. Frise-se novamente que, eventualmente, o sistema poderá não estar disponível por motivos técnicos ou falhas da internet, ou por qualquer outro evento fortuito ou de força maior alheio ao controle do <Strong>LITORAL NA MESA</Strong>.
        </Paragraph>

        <Paragraph>
          <Strong>12. Responsabilidades</Strong>
        </Paragraph>
        <Paragraph>
          O <Strong>LITORAL NA MESA</Strong> não é a proprietária ou prestadora dos produtos e serviços oferecidos no Portal, não guarda a posse de qualquer tipo de produto, bem como não realiza quaisquer das ofertas incluídas em sua plataforma. Nesse sentido, o <Strong>LITORAL NA MESA</Strong> também não intervém na entrega dos produtos e serviços cuja negociação se inicie ou se conclua através da sua plataforma.
        </Paragraph>
        <Paragraph>
          O <Strong>LITORAL NA MESA</Strong> não se responsabiliza pela existência, quantidade, qualidade, estado, integridade ou legitimidade dos produtos adquiridos ou contratados pelos USUÁRIOS, assim como pela capacidade para contratar dos USUÁRIOS, ou pela veracidade dos dados pessoais por eles inseridos em seus cadastros.
        </Paragraph>
        <Paragraph>
          O <Strong>LITORAL NA MESA</Strong> não outorga garantia por vícios ocultos ou aparentes nas negociações entre os USUÁRIOS e os anunciantes. Cada USUÁRIO conhece e aceita ser o único responsável pelos produtos que adquire ou serviços que contrata, todos diretamente junto aos anunciantes.
        </Paragraph>
        <Paragraph>
          O <Strong>LITORAL NA MESA</Strong> não será responsável pelo efetivo cumprimento das obrigações assumidas pelos anunciantes. O USUÁRIO reconhece e aceita que ao realizar negociações com os anunciantes ou terceiros faz por sua conta e risco.
        </Paragraph>
        <Paragraph>
          Em nenhum caso o <Strong>LITORAL NA MESA</Strong> será responsável pelo lucro cessante ou por qualquer outro dano ou prejuízo que o USUÁRIO possa sofrer devido às negociações realizadas ou não realizadas através do LITORALNAMESA.COM e decorrentes da conduta dos anunciantes.
        </Paragraph>
        <Paragraph>
          O <Strong>LITORAL NA MESA</Strong> recomenda que toda transação seja realizada com cautela e bom senso. O USUÁRIO deverá sopesar os riscos da negociação. O <Strong>LITORAL NA MESA</Strong> não será responsável pelas transações entre os USUÁRIOS e anunciantes, mesmo as firmadas com base na confiança depositada no sistema ou nos serviços prestados pelo <Strong>LITORAL NA MESA</Strong>.
        </Paragraph>
        <Paragraph>
          Nos casos em que um ou mais USUÁRIOS ou algum terceiro inicie qualquer tipo de reclamação ou ação legal contra os anunciantes, todos e cada um dos USUÁRIOS envolvidos nas reclamações ou ações eximem de toda responsabilidade o <Strong>LITORAL NA MESA</Strong> e a seus diretores, gerentes, empregados, agentes, operários, representantes, procuradores e congêneres.
        </Paragraph>

        <Paragraph>
          <Strong>13. Legislação Aplicável</Strong>
        </Paragraph>
        <Paragraph>
          Todos os itens deste TERMO estão regidos pelas leis vigentes na República Federativa do Brasil. Para todos os assuntos referentes à interpretação e ao cumprimento deste Contrato, as partes se submetem ao Foro da Comarca de Caraguatatuba, Estado de São Paulo, com exclusão de qualquer outro, por mais privilegiado que seja, exceção feita a casos decorrentes da legislação vigente ou de competente determinação legal.
        </Paragraph>

        <Paragraph>
          <br />
          Atualizado em: 26/02/2025
        </Paragraph>

      </Section>
      <Footer />
    </>
  );
};

export default TermsPage;
