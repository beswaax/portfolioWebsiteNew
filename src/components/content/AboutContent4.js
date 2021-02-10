import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Image from "next/image";
import { useTheme } from "@material-ui/styles";
import { useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    height: 512,
  },
}));

export default function Content(props) {
  const classes = useStyles();
  const theme = useTheme();

  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const content = {
    "header-p1": "How we got our name",
    description:
      "Rango comes from a well known animated movie by the same name and Jango comes from the character Jango Fett from the Star Wars movies.",
    image: "/assets/services2.svg",
  };

  return (
    <section>
      <Container maxWidth="lg">
        <Box py={12}>
          <Grid container spacing={8}>
            <Grid item xs={12} md={6}>
              <Image
                src={content["image"]}
                width={512}
                height={matchesSM ? 300 : 390}
                align={matchesSM ? "center" : "inherit"}
                layout={
                  matchesXS ? "responsive" : matchesSM ? "fixed" : "responsive"
                }
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Box display="flex" height="100%">
                <Box my="auto">
                  <Typography variant="h3" component="h3" gutterBottom={true}>
                    <Typography variant="h3" component="span">
                      {content["header-p1"]}{" "}
                    </Typography>
                    <Typography variant="h3" component="span">
                      {content["header-p2"]}
                    </Typography>
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="textSecondary"
                    paragraph={true}
                  >
                    {content["description"]}
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
