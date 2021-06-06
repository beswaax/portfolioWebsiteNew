import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Toolbar from "@material-ui/core/Toolbar";
import Link from "../../Link";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import { useRouter } from "next/router";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: theme.palette.backgroundPage,
    zIndex: theme.zIndex.modal + 1,
    boxShadow: "none",
    borderBottom: "1px solid #cccccc",
  },
  toolbar: {
    minHeight: 70,
  },
  brand: {
    lineHeight: 1,
    marginRight: "auto",
  },
  link: {
    marginRight: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    "&:hover": {
      color: [theme.palette.primary.main],
      textDecoration: "none",
    },
  },
  linkSelected: {
    marginRight: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    color: [theme.palette.primary.main],
    "&:hover": {
      color: [theme.palette.primary.main],
      textDecoration: "none",
    },
  },
  primaryAction: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  menuButton: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  iconWrapper: {
    minWidth: 40,
  },
  icon: {
    color: theme.palette.text.hint,
  },
  drawerContainer: {
    paddingTop: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(3),
    width: 240,
  },
  listItem: {
    backgroundColor: "#FFFFFF",
    boxShadow: "none",
    borderRadius: 10,
  },
}));

export default function Navigation({ tabValue, setTabValue }) {
  const classes = useStyles();
  const router = useRouter();

  const content = {
    brand: { image: "/assets/vector/logo.svg", width: 200 },
    link1: "Home",
    link2: "About",
    link3: "Services",
    link4: "Contact Us",
  };

  let brand;

  if (content.brand.image) {
    brand = (
      <img
        src={content.brand.image}
        alt="logo of RangoJango"
        width={content.brand.width}
      />
    );
  } else {
    brand = content.brand.text || "";
  }

  const [state, setState] = React.useState({ open: false });

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, open });
  };

  useEffect(() => {
    if (router.pathname === "/" && tabValue !== 0) {
      setTabValue(0);
    } else if (router.pathname === "/about" && tabValue !== 1) {
      setTabValue(1);
    } else if (router.pathname === "/services" && tabValue !== 2) {
      setTabValue(2);
    } else if (router.pathname === "/contact" && tabValue !== 3) {
      setTabValue(3);
    }
  }, [setTabValue, tabValue, router.pathname]);

  return (
    <AppBar position="static" color="inherit" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Link
          href="/"
          color="primary"
          underline="none"
          variant="h5"
          className={classes.brand}
        >
          {brand}
        </Link>
        <Link
          href="/"
          color="textPrimary"
          variant="body2"
          className={tabValue === 0 ? classes.linkSelected : classes.link}
        >
          {content["link1"]}
        </Link>
        <Link
          href="/about"
          color="textPrimary"
          variant="body2"
          className={tabValue === 1 ? classes.linkSelected : classes.link}
        >
          {content["link2"]}
        </Link>
        <Link
          href="/services"
          color="textPrimary"
          variant="body2"
          className={tabValue === 2 ? classes.linkSelected : classes.link}
        >
          {content["link3"]}
        </Link>
        <Link
          href="/contact"
          color="textPrimary"
          variant="body2"
          className={tabValue === 3 ? classes.linkSelected : classes.link}
        >
          {content["link4"]}
        </Link>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          disableRipple
          disableTouchRipple
          className={classes.menuButton}
          onClick={toggleDrawer(!state.open)}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
      <Drawer anchor="left" open={state.open} onClose={toggleDrawer(false)}>
        <div className={classes.drawerContainer}>
          <Box
            mb={1}
            ml={2}
            pb={2}
            border={1}
            borderTop={0}
            borderLeft={0}
            borderRight={0}
            borderColor="#000000"
          >
            <Link
              href="/"
              color="primary"
              underline="none"
              variant="h5"
              className={classes.linkBrand}
            >
              {brand}
            </Link>
          </Box>
          <List>
            <ListItem
              className={classes.listItem}
              disableRipple
              disableTouchRipple
              disableFocusRipple
              button
              key={content["link1"]}
              selected={tabValue === 0}
              component={Link}
              href="/"
              onClick={() => setState({ open: !state.open })}
            >
              <ListItemText primary={content["link1"]} />
            </ListItem>
            <ListItem
              className={classes.listItem}
              disableRipple
              disableTouchRipple
              disableFocusRipple
              button
              key={content["link2"]}
              selected={tabValue === 1}
              component={Link}
              href="/about"
              onClick={() => setState({ open: !state.open })}
            >
              <ListItemText primary={content["link2"]} />
            </ListItem>
            <ListItem
              className={classes.listItem}
              disableRipple
              disableTouchRipple
              disableFocusRipple
              button
              key={content["link3"]}
              selected={tabValue === 2}
              component={Link}
              href="/services"
              onClick={() => setState({ open: !state.open })}
            >
              <ListItemText primary={content["link3"]} />
            </ListItem>
            <ListItem
              className={classes.listItem}
              disableRipple
              disableTouchRipple
              disableFocusRipple
              button
              key={content["link4"]}
              selected={tabValue === 3}
              component={Link}
              href="/contact"
              onClick={() => setState({ open: !state.open })}
            >
              <ListItemText primary={content["link4"]} />
            </ListItem>
          </List>
        </div>
      </Drawer>
    </AppBar>
  );
}
