import Head from 'next/head';

import { Header } from '../components/Header';
import theme from '../theme';
import { ThemeProvider } from '@mui/material/styles';

import type { AppProps } from 'next/app';
import '../styles/globals.scss';
import { CssBaseline } from '@mui/material';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
