import React from 'react';
import checkoutStyles from './Checkout.module.css';

export const ItemImage = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: checkoutStyles.itemImage, style }, children);

export const ItemInfo = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: checkoutStyles.itemInfo, style }, children);

export const ModalBox = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: checkoutStyles.modalBox, style }, children);

export const Container = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: checkoutStyles.container, style }, children);

export const AddItem = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: checkoutStyles.addItem, style }, children);

export const Content = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: checkoutStyles.content, style }, children);

export const Section = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: checkoutStyles.section, style }, children);

export const OptionsLabel = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('strong', { className: checkoutStyles.optionsLabel, style }, children);

export const OptionHeader = ({ children, style, requerid }: { children?: React.ReactNode; style?: React.CSSProperties; requerid?: boolean }) =>
  React.createElement('div', {
    className: checkoutStyles.optionHeader,
    'data-requerid': requerid ? 'true' : 'false',
    style
  }, children);

export const OptionQuantity = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: checkoutStyles.optionQuantity, style }, children);

export const Description = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('p', { className: checkoutStyles.description, style }, children);

export const Price = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('p', { className: checkoutStyles.price, style }, children);

export const OptionGroup = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: checkoutStyles.optionGroup, style }, children);

export const OptionItem = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: checkoutStyles.optionItem, style }, children);

export const ItemName = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: checkoutStyles.itemName, style }, children);

export const QuantityControls = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: checkoutStyles.quantityControls, style }, children);

export const QuantityButton = ({ children, style, onClick, onMouseDown, onMouseUp, onMouseLeave, onTouchStart, onTouchEnd }: { children?: React.ReactNode; style?: React.CSSProperties; onClick?: React.MouseEventHandler; onMouseDown?: React.MouseEventHandler; onMouseUp?: React.MouseEventHandler; onMouseLeave?: React.MouseEventHandler; onTouchStart?: React.TouchEventHandler; onTouchEnd?: React.TouchEventHandler }) =>
  React.createElement('button', { className: checkoutStyles.quantityButton, style, onClick, onMouseDown, onMouseUp, onMouseLeave, onTouchStart, onTouchEnd }, children);

export const TextArea = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: checkoutStyles.textArea, style }, children);

export const Footer = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: checkoutStyles.footer, style }, children);

export const FooterContent = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: checkoutStyles.footerContent, style }, children);

export const AddButton = ({ children, style, onClick, active }: { children?: React.ReactNode; style?: React.CSSProperties; onClick?: React.MouseEventHandler; active?: boolean }) =>
  React.createElement('button', {
    className: checkoutStyles.addButton,
    'data-active': active ? 'true' : 'false',
    style,
    onClick
  }, children);

export const TotalPrice = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('span', { className: checkoutStyles.totalPrice, style }, children);

export const ClosedWarning = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: checkoutStyles.closedWarning, style }, children);
