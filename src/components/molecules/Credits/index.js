import React from 'react';
import styled from 'styled-components';

import { List, ListItem } from '../../atoms/.';
import { CreditName } from './_atoms/CreditName';

const CreditItem = styled(ListItem)`
  color: ${({ theme }) => theme.colors.greyLight};
  font-family: 'Open Sans Condensed', sans-serif;
  font-size: ${({ theme }) => theme.fontSizes[0]};
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
      <CreditName fontSize={1}>{item.name}</CreditName>
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
        <CreditItem key={credit.id}>
          <span>{credit.role} </span>
          <NameList names={credit.names} />
        </CreditItem>
      ))}
    </List>
  );
};
