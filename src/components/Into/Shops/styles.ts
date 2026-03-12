import React from 'react';
import shopStyles from './Shops.module.css';

export const Wrapper = ({ children, style, fixed }: { children?: React.ReactNode; style?: React.CSSProperties; fixed?: boolean }) =>
  React.createElement('div', {
    className: shopStyles.wrapper,
    'data-fixed': fixed ? 'true' : 'false',
    style
  }, children);

export const CategoriesWrapper = React.forwardRef<HTMLDivElement, { children?: React.ReactNode; style?: React.CSSProperties; [key: string]: any }>(
  ({ children, style, ...rest }, ref) =>
    React.createElement('div', { ref, className: shopStyles.categoriesWrapper, style, ...rest }, children)
);
CategoriesWrapper.displayName = 'CategoriesWrapper';

export const CategoryItem = ({ children, style, isSelected, onClick }: { children?: React.ReactNode; style?: React.CSSProperties; isSelected?: boolean; onClick?: React.MouseEventHandler }) =>
  React.createElement('div', {
    className: shopStyles.categoryItem,
    'data-selected': isSelected ? 'true' : 'false',
    style,
    onClick
  }, children);

export const CategoryImage = ({ src, alt, style, isSelected }: { src?: string; alt?: string; style?: React.CSSProperties; isSelected?: boolean }) =>
  React.createElement('img', {
    className: shopStyles.categoryImage,
    'data-selected': isSelected ? 'true' : 'false',
    src,
    alt,
    style
  });

export const CategoryName = ({ children, style, isSelected }: { children?: React.ReactNode; style?: React.CSSProperties; isSelected?: boolean }) =>
  React.createElement('span', {
    className: shopStyles.categoryName,
    'data-selected': isSelected ? 'true' : 'false',
    style
  }, children);

export const BannersWrapper = React.forwardRef<HTMLDivElement, { children?: React.ReactNode; style?: React.CSSProperties; [key: string]: any }>(
  ({ children, style, ...rest }, ref) =>
    React.createElement('div', { ref, className: shopStyles.bannersWrapper, style, ...rest }, children)
);
BannersWrapper.displayName = 'BannersWrapper';

export const BannerImage = ({ src, alt, style, draggable, onDragStart }: { src?: string; alt?: string; style?: React.CSSProperties; draggable?: boolean; onDragStart?: React.DragEventHandler }) =>
  React.createElement('img', { className: shopStyles.bannerImage, src, alt, style, draggable, onDragStart });

export const ShopsWrapper = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: shopStyles.shopsWrapper, style }, children);

export const FiltersWrapper = ({ children, style, fixed, animate }: { children?: React.ReactNode; style?: React.CSSProperties; fixed?: boolean; animate?: boolean }) =>
  React.createElement('div', {
    className: shopStyles.filtersWrapper,
    'data-fixed': fixed ? 'true' : 'false',
    'data-animate': animate ? 'true' : 'false',
    'data-opacity': fixed && !animate ? 'hidden' : undefined,
    style
  }, children);

export const FilterInput = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: shopStyles.filterInput, style }, children);

export const FilterButton = ({ children, style, onClick }: { children?: React.ReactNode; style?: React.CSSProperties; onClick?: React.MouseEventHandler }) =>
  React.createElement('button', { className: shopStyles.filterButton, style, onClick }, children);

export const FilterAdvance = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: shopStyles.filterAdvance, style }, children);

export const ShopCount = ({ children, style, close }: { children?: React.ReactNode; style?: React.CSSProperties; close?: boolean }) =>
  React.createElement('div', {
    className: shopStyles.shopCount,
    'data-close': close ? 'true' : 'false',
    style
  }, children);

export const ShopItems = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: shopStyles.shopItems, style }, children);

export const ShopItem = ({ children, style, onClick }: { children?: React.ReactNode; style?: React.CSSProperties; onClick?: React.MouseEventHandler }) =>
  React.createElement('div', { className: shopStyles.shopItem, style, onClick }, children);

export const ShopContent = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: shopStyles.shopContent, style }, children);

export const ShopImage = ({ src, alt, style }: { src?: string; alt?: string; style?: React.CSSProperties }) =>
  React.createElement('img', { className: shopStyles.shopImage, src, alt, style });

export const ShopInfo = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: shopStyles.shopInfo, style }, children);

export const ShopName = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('h4', { className: shopStyles.shopName, style }, children);

export const ShopMeta = ({ children, style, className }: { children?: React.ReactNode; style?: React.CSSProperties; className?: string }) =>
  React.createElement('p', { className: `${shopStyles.shopMeta}${className ? ` ${className}` : ''}`, style }, children);

export const ShopFooter = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: shopStyles.shopFooter, style }, children);

export const ShopRating = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: shopStyles.shopRating, style }, children);

export const ShopOffer = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: shopStyles.shopOffer, style }, children);

export const Tag = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: shopStyles.tag, style }, children);

export const ShopsEmpty = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: shopStyles.shopsEmpty, style }, children);

export const ShopsEmptyIcon = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: shopStyles.shopsEmptyIcon, style }, children);

export const FilterIsActiveCard = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: shopStyles.filterIsActiveCard, style }, children);

export const BottomNavWrapper = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: shopStyles.bottomNavWrapper, style }, children);

export const NavItem = ({ children, style, active, onClick }: { children?: React.ReactNode; style?: React.CSSProperties; active?: boolean; onClick?: React.MouseEventHandler }) =>
  React.createElement('a', {
    className: shopStyles.navItem,
    'data-active': active ? 'true' : 'false',
    style,
    onClick
  }, children);

export const FilterSections = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: shopStyles.filterSections, style }, children);

export const Section = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: shopStyles.section, style }, children);

export const SectionTitle = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('h4', { className: shopStyles.sectionTitle, style }, children);

export const CheckboxWrapper = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: shopStyles.checkboxWrapper, style }, children);

export const TagList = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: shopStyles.tagList, style }, children);

export const TagItem = ({ children, style, active, onClick }: { children?: React.ReactNode; style?: React.CSSProperties; active?: boolean; onClick?: React.MouseEventHandler }) =>
  React.createElement('span', {
    className: shopStyles.tagItem,
    'data-active': active ? 'true' : 'false',
    style,
    onClick
  }, children);

export const FooterButton = ({ children, style, onClick }: { children?: React.ReactNode; style?: React.CSSProperties; onClick?: React.MouseEventHandler }) =>
  React.createElement('button', { className: shopStyles.footerButton, style, onClick }, children);

export const CuponsLabel = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: shopStyles.cuponsLabel, style }, children);

export const CouponsEmpty = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: shopStyles.couponsEmpty, style }, children);

export const CouponsEmptyIcon = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: shopStyles.couponsEmptyIcon, style }, children);
