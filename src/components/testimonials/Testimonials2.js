import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  logo: {
    height: "4.5rem",
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  section: {
    backgroundColor: theme.palette.grey[200],
  },
}));

export default function Testimonials(props) {
  const classes = useStyles();

  const content = {
    header: "LOREM IPSUM DOLOR SIT AMET CONSECTUTAR",
    logo1: "/assets/ecomlogos/1.webp",
    logo2: "/assets/ecomlogos/4.webp",
    logo3: "/assets/ecomlogos/3.webp",
    logo4: "/assets/ecomlogos/2.webp",
    ...props.content,
  };

  return (
    <section className={classes.section}>
      <Container maxWidth="md">
        <Box py={0}>
          <Grid container spacing={2} alignItems="center" justify="center">
            <Grid item xs={6} sm={6} md={3} align="center">
              <img
                align="center"
                style={{ height: "3rem" }}
                src={content["logo1"]}
                alt=""
                className={classes.logo}
              />
            </Grid>
            <Grid item xs={6} sm={6} md={3} align="center">
              <img
                align="center"
                src={content["logo2"]}
                alt=""
                className={classes.logo}
              />
            </Grid>
            <Grid item xs={6} sm={6} md={3} align="center">
              <img
                align="center"
                src={content["logo3"]}
                alt=""
                className={classes.logo}
              />
            </Grid>
            <Grid item xs={6} sm={6} md={3} align="center">
              <img
                align="center"
                src={content["logo4"]}
                alt=""
                className={classes.logo}
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
}
