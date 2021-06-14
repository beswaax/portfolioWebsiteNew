import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Image from "next/image";
import { useTheme } from "@material-ui/styles";
import { Grow, useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  section: {
    paddingBottom: "5rem",
    [theme.breakpoints.down("sm")]: {
      paddingBottom: "3rem",
    },
    [theme.breakpoints.down("xs")]: {
      paddingBottom: "0rem",
    },
  },
  mainText: {
    fontWeight: 700,
  },
}));

export default function Content(props) {
  const classes = useStyles();
  const theme = useTheme();

  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const content = {
    badge: "SEO and Digital Marketing",
    "header-p1": "Drive high quality traffic to your website",
    description2:
      "SEO is the basis for any digital marketing plan. It builds trust, authority and prepares the ground for successful digital marketing strategies. But, SEO is a process, not an immediate solution. It takes time to build and execute a proper SEO strategy that pays off.",
    description3:
      "We drive your ideal customers to your website by targeting keywords that your unique customers will search. Like that, you'll attract the correct audience and have the highest chances of converting them into long-term customers.",
    description:
      "How often have you ever been to the second page of Google results? Customers don’t go there either, so we make sure your website is designed to end up on top.",
    image: "/assets/services2.svg",
  };

  return (
    <section className={classes.section}>
      <Container maxWidth="lg">
        <Box pt={matchesXS ? 16 : 22} pb={matchesXS ? 11 : 9}>
          <Grid container spacing={matchesXS ? 4 : 6}>
            <Grid item xs={12} md={6}>
              <Image
                alt="a picture showing the logos of yandex, google, yahoo and bing"
                src={content["image"]}
                width={512}
                data-aos="fade-up"
                height={matchesSM ? 300 : 300}
                align={matchesSM ? "center" : "inherit"}
                layout={
                  matchesXS ? "responsive" : matchesSM ? "fixed" : "responsive"
                }
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Box display="flex" height="100%">
                <Box my="auto">
                  <Typography
                    align="left"
                    variant="body1"
                    className={classes.mainText}
                    color="primary"
                  >
                    {content["badge"]}
                  </Typography>
                  <Typography variant="h3" component="h3" gutterBottom={true}>
                    <Typography
                      className={classes.mainText}
                      variant="h3"
                      color="textPrimary"
                      component="span"
                    >
                      {content["header-p1"]}{" "}
                    </Typography>
                    <Typography
                      className={classes.mainText}
                      variant="h3"
                      color="textPrimary"
                      component="span"
                    >
                      {content["header-p2"]}
                    </Typography>
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="textSecondary"
                    paragraph={true}
                  >
                    {content["description"]}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="textSecondary"
                    paragraph={true}
                  >
                    {content["description2"]}
                  </Typography>

                  <Typography
                    variant="subtitle1"
                    color="textSecondary"
                    paragraph={true}
                  >
                    {content["description3"]}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
}
