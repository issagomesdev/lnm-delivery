'use client';

import { Container, LogoWrapper, UserContent } from "./styles";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useEffect, useRef, useState } from "react";
import FloatingMenu from '@/components/Web/FloatingMenu';
import SideMenu from '@/components/Mobile/SideMenu';
import { useIsMobile } from '@/hooks/useIsMobile';
import { useRouter } from 'next/navigation'

export default function Header({ name }: { name?: string }) {

    const [isOpen, setIsOpen] = useState(false);
    const isMobile = useIsMobile();
    const router = useRouter()
    const menuRef = useRef<HTMLDivElement>(null);

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

    return (
        <Container>
            <LogoWrapper onClick={() => router.push("/shops")}>
                <img src="/images/logo_white.png" alt="Logo" />
            </LogoWrapper>
            <h2>{name ?? ''}</h2>
            <UserContent onClick={() => setIsOpen(true)}>
                <img src="/images/account-icon-white.png" />
                Eduardo Santos
                <Icon icon="ic:round-arrow-drop-down" width="20" color="#fff" />
            </UserContent>
            {isOpen && (
                <FloatingMenu ref={menuRef} onClose={() => setIsOpen(false)} />
            )}

            {isMobile && (<SideMenu />)}
        </Container>
    )
}