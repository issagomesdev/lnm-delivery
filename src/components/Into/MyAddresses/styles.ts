import styled from 'styled-components';

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
  >input, >div {
    width: 100%;
    padding: 8px;
    font-size: 14px;
    border-radius: 4px;
    border: 1px solid #ccc;
  }

  >div {
    padding: 0;
  }

  input.red {
    border: 2px solid red;
  }
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
