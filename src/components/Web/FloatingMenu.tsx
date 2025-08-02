import { forwardRef, useState } from 'react';
import { MenuContainer, UserContent, Nav, NavItem, CloseButton } from './styles';
import { Icon } from '@iconify/react';
import { Loading } from '../Loading';
import { usePathname, useRouter } from 'next/navigation';

type FloatingMenuProps = {
    onClose: () => void;
};

const FloatingMenu = forwardRef<HTMLDivElement, FloatingMenuProps>(({ onClose }, ref) => {

    const links = [
        { href: '/minha-conta', icon: 'Icon Minha conta.png', label: 'Minha conta' },
        { href: '/meus-pedidos', icon: 'Icon Meus pedidos.png', label: 'Meus pedidos' },
        { href: '/meus-enderecos', icon: 'Icon Meus endereços.png', label: 'Meus endereços' },
        { href: '/logout', icon: 'Icon Deslogar.png', label: 'Deslogar' },
    ];

    const router = useRouter();
    const pathname = usePathname();
    const [loading, setLoading] = useState(false);

    return (
        <MenuContainer ref={ref}>
            {loading && <Loading />}
            <CloseButton onClick={onClose}>
                <Icon icon="ic:round-close" width="15" color="#fff" />
            </CloseButton>
            <UserContent>
                <img src="/images/account-icon.png" />
                Eduardo Santos
            </UserContent>
            <Nav>
                {links.map((item) => (
                    <NavItem
                        key={item.href}
                        onClick={() => {
                            if (pathname !== item.href) {
                                setLoading(true);
                                router.push(item.href);
                            }
                        }}
                        style={{ display: 'flex', alignItems: 'center' }}
                    >
                        <img src={`/images/home-menu/${item.icon}`} alt="Logo" style={{ marginRight: '0.5rem' }} />
                        {item.label}
                    </NavItem>
                ))}
            </Nav>
        </MenuContainer>
    );
});

FloatingMenu.displayName = 'FloatingMenu';

export default FloatingMenu;
