import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Image from "next/image";
import { useTheme } from "@material-ui/styles";
import { Fade, Grow, Hidden, useMediaQuery } from "@material-ui/core";

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
    "header-p1": "What Makes Us Different",
    description:
      "We launched RangoJango, as a response to the limited web development options available worldwide. Simply put, most traditional web design companies focus too much on the design of the website, while we focus on helping you grow your business. A beautiful website does not mean anything if it is not put to good use . We know first hand because we’ve been there. Our experience draws us to the most efficient solution – a solution that meets your needs and ours. We provide a fast, no nonsense turnaround.",
    image: "/assets/devices2.svg",
  };

  return (
    <section>
      <Container maxWidth="lg">
        <Box py={12}>
          <Grid container spacing={matchesXS ? 4 : 6}>
            <Hidden mdUp>
              <Grid item xs={12} md={6}>
                <Grow mountOnEnter in={true} timeout={1000}>
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
                </Grow>
              </Grid>
            </Hidden>
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
            <Hidden smDown>
              <Grid item xs={12} md={6}>
                <Grow in={true} mountOnEnter timeout={1000}>
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
                </Grow>
              </Grid>
            </Hidden>
          </Grid>
        </Box>
      </Container>
    </section>
  );
}
