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
}));

export default function Content(props) {
  const classes = useStyles();
  const theme = useTheme();

  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const content = {
    "header-p1": "SEO & Social Media",
    description:
      "SEO is the basis for any digital marketing plan. It builds trust, authority and prepares the ground for successful digital marketing strategies. But, SEO is a process, not an immediate solution. It takes time to build and execute a proper SEO strategy that pays off. How often have you ever been to the second page of Google results? Customers don’t go there either, so we make sure your website is designed to end up on top.",
    image: "/assets/services2.svg",
  };

  return (
    <section className={classes.section}>
      <Container maxWidth="lg">
        <Box py={12}>
          <Grid container spacing={matchesXS ? 4 : 6}>
            <Grid item xs={12} md={6}>
              <Image
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
                  <Typography variant="h3" component="h3" gutterBottom={true}>
                    <Typography variant="h3" component="span">
                      {content["header-p1"]}{" "}
                    </Typography>
                    <Typography variant="h3" component="span">
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
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
}
