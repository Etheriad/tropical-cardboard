import '../styles/globals.css';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
// eslint-disable-next-line import/no-unresolved, node/no-missing-import
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Tropical Cardboard</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: 'light',
          fontFamily: 'Gill Sans',
          primaryColor: 'grape',
          components: {
            Button: {
              defaultProps: {
                variant: 'outline'
              }
            }
          }
        }}
      >
        <NotificationsProvider>
          <Component {...pageProps} />
          <Analytics />
        </NotificationsProvider>
      </MantineProvider>
    </>
  );
}
