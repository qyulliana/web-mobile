import styled from 'styled-components';

export const List = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`

export const ButtonBlue = styled.button`
    color: #00A8E0;
    border: 1px solid #00A8E0;
    background-color: #fff;
    padding: 10px;
    border-radius: 6px;
    cursor: pointer;
    margin-left: -7px;
  
    ${props => `
      
      ${props.isSelect && `
        background: #00A8E0;
        color:#fff;
      `}
    `}
`;