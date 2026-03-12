// CSS Module-based re-exports for backward compatibility
// These are plain React functional components using Modal.module.css

import React from 'react';
import modalStyles from './Modal.module.css';

export const Title = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('h3', { className: modalStyles.title, style }, children);

export const Overlay = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: modalStyles.overlay, style }, children);

export const ModalBox = ({ children, style, width }: { children?: React.ReactNode; style?: React.CSSProperties; width?: number }) =>
  React.createElement('div', {
    className: modalStyles.modalBox,
    style: { ...style, ...(width !== undefined ? { maxWidth: `${width}px` } : {}) }
  }, children);

export const Label = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('p', { className: modalStyles.label, style }, children);

export const Content = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: modalStyles.content, style }, children);

export const ButtonGroup = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: modalStyles.buttonGroup, style }, children);

export const CancelButton = ({ children, style, onClick }: { children?: React.ReactNode; style?: React.CSSProperties; onClick?: () => void }) =>
  React.createElement('button', { className: modalStyles.cancelButton, style, onClick }, children);

export const ConfirmButton = ({ children, style, onClick }: { children?: React.ReactNode; style?: React.CSSProperties; onClick?: () => void }) =>
  React.createElement('button', { className: modalStyles.confirmButton, style, onClick }, children);

export const CloseXButton = ({ children, style, $return, onClick }: { children?: React.ReactNode; style?: React.CSSProperties; $return?: boolean; onClick?: () => void }) =>
  React.createElement('button', {
    className: modalStyles.closeXButton,
    style,
    'data-return': $return ? 'true' : undefined,
    onClick
  }, children);
