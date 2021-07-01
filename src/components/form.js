import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import React from "react";
import "../css/style.css";

export default class MyForm extends React.Component {
    render() {
        return (
            <>
                <Form className="offset-3 col-md-6 ">
                    <h1 className="textCenter">Register Your Selfe</h1>
                    <Form.Group as={Row} controlId="formFirstName">
                        <Form.Label column md="3">
                            First Name
                        </Form.Label>
                        <Col>
                            <Form.Control placeholder="First Name" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formLastName">
                        <Form.Label column md="3">
                            Last name
                        </Form.Label>
                        <Col>
                            <Form.Control placeholder="Last Name" />
                        </Col>
                    </Form.Group>

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

                    <Form.Group as={Row} controlId="formPhone">
                        <Form.Label column md="3">
                            Phone Number
                        </Form.Label>
                        <Col>
                            <Form.Control placeholder="+923XXXXXXXXX" />
                        </Col>
                    </Form.Group>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control />
                        </Form.Group>

                        

                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control />
                        </Form.Group>
                    </Form.Row>

                   
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                ;
            </>
        );
    }
}
