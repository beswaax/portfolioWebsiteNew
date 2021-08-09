import React from "react";
import { makeStyles } from "@material-ui/core";
import Head from "next/head";
import PageHeader from "../src/components/headers/PageHeader";
import Content1 from "../src/components/content/ServicesContent1";
import Content3 from "../src/components/content/ServicesContent3";
import Content4 from "../src/components/content/ServicesContent4";
import FAQ from "../src/components/FAQ/ServicesFAQ";
import ScheduleCall from "../src/components/call-to-action/ScheduleCall";
import Pricing from "../src/components/pricing/Pricing";
import HowItWorks from "../src/components/how-it-works/HowItWorks1";

const useStyles = makeStyles((theme) => ({
  bodyMargin: {
    backgroundColor: theme.palette.backgroundPage,
  },
}));

const WebDev = () => {
  const classes = useStyles();

  const content = {
    "header-p1": "Custom websites that get you the results",
    "header-p2": "*you need",
    description:
      "We have the technical skills, experience, and ability to deliver perfect websites to help reach your goals.",
    "primary-action": "Book A Strategy Call",
    "secondary-action": "Get a Free Website Audit",
    badge: "Web Development in",
    location: "Florida",
    backgroundImage:
      "data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23f7f7f7' fill-opacity='0.03' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E",
  };

  const ecommerceContent = {
    badge: "Grow your business with us",
    "header-p1": "WEB DEVELOPMENT & DESIGN",
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
          "Customization of Theme",
          "Front-end Development",
          "E-commerce",
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
        "01_price": "$1999",
        "01_suffix": " / One Time",
        benefits: [
          "Customized Template Website",
          "Front-end / Back-end Development",
          "E-commerce",
          "Custom Back-end System",
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
        "01_price": "$2999+",
        "01_suffix": " / One Time",
        benefits: [
          "Website from scratch",
          "Front-end / Back-end Development",
          "Custom website functionality",
          "E-commerce",
          "Custom Back-end System",
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

  const servicesContent1 = {
    desc: "We are equipped with the necessary knowledge, experience, and enthusiasm to complete the task. Our team of professionals is ready to assist you with a variety of website design and development services. We're eager to collaborate with you to create winning web solutions",
  };

  const servicesContent2 = {
    badge: "Web Development & Web Design",
    "header-p1": "WEB DESIGN & DEVELOPMENT",
    description:
      "Having a website is a necessity in today’s business world. They give you one central, public location to let people know who you are, what you do, and why you’re the best at it. From simply having your hours posted to having a full fledged online store, making yourself as accessible as possible to users online drives growth and enables you to reach new customers.",
    description2:
      "We have provided professional and dependable website design and web development with measurable results to startups, small businesses, and large corporations. We've helped dozens of businesses in Florida and throughout the world acquire a competitive advantage in their sector.",
    description3:
      "Our designers and developers have been honing their skills and implementing the most cutting-edge technologies to assist our clients in achieving their online sales objectives year after year. At RangoJango, we believe that successful web development solutions are built on great web design, great user experience, and rock solid technology.",
    image: "/assets/2.webp",
    button: "Book a WEB DESIGN CONSULTATION",
  };

  const servicesContent3 = {
    badge: "SEO and Digital Marketing",
    "header-p1": "INDUSTRIES WE SERVE",
    description2:
      "We have built websites and web applications for clients in many different industries. We’ve had the opportunity to work with some great clients in Florida, The United States of America, South America, Europe and Canada.",
    industries: [
      "Architecture",
      "Business",
      "Law",
      "HVAC",
      "Healthcare",
      "Beauty",
      "Cannabis",
      "Catering",
      "Medical",
      "Manufacturing",
      "Consulting",
      "Non-for-Profit",
      "Construction",
    ],
    industries2: [
      "Dental",
      "Property Management",
      "Real Estate",
      "eCommerce",
      "Resorts",
      "Education",
      "Restaurants",
      "Entertainment",
      "Security",
      "Finance",
      "Fitness",
      "Travel",
      "Many More…",
    ],
    image: "/assets/ecompictures/2.webp",
    button: "Book a WEB DESIGN CONSULTATION",
  };

  return (
    <div className={classes.bodyMargin}>
      <Head>
        <title key="title">
          Web Design & Development Agency | RangoJango Florida
        </title>
        <meta
          name="description"
          key="description"
          content="RangoJango's web design team will assist you in creating a stunning website. We stand out because we provide hands-on revisions and a quick turnaround. Schedule a strategy call today."
        />
        <meta
          name="keywords"
          content="web design agency tampa, website design tampa cheap, web development company florida, web design in tampa, web page design in tampa, website design tampa"
        />
        <meta
          property="og:title"
          content="Web Design & Development Agency | RangoJango Florida"
          key="og:title"
        />
        <meta
          property="og:url"
          key="og:url"
          content="rangojango.com/web-development"
        />

        <meta
          property="og:description"
          key="og:description"
          content="RangoJango's web design team will assist you in creating a stunning website. We stand out because we provide hands-on revisions and a quick turnaround. Schedule a strategy call today."
        />
        <meta property="og:locale" key="og:locale" content="en_US" />
        <meta property="og:type" key="og:type" content="website" />

        <link rel="canonical" key="canonical" href="/web-development" />
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

export default WebDev;
