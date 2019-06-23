import React from 'react';
import ReactHelmet from 'react-helmet';

export const Helmet = ({ theme = {} }) => (
  <ReactHelmet>
    <meta charSet="utf-8" />
    <title>Eden Films</title>
    <meta name="theme-color" content={theme.background} />
    <meta
      content="Eden Films - London based production company."
      name="description"
    />
    <meta
      content="eden films, tracker, making waves, film, production, redemption, winstone"
      name="keywords"
    />

    <link
      href="https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300,700|Six+Caps"
      rel="stylesheet"
    />
  </ReactHelmet>
);
