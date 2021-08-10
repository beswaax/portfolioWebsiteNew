import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Image from "next/image";
import { useTheme } from "@material-ui/styles";
import { useMediaQuery, Button } from "@material-ui/core";

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
  button: {
    borderRadius: 0,
    padding: 10,
  },
  image: {
    border: "3px solid black",
    [theme.breakpoints.down("sm")]: {
      maxWidth: 512,
    },
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
        <Box pt={matchesSM ? 6 : 10} pb={matchesXS ? 11 : 8}>
          <Grid container spacing={matchesXS ? 4 : 6}>
            <Grid item xs={12} md={6}>
              <Box display="flex" height="100%">
                <Box my="auto">
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
                  <Box pt={1}>
                    <Button
                      color="primary"
                      disableTouchRipple
                      disableRipple
                      href="https://calendly.com/rangodev/business-strategy-call"
                      target="_blank"
                      variant="contained"
                      className={classes.button}
                    >
                      {content.button}
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box className={classes.image} data-aos="fade-up">
                <Image
                  alt="minions editing a website"
                  src={content["image"]}
                  width={512}
                  quality={100}
                  height={matchesSM ? 650 : 680}
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
          </Grid>
        </Box>
      </Container>
    </section>
  );
}
