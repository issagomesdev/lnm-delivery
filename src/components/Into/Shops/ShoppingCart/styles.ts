import styled from "styled-components";

interface Props {
  active?: boolean;
  valid?: boolean;
}

export const ItemImage = styled.div`
    width: 100%;

    >img {
        width: 100%;
        heigth: auto;
    }
`;

export const ItemInfo = styled.div`
   
`;

export const Content = styled.div`
  padding: 16px;
  overflow-y: auto;
  flex: 1;
`;

export const Section = styled.div`
  padding: 10px 15px;
  text-align: left;
  
  h3, h4 {
    margin: 0 0 6px 0;
  }
`;

export const OptionsLabel = styled.strong`
  color: ${({ theme }) => theme.colors.primary};
  display: block;
  text-align: left;
  border-bottom: 2px solid ${({ theme }) => theme.colors.separators};
  margin: 0 15px;
  padding: 10px 0;
`;

export const OptionHeader = styled.div`
  background-color: #ebebeb;
  padding: 10px;
  border-radius: 6px;
  position: relative;

  >span.required {
    color: #fff;
    background-color: ${({ theme }) => theme.colors.primary};
    font-weight: bold;
    font-size: 8px;
    padding: 2px 5px;
    border-radius: 3px;
    position: absolute;
    right: 10px;
    bottom: 5px;
  }
`;

export const OptionQuantity = styled.div`
    display: flex;
    align-items: center;
    font-size: 10px;
    font-weight: 500;
    color: #777;
    
    span {
        margin-right: 10px;
    }
`;

export const Description = styled.p`
  font-size: 14px;
  color: #555;
  margin-bottom: 4px;
`;

export const Price = styled.p`
  color: ${({ theme }) => theme.colors.green_highlight};
  font-weight: bold;
  margin: 10px 0 0 0;
`;

export const OptionGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 10px;
`;

export const OptionItem = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ItemName = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 14px;

    >span {
      font-size: 12px;
      margin-top: 5px;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.green_highlight};
    }
`;

export const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  span {
    min-width: 20px;
    text-align: center;
  }
`;

export const QuantityButton = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  border: none;
  color: #fff;
  border-radius: 4px;
  width: 28px;
  height: 28px;
  font-size: 16px;
  cursor: pointer;
`;

export const TextArea = styled.textarea`
  width: 100%;
  min-height: 80px;
  border: 1px dashed #ccc;
  padding: 8px;
  resize: none;
  border-radius: 6px;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 16px;
  border-top: 1px solid #eee;
`;

export const AddButton = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== 'active',
}) <Props>`
  background: ${({ active, theme }) =>
    active ? theme.colors.primary : theme.colors.separators};
  color: white;
  border: none;
  padding: 10px 16px;
  border-radius: 8px;
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: ${({ active }) => (active ? 'pointer' : 'not-allowed')};
  opacity: ${({ active }) => (active ? 1 : 0.6)};
  transition: 0.3s ease all;
`;

export const TotalPrice = styled.span`
  font-weight: bold;
`;

// CartBar

export const Bar = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 12px 16px;
  display: flex;
  justify-content: center;
  gap: 3rem;
  align-items: center;
  z-index: 999;
  cursor: pointer;
`;

export const Label = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 15px;
  position: relative;
  font-weight: 500;
  
  > span {
    background-color: #fff;
    color: ${({ theme }) => theme.colors.primary};
    border-radius: 10px;
    width: 16px;
    height: 16px;
    font-size: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    position: absolute;
    left: 16px;
  }
`;

export const Total = styled.div`
  font-weight: bold;
  font-size: 15px;
`;

// ItemDetails

export const ItemData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 12px;
  gap: 2px;
`;

export const ItemLabel = styled.h3`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 500;
`;

export const ItemTitle = styled.strong`
  font-size: 14px;
`;

export const OpItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  span {
    font-weight: 500;
    color: #4d6571;
    font-size: 14px;
  }

  strong {
    font-size: 14px;
    margin-bottom: 5px;
  }
`;

export const GroupName = styled.div`
  font-size: 0.75rem;
  color: #999;
  margin-top: -0.25rem;
`;

export const Textarea = styled.textarea`
  width: 100%;
  height: 90px;
  padding: 8px;
  margin: 0.5rem 0;
  border: 1px dashed #ccc;
  border-radius: 5px;
`;

export const SmallText = styled.p`
  font-size: 0.7rem;
  color: #999;
`;

export const SaveButton = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  padding: 10px;
  width: 100%;
  font-weight: bold;
  position: absolute;
  left: 0;
  bottom: 0;
  cursor: pointer;
