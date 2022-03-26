import { Providers } from 'app/providers';
import type { AppProps } from 'next/app';

export function App({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <Component {...pageProps} />
    </Providers>
  );
}
