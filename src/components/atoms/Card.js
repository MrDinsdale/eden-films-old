import styled from 'styled-components';
import { Box } from 'rebass';

export const Card = styled(Box)`
  box-shadow: ${({ theme }) => theme.card.primary.boxShadow};
`;
