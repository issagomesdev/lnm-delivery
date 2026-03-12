'use client';

import React from 'react';
import rastreioStyles from './rastreio.module.css';

export const Container = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: rastreioStyles.container, style }, children);

export const StepProgress = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: rastreioStyles.stepProgress, style }, children);

export const StepItem = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: rastreioStyles.stepItem, style }, children);

export const StepCircle = ({ children, style, className }: { children?: React.ReactNode; style?: React.CSSProperties; className?: string }) =>
  React.createElement('div', {
    className: `${rastreioStyles.stepCircle}${className ? ` ${className}` : ''}`,
    style
  }, children);

export const Circle = ({ children, style, className }: { children?: React.ReactNode; style?: React.CSSProperties; className?: string }) =>
  React.createElement('div', {
    className: `${rastreioStyles.circle}${className ? ` ${className}` : ''}`,
    style
  }, children);

export const Label = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('span', { className: rastreioStyles.label, style }, children);

export const Emoji = ({ src, alt, style }: { src?: string; alt?: string; style?: React.CSSProperties }) =>
  React.createElement('img', { className: rastreioStyles.emoji, src, alt, style });

export const OrderInfo = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: rastreioStyles.orderInfo, style }, children);

export const DeliveryTime = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: rastreioStyles.deliveryTime, style }, children);

export const OrderButton = ({ children, style, onClick }: { children?: React.ReactNode; style?: React.CSSProperties; onClick?: React.MouseEventHandler }) =>
  React.createElement('button', { className: rastreioStyles.orderButton, style, onClick }, children);

export const ContactChannel = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: rastreioStyles.contactChannel, style }, children);

export const CallButton = ({ children, style, onClick }: { children?: React.ReactNode; style?: React.CSSProperties; onClick?: React.MouseEventHandler }) =>
  React.createElement('button', { className: rastreioStyles.callButton, style, onClick }, children);
