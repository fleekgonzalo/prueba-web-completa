import "../styles/globals.css";

import "locomotive-scroll/dist/locomotive-scroll.css";

import { LazyMotion, domAnimation } from "framer-motion";
import * as React from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";
const NEXT_PUBLIC_GA_ID = "G-76S9X08L08"


function MyApp({ Component, pageProps }: AppProps) {
    

  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          href="/rounded-avatar.png"
          type="image/x-icon"
        />

        <title>{`RAULDDC.ETH`}</title>

        <meta name="title" content="RAULDDC.ETH SERVICES" />
        <meta name="description" content="Raúl de Diego Cancio" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="RAULDDC.ETH SERVICES" />
        <meta
          property="og:description"
          content="Raúl de Diego Cancio"
        />
        <meta property="og:image" content="/avatar.jpg" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="RAULDDC.ETH SERVICES" />
        <meta
          property="twitter:description"
          content="Raúl de Diego Cancio"
        />
        <meta property="twitter:image" content="/avatar.jpg" />
      </Head>
      <LazyMotion features={domAnimation}>
        <Component {...pageProps} />
      </LazyMotion>
      <Script
        strategy="lazyOnload"
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${NEXT_PUBLIC_GA_ID}`}
      ></Script>
      <Script id="google-analytics" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${NEXT_PUBLIC_GA_ID}');
        `}
      </Script>
        
      
      
    </>
  );}


export default MyApp;
