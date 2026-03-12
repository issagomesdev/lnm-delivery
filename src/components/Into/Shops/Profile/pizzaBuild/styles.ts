import React from 'react';
import pizzaStyles from './PizzaBuild.module.css';

export const Options = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: pizzaStyles.options, style }, children);

export const Option = ({ children, style, selected, onClick }: { children?: React.ReactNode; style?: React.CSSProperties; selected?: boolean; onClick?: React.MouseEventHandler }) =>
  React.createElement('div', {
    className: pizzaStyles.option,
    'data-selected': selected ? 'true' : 'false',
    style,
    onClick
  }, children);
