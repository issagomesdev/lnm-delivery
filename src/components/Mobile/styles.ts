'use client';

import React from 'react';
import mobileStyles from './Mobile.module.css';

export const Container = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: mobileStyles.container, style }, children);

export const Logo = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: mobileStyles.logo, style }, children);

export const MobileHeader = ({ children, style, $view }: { children?: React.ReactNode; style?: React.CSSProperties; $view?: boolean }) =>
  React.createElement('div', {
    className: mobileStyles.mobileHeader,
    'data-view': $view ? 'true' : 'false',
    style
  }, children);

export const MenuButton = ({ children, style, $open, onClick }: { children?: React.ReactNode; style?: React.CSSProperties; $open?: boolean; onClick?: React.MouseEventHandler }) =>
  React.createElement('button', {
    className: mobileStyles.menuButton,
    'data-open': $open ? 'true' : 'false',
    style,
    onClick
  }, children);

export const MenuPanel = ({ children, style, $isOpen }: { children?: React.ReactNode; style?: React.CSSProperties; $isOpen?: boolean }) =>
  React.createElement('div', {
    className: mobileStyles.menuPanel,
    'data-open': $isOpen ? 'true' : 'false',
    style
  }, children);

export const MenuOverlay = ({ children, style, $isOpen, onClick }: { children?: React.ReactNode; style?: React.CSSProperties; $isOpen?: boolean; onClick?: React.MouseEventHandler }) =>
  React.createElement('div', {
    className: mobileStyles.menuOverlay,
    'data-open': $isOpen ? 'true' : 'false',
    style,
    onClick
  }, children);

export const Content = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: mobileStyles.content, style }, children);

export const UserContent = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: mobileStyles.userContent, style }, children);

export const Nav = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('nav', { className: mobileStyles.nav, style }, children);

export const NavItem = ({ children, style, onClick }: { children?: React.ReactNode; style?: React.CSSProperties; onClick?: React.MouseEventHandler }) =>
  React.createElement('div', { className: mobileStyles.navItem, style, onClick }, children);
