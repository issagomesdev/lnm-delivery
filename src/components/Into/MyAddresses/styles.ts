import styled from 'styled-components';

export const Title = styled.h3`
  text-align: center;
  margin-bottom: 1rem;
  font-size: 1rem;
  font-weight: 500;
  background: ${({ theme }) => theme.colors.primary};
  color: #fff;
  padding: 1em;
  border-radius: 3px 3px 0 0;
`;

export const Form = styled.form`
  margin: auto;
  border-radius: 8px;
  padding: 2rem;
  overflow: hidden scroll;
  height: 85%;
`;

export const Field = styled.div`
  margin-bottom: 1rem;

  label {
    display: block;
    font-size: 14px;
    margin-bottom: 4px;
    font-weight: 500;
    text-align: start;
  }

  select,
  input {
    width: 100%;
    padding: 8px;
    font-size: 14px;
    border-radius: 4px;
    border: 1px solid #ccc;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  background: transparent;
  border: 0;
`;

export const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #00a896;
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
`;
