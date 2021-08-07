import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  section: {
    backgroundColor: theme.palette.darkBlack,
  },
  cardHeader: {
    paddingTop: theme.spacing(3),
  },
  text: {
    fontWeight: 700,
  },
  badge: {
    fontWeight: 500,
    marginBottom: "0.5rem",
  },
  cardContainer: {
    backgroundColor: theme.palette.darkBlack,
    border: `4px solid ${theme.palette.grey[600]}`,
    borderRadius: 0,
    transition: "transform 0.2s ease-in-out",
    "&:hover": {
      backgroundColor: theme.palette.darkBlack,
      border: `4px solid ${theme.palette.primary.main}`,
      borderRadius: 0,
      transform: "scale3d(1.03, 1.03, 1)",
    },
  },
  mainText: {
    color: theme.palette.grey[200],
  },
  gridContainer: {
    transition: "transform 0.3s ease-in-out",
    "&:hover": { transform: "scale3d(1.02, 1.02, 1)" },
  },
  primaryAction: {
    borderRadius: 0,
    // border: "3px solid white",
    "&:hover": {
      // border: `3px solid ${theme.palette.primary.dark}`,
    },
  },
}));

export default function Pricing({ content }) {
  const classes = useStyles();

  return (
    <section className={classes.section}>
      <Container maxWidth="lg">
        <Box py={8} textAlign="center">
          <Box mb={9} color="common.white">
            <Container maxWidth="sm">
              {content["badge"] ? (
                <Typography
                  variant="body1"
                  color="primary"
                  className={classes.badge}
                >
                  {content["badge"]}
                </Typography>
              ) : null}
              <Typography variant="h3" component="h2" gutterBottom={true}>
                <Typography
                  variant="h3"
                  className={classes.text}
                  component="span"
                >
                  {content["header-p1"]}{" "}
                </Typography>
                <Typography
                  variant="h3"
                  component="span"
                  className={classes.text}
                >
                  {content["header-p2"]}
                </Typography>
              </Typography>
            </Container>
          </Box>
          <Grid container spacing={3}>
            {content.options.map((option, i) => (
              <Grid
                item
                xs={12}
                md={4}
                key={i}
                className={classes.gridContainer}
              >
                <Card variant="outlined" className={classes.cardContainer}>
                  <CardHeader
                    style={{ color: option["title-color"] }}
                    title={option["01_title"]}
                    className={classes.cardHeader}
                  />{" "}
                  <CardContent>
                    <Box px={1}>
                      <Typography
                        variant="h3"
                        component="h2"
                        gutterBottom={true}
                        className={classes.mainText}
                      >
                        {option["01_price"]}
                      </Typography>
                      <ul>
                        {option.benefits.map((benefit, i) => (
                          <li key={i}>
                            <Box py={0.6}>
                              <Typography
                                key={i}
                                align="left"
                                variant="subtitle1"
                                component="p"
                                className={classes.mainText}
                              >
                                {benefit}
                              </Typography>
                            </Box>
                          </li>
                        ))}
                      </ul>
                    </Box>
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      align="left"
                      href="/contact"
                      disableTouchRipple
                      disableRipple
                      className={classes.primaryAction}
                    >
                      {option["01_primary-action"]}
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </section>
  );
}
