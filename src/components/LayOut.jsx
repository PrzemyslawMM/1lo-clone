import React from 'react';
import { ThemeProvider } from 'styled-components';
import Navigation from './Navigation/Navigation';
import theme from '../styles/Theme';
import GlobalStyle from '../styles/GlobalStyles';
import Footer from './Footer/Footer';

const LayOut = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Navigation />
    {children}
    <Footer />
  </ThemeProvider>
);

export default LayOut;
