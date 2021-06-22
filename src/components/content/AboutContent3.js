import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Image from "next/image";
import { useTheme } from "@material-ui/styles";
import { Button, Hidden, useMediaQuery } from "@material-ui/core";
import Link from "../../Link";

const useStyles = makeStyles(() => ({
  card: {
    height: 512,
  },
  mainText: {
    fontWeight: 700,
  },
  button: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 20,
    paddingLeft: 20,
    borderRadius: 10,
    borderBottomRightRadius: 0,
  },
}));

export default function Content() {
  const classes = useStyles();
  const theme = useTheme();

  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const content = {
    badge: "#1 Web Development Agency in Vancouver",
    "header-p1": "Hungry to grow",
    "header-p2": "your business?",
    description:
      "We specialise in building custom websites and running SEO campaings. We can build anything from e-commerce to simple brochure websites. Hand-crafted and user friendly while providing innovative website development and digital marketing that delivers actual results. ",
    description2:
      "We launched RangoJango, as a response to the limited web development options available worldwide. Simply put, most traditional web agencies focus too much on the design of the website, while we focus on helping you grow your business. A beautiful website does not mean anything if it is not put to good use. We provide a fast, no nonsense turnaround.",
    image: "/assets/devices2.svg",
    button: "Get in touch",
  };

  return (
    <section>
      <Container maxWidth="lg">
        <Box py={25}>
          <Grid container spacing={matchesXS ? 4 : 6}>
            <Hidden mdUp>
              <Grid item xs={12} md={6}>
                <Image
                  alt="a lady looking at a website and changing some things on the website"
                  src={content["image"]}
                  width={512}
                  height={matchesSM ? 300 : 390}
                  align={matchesSM ? "center" : "inherit"}
                  data-aos="fade-up"
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
                    className={classes.mainText}
                    variant="subtitle1"
                    color="primary"
                    component="span"
                  >
                    {content.badge}
                  </Typography>
                  <Typography
                    className={classes.mainText}
                    variant="h3"
                    component="h3"
                    color="textPrimary"
                    gutterBottom={true}
                  >
                    <Typography
                      className={classes.mainText}
                      variant="h3"
                      color="textPrimary"
                      component="span"
                    >
                      {content["header-p1"]}{" "}
                    </Typography>
                    <br />
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
                  <Box>
                    <Button
                      component={Link}
                      href="/contact"
                      className={classes.button}
                      variant="outlined"
                      size="medium"
                      color="primary"
                      disableFocusRipple
                      disableRipple
                      disableTouchRipple
                    >
                      {content.button}
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Hidden smDown>
              <Grid item xs={12} md={6}>
                <Image
                  alt="a lady looking at a website and changing some things on the website"
                  src={content["image"]}
                  width={512}
                  height={matchesSM ? 300 : 390}
                  data-aos="fade-up"
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
