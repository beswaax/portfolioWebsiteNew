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
}));

export default function Content(props) {
  const classes = useStyles();
  const theme = useTheme();

  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const content = {
    "header-p1": "Web Design & Development",
    description:
      "Having a website is a necessity in today’s business world. They give you one central, public location to let people know who you are, what you do, and why you’re the best at it. From simply having your hours posted to having a full fledged online store, making yourself as accessible as possible to users online drives growth and enables you to reach new customers.",
    image: "/assets/services1.svg",
  };

  return (
    <section className={classes.section}>
      <Container maxWidth="lg">
        <Box py={12}>
          <Grid container spacing={matchesXS ? 4 : 6}>
            <Hidden mdUp>
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
