import React from "react";
import { makeStyles, useMediaQuery, useTheme } from "@material-ui/core";
import Head from "next/head";
import Header from "../src/components/headers/Header7";
import Features from "../src/components/features/Features3";
import Content from "../src/components/content/Content1";
import CallToAction from "../src/components/call-to-action/CallToAction2";
import HowItWorks from "../src/components/how-it-works/HowItWorks4";
import Contact from "../src/components/contacts/Contact1";

const useStyles = makeStyles((theme) => ({
  bodyMargin: {
    backgroundColor: "#F9FAFB",
  },
}));

const LandingPage = ({ tabValue, setTabValue }) => {
  const classes = useStyles();
  const theme = useTheme();

  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div className={classes.bodyMargin}>
      <Head>
        <title key="title">Web Design & Development Company - RangoJango</title>
        <meta
          name="description"
          key="description"
          content="One of the best web development & web design companies in Europe. We are a team of experienced developers and designers from Germany. We feel that we can provide one of the best experiences when it comes to web development, UI-UX design and SEO."
        />
        <meta
          name="keywords"
          content="seo europe, best seo in germany,best seo europe, web design germany, web designer germany, web development germany, web development europe, web design europe, web developer germany, web developer europe, best website design europe, best website design europe"
        />
        <meta
          property="og:title"
          content="RangoJango | Web Design & Development Europe"
          key="og:title"
        />
        <meta property="og:url" key="og:url" content="rangojango.com/" />
        <link rel="canonical" key="canonical" href="rangojango.com/" />
      </Head>
      <Header />
      <Features />
      <Content />
      <CallToAction />
      <HowItWorks />
      <Contact />
    </div>
  );
};

export default LandingPage;
