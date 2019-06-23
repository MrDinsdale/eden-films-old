import React from 'react';
import styled from 'styled-components';
import { Flex } from 'rebass';

const FooterContainer = styled.footer`
  padding: 1em;
  align-items: center;
`;

export const Footer = () => (
  <FooterContainer>
    <Flex justifyContent="center" alignItems="center" />
  </FooterContainer>
);
