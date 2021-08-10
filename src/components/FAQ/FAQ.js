import React, { useState } from "react";
import {
  Grid,
  useMediaQuery,
  makeStyles,
  useTheme,
  Typography,
  Box,
  Container,
} from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 1,
  },
  listItem: {
    backgroundColor: theme.palette.common.white,
    marginTop: "1rem",
    paddingTop: 20,
    paddingLeft: 14,
    paddingBottom: 20,
    borderRadius: 2,
    border: "1px solid lightgray",
    "&:hover": {
      backgroundColor: theme.palette.common.white,
    },
  },
  listeText: {
    fontWeight: 400,
    marginLeft: "0.5rem",
  },
  expand: {
    marginLeft: "auto",
    paddingRight: "1rem",
    color: theme.palette.primary.dark,
  },
  collapse: {
    borderRadius: 2,
    border: "1px solid lightgray",
    borderTop: "0",
    backgroundColor: theme.palette.common.white,
  },

  titleText: {
    fontWeight: 700,
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
  const [open5, setOpen5] = useState(false);

  const content = {
    title: "FAQ",
    subtitle:
      "Here are some of our most frequently asked questions and answers.",
  };

  const teamData = [
    {
      question: "Do you work internationally?",
      answer:
        "Yes, we provide all of our services internationally. We work with clients all over the world and can communicate by email, scheduled calls and Skype meetings",
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
        "We started our company in 2020, RangoDev is led by an experienced team of web development veterans with years of professional experience.",
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
    {
      question: "Do you really offer a refund?",
      answer:
        "If you are not satisfied with our work, we will give you a full refund on the entire project. No questions asked.",
      openPosition: open5,
      setOpenPosition: setOpen5,
    },
  ];

  return (
    <>
      <Box py={24}>
        <Grid
          container
          justify="center"
          direction="column"
          alignItems="center"
          data-aos="fade-up"
        >
          {/* Team List */}
          <Container maxWidth="lg">
            <Grid item style={{ width: "100%" }}>
              <Grid item>
                <Box pb={5}>
                  <Typography
                    variant="h3"
                    align="center"
                    color="textPrimary"
                    className={classes.titleText}
                  >
                    {content.title}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="textSecondary"
                    align="center"
                  >
                    {content.subtitle}
                  </Typography>
                </Box>
              </Grid>
              <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                className={classes.root}
              >
                {teamData.map((member, i) => {
                  return (
                    <div key={i}>
                      <ListItem
                        button
                        disableRipple
                        disableTouchRipple
                        disableGutters
                        onClick={() =>
                          member.setOpenPosition(!member.openPosition)
                        }
                        className={classes.listItem}
                      >
                        <Grid
                          container
                          direction={matchesTeam ? "column" : "row"}
                        >
                          <Grid item>
                            <Typography
                              variant="h6"
                              component="h4"
                              className={classes.listeText}
                            >
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
                          <ListItem
                            key={member.position}
                            className={classes.nested}
                          >
                            <Grid container direction="column">
                              <Grid item>
                                <Typography
                                  variant="body1"
                                  component="span"
                                  color="textSecondary"
                                >
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
          </Container>
        </Grid>
      </Box>
    </>
  );
}
