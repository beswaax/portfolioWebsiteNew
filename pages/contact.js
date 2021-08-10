import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import Head from "next/head";
import Header from "../src/components/headers/Header1";
import Contact from "../src/components/contacts/Contact1";
import Contact2 from "../src/components/contacts/Contact2";

const useStyles = makeStyles((theme) => ({
  bodyMargin: {
    backgroundColor: theme.palette.backgroundPage,
    paddingBottom: "5rem",
  },
}));

const LandingPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.bodyMargin}>
      <Head>
        <title key="title">
          Contact Us | Web Design, SEO, Ecommerce | RangoDev
        </title>
        <meta
          name="description"
          key="description"
          content="Contact us below to ask a question, get a quote or start a project. We will respond within 24 hours."
        />
        <meta
          name="keywords"
          content="web development company florida, website design company florida, best site design firm in florida, ecommerce design in florida, seo in florida"
        />
        <meta
          property="og:title"
          content="Contact Us | Web Design, SEO, Ecommerce | RangoDev"
          key="og:title"
        />
        <meta property="og:url" key="og:url" content="rangojango.com/contact" />

        <meta
          property="og:description"
          key="og:description"
          content="Contact us below to ask a question, get a quote or start a project. We will respond within 24 hours."
        />
        <meta property="og:locale" key="og:locale" content="en_US" />
        <meta property="og:type" key="og:type" content="website" />

        <link rel="canonical" key="canonical" href="/contact" />
      </Head>
      <Header />
      <div style={{ marginTop: "5rem" }}></div>
      <Contact />
      <Contact2 />
      <Grid container align="center" style={{ paddingBottom: "0rem" }}></Grid>
    </div>
  );
};

export default LandingPage;
