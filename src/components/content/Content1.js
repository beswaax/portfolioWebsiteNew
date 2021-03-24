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

const useStyles = makeStyles((theme) => ({
  card: {
    height: 512,
  },
  cardContainer: {
    backgroundColor: "#F9FAFB",
    boxShadow: "none",
  },
  button: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 20,
    paddingLeft: 20,
    borderRadius: 10,
  },
}));

export default function Content(props) {
  const classes = useStyles();
  const theme = useTheme();

  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const content = {
    "header-p1": "More than just a",
    "header-p2": "web company",
    description:
      "At RangoJango we focus on solving the real problems your business might be facing, be it increasing sales, increasing visiblity or targeting the right clients.",
    "primary-action": "Learn More",
    image: "/assets/devices8.svg",
  };

  return (
    <section data-aos="fade-up">
      <Container maxWidth="lg">
        <Box py={12}>
          <Grid container spacing={2}>
            <Hidden mdUp>
              <Grid
                style={{ backgroundColor: "#F9FAFB" }}
                item
                xs={12}
                md={6}
                align="center"
                sm={12}
              >
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
                    <br />
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
                    We truly care about our customers! We take the time to fully
                    understand what solutions are required for your business.
                  </Typography>
                  <Box mt={3}>
                    <Button
                      component={Link}
                      href="/about"
                      className={classes.button}
                      variant="contained"
                      color="primary"
                    >
                      {content["primary-action"]}
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Hidden smDown>
              <Grid
                style={{ backgroundColor: "#F9FAFB" }}
                item
                xs={12}
                md={6}
                sm={12}
              >
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
          </Grid>
        </Box>
      </Container>
    </section>
  );
}
