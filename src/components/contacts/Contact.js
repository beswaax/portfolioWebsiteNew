import React, { useState } from "react";
import {
  Grid,
  Typography,
  TextField,
  makeStyles,
  useTheme,
  useMediaQuery,
  MenuItem,
  Button,
  Snackbar,
} from "@material-ui/core";
import Axios from "axios";

const useStyles = makeStyles((theme) => ({
  textfield: {
    width: "95%",
    marginBottom: "1rem",
  },
  containerItem: {
    width: "100%",
  },
  button: {
    backgroundColor: "#F37B21",
    color: "white",
    "&:hover": {
      backgroundColor: "#F37B21",
      color: "white",
    },
  },
}));

const Contact = ({}) => {
  const classes = useStyles();
  const theme = useTheme();

  const [emailCorrect, setEmailCorrect] = useState(false);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [service, setService] = useState("");
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({
    open: false,
    message: "",
    backgroundColor: "",
  });

  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  const services = [
    {
      label: "Web Design",
    },
    {
      label: "Web Development",
    },
    {
      label: "SEO",
    },
    {
      label: "All of the Above",
    },
  ];

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
          name: name,
          email: email,
          phone: phone,
          service: service,
          message: message,
        },
      }
    )
      .then((res) => {
        setLoading(false);
        setMessage("");
        setName("");
        setEmail("");
        setPhone("");
        setService("");
        setAlert({
          open: true,
          message: "Message sent successfully",
          backgroundColor: "#4BB543",
        });
      })
      .catch((err) => {
        setLoading(false);
        setMessage("");
        setName("");
        setEmail("");
        setPhone("");
        setService("");
        setAlert({
          open: true,
          message: "Something went wrong, please try again!",
          backgroundColor: "#FF3232",
        });
      });
  };

  return (
    <Grid
      item
      container
      direction="column"
      alignItems="center"
      justify="center"
      style={{ marginBottom: "3rem", padding: 15 }}
    >
      {/*---Contact Us Text Block---*/}
      <Grid item style={{ maxWidth: "51rem" }}>
        <Typography
          variant="h3"
          align="center"
          style={{
            marginBottom: "1rem",
          }}
        >
          CONTACT US
        </Typography>
        <Typography
          variant="h5"
          style={{
            fontSize: "18px",
            lineHeight: "24px",
            fontFamily: "Open sans,sans-serif",
            color: "#646464",
          }}
          align="center"
        >
          Use the form below to get in touch with us. We look forward to
          learning more about you your business, and how we can help you achieve
          even greater success with our professional web services.
        </Typography>
      </Grid>

      {/*---Form Block---*/}
      <Grid
        item
        style={{ marginTop: "2rem", width: "100%", maxWidth: "40rem" }}
      >
        <Grid container direction="column" justify="center" alignItems="center">
          <Grid item className={classes.containerItem} align="center">
            <TextField
              label="Name"
              color="secondary"
              value={name}
              variant="outlined"
              onChange={(e) => {
                console.log(e.target.value);
                setName(e.target.value);
              }}
              className={classes.textfield}
            />
          </Grid>
          <Grid item className={classes.containerItem} align="center">
            <TextField
              color="secondary"
              label="Email"
              value={email}
              onChange={(e) => {
                console.log(e.target.value);
                setEmail(e.target.value);
              }}
              onChange={(e) => {
                if (e.target.value.match(regex) !== null) {
                  setEmailCorrect(true);
                }
                setEmail(e.target.value);
              }}
              variant="outlined"
              className={classes.textfield}
            />
          </Grid>

          <Grid item className={classes.containerItem} align="center">
            <TextField
              label="Phone"
              color="secondary"
              type="int"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              variant="outlined"
              className={classes.textfield}
            />
          </Grid>
          <Grid item className={classes.containerItem} align="center">
            <TextField
              select
              label="Select a Service"
              align="left"
              color="secondary"
              onChange={(e) => setService(e.target.value)}
              value={service}
              variant="outlined"
              className={classes.textfield}
            >
              {services.map((option) => (
                <MenuItem key={option.label} value={option.label}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item className={classes.containerItem} align="center">
            <TextField
              label="Tell us about your project"
              rows={4}
              multiline
              value={message}
              className={classes.textfield}
              onChange={(e) => setMessage(e.target.value)}
              color="secondary"
              variant="outlined"
            />
          </Grid>
          <Grid item align="center">
            {loading ? (
              <Button
                disableRipple
                variant="contained"
                variant="body3"
                disabled
                style={{ color: "black" }}
              >
                Sending...
              </Button>
            ) : (
              <Button
                disableRipple
                style={{ borderRadius: 0 }}
                onClick={onConfirm}
                disabled={
                  name.length < 1 ||
                  message.length < 1 ||
                  email.length < 1 ||
                  phone.length < 4 ||
                  emailCorrect === false ||
                  !email.includes("@") ||
                  !email.includes(".")
                }
                variant="contained"
                className={classes.button}
              >
                Send Message
              </Button>
            )}
          </Grid>
        </Grid>

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
      </Grid>
    </Grid>
  );
};

export default Contact;
