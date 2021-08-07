import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Link from "../../Link";

const useStyles = makeStyles((theme) => ({
  post: {
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up("md")]: {
      marginBottom: 0,
    },
  },
  img: {
    maxWidth: "100%",
    borderRadius: theme.shape.borderRadius,
  },
  bullet: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    color: theme.palette.text.hint,
  },
  name: {
    lineHeight: 1,
  },
  section: {},
}));

export default function Blog() {
  const classes = useStyles();

  const content = {
    image1:
      "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?ixlib=rb-1.2.1&auto=format&fit=crop&w=960&q=80",
    category1: "Website",
    date1: "March 23, 2021",
    title1: "How much does a website cost for a small business in 2021?",
    desc1:
      "I've rolled up my sleeves and done some research for you on what it will cost to build (or redesign) a small business website in 2021.",
    name1: "Samuel Clintoc",
    job1: "Web Developer",
    avatar1:
      "https://res.cloudinary.com/dpupj9evt/image/upload/v1628348917/download_axdgc6.jpg",
    image2:
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=960&q=80",
    category2: "Website",
    date2: "July 16, 2021",
    title2: "What is a landing page? How can I create one?",
    desc2:
      "What is the landing page used for and why do you need one? In this article I cover everything related to the landing page.",
    name2: "Samuel Clintoc",
    job2: "Web Developer",
    avatar2:
      "https://res.cloudinary.com/dpupj9evt/image/upload/v1628348917/download_axdgc6.jpg",
  };

  return (
    <section className={classes.section}>
      <Container maxWidth="lg">
        <Box py={10}>
          <Grid container spacing={5} alignItems="center" justify="center">
            <Grid item xs={12} md={4} className={classes.post}>
              <img src={content["image1"]} alt="" className={classes.img} />
              <Box mt={2} mb={2}>
                <Box mb={1}>
                  <Typography
                    variant="overline"
                    component="span"
                    color="primary"
                  >
                    {content["category1"]}
                  </Typography>
                  <span className={classes.bullet}>•</span>
                  <Typography
                    variant="overline"
                    component="span"
                    color="textSecondary"
                  >
                    {content["date1"]}
                  </Typography>
                </Box>
                <Link href="/blog/website-cost-small-business" color="inherit">
                  <Typography variant="h5" component="h2">
                    {content["title1"]}
                  </Typography>
                </Link>
              </Box>
              <Typography
                variant="subtitle1"
                paragraph={true}
                color="textSecondary"
              >
                {content["desc1"]}
              </Typography>
              <Box mt={3} display="flex" alignItems="center">
                <Avatar alt="" src={content["avatar1"]} />
                <Box ml={2} textAlign="left">
                  <Typography
                    variant="subtitle1"
                    component="h2"
                    className={classes.name}
                  >
                    {content["name1"]}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    component="h3"
                    color="textSecondary"
                  >
                    {content["job1"]}
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={4} className={classes.post}>
              <img src={content["image2"]} alt="" className={classes.img} />
              <Box mt={2} mb={2}>
                <Box mb={1}>
                  <Typography
                    variant="overline"
                    component="span"
                    color="primary"
                  >
                    {content["category2"]}
                  </Typography>
                  <span className={classes.bullet}>•</span>
                  <Typography
                    variant="overline"
                    component="span"
                    color="textSecondary"
                  >
                    {content["date2"]}
                  </Typography>
                </Box>
                <Link href="/blog/landing-page" color="inherit">
                  <Typography variant="h5" component="h2">
                    {content["title2"]}
                  </Typography>
                </Link>
              </Box>
              <Typography
                variant="subtitle1"
                paragraph={true}
                color="textSecondary"
              >
                {content["desc2"]}
              </Typography>
              <Box mt={3} display="flex" alignItems="center">
                <Avatar alt="" src={content["avatar2"]} />
                <Box ml={2} textAlign="left">
                  <Typography
                    variant="subtitle1"
                    component="h2"
                    className={classes.name}
                  >
                    {content["name2"]}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    component="h3"
                    color="textSecondary"
                  >
                    {content["job2"]}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
          {/* <Box mt={6} textAlign="center">
            <Button variant="outlined" color="primary">
              {content["primary-action"]}
            </Button>
          </Box> */}
        </Box>
      </Container>
    </section>
  );
}
