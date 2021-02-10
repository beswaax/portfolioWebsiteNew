import React from "react";
import { makeStyles, useMediaQuery, useTheme } from "@material-ui/core";
import Head from "next/head";
import PageHeader from "../src/components/headers/PageHeader";
import Content1 from "../src/components/content/ServicesContent1";
import Content2 from "../src/components/content/ServicesContent2";
import Content3 from "../src/components/content/ServicesContent3";
import Content4 from "../src/components/content/ServicesContent4";
import FAQ from "../src/components/FAQ/ServicesFAQ";
import CallToAction from "../src/components/call-to-action/CallToAction2";
//import Contact from "../src/components/contacts/Contact1";

const useStyles = makeStyles((theme) => ({
  bodyMargin: {
    backgroundColor: "#F9FAFB",
  },
}));

const Services = ({ tabValue, setTabValue }) => {
  const classes = useStyles();
  const theme = useTheme();

  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

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
          content="website design, website development, ecommerce germany, ecommerce europe, e-commerce development, web development europe, website design germany, web design, best web design germany, best web developer germany"
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
        <link rel="canonical" key="canonical" href="rangojango.com/services" />
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
