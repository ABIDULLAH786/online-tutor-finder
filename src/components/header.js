import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";

// import Overlay from "react-bootstrap/Overlay";
// import OverlayTrigger from "react-bootstrap/OverlayTrigger";
// import renderTooltip from "./tooltip.js";

class MyNavBar extends React.Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Link to="/">
            <Navbar.Brand>{"Online Tutor Finder"}</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto ">
              <Link to="/" className="ml-5 mr-4">
                Home
              </Link>
              <Link to="/request-a-tutor" className="mr-4">
                Request A tutor
              </Link>
              <Link to="/become-a-tutor" className="mr-4">
                Become A Tutor
              </Link>
            </Nav>
          </Navbar.Collapse>

          <Navbar.Collapse className="justify-content-end">
            <Form inline>
              <Button className="mr-4" variant="outline-success">
                <Link to="/dashboard">Login</Link>
              </Button>
              <Button className="mr-4" variant="outline-success">
                <Link to="/dashboard">Register</Link>
              </Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default MyNavBar;
