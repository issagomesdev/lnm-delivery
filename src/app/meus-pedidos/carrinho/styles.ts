
import styled from "styled-components";
interface Props {
  active?: boolean;
  withBorder?: boolean;
}

export const Wrapper = styled.div`
  margin-bottom: 6rem;

  @media (max-width: 980px) {
    padding-top: 4rem;
  }
`;

export const ItemsCard = styled.div`
  overflow: hidden scroll;
  padding: 0 1rem;
  height: 75vh;
`;

export const ItemCard = styled.div`
  border-bottom: 1px solid #eee;
  padding: 1rem 0;
  position: relative;
`;

export const CategoryName = styled.p`
  font-size: 13px;
  color: #999;
  margin-bottom: 4px;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 500;
`;

export const ItemName = styled.h4`
  margin: 0;
  font-size: 16px;
  color: #000;
`;

export const DetailsLink = styled.a`
  font-size: 13px;
  color: #007bff;
  cursor: pointer;
  margin: 4px 0;
  text-decoration: underline;
  font-weight: 500;
  display: inline-block;
`;

export const Price = styled.p`
  font-size: 14px;
  color: #000;
  margin: 4px 0;
`;

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`;

export const Delete = styled.button`
    background: none;
    border: none;
    color: red;
    cursor: pointer;
    position: absolute;
    top: 10px;
    right: 10px;
`;

export const QuantityControls = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'withBorder',
}) <Props>`
  display: flex;
  align-items: center;
  gap: 8px;

  span {
    min-width: 20px;
    text-align: center;
  }

   ${({ withBorder }) =>
    withBorder &&
    `
      border: 1px solid rgb(0 0 0 / 30%);
      padding: 10px;
      border-radius: 10px;
    `}
`;

export const QtyBtn = styled.button`
  background-color:${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: 4px;
  width: 28px;
  height: 28px;
  cursor: pointer;
`;

export const TotalFooter = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background: #ddd;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 58px;
    z-index: 100;
`;

export const LeftButton = styled.button`
  width: 50%;
  background: #092b45;
  color: white;
  border: none;
  height: 100%;
  font-weight: bold;
  cursor: pointer;
`;

export const RightButton = styled.button`
  width: 50%;
  background: #009688;
  color: white;
  border: none;
  height: 100%;
  font-weight: bold;
  cursor: pointer;
`;

export const SubTotal = styled.div`
    position: absolute;
    width: 100%;
    top: -50px;
    background-color: #cccccc;
    padding: 1rem;
    display: flex;
    justify-content: flex-end;
    gap: 20px;

    strong {
        font-size: 15px;
        font-weight: 500;
        color: #111;
    }
`;
