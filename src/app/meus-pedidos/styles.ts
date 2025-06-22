import styled from 'styled-components';

export const Container = styled.div`
  padding: 1rem;
`;

export const OrderCard = styled.div`
  background: #fff;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  position: relative;
`;

export const OrderInfo = styled.div`
  margin-bottom: 0.5rem;

  strong {
    font-weight: 700;
    font-size: .9rem;
    margin-top: .5rem;
    display: flex;
    gap: 5px;
    align-items: center;
    color: ${({ theme }) => theme.colors.green_highlight}
  }

  span {
    display: block;
    font-size: 0.9rem;
    color: #888;
  }

  p {
    margin: 0.3rem 0;
    font-size: 0.95rem;
  }
`;

export const StatusTag = styled.div<{ status: string }>`
  color: ${({ status }) =>
    status === 'pendent' ? '#f1c40f' :
    status === 'accepted' ? '#3498db' :
    status === 'dispatched' ? '#2ecc71' :
    status === 'delivered' ? '#9b59b6' :
    '#e74c3c'};
  font-weight: 700;
  border-radius: 12px;
  display: inline-block;
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

export const ActionButton = styled.button<{ color: 'orange' | 'green' | 'blue' }>`
  background-color: ${({ color, theme }) => (color === 'orange' ? theme.colors.primary : color === 'green'? theme.colors.conceptual_green : '#3498db')};
  color: white;
  padding: 8px 12px;
  border: none;
  border-radius: 0 6px;
  font-weight: 500;
  font-size: 0.85rem;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  gap: 5px;

  >img {
    width: 1rem;
  }
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  button {
    background: none;
    border: none;
    font-size: 1.2rem;
    cursor: pointer;
    color: #333;
  }

  span {
    font-weight: bold;
    font-size: 1rem;
  }

  button:disabled {
    color: #ccc;
    cursor: not-allowed;
  }
`;