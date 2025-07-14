'use client';

import { useState } from 'react';
import { MenuButton, MenuPanel, MenuOverlay, Content, UserContent, Nav, NavItem, MobileHeader } from './styles';
import { Icon } from '@iconify/react';
import { useLocation } from '@/contexts/LocationContext';
import ChangeLocation from '../Into/ChangeLocation';
import { usePathname } from 'next/navigation';

export default function SideMenu({ locationSelector = true }: { locationSelector?: boolean }) {
    const [isOpen, setIsOpen] = useState(false);
    const { selectedCity, selectedNeighborhood } = useLocation();
    const pathname = usePathname();
    const toggleMenu = () => setIsOpen(prev => !prev);

    const links = [
        { href: 'shops', icon: 'Icon inicio.png', label: 'Inicio' },
        { href: '/minha-conta', icon: 'Icon Minha conta.png', label: 'Minha conta' },
        { href: '/meus-pedidos', icon: 'Icon Meus pedidos.png', label: 'Meus pedidos' },
        { href: '/meus-enderecos', icon: 'Icon Meus endereços.png', label: 'Meus endereços' },
        { href: '/fale-conosco', icon: 'Icon Fale conosco.png', label: 'Fale conosco' },
        { href: '/termos-de-uso', icon: 'Icon Termos de uso.png', label: 'Termos de uso' },
        { href: '/seja-parceiro', icon: 'Icon Seja parceiro.png', label: 'Seja parceiro' },
        { href: '/logout', icon: 'Icon Deslogar.png', label: 'Deslogar' },
    ]

    return (
        <MobileHeader $view={locationSelector}>
            <MenuButton onClick={toggleMenu} $open={true}>
                <Icon icon="material-symbols:menu-rounded" width="24" color="#fff" />
            </MenuButton>

            {locationSelector && selectedCity && selectedNeighborhood && (
                <ChangeLocation />
            )}

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
                        {links
                            .filter((item) => !(item.label === 'Inicio' && pathname === '/'))
                            .map((item) => (
                                <NavItem
                                    key={item.href}
                                    href={item.href}
                                    style={{ display: 'flex', alignItems: 'center' }}
                                >
                                    <img
                                        src={`/images/home-menu/${item.icon}`}
                                        alt="Logo"
                                        style={{ marginRight: '0.5rem' }}
                                    />
                                    {item.label}
                                </NavItem>
                            ))}
                    </Nav>
                </Content>
            </MenuPanel>
        </MobileHeader>
    );
}
