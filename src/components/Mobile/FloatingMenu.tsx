'use client';

import { useState } from 'react';
import { MenuButton, MenuPanel, MenuOverlay, Content, UserContent, Nav, NavItem } from './styles';
import { Icon } from '@iconify/react';
import { theme } from '@/styles/theme';

export default function FloatingMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(prev => !prev);

    const links = [
        { href: '/minha-conta', icon: 'Icon Minha conta.png', label: 'Minha conta' },
        { href: '/meus-pedidos', icon: 'Icon Meus pedidos.png', label: 'Meus pedidos' },
        { href: '/meus-enderecos', icon: 'Icon Meus endereços.png', label: 'Meus endereços' },
        { href: '/fale-conosco', icon: 'Icon Fale conosco.png', label: 'Fale conosco' },
        { href: '/termos-de-uso', icon: 'Icon Termos de uso.png', label: 'Termos de uso' },
        { href: '/seja-parceiro', icon: 'Icon Seja parceiro.png', label: 'Seja parceiro' },
        { href: '/logout', icon: 'Icon Deslogar.png', label: 'Deslogar' },
    ]

    return (
        <>
            <MenuButton onClick={toggleMenu} $open={true}>
                <Icon icon="material-symbols:menu-rounded" width="24" color="#fff" />
            </MenuButton>

            <MenuOverlay $isOpen={isOpen} onClick={toggleMenu} />

            <MenuPanel $isOpen={isOpen}>
                <MenuButton onClick={toggleMenu} $open={false}>
                    <Icon icon="ic:round-close" width="15" color="#fff" />
                </MenuButton>
                <Content>
                    <UserContent>
                        <img src="/images/account-icon.png" />
                        Eduardo Santos
                    </UserContent>
                    <Nav>
                        {links.map((item) => {
                            return (
                                <NavItem
                                    key={item.href}
                                    href={item.href}
                                    style={{ display: 'flex', alignItems: 'center', }}>
                                    <img src={`/images/home-menu/${item.icon}`} alt="Logo" width="12" style={{ marginRight: '0.5rem' }} />
                                    {item.label}
                                </NavItem>
                            )
                        })}
                    </Nav>
                </Content>
            </MenuPanel>
        </>
    );
}
