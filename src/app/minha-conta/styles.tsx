'use client';

import React from 'react';
import contaStyles from './minha-conta.module.css';

export const Datas = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: contaStyles.datas, style }, children);

export const Data = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: contaStyles.data, style }, children);

export const Textarea = ({ style, value, onChange, placeholder, maxLength }: { style?: React.CSSProperties; value?: string; onChange?: React.ChangeEventHandler<HTMLTextAreaElement>; placeholder?: string; maxLength?: number }) =>
  React.createElement('textarea', { className: contaStyles.textarea, style, value, onChange, placeholder, maxLength });

export const Notice = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('p', { className: contaStyles.notice, style }, children);
