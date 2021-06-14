import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import Link from "../../Link";

const useStyles = makeStyles((theme) => ({
  section: {
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundColor: theme.palette.heavyBlue,
    paddingTop: theme.spacing(20),
    paddingBottom: theme.spacing(20),
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(25),
      paddingBottom: theme.spacing(25),
    },
    [theme.breakpoints.down("xs")]: {
      paddingTop: theme.spacing(16),
      paddingBottom: theme.spacing(16),
    },
  },
  description: {
    color: theme.palette.grey[400],
    fontWeight: 400,
  },
  primaryButton: {
    fontWeight: 500,
    borderBottomRightRadius: 0,
    color: theme.palette.common.white,

    backgroundColor: theme.palette.primary.dark,
    "&:hover": {
      color: theme.palette.common.white,
      backgroundColor: theme.palette.primary.dark,
    },
    marginRight: theme.spacing(2),
    paddingTop: 9,
    paddingBottom: 9,
    paddingRight: 19,
    paddingLeft: 19,
    borderRadius: 9,
    [theme.breakpoints.down("sm")]: {
      width: "90%",
      marginRight: theme.spacing(0),
      marginBottom: theme.spacing(2),
      paddingTop: 9,
      paddingBottom: 9,
      paddingRight: 0,
      paddingLeft: 0,
    },
  },
  secondaryButton: {
    fontWeight: 500,
    borderBottomRightRadius: 0,
    color: theme.palette.common.white,
    border: "2px solid gray",
    backgroundColor: theme.palette.heavyBlue,
    "&:hover": {
      color: theme.palette.primary.dark,
      backgroundColor: theme.palette.primary.light,
      fontWeight: 600,
    },
    marginRight: theme.spacing(2),
    paddingTop: 9,
    paddingBottom: 9,
    paddingRight: 19,
    paddingLeft: 19,
    borderRadius: 9,
    [theme.breakpoints.down("sm")]: {
      width: "90%",
      marginRight: theme.spacing(0),
      marginBottom: theme.spacing(2),
      paddingTop: 9,
      paddingBottom: 9,
      paddingRight: 0,
      paddingLeft: 0,
    },
  },
  extra: {
    color: theme.palette.primary.main,
  },
  title: {
    fontWeight: 700,
  },
}));

export default function Header(props) {
  const classes = useStyles();

  const content = {
    "header-p1": "We *build and *rank",
    "header-p2": "custom-built  sites",
    description:
      "We're your team of Web Development and SEO experts focused on increasing your revenue.",
    "primary-action": "Book A Strategy Call",
    "secondary-action": "Get a Free Website Audit",
    ...props.content,
  };

  return (
    <section className={classes.section}>
      <Container maxWidth="md">
        <Box textAlign="center" color="common.white">
          <Typography variant="h2" component="h1" gutterBottom={true}>
            <Typography variant="h2" component="span" className={classes.title}>
              We <span className={classes.extra}>*build</span> and{" "}
              <span className={classes.extra}>*rank</span> custom-built
              professional sites
            </Typography>
          </Typography>
          <Container maxWidth="sm">
            <Typography
              variant="h6"
              component="h2"
              color="textSecondary"
              paragraph={true}
              className={classes.description}
            >
              {content["description"]}
            </Typography>
          </Container>
          <Box mt={3}>
            <Button
              variant="contained"
              component={Link}
              fullWidth={false}
              disableRipple
              disableFocusRipple
              disableTouchRipple
              href="https://calendly.com/rangojango/business-strategy-email"
              target="_blank"
              className={classes.secondaryButton}
            >
              {content["primary-action"]}
            </Button>
            <Button
              variant="contained"
              component={Link}
              fullWidth={false}
              disableRipple
              disableFocusRipple
              disableTouchRipple
              href="/free-website-audit"
              className={classes.primaryButton}
            >
              {content["secondary-action"]}
            </Button>
          </Box>
        </Box>
      </Container>
    </section>
  );
}
