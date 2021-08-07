import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Link from "../../Link";
import Image from "next/image";
import { Grow, Hidden, useMediaQuery, useTheme } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  card: {
    height: 512,
  },
  cardContainer: {
    boxShadow: "none",
  },
  button: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 20,
    paddingLeft: 20,
    borderRadius: 0,
  },
  text: {
    fontWeight: 700,
  },
}));

export default function Content() {
  const classes = useStyles();
  const theme = useTheme();

  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const content = {
    badge: "Pixel perfect websites/web apps | Vancouver",
    "header-p1": "Grow your business",
    "header-p2": "with RangoJango.",
    description:
      "At RangoJango we focus on solving the real problems your business might be facing, be it increasing sales, increasing visibility or targeting the right clients. We increase revenue and ensure sustainable long-term growth for your business through powerful custom-built websites/web applications.",
    description2:
      "With specialties ranging from web design and development to app development, SEO and ecommerce development. Our talented team delivers innovative strategies and recognizable results. We aren’t afraid to let our imaginations run wild.",
    description3:
      "Don't settle for anything less than perfect. We guarantee perfect results and set realistic expectations from the very start, so you know what to results to expect without any disappointments.",
    "primary-action": "Learn More",
    image: "/assets/1.webp",
  };

  return (
    <section data-aos="fade-up">
      <Container maxWidth="lg">
        <Box
          pt={matchesXS ? 0 : matchesSM ? 2 : 10}
          pb={matchesXS ? 6 : matchesSM ? 6 : 16}
        >
          <Grid container spacing={2}>
            <Hidden mdUp>
              <Grid item xs={12} md={6} align="center" sm={12}>
                <Grow mountOnEnter in={true} timeout={1000}>
                  <Image
                    alt="a worker building a new ecommerce website for a client at our Vancouver office"
                    src={content["image"]}
                    width={512}
                    height={matchesSM ? 600 : 670}
                    align={matchesSM ? "center" : "inherit"}
                    layout={
                      matchesXS
                        ? "responsive"
                        : matchesSM
                        ? "fixed"
                        : "responsive"
                    }
                  />
                </Grow>
              </Grid>
            </Hidden>
            <Grid item xs={12} md={6}>
              <Box display="flex" height="100%">
                <Box my="auto">
                  <Typography
                    variant="subtitle1"
                    component="span"
                    color="primary"
                    className={classes.text}
                  >
                    {content.badge}
                  </Typography>
                  <Typography variant="h3" component="h3" gutterBottom={true}>
                    <Typography
                      variant="h3"
                      component="span"
                      color="textPrimary"
                      className={classes.text}
                    >
                      {content["header-p1"]}{" "}
                    </Typography>
                    <br />
                    <Typography
                      variant="h3"
                      component="span"
                      color="textPrimary"
                      className={classes.text}
                    >
                      {content["header-p2"]}
                    </Typography>
                  </Typography>
                  <Typography
                    variant="body1"
                    color="textPrimary"
                    paragraph={true}
                  >
                    {content["description"]}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="textPrimary"
                    paragraph={true}
                  >
                    {content["description2"]}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="textPrimary"
                    paragraph={true}
                  >
                    {content["description3"]}
                  </Typography>
                  <Box mt={3}>
                    <Button
                      component={Link}
                      href="/about"
                      className={classes.button}
                      variant="outlined"
                      size="medium"
                      color="primary"
                    >
                      {content["primary-action"]}
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Hidden smDown>
              <Grid item xs={12} md={6} sm={12}>
                <Image
                  alt="a worker building a new ecommerce website for a client at our Vancouver office"
                  src={content["image"]}
                  width={512}
                  height={matchesSM ? 600 : 670}
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
