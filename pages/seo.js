import React from "react";
import { makeStyles } from "@material-ui/core";
import Head from "next/head";
import PageHeader from "../src/components/headers/PageHeader";
import Content1 from "../src/components/content/ServicesContent1";
import Content3 from "../src/components/content/ServicesContent3";
import Content4 from "../src/components/content/ServicesContent4";
import FAQ from "../src/components/FAQ/SeoFAQ";
import ScheduleCall from "../src/components/call-to-action/ScheduleCall";
import Pricing from "../src/components/pricing/Pricing";
import HowItWorks from "../src/components/how-it-works/HowItWorks3";

const useStyles = makeStyles((theme) => ({
  bodyMargin: {
    backgroundColor: theme.palette.backgroundPage,
  },
}));

const Seo = () => {
  const classes = useStyles();

  const content = {
    "header-p1": "SEO campaigns with guaranteed",
    "header-p2": "*results",
    description:
      "We run SEO campaigns that are transparent, honest, and realistic, attracting the right customers to your website.",
    "primary-action": "Book A Strategy Call",
    "secondary-action": "Get a Free Website Audit",
    badge: "SEO Campaigns in",
    location: "Florida",
    backgroundImage:
      "data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23f7f7f7' fill-opacity='0.03' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E",
  };

  const ecommerceContent = {
    badge: "Drive high quality traffic to your website",
    "header-p1": "OUR SEO",
    "header-p2": "PRICING",
    options: [
      {
        "01_title": "ESSENTIAL",
        "title-color": "#70431C",
        "01_price": "$250",
        "01_suffix": " / One Time",
        description:
          "We will build a template WordPress website based on your sample provided.",
        benefits: [
          "GMB Optimization",
          "URL Optimization",
          "Google Analytics",
          "Google Review Assistance",
          "On-Page SEO",
          "Off-Page SEO",
          "Monthly Reporting",
          "Full Website Audit",
        ],
        "01_primary-action": "Start Your Project",
      },
      {
        "01_title": "PREMIUM",
        "title-color": "#BEBEC0",
        "01_price": "$350",
        "01_suffix": " / One Time",
        benefits: [
          "GMB Optimization",
          "URL Optimization",
          "Google Analytics",
          "Google Review Assistance",
          "On-Page SEO",
          "Off-Page SEO",
          "Monthly Reporting",
          "Full Website Audit",
          "Website SEO Optimization",
          "Content Strategy",
          "2 Monthly Blog Post",
          "2 Guest Post Links",
        ],
        "01_primary-action": "Start Your Project",
      },
      {
        "01_title": "ENTERPRISE",
        "title-color": "#FFCC33",
        "01_price": "$449+",
        "01_suffix": " / One Time",
        benefits: [
          "GMB Optimization",
          "URL Optimization",
          "Google Analytics",
          "Google Review Assistance",
          "On-Page SEO",
          "Off-Page SEO",
          "Monthly Reporting",
          "Full Website Audit",
          "Website SEO Optimization",
          "Content Strategy",
          "4 Monthly Blog Post",
          "4 Guest Post Links",
        ],
        "01_primary-action": "Start Your Project",
      },
    ],
  };

  const servicesContent1 = {
    desc: "You most likely found this SEO page by doing a Google search for 'Florida SEO'. You found RangoDev because we practice what we preach and know the most important Google ranking factors.",
  };

  const servicesContent2 = {
    "header-p1": "LONG-TERM GROWTH FOR YOUR BUSINESS",
    description:
      "By running proven SEO campaigns that generate consistent, high-quality leads month after month, we put your business on autopilot. Our SEO campaigns are meticulously planned to yield long-term results in the form of increased sales, revenue, and traffic. There will be no false promises or unrealistic expectations, only results. Your return on investment will be incredible.",
    description2:
      "We've perfected our approach to SEO strategies over the years through trial and error. Only the best SEO practices are used in our strategy, and we prioritize quality over quantity. It simply works.",
    description3:
      "We are passionate and confident that our company will place your website on the first page of Google (consistently) through highly adaptable custom Florida SEO strategies that make sense with your business and industry, based on our extensive experience and a process of reverse engineering success.",
    image: "/assets/ecompictures/2.webp",
    button: "BOOK SEO CONSULTATION",
  };

  const servicesContent3 = {
    "header-p1": "WANT TO RANK #1 ON GOOGLE? WE CAN DO IT!",
    description1:
      "Having thousands of visitors is pointless if none of them are your ideal customer. You'll end up with low-quality leads, a low conversion rate, and a lot of wasted time on uninteresting prospects. As a result, we prioritize quality over quantity.",
    description2:
      "We target keywords that your ideal customers will type into search engines to bring them to your website. As a result, you'll be able to attract the right audience and increase your chances of converting them into long-term, loyal, and paying customers.",
    description3:
      "Years of trial and error, as well as reverse engineering, have led to our current understanding. There is no online course or ‘SEO plug-in' that will allow you to tap into the expertise of our Florida team of SEO experts.",
    image: "/assets/4.webp",
    button: "BOOK SEO CONSULTATION",
  };

  return (
    <div className={classes.bodyMargin}>
      <Head>
        <title key="title">1# Florida SEO Agency | RangoDev</title>
        <meta
          name="description"
          key="description"
          content="SEO Agency in florida. Get More Customers by Improving Your Google Rankings! Discover the Right Keywords, Find Harmful Issues, Track Your Rankings - Free Consultation"
        />
        <meta
          name="keywords"
          content="florida seo agency, guaranteed seo florida, seo consultant florida, seo services in florida, seo specialist florida, best seo florida"
        />
        <meta
          property="og:title"
          content="1# Florida SEO Agency | RangoDev"
          key="og:title"
        />
        <meta property="og:url" key="og:url" content="rangojango.com/seo" />

        <meta
          property="og:description"
          key="og:description"
          content="SEO Agency in Florida. Get More Customers by Improving Your Google Rankings! Discover the Right Keywords, Find Harmful Issues, Track Your Rankings - Free Consultation"
        />
        <meta property="og:locale" key="og:locale" content="en_US" />
        <meta property="og:type" key="og:type" content="website" />

        <link rel="canonical" key="canonical" href="/seo" />
      </Head>
      <PageHeader content={content} secondButtonTrue={true} />
      <Content1 content={servicesContent1} />
      <Content3 content={servicesContent2} />
      <Content4 content={servicesContent3} />
      <HowItWorks />
      <Pricing content={ecommerceContent} />
      <FAQ />
      <ScheduleCall />
    </div>
  );
};

export default Seo;
