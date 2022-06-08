import Head from 'next/head';
import Error from 'next/error';
import LayOut from '../components/LayOut';

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <link rel="shortcut icon" href="https://www.1lo.pl/img/favicon.ico" />
    </Head>
    <LayOut>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </LayOut>
  </>
);

export default MyApp;
