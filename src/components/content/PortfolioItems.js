import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Link from "../../Link";
import Image from "next/image";

const useStyles = makeStyles((theme) => ({
  post: {
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up("md")]: {
      marginBottom: 0,
    },
  },
  img: {
    maxWidth: 500,
    borderRadius: 0,
    border: "3px solid black",
  },
  bullet: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    color: theme.palette.text.hint,
  },
  name: {
    lineHeight: 1,
  },
}));

export default function Blog() {
  const classes = useStyles();

  const content = [
    {
      id: 0,
      image:
        "https://res.cloudinary.com/dpupj9evt/image/upload/v1628507061/ezgif.com-gif-maker_2_p2vsp9.webp",
      category: "ACCOUNTING",
      title: "Lonnarigo CPAs",
      url: "https://lonnarigocpa.vercel.app/",
    },
    {
      id: 1,
      image:
        "https://res.cloudinary.com/dpupj9evt/image/upload/v1628507060/ezgif.com-gif-maker_1_fnlpbw.webp",
      category: "CONSTRUCTION",
      title: "Kaiper Construction",
      url: "https://kaiperconstruction.vercel.app/",
    },
    {
      id: 2,
      image:
        "https://res.cloudinary.com/dpupj9evt/image/upload/v1628507052/ezgif.com-gif-maker_cwkfom.webp",
      category: "MEDICAL",
      title: "Farhad Dental Care",
      url: "https://farhaddental.vercel.app/",
    },
  ];

  return (
    <section className={classes.section}>
      <Container maxWidth="lg">
        <Box py={10}>
          <Grid container spacing={5} alignItems="center" justify="center">
            {content.map((obj) => (
              <Grid
                item
                xs={12}
                md={4}
                sm={6}
                className={classes.post}
                key={obj.id}
              >
                <Box className={classes.img}>
                  <Image
                    width={550}
                    height={350}
                    quality={100}
                    src={obj["image"]}
                    alt="portfolio piece image"
                  />
                </Box>
                <Box mt={2} mb={2}>
                  <Box mb={0}>
                    <Typography
                      variant="overline"
                      component="span"
                      color="primary"
                    >
                      {obj["category"]}
                    </Typography>
                  </Box>
                  <Link href={obj.url} target="_blank" color="inherit">
                    <Typography variant="h5" component="h2">
                      {obj["title"]}
                    </Typography>
                  </Link>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </section>
  );
}
