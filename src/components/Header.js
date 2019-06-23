import React from 'react';
import styled from 'styled-components';
import { Flex } from 'rebass';

import { Logo } from './Logo';
import { Container } from './Container';

const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.colors.black};
  height: 80px;
`;

export const Header = () => (
  <HeaderContainer>
    <Container p="3">
      <Flex flexWrap="wrap" justifyContent="space-between" alignItems="center">
        <Logo />
      </Flex>
    </Container>
  </HeaderContainer>
);
