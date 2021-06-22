import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";

import { useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  number: {
    backgroundColor: theme.palette.primary.light,
    padding: 10,
    borderRadius: 10,
    [theme.breakpoints.down("xs")]: {
      borderRadius: 8,
    },
    color: theme.palette.primary.dark,
  },
  img: {
    maxWidth: 256,
    marginBottom: theme.spacing(2),
  },
  stepActive: {
    border: "1px solid",
    borderColor: theme.palette.background.secondary,
    borderRadius: theme.shape.borderRadius,
  },
  gridCotainer: {
    backgroundColor: theme.palette.white,
  },
  section: {
    marginBottom: "5rem",
    marginTop: "4rem",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2rem",
      marginTop: "2rem",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "0rem",
      marginTop: "1rem",
    },
  },
  mainText: {
    fontWeight: 700,
  },
  specialText: {
    color: theme.palette.primary.main,
  },
}));

export default function HowItWorks() {
  const classes = useStyles();
  const theme = useTheme();

  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const content = {
    "header-p1": "3 steps to more",
    "header-p2": "sales",
    description:
      "We live and breathe Web Development and SEO. No really, we do. We offer you the best experience possbile. We never give up until our customers are fully satisfied.",
    "col1-header": "Phone Call",
    "col1-desc":
      "On the call we will get to know each other and discuss the needs of your business.",
    "col2-header": "Custom Strategy",
    "col2-desc":
      "We'll create a strategy focused on solving the problems your business may face.",
    "col3-header": "More Sales!",
    "col3-desc":
      "Start generating more traffic and more interest in your business today.",
  };
  return (
    <section className={classes.section} data-aos="fade-up">
      <Container maxWidth="lg">
        <Box py={21} textAlign="center">
          <Box mb={8}>
            <Container maxWidth="sm">
              <Typography
                variant="h3"
                component="h2"
                gutterBottom={true}
                className={classes.mainText}
              >
                <Typography
                  variant="h3"
                  component="span"
                  className={classes.mainText}
                  color="textPrimary"
                >
                  {content["header-p1"]}{" "}
                  <span className={classes.specialText}>
                    {content["header-p2"]}
                  </span>
                </Typography>
              </Typography>
              <Typography
                variant="subtitle1"
                color="textSecondary"
                paragraph={true}
              >
                {" "}
                {content["description"]}{" "}
              </Typography>
            </Container>
          </Box>
          <Grid container spacing={matchesSM ? 4 : 6}>
            <Grid item xs={12} md={4}>
              <Box p={3} pb={4} className={classes.gridCotainer}>
                <Box display="flex" justifyContent="center" mt={1} mb={4}>
                  <Avatar className={classes.number}>1</Avatar>
                </Box>
                <Typography
                  className={classes.mainText}
                  variant="h5"
                  component="h2"
                  gutterBottom={true}
                  color="textPrimary"
                >
                  {content["col1-header"]}
                </Typography>
                <Typography variant="body1" component="p" color="textSecondary">
                  {content["col1-desc"]}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box p={3} pb={4} className={classes.gridCotainer}>
                <Box display="flex" justifyContent="center" mt={1} mb={4}>
                  <Avatar className={classes.number}>2</Avatar>
                </Box>
                <Typography
                  className={classes.mainText}
                  variant="h5"
                  component="h2"
                  gutterBottom={true}
                  color="textPrimary"
                >
                  {content["col2-header"]}
                </Typography>
                <Typography variant="body1" component="p" color="textSecondary">
                  {content["col2-desc"]}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box p={3} pb={4} className={classes.gridCotainer}>
                <Box display="flex" justifyContent="center" mt={1} mb={4}>
                  <Avatar className={classes.number}>3</Avatar>
                </Box>
                <Typography
                  className={classes.mainText}
                  variant="h5"
                  component="h2"
                  gutterBottom={true}
                  color="textPrimary"
                >
                  {content["col3-header"]}
                </Typography>
                <Typography variant="body1" component="p" color="textSecondary">
                  {content["col3-desc"]}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
}
