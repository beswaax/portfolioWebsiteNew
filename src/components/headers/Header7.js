import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Link from "../../Link";
import { Fade, useMediaQuery } from "@material-ui/core";
import Image from "next/image";

const useStyles = makeStyles((theme) => ({
  section: {
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  primaryAction: {
    marginRight: theme.spacing(2),
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 20,
    paddingLeft: 20,
    borderRadius: 10,
    [theme.breakpoints.down("sm")]: {
      width: "90%",
      marginRight: theme.spacing(0),
      marginBottom: theme.spacing(2),
      paddingTop: 10,
      paddingBottom: 10,
      paddingRight: 0,
      paddingLeft: 0,
    },
  },
  img: {
    maxWidth: "100%",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "80%",
    },
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const theme = useTheme();

  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const content = {
    "header-p1": "Grow & Expand",
    "header-p2": "your business.",
    description:
      "We offer affordable Web Development & Web Design solutions. Take your business to the next level with us.",
    "primary-action": "Book Consultation",
    "secondary-action": "Learn More",
    pattern: "assets/background/lines.svg",
    image: "/assets/devices7.svg",
    ...props.content,
  };

  return (
    <section
      className={classes.section}
      style={{
        backgroundColor: theme.palette.heavyBlue,
        backgroundImage: matchesSM ? null : `url("${content["pattern"]}")`,
      }}
    >
      <Container maxWidth="lg">
        <Box pt={8} pb={6}>
          <Grid
            container
            direction={matchesSM ? "column" : "inherit"}
            justify={matchesSM ? "center" : "inherit"}
            alignItems={matchesSM ? "center" : "inherit"}
            spacing={4}
          >
            <Grid item xs={12} md={6}>
              <Box display="flex" height="100%">
                <Box my="auto">
                  <Container maxWidth="sm">
                    <Typography
                      align={matchesSM ? "center" : "inherit"}
                      variant="h3"
                      component="h2"
                      gutterBottom={true}
                    >
                      <Typography
                        variant="h3"
                        component="span"
                        style={{ color: "#FFFFFF" }}
                      >
                        {content["header-p1"]}{" "}
                      </Typography>
                      <br />
                      <Typography
                        variant="h3"
                        component="span"
                        style={{ color: "#FFFFFF" }}
                      >
                        your{" "}
                        <span style={{ color: theme.palette.primary.main }}>
                          business
                        </span>
                      </Typography>
                    </Typography>
                    <Typography
                      align={matchesSM ? "center" : "inherit"}
                      variant="subtitle1"
                      style={{ color: theme.palette.text.lighterGray }}
                    >
                      {content["description"]}
                    </Typography>
                    <Box mt={3} align={matchesSM ? "center" : "inherit"}>
                      <Button
                        variant="contained"
                        color="primary"
                        component={Link}
                        href="/contact"
                        className={classes.primaryAction}
                      >
                        {content["primary-action"]}
                      </Button>
                      <Button
                        variant="contained"
                        component={Link}
                        href="/about"
                        style={{
                          color: theme.palette.white,
                          border: "2px solid gray",
                          backgroundColor: theme.palette.heavyBlue,
                        }}
                        className={classes.primaryAction}
                      >
                        {content["secondary-action"]}
                      </Button>
                    </Box>
                  </Container>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Fade in={true} timeout={1000}>
                <Image
                  src={content["image"]}
                  width={512}
                  className={classes.img}
                  height={matchesSM ? 370 : 390}
                  align={matchesSM ? "center" : "inherit"}
                  layout={matchesXS ? "" : matchesSM ? "fixed" : "responsive"}
                />
              </Fade>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
}
