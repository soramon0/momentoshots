import { AppProps } from 'next/app';
import { Router } from 'next/router';
import Head from 'next/head';
import NProgress from 'nprogress';

import '../styles/globals.css';
import '../styles/nprogress.css';
import Page from '@/components/layout/Page';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Page>
        <Component {...pageProps} />
      </Page>
    </>
  );
}

export default MyApp;
