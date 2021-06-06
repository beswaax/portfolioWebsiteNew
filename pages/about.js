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
          content="We are a web agency that specializes in web design, web development, SEO and e-commerce. We are focused on driving quality traffic that can drastically increase your bottom line."
        />
        <meta
          name="keywords"
          content="seo europe, best seo in europe, best seo canada, best seo usa, web design vancouver, build website vancouver, dentists build website, dentist webdesign, accountant web design, accountant build website, construction website build, construction vancouver website, toronto web design, toronto build website, toronto dentist, toronto webdesign, web designer canada, web development canada,web design uk, web design canada, web design usa, best seo canada, vancouver seo, london web dev, london web design, web design europe, web developer canada, web developer europe, best website design uk, seo uk, london seo, best website design usa"
        />
        <meta
          property="og:title"
          content="About Us | RangoJango Web Design & Development"
          key="og:title"
        />
        <meta property="og:url" key="og:url" content="rangojango.com/about" />

        <meta
          property="og:description"
          key="og:description"
          content="We are a web agency that specializes in web design, web development, SEO and e-commerce. We are focused on driving quality traffic that can drastically increase your bottom line."
        />
        <meta property="og:locale" key="og:locale" content="en_US" />
        <meta property="og:type" key="og:type" content="website" />

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
