import React from "react";
import { Grid, makeStyles, useMediaQuery, useTheme } from "@material-ui/core";
import Head from "next/head";
import Header from "../src/components/headers/PageHeader";
import Contact from "../src/components/contacts/Contact1";
import Contact2 from "../src/components/contacts/Contact2";

const useStyles = makeStyles((theme) => ({
  bodyMargin: {
    backgroundColor: "#F9FAFB",
    paddingBottom: "5rem",
  },
}));

const LandingPage = ({ tabValue, setTabValue }) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.bodyMargin}>
      <Head>
        <title key="title">Contact | RangoJango Web Design & Development</title>
        <meta
          name="description"
          key="description"
          content="Have a web design or web development question? Are you looking for an SEO quote? You want a new website and don't know where to start? We can't wait to hear from you."
        />
        <meta
          name="keywords"
          content="ecommerce build toronto, help ecommerce vancouver, how build ecommerce vancouver, how build ecommerce usa, build ecommerce vancouver, build ecommerce canada, website design, website development, ecommerce canada, ecommerce canada, ecommerce usa, ecommerce uk, ecommerce tornto, e-commerce development, web development british columbia, website design british columbia, web design, best web design canada, best web developer usa, seo usa, seo north america, seo uk, seo canada, seo usa, website design uk, website design canada, website design usa, web dev canada, usa web dev, website lawyers, vancouver design, web design dentists, web design accountants, build website construction, build website vancouver layers"
        />
        <meta
          property="og:title"
          content="Contact | RangoJango Web Design & Development"
          key="og:title"
        />
        <meta property="og:url" key="og:url" content="rangojango.com/contact" />

        <meta
          property="og:description"
          key="og:description"
          content="Have a web design or web development question? Are you looking for an SEO quote? You want a new website and don't know where to start? We can't wait to hear from you."
        />
        <meta property="og:locale" key="og:locale" content="en_US" />
        <meta property="og:type" key="og:type" content="website" />

        <link rel="canonical" key="canonical" href="/contact" />
      </Head>
      <Header text={"Contact Us"} />
      <div style={{ marginTop: "5rem" }}></div>
      <Contact />
      <Contact2 />
      <Grid container align="center" style={{ paddingBottom: "0rem" }}></Grid>
    </div>
  );
};

export default LandingPage;
