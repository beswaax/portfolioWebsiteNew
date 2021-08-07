import React from "react";
import { makeStyles } from "@material-ui/core";
import Head from "next/head";
import PageHeader from "../src/components/headers/PageHeader";
import Audit from "../src/components/content/FreeAudit";
import Contant from "../src/components/contacts/ContactFreeAudit";

const useStyles = makeStyles((theme) => ({
  bodyMargin: {
    backgroundColor: theme.palette.backgroundPage,
  },
}));

const WebsiteAudit = () => {
  const classes = useStyles();

  const content = {
    badge: "Free Website",
    location: "Audit",
    "header-p1": "Unsure about your website? We'll audit it for",
    "header-p2": "*FREE",
    span: "*FREE",
    description:
      "If you don't undestand why your website is not getting results, send it over to us and we'll review it for free.",
    "primary-action": "Book A Strategy Call",
    "secondary-action": "Get a Free Website Audit",
    backgroundImage:
      "data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.184 20c.357-.13.72-.264 1.088-.402l1.768-.661C33.64 15.347 39.647 14 50 14c10.271 0 15.362 1.222 24.629 4.928.955.383 1.869.74 2.75 1.072h6.225c-2.51-.73-5.139-1.691-8.233-2.928C65.888 13.278 60.562 12 50 12c-10.626 0-16.855 1.397-26.66 5.063l-1.767.662c-2.475.923-4.66 1.674-6.724 2.275h6.335zm0-20C13.258 2.892 8.077 4 0 4V2c5.744 0 9.951-.574 14.85-2h6.334zM77.38 0C85.239 2.966 90.502 4 100 4V2c-6.842 0-11.386-.542-16.396-2h-6.225zM0 14c8.44 0 13.718-1.21 22.272-4.402l1.768-.661C33.64 5.347 39.647 4 50 4c10.271 0 15.362 1.222 24.629 4.928C84.112 12.722 89.438 14 100 14v-2c-10.271 0-15.362-1.222-24.629-4.928C65.888 3.278 60.562 2 50 2 39.374 2 33.145 3.397 23.34 7.063l-1.767.662C13.223 10.84 8.163 12 0 12v2z' fill='%23f7f7f7' fill-opacity='0.03' fill-rule='evenodd'/%3E%3C/svg%3E",
  };

  return (
    <div className={classes.bodyMargin}>
      <Head>
        <title key="title">
          Website Review | RangoJango Vancouver Web Design & SEO
        </title>
        <meta
          name="description"
          key="description"
          content="Don't know why your website is not getting results? We offer a free website review so you can see why it's not working the way you'd want it to. 24 hours delivery!"
        />
        <meta
          name="keywords"
          content="cheap web design vancouver bc, ecommerce website design vancouver, ecommerce website development vancouver, cheap SEO agency Vancouver, best SEO company Vancouver"
        />
        <meta
          property="og:title"
          content="Website Review | RangoJango Vancouver Web Design & SEO"
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
          content="Don't know why your website is not getting results? We offer a free website review so you can see why it's not working the way you'd want it to. 24 hours delivery!"
        />
        <meta property="og:locale" key="og:locale" content="en_US" />
        <meta property="og:type" key="og:type" content="website" />

        <link rel="canonical" key="canonical" href="/free-website-audit" />
      </Head>
      <PageHeader content={content} secondButtonTrue={false} />
      <Audit />
      <Contant />
    </div>
  );
};

export default WebsiteAudit;
