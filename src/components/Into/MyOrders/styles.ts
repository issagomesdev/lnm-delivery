import styled from 'styled-components';

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

