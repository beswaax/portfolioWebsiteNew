import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import { CardContent } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  media: {
    width: "400px",
    height: "256px",
    maxWidth: 450,
    borderRadius: 0,
    border: `4px solid ${theme.palette.darkBlack}`,
    boxShadow: 0,
  },
  hover: {
    width: "400px",
    maxWidth: 450,
    borderRadius: 0,
    backgroundColor: "#F9FAFB",
    boxShadow: "none",
    transition: "transform 0.20s ease-in-out",
    "&:hover": {
      transform: "scale3d(1.05, 1.05, 1)",
    },
  },
  portfolio: {
    fontWeight: 900,
  },
}));

export default function Portfolio() {
  const classes = useStyles();

  const content = {
    header: "Portfolio",
    description:
      "Professional, dedicated, local. Dunder Mifflin is on its best patch to change the way you think about paper.",
    "01_image":
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
    "01_company": "Client: Realweb",
    "01_description":
      "Professional, dedicated, local. Dunder Mifflin is on its best patch to change the way you think about paper.",
    "02_image":
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    "02_company": "Client: Gitscape",
    "02_description":
      "That’s us - people who sell the limitless paper in the paperless world.",
  };

  return (
    <section>
      <Box pt={8} pb={10}>
        <Container maxWidth="md">
          <Box textAlign="center">
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Card className={classes.hover}>
                  <CardActionArea href="#">
                    <CardMedia
                      className={classes.media}
                      image={content["01_image"]}
                    />
                    <CardContent>
                      <Typography
                        variant="h5"
                        className={classes.portfolio}
                        color="textSecondary"
                        component="p"
                        align="center"
                        color="primary"
                      >
                        Fluvis Construction
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item xs={12} md={6}>
                <Card>
                  <CardMedia
                    className={classes.media}
                    image={content["02_image"]}
                  />
                  <CardHeader
                    title={content["02_company"]}
                    subheader={content["02_description"]}
                    titleTypographyProps={{ gutterBottom: true }}
                  />
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </section>
  );
}
