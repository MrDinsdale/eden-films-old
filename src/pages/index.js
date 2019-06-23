import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Flex } from 'rebass';

import { Layout } from '../components/Layout';
import { FilmList } from '../sections/film-list';
import { Container } from '../components/Container';

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query WelcomeQuery {
        contentfulWelcome {
          title
          welcomeTitle
          welcomeBody {
            welcomeBody
          }
        }
      }
    `}
    render={data => {
      const {
        title,
        welcomeBody: { welcomeBody },
      } = data.contentfulWelcome;
      return (
        <Layout>
          <Container px="3" pb="4">
            <Flex flexDirection="column">
              <h1>{title}</h1>
              <p>{welcomeBody}</p>
            </Flex>
          </Container>
          <FilmList />
        </Layout>
      );
    }}
  />
);

export default IndexPage;
