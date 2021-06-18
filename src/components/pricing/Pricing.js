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
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  section: {
    background: theme.palette.darkBlack,
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
    "&:hover": {
      backgroundColor: theme.palette.darkBlack,
      border: `4px solid ${theme.palette.primary.main}`,
      borderRadius: 0,
    },
  },
  mainText: {
    color: theme.palette.grey[200],
  },
  gridContainer: {
    transition: "transform 0.15s ease-in-out",
    "&:hover": { transform: "scale3d(1.03, 1.03, 1)" },
  },
}));

export default function Pricing(props) {
  const classes = useStyles();

  const content = {
    badge: "Grow your business with us",
    "header-p1": "Our Web Development & SEO",
    "header-p2": "Pricing",
    options: [
      {
        "01_title": "BRONZE",
        "title-color": "#70431C",
        "01_price": "$999",
        "01_suffix": " / One Time",
        description:
          "We will build a template WordPress website based on your sample provided.",
        benefits: [
          "Template Website",
          "Customization of Theme",
          "Front-end Development",
          "E-commerce",
          "Social Media Integration",
          "Mobile Responsive",
          "Google Maps",
          "Contact Form",
          "Photo Sourcing",
          "Strategy Session",
          "Basic Animations",
          "2 Rounds Of Revisions",
        ],
        "01_primary-action": "Start Your Project",
      },
      {
        "01_title": "SILVER",
        "title-color": "#BEBEC0",
        "01_price": "$1999",
        "01_suffix": " / One Time",
        benefits: [
          "Customized Template Website",
          "Front-end / Back-end Development",
          "E-commerce",
          "Custom Back-end System",
          "Social Media Integration",
          "Mobile Responsive",
          "Google Maps",
          "Contact Form",
          "Photo Sourcing",
          "Strategy Session",
          "Intermediate Animations",
          "SEO Optimized",
          "Google Analytics",
          "3 Rounds Of Revisions",
        ],
        "01_primary-action": "Start Your Project",
      },
      {
        "01_title": "GOLD",
        "title-color": "#FFCC33",
        "01_price": "$2999+",
        "01_suffix": " / One Time",
        benefits: [
          "Website from scratch",
          "Front-end / Back-end Development",
          "Custom website functionality",
          "E-commerce",
          "Custom Back-end System",
          "Social Media Integration",
          "Mobile Responsive",
          "Google Maps",
          "Contact Form",
          "Photo Sourcing",
          "Strategy Session",
          "Advanced Animations",
          "SEO Optimized",
          "Google Analytics",
          "3 Rounds Of Revisions",
        ],
        "01_primary-action": "Start Your Project",
      },
    ],
    ...props.content,
  };

  const [state, setState] = React.useState({
    checkbox: true,
  });

  const handleChange = (event) => {
    setState({ ...state, checkbox: event.target.checked });
  };

  return (
    <section className={classes.section}>
      <Container maxWidth="lg">
        <Box py={8} textAlign="center">
          <Box mb={9} color="common.white">
            <Container maxWidth="sm">
              <Typography
                variant="body1"
                color="primary"
                className={classes.badge}
              >
                {content["badge"]}
              </Typography>
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
