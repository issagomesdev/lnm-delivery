import React from 'react';
import intoStyles from './Into.module.css';

export const Container = ({ children, style, className, full, fixed }: { children?: React.ReactNode; style?: React.CSSProperties; className?: string; full?: boolean; fixed?: boolean }) =>
  React.createElement('div', {
    className: `${intoStyles.container}${className ? ` ${className}` : ''}`,
    'data-full': full ? 'true' : 'false',
    'data-fixed': fixed ? 'true' : 'false',
    style
  }, children);

export const RightSide = ({ children, style, full }: { children?: React.ReactNode; style?: React.CSSProperties; full?: boolean }) =>
  React.createElement('div', {
    className: intoStyles.rightSide,
    'data-full': full ? 'true' : 'false',
    style
  }, children);

export const LocationContainer = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: intoStyles.locationContainer, style }, children);

export const SelectedLocation = ({ children, style, onClick }: { children?: React.ReactNode; style?: React.CSSProperties; onClick?: React.MouseEventHandler }) =>
  React.createElement('div', { className: intoStyles.selectedLocation, style, onClick }, children);

export const LogoWrapper = ({ children, style, onClick }: { children?: React.ReactNode; style?: React.CSSProperties; onClick?: React.MouseEventHandler }) =>
  React.createElement('div', { className: intoStyles.logoWrapper, style, onClick }, children);

export const LeftSide = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: intoStyles.leftSide, style }, children);

export const NavItem = ({ children, style, href, onClick }: { children?: React.ReactNode; style?: React.CSSProperties; href?: string; onClick?: React.MouseEventHandler }) =>
  React.createElement('a', { className: intoStyles.navItem, style, href, onClick }, children);

export const UserContent = ({ children, style, onClick }: { children?: React.ReactNode; style?: React.CSSProperties; onClick?: React.MouseEventHandler }) =>
  React.createElement('div', { className: intoStyles.userContent, style, onClick }, children);
