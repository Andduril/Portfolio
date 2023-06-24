import NavigationProvider from "@/providers/NavigationProvider";
import theme from "@/theme";
import createEmotionCache from "@/utils/createEmotionCache";
import { CacheProvider, EmotionCache, ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { AppProps } from "next/app";
import Head from "next/head";
import './index.css';

const clientSideEmotionCache = createEmotionCache();

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const MyApp: React.FC<MyAppProps> = ({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}) => {
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavigationProvider>
          <Component {...pageProps} />
        </NavigationProvider>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MyApp;
