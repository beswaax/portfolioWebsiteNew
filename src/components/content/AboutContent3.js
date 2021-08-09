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
    borderRadius: 0,
    borderBottomRightRadius: 0,
  },
}));

export default function Content() {
  const classes = useStyles();
  const theme = useTheme();

  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const content = {
    badge: "#1 Web Design & Development Agency in Florida",
    "header-p1": "Hungry to grow",
    "header-p2": "your business?",
    description:
      "Welcome to RangoJango, a web design & development company based in Florida. We specialize in building custom websites, web applications and running SEO campaigns. We can build anything from e-commerce websites to complex web applications and simple brochure websites.",
    description2:
      "We launched RangoJango, as a response to the limited authentic web development options available in worldwide. We value your financial investment in your company's website and internet promotion. With a crucial focus on providing the best web design and web development solutions to our clients. Hand-crafted and user friendly while providing innovative website development and digital marketing that delivers actual results. ",
    description3:
      "We put our heart and soul into every project we work on, and we strive for perfection at all costs. Building long-term relationships with each of our clients is essential to us, and we collaborate closely to achieve incredible, but realistic, and measurable results.",
    image: "/assets/3.webp",
    button: "Get in touch",
  };

  return (
    <section>
      <Container maxWidth="lg">
        <Box py={15}>
          <Grid container spacing={matchesXS ? 4 : 6}>
            <Hidden mdUp>
              <Grid item xs={12} md={6}>
                <Image
                  alt="a worker doing web design work at our Florida office"
                  src={content["image"]}
                  width={512}
                  height={matchesSM ? 600 : 670}
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
                    color="textPrimary"
                    paragraph={true}
                  >
                    {content["description"]}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="textPrimary"
                    paragraph={true}
                  >
                    {content["description2"]}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="textPrimary"
                    paragraph={true}
                  >
                    {content["description3"]}
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
                  height={matchesSM ? 600 : 670}
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
