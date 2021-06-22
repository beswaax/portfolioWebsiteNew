import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import { useTheme } from "@material-ui/styles";
import { useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundColor: theme.palette.darkBlack,
  },
  card: {
    height: 512,
  },
  mainText: {
    fontWeight: 700,
  },
  text: {
    fontWeight: 400,
    color: theme.palette.primary.light,
  },
}));

export default function Content() {
  const classes = useStyles();
  const theme = useTheme();

  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const content = {
    "header-p1": "What We Do",
    "header-p2": "Why us? Let's cut to the chase...",
    description:
      "Our unique expertise in SEO is what sets up apart from others. ",
    description2: "You and your business needs always come first. ",
    description3:
      "Your goals are the forefront of our mind, we reach your goals by all means necessary.",
    description4:
      "Clear and open communication. Know exactly where we are with your project at anytime. ",
    description5: "Not satisfied with our work? We'll give you a full refund.",
    image: "/assets/devices9.svg",
  };

  return (
    <section className={classes.background}>
      <Container maxWidth="lg">
        <Box py={25}>
          <Grid container spacing={matchesXS ? 4 : 6}>
            <Grid item xs={12} md={6}>
              <Box display="flex" height="100%" color="common.white">
                <Box>
                  <Typography variant="h3" component="h3" gutterBottom={true}>
                    <Typography
                      className={classes.mainText}
                      variant="h3"
                      component="span"
                    >
                      {content["header-p2"]}{" "}
                    </Typography>
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box display="flex" height="100%" color="common.white">
                <Box my="auto">
                  <Typography
                    className={classes.text}
                    variant="h6"
                    paragraph={true}
                  >
                    {content["description"]}
                  </Typography>
                  <Typography
                    variant="h6"
                    className={classes.text}
                    paragraph={true}
                  >
                    {content.description2}
                  </Typography>
                  <Typography
                    variant="h6"
                    className={classes.text}
                    paragraph={true}
                  >
                    {content.description3}
                  </Typography>{" "}
                  <Typography
                    variant="h6"
                    className={classes.text}
                    paragraph={true}
                  >
                    {content.description4}
                  </Typography>
                  <Typography
                    variant="h6"
                    className={classes.text}
                    paragraph={true}
                  >
                    {content.description5}
                  </Typography>{" "}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
}
