import React from 'react';
import sectionStyles from './Sections.module.css';

export const Row = ({ children, style, className }: { children?: React.ReactNode; style?: React.CSSProperties; className?: string }) =>
  React.createElement('div', { className: `${sectionStyles.row}${className ? ` ${className}` : ''}`, style }, children);

export const Section = ({ children, style, className, id }: { children?: React.ReactNode; style?: React.CSSProperties; className?: string; id?: string }) =>
  React.createElement('section', { className: `${sectionStyles.section}${className ? ` ${className}` : ''}`, style, id }, children);

export const H2 = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('h2', { className: sectionStyles.h2, style }, children);

export const H3 = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('h3', { className: sectionStyles.h3, style }, children);

export const Paragraph = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('p', { className: sectionStyles.paragraph, style }, children);

export const Box = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: sectionStyles.box, style }, children);

export const IconBox = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: sectionStyles.iconBox, style }, children);

export const LongCopy = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('p', { className: sectionStyles.longCopy, style }, children);

export const FadeIn = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: sectionStyles.fadeIn, style }, children);

export const MealsGrid = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('ul', { className: sectionStyles.mealsGrid, style }, children);

export const MealItem = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('li', { className: sectionStyles.mealItem, style }, children);

export const MealPhoto = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('figure', { className: sectionStyles.mealPhoto, style }, children);

export const Step = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: sectionStyles.step, style }, children);

export const StepsItens = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: sectionStyles.stepsItens, style }, children);

export const StepsBox = ({ children, style, align, id }: { children?: React.ReactNode; style?: React.CSSProperties; align?: 'left' | 'right'; id?: string }) =>
  React.createElement('div', {
    className: sectionStyles.stepsBox,
    'data-align': align,
    style,
    id
  }, children);

export const AnimatedDiv = React.forwardRef<HTMLDivElement, { children?: React.ReactNode; style?: React.CSSProperties; $visible: boolean }>(
  ({ children, style, $visible }, ref) =>
    React.createElement('div', {
      ref,
      className: sectionStyles.animatedDiv,
      'data-visible': $visible ? 'true' : 'false',
      style
    }, children)
);
AnimatedDiv.displayName = 'AnimatedDiv';

export const AppImage = ({ src, alt, style }: { src?: string; alt?: string; style?: React.CSSProperties }) =>
  React.createElement('img', { className: sectionStyles.appImage, src, alt, style });

export const AppLinks = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: sectionStyles.appLinks, style }, children);

export const ImageGrid = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: sectionStyles.imageGrid, style }, children);

export const ImageContainer = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: sectionStyles.imageContainer, style }, children);

export const ImageWrapper = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: sectionStyles.imageWrapper, style }, children);

export const StyledImg = ({ src, alt, style }: { src?: string; alt?: string; style?: React.CSSProperties }) =>
  React.createElement('img', { className: sectionStyles.styledImg, src, alt, style });

export const ImageCaption = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: sectionStyles.imageCaption, style }, children);
