import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useRouter } from 'next/router';
import Navigation from './Navigation/Navigation';
import theme from '../styles/Theme';
import GlobalStyle from '../styles/GlobalStyles';
import Footer from './Footer/Footer';

const LayOut = ({ children }) => {
  const router = useRouter();
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {router.pathname !== '/404' && <Navigation />}
      {children}
      {router.pathname !== '/404' && <Footer />}
    </ThemeProvider>
  );
};

export default LayOut;
