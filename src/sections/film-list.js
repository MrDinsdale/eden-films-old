import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Flex, Box } from 'rebass';

import { FilmTile } from '../components/FilmTile';

export const FilmList = () => (
  <Flex>
    <StaticQuery
      query={graphql`
        query FilmListQuery {
          contentfulFilmList {
            films {
              id
              title
              credits {
                id
                role
                names {
                  id
                  name
                }
              }
              tileImage {
                id
                sizes {
                  src
                }
              }
            }
          }
        }
      `}
      render={data => {
        const { films = [] } = data.contentfulFilmList;

        return films.map(film => (
          <Box width={1 / 2}>
            <FilmTile
              key={film.id}
              title={film.title}
              credits={film.credits}
              tileImage={film.tileImage}
            />
          </Box>
        ));
      }}
    />
  </Flex>
);
