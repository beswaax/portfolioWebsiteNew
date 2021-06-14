import React from "react";
import { makeStyles, useMediaQuery, useTheme } from "@material-ui/core";
import Head from "next/head";
import Header1 from "../src/components/headers/Header1";
import Features from "../src/components/features/Features3";
import Content from "../src/components/content/Content1";
import CallToAction from "../src/components/call-to-action/CallToAction2";
import HowItWorks from "../src/components/how-it-works/HowItWorks4";
import ScheduleCall from "../src/components/call-to-action/ScheduleCall";

const useStyles = makeStyles((theme) => ({
  bodyMargin: {
    backgroundColor: theme.palette.backgroundPage,
  },
}));

const LandingPage = ({ tabValue, setTabValue }) => {
  const classes = useStyles();
  const theme = useTheme();

  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div className={classes.bodyMargin}>
      <Head>
        <title key="title">
          Web Design & Development Company - RangoJango Vancouver
        </title>
        <meta
          name="description"
          key="description"
          content="Affordable web design, web development and e-commerce in North America and Europe. We serve dentists, accountants, lawyers, construction companies and many other sectors. We've had clients from Vancouver, Toronto, New York, London, Dublin and many other cities."
        />
        <meta
          name="keywords"
          content="seo vancouver, best seo in vancouver, best seo canada, best vancouver web design, canada web design, ux design canada, vancouver seo, vancouver web design, toronto web design, best canada web design, web design london, best web design london, web designer vancouver, web designer london, web designer toronto, web development united kingdom,web design toronto, web design new york, detists vancouver buidl website, web design manchester, web dev north america, usa web design, web design seattle, web dev seattle, seo usa, seo canada, best seo london, web design, web design europe, web developer toronto, vancouver web developer, british columbia web design, british columbia build website, web dev british columbia, web developer canada, web developer north america, best website design europe, best website design toronto, best web design vancouver, best web design london, ecommerce build vancouver, ecommerce help toronto, ecommerce europe build, ecommerce north america build, accountant web design, dentist build website, build website lawyer, construction new website vancouver, vancouver accountant build website, dentist web design, accountant web design, lawyer web design, construction web design, build website accountants, build website lawyers, build website construction, plumber website build, web design plumber"
        />
        <meta
          property="og:title"
          content="RangoJango | Web Design & Development Vancouver"
          key="og:title"
        />
        <meta property="og:url" key="og:url" content="rangojango.com/" />

        <meta
          property="og:description"
          key="og:description"
          content="Affordable web design, web development and e-commerce in North America and Europe. We serve dentists, accountants, lawyers, construction companies and many other sectors. We've had clients from Vancouver, Toronto, New York, London, Dublin and many other cities."
        />
        <meta property="og:locale" key="og:locale" content="en_US" />
        <meta property="og:type" key="og:type" content="website" />

        <link rel="canonical" key="canonical" href="/" />
      </Head>
      <Header1 />
      <Features />
      <Content />
      <CallToAction />
      <HowItWorks />
      <ScheduleCall />{" "}
    </div>
  );
};

export default LandingPage;
