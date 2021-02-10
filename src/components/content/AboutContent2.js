import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import Image from "next/image";
import { useTheme } from "@material-ui/styles";
import { Fade, Grow, useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    height: 512,
  },
}));

export default function Content(props) {
  const classes = useStyles();
  const theme = useTheme();

  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const content = {
    "header-p1": "What We Do",
    description:
      "RangoJango offers you professional web services at the best prices. We provide services like UI-UX design, web development and SEO to help you take your business to the next level. Our services do not stop at web design, we can also provide full e-Commerce solutions.",
    image: "/assets/devices9.svg",
  };

  return (
    <section>
      <Container maxWidth="lg">
        <Box py={12}>
          <Grid container spacing={matchesXS ? 4 : 6}>
            <Grid item xs={12} md={6}>
              <Fade in={true} timeout={1000}>
                <Image
                  src={content["image"]}
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
              </Fade>
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
                  <Typography
                    variant="subtitle1"
                    color="textSecondary"
                    paragraph={true}
                  >
                    Whether you are at the beginning of your business or already
                    in full development, our goal is to provide you with
                    personalized services that meet the needs of your business.
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
