import {
  Box,
  Container,
  Grid,
  Typography,
  makeStyles,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  text: {
    fontWeight: 300,
  },
  section: {
    backgroundColor: theme.palette.grey[200],
  },
}));

const ServicesContent1 = ({ content }) => {
  const classes = useStyles();

  return (
    <section className={classes.section}>
      <Container maxWidth="md">
        <Box py={5}>
          <Grid container justify="center" alignItems="center">
            <Grid item>
              <Typography
                className={classes.text}
                variant="h6"
                color="textPrimary"
                align="center"
              >
                {content.desc}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
};

export default ServicesContent1;
