import React from "react";
import { makeStyles } from "@material-ui/core";
import Head from "next/head";
import Header from "../../src/components/headers/PageHeader";
import Content2 from "../../src/components/content/BlogItems";

const useStyles = makeStyles((theme) => ({
  bodyMargin: {
    backgroundColor: theme.palette.backgroundPage,
    paddingBottom: "5rem",
  },
}));

const LandingPage = () => {
  const classes = useStyles();

  const headerContent = {
    "header-p1": "Insights and advice from our Vancouver team of",
    "header-p2": "experts",
    description:
      "In-depth articles that will teach you more about web design, web development, eCommerce and SEO.",
    "primary-action": "Book A Strategy Call",
    "secondary-action": "Get a Free Website Audit",
    badge: "RangoJango",
    location: "Blog",
    backgroundImage:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='18' viewBox='0 0 100 18'%3E%3Cpath fill='%23f7f7f7' fill-opacity='0.03' d='M61.82 18c3.47-1.45 6.86-3.78 11.3-7.34C78 6.76 80.34 5.1 83.87 3.42 88.56 1.16 93.75 0 100 0v6.16C98.76 6.05 97.43 6 96 6c-9.59 0-14.23 2.23-23.13 9.34-1.28 1.03-2.39 1.9-3.4 2.66h-7.65zm-23.64 0H22.52c-1-.76-2.1-1.63-3.4-2.66C11.57 9.3 7.08 6.78 0 6.16V0c6.25 0 11.44 1.16 16.14 3.42 3.53 1.7 5.87 3.35 10.73 7.24 4.45 3.56 7.84 5.9 11.31 7.34zM61.82 0h7.66a39.57 39.57 0 0 1-7.34 4.58C57.44 6.84 52.25 8 46 8S34.56 6.84 29.86 4.58A39.57 39.57 0 0 1 22.52 0h15.66C41.65 1.44 45.21 2 50 2c4.8 0 8.35-.56 11.82-2z'%3E%3C/path%3E%3C/svg%3E",
  };

  return (
    <div className={classes.bodyMargin}>
      <Head>
        <title key="title">
          Web Design & Development, SEO Tips | RangoJango Blog
        </title>
        <meta
          name="description"
          key="description"
          content="In-depth articles that will teach you more about web design, web development and SEO. Take a look at what the top Vancouver web design company is up to these days."
        />
        <meta
          name="keywords"
          content="web design tips in vancouver, vancouver website design company, web development companies vancouver, best website design vancouver"
        />
        <meta
          property="og:title"
          content="Web Design & Development, SEO Tips | RangoJango Blog"
          key="og:title"
        />
        <meta property="og:url" key="og:url" content="rangojango.com/blog" />

        <meta
          property="og:description"
          key="og:description"
          content="In-depth articles that will teach you more about web design, web development and SEO. Take a look at what the top Vancouver web design company is up to these days."
        />
        <meta property="og:locale" key="og:locale" content="en_US" />
        <meta property="og:type" key="og:type" content="website" />

        <link rel="canonical" key="canonical" href="/blog" />
      </Head>
      <Header content={headerContent} />
      <Content2 />
    </div>
  );
};

export default LandingPage;
