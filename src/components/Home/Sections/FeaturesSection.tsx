import { Section, Row, H2, H3, LongCopy, Box, IconBox, Paragraph } from './styles';
import { Icon } from '@iconify/react'
import React from 'react';
import { theme } from '@/styles/theme';

export const FeaturesSection: React.FC = () => (
    <Section id="historia">
        <Row>
            <H2>Litoral Na Mesa — Há 13 anos fazendo História</H2>
            <LongCopy>
                Há 13 anos, conectamos sabores, estabelecimentos e clientes em uma jornada deliciosa pelo
                Litoral Norte Paulista. Somos mais que um app de pedidos online, somos parte do dia a dia de
                milhares de pessoas, levando praticidade, qualidade e variedade até você. E a história
                continua... Vem com a gente!
            </LongCopy>
        </Row>
        <Row style={{ display: 'flex', gap: '1%', justifyContent: 'space-between', flexWrap: 'wrap' }}>
            {[
                {
                    icon: 'material-symbols:flag-outline',
                    title: '2013 - Somos Pioneiros',
                    text: 'O Litoral na Mesa foi o pioneiro no Litoral Norte Paulista, sendo o primeiro Aplicativo de Delivery a operar na região. Ele transformou a experiência de pedidos de comida, conectando de maneira rápida e prática os estabelecimentos locais com seus clientes.'
                },
                {
                    icon: 'tabler:face-mask',
                    title: '2020 - Pandemia',
                    text: 'Durante a pandemia, devido às restrições de circulação de pessoas, sediamos o tradicional Festival Caraguá A Gosto dentro do nosso aplicativo, ajudando os estabelecimentos a divulgarem seus pratos, apoiando a gastronomia local num momento desafiador, além de concedermos 50% de desconto em nossos serviços durante esse período.'
                },
                {
                    icon: 'material-symbols:open-in-full-rounded',
                    title: '2024 - Expansão',
                    text: 'Em 2024, iniciamos nossa jornada de expansão, reestruturando nossas ferramentas, site e aplicativos para oferecer uma experiência ainda melhor a você, nosso cliente e parceiro do Litoral na Mesa, sempre com mais inovação, eficiência e qualidade. 🧡'
                },
                {
                    icon: 'material-symbols-light:developer-mode',
                    title: '2025 - Sempre inovando',
                    text: 'Você que tem fome de novidade, 2025 será um ano de grandes realizações e mudanças! Renovaremos nosso website e lançaremos recursos e serviços, para aprimorar ainda mais a experiência de nossos parceiros e clientes! 🍔🚀'
                }
            ].map((item, i) => (
                <Box key={i}>
                    <IconBox>
                        <Icon icon={item.icon} style={{ fontSize: '3rem', color: theme.colors.background }} />
                    </IconBox>
                    <H3>{item.title}</H3>
                    <Paragraph>{item.text}</Paragraph>
                </Box>
            ))}
        </Row>
    </Section>
);
