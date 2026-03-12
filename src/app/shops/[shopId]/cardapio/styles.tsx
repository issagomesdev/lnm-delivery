'use client';

import React from 'react';
import cardapioStyles from './cardapio.module.css';

export const Wrapper = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: cardapioStyles.wrapper, style }, children);

export const CategorySelector = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: cardapioStyles.categorySelector, style }, children);

export const CategoriesHeader = ({ children, style, fixed }: { children?: React.ReactNode; style?: React.CSSProperties; fixed?: boolean }) =>
  React.createElement('div', {
    className: cardapioStyles.categoriesHeader,
    'data-fixed': fixed ? 'true' : 'false',
    style
  }, children);

export const CategoryButton = ({ children, style, selected, onClick }: { children?: React.ReactNode; style?: React.CSSProperties; selected?: boolean; onClick?: React.MouseEventHandler }) =>
  React.createElement('button', {
    className: cardapioStyles.categoryButton,
    'data-selected': selected ? 'true' : 'false',
    style,
    onClick
  }, children);

export const MenuItems = ({ children, style, fixed }: { children?: React.ReactNode; style?: React.CSSProperties; fixed?: boolean }) =>
  React.createElement('div', {
    className: cardapioStyles.menuItems,
    'data-fixed': fixed ? 'true' : 'false',
    style
  }, children);

export const MenuItem = ({ children, style, withImage, onClick }: { children?: React.ReactNode; style?: React.CSSProperties; withImage?: boolean; onClick?: React.MouseEventHandler }) =>
  React.createElement('div', {
    className: cardapioStyles.menuItem,
    'data-with-image': withImage ? 'true' : 'false',
    style,
    onClick
  }, children);

export const MenuInfo = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: cardapioStyles.menuInfo, style }, children);

export const MenuName = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('h3', { className: cardapioStyles.menuName, style }, children);

export const MenuDescription = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('p', { className: cardapioStyles.menuDescription, style }, children);

export const MenuPrice = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('span', { className: cardapioStyles.menuPrice, style }, children);

export const MenuImage = ({ src, alt, style }: { src?: string; alt?: string; style?: React.CSSProperties }) =>
  React.createElement('img', { className: cardapioStyles.menuImage, src, alt, style });