`;

// DeliveryMethods

export const AddressField = styled.div`
  display: block;
  text-align: left;

  >label {
    display: block;
    font-weight: bold;
    margin-bottom: 1rem;
  }
`;

export const MethodWrapper = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;

  label {
    font-weight: 500;
    display: flex;
    gap: 2px;
  }

  input {
    margin-right: 4px;
  }
`;

export const CustomCheckbox = styled.input`
  appearance: none;
  width: 18px;
  height: 18px;
  border: 2px solid ${({ theme }) => theme.colors.text_secondary};
  border-radius: 4px;
  margin-right: 8px;
  cursor: pointer;
  position: relative;

  &:checked {
    background-color: ${({ theme }) => theme.colors.primary};
    border: 2px solid ${({ theme }) => theme.colors.primary};
  }

  &:checked::after {
    content: '✔';
    color: white;
    font-size: 12px;
    position: absolute;
    top: -1.5px;
    left: 3px;
    font-weight: bold;
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 8px;
  margin-bottom: 1rem;
`;

export const NewAddressButton = styled.button`
  width: 100%;
  padding: 10px;
  margin-bottom: 1.5rem;
  background: #ccc;
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  &:disabled {
    opacity: 0.5;
  }
`;

export const PriceSummary = styled.div`
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: space-around;

  div {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    gap: 5px;
  }
`;

export const PaymentButton = styled.button`
  width: 100%;
  padding: 12px;
  background: #009688;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  border: none;
  cursor: pointer;
`;

export const ConfirmDelivery = styled.div`
    position: absolute;
    background: transparent;
    width: 95%;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    right: 50%;
    top: 50%;
    transform: translate(50%, -50%);
    z-index: 1000;
`;

export const ConfirmDeliveryContent = styled.div`
    background: #fff;
    border-radius: 4px;
    width: 100%;
    height: 100%;
    text-align: center;
`;

// PaymentMethods

export const PaymentField = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  span {
    font-size: 10px;
    font-weight: 500;
    color: #999;
  }
`;

export const CouponBox = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== 'valid',
}) <Props>`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 8px;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 6px;
  padding: 6px 10px;
  margin-bottom: 1rem;

  svg {
    flex-shrink: 0;
  }

  input {
    flex: 1;
    border: none;
    outline: none;
    font-size: 14px;
    background: transparent;  
    color: ${({ valid }) => valid ? '#000' : 'red'};
  }
`;

export const ValidateButton = styled.button`
  background: #00a88c;
  color: white;
  border: none;
  padding: 6px 14px;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background: #008b75;
  }
`;

export const SectionTitle = styled.p`
  font-weight: bold;
  font-size: 14px;
  margin: 0 0 1rem;
`;

export const PaymentOption = styled.label`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 1rem;
  font-size: 14px;
  font-weight: 500;

  input[type='checkbox'] {
    accent-color: ${({ theme }) => theme.colors.primary};
    width: 18px;
    height: 18px;
    cursor: pointer;
  }

  span {
    color: #aaa;
    font-size: 12px;
  }

  &[disabled] {
    opacity: 0.6;
    pointer-events: none;
  }

  p {
    margin: 0;
  }
`;

export const PaymentSelect = styled.select`
  width: 100%;
  padding: 10px;
  margin: 0 0 1rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 14px;
  outline: none;
`;

export const PaymentText = styled.p`
  font-size: 13px;
  margin: 0;
`;

export const ChangeBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background: #fff;
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #ddd;
  margin-bottom: 10px;
  width: 100%;

  input {
    flex: 1;
    border: none;
    outline: none;
    font-size: 14px;
    background: transparent;  
  }
`;

export const ObservationToggle = styled.label`
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: bold;
  font-size: 14px;
  margin-top: 1rem;
  width: 100%;
  justify-content: space-between;

  input[type='checkbox'] {
    accent-color: ${({ theme }) => theme.colors.primary};
    width: 18px;
    height: 18px;
    cursor: pointer;
  }

  p {
    font-size: 1rem;
  }
`;

export const ObservationTextarea = styled.textarea`
  width: 100%;
  min-height: 90px;
  border-radius: 6px;
  border: 1px solid #ccc;
  padding: 10px;
  font-size: 14px;
  margin: 0.5rem 0;

  &::placeholder {
    color: #aaa;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  background: #00a88c;
  color: white;
  padding: 12px;
  font-size: 15px;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  margin-top: 1.5rem;
  cursor: pointer;

  &:hover {
    background: #008b75;
  }
`;
