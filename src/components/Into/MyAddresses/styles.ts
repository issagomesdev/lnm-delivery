import React from 'react';
import addressStyles from './MyAddresses.module.css';

export const Form = ({ children, style, onSubmit }: { children?: React.ReactNode; style?: React.CSSProperties; onSubmit?: React.FormEventHandler<HTMLFormElement> }) =>
  React.createElement('form', { className: addressStyles.form, style, onSubmit }, children);

export const Field = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: addressStyles.field, style }, children);

export const Button = ({ children, style, onClick, type }: { children?: React.ReactNode; style?: React.CSSProperties; onClick?: React.MouseEventHandler; type?: 'button' | 'submit' | 'reset' }) =>
  React.createElement('button', { className: addressStyles.button, style, onClick, type }, children);
