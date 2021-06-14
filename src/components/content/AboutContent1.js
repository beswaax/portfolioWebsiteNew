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
  mainText: {
    fontWeight: 700,
  },
}));

export default function Blog(props) {
  const classes = useStyles();

  const content = {
    date: "Jan 16, 2020",
    "header-p1": "Who we are",
    paragraph1:
      "We are a team of veteran designers and engineers. With years of experience in the industry, we are confident that we can solve any problem of any size. Our goal is to solve your business problems by doing what we do best.",
  };

  return (
    <section className={classes.section}>
      <Container maxWidth="md">
        <Box py={10}>
          <Box textAlign="center" mb={5}>
            <Container maxWidth="sm">
              <Box my={4}>
                <Typography
                  variant="h3"
                  className={classes.mainText}
                  component="h2"
                >
                  <Typography
                    className={classes.mainText}
                    variant="h3"
                    component="span"
                  >
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
