import React from 'react';
import { createGlobalStyle } from 'styled-components';

import { Header } from '../molecules';
import { Helmet } from '../Helmet';

const GlobalStyle = createGlobalStyle`
*,
*::after,
*::before {
  -webkit-box-sizing: inherit;
  box-sizing: inherit;
}

body {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  background: ${({ theme }) => theme.colors.black};
  margin: 0;
  font-family: "Open Sans Condensed", sans-serif;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.cream};
  overflow-x: hidden;
}
`;

export const Layout = ({ children }) => {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Helmet />
      {children}
    </div>
  );
};
