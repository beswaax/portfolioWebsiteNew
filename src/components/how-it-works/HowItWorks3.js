import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const useStyles = makeStyles((theme) => ({
  media: {
    height: "256px",
  },

  gridContainer: {
    backgroundColor: theme.palette.primary.main,
    border: "5px solid white",
    paddingBottom: 35,
    paddingTop: 20,
  },
  mainText: {
    fontWeight: 600,
    color: theme.palette.common.white,
  },
  specialText: {
    color: theme.palette.primary.main,
  },
  desc: {
    color: theme.palette.grey[200],
  },
  desc2: {
    color: theme.palette.grey[100],
    fontWeight: 300,
  },
  title: {
    color: theme.palette.grey[50],
    fontWeight: 600,
  },
  section: {
    backgroundColor: theme.palette.grey[200],
  },
  headerTitle: {
    fontWeight: 600,
  },
}));

export default function Portfolio() {
  const classes = useStyles();
  const [currentValue, setCurrentValue] = useState(0);

  const content = {
    header: "Hassle-free SEO Process  ",
    description:
      "Professional, dedicated, local. Dunder Mifflin is on its best patch to change the way you think about paper.",
    tab1: "On-Page",
    tab2: "Keywords",
    tab3: "Content",
    tab4: "Backlinks",
  };

  const allItems = [
    {
      id: 0,
      title: "We Identify and Correct Technical Website Errors",
      desc1:
        "Your website may contain critical errors that are causing your ranking to suffer.",
      desc2:
        "Our SEO experts in Vancouver perform a full website audit, examining over 200 factors to ensure that search engines can index and rank your site.",
      desc3:
        "The best part is that we'll show you how to get those errors fixed.",
    },
    {
      id: 1,
      title: "We Identify High-Value Keywords",
      desc1:
        "Keywords are the foundation of any successful SEO campaign; these are the exact words and phrases that your potential customers will use to find your website in search engines.",
      desc2:
        "Our SEO consultants in Vancouver delve into keyword data such as volume, keyword difficulty, competitive density, and more.",
    },
    {
      id: 2,
      title: "Site Content of High Quality",
      desc1:
        "One of the quickest ways to increase organic traffic is to create good content. It also adds value to all of your site visitors, including current customers.",
      desc2:
        "Our team of content specialists in Canada will create high-quality content that is tailored to the SEO campaign and your business objectives.",
    },
    {
      id: 3,
      title: "Backlinks === Oil",
      desc1:
        "Backlinks are, without a doubt, the most important aspect of any SEO campaign. And, unlike other SEO firms, we don't start acquiring backlinks until month four.",
      desc2:
        "Every month, we aggressively pursue high domain authority backlink opportunities and report on them. This way, you'll be able to see real results every month.",
    },
  ];

  const currentContent = allItems[currentValue];

  return (
    <section className={classes.section}>
      <Box pt={2} pb={10}>
        {/* <Container maxWidth="sm">
          <Box textAlign="center">
            <Typography
              variant="h4"
              component="h2"
              className={classes.headerTitle}
              gutterBottom={true}
              color="textPrimary"
            >
              {content["header"]}
            </Typography>
            <Typography
              variant="subtitle1"
              color="textSecondary"
              className={classes.headerText}
            >
              {content["description"]}
            </Typography>
          </Box>
        </Container> */}
        <Container style={{ maxWidth: "70rem" }}>
          <Box mt={4} mb={5}>
            <Tabs
              value={currentValue}
              indicatorColor="primary"
              textColor="textSecondary"
              orientation="horizontal"
              centered
            >
              <Tab
                disableRipple
                disableTouchRipple
                label={content["tab1"]}
                onClick={() => setCurrentValue(0)}
              />
              <Tab
                disableRipple
                disableTouchRipple
                label={content["tab2"]}
                onClick={() => setCurrentValue(1)}
              />
              <Tab
                disableRipple
                disableTouchRipple
                label={content["tab3"]}
                onClick={() => setCurrentValue(2)}
              />
              <Tab
                disableRipple
                disableTouchRipple
                label={content["tab4"]}
                onClick={() => setCurrentValue(3)}
              />
            </Tabs>
          </Box>
          <Box boxShadow={10}>
            <Grid container spacing={2} className={classes.gridContainer}>
              <Grid item xs={12}>
                <Box p={3} pb={4}>
                  <Typography
                    className={classes.mainText}
                    variant="h4"
                    component="h2"
                    align="left"
                    gutterBottom={true}
                  >
                    {currentContent.title}
                  </Typography>
                  <Typography
                    variant="h6"
                    align="left"
                    component="p"
                    className={classes.desc2}
                    paragraph={true}
                  >
                    {currentContent.desc1}
                  </Typography>
                  <Typography
                    variant="h6"
                    align="left"
                    component="p"
                    className={classes.desc2}
                    paragraph={currentContent.desc3 && true}
                  >
                    {currentContent.desc2}
                  </Typography>
                  {currentContent.desc3 ? (
                    <Typography
                      variant="h6"
                      align="left"
                      component="p"
                      className={classes.desc2}
                    >
                      {currentContent.desc3}
                    </Typography>
                  ) : null}
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </section>
  );
}
