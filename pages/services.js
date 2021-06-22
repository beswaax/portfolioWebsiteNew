import React from "react";
import { makeStyles } from "@material-ui/core";
import Head from "next/head";
import PageHeader from "../src/components/headers/ServicesPageHeader";
import Content3 from "../src/components/content/ServicesContent3";
import Content4 from "../src/components/content/ServicesContent4";
import FAQ from "../src/components/FAQ/ServicesFAQ";
import ScheduleCall from "../src/components/call-to-action/ScheduleCall";
import Pricing from "../src/components/pricing/Pricing";

const useStyles = makeStyles((theme) => ({
  bodyMargin: {
    backgroundColor: theme.palette.backgroundPage,
  },
}));

const Services = () => {
  const classes = useStyles();

  return (
    <div className={classes.bodyMargin}>
      <Head>
        <title key="title">
          Services | RangoJango Web Design & Development Vancouver
        </title>
        <meta
          name="description"
          key="description"
          content="Developing and designing websites suitable for your digital needs. From simple websites to sophisticated e-commerce systems, we provide our services to clients big and small. No matter if you're from Vancouver, Dublin or London, we work internationally. Check out our web design and SEO pricing!"
        />
        <meta
          name="keywords"
          content="website design, website development, ecommerce canada, ecommerce dublin,london web design, ecommerce uk, e-commerce development, web development europe, website design canada, web design, best web design toronto, best web design vancouver, best web design london, ecommerce canada, ecommerce london, ecommerce vancouver, e-commerce toronto, build ecommerce vancouver, build ecommerce toronto, build ecommerce london, web design vancouver, toronto web design, website london new, new website vancovuer, update site toronto, dentist web design, accountant web design, lawyer web design, construction web design, build website dentists, build website accountants, build website lawyers, build website construction, plumber website build, web design plumber vancouver"
        />
        <meta
          property="og:title"
          content="Services | RangoJango Web Design & Development Vancouver"
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
          content="Developing and designing websites suitable for your digital needs. From simple websites to sophisticated e-commerce systems, we provide our services to clients big and small. No matter if you're from Vancouver, Dublin or London, we work internationally. Check out our web design and SEO pricing!"
        />
        <meta property="og:locale" key="og:locale" content="en_US" />
        <meta property="og:type" key="og:type" content="website" />

        <link rel="canonical" key="canonical" href="/services" />
      </Head>
      <PageHeader />
      <Content3 />
      <Content4 />
      <Pricing />
      <FAQ />
      <ScheduleCall />
    </div>
  );
};

export default Services;
