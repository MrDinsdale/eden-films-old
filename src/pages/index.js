import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { ThemeProvider } from 'styled-components';

import { FilmList, Layout } from '../components/organisms/.';
import { Container } from '../components/atoms/.';
import theme from '../constants/theme';

const IndexPage = () => (
  <ThemeProvider theme={theme}>
    <StaticQuery
      query={graphql`
        query WelcomeQuery {
          contentfulWelcome {
            title
            filmList {
              films {
                id
                title
                tileImage {
                  sizes {
                    src
                  }
                }
                credits {
                  id
                  role
                  names {
                    id
                    name
                  }
                }
              }
            }
          }
        }
      `}
      render={data => {
        const {
          filmList: { films },
        } = data.contentfulWelcome;
        return (
          <Layout>
            <Container>{films && <FilmList films={films} />}</Container>
          </Layout>
        );
      }}
    />
  </ThemeProvider>
);

export default IndexPage;
