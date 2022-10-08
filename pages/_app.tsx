import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import theme from '../theme';
import { ThemeProvider } from '@mui/material/styles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
