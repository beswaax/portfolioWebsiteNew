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
    backgroundColor: theme.palette.primary.main,
    padding: 10,
    borderRadius: 1,
    fontSize: 22,
    [theme.breakpoints.down("xs")]: {
      borderRadius: 0,
    },
    color: theme.palette.primary.light,

    fontWeight: 500,
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
    backgroundColor: theme.palette.common.white,
    borderRadius: 0,
    color: theme.palette.text.secondary,
    border: `5px solid black`,
    transition: "background-color 0.5s ease-in-out, color 0.5s ease-in-out",
    "&:hover": {
      color: theme.palette.text.primary,
      fontWeight: 700,
      backgroundColor: theme.palette.primary.light,
    },
  },
  section: {
    backgroundColor: theme.palette.grey[100],
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
  descGridItem: {
    backgroundColor: theme.palette.grey[100],
  },
  title: {
    color: theme.palette.text.primary,
    fontWeight: 600,
  },
}));

export default function HowItWorks() {
  const classes = useStyles();
  const theme = useTheme();

  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const content = {
    "header-p1": "OUR SEAMLESS PROCESS",
    description:
      "We are a skilled and enthusiastic group of individuals who live and breathe eCommerce, website design and web development. All of our services are integrated to meet your specific company needs. We are the first to offer authentic and innovative web design, web development, and search engine optimization solutions.",
    "col1-header": "Discover",
    "col1-desc": "Timeline: 2 - 5 days",
    "col1-desc1":
      "1. You jump on an initial call and we will learn more about your business, goals, budget, timeline etc",
    "col1-desc2":
      "2. A proposal is sent which includes the scope of work, timeline, cost and some other technical info.",
    "col1-desc3":
      "3. Once the proposal is approved, an invoice is sent for the project's deposit (50%) and a contract to sign.",

    "col2-header": "Custom Strategy",
    "col2-desc": "Timeline: 2 - 14 days",
    "col2-desc1":
      "1. We discuss what you like and don't like, website goals, competitors, the design style and much more.",
    "col2-desc2":
      "2.We identify your ideal customer which helps us build a website that best suits your specific target audience.",
    "col2-desc3":
      "3. A Google Drive link is sent and you are required to submit any images, videos, brand assets etc.",

    "col3-header": "Build",
    "col3-desc": "Timeline: 2 - 4 weeks (longer if project is complex)",
    "col3-desc1":
      "1. We first build a content map/wireframe. This will show you what your website/web application will feature.",
    "col3-desc2":
      "2. If needed, we will design 2 key pages using your content in a way that guides your ideal user to an ultimate goal.",
    "col3-desc3":
      "3. The rest of your website/web application is developed according to the what was agreed upon.",

    "col4-header": "Delivery",
    "col4-desc": "Timeline: 1 - 3 days",
    "col4-desc1":
      "1. We have our final meeting and we give you a walkthrough your website explaining what we have implemented.",
    "col4-desc2":
      "2. We host your website on the fastest servers in the world (AWS) and we connect your new website to your domain.",
    "col4-desc3":
      "3. We then hit 'publish' and ta da. Congratulations, your new website is live!",
  };
  return (
    <section className={classes.section} data-aos="fade-up">
      <Container maxWidth="lg">
        <Box py={matchesXS ? 8 : 10} textAlign="center">
          <Box mb={8}>
            <Container maxWidth="md">
              <Typography
                variant="h3"
                component="h2"
                gutterBottom={true}
                align="center"
                className={classes.mainText}
                color="textPrimary"
              >
                {content["header-p1"]}
              </Typography>
              <Box>
                <Typography
                  align="center"
                  variant="subtitle1"
                  color="textPrimary"
                  paragraph={true}
                >
                  {" "}
                  {content["description"]}{" "}
                </Typography>
              </Box>
            </Container>
          </Box>
          <Grid container spacing={matchesSM ? 4 : 6}>
            <Grid item xs={12} sm={6}>
              <Box p={3} pb={4} className={classes.gridContainer}>
                <Box display="flex" justifyContent="center" mt={1} mb={2}>
                  <Avatar className={classes.number}>1</Avatar>
                </Box>
                <Typography
                  className={classes.mainText}
                  variant="h5"
                  component="h2"
                  color="textPrimary"
                >
                  {content["col1-header"]}
                </Typography>
                <Box mt={3}>
                  <Typography
                    variant="body1"
                    component="p"
                    align="left"
                    style={{ fontWeight: 600 }}
                    color="textPrimary"
                    gutterBottom={true}
                  >
                    {content["col1-desc"]}
                  </Typography>{" "}
                  <Typography
                    variant="body1"
                    component="p"
                    align="left"
                    gutterBottom={true}
                  >
                    {content["col1-desc1"]}
                  </Typography>
                  <Typography
                    variant="body1"
                    component="p"
                    align="left"
                    gutterBottom={true}
                  >
                    {content["col1-desc2"]}
                  </Typography>
                  <Typography
                    variant="body1"
                    component="p"
                    align="left"
                    gutterBottom={true}
                  >
                    {content["col1-desc3"]}
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box p={3} pb={4} className={classes.gridContainer}>
                <Box display="flex" justifyContent="center" mt={1} mb={2}>
                  <Avatar className={classes.number}>2</Avatar>
                </Box>
                <Typography
                  className={classes.mainText}
                  variant="h5"
                  component="h2"
                  color="textPrimary"
                >
                  {content["col2-header"]}
                </Typography>
                <Box mt={3}>
                  <Typography
                    variant="body1"
                    component="p"
                    align="left"
                    style={{ fontWeight: 600 }}
                    color="textPrimary"
                    gutterBottom={true}
                  >
                    {content["col2-desc"]}
                  </Typography>{" "}
                  <Typography
                    variant="body1"
                    component="p"
                    align="left"
                    gutterBottom={true}
                  >
                    {content["col2-desc1"]}
                  </Typography>
                  <Typography
                    variant="body1"
                    component="p"
                    align="left"
                    gutterBottom={true}
                  >
                    {content["col2-desc2"]}
                  </Typography>
                  <Typography
                    variant="body1"
                    component="p"
                    align="left"
                    gutterBottom={true}
                  >
                    {content["col2-desc3"]}
                  </Typography>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Box p={3} pb={4} className={classes.gridContainer}>
                <Box display="flex" justifyContent="center" mt={1} mb={2}>
                  <Avatar className={classes.number}>3</Avatar>
                </Box>
                <Typography
                  className={classes.mainText}
                  variant="h5"
                  component="h2"
                  color="textPrimary"
                >
                  {content["col3-header"]}
                </Typography>
                <Box mt={3}>
                  <Typography
                    variant="body1"
                    component="p"
                    align="left"
                    style={{ fontWeight: 600 }}
                    color="textPrimary"
                    gutterBottom={true}
                  >
                    {content["col3-desc"]}
                  </Typography>{" "}
                  <Typography
                    variant="body1"
                    component="p"
                    align="left"
                    gutterBottom={true}
                  >
                    {content["col3-desc1"]}
                  </Typography>
                  <Typography
                    variant="body1"
                    component="p"
                    align="left"
                    gutterBottom={true}
                  >
                    {content["col3-desc2"]}
                  </Typography>
                  <Typography
                    variant="body1"
                    component="p"
                    align="left"
                    gutterBottom={true}
                  >
                    {content["col3-desc3"]}
                  </Typography>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Box p={3} pb={4} className={classes.gridContainer}>
                <Box display="flex" justifyContent="center" mt={1} mb={2}>
                  <Avatar className={classes.number}>4</Avatar>
                </Box>
                <Typography
                  className={classes.mainText}
                  variant="h5"
                  component="h2"
                  color="textPrimary"
                >
                  {content["col4-header"]}
                </Typography>
                <Box mt={3}>
                  <Typography
                    variant="body1"
                    component="p"
                    align="left"
                    style={{ fontWeight: 600 }}
                    color="textPrimary"
                    gutterBottom={true}
                  >
                    {content["col4-desc"]}
                  </Typography>{" "}
                  <Typography
                    variant="body1"
                    component="p"
                    align="left"
                    gutterBottom={true}
                  >
                    {content["col4-desc1"]}
                  </Typography>
                  <Typography
                    variant="body1"
                    component="p"
                    align="left"
                    gutterBottom={true}
                  >
                    {content["col4-desc2"]}
                  </Typography>
                  <Typography
                    variant="body1"
                    component="p"
                    align="left"
                    gutterBottom={true}
                  >
                    {content["col4-desc3"]}
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
