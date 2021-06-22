import React from "react";
import { makeStyles } from "@material-ui/core";
import Head from "next/head";
import PageHeader from "../src/components/headers/FreeAuditHeader";
import Audit from "../src/components/content/FreeAudit";
import Contant from "../src/components/contacts/ContactFreeAudit";

const useStyles = makeStyles((theme) => ({
  bodyMargin: {
    backgroundColor: theme.palette.backgroundPage,
  },
}));

const WebsiteAudit = () => {
  const classes = useStyles();

  return (
    <div className={classes.bodyMargin}>
      <Head>
        <title key="title">Vancouver Website Review | Web Design & SEO</title>
        <meta
          name="description"
          key="description"
          content="You need help with your website? Don't know why your website is not getting results. We offer a free website review so you can see why it's not working the way you'd want it to. 24 hours delivery, send your website today!"
        />
        <meta
          name="keywords"
          content="seo europe, best seo in europe, best seo canada, best seo usa, web design vancouver, build website vancouver, dentists build website, dentist webdesign, accountant web design, accountant build website, construction website build, construction vancouver website, toronto web design, toronto build website, toronto dentist, toronto webdesign, web designer canada, web development canada,web design uk, web design canada, web design usa, best seo canada, vancouver seo, london web dev, london web design, web design europe, web design dublin, new website dublin, lawyer website, dentists website, accountant website, web developer canada, web developer europe, best website design uk, seo uk, london seo, best website design usa"
        />
        <meta
          property="og:title"
          content="Website Review | RangoJango Web Design & Development Vancouver"
          key="og:title"
        />
        <meta
          property="og:url"
          key="og:url"
          content="rangojango.com/free-website-audit"
        />

        <meta
          property="og:description"
          key="og:description"
          content="You need help with your website? Don't know why your website is not getting results. We offer a free website review so you can see why it's not working the way you'd want it to. 24 hours delivery, send your website today!"
        />
        <meta property="og:locale" key="og:locale" content="en_US" />
        <meta property="og:type" key="og:type" content="website" />

        <link rel="canonical" key="canonical" href="/free-website-audit" />
      </Head>
      <PageHeader />
      <Audit />
      <Contant />
    </div>
  );
};

export default WebsiteAudit;
