import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Link from "../../Link";

const useStyles = makeStyles((theme) => ({
  section: {
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundColor: theme.palette.primary.main,
  },
  description: {
    color: theme.palette.background.secondary,
    fontWeight: 700,
  },
  actions: {
    [theme.breakpoints.up("md")]: {
      paddingLeft: theme.spacing(2),
    },
  },
  secondaryButton: {
    fontWeight: 600,
    borderBottomRightRadius: 0,
    color: theme.palette.primary.dark,
    backgroundColor: theme.palette.common.white,
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
    borderRadius: 0,
  },
  primaryAction: {
    marginRight: theme.spacing(2),
    borderRadius: 8,
    borderBottomRightRadius: 0,
    [theme.breakpoints.down("sm")]: {
      display: "block",
      marginRight: theme.spacing(0),
      marginBottom: theme.spacing(2),
    },
  },
}));

export default function CTA() {
  const classes = useStyles();

  const content = {
    description: "Lets talk about your next project",
    "primary-action": "BOOK YOUR FREE STRATEGY CALL",
  };

  return (
    <section className={classes.section}>
      <Container maxWidth="lg">
        <Box py={8} color="common.white">
          <Grid container spacing={4}>
            <Grid item xs={12} md={7}>
              <Typography variant="h4" className={classes.description}>
                {content["description"]}
              </Typography>
            </Grid>
            <Grid item xs={12} md={5}>
              <Box display="flex" height="100%" className={classes.actions}>
                <Box my="auto">
                  <Button
                    size="large"
                    component={Link}
                    disableRipple
                    disableTouchRipple
                    disableFocusRipple
                    href="https://calendly.com/rangojango/business-strategy-email"
                    variant="contained"
                    target="_blank"
                    color="primary"
                    className={classes.secondaryButton}
                  >
                    {content["primary-action"]}
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
}
