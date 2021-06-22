import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Link from "../../Link";

const useStyles = makeStyles((theme) => ({
  section: {
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundColor: theme.palette.heavyBlue,
    marginBottom: "3rem",
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
    borderRadius: 8,
    color: theme.palette.grey[300],
    borderBottomRightRadius: 0,
    [theme.breakpoints.down("sm")]: {
      display: "block",
      marginRight: theme.spacing(0),
      marginBottom: theme.spacing(2),
    },
  },
}));

export default function CTA() {
  const classes = useStyles();

  const content = {
    description:
      "Whether you're a dentist from Vancouver or a construction company from London, we achieve great results for everyone!",
    "primary-action": "BOOK CONSULTATION",
  };

  return (
    <section className={classes.section}>
      <Container maxWidth="lg">
        <Box py={8} color="common.white">
          <Grid container spacing={4}>
            <Grid item xs={12} md={7}>
              <Typography variant="h5" className={classes.description}>
                {content["description"]}
              </Typography>
            </Grid>
            <Grid item xs={12} md={5}>
              <Box display="flex" height="100%" className={classes.actions}>
                <Box my="auto">
                  <Button
                    size="large"
                    component={Link}
                    disableRipple
                    disableTouchRipple
                    disableFocusRipple
                    href="https://calendly.com/rangojango/business-strategy-email"
                    variant="outlined"
                    target="_blank"
                    color="primary"
                    className={classes.primaryAction}
                  >
                    {content["primary-action"]}
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
}
