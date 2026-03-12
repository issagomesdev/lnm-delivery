import React from 'react';
import { Icon } from '@iconify/react';
import profileStyles from './Profile.module.css';

// ShopPage

export const Heart = ({ children, style, onClick }: { children?: React.ReactNode; style?: React.CSSProperties; onClick?: React.MouseEventHandler }) =>
  React.createElement('div', { className: profileStyles.heart, style, onClick }, children);

export const Wrapper = ({ children, style, overflow }: { children?: React.ReactNode; style?: React.CSSProperties; overflow?: boolean }) =>
  React.createElement('div', {
    className: profileStyles.wrapper,
    'data-overflow': overflow ? 'true' : undefined,
    style
  }, children);

export const Cover = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: profileStyles.cover, style }, children);

export const ProfileSection = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: profileStyles.profileSection, style }, children);

export const Profile = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: profileStyles.profile, style }, children);

export const ShopName = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('h2', { className: profileStyles.shopName, style }, children);

export const RatingBadge = ({ children, style, onClick }: { children?: React.ReactNode; style?: React.CSSProperties; onClick?: React.MouseEventHandler }) =>
  React.createElement('div', { className: profileStyles.ratingBadge, style, onClick }, children);

export const InfoRow = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: profileStyles.infoRow, style }, children);

export const QuickInfoItem = ({ children, style, onClick }: { children?: React.ReactNode; style?: React.CSSProperties; onClick?: React.MouseEventHandler }) =>
  React.createElement('div', { className: profileStyles.quickInfoItem, style, onClick }, children);

export const ItemIcon = ({ icon, style }: { icon: string; style?: React.CSSProperties }) =>
  React.createElement('span', { className: profileStyles.itemIcon, style },
    React.createElement(Icon, { icon })
  );

// DeliveryFees

export const Content = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: profileStyles.content, style }, children);

export const SearchInput = ({ style, value, onChange, placeholder, type }: { style?: React.CSSProperties; value?: string; onChange?: React.ChangeEventHandler<HTMLInputElement>; placeholder?: string; type?: string }) =>
  React.createElement('input', { className: profileStyles.searchInput, style, value, onChange, placeholder, type });

export const FeeRow = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: profileStyles.feeRow, style }, children);

// Informations

export const Section = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('section', { className: profileStyles.section, style }, children);

export const DeliveryHours = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('ul', { className: profileStyles.deliveryHours, style }, children);

export const PaymentsTypes = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: profileStyles.paymentsTypes, style }, children);

export const PaymentsType = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: profileStyles.paymentsType, style }, children);

export const MapButton = ({ children, style, onClick }: { children?: React.ReactNode; style?: React.CSSProperties; onClick?: React.MouseEventHandler }) =>
  React.createElement('button', { className: profileStyles.mapButton, style, onClick }, children);

// Reviews

export const Summary = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: profileStyles.summary, style }, children);

export const Stars = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: profileStyles.stars, style }, children);

export const RatingsSummary = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: profileStyles.ratingsSummary, style }, children);

export const RatingRow = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: profileStyles.ratingRow, style }, children);

export const ReviewsContainer = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: profileStyles.reviewsContainer, style }, children);

export const CommentBox = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: profileStyles.commentBox, style }, children);

export const RatingHeader = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: profileStyles.ratingHeader, style }, children);

export const ReplyContainer = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: profileStyles.replyContainer, style }, children);

export const ReplyLab = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: profileStyles.replyLab, style }, children);

export const ReplyIcon = ({ icon, style }: { icon: string; style?: React.CSSProperties }) =>
  React.createElement('span', { className: profileStyles.replyIcon, style },
    React.createElement(Icon, { icon })
  );

// Categories

export const CategoriesContainer = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: profileStyles.categoriesContainer, style }, children);

export const CategoryItem = ({ children, style, onClick }: { children?: React.ReactNode; style?: React.CSSProperties; onClick?: React.MouseEventHandler }) =>
  React.createElement('button', { className: profileStyles.categoryItem, style, onClick }, children);
