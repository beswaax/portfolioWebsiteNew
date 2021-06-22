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
  const [open6, setOpen6] = useState(false);
  const [open7, setOpen7] = useState(false);
  const [open8, setOpen8] = useState(false);
  const [open9, setOpen9] = useState(false);

  const content = {
    title: "FAQ",
    subtitle:
      "Here are some of our most frequently asked questions and answers.",
  };

  const teamData = [
    {
      question: "How much do you charge to build a website?",
      answer:
        "There is no single answer to this question. Use the prices above to get an idea of what your website might cost. A quote will be given based on the requirements of each individual project. Every website is unique and requires different components; we design and develop custom websites specifically for your company. We will ask lots of questions, evaluate your needs, and provide you with a price quote based on this evaluation.",
      openPosition: open1,
      setOpenPosition: setOpen1,
    },
    {
      question: "How long will it take to complete my website?",
      answer:
        "Our standard time to complete a website is 2-6 weeks. However, this depends on the project as the size and pace of a project is determined by each client. How much input you can give in the early stages, your feedback, how quickly the content is delivered - all of these affect the speed of completion. The required features and revisions also play a role in your timeline.",
      openPosition: open2,
      setOpenPosition: setOpen2,
    },
    {
      question: "Do you provide website hosting and domain?",
      answer:
        "We encourage you to be responsible for hosting the website and the domain. This will ensure that you have full access to your website. However, we can also handle it ourselves.",
      openPosition: open3,
      setOpenPosition: setOpen3,
    },
    {
      question: "Will my website be mobile-friendly?",
      answer:
        "Yes! A mobile-friendly website is more important than ever! We work hard to ensure your website is responsive on modern devices and browsers.",
      openPosition: open4,
      setOpenPosition: setOpen4,
    },
    {
      question: "Do you create WordPress / Webflow websites?",
      answer:
        "No, every website is built from scratch using the latest technology and we do not use Wordpress, Webflow or other similar website building tool. A website built from scratch is better in every way. It ensures perfect SEO and speed.",
      openPosition: open5,
      setOpenPosition: setOpen5,
    },
    {
      question: "Will you maintain our website for us?",
      answer:
        "We can help maintain your website, or you can do so yourself with the more minor changes. The choice is up to you. We provide on-going support for many of our clients but it is not mandatory. You can contact us as you require updates to your website and we will provide an hourly quote based on your requests.",
      openPosition: open6,
      setOpenPosition: setOpen6,
    },
    {
      question: "How much input do I have in the website design process?",
      answer:
        "A lot! Your input and feedback is crucial to this website design and development process. We’ll start with a lot of questions about your needs, your likes, your wants and work with you to develop just the right look and functionality. We also request you to provide sample websites before we begin your project. Remember this is your website and we need your help and direction as to your final vision. We’re a team and look forward to hearing your ideas.",
      openPosition: open7,
      setOpenPosition: setOpen7,
    },
    {
      question: "Who writes the text/content for the website?",
      answer:
        "We require that you provide all of the text content for your website. You are the expert on your business, so it’s always best if it comes from you. If you need  assistance, we have a copywriter on our team who can help clean up or write original content for you at an additional cost.",
      openPosition: open8,
      setOpenPosition: setOpen8,
    },
    {
      question: "What if I need help on my website down the road?",
      answer:
        "We are here to help you! You can contact us as you require updates to your website and we will provide an hourly quote based on your requests.",
      openPosition: open9,
      setOpenPosition: setOpen9,
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
