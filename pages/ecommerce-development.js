import React from "react";
import { makeStyles } from "@material-ui/core";
import Head from "next/head";
import PageHeader from "../src/components/headers/PageHeader";
import Content3 from "../src/components/content/ServicesContent3";
import Content4 from "../src/components/content/ServicesContent4";
import FAQ from "../src/components/FAQ/ServicesFAQ";
import Testimonials from "../src/components/testimonials/Testimonials2";
import ScheduleCall from "../src/components/call-to-action/ScheduleCall";
import Pricing from "../src/components/pricing/Pricing";
import HowItWorks from "../src/components/how-it-works/HowItWorks1";

const useStyles = makeStyles((theme) => ({
  bodyMargin: {
    backgroundColor: theme.palette.backgroundPage,
  },
}));

const Seo = () => {
  const classes = useStyles();

  const content = {
    "header-p1": "eCommerce Websites that get you the results",
    "header-p2": "you *need",
    description:
      "Custom website development for e-commerce websites. We help eCommerce businesses grow.",
    "primary-action": "Book A Strategy Call",
    "secondary-action": "Get a Free Website Audit",
    badge: "eCommerce Development in",
    location: "Florida",
    backgroundImage:
      "data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23f7f7f7' fill-opacity='0.03' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E",
  };

  const ecommerceContent = {
    badge: "Grow your business with us",
    "header-p1": "ECOMMERCE DEVELOPMENT",
    "header-p2": "PRICING",
    options: [
      {
        "01_title": "BRONZE",
        "title-color": "#70431C",
        "01_price": "$999",
        "01_suffix": " / One Time",
        description:
          "We will build a template WordPress website based on your sample provided.",
        benefits: [
          "Template Website",
          "Shopify, Magento, BigCommerce, WooCommerce",
          "Customization of Theme",
          "Front-end Development",
          "Social Media Integration",
          "Mobile Responsive",
          "Google Maps",
          "Contact Form",
          "Photo Sourcing",
          "Strategy Session",
          "Basic Animations",
          "2 Rounds Of Revisions",
        ],
        "01_primary-action": "Start Your Project",
      },
      {
        "01_title": "SILVER",
        "title-color": "#BEBEC0",
        "01_price": "$1499",
        "01_suffix": " / One Time",
        benefits: [
          "Customized Template Website",
          "Shopify, Magento, BigCommerce, WooCommerce",
          "Front-end Development",
          "Social Media Integration",
          "Mobile Responsive",
          "Google Maps",
          "Contact Form",
          "Photo Sourcing",
          "Strategy Session",
          "Intermediate Animations",
          "SEO Optimized",
          "Google Analytics",
          "3 Rounds Of Revisions",
        ],
        "01_primary-action": "Start Your Project",
      },
      {
        "01_title": "GOLD",
        "title-color": "#FFCC33",
        "01_price": "$2499+",
        "01_suffix": " / One Time",
        benefits: [
          "Website from scratch",
          "Commerce.js / custom back-end",
          "Front-end / Back-end Development",
          "Custom website functionality",
          "Social Media Integration",
          "Mobile Responsive",
          "Google Maps",
          "Contact Form",
          "Photo Sourcing",
          "Strategy Session",
          "Advanced Animations",
          "SEO Optimized",
          "Google Analytics",
          "3 Rounds Of Revisions",
        ],
        "01_primary-action": "Start Your Project",
      },
    ],
  };

  const servicesContent = {
    "header-p1": "ECOMMERCE DESIGN & DEVELOPMENT",
    description:
      "What makes online shops successful? Constant further development and adaptation to ongoing change. What was new and successful just a few years ago is (at the same level) today a guarantee for low sales. Our eCommerce development services, project support and management guarantee more customers and more sales.",
    description2:
      "We evaluate trends on the internet and advise on sustainable, successful changes. We accompany the introduction of new systems and show the weak points in existing processes. With one eye on the future and feasibility, with the other on budget and costs.",
    description3:
      "Our eCommerce developers have been honing their skills and implementing the most cutting-edge technologies to assist our clients in achieving their online sales objectives year after year. At RangoDev, we believe that successful eCommerce solutions are built on great web design, great user experience, and rock solid technology.",
    image: "/assets/ecompictures/4.webp",
    button: "BOOK ECOMMERCE CONSULTATION",
  };

  const servicesContent2 = {
    badge: "SEO and Digital Marketing",
    "header-p1": "ECOMMERCE INDUSTRIES",
    description2:
      "We have built eCommerce websites for clients in many different industries. We’ve had the opportunity to work with some great clients in Florida, the United States of America, Ireland, the United Kingdom, Germany and Canada.",
    industries: [
      "Electronics",
      "Cannabis",
      "Furniture",
      "Grocery",
      "Apparel",
      "Beauty",
      "E-Learning",
      "Footwear",
      "Retail",
      "Fashion",
      "Food",
      "Personal Care",
    ],
    industries2: [
      "Vegan Products",
      "Make-up",
      "Coffee",
      "Jewelry",
      "Fitness",
      "Alcohol",
      "Tobacco, Pipes",
      "Dietary Supplements",
      "OTC Medicine",
      "Garden & Outdoor",
      "Pet Supplies",
      "Many More…",
    ],
    image: "/assets/ecompictures/1.webp",
    button: "BOOK ECOMMERCE CONSULTATION",
  };

  return (
    <div className={classes.bodyMargin}>
      <Head>
        <title key="title">
          E-Commerce Website Design & Development Agency in Florida | RangoDev
        </title>
        <meta
          name="description"
          key="description"
          content="We create custom ecommerce websites that boost conversion rates and online visibility. Get fast, secure & scalable ecommerce web solutions in Florida. Schedule a strategy call today!"
        />
        <meta
          name="keywords"
          content="ecommerce web design florida, ecommerce florida, ecommerce website development florida, best ecommerce website design florida, website design ecommerce cheap"
        />
        <meta
          property="og:title"
          content="E-Commerce Website Design & Development Agency in Florida | RangoDev"
          key="og:title"
        />
        <meta
          property="og:url"
          key="og:url"
          content="rangojango.com/ecommerce-development"
        />

        <meta
          property="og:description"
          key="og:description"
          content="We create custom ecommerce websites that boost conversion rates and online visibility. Get fast, secure & scalable ecommerce web solutions in Florida. Schedule a strategy call today!"
        />
        <meta property="og:locale" key="og:locale" content="en_US" />
        <meta property="og:type" key="og:type" content="website" />

        <link rel="canonical" key="canonical" href="/ecommerce-development" />
      </Head>
      <PageHeader content={content} secondButtonTrue={true} />
      <Testimonials />
      {/* <Content1 /> */}
      <Content3 content={servicesContent} />
      <Content4 content={servicesContent2} />
      <HowItWorks />
      <Pricing content={ecommerceContent} />
      <FAQ />
      <ScheduleCall />
    </div>
  );
};

export default Seo;
