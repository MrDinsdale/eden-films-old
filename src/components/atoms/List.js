import styled from 'styled-components';

export const List = styled.ul`
  margin: 0;
  padding: 0;
  text-align: ${props => (props.align ? props.align : 'left')};
`;
