'use client';

import React from 'react';
import webStyles from './Web.module.css';

export const Container = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: webStyles.container, style }, children);

export const Banner = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: webStyles.banner, style }, children);

export const MaskedImage = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: webStyles.maskedImage, style }, children);

export const MenuContainer = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: webStyles.menuContainer, style }, children);

export const UserContent = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: webStyles.userContent, style }, children);

export const Nav = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('nav', { className: webStyles.nav, style }, children);

export const NavItem = ({ children, style, onClick, href }: { children?: React.ReactNode; style?: React.CSSProperties; onClick?: React.MouseEventHandler; href?: string }) =>
  React.createElement('a', { className: webStyles.navItem, style, onClick, href }, children);

export const CloseButton = ({ children, style, onClick }: { children?: React.ReactNode; style?: React.CSSProperties; onClick?: React.MouseEventHandler }) =>
  React.createElement('button', { className: webStyles.closeButton, style, onClick }, children);
