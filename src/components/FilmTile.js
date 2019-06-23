import React from 'react';
import styled from 'styled-components';
import { Heading, Image } from 'rebass';

import { Credits } from './Credits';
import { colors } from '../constants/colors';

const FilmTileCredits = styled(Credits)`
  max-height: 0;
  overflow: hidden;
  transition: 0.8s ease 0.2s;
`;

const TileImage = styled(Image)`
  display: block;
  height: 100%;
  left: 0;
  object-fit: cover;
  position: absolute;
  text-transform: uppercase;
  top: 0;
  transition: 1s ease;
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

  &::before {
    background-image: radial-gradient(
      rgba(0, 0, 0, 0.8) 40%,
      rgba(0, 0, 0, 0.4) 100%
    );
    background-size: 100%;
    background-position: center;
    content: '';
    display: block;
    height: 100%;
    left: 0;
    opacity: 0.6;
    position: absolute;
    top: 0;
    transition: 1s ease;
    width: 100%;
    z-index: -1;
  }
`;

const FilmTitle = styled(Heading)`
  font-family: 'Six Caps', sans-serif;
  text-transform: uppercase;
`;

const FilmTileOuter = styled.button`
  align-items: stretch;
  background-color: ${colors.black};
  box-shadow: none !important;
  border: 0;
  color: ${colors.cream};
  cursor: pointer;
  display: flex;
  outline: 0;
  overflow: hidden;
  position: relative;
  min-height: 450px;
  width: 100%;

  &:hover ${TileImage}, &:focus ${TileImage} {
    filter: blur(16px);
  }

  &:hover ${FilmTileCredits}, &:focus ${FilmTileCredits} {
    max-height: 100%;
  }

  &:hover ${FilmTileInner}::before, &:focus ${FilmTileInner}::before {
    opacity: 1;
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
    <FilmTileOuter onClick={() => console.log(`Clicked ${title}`)}>
      <TileImage src={src} />
      <FilmTileInner>
        <FilmTitle fontSize={[7]} letterSpacing="2px">
          {title}
        </FilmTitle>
        <FilmTileCredits credits={credits} align="right" />
      </FilmTileInner>
    </FilmTileOuter>
  );
};
