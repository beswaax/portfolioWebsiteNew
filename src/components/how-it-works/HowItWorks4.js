import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import { Business } from "@material-ui/icons";
import { useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  number: {
    backgroundColor: "#D1FAE5",
    padding: 10,
    borderRadius: 10,
    [theme.breakpoints.down("xs")]: {
      borderRadius: 8,
    },
    color: theme.palette.secondary.main,
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
}));

export default function HowItWorks(props) {
  const classes = useStyles();
  const theme = useTheme();

  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const content = {
    "header-p1": "3 steps to more sales",
    description:
      "We live and breathe Web Development and SEO. No really, we do. We believe we can offer you the best experience possbile. We never give up until our customers are fully satisfied.",
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
        <Box py={10} textAlign="center">
          <Box mb={8}>
            <Container maxWidth="sm">
              <Typography variant="h3" component="h2" gutterBottom={true}>
                <Typography variant="h3" component="span">
                  {content["header-p1"]}{" "}
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
                <Typography variant="h6" component="h3" gutterBottom={true}>
                  {content["col1-header"]}
                </Typography>
                <Typography variant="body2" component="p" color="textSecondary">
                  {content["col1-desc"]}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box
                className={classes.stepActive}
                p={3}
                pb={4}
                className={classes.gridCotainer}
              >
                <Box display="flex" justifyContent="center" mt={1} mb={4}>
                  <Avatar className={classes.number}>2</Avatar>
                </Box>
                <Typography variant="h6" component="h3" gutterBottom={true}>
                  {content["col2-header"]}
                </Typography>
                <Typography variant="body2" component="p" color="textSecondary">
                  {content["col2-desc"]}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box p={3} pb={4} className={classes.gridCotainer}>
                <Box display="flex" justifyContent="center" mt={1} mb={4}>
                  <Avatar className={classes.number}>3</Avatar>
                </Box>
                <Typography variant="h6" component="h3" gutterBottom={true}>
                  {content["col3-header"]}
                </Typography>
                <Typography variant="body2" component="p" color="textSecondary">
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
