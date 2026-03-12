import React from 'react';
import ordersStyles from './MyOrders.module.css';

export const Title = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('h3', { className: ordersStyles.title, style }, children);

export const RatingRow = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: ordersStyles.ratingRow, style }, children);

export const Stars = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: ordersStyles.stars, style }, children);

export const CommentBox = ({ children, style, onClick }: { children?: React.ReactNode; style?: React.CSSProperties; onClick?: React.MouseEventHandler }) =>
  React.createElement('div', { className: ordersStyles.commentBox, style, onClick }, children);

export const BottomRow = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: ordersStyles.bottomRow, style }, children);

export const SecondModal = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: ordersStyles.secondModal, style }, children);

export const SecondModalContent = ({ children, style, keyboardOpen }: { children?: React.ReactNode; style?: React.CSSProperties; keyboardOpen?: boolean }) =>
  React.createElement('div', {
    className: ordersStyles.secondModalContent,
    'data-keyboard-open': keyboardOpen ? 'true' : 'false',
    style
  }, children);

// OrderDetails

export const OrderContainer = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: ordersStyles.orderContainer, style }, children);

export const StoreInfo = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: ordersStyles.storeInfo, style }, children);

export const Table = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('table', { className: ordersStyles.table, style }, children);

export const Note = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('p', { className: ordersStyles.note, style }, children);

export const Info = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: ordersStyles.info, style }, children);
