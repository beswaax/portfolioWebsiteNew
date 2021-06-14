import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Image from "next/image";
import { useTheme } from "@material-ui/styles";
import { Grow, Hidden, useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  section: {
    paddingTop: "3rem",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "2rem",
    },
    [theme.breakpoints.down("xs")]: {
      paddingTop: "0rem",
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
    badge: "Web Development & Web Design",
    "header-p1": "Convert more visitors into paying customers",
    description:
      "Having a website is a necessity in today’s business world. They give you one central, public location to let people know who you are, what you do, and why you’re the best at it.",
    description2:
      "From simply having your hours posted to having a full fledged online store, making yourself as accessible as possible to users online drives growth and enables you to reach new customers.",
    description3:
      "We ensure your website is optimised to convert the most amount of users into long-term customers for your business. Our expert team does this by implementing Conversion Rate Optimisation (CRO) which is the process of optimising your site or landing page experience based on website visitor behaviour to help improve the probability of the visitor taking desired actions (conversions) on your website. Whether that is to book a consultation, an enquiry, a form submission or a phone call.",
    image: "/assets/services1.svg",
  };

  return (
    <section className={classes.section}>
      <Container maxWidth="lg">
        <Box pt={matchesXS ? 16 : 22} pb={matchesXS ? 11 : 8}>
          <Grid container spacing={matchesXS ? 4 : 6}>
            <Hidden mdUp>
              <Grid item xs={12} md={6}>
                <Image
                  alt="minions editing a website"
                  src={content["image"]}
                  data-aos="fade-up"
                  width={512}
                  height={matchesSM ? 300 : 390}
                  align={matchesSM ? "center" : "inherit"}
                  layout={
                    matchesXS
                      ? "responsive"
                      : matchesSM
                      ? "fixed"
                      : "responsive"
                  }
                />
              </Grid>
            </Hidden>
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
                      variant="h3"
                      className={classes.mainText}
                      component="span"
                      color="textPrimary"
                    >
                      {content["header-p1"]}{" "}
                    </Typography>
                    <Typography
                      className={classes.mainText}
                      variant="h3"
                      component="span"
                      color="textPrimary"
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
            <Hidden smDown>
              <Grid item xs={12} md={6}>
                <Image
                  alt="minions editing a website"
                  src={content["image"]}
                  width={512}
                  data-aos="fade-up"
                  height={matchesSM ? 300 : 390}
                  align={matchesSM ? "center" : "inherit"}
                  layout={
                    matchesXS
                      ? "responsive"
                      : matchesSM
                      ? "fixed"
                      : "responsive"
                  }
                />
              </Grid>
            </Hidden>
          </Grid>
        </Box>
      </Container>
    </section>
  );
}
