import { AppProps } from 'next/app';
import { Router } from 'next/router';
import Head from 'next/head';
import { ApolloProvider } from '@apollo/client';
import NProgress from 'nprogress';

import '../styles/globals.css';
import '../styles/nprogress.css';
import { useApollo } from '@/lib/apolloClient';
import Page from '@/components/layout/Page';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps);

  return (
    <Page>
      <Head>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
      </ApolloProvider>
    </Page>
  );
}

export default MyApp;
