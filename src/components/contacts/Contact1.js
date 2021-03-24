import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Axios from "axios";
import {
  makeStyles,
  Snackbar,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  textField: {
    color: "black",
  },
}));

export default function Contact(props) {
  const theme = useTheme();
  const classes = useStyles();

  const [emailCorrect, setEmailCorrect] = useState(false);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [message, setMessage] = useState("");
  const [service, setService] = useState("");
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
      "https://us-central1-portfolio-site-c033a.cloudfunctions.net/sendMail",
      {
        params: {
          name: `${firstName + " " + lastName}`,
          email: email,
          message: message,
        },
      }
    )
      .then((res) => {
        setLoading(false);
        setMessage("");
        setFirstName("");
        setLastName("");
        setEmail("");
        setAlert({
          open: true,
          message: "Message sent successfully",
          backgroundColor: "#4BB543",
        });
      })
      .catch((err) => {
        setLoading(false);
        setMessage("");
        setFirstName("");
        setLastName("");
        setEmail("");
        setAlert({
          open: true,
          message: "Something went wrong, please try again!",
          backgroundColor: "#FF3232",
        });
      });
  };

  const content = {
    header: "Contact the team",
    description:
      "Use the form below to get in touch with us. We look forward to learning more about you and your business, and how we can help you achieve even greater success with our professional web services.",
    terms: "I agree to the terms of use and privacy policy.",
    "primary-action": "Submit",
  };
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <section style={{ paddingBottom: "5rem" }} data-aos="fade-up">
      <Container maxWidth="md">
        <Box pt={8} pb={10}>
          <Box mb={6} textAlign="center">
            <Typography
              align={matchesSM ? "center" : "left"}
              variant="h3"
              component="h2"
              gutterBottom={true}
            >
              {content["header"]}
            </Typography>
            <Typography
              align={matchesSM ? "center" : "left"}
              variant="subtitle1"
              color="textSecondary"
              paragraph={true}
            >
              {content["description"]}
            </Typography>
          </Box>
          <Box>
            <form>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    className={classes.textField}
                    variant="outlined"
                    required
                    color="textSecondary"
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
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="lastName"
                    value={lastName}
                    onChange={(e) => {
                      setLastName(e.target.value);
                    }}
                    id="lastName"
                    label="Last name"
                    autoComplete="lname"
                    style={{ color: "#000000" }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
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
                    variant="outlined"
                    required
                    multiline
                    rows={5}
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                    fullWidth
                    autoComplete="message"
                    name="message"
                    id="message"
                    label="Message"
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
                      message.length === 0 ||
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
          </Box>
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
        </Box>
      </Container>
    </section>
  );
}
