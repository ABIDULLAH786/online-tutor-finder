import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";

// import { Button } from "react-bootstrap";
import Header from "../components/header";
import Footer from "../components/footer";
import "../css/style.css";

export default function Login() {
  return (
    <>
      <Header />
      <SignIn />
      {/* <div className="mb-5 mt-3" style={{ textDecoration: "none" }}>
        <h1 className="textCenter">login You Account</h1>
        <AccountCircleIcon style={{ fontSize: 250 }} />

        <Form className="offset-3 col-md-6 block-example border border-dark p-4 rounded  ">
          <Form.Group as={Row} controlId="formEmail">
            <Form.Label column md="3">
              Email
            </Form.Label>
            <Col>
              <Form.Control placeholder="Email" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formPassword">
            <Form.Label column md="3">
              Password
            </Form.Label>
            <Col>
              <Form.Control placeholder="Password" />
            </Col>
          </Form.Group>

          <Button variant="primary" type="submit" className="w-50 ">
            <Link to="/dashboard" className="whiteText">
              Login
            </Link>
          </Button>
        </Form>
      </div> */}
      <Footer />
    </>
  );
}






const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function SignIn() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs" className="mb-5 mt-2">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <AccountCircleIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            className="mt-3"
          />
         
          <Button
            type="submit"
            fullWidth
            color="primary"
            className="w-100 mt-4 mb-3"
          >
            Sign In
          </Button>
          
        </form>
      </div>
    </Container>
  );
}