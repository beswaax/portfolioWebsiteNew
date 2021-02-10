import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import CodeIcon from "@material-ui/icons/Code";
import StorefrontTwoToneIcon from "@material-ui/icons/StorefrontTwoTone";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
import TrendingUpOutlinedIcon from "@material-ui/icons/TrendingUpOutlined";
import Avatar from "@material-ui/core/Avatar";

import ApartmentIcon from "@material-ui/icons/Apartment";
import { useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  section: {
    backgroundImage: 'url("nereus-assets/img/bg/pattern1.png")',
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    marginTop: "2rem",
  },
  container: {
    marginTop: "auto",
    marginBottom: "auto",
  },
  iconWrapper: {
    backgroundColor: "#D1FAE5",
    padding: 10,
    borderRadius: 10,
    [theme.breakpoints.down("xs")]: {
      padding: 8,
    },
    color: theme.palette.primary.main,
  },
  features: {
    [theme.breakpoints.down("md")]: {
      marginTop: theme.spacing(4),
    },
  },
  paper: {
    marginBottom: theme.spacing(3),
    backgroundColor: "#FFFFFF",
  },
  paperDown: {
    marginTop: -1 * theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      marginTop: theme.spacing(3),
    },
  },
}));

export default function Features(props) {
  const classes = useStyles();
  const theme = useTheme();

  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const content = {
    badge: "Motivated to be the best",
    "header-p1": "Our Services",
    "col1-header": "Web Development",
    "col1-desc":
      "Developing websites suitable for your digital needs. From company portfolios to sophisticated back-end systems.",
    "col2-header": "UI - UX Design",
    "col2-desc":
      "Designing interfaces for your mobile application, software or website. We make sure it looks perfect.",
    "col3-header": "e-Commerce",
    "col3-desc":
      "An online store has recently become an almost mandatory requirement for all types of businesses.",
    "col4-header": "SEO Optimization",
    "col4-desc":
      "We provide effective SEO optimization services for your site. Who doesn't want their site to rank first on Google?",
  };

  return (
    <section className={classes.section}>
      <Container maxWidth="lg">
        <Box py={6}>
          <Grid container spacing={matchesSM ? 4 : 6}>
            <Grid item xs={12} lg={12}>
              <Box display="flex" height="100%">
                <Container
                  align="center"
                  maxWidth="sm"
                  className={classes.container}
                >
                  <Typography
                    align="center"
                    variant="body1"
                    style={{ fontWeight: 700 }}
                    color="primary"
                  >
                    {content["badge"]}
                  </Typography>
                  <Typography
                    align="center"
                    variant="h3"
                    component="h2"
                    gutterBottom={true}
                  >
                    <Typography variant="h3" component="span">
                      {content["header-p1"]}
                    </Typography>
                  </Typography>
                </Container>
              </Box>
            </Grid>
            <Grid item xs={12} lg={12} className={classes.features}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <Paper variant="outlined" className={classes.paper}>
                    <Box p={3}>
                      <Box mb={2}>
                        <Avatar
                          variant="rounded"
                          className={classes.iconWrapper}
                        >
                          <CodeIcon />
                        </Avatar>
                      </Box>
                      <div>
                        <Typography
                          variant="h6"
                          component="h3"
                          gutterBottom={true}
                        >
                          {content["col1-header"]}
                        </Typography>
                        <Typography
                          variant="body2"
                          component="p"
                          color="textSecondary"
                        >
                          {content["col1-desc"]}
                        </Typography>
                      </div>
                    </Box>
                  </Paper>

                  <Paper variant="outlined" className={classes.paper}>
                    <Box p={3}>
                      <Box mb={2}>
                        <Avatar
                          variant="rounded"
                          className={classes.iconWrapper}
                        >
                          <CreateOutlinedIcon />
                        </Avatar>
                      </Box>
                      <div>
                        <Typography
                          variant="h6"
                          component="h3"
                          gutterBottom={true}
                        >
                          {content["col2-header"]}
                        </Typography>
                        <Typography
                          variant="body2"
                          component="p"
                          color="textSecondary"
                        >
                          {content["col2-desc"]}
                        </Typography>
                      </div>
                    </Box>
                  </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Paper variant="outlined" className={classes.paper}>
                    <Box p={3}>
                      <Box mb={2}>
                        <Avatar
                          variant="rounded"
                          className={classes.iconWrapper}
                        >
                          <StorefrontTwoToneIcon />
                        </Avatar>
                      </Box>
                      <div>
                        <Typography
                          variant="h6"
                          component="h3"
                          gutterBottom={true}
                        >
                          {content["col3-header"]}
                        </Typography>
                        <Typography
                          variant="body2"
                          component="p"
                          color="textSecondary"
                        >
                          {content["col3-desc"]}
                        </Typography>
                      </div>
                    </Box>
                  </Paper>

                  <Paper variant="outlined" className={classes.paper}>
                    <Box p={3}>
                      <Box mb={2}>
                        <Avatar
                          variant="rounded"
                          className={classes.iconWrapper}
                        >
                          <TrendingUpOutlinedIcon />
                        </Avatar>
                      </Box>
                      <div>
                        <Typography
                          variant="h6"
                          component="h3"
                          gutterBottom={true}
                        >
                          {content["col4-header"]}
                        </Typography>
                        <Typography
                          variant="body2"
                          component="p"
                          color="textSecondary"
                        >
                          {content["col4-desc"]}
                        </Typography>
                      </div>
                    </Box>
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
}
