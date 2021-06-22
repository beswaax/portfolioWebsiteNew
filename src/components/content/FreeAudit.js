import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Image from "next/image";
import DoneIcon from "@material-ui/icons/Done";
import { useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    height: 512,
  },
  icon: {
    fontSize: 30,
    color: theme.palette.primary.main,
  },
  text: {
    fontWeight: 500,
  },
}));

export default function Content() {
  const classes = useStyles();
  const theme = useTheme();

  const content = {
    checked: [
      "Website Flaws Check",
      "SEO Check",
      "Critique Video",
      "Google Ranking Analytics",
      "Improvement Recommendation",
      "Delivered Under 24 Hours",
    ],
    image: "/assets/devices1.svg",
  };

  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <section>
      <Container maxWidth="lg">
        <Box py={20}>
          <Grid container spacing={8}>
            <Grid item xs={12} md={6}>
              <Image
                alt="a lady looking at a website and changing some things on the website"
                src={content["image"]}
                width={512}
                height={matchesSM ? 300 : 390}
                align={matchesSM ? "center" : "inherit"}
                data-aos="fade-up"
                layout={
                  matchesXS ? "responsive" : matchesSM ? "fixed" : "responsive"
                }
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Box display="flex" height="100%">
                <Box my="auto">
                  {content.checked.map((checked, i) => (
                    <Grid
                      key={i}
                      container
                      direction="row"
                      alignItems="center"
                      spacing={0}
                    >
                      <Box pb={2} px={2}>
                        <Grid item>
                          <DoneIcon className={classes.icon} />
                        </Grid>
                      </Box>
                      <Grid item>
                        <Typography
                          key={i}
                          variant="subtitle1"
                          color="textSecondary"
                          className={classes.text}
                          paragraph={true}
                        >
                          {checked}
                        </Typography>
                      </Grid>
                    </Grid>
                  ))}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
}
