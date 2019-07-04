import React from 'react';
import styled from 'styled-components';
import { Image } from 'rebass';

import { Credits } from '../Credits/.';
import { FilmTitle } from './_atoms/FilmTitle';

const FilmTileCredits = styled(Credits)`
  max-height: 0;
  overflow: hidden;
  transition: 0.6s ease;
`;

const TileImage = styled(Image)`
  display: block;
  height: 100%;
  left: 0;
  object-fit: cover;
  position: absolute;
  text-transform: uppercase;
  top: 0;
  transition: 0.6s ease;
  width: 100%;
`;

const FilmTileInner = styled.div`
  align-items: center;
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  justify-content: center;
  padding: 1em;
  z-index: 1;

  &::before,
  &::after {
    content: '';
    display: block;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }

  &::before {
    background-image: radial-gradient(
      rgba(0, 0, 0, 0.4) 40%,
      rgba(0, 0, 0, 0.1) 100%
    );
    background-size: 100%;
    background-position: center;
    transition: 0.6s ease;
    z-index: -1;
  }

  &::after {
    border-bottom: 0 solid ${({ theme }) => theme.colors.black};
    border-top: 0 solid ${({ theme }) => theme.colors.black};
    transition: 0.4s ease 0.1s;
  }
`;

const FilmTileCard = styled.button`
  align-items: stretch;
  background-color: ${({ theme }) => theme.colors.greyDark};
  box-shadow: none !important;
  border: 0;
  color: ${({ theme }) => theme.colors.cream};
  cursor: pointer;
  display: flex;
  outline: 0;
  overflow: hidden;
  position: relative;
  min-height: 450px;
  width: 100%;

  &:hover,
  &:focus {
    background: ${({ theme }) => theme.colors.black};
  }

  &:hover ${TileImage}, &:focus ${TileImage} {
    filter: saturate(0) brightness(80%) blur(4px);
  }

  &:hover ${FilmTileCredits}, &:focus ${FilmTileCredits} {
    max-height: 10em;
  }

  &:hover ${FilmTileInner}::after, &:focus ${FilmTileInner}::after {
    border-bottom-width: 80px;
    border-top-width: 80px;
  }
`;

export const FilmTile = ({
  title,
  credits,
  tileImage: {
    sizes: { src },
  },
}) => {
  return (
    <FilmTileCard onClick={() => console.log(`Clicked ${title}`)}>
      <TileImage src={src} />
      <FilmTileInner>
        <FilmTitle as="h2" fontSize={[4, 5]} letterSpacing={[4, 5]}>
          {title}
        </FilmTitle>
        <FilmTileCredits credits={credits} align="right" />
      </FilmTileInner>
    </FilmTileCard>
  );
};
