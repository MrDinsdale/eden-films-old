import React from 'react';
import { Flex, Box } from 'rebass';

import { FilmTile } from '../molecules/.';

export const FilmList = ({ films }) => (
  <Flex flexWrap="wrap" mx={-4}>
    {films.map(film => (
      <Box px={4} py={3} key={film.id} width={[1, 1, 1 / 2]}>
        <FilmTile
          title={film.title}
          credits={film.credits}
          tileImage={film.tileImage}
        />
      </Box>
    ))}
  </Flex>
);
