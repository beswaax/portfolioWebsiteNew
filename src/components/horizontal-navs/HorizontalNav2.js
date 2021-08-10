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
import {
  ButtonBase,
  Menu,
  Collapse,
  Typography,
  MenuItem,
  useTheme,
} from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

import { ExpandLess, ExpandMore } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: theme.palette.heavyBlue,
    zIndex: theme.zIndex.modal + 1,
    boxShadow: "none",
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
    color: theme.palette.grey[400],
    [theme.breakpoints.down("md")]: {
      marginRight: theme.spacing(3.5),
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    "&:hover": {
      color: [theme.palette.common.white],
      textDecoration: "none",
    },
  },
  linkDifferent: {
    marginRight: "auto",
    color: theme.palette.grey[400],
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    "&:hover": {
      color: [theme.palette.common.white],
      textDecoration: "none",
    },
  },
  linkSelectedDifferent: {
    marginRight: "auto",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    color: theme.palette.common.white,
    "&:hover": {
      color: [theme.palette.common.white],
      textDecoration: "none",
    },
  },
  linkSelected: {
    marginRight: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    color: theme.palette.common.white,
    "&:hover": {
      color: [theme.palette.common.white],
      textDecoration: "none",
    },
  },
  primaryAction: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  menuButton: {
    color: theme.palette.common.white,
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
    backgroundColor: theme.palette.common.white,
    boxShadow: "none",
    borderRadius: 0,
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
    },
  },
  calendlyListItem: {
    marginTop: "0.2rem",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    borderRadius: 0,
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.common.white,
    },
  },
  calendlyLink: {
    textDecoration: "none",
    fontWeight: 600,
    borderBottomRightRadius: 0,
    color: theme.palette.primary.dark,
    backgroundColor: theme.palette.common.white,
    "&:hover": {
      color: theme.palette.primary.dark,
      backgroundColor: theme.palette.grey[200],
      textDecoration: "none",
    },
    marginRight: theme.spacing(2),
    paddingTop: 9,
    paddingBottom: 9,
    paddingRight: 19,
    paddingLeft: 19,
    borderRadius: 0,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  listItemSmaller: {
    paddingLeft: "2rem",
    boxShadow: "none",
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
    },
    borderRadius: 1,
  },
  collapseContainer: {
    backgroundImage: [theme.palette.grey[200]],
  },
}));

