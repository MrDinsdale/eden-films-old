import React from 'react';
import styled from 'styled-components';
import { Flex } from 'rebass';

import { Logo } from './_atoms/Logo';
import { Container } from '../../atoms/.';

const HeaderContainer = styled.header`
  height: 80px;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 100;
`;

const NavContainer = styled.nav`
  color: ${({ theme }) => theme.colors.cream};
  text-transform: uppercase;
`;

export const Header = () => (
  <HeaderContainer>
    <Container p="3">
      <Flex flexWrap="wrap" justifyContent="space-between" alignItems="center">
        <Logo />
        <NavContainer>Projects / About / Codec</NavContainer>
      </Flex>
    </Container>
  </HeaderContainer>
);
