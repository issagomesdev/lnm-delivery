'use client'

import styled from 'styled-components'

export const Container = styled.div`
  padding: 1.5rem;
`;

export const StoreInfo = styled.div`
  margin: 1rem 0;
  font-size: 0.9rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;

  th {
    background-color: ${({ theme }) => theme.colors.conceptual_green};
    color: #fff;
    padding: 0.5rem;
    text-align: left;
    font-size: 0.85rem;
  }

  td {
    padding: 0.5rem;
    font-size: 0.85rem;
    vertical-align: top;
  }

  tbody tr:not(:last-child) {
    border-bottom: 1px solid #eee;
  }

  td:first-child {
    width: 50%;
  }
`;

export const Note = styled.p`
  color: red;
  font-weight: 500;
  margin-top: 1rem;
  border-bottom: 2px solid ${({ theme }) => theme.colors.separators};
  padding-bottom: .5rem;
`;

export const Info = styled.div`
  margin-top: 1.5rem;
  font-size: 0.9rem;

  p {
    margin: 0.25rem 0;
  }
`;
