import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";

// import Overlay from "react-bootstrap/Overlay";
// import OverlayTrigger from "react-bootstrap/OverlayTrigger";
// import renderTooltip from "./tooltip.js";

import Section_1 from "./Section1";

class MyNavBar extends React.Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">
                        {/* <img
              alt="logo"
              src={"https://www.tutorhunt.com/images/logo.png"}
              width="320"
              height="70"
              className="d-inline-block align-center"
            /> */}
                        {"Online Tutor Finder"}
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#viewData">Home</Nav.Link>
                            <Nav.Link href="#viewData">For Sudentd</Nav.Link>
                            <Nav.Link href="#viewData">For Tutor</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>

                    {/* <OverlayTrigger
            placement="right-start"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip}
          > */}

                    <Navbar.Collapse className="justify-content-end">
                        <Form inline>
                            {/* <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              /> */}
                            <Button className="mr-4" variant="outline-success">
                                Login
                            </Button>
                            <Button className="mr-4" variant="outline-success">
                                Register
                            </Button>
                        </Form>
                    </Navbar.Collapse>
                    {/* </OverlayTrigger> */}
                </Navbar>

                <div>
                    <Section_1 />
                </div>
            </div>
        );
    }
}

export default MyNavBar;
