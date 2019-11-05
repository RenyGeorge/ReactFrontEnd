import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  .card__info {    
    font-size: 20px;
    font-weight: 100;
    letter-spacing: 2px;
    border:solid 1px ;
    width:80%;
    margin: auto;
    text-align: center;
    background: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.textColor};   
  }`;