import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { ThemeProvider } from 'styled-components';

import { Markdown } from '../components/atoms/.';
import { Layout } from '../components/organisms/.';
import theme from '../constants/theme';

const IndexPage = () => (
  <ThemeProvider theme={theme}>
    <StaticQuery
      query={graphql`
        query AboutQuery {
          contentfulAboutPage {
            title
            background {
              sizes {
                src
              }
            }
            bodyText {
              bodyText
            }
          }
        }
      `}
      render={data => {
        const {
          title,
          background: {
            sizes: { src },
          },
          bodyText: { bodyText },
        } = data.contentfulAboutPage;
        return (
          <Layout>
            <h1>{title}</h1>
            <p>
              <Markdown text={bodyText} />
            </p>
          </Layout>
        );
      }}
    />
  </ThemeProvider>
);

export default IndexPage;
