import React from 'react';
import carrinhoStyles from './carrinho.module.css';

export const Wrapper = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: carrinhoStyles.wrapper, style }, children);

export const ItemsCard = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: carrinhoStyles.itemsCard, style }, children);

export const ItemCard = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: carrinhoStyles.itemCard, style }, children);

export const CategoryName = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('p', { className: carrinhoStyles.categoryName, style }, children);

export const ItemName = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('h4', { className: carrinhoStyles.itemName, style }, children);

export const DetailsLink = ({ children, style, onClick }: { children?: React.ReactNode; style?: React.CSSProperties; onClick?: React.MouseEventHandler }) =>
  React.createElement('a', { className: carrinhoStyles.detailsLink, style, onClick }, children);

export const Price = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('p', { className: carrinhoStyles.price, style }, children);

export const Actions = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: carrinhoStyles.actions, style }, children);

export const Delete = ({ children, style, onClick }: { children?: React.ReactNode; style?: React.CSSProperties; onClick?: React.MouseEventHandler }) =>
  React.createElement('button', { className: carrinhoStyles.delete, style, onClick }, children);

export const QuantityControls = ({ children, style, withBorder }: { children?: React.ReactNode; style?: React.CSSProperties; withBorder?: boolean }) =>
  React.createElement('div', {
    className: carrinhoStyles.quantityControls,
    'data-with-border': withBorder ? 'true' : 'false',
    style
  }, children);

export const QtyBtn = ({ children, style, onClick }: { children?: React.ReactNode; style?: React.CSSProperties; onClick?: React.MouseEventHandler }) =>
  React.createElement('button', { className: carrinhoStyles.qtyBtn, style, onClick }, children);

export const TotalFooter = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: carrinhoStyles.totalFooter, style }, children);

export const LeftButton = ({ children, style, onClick }: { children?: React.ReactNode; style?: React.CSSProperties; onClick?: React.MouseEventHandler }) =>
  React.createElement('button', { className: carrinhoStyles.leftButton, style, onClick }, children);

export const RightButton = ({ children, style, onClick }: { children?: React.ReactNode; style?: React.CSSProperties; onClick?: React.MouseEventHandler }) =>
  React.createElement('button', { className: carrinhoStyles.rightButton, style, onClick }, children);

export const SubTotal = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: carrinhoStyles.subTotal, style }, children);
