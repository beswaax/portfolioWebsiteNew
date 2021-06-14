import React from "react";
import { makeStyles, useTheme } from "@material-ui/core";
import Head from "next/head";
import PageHeader from "../src/components/headers/AboutPageHeader";
import Content2 from "../src/components/content/AboutContent2";
import Content3 from "../src/components/content/AboutContent3";
import FAQ from "../src/components/FAQ/FAQ";
import ScheduleCall from "../src/components/call-to-action/ScheduleCall";

const useStyles = makeStyles((theme) => ({
  bodyMargin: {
    backgroundColor: theme.palette.backgroundPage,
  },
}));

const About = ({ tabValue, setTabValue }) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.bodyMargin}>
      <Head>
        <title key="title">
          About Us | RangoJango Web Design & Development Vancouver
        </title>
        <meta
          name="description"
          key="description"
          content="We are a web agency that specializes in web design, web development, SEO and e-commerce. We are focused on driving quality traffic that can drastically increase your bottom line. We're your team of Web Design and SEO experts. You're from Dublin, Toronto, Vancouver or London? We offer our web design, web development and SEO services internationally."
        />
        <meta
          name="keywords"
          content="seo europe,dublin accountant website, dublin dentists website, london dentists website, vancouver dentist website, new website vancouver, new website dublin, new website lonodn, accountant website vancouver, accountant website london, construction website vancouver, construction website london, construction london, accountant website dublin, best website create vancouver, best create website london, best create website dublin, best, web design, toronto, vancouver, best seo in europe, best seo canada, best seo usa, web design vancouver, build website vancouver, dentists build website, dentist webdesign, accountant web design, accountant build website, construction website build, construction vancouver website, toronto web design, toronto build website, toronto dentist, toronto webdesign, web designer canada, web development canada,web design uk, web design canada, web design usa, best seo canada, vancouver seo, london web dev, london web design, web design europe, web developer canada, web developer europe, best website design uk, seo uk, london seo, best website design usa"
        />
        <meta
          property="og:title"
          content="About Us | RangoJango Web Design & Development Vancouver"
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
      <PageHeader />
      <Content3 />
      <Content2 />
      <FAQ />
      <ScheduleCall />
    </div>
  );
};

export default About;
