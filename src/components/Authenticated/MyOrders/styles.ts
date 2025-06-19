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

export const Title = styled.h3`
  text-align: center;
  margin-bottom: 1rem;
  font-size: 1rem;
  font-weight: 500;
`;

export const RatingRow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin: 0.5rem 0;
  gap: 5px;
  flex-direction: column;
  span {
    font-weight: 500;
    font-size: 0.95rem;
  }
`;

export const Stars = styled.div`
  display: flex;
  gap: 4px;
`;

export const CommentBox = styled.div`
  border: 1px dashed orange;
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  margin-top: 1rem;
  cursor: pointer;
  p {
    font-weight: bold;
    margin-bottom: 0.3rem;
  }
  span {
    color: #555;
    font-size: 0.9rem;
  }
`;

export const BottomRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
  gap: 1rem;
`;

export const SecondModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  width: 90%;
  max-width: 350px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.3);
  z-index: 1000;
  h4 {
    margin-bottom: 0.8rem;
    font-weight: 500;
    font-size: 1rem;
  }
  textarea {
    width: 100%;
    height: 80px;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 6px;
    resize: none;
    margin-bottom: 1rem;
  }
`;

