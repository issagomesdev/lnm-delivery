import { forwardRef } from 'react';
import { MenuContainer, UserContent, Nav, NavItem, CloseButton } from './styles';
import { Icon } from '@iconify/react';

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

    return (
        <MenuContainer ref={ref}>
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
                        href={item.href}
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
