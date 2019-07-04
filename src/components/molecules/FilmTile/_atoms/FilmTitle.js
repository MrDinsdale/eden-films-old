import styled from 'styled-components';
import { Heading } from 'rebass';

export const FilmTitle = styled(Heading)`
  color: ${({ theme }) => theme.colors.cream};
  font-family: ${({ theme }) => theme.fonts.heading};
  text-transform: uppercase;
`;
