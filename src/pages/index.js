import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { ThemeProvider } from 'styled-components';
import { Flex } from 'rebass';

import { Layout } from '../components/Layout';
import { FilmList } from '../components/FilmList';
import { Container } from '../components/Container';
import theme from '../constants/theme';
import GlobalStyles from '../constants/GlobalStyles';

const IndexPage = () => (
  <ThemeProvider theme={theme}>
    <StaticQuery
      query={graphql`
        query WelcomeQuery {
          contentfulWelcome {
            title
            welcomeTitle
            welcomeBody {
              welcomeBody
            }
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
          title,
          welcomeBody: { welcomeBody },
          filmList,
        } = data.contentfulWelcome;
        return (
          <Layout>
            <Container px="3" pb="4">
              <Flex flexDirection="column">
                <h1>{title}</h1>
                <p>{welcomeBody}</p>
              </Flex>
            </Container>
            {filmList && <FilmList films={filmList} />}
          </Layout>
        );
      }}
    />
  </ThemeProvider>
);

export default IndexPage;
