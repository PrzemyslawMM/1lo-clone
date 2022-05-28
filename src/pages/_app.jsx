import LayOut from '../components/LayOut';

const MyApp = ({ Component, pageProps }) => (
  <LayOut>
    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    <Component {...pageProps} />
  </LayOut>
);

export default MyApp;
