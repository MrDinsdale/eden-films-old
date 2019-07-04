import styled from 'styled-components';
import { Button as BaseButton } from 'rebass';

export const Button = styled(BaseButton)`
  background: ${({ theme }) => theme.button.primary.background};
  color: ${({ theme }) => theme.button.primary.color};
`;
