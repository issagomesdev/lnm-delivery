import React from 'react';
import pageStyles from './page.module.css';

export const Section = ({ children, style, className }: { children?: React.ReactNode; style?: React.CSSProperties; className?: string }) =>
  React.createElement('section', { className: `${pageStyles.section}${className ? ` ${className}` : ''}`, style }, children);

export const Title = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('h2', { className: pageStyles.title, style }, children);

export const Paragraph = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('p', { className: pageStyles.paragraph, style }, children);

export const Strong = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('strong', { className: pageStyles.strong, style }, children);
