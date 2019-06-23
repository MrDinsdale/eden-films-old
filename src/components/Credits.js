import React from 'react';
import styled from 'styled-components';
import { Text } from 'rebass';
import { colors } from '../constants/.';

const List = styled.ul`
  margin: 0;
  padding: 0;
  text-align: ${props => (props.align ? props.align : 'left')};
`;

const ListItem = styled.li`
  color: ${colors.greyLight};
  list-style: none;
`;

const Name = styled.span`
  color: ${colors.cream};
  font-family: 'Open Sans Condensed', sans-serif;
  font-size: 20px;
  font-weight: 300;
  letter-spacing: -0.8px;
  text-transform: uppercase;
`;

const NameJoin = ({ position, length }) => {
  if (position === 1) {
    return null;
  }
  if (position === length) {
    return ' & ';
  }

  return ', ';
};

const NameList = ({ names = [] }) => {
  if (!names) {
    return null;
  }

  const length = names.length;
  return names.map((item, index) => (
    <span key={item.id}>
      <NameJoin position={index + 1} length={length} />
      <Name>{item.name}</Name>
    </span>
  ));
};

export const Credits = ({ credits, align, className }) => {
  if (!credits) {
    return null;
  }

  return (
    <List className={className} align={align}>
      {credits.map(credit => (
        <ListItem key={credit.id}>
          <span>{credit.role} </span>
          <NameList names={credit.names} />
        </ListItem>
      ))}
    </List>
  );
};
