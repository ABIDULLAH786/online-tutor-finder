import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";

// import { Button } from "react-bootstrap";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Header from "../components/header";
import Footer from "../components/footer";
import "../css/style.css";

export default function Login() {
  return (
    <>
      <Header />

      <div className="mb-5 mt-3" style={{ textDecoration: "none" }}>
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
      </div>
      <Footer />
    </>
  );
}
