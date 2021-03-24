import React, { useState } from "react";
import {
  Grid,
  useMediaQuery,
  makeStyles,
  useTheme,
  Typography,
} from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 7,
  },
  listItem: {
    backgroundColor: "#FFFFFF",
    marginTop: "1rem",
    paddingTop: 20,
    paddingLeft: 14,
    paddingBottom: 20,
    borderRadius: 20,
    border: "1px solid lightgray",
    "&:hover": {
      backgroundColor: "#FFFFFF",
    },
  },
  listeText: {
    fontSize: "22px",
    lineHeight: "25px",
    fontFamily: "DM Sans, sans-serif",
    fontWeight: 400,
    color: "#44444",
    marginLeft: "0.5rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "21px",
      lineHeight: "22px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "19px",
      lineHeight: "22px",
    },
    color: "#222222",
    fontFamily: "DM Sans, sans-serif",
  },

  responseText: {
    fontSize: "17px",
    paddingBottom: 10,
    paddingLeft: 5,
    fontFamily: "DM Sans, sans-serif",
    lineHeight: "24px",
    color: "#6b6b6b",
    [theme.breakpoints.down("xs")]: {
      fontSize: 16,
    },
  },
  expand: {
    marginLeft: "auto",
    color: theme.palette.secondary.main,
  },
  collapse: {
    borderRadius: 20,
    border: "1px solid lightgray",
    borderTop: "0",
    backgroundColor: "#FFFFFF",
  },
  button: {
    backgroundColor: [theme.palette.common.redNice],
    "&:hover": {
      backgroundColor: [theme.palette.common.redNice],
    },
  },
}));

export default function Team() {
  const theme = useTheme();
  const classes = useStyles();

  const matchesTeam = useMediaQuery(
    theme.breakpoints.down(theme.breakpoints.teamTitle)
  );
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);

  const teamData = [
    {
      question: "Do you work internationally?",
      answer:
        "Yes, we provide all of our services internationally. We work with clients all over the world and can communicate by email, scheduled calls and Zoom meetings",
      openPosition: open1,
      setOpenPosition: setOpen1,
    },
    {
      question: "Do you work with new and small businesses?",
      answer:
        "Yes, we work with all types of businesses – new, small, to big corporations. We are excited to work and guide new businesses who are passionate about taking their first steps into an online presence and making their vision come to life.",
      openPosition: open2,
      setOpenPosition: setOpen2,
    },
    {
      question: "How long have you been in business?",
      answer:
        "We started our company in 2020, RangoJango is led by an experienced team of web development veterans with years of professional experience.",
      openPosition: open3,
      setOpenPosition: setOpen3,
    },

    {
      question: "How do we get started?",
      answer:
        "Contact us by email at office@rangojango.com with your website details (current or new project), page breakdown, and any sample websites to reference. Upon review, we will provide an estimate for your project or schedule a call to discuss further.",
      openPosition: open4,
      setOpenPosition: setOpen4,
    },
  ];

  return (
    <Grid
      container
      justify="center"
      direction="column"
      alignItems="center"
      style={{ marginTop: "3rem", paddingBottom: "10rem" }}
      data-aos="fade-up"
    >
      {/* Team List */}
      <Grid item style={{ maxWidth: "80rem", padding: 11, width: "100%" }}>
        <Grid item>
          <Typography variant="h3" align="center">
            FAQ
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" align="center">
            Here are some of our most frequently asked questions and answers.
          </Typography>
        </Grid>
        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          className={classes.root}
        >
          {teamData.map((member, i) => {
            return (
              <div key={member.question}>
                <ListItem
                  button
                  disableRipple
                  disableTouchRipple
                  disableGutters
                  onClick={() => member.setOpenPosition(!member.openPosition)}
                  className={classes.listItem}
                >
                  <Grid container direction={matchesTeam ? "column" : "row"}>
                    <Grid item>
                      <Typography className={classes.listeText}>
                        {member.question}
                      </Typography>
                    </Grid>
                  </Grid>
                  {member.openPosition ? (
                    <ExpandLess className={classes.expand} />
                  ) : (
                    <ExpandMore className={classes.expand} />
                  )}
                </ListItem>
                <Collapse
                  className={classes.collapse}
                  in={member.openPosition}
                  timeout="auto"
                  unmountOnExit
                >
                  <List component="div" disablePadding>
                    <ListItem key={member.position} className={classes.nested}>
                      <Grid container direction="column">
                        <Grid item>
                          <Typography className={classes.responseText}>
                            {member.answer}
                          </Typography>
                        </Grid>
                      </Grid>
                    </ListItem>
                  </List>
                </Collapse>
              </div>
            );
          })}
        </List>
      </Grid>
    </Grid>
  );
}
