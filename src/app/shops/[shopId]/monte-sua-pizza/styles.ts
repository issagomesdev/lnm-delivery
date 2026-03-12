'use client';

import React from 'react';
import pizzaStyles from './monte-sua-pizza.module.css';

export const PizzaBackground = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: pizzaStyles.pizzaBackground, style }, children);

export const Container = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: pizzaStyles.container, style }, children);

export const Content = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: pizzaStyles.content, style }, children);

export const Options = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: pizzaStyles.options, style }, children);

export const Option = ({ children, style, onClick }: { children?: React.ReactNode; style?: React.CSSProperties; onClick?: React.MouseEventHandler }) =>
  React.createElement('div', { className: pizzaStyles.option, style, onClick }, children);

export const FlavorsFigure = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: pizzaStyles.flavorsFigure, style }, children);

export const FlavorsSelecteds = ({ children, style, onClick }: { children?: React.ReactNode; style?: React.CSSProperties; onClick?: React.MouseEventHandler }) =>
  React.createElement('div', { className: pizzaStyles.flavorsSelecteds, style, onClick }, children);

export const FlavorsOptions = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: pizzaStyles.flavorsOptions, style }, children);

export const FlavorsOption = ({ children, style, selected, onClick }: { children?: React.ReactNode; style?: React.CSSProperties; selected?: boolean; onClick?: React.MouseEventHandler }) =>
  React.createElement('div', {
    className: pizzaStyles.flavorsOption,
    'data-selected': selected ? 'true' : 'false',
    style,
    onClick
  }, children);

export const ChangeCategory = ({ children, style, onClick }: { children?: React.ReactNode; style?: React.CSSProperties; onClick?: React.MouseEventHandler }) =>
  React.createElement('div', { className: pizzaStyles.changeCategory, style, onClick }, children);

export const FlavorSelected = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: pizzaStyles.flavorSelected, style }, children);

export const ForwardButton = ({ children, style, onClick }: { children?: React.ReactNode; style?: React.CSSProperties; onClick?: React.MouseEventHandler }) =>
  React.createElement('div', { className: pizzaStyles.forwardButton, style, onClick }, children);
