import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  padding: 2rem;
`;

export const AddButton = styled.button`
  color: ${({ theme }) => theme.colors.blue};
  background: none;
  border: none;
  font-weight: bold;
  cursor: pointer;
  margin-bottom: 1.5rem;
  font-size: 16px;
  text-align: center;
  width: 100%;
`;

export const Card = styled.div`
  padding: 1rem 0;
  border-bottom: 1px solid #ddd;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  strong {
    font-size: 16px;
    display: block;
    margin-bottom: 4px;
  }

  p {
    margin: 0;
    font-size: 14px;
    line-height: 1.5;
  }
`;

export const Datas = styled.div`
  
`;

export const Actions = styled.div`
  display: flex;
  gap: 1rem;
`;

export const ActionButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 14px;
  display: flex;
  gap: 5px;

  &.edit {
    color: green;
  }

  &.delete {
    color: red;
  }
`;