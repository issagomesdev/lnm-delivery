'use client';

import { Container, LeftSide, NavItem, LogoWrapper, RightSide, UserContent } from "./styles";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useEffect, useRef, useState } from "react";
import FloatingMenu from '@/components/Web/FloatingMenu';
import SideMenu from '@/components/Mobile/SideMenu';
import { useIsMobile } from '@/hooks/useIsMobile';
import { useRouter } from 'next/navigation'
import { useLocation } from '@/contexts/LocationContext';
import ChangeLocation from "./ChangeLocation";

export default function Header({ name, full = false, fixed = false }: { name?: string, full?: boolean, fixed?: boolean }) {

    const [isOpen, setIsOpen] = useState(false);
    const isMobile = useIsMobile();
    const router = useRouter()
    const menuRef = useRef<HTMLDivElement>(null);
    const { selectedCity, selectedNeighborhood } = useLocation();

    useEffect(() => {
        if (!isOpen) return;

        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    const links = [
        { id: 2, href: 'https://litoralnamesa.com.br/contato/', label: 'Fale Conosco' },
        { id: 3, href: 'https://litoralnamesa.com.br/seja-parceiro/', label: 'Seja Parceiro' },
    ]

    return (
        <Container full={full} fixed={fixed}>
            <RightSide full={full}>
                <LogoWrapper onClick={() => router.push("/shops")}>
                    <img src="/images/logo_white.png" alt="Logo" />
                </LogoWrapper>
                <hr />
                <h2>{name ?? ''}</h2>
                {full && selectedCity && selectedNeighborhood &&
                    <ChangeLocation />
                }
            </RightSide>

            <LeftSide>
                {full && links.map((item) => {
                    return (
                        <NavItem
                            key={item.id}
                            href={item.href}
                            style={{ display: 'flex', alignItems: 'center' }}
                        >
                            {item.label}
                        </NavItem>
                    )
                })}
                <UserContent onClick={() => setIsOpen(true)}>
                    <img src="/images/account-icon-white.png" />
                    Eduardo Santos
                    <Icon icon="ic:round-arrow-drop-down" width="20" color="#fff" />
                </UserContent>
                {isOpen && (
                    <FloatingMenu ref={menuRef} onClose={() => setIsOpen(false)} />
                )}
            </LeftSide>

            {isMobile && (<SideMenu />)}
        </Container>
    )
}