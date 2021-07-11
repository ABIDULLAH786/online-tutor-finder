import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import UiLink from "@material-ui/core/Link";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { mainListItems, secondaryListItems } from "./StdListItems";

import { Card, Button, Form , Col} from 'react-bootstrap'
import { green } from '@material-ui/core/colors';
import Icon from '@material-ui/core/Icon';
import AddIcon from '@material-ui/icons/Add';

import { BrowserRouter as Router, Route, Link, useRouteMatch } from "react-router-dom";


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex"
  },
  toolbar: {
    paddingRight: 24 // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 36
  },
  menuButtonHidden: {
    display: "none"
  },
  title: {
    flexGrow: 1
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9)
    }
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto"
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column"
  },
  fixedHeight: {
    height: 650
  }
}));

export default function Dashboard() {
  let match = useRouteMatch();
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <>
      {/* <Header /> */}

      <div className={classes.root}>

        <CssBaseline />
        <AppBar
          position="absolute"
          className={clsx(classes.appBar, open && classes.appBarShift)}
        >
          <Toolbar className={classes.toolbar}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              className={clsx(
                classes.menuButton,
                open && classes.menuButtonHidden
              )}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              className={classes.title}
            >
              Subjects
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          classes={{
            paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose)
          }}
          open={open}
        >
          <div className={classes.toolbarIcon}>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <List>{mainListItems}</List>
          <Divider />
          <List>{secondaryListItems}</List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="lg" className={classes.container}>
            <Grid container spacing={3}>
              {/* Profile */}
              <Grid item xs={12} md={12} lg={20} >
                <Paper className={fixedHeightPaper}>
                  <Subject />
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </main>
      </div>
    </>
  );
}



function Subject() {
  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title>My Subjects  </Card.Title>
          <Card.Text>
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="mt-5">
        <Card.Body >
          <button class="btn btn-primary d-block mb-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
            <Card.Title>Add Subjects <AddIcon style={{ color: green[500] }} /> </Card.Title>
          </button>


          <div class="collapse p-2" id="collapseExample" >
            <Card.Text>

              <div>
                Select the Course you want to enroll and Click the submit button.
                <AddSubject />
              </div>
            </Card.Text>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

function AddSubject() {
  return (
    <>
      <Form className="mt-4">
        {/* <Form.Row >
          <Form.Group as={Col} controlId="formFirstName" className="mb-4">
            <Form.Label>First Name</Form.Label>
            <Form.Control placeholder="First Name" />
          </Form.Group>

          <Form.Group as={Col} controlId="formLastName" className="mb-4">
            <Form.Label>First Name</Form.Label>
            <Form.Control placeholder="Last Name" />
          </Form.Group>
        </Form.Row> */}

        {/* <Form.Row>
          <Form.Group as={Col} controlId="formEmail" className="mb-4">
            <Form.Label>Email</Form.Label>
            <Form.Control placeholder="Email" />
          </Form.Group>

          <Form.Group as={Col} controlId="formPassword" className="mb-4">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
        </Form.Row> */}

        {/* <Form.Row>
          <Form.Group as={Col} controlId="formPhone" className="mb-4">
            <Form.Label>Phone</Form.Label>

            <Form.Control placeholder="+923XXXXXXXXX" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Address</Form.Label>
            <Form.Control type="textarea" />
          </Form.Group>
        </Form.Row> */}
        <Form.Row className="mb-4">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Gender</Form.Label>
            <Form.Control as="select" placeholder="Select Subject">
              <option>Web Engineering</option>
              <option>Back-End</option>
              <option>Front-End</option>
              <option>Full Stack Developer</option>
              <option>Visual Programming</option>
              <option>Operating System</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Tutor</Form.Label>
            <Form.Control as="select" placeholder="Select Subject">
              <option>Tutor</option>
              <option>KD</option>
              <option>Javed Abbasi</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>

        <Button variant="primary" type="submit" className="offset-3 w-50">
          Submit
        </Button>
      </Form>
    </>
  );
}