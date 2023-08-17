import * as React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { CacheProvider } from "@emotion/react";
import NextNProgress from "nextjs-progressbar";
import AppState from "@/context/AppState";
import MuiThemeProvider from "@/MUI/MuiThemeProvider";
import createEmotionCache from "@/createEmotionCache";
import "@/styles/globals.css";
import { lightTheme } from "@/MUI/theme";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <AppState>
      <CacheProvider value={emotionCache}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
          <meta name="color-scheme" content="dark light" />
        </Head>

        <MuiThemeProvider>
          <NextNProgress
            height={8}
            color={lightTheme.palette.primary.main}
            showOnShallow={true}
            startPosition={0.3}
          />
          {Component.PageLayout ? (
            <Component.PageLayout>
              <Component {...pageProps} />
            </Component.PageLayout>
          ) : (
            <Component {...pageProps} />
          )}
        </MuiThemeProvider>
      </CacheProvider>
    </AppState>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
