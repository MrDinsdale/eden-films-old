import styled from 'styled-components';
import { Text } from 'rebass';

export const CreditName = styled(Text)`
  color: ${({ theme }) => theme.colors.cream};
  display: inline;
  font-weight: 300;
  text-transform: uppercase;
`;
