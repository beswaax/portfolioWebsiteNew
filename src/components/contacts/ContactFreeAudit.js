import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Axios from "axios";
import { Snackbar, useTheme } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  halfLg: {
    [theme.breakpoints.up("lg")]: {
      maxWidth: theme.breakpoints.values["lg"] / 2,
    },
  },
  firstBox: {
    [theme.breakpoints.up("lg")]: {
      marginLeft: "auto",
      paddingRight: theme.spacing(6),
    },
  },
  secondBox: {
    [theme.breakpoints.up("lg")]: {
      paddingLeft: theme.spacing(6),
    },
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  text: {
    fontWeight: 700,
  },
  specialText: { color: theme.palette.primary.main },
  textField: {
    ["& fieldset"]: {
      borderRadius: 0,
    },
  },
}));

export default function Contact() {
  const classes = useStyles();
  const theme = useTheme();

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [website, setWebsite] = useState("");
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({
    open: false,
    message: "",
    backgroundColor: "",
  });

  const onConfirm = () => {
    //setLoading to true, so that when loading is true it will display a loading spinner instead of the text, you have to change that in the Button

    //after the request setLoading to false and show a snackbar

    //show error snackbar when there is an error.
    //show success snackbar after no error

    setLoading(true);
    Axios.get(
      "https://us-central1-portfolio-site-c033a.cloudfunctions.net/sendFreeAuditRequest",
      {
        params: {
          name: `${firstName + " " + lastName}`,
          email: email,
          website: website,
        },
      }
    )
      .then(() => {
        setLoading(false);
        setWebsite("");
        setFirstName("");
        setLastName("");
        setEmail("");
        setAlert({
          open: true,
          message: "Free audit request sent successfully",
          backgroundColor: theme.palette.success.main,
        });
      })
      .catch(() => {
        setLoading(false);
        setWebsite("");
        setFirstName("");
        setLastName("");
        setEmail("");
        setAlert({
          open: true,
          message: "Something went wrong, please try again!",
          backgroundColor: theme.palette.error.main,
        });
      });
  };

  const content = {
    badge: "Free Website Review",
    header: " Growth opportunities",
    header2: "for your",
    specialText: "business",
    description:
      "We take a deep dive into your website to sniff out growth opportunities for your business.",
    description2:
      "You'll receive several improvement recommendations and practical tips on what you can do to reach your goals. 100% free-of-charge!",
    "primary-action": "Submit",
  };

  return (
    <section>
      <Box pb={15} pt={2}>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Box py={6} display="flex">
              <Box className={[classes.halfLg, classes.firstBox]}>
                <Container>
                  <Typography
                    variant="body1"
                    color="primary"
                    className={classes.text}
                    paragraph={true}
                  >
                    {content.badge}
                  </Typography>

                  <Typography
                    className={classes.text}
                    variant="h3"
                    color="textPrimary"
                    component="h2"
                    gutterBottom={false}
                  >
                    {content["header"]}
                  </Typography>
                  <Typography
                    className={classes.text}
                    variant="h3"
                    color="textPrimary"
                    component="h2"
                    gutterBottom={true}
                  >
                    {content["header2"]}{" "}
                    <span className={classes.specialText}>
                      {content.specialText}
                    </span>
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="textPrimary"
                    paragraph={true}
                  >
                    {content["description"]}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="textPrimary"
                    paragraph={true}
                  >
                    {content["description2"]}
                  </Typography>
                </Container>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              py={10}
              display="flex"
              className={[classes.halfLg, classes.secondBox]}
            >
              <Container>
                <form>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        className={classes.textField}
                        variant="outlined"
                        required
                        color="primary"
                        fullWidth
                        autoComplete="fname"
                        name="firstName"
                        value={firstName}
                        onChange={(e) => {
                          setFirstName(e.target.value);
                        }}
                        id="firstName"
                        label="First name"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        className={classes.textField}
                        variant="outlined"
                        required
                        color="primary"
                        fullWidth
                        name="lastName"
                        value={lastName}
                        onChange={(e) => {
                          setLastName(e.target.value);
                        }}
                        id="lastName"
                        label="Last name"
                        autoComplete="lname"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        className={classes.textField}
                        variant="outlined"
                        required
                        color="primary"
                        fullWidth
                        name="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                        id="email"
                        label="Email address"
                        autoComplete="email"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        className={classes.textField}
                        variant="outlined"
                        required
                        color="primary"
                        value={website}
                        onChange={(e) => {
                          setWebsite(e.target.value);
                        }}
                        fullWidth
                        autoComplete="websiteUrl"
                        name="websiteUrl"
                        id="websiteUrl"
                        label="Website URL"
                      />
                    </Grid>
                  </Grid>
                  <Box my={2}>
                    {loading ? (
                      <Button
                        disableRipple
                        disableFocusRipple
                        fullWidth
                        disabled
                        align="center"
                        style={{ color: "black", backgroundColor: "#F7F7F7" }}
                      >
                        Sending...
                      </Button>
                    ) : (
                      <Button
                        disableRipple
                        disableFocusRipple
                        disabled={
                          email.length < 3 ||
                          firstName.length === 0 ||
                          lastName.length === 0 ||
                          website.length === 0 ||
                          email.includes("@") === false ||
                          email.includes(".") === false
                        }
                        onClick={onConfirm}
                        fullWidth
                        variant="contained"
                        color="primary"
                      >
                        {content["primary-action"]}
                      </Button>
                    )}
                  </Box>
                </form>
                <Snackbar
                  anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                  open={alert.open}
                  autoHideDuration={6000}
                  ContentProps={{
                    style: { backgroundColor: alert.backgroundColor },
                  }}
                  message={alert.message}
                  onClose={() =>
                    setAlert({ open: false, message: "", backgroundColor: "" })
                  }
                />
              </Container>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
}