export default function Navigation({ tabValue, setTabValue }) {
  const classes = useStyles();
  const router = useRouter();
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openCollapse, setOpenCollapse] = React.useState(false);
  const [state, setState] = React.useState({ open: false });

  const closeCollapseAndMenu = () => {
    setState({ open: !state.open });
    setOpenCollapse(!openCollapse);
  };

  function handleOpenSettings() {
    setOpenCollapse(!openCollapse);
  }

  const handleClickMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const content = {
    brand: { image: "/assets/logo2/vector/logo-single-white.svg", width: 160 },
    drawerBrand: "/assets/logo2/vector/logo-single.svg",
    link1: "Home",
    link2: "About",
    link3: "Services",
    link4: "Free Audit",
    link5: "Contact Us",
    link6: "Book a Call",
    link7: "Blog",
    link8: "Portfolio",
    servicesLinks: {
      link1: "Web Design & Development",
      link2: "E-Commerce",
      link3: "SEO Services",
    },
  };

  let brand;

  if (content.brand.image) {
    brand = (
      <img
        src={content.brand.image}
        alt="logo of RangoDev"
        width={content.brand.width}
      />
    );
  } else {
    brand = content.brand.text || "";
  }

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
    } else if (router.pathname === "/blog" && tabValue !== 2) {
      setTabValue(2);
    } else if (router.pathname === "/free-website-audit" && tabValue !== 3) {
      setTabValue(3);
    } else if (router.pathname === "/contact" && tabValue !== 4) {
      setTabValue(4);
    } else if (router.pathname === "/portfolio" && tabValue !== 5) {
      setTabValue(5);
    }
  }, [setTabValue, tabValue, router.pathname]);

  const StyledMenu = withStyles({
    paper: {
      backgroundColor: theme.palette.primary.dark,

      borderRadius: 0,
    },
  })((props) => (
    <Menu
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      {...props}
    />
  ));

  const StyledMenuItem = withStyles((theme) => ({
    root: {
      paddingLeft: 35,
      paddingRight: 35,
      paddingTop: 10,
      paddingBottom: 10,
      color: theme.palette.primary.light,
      fontWeight: 400,
      "&:hover": {
        backgroundColor: theme.palette.grey[200],
        color: theme.palette.primary.dark,

        "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
          // color: theme.palette.secondary.dark,
        },
      },
    },
  }))(MenuItem);

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
          variant="body1"
          className={tabValue === 0 ? classes.linkSelected : classes.link}
        >
          {content["link1"]}
        </Link>
        <Link
          href="/about"
          color="textPrimary"
          variant="body1"
          className={tabValue === 1 ? classes.linkSelected : classes.link}
        >
          {content["link2"]}
        </Link>

        {/* <Link
          href="/services"
          color="textPrimary"
          variant="body1"
          className={tabValue === 2 ? classes.linkSelected : classes.link}
        >
          {content["link3"]}
        </Link> */}
        <ButtonBase
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClickMenu}
          disableRipple
          disableTouchRipple
          variant="subtitle1"
          className={tabValue === 10 ? classes.linkSelected : classes.link}
        >
          <Typography className={classes.services}>
            {content["link3"]}
          </Typography>
        </ButtonBase>
        <StyledMenu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleCloseMenu}
        >
          <StyledMenuItem
            disableRipple
            disableTouchRipple
            onClick={handleCloseMenu}
            component={Link}
            href="/web-development"
            color="textPrimary"
            variant="subtitle1"
            className={classes.linkMenu}
          >
            {" "}
            {content.servicesLinks.link1}
          </StyledMenuItem>
          <StyledMenuItem
            disableRipple
            disableTouchRipple
            onClick={handleCloseMenu}
            component={Link}
            href="/ecommerce-development"
            color="textPrimary"
            variant="subtitle1"
            className={classes.linkMenu}
          >
            {content.servicesLinks.link2}
          </StyledMenuItem>
          <StyledMenuItem
            disableRipple
            component={Link}
            disableTouchRipple
            onClick={handleCloseMenu}
            href="/seo"
            color="textPrimary"
            variant="subtitle1"
            className={classes.linkMenu}
          >
            {content.servicesLinks.link3}
          </StyledMenuItem>
        </StyledMenu>
        <Link
          href="/portfolio"
          color="textPrimary"
          variant="body1"
          className={tabValue === 5 ? classes.linkSelected : classes.link}
        >
          {content["link8"]}
        </Link>
        <Link
          href="/blog"
          color="textPrimary"
          variant="body1"
          className={tabValue === 2 ? classes.linkSelected : classes.link}
        >
          {content["link7"]}
        </Link>

        <Link
          href="/free-website-audit"
          color="textPrimary"
          variant="body1"
          className={tabValue === 3 ? classes.linkSelected : classes.link}
        >
          {content["link4"]}
        </Link>

        <Link
          href="/contact"
          color="textPrimary"
          variant="body1"
          className={
            tabValue === 4
              ? classes.linkSelectedDifferent
              : classes.linkDifferent
          }
        >
          {content["link5"]}
        </Link>
        <Link
          href="https://calendly.com/rangojango/business-strategy-email"
          color="textPrimary"
          target="_blank"
          variant="body1"
          className={classes.calendlyLink}
        >
          {content["link6"]}
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
          >
            <Link
              href="/"
              color="primary"
              underline="none"
              variant="h5"
              className={classes.linkBrand}
            >
              <img
                src={content.drawerBrand}
                alt={"logo of RangoDev"}
                width={content.brand.width}
              />{" "}
            </Link>
          </Box>
          <List>
            <ListItem
              className={classes.listItem}
              disableRipple
              disableTouchRipple
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
              button
              key={content["link3"]}
              onClick={handleOpenSettings}
            >
              {" "}
              <ListItemText primary={content["link3"]} />
              {openCollapse ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse
              in={openCollapse}
              timeout="auto"
              unmountOnExit
              className={classes.collapseContainer}
            >
              <List
                component="div"
                disablePadding
                className={classes.collapseContainer}
              >
                <ListItem
                  className={classes.listItemSmaller}
                  disableRipple
                  disableTouchRipple
                  button
                  key={content.servicesLinks.link1}
                  component={Link}
                  href="/web-development"
                  onClick={closeCollapseAndMenu}
                >
                  <ListItemText primary={content.servicesLinks.link1} />
                </ListItem>{" "}
              </List>
              <List component="div" disablePadding>
                <ListItem
                  className={classes.listItemSmaller}
                  disableRipple
                  disableTouchRipple
                  button
                  key={content.servicesLinks.link2}
                  component={Link}
                  href="/ecommerce-development"
                  onClick={closeCollapseAndMenu}
                >
                  <ListItemText primary={content.servicesLinks.link2} />
                </ListItem>{" "}
              </List>{" "}
              <List component="div" disablePadding>
                <ListItem
                  className={classes.listItemSmaller}
                  disableRipple
                  disableTouchRipple
                  button
                  key={content.servicesLinks.link3}
                  component={Link}
                  href="/seo"
                  onClick={closeCollapseAndMenu}
                >
                  <ListItemText primary={content.servicesLinks.link3} />
                </ListItem>{" "}
              </List>{" "}
            </Collapse>

            <ListItem
              className={classes.listItem}
              disableRipple
              disableTouchRipple
              button
              key={content["link8"]}
              selected={tabValue === 5}
              component={Link}
              href="/portfolio"
              onClick={() => setState({ open: !state.open })}
            >
              <ListItemText primary={content["link8"]} />
            </ListItem>

            <ListItem
              className={classes.listItem}
              disableRipple
              disableTouchRipple
              button
              key={content["link7"]}
              selected={tabValue === 2}
              component={Link}
              href="/blog"
              onClick={() => setState({ open: !state.open })}
            >
              <ListItemText primary={content["link7"]} />
            </ListItem>
            <ListItem
              className={classes.listItem}
              disableRipple
              disableTouchRipple
              button
              key={content["link4"]}
              selected={tabValue === 3}
              component={Link}
              href="/free-website-audit"
              onClick={() => setState({ open: !state.open })}
            >
              <ListItemText primary={content["link4"]} />
            </ListItem>
            <ListItem
              className={classes.listItem}
              disableRipple
              disableTouchRipple
              button
              key={content["link5"]}
              selected={tabValue === 4}
              component={Link}
              href="/contact"
              onClick={() => setState({ open: !state.open })}
            >
              <ListItemText primary={content["link5"]} />
            </ListItem>

            <ListItem
              className={classes.calendlyListItem}
              disableRipple
              disableTouchRipple
              button
              key={content["link6"]}
              selected={tabValue === 9}
              component={Link}
              href="https://calendly.com/rangojango/business-strategy-email"
              target="_blank"
              onClick={() => setState({ open: !state.open })}
            >
              <ListItemText primary={content["link6"]} />
            </ListItem>
          </List>
        </div>
      </Drawer>
    </AppBar>
  );
}
