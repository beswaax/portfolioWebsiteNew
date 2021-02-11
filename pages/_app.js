import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import Navbar from "../src/components/horizontal-navs/HorizontalNav2";
import Footer from "../src/components/footers/Footer4";
import theme from "../src/theme";
import { useRouter } from "next/router";
import { PageTransition } from "next-page-transitions";
import * as gtag from "../lib/gtag";

const App = (props) => {
  const { Component, pageProps } = props;
  const router = useRouter();

  const findPathname = () => {
    if (router.pathname === "/") {
      return 0;
    } else if (router.pathname === "/about") {
      return 1;
    } else if (router.pathname === "/services") {
      return 2;
    } else if (router.pathname === "/contact") {
      return 3;
    }
  };

  const [tabValue, setTabValue] = useState(findPathname());

  React.useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <React.Fragment>
      <Head>
        <title>RangoJango | Web Design & Development</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <Navbar tabValue={tabValue} setTabValue={setTabValue} />
        <PageTransition timeout={300} classNames="page-transition">
          <Component
            {...pageProps}
            tabValue={tabValue}
            setTabValue={setTabValue}
          />
        </PageTransition>
        <Footer tabValue={tabValue} setTabValue={setTabValue} />
      </ThemeProvider>
      <style jsx global>{`
        .page-transition-enter {
          opacity: 0;
        }
        .page-transition-enter-active {
          opacity: 1;
          transition: opacity 300ms;
        }
        .page-transition-exit {
          opacity: 1;
        }
        .page-transition-exit-active {
          opacity: 0;
          transition: opacity 300ms;
        }
      `}</style>
    </React.Fragment>
  );
};

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default App;
