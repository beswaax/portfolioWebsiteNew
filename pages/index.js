import React from "react";
import { makeStyles } from "@material-ui/core";
import Head from "next/head";
import Header1 from "../src/components/headers/Header1";
import Features from "../src/components/features/Features3";
import Content from "../src/components/content/Content1";
import HowItWorks from "../src/components/how-it-works/HowItWorks4";
import HowItWorks2 from "../src/components/how-it-works/HowItWorks2";
import ScheduleCall from "../src/components/call-to-action/ScheduleCall";

const useStyles = makeStyles((theme) => ({
  bodyMargin: {
    backgroundColor: theme.palette.backgroundPage,
  },
}));

const LandingPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.bodyMargin}>
      <Head>
        <title key="title">
          #1 Web Design & Development, SEO & E-Commerce Company | RangoDev
        </title>
        <meta
          name="description"
          key="description"
          content="RangoDev is a web agency that specializes in website design, web development, SEO and eCommerce development. We create amazing websites for amazing businesses and then rank them on Google."
        />
        <meta
          name="keywords"
          content="internet design, best website builders for small business, web design agency, web developer company, website builders near me, cheap web design companies"
        />
        <meta
          property="og:title"
          content="#1 Web Design & Development, SEO & ECommerce Company | RangoDev"
          key="og:title"
        />
        <meta property="og:url" key="og:url" content="rangojango.com/" />

        <meta
          property="og:description"
          key="og:description"
          content="RangoDev is a web agency that specializes in website design, web development, SEO and eCommerce development. We create amazing websites for amazing businesses and then rank them on Google."
        />
        <meta property="og:locale" key="og:locale" content="en_US" />
        <meta property="og:type" key="og:type" content="website" />

        <link rel="canonical" key="canonical" href="/" />
      </Head>
      <Header1 />
      <Features />
      <Content />
      {/* <CallToAction /> */}
      <HowItWorks />
      <HowItWorks2 />
      <ScheduleCall />{" "}
    </div>
  );
};

export default LandingPage;
