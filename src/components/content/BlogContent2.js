import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  name: {
    lineHeight: 1,
  },
  content: {
    [theme.breakpoints.up("md")]: {
      paddingLeft: theme.spacing(8),
      paddingRight: theme.spacing(8),
    },
  },
  paragraph: {
    marginBottom: theme.spacing(3),
  },
  bolderText: {
    marginBottom: theme.spacing(1),
    fontWeight: 500,
  },
  image: {
    maxWidth: "100%",
    borderRadius: theme.shape.borderRadius,
  },
}));

export default function Blog() {
  const classes = useStyles();

  const content = [
    {
      title: "What is a landing page?",
      contentArray: [
        "Create a landing page: A landing page is the page that a visitor arrives at on your website after clicking on an ad (e.g. a Google text ad or a display ad). Inexperienced marketers often direct all of your PPC traffic to your homepage, but this can be a huge mistake.",
        "Having specific landing pages tailored to different offerings is essential to delivering a high quality experience to visitors and generating conversions with a targeted message that meets the needs of each user.",

        "What makes a good landing page? How can you create amazing landing pages that have off-chart conversion rates? We'll walk you through everything you need to know to make this happen",
        "Landing pages strongly define digital marketing and advertising. A landing page is a dedicated page on your website that has been ceremoniously created to use as part of your digital marketing and / or promotional efforts.",
        "Basically, your target group and / or new visitors will be redirected here when you click on the link corresponding to the desired landing page.",
      ],
    },
    {
      title: "Why do you need a landing page?",
      contentArray: [
        "What is the landing page used for and why do you need one?",
        "The short answer is, it is an essential element of your marketing and sales strategy that can increase your conversion rates and reduce the cost of getting a lead or a sale. ",
        "The long answer is:",
      ],
    },
    {
      title: "1) It helps you get more leads",
      contentArray: [
        "You can spend your entire budget on contact lists and outbound sales teams. Or, you can sit back while the leads come to you by simply creating a powerful landing page.",
        "Responsive landing pages are the best way to capture leads, period!",
        "And not just any leads, but quality leads as well. Cool,right?",

        "If you create a landing page that details, sells, and demonstrates the benefits of your product or service, and that is adorned with powerful video, audio, or images, you are sure to get a great lead capture campaign.",
      ],
    },
    {
      title: "2) It is an extremely effective and efficient advertisement",
      contentArray: [
        "No matter how much time, money, and effort you put into your advertising campaign, it is always an investment. And you deserve the best possible return.",
        "By strategically combining a target audience with a custom message leads to an unbeatable couple that pays off big time, landing pages are the most effective, efficient type of advertising you could ask for.",
      ],
    },
    {
      title: "3) It helps you rank higher locally",
      contentArray: [
        "This is useful. Google now cares about user intent, not just the keywords that users are looking for. Hence, it is almost mandatory to focus on small landing pages in particular.",
        "So if you want your website to rank higher when people search locally and need more local customers, then consider creating local content that speaks directly to your visitor's heart.",
        "First, tweak the design of your landing page and rank for your local area so that your target audience can find you more easily.",
      ],
    },
    {
      title: "4) It offers better user experience",
      contentArray: [
        "Every. User. Is. Unique. And they want to be treated that way.",
        "Landing pages are the best when it comes to connecting with your audience on a deeper level.",
        "In addition, a high-converting landing page increases your credibility. And that's something that shouldn't be overlooked. Creating the perfect landing page should serve as a unique and compelling problem solver.",
        "When the landing page is tailored to their needs, they trust your website and this is the beginning of a new trust-based relationship.",
      ],
    },
    {
      title: "LANDING PAGE CONCLUSION:",
      contentArray: [
        "While the term 'landing page' can apply to any page on your website, in marketing a 'landing page' usually refers to a specific page created for a specific marketing campaign. These types of landing pages can do wonderful things for your online advertising.",
        "In this article, we covered the basics of landing pages. We explained what they are and how to create and test them. That's just the tip of the iceberg, of course. Try creating a page or two yourself.",
      ],
    },
  ];

  return (
    <section>
      <Container maxWidth="md">
        <Box py={10}>
          <Box className={classes.content}>
            {content.map((contentObj, i) => (
              <div key={i} style={{ marginBottom: "3rem" }}>
                <Typography
                  variant="h4"
                  color="textPrimary"
                  className={classes.bolderText}
                >
                  {contentObj.title}
                </Typography>

                {contentObj.contentArray.map((text, i) => (
                  <Typography
                    key={i}
                    variant="subtitle1"
                    color="texPrimary"
                    paragraph={true}
                    className={classes.paragraph}
                  >
                    {text}
                  </Typography>
                ))}
              </div>
            ))}

            <Typography
              variant="subtitle1"
              color="texPrimary"
              paragraph={true}
              className={classes.paragraph}
            >
              {content["paragraph3"]}
            </Typography>
          </Box>
        </Box>
      </Container>
    </section>
  );
}
