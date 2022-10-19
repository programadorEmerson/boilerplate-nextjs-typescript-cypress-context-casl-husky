import { CacheProvider, EmotionCache } from '@emotion/react';
import * as React from 'react';

import { AppProps } from 'next/app';
import Head from 'next/head';

import { AbilityProvider } from '@context/ability';
import { UserProvider } from '@context/user';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

import theme from '@theme';

import createEmotionCache from '@createEmotionCache';

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <UserProvider>
        <ThemeProvider theme={theme}>
          <AbilityProvider>
            <CssBaseline />
            <Component {...pageProps} />
          </AbilityProvider>
        </ThemeProvider>
      </UserProvider>
    </CacheProvider>
  );
}
