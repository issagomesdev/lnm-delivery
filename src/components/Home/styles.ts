import React from 'react';
import homeStyles from './Home.module.css';

export const LocationContainer = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: homeStyles.locationContainer, style }, children);

export const LocationSelectorContainer = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: homeStyles.locationSelectorContainer, style }, children);

export const Select = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: homeStyles.select, style }, children);

export const LocationIcon = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('h3', { className: homeStyles.locationIcon, style }, children);

export const SearchDeliveryButton = ({ children, style, onClick }: { children?: React.ReactNode; style?: React.CSSProperties; onClick?: React.MouseEventHandler }) =>
  React.createElement('button', { className: homeStyles.searchDeliveryButton, style, onClick }, children);

export const ScrollDownContainer = ({ children, style, className, onClick }: { children?: React.ReactNode; style?: React.CSSProperties; className?: string; onClick?: React.MouseEventHandler }) =>
  React.createElement('span', { className: `${homeStyles.scrollDownContainer}${className ? ` ${className}` : ''}`, style, onClick }, children);

export const FooterContainer = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('footer', { className: homeStyles.footerContainer, style }, children);

export const Row = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: homeStyles.row, style }, children);

export const FooterNav = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('ul', { className: homeStyles.footerNav, style }, children);

export const SocialIcons = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('ul', { className: homeStyles.socialIcons, style }, children);

export const Copyright = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('p', { className: homeStyles.copyright, style }, children);

export const DividerLine = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: homeStyles.dividerLine, style }, children);
