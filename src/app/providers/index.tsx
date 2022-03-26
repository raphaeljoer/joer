//material-ui
import { CssBaseline, ThemeProvider } from '@mui/material';
//seo
import SEO from '../../../next-seo.config';
//config
import { snackProps } from 'app/config/snackbar';
import { nProgress } from 'app/config/nprogress';
//resources
import { theme } from 'app/theme';
import { store } from 'shared/store';
import { DefaultSeo } from 'next-seo';
import { Provider } from 'react-redux';
import { SnackbarProvider } from 'notistack';
import { QueryClientProvider } from 'react-query';
import NextNprogress from 'nextjs-progressbar';
import { queryClient } from 'app/services/query-client';
import { GoogleAnalytics } from 'app/scripts/tagmanager';
import { globalEnv } from 'app/config/env';

type Props = {
  children: JSX.Element | JSX.Element[];
};

export function Providers({ children }: Props) {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <GoogleAnalytics id={globalEnv.googleAnalyticsId} />
        <SnackbarProvider {...snackProps}>
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
        </SnackbarProvider>
        <DefaultSeo {...SEO} />
        <CssBaseline />
        <NextNprogress {...nProgress} />
      </Provider>
    </ThemeProvider>
  );
}
