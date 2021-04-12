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
          content="One of the best web development & web design companies in Europe and North America. We are a team of experienced developers and designers from Europe."
        />
        <meta
          name="keywords"
          content="seo vancouver, best seo in vancouver, best seo europe, best vancouver web design, canada web design, ux design canada, vancouver seo, vancouver web design, toronto web design, germany web design, best canada web design, web design london, best web design london, web designer vancouver, web designer london, web designer toronto, web development united kingdom, web design manchester, web dev north america, usa web design, web design seattle, web dev seattle, seo usa, seo canada, best seo london, deutschland web design, frankfurt web design, frankfurt web dev, frankfurt webseiten design, frankfurt seo, deutschland webseiten machen, deutschland web design, web development germany, web design europe, web developer toronto, germany web developer, vancouver web developer, web developer canada, web developer north america, best website design europe, best website design toronto, best web design vancouver, best web design london, ecommerce build vancouver, ecommerce help toronto, ecommerce europe build, ecommerce north america build"
        />
        <meta
          property="og:title"
          content="RangoJango | Web Design & Development"
          key="og:title"
        />
        <meta property="og:url" key="og:url" content="rangojango.com/" />
        <link rel="canonical" key="canonical" href="/" />
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
