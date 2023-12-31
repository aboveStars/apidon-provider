import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { RecoilRoot } from "recoil";
import NextNProgress from "nextjs-progressbar";
import Layout from "@/Layout/Layout";
import { theme } from "@/Chakra/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Apidon - Providers</title>
        <meta name="description" content="Be a provider!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <RecoilRoot>
        <ChakraProvider theme={theme}>
          <Layout>
            <NextNProgress color="#1479EA" height={4} />
            <Component {...pageProps} />
          </Layout>
        </ChakraProvider>
      </RecoilRoot>
    </>
  );
}
