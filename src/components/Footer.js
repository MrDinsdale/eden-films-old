import React from 'react';
import styled from 'styled-components';
import { Flex } from 'rebass';

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.greyDark};
  align-items: center;
  padding: 1em;
`;

export const Footer = () => (
  <FooterContainer>
    <Flex justifyContent="center" alignItems="center" />
  </FooterContainer>
);
