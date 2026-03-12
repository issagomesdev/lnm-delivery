import React from 'react';
import cartStyles from './ShoppingCart.module.css';

// CartBar

export const Bar = ({ children, style, onClick }: { children?: React.ReactNode; style?: React.CSSProperties; onClick?: React.MouseEventHandler }) =>
  React.createElement('div', { className: cartStyles.bar, style, onClick }, children);

export const Label = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: cartStyles.label, style }, children);

export const Total = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: cartStyles.total, style }, children);

// ItemDetails

export const ItemData = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: cartStyles.itemData, style }, children);

export const ItemLabel = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('h3', { className: cartStyles.itemLabel, style }, children);

export const ItemTitle = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('strong', { className: cartStyles.itemTitle, style }, children);

export const OpItem = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: cartStyles.opItem, style }, children);

export const GroupName = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: cartStyles.groupName, style }, children);

export const Textarea = ({ style, value, onChange, placeholder, maxLength }: { style?: React.CSSProperties; value?: string; onChange?: React.ChangeEventHandler<HTMLTextAreaElement>; placeholder?: string; maxLength?: number }) =>
  React.createElement('textarea', { className: cartStyles.textarea, style, value, onChange, placeholder, maxLength });

export const SmallText = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('p', { className: cartStyles.smallText, style }, children);

export const SaveButton = ({ children, style, onClick }: { children?: React.ReactNode; style?: React.CSSProperties; onClick?: React.MouseEventHandler }) =>
  React.createElement('button', { className: cartStyles.saveButton, style, onClick }, children);

// DeliveryMethods

export const AddressField = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: cartStyles.addressField, style }, children);

export const MethodWrapper = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: cartStyles.methodWrapper, style }, children);

export const CustomCheckbox = ({ style, checked, onChange, type }: { style?: React.CSSProperties; checked?: boolean; onChange?: React.ChangeEventHandler<HTMLInputElement>; type?: string }) =>
  React.createElement('input', { className: cartStyles.customCheckbox, style, checked, onChange, type: type || 'checkbox' });

export const Select = ({ children, style, value, onChange }: { children?: React.ReactNode; style?: React.CSSProperties; value?: string; onChange?: React.ChangeEventHandler<HTMLSelectElement> }) =>
  React.createElement('select', { className: cartStyles.select, style, value, onChange }, children);

export const NewAddressButton = ({ children, style, onClick, disabled }: { children?: React.ReactNode; style?: React.CSSProperties; onClick?: React.MouseEventHandler; disabled?: boolean }) =>
  React.createElement('button', { className: cartStyles.newAddressButton, style, onClick, disabled }, children);

export const PriceSummary = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: cartStyles.priceSummary, style }, children);

export const PaymentButton = ({ children, style, onClick }: { children?: React.ReactNode; style?: React.CSSProperties; onClick?: React.MouseEventHandler }) =>
  React.createElement('button', { className: cartStyles.paymentButton, style, onClick }, children);

export const ConfirmDelivery = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: cartStyles.confirmDelivery, style }, children);

export const ConfirmDeliveryContent = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: cartStyles.confirmDeliveryContent, style }, children);

// PaymentMethods

export const PaymentField = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: cartStyles.paymentField, style }, children);

export const CouponBox = ({ children, style, valid }: { children?: React.ReactNode; style?: React.CSSProperties; valid?: boolean }) =>
  React.createElement('div', {
    className: cartStyles.couponBox,
    'data-valid': valid === false ? 'false' : undefined,
    style
  }, children);

export const ValidateButton = ({ children, style, onClick }: { children?: React.ReactNode; style?: React.CSSProperties; onClick?: React.MouseEventHandler }) =>
  React.createElement('button', { className: cartStyles.validateButton, style, onClick }, children);

export const SectionTitle = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('p', { className: cartStyles.sectionTitle, style }, children);

export const PaymentOption = ({ children, style, disabled }: { children?: React.ReactNode; style?: React.CSSProperties; disabled?: boolean }) =>
  React.createElement('label', { className: cartStyles.paymentOption, style, disabled }, children);

export const PaymentSelect = ({ children, style, value, onChange }: { children?: React.ReactNode; style?: React.CSSProperties; value?: string; onChange?: React.ChangeEventHandler<HTMLSelectElement> }) =>
  React.createElement('select', { className: cartStyles.paymentSelect, style, value, onChange }, children);

export const PaymentText = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('p', { className: cartStyles.paymentText, style }, children);

export const ChangeBox = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('div', { className: cartStyles.changeBox, style }, children);

export const ObservationToggle = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) =>
  React.createElement('label', { className: cartStyles.observationToggle, style }, children);

export const ObservationTextarea = ({ style, value, onChange, placeholder, maxLength }: { style?: React.CSSProperties; value?: string; onChange?: React.ChangeEventHandler<HTMLTextAreaElement>; placeholder?: string; maxLength?: number }) =>
  React.createElement('textarea', { className: cartStyles.observationTextarea, style, value, onChange, placeholder, maxLength });

export const SubmitButton = ({ children, style, onClick, disabled }: { children?: React.ReactNode; style?: React.CSSProperties; onClick?: React.MouseEventHandler; disabled?: boolean }) =>
  React.createElement('button', { className: cartStyles.submitButton, style, onClick, disabled }, children);
