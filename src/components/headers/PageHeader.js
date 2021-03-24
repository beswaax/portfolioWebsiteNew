import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
//import { useTheme } from "@material-ui/styles";
//import { useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  section: {
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundColor: theme.palette.heavyBlue,
  },
  description: {
    color: theme.palette.background.secondary,
  },
  actions: {
    [theme.breakpoints.up("md")]: {
      paddingLeft: theme.spacing(2),
    },
  },
  primaryAction: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      display: "block",
      marginRight: theme.spacing(0),
      marginBottom: theme.spacing(2),
    },
  },
}));

export default function CTA({ text }) {
  const classes = useStyles();
  // const theme = useTheme();

  //  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <section className={classes.section}>
      <Container maxWidth="lg">
        <Box py={8}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={7}>
              <Typography variant="h2" className={classes.description}>
                {text}
              </Typography>
            </Grid>
            <Grid item xs={12} md={5}></Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
}
