import React from 'react';
import Helmet from 'react-helmet';
import styled, { ThemeProvider } from 'styled-components';
import 'bulma/css/bulma.css';

import GlobalStyle, { theme } from '../utils/theme';
import config from '../utils/config';
import CookiesPopUp from './CookiesPopUp';
import Header from './global/Header';
import Footer from './global/Footer';

const Container = styled.div`
  min-height: 70vh;
`;

const IndexLayout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <Helmet>
        <title>{config.siteName}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta description={config.description} />
      </Helmet>
      <GlobalStyle />
      <Header />
      <Container>{children}</Container>
      <Footer />
      <CookiesPopUp />
    </>
  </ThemeProvider>
);

export default IndexLayout;
