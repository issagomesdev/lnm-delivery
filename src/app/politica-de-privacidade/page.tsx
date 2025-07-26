'use client'

import { Container } from '@/components/Into/styles';
import { useIsMobile } from '@/hooks/useIsMobile';
import Header from '@/components/Web/Header';
import SideMenu from '@/components/Mobile/SideMenu';
import Footer from '@/components/Home/Footer';
import { Paragraph, Section, Strong, Title } from '@/components/shared/pageStyles';

const PrivacyPolicyPage = () => {
    const isMobile = useIsMobile();

    return (
        <>
            {isMobile ? <Container> <SideMenu /> </Container> : <Header />}
            <Section>
                <Title>Política de Privacidade</Title>
                <Paragraph>A Política de Privacidade que você está acessando integra os Termos e Condições de Uso e descreve como o plataforma LITORAL NA MESA COMUNICAÇÃO LTDA realiza a coleta, armazenamento, uso, processamento, associação, proteção, compartilhamento e demais formas de tratamento das suas informações, incluindo os seus dados pessoais, em conexão com a plataforma e os Serviços regidos pelos Termos e Condições de Uso.</Paragraph>

                <Paragraph>O Litoral na Mesa está comprometido com a sua privacidade e, por isso, disponibiliza esta Política de Privacidade em seu site e nos aplicativos para que você possa acessar a versão mais atualizada sempre que desejar.</Paragraph>

                <Paragraph>ESTA POLÍTICA DE PRIVACIDADE ESTABELECE AS CONDIÇÕES DE TRATAMENTO DOS SEUS DADOS NECESSÁRIAS PARA A OPERAÇÃO DA PLATAFORMA LITORAL NA MESA. CASO VOCÊ NÃO CONCORDE COM ALGUMA DISPOSIÇÃO DESTA POLÍTICA DE PRIVACIDADE, VOCÊ NÃO DEVE UTILIZAR A PLATAFORMA LITORAL NAMESA. VOCÊ COMPREENDE E CONCORDA DE MANEIRA EXPRESSA QUE O LITORAL NA MESA PODERÁ COLETAR, ARMAZENAR, PROCESSAR, ASSOCIAR, COMPARTILHAR, UTILIZAR, DIVULGAR OU DE OUTRO MODO TRATAR AS SUAS INFORMAÇÕES, INCLUINDO SEUS DADOS PESSOAIS, SOB QUALQUER DAS FORMAS E PARA TODAS AS FINALIDADES PREVISTAS NESTA POLÍTICA DE PRIVACIDADE. </Paragraph>

                <Paragraph>Informamos ainda que o serviço prestado pelo Litoral na Mesa não é direcionado a adolescentes e crianças menores de 13 anos.</Paragraph>

                <Paragraph><Strong>1. Informações coletadas</Strong></Paragraph>
                <Paragraph>Quando você se cadastra e utiliza os Serviços, você fornece ao Litoral na Mesa informações estatísticas de utilização dos Serviços, dados agregados e dados de identificação pessoal. Abaixo detalhamos quais são essas informações.</Paragraph>
                <Paragraph>Quando você se inscrever para ser um usuário registrado do Litoral na Mesa, poderemos obter uma série de informações sobre você, tais como: seu nome, data de nascimento, CPF, endereço eletrônico, endereço de correspondência e número de telefone.</Paragraph>
                <Paragraph>Para as lojas parceiras conseguirem realizar a entrega do seu pedido, nós precisamos que você também nos informe a sua localização ou a localização do local em que gostaria que entregássemos o seu pedido. Essa localização pode ser fornecida pelo endereço que você inserir manualmente no aplicativo.</Paragraph>
                <Paragraph>Além dessas informações que você mesmo nos fornece, nós podemos coletar algumas informações automaticamente sobre os dispositivos a partir dos quais você acessa o Litoral na Mesa.</Paragraph>
                <Paragraph>Dentre essas informações estão endereços IP, tipo de navegador, sistema operacional, informações sobre data e horário, fabricante do dispositivo, modelo, entre outras que poderão ser coletadas pelo Litoral na Mesa.</Paragraph>
                <Paragraph>Caso você não forneça qualquer das informações solicitadas, o Litoral na Mesa não poderá garantir a qualidade e precisão dos Serviços.</Paragraph>

                <Paragraph><Strong>2. Como utilizamos essas informações?</Strong></Paragraph>
                <Paragraph>Utilizamos esses dados coletados para aprimorar a segurança e melhorar os serviços. Dessa forma, podemos analisar e solucionar problemas técnicos, bem como identificar e coibir fraudes na utilização do nosso Serviço.</Paragraph>
                <Paragraph>Os seus dados de contato são utilizados para o Litoral na Mesa ou o restaurante associado se comunicar diretamente com você e para enviar informações relevantes, incluindo informações de transações, avisos sobre o aplicativo e os serviços, ofertas especiais, divulgação de eventos, notícias, práticas recomendadas, entre outras promoções.</Paragraph>

                <Paragraph><Strong>3. Proteção e Armazenamento</Strong></Paragraph>
                <Paragraph>O Litoral na Mesa coleta de informações pessoais suas e, por essa razão, a segurança de seus dados é prioridade.</Paragraph>
                <Paragraph>O Litoral na Mesa emprega práticas de segurança da informação adequadas em todos os seus sistemas e infra-estrutura, incluindo medidas físicas e digitais de segurança visando garantir a proteção de suas informações. Essas medidas incluem controles de acessos, criptografia, implementação SSL, firewalls, entre outros mecanismos e protocolos.</Paragraph>
                <Paragraph>As informações coletadas pelo Litoral na Mesa podem ser armazenadas em servidores localizados no Brasil ou no exterior, a exclusivo critério do Litoral na Mesa. Você declara compreender e concordar que outros países podem ter níveis de proteção de dados diferentes do Brasil. Sem prejuízo, suas informações porventura armazenadas em outros países estarão sujeitas a medidas de segurança pelo menos equivalentes àquelas descritas no parágrafo anterior.</Paragraph>
                <Paragraph>As medidas de segurança acima descritas aplicam-se às suas informações somente a partir do momento em que o Litoral na Mesa as recebe e enquanto as mantém sob sua guarda. O funcionamento e a segurança do dispositivo que você usa para acessar o aplicativo e/ou website e os serviços do Litoral na Mesa, bem como da rede pela qual os dados trafegam não são de responsabilidade do Litoral na Mesa.</Paragraph>
                <Paragraph>Visando garantir um ambiente com maior segurança, o Litoral na Mesa sugere (sem que isso represente garantia contra incidentes) que você respeite as seguintes precauções básicas de segurança:</Paragraph>
                <Paragraph>- Não confie em e-mails estranhos;</Paragraph>
                <Paragraph>- Não acesse sites suspeitos;</Paragraph>
                <Paragraph>- Mantenha mecanismos de proteção ativos e atualizados, como anti-vírus e anti-malware;</Paragraph>
                <Paragraph>- Não instale aplicativos ou programas de fontes estranhas ou ilegais; e</Paragraph>
                <Paragraph>- Não acesse "conteúdo promocional" proveniente de fontes desconhecidas.</Paragraph>

                <Paragraph>O Litoral na Mesa não compartilhará nem fornecerá a terceiros as suas informações, incluindo os seus dados pessoais.</Paragraph>

                <Paragraph><Strong>4. Consentimento</Strong></Paragraph>
                <Paragraph>O Litoral na Mesa oferece seus Serviços sujeito aos Termos e Condições de Uso e à Política de Privacidade e ela será aplicável enquanto você utilizar o Aplicativo e/ou Website e Serviços Quando você instala o Aplicativo ou acessa o Website e realiza seu cadastro nos Serviços você concorda com os Termos e Condições de Uso e com a Política de Privacidade. <Strong>VOCÊ CONSENTE EXPRESSAMENTE COM A COLETA, ARMAZENAMENTO, USO, PROCESSAMENTO, ASSOCIAÇÃO, COMPARTILHAMENTO, DIVULGAÇÃO E OUTROS MODOS DE TRATAMENTO DAS SUAS INFORMAÇÕES, INCLUINDO DADOS PESSOAIS, SOB QUALQUER DAS FORMAS E PARA TODAS AS FINALIDADES PREVISTAS NESTA POLÍTICA DE PRIVACIDADE.</Strong></Paragraph>

                <Paragraph>Alterações futuras desta Política de Privacidade que sejam consideradas relevantes, ou seja, que reduzam ou alterem direitos atribuídos a você, serão comunicadas pelo Litoral na Mesa com antecedência prévia adequada. Nesse caso, se você não concordar com o teor da nova Política de Privacidade, as suas informações continuarão sendo tratadas em conformidade com a versão anterior pelo prazo de aviso prévio concedido, durante o qual você poderá cessar o uso da plataforma Litoral na Mesa. Se você continuar utilizando o aplicativo e/ou website do Litoral na Mesa após o término do prazo de aviso prévio, você estará concordando integralmente com a nova Política de Privacidade, que passarão a reger o tratamento das suas informações.</Paragraph>

                <Paragraph><Strong>5. Exclusão de dados pessoais</Strong></Paragraph>
                <Paragraph>Se você desejar excluir seus dados pessoais sob a guarda do Litoral na Mesa, você deve solicitar a exclusão diretamente à empresa.</Paragraph>
                <Paragraph>Para proceder com a exclusão cadastral, você poderá solicitar pelo menu principal do APP acessando o item "Minha conta" ou entrar em contato com o Litoral na Mesa pelo e-mail ou acessar o formulário de contato através do endereço eletrônico www.litoralnamesa.com.br/contato para solicitar que suas informações sejam definitivamente eliminadas. Portanto, a desinstalação do Aplicativo não basta para a exclusão das suas informações.</Paragraph>

                <Paragraph>O prazo de resposta dos e-mails recebidos e exclusão dos dados poderá levar até 72 (setenta e duas) horas.</Paragraph>

                <Paragraph>Em observância à legislação aplicável ou cumprimento de ordem judicial, o Litoral na Mesa poderá manter determinados dados seus armazenados por um período não inferior a 6 (seis) meses, após o seu pedido de exclusão. Referidos dados não serão anonimizados ou destruídos pelo Litoral na Mesa antes da conclusão desse prazo.</Paragraph>

                <Paragraph>O Litoral na Mesa armazenará a sua solicitação de exclusão e, observado o prazo legal de guarda obrigatória de alguns determinados dados, providenciará a destruição ou anonimização, a critério exclusivo da empresa, das informações capazes de identificar você.</Paragraph>

                <Paragraph>Por outro lado, caso você solicite a exclusão das suas informações e identificarmos fraudes ou mal uso na utilização de nosso serviço ou ainda tenha alguma obrigação pendente de cumprimento com o Litoral na Mesa, as suas informações não serão excluídas e permanecerão armazenadas para o fim de viabilizar a solução da pendência e a adoção de medidas necessárias para resolução.</Paragraph>

                <Paragraph><Strong>VOCÊ CONCORDA COM ESTA POLÍTICA DE PRIVACIDADE E RECONHECE QUE ELA É COMPLEMENTAR AOS TERMOS E CONDIÇÕES DE USO DO LITORAL NA MESA COMUNICAÇÃO LTDA. VOCÊ RECONHECE, AINDA, QUE SE APLICAM AO TRATAMENTO DOS SEUS DADOS PESSOAIS E DEMAIS INFORMAÇÕES OBJETO DESTA POLÍTICA DE PRIVACIDADE AS LEIS DO BRASIL</Strong></Paragraph>

                <Paragraph>Em caso de dúvidas e sugestões, entre em contato com nossos canais de comunicação ao usuário através do endereço eletrônico <a href="https://litoralnamesa.com.br/contato">www.litoralnamesa.com.br/contato</a> ou através do e-mail <a href="mailto:suporte@litoralnamesa.com.br">suporte@litoralnamesa.com.br</a>.</Paragraph>

                <Paragraph>Atualizado em: 26/02/2025</Paragraph>
            </Section>
            <Footer />
        </>
    );
};

export default PrivacyPolicyPage;
