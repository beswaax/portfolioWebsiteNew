import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Image from "next/image";
import { useTheme } from "@material-ui/styles";
import { Button, Hidden, useMediaQuery } from "@material-ui/core";

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
  button: {
    borderRadius: 0,
    padding: 10,
  },
  image: {
    border: "3px solid black",
  },
}));

export default function Content({ content }) {
  const classes = useStyles();
  const theme = useTheme();

  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <section className={classes.section}>
      <Container maxWidth="lg">
        <Box pt={matchesXS ? 1 : matchesSM ? 4 : 15} pb={matchesXS ? 6 : 7}>
          <Grid container spacing={matchesXS ? 4 : 6}>
            <Hidden smDown>
              <Grid item xs={12} md={6}>
                <Box className={classes.image} data-aos="fade-up">
                  <Image
                    quality={100}
                    alt="minions editing a website"
                    src={content["image"]}
                    width={512}
                    height={matchesSM ? 670 : 685}
                    align={matchesSM ? "center" : "inherit"}
                    layout={
                      matchesXS
                        ? "responsive"
                        : matchesSM
                        ? "fixed"
                        : "responsive"
                    }
                  />
                </Box>
              </Grid>
            </Hidden>

            <Grid item xs={12} md={6}>
              <Box display="flex" height="100%">
                <Box my="auto">
                  {/* <Typography
                    align="left"
                    variant="body1"
                    className={classes.mainText}
                    color="primary"
                  >
                    {content["badge"]}
                  </Typography> */}
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
                    color="textPrimary"
                    paragraph={true}
                  >
                    {content["description1"]}
                  </Typography>
                  {content.description2 ? (
                    <Typography
                      variant="subtitle1"
                      color="textPrimary"
                      paragraph={true}
                    >
                      {content["description2"]}
                    </Typography>
                  ) : null}
                  {content.description3 ? (
                    <Typography
                      variant="subtitle1"
                      color="textPrimary"
                      paragraph={true}
                    >
                      {content["description3"]}
                    </Typography>
                  ) : null}
                  {content.industries ? (
                    <Box>
                      <Grid container justify="flex-start" alignItems="center">
                        <Grid item>
                          <ul>
                            {content.industries.map((industry, i) => {
                              return (
                                <li key={i}>
                                  <Typography
                                    variant="body1"
                                    color="textPrimary"
                                  >
                                    {industry}
                                  </Typography>
                                </li>
                              );
                            })}
                          </ul>
                        </Grid>

                        <Box pl={matchesXS ? 0 : 10}>
                          <Grid item>
                            <ul>
                              {content.industries2.map((industry, i) => {
                                return (
                                  <li key={i}>
                                    <Typography
                                      variant="body1"
                                      color="textPrimary"
                                    >
                                      {industry}
                                    </Typography>
                                  </li>
                                );
                              })}
                            </ul>
                          </Grid>
                        </Box>
                      </Grid>
                    </Box>
                  ) : null}
                  <Box pt={2}>
                    <Button
                      className={classes.button}
                      color="primary"
                      variant="outlined"
                      href="https://calendly.com/rangojango/business-strategy-email"
                      target="_blank"
                      disableTouchRipple
                      disableRipple
                    >
                      {content.button}{" "}
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
}

// const content = {
//   badge: "SEO and Digital Marketing",
//   "header-p1": "Drive high quality traffic to your website",
//   description2:
//     "SEO is the basis for any digital marketing plan. It builds trust, authority and prepares the ground for successful digital marketing strategies. But, SEO is a process, not an immediate solution. It takes time to build and execute a proper SEO strategy that pays off.",
//   description3:
//     "We drive your ideal customers to your website by targeting keywords that your unique customers will search. Like that, you'll attract the correct audience and have the highest chances of converting them into long-term customers.",
//   description:
//     "How often have you ever been to the second page of Google results? Customers don’t go there either, so we make sure your website is designed to end up on top.",
//   image: "/assets/services2.svg",
// };
