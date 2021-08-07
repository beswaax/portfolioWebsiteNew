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
    backgroundColor: "transparent",
    padding: 10,
    fontSize: "4rem",

    fontWeight: 800,
    [theme.breakpoints.down("xs")]: {
      borderRadius: 0,
    },
    color: theme.palette.grey[200],
    borderRadius: 0,
    alignContent: "left",
  },
  img: {
    maxWidth: 256,
    marginBottom: theme.spacing(2),
  },
  stepActive: {
    border: "1px solid",
    borderColor: theme.palette.background.secondary,
    borderRadius: 0,
  },
  gridContainer: {
    backgroundColor: "#00bc77",
    border: "5px solid white",
    paddingBottom: 35,
    paddingTop: 20,
  },
  section: {
    backgroundColor: theme.palette.darkBlackEasier,

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
    fontWeight: 600,
    color: theme.palette.common.white,
  },
  specialText: {
    color: theme.palette.primary.main,
  },
  desc: {
    color: theme.palette.grey[200],
  },
  desc2: {
    color: theme.palette.grey[100],
  },
  title: {
    color: theme.palette.grey[50],
    fontWeight: 600,
  },
}));

export default function HowItWorks() {
  const classes = useStyles();
  const theme = useTheme();

  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const content = {
    "header-p1": "WHY RANGOJANGO?",
    "header-p2": "sales",
    description:
      "We live and breathe Web Development and SEO. No really, we do. We offer you the best experience possible. We never give up until our customers are fully satisfied.",
    "col1-header": "Customer Focused",
    "col1-desc":
      "You and your business needs always come first. We treat you like one of our own. Our loyalty lies with you.",
    "col2-header": "Results Driven",
    "col2-desc":
      "Your goals are the forefront of our mind when executing your strategy. We reach your goals by all means necessary.",
    "col3-header": "Satisfaction Guarantee",
    "col3-desc":
      "Not satisfied with our work? We will give you a full refund on the entire project. No questions asked.",
    "col4-header": "Fully Transparent",
    "col4-desc":
      "Clear and open communication. Know exactly where we are with your project at any time.",
  };
  return (
    <section className={classes.section} data-aos="fade-up">
      <Container style={{ maxWidth: "60rem" }}>
        <Box py={10} textAlign="center">
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
                  className={classes.title}
                >
                  {content["header-p1"]}{" "}
                  {/* <span className={classes.specialText}>
                    {content["header-p2"]}
                  </span> */}
                </Typography>
              </Typography>
              {/* <Typography
                variant="subtitle1"
                paragraph={true}
                className={classes.desc}
              >
                {" "}
                {content["description"]}{" "}
              </Typography> */}
            </Container>
          </Box>
          <Grid container spacing={matchesSM ? 4 : 6}>
            <Grid item xs={12} md={6}>
              <Box p={3} pb={4} className={classes.gridContainer}>
                <Box display="flex" justifyContent="flex-start" mt={1} mb={4}>
                  <Avatar align="left" className={classes.number}>
                    1
                  </Avatar>
                </Box>
                <Typography
                  className={classes.mainText}
                  variant="h4"
                  align="left"
                  component="h2"
                  gutterBottom={true}
                >
                  {content["col1-header"]}
                </Typography>
                <Typography
                  variant="body1"
                  align="left"
                  component="p"
                  className={classes.desc2}
                >
                  {content["col1-desc"]}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box p={3} pb={4} className={classes.gridContainer}>
                <Box display="flex" justifyContent="flex-start" mt={1} mb={4}>
                  <Avatar className={classes.number}>2</Avatar>
                </Box>
                <Typography
                  className={classes.mainText}
                  variant="h4"
                  component="h2"
                  align="left"
                  gutterBottom={true}
                >
                  {content["col2-header"]}
                </Typography>
                <Typography
                  variant="body1"
                  align="left"
                  component="p"
                  className={classes.desc2}
                >
                  {content["col2-desc"]}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box p={3} pb={4} className={classes.gridContainer}>
                <Box display="flex" justifyContent="flex-start" mt={1} mb={4}>
                  <Avatar className={classes.number}>3</Avatar>
                </Box>
                <Typography
                  className={classes.mainText}
                  variant="h4"
                  component="h2"
                  align="left"
                  gutterBottom={true}
                >
                  {content["col3-header"]}
                </Typography>
                <Typography
                  variant="body1"
                  component="p"
                  className={classes.desc2}
                  align="left"
                >
                  {content["col3-desc"]}
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box p={3} pb={4} className={classes.gridContainer}>
                <Box display="flex" justifyContent="flex-start" mt={1} mb={4}>
                  <Avatar align="left" className={classes.number}>
                    4
                  </Avatar>
                </Box>
                <Typography
                  className={classes.mainText}
                  variant="h4"
                  align="left"
                  component="h2"
                  gutterBottom={true}
                >
                  {content["col4-header"]}
                </Typography>
                <Typography
                  variant="body1"
                  align="left"
                  component="p"
                  className={classes.desc2}
                >
                  {content["col4-desc"]}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
}
