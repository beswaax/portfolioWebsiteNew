import React from "react";
import { makeStyles, useTheme } from "@material-ui/core";
import Head from "next/head";
import PageHeader from "../src/components/headers/PageHeader";
import Content3 from "../src/components/content/ServicesContent3";
import Content4 from "../src/components/content/ServicesContent4";
import FAQ from "../src/components/FAQ/ServicesFAQ";
import CallToAction from "../src/components/call-to-action/CallToAction2";

const useStyles = makeStyles((theme) => ({
  bodyMargin: {
    backgroundColor: "#F9FAFB",
  },
}));

const Services = ({ tabValue, setTabValue }) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.bodyMargin}>
      <Head>
        <title key="title">
          Services | RangoJango Web Design & Development
        </title>
        <meta
          name="description"
          key="description"
          content="Developing and designing websites suitable for your digital needs. From simple websites to sophisticated e-commerce systems, we provide our services to clients big and small."
        />
        <meta
          name="keywords"
          content="website design, website development, ecommerce canada, ecommerce europe, ecommerce uk, e-commerce development, web development europe, website design canada, web design, best web design toronto, best web design usa, best web design canada, ecommerce canada, ecommerce london, ecommerce vancouver, e-commerce toronto, build ecommerce vancouver, build ecommerce toronto, build ecommerce london, web design vancouver, toronto web design, ecommerce usa, dentist web design, accountant web design, lawyer web design, construction web design, build website dentists, build website accountants, build website layers, build website construction, plumber website build, web design plumber"
        />
        <meta
          property="og:title"
          content="Services | RangoJango Web Design & Development"
          key="og:title"
        />
        <meta
          property="og:url"
          key="og:url"
          content="rangojango.com/services"
        />

        <meta
          property="og:description"
          key="og:description"
          content="Developing and designing websites suitable for your digital needs. From simple websites to sophisticated e-commerce systems, we provide our services to clients big and small."
        />
        <meta property="og:locale" key="og:locale" content="en_US" />
        <meta property="og:type" key="og:type" content="website" />

        <link rel="canonical" key="canonical" href="/services" />
      </Head>
      <PageHeader text={"Services"} />
      <Content3 />
      <Content4 />
      <CallToAction />
      <FAQ />
    </div>
  );
};

export default Services;
