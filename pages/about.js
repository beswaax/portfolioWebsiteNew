import React from "react";
import { makeStyles, useMediaQuery, useTheme } from "@material-ui/core";
import Head from "next/head";
import PageHeader from "../src/components/headers/PageHeader";
import Content1 from "../src/components/content/AboutContent1";
import Content2 from "../src/components/content/AboutContent2";
import Content3 from "../src/components/content/AboutContent3";
import FAQ from "../src/components/FAQ/FAQ";
import CallToAction from "../src/components/call-to-action/CallToAction2";

const useStyles = makeStyles((theme) => ({
  bodyMargin: {
    backgroundColor: "#F9FAFB",
  },
}));

const About = ({ tabValue, setTabValue }) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.bodyMargin}>
      <Head>
        <title key="title">
          About Us | RangoJango Web Design & Development
        </title>
        <meta
          name="description"
          key="description"
          content="Looking for a reliable web design & web development company? We provide one of the best experiences when it comes to web development, web design and SEO."
        />
        <meta
          name="keywords"
          content="seo europe, best seo in europe, best seo canada, best seo usa, web design deutschland, germany web design , web designer deutschland, web development deutschland, web development europe, web design uk, web design canada, web design usa, best seo canada, vancouver seo, london web dev, london web design, web design europe, web developer deutschland, web developer europe, best website design uk, seo uk, london seo, best website design usa"
        />
        <meta
          property="og:title"
          content="About Us | RangoJango Web Design & Development"
          key="og:title"
        />
        <meta property="og:url" key="og:url" content="rangojango.com/about" />
        <link rel="canonical" key="canonical" href="/about" />
      </Head>
      <PageHeader text={"About Us"} />
      <Content1 />
      <Content2 />
      <CallToAction />
      <Content3 />
      <FAQ />
    </div>
  );
};

export default About;
