import React from 'react';
import enderecosStyles from './meus-enderecos.module.css';

export const Container = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: enderecosStyles.container, style }, children);

export const AddButton = ({ children, style, onClick }: { children?: React.ReactNode; style?: React.CSSProperties; onClick?: React.MouseEventHandler }) =>
  React.createElement('button', { className: enderecosStyles.addButton, style, onClick }, children);

export const Card = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: enderecosStyles.card, style }, children);

export const Datas = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: enderecosStyles.datas, style }, children);

export const Actions = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: enderecosStyles.actions, style }, children);

export const ActionButton = ({ children, style, className, onClick }: { children?: React.ReactNode; style?: React.CSSProperties; className?: string; onClick?: React.MouseEventHandler }) =>
  React.createElement('button', {
    className: `${enderecosStyles.actionButton}${className ? ` ${enderecosStyles[className] || className}` : ''}`,
    style,
    onClick
  }, children);
