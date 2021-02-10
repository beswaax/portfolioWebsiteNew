import React from "react";
import { makeStyles, useMediaQuery, useTheme } from "@material-ui/core";
import Head from "next/head";
import PageHeader from "../src/components/headers/PageHeader";
import Content1 from "../src/components/content/AboutContent1";
import Content2 from "../src/components/content/AboutContent2";
import Content3 from "../src/components/content/AboutContent3";
import FAQ from "../src/components/FAQ/FAQ";
import CallToAction from "../src/components/call-to-action/CallToAction2";
import Contact from "../src/components/contacts/Contact1";

const useStyles = makeStyles((theme) => ({
  bodyMargin: {
    backgroundColor: "#F9FAFB",
  },
}));

const About = ({ tabValue, setTabValue }) => {
  const classes = useStyles();
  const theme = useTheme();

  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div className={classes.bodyMargin}>
      <Head>
        <title key="title">
          About Us | RangoJango Web Design & Development
        </title>
        <meta
          name="description"
          key="description"
          content="Are you looking for web design or web development in Europe? We feel that we can provide one of the best experiences when it comes to web development, web design and SEO."
        />
        <meta
          name="keywords"
          content="seo europe, best seo in germany,best seo europe, web design germany, web designer germany, web development germany, web development europe, web design europe, web developer germany, web developer europe, best website design europe, best website design europe"
        />
        <meta
          property="og:title"
          content="About Us | RangoJango Web Design & Development"
          key="og:title"
        />
        <meta property="og:url" key="og:url" content="rangojango.com/about" />
        <link rel="canonical" key="canonical" href="rangojango.com/about" />
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
