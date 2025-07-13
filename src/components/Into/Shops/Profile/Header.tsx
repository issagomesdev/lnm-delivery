'use client';

import { Container } from '@/components/Into/styles';
import { Icon } from '@iconify/react';
import { ReactNode } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export default function Header({ children }: { children?: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  const handleBack = () => {
    const match1 = pathname.match(/^\/shops\/(\d+)\/cardapio$/);
    const match2 = pathname.match(/^\/shops\/(\d+)$/);

    if(match1){
      const shopId = match1[1];
      router.push(`/shops/${shopId}`);
    }else if (match2) {
      router.push(`/shops`);
    } else {
      router.back();
    }
  };

  return (
    <Container full={false} fixed={false} style={{ justifyContent: 'center', height: '3.5rem' }}>
      <span onClick={handleBack} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}>
        <Icon icon="ep:arrow-left-bold" width="15" color="#fff" />
        Voltar
      </span>

      {children}
    </Container>
  );
}