'use client';

import { Container } from '@/components/Into/styles';
import { Icon } from '@iconify/react';
import { ReactNode, useState } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useShoppingCart } from '@/contexts/ShoppingCartContext';
import ModalComponent from '@/components/shared/Modal/ModalComponent';
import { Label } from "@/components/shared/Modal/styles";
import { useShopPage } from '@/contexts/ShopPageContext';

export default function Header({ children, setLoading }: { children?: ReactNode, setLoading?: (value: boolean) => void }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { cart, clearCart } = useShoppingCart();
  const [storeExitAlert, setStoreExitAlert] = useState(false);
  const { updateShopId } = useShopPage();

  const handleBack = () => {
    setLoading?.(true)
    const match1 = pathname.match(/^\/shops\/(\d+)\/cardapio$/) || pathname.match(/^\/shops\/(\d+)\/monte-sua-pizza$/);
    const match2 =  /^\/(?:shops|cupons|favoritos)\/?$/.test(pathname) && searchParams.has('shopId');

    if (match1) {
      const shopId = match1[1];
      router.push(`/shops?shopId=${shopId}&CouponAlert=false`);
    } else if (match2) {
      if (cart.length > 0) {
        setLoading?.(false)
        setStoreExitAlert(true);
        return;
      }

      window.scrollTo({ top: 0, behavior: 'smooth' });
      updateShopId(null);
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

      <ModalComponent
        isOpen={storeExitAlert}
        title={"Atenção"}
        onConfirm={() => {
          setLoading?.(true)
          clearCart();
          updateShopId(null);
        }}
        onClose={() => setStoreExitAlert(false)}
        onConfirmText={"Sim"}
        onCloseText={"Não"}
      >
        <Label>Ao sair da loja os itens adicionados serão excluídos. Tem certeza que deseja sair?</Label>
      </ModalComponent>
    </Container>
  );
}