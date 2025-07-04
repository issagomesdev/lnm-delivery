import { Container } from '@/components/Into/styles';
import { Icon } from '@iconify/react';
import { ReactNode } from 'react';
import { useRouter } from 'next/navigation'

export default function Header({children}: {children?: ReactNode}) {

  const router = useRouter()

    return (
        <Container full={false} fixed={false} style={{ justifyContent: 'center', height: '3.5rem' }}>
            <span onClick={() => router.push('/shops')}>
                <Icon icon="ep:arrow-left-bold" width="15" color="#fff" />
                Voltar
            </span>

            {children}
        </Container>
    )
}