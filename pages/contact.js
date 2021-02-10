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

  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div className={classes.bodyMargin}>
      <Head>
        <title key="title">Contact | RangoJango Web Design & Development</title>
        <meta
          name="description"
          key="description"
          content="Have a web design or web development question? Are you looking for an SEO quote? We can't wait to hear from you."
        />
        <meta
          name="keywords"
          content="website design, website development, ecommerce germany, ecommerce europe, e-commerce development, web development europe, website design germany, web design, best web design germany, best web developer germany, seo germany, seo europe"
        />
        <meta
          property="og:title"
          content="Contact | RangoJango Web Design & Development"
          key="og:title"
        />
        <meta property="og:url" key="og:url" content="rangojango.com/contact" />
        <link rel="canonical" key="canonical" href="rangojango.com/contact" />
      </Head>
      <Header text={"Contact Us"} />
      <div style={{ marginTop: "5rem" }}></div>
      <Contact />
      <Contact2 />
      <Grid container align="center" style={{ paddingBottom: "0rem" }}>
        <div
          style={{
            padding: 0,
            width: "100%",
            height: "30rem",
          }}
        >
          <iframe
            title="Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2524.1460628878267!2d6.161105815919567!3d50.75432527330324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c09c3192156943%3A0xc0842f90b51285a4!2sRichard-Wagner-Stra%C3%9Fe%2014%2C%2052078%20Aachen!5e0!3m2!1sen!2sde!4v1607199534817!5m2!1sen!2sde"
            style={{ border: 0, width: "100%", height: "100%" }}
            aria-hidden="false"
          />
        </div>
      </Grid>
    </div>
  );
};

export default LandingPage;
