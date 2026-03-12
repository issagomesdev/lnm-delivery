import React from 'react';
import pedidosStyles from './meus-pedidos.module.css';

export const Container = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: pedidosStyles.container, style }, children);

export const OrderCard = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: pedidosStyles.orderCard, style }, children);

export const OrderInfo = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: pedidosStyles.orderInfo, style }, children);

export const StatusTag = ({ children, style, status }: { children?: React.ReactNode; style?: React.CSSProperties; status?: string }) =>
  React.createElement('div', {
    className: pedidosStyles.statusTag,
    'data-status': status,
    style
  }, children);

export const ActionButton = ({ children, style, color, onClick }: { children?: React.ReactNode; style?: React.CSSProperties; color?: 'orange' | 'green' | 'blue'; onClick?: React.MouseEventHandler }) =>
  React.createElement('button', {
    className: pedidosStyles.actionButton,
    'data-color': color,
    style,
    onClick
  }, children);

export const Pagination = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: pedidosStyles.pagination, style }, children);
