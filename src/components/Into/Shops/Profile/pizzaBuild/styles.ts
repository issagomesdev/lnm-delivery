import styled from 'styled-components';

interface Props {
    selected: boolean;
}

export const Options = styled.div`
    padding: 1em;
`;

export const Option = styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== 'selected',
}) <Props>`
    padding: 10px;
    width: 100%;
    text-align: start;
    font-size: 1.2rem;
    font-weight: 500;
    color: ${({ selected, theme }) => selected ? theme.colors.primary : 'gray'};
    cursor: pointer;
    border-bottom: 1px solid ${({ theme }) => theme.colors.separators};
`;
