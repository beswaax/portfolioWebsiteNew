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

  const content = {
    title: "FAQ",
    subtitle:
      "Here are some of our most frequently asked questions and answers.",
  };

  const teamData = [
    {
      question: "What results can I expect?",
      answer:
        "If your website is brand new and has no organic traffic, it will take 10-12 months to establish an organic presence and begin receiving traffic and leads. If you already have a site with organic traffic, we can usually guarantee a massive increase in traffic within the first 2-4 months!",
      openPosition: open1,
      setOpenPosition: setOpen1,
    },
    {
      question: "Are results guaranteed?",
      answer:
        "While SEO isn't an exact science, we can guarantee results. The amount of competition, the number of search queries, and the overall quality of your business all play a role in how high your site ranks on Google. While each situation is unique, we guarantee a significant and measurable increase in your search engine ranking and traffic.",
      openPosition: open2,
      setOpenPosition: setOpen2,
    },
    {
      question: "How long do I need to do SEO?",
      answer:
        "All SEO contracts require a 6-month minimum commitment. SEO isn't a one-time investment. To maintain a high volume of traffic and a solid ranking, it requires monthly input. While the degree to which we approach it and the budget with which we do so may vary, SEO work will always be required in order to establish and grow your online presence.",
      openPosition: open3,
      setOpenPosition: setOpen3,
    },
    {
      question: "Will you be able to outperform other SEO firms?",
      answer:
        "There are some excellent SEO firms out there, but far too many fail to deliver and take advantage of their customers. We are dedicated to being the most open and honest SEO firm you've ever worked with.",
      openPosition: open4,
      setOpenPosition: setOpen4,
    },
  ];

  return (
    <>
      <Box py={15}>
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
