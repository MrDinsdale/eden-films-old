import React from 'react';
import { createGlobalStyle } from 'styled-components';

import { Header } from './Header';
import { Helmet } from './Helmet';
import { colors } from '../constants/.';

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
  background: ${colors.greyDark};
  margin: 0;
  font-family: "Open Sans Condensed", sans-serif;
  font-weight: 300;
  color: ${colors.cream};
  overflow-x: hidden;
}
`;

export const Layout = ({ children }) => (
  <div>
    <GlobalStyle />
    <Header />
    <Helmet />
    {children}
  </div>
);
