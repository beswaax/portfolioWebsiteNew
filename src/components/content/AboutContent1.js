import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Grow from "@material-ui/core/Grow";

const useStyles = makeStyles((theme) => ({
  section: {
    marginBottom: "1rem",
    marginTop: "1rem",
  },
  name: {
    lineHeight: 1,
  },
  content: {
    [theme.breakpoints.up("md")]: {
      paddingLeft: theme.spacing(8),
      paddingRight: theme.spacing(8),
    },
  },
  paragraph: {
    marginBottom: theme.spacing(3),
  },
  image: {
    maxWidth: "100%",
    borderRadius: theme.shape.borderRadius,
  },
}));

export default function Blog(props) {
  const classes = useStyles();

  const content = {
    date: "Jan 16, 2020",
    "header-p1": "Who we are",
    paragraph1:
      "We are a team of developers and designers from all over Europe. Our company is still young, but we feel that we can provide one of the best experiences when it comes to helping you solve the problems of your business. Design is important, but at RangoJango we focus more on your business as a whole.",
  };

  return (
    <section className={classes.section}>
      <Container maxWidth="md">
        <Box py={10}>
          <Box textAlign="center" mb={5}>
            <Container maxWidth="sm">
              <Box my={4}>
                <Typography variant="h3" component="h2">
                  <Typography variant="h3" component="span">
                    {content["header-p1"]}{" "}
                  </Typography>
                </Typography>
              </Box>
            </Container>
          </Box>
          <Box className={classes.content}>
            <Typography
              align="center"
              variant="subtitle1"
              color="textSecondary"
              paragraph={true}
              className={classes.paragraph}
            >
              {content["paragraph1"]}
            </Typography>
          </Box>
        </Box>
      </Container>
    </section>
  );
}
